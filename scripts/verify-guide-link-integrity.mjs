import { access, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const duplicatesOnly = process.argv.includes("--duplicates-only");

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function resolveImport(fromFile, specifier) {
  let base;

  if (specifier.startsWith("@/lib/")) {
    base = join(root, specifier.slice(2));
  } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
    base = resolve(dirname(fromFile), specifier);
  } else {
    return null;
  }

  const candidates = [base, `${base}.ts`, `${base}.tsx`, join(base, "index.ts"), join(base, "index.tsx")];
  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }

  return null;
}

async function resolveActiveGuideRegistry() {
  const tsconfig = JSON.parse(await readFile(join(root, "tsconfig.json"), "utf8"));
  const configured = tsconfig?.compilerOptions?.paths?.["@/lib/all-guides"]?.[0];
  if (!configured) return join(root, "lib", "all-guides.ts");

  const normalized = configured.replace(/^\.\//, "");
  const candidates = [
    resolve(root, normalized),
    resolve(root, `${normalized}.ts`),
    resolve(root, `${normalized}.tsx`),
  ];

  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }

  throw new Error(`Configured @/lib/all-guides target does not exist: ${configured}`);
}

async function collectReachableFiles(entryFile) {
  const queue = [entryFile];
  const visited = new Set();

  while (queue.length) {
    const file = queue.shift();
    if (!file || visited.has(file)) continue;
    visited.add(file);

    const source = await readFile(file, "utf8");
    const imports = [...source.matchAll(/\bfrom\s*["']([^"']+)["']/g)].map((match) => match[1]);

    for (const specifier of imports) {
      const importedFile = await resolveImport(file, specifier);
      if (importedFile && !visited.has(importedFile)) queue.push(importedFile);
    }
  }

  return [...visited];
}

function getSetSlugs(source, setName) {
  const escapedName = setName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `const\\s+${escapedName}\\s*=\\s*new\\s+Set\\s*\\(\\s*\\[([\\s\\S]*?)\\]\\s*\\)`,
  );
  const match = source.match(pattern);
  if (!match) return new Set();

  return new Set([...match[1].matchAll(/["']([a-z0-9-]+)["']/g)].map((item) => item[1]));
}

const registryFile = await resolveActiveGuideRegistry();
const registrySource = await readFile(registryFile, "utf8");
const files = await collectReachableFiles(registryFile);
const redirectedLegacyGuideSlugs = getSetSlugs(registrySource, "redirectedLegacyGuideSlugs");
const runtimeDedupesSlugs =
  registrySource.includes("guidesBySlug.has(") && registrySource.includes("guidesBySlug.set(");

const nextConfigSource = await readFile(join(root, "next.config.ts"), "utf8");
const configuredRatgeberRedirects = new Set(
  [...nextConfigSource.matchAll(/source:\s*["']\/ratgeber\/([a-z0-9-]+)["']/g)].map((match) => match[1]),
);

const unprotectedLegacySlugs = [...redirectedLegacyGuideSlugs].filter(
  (slug) => !configuredRatgeberRedirects.has(slug),
);

if (unprotectedLegacySlugs.length) {
  console.error("Active guide registry filters legacy slug(s) without a matching Ratgeber redirect:");
  for (const slug of unprotectedLegacySlugs.sort()) console.error(`- /ratgeber/${slug}`);
  process.exit(1);
}

const guideDefinitions = new Map();
const references = new Map();

for (const file of files) {
  const source = await readFile(file, "utf8");
  const short = relative(root, file);
  const isGuideDefinitionModule =
    source.includes("sections:") && source.includes("faqs:") && source.includes("related:");

  if (isGuideDefinitionModule) {
    for (const match of source.matchAll(/\bslug:\s*["']([a-z0-9-]+)["']/g)) {
      const slug = match[1];
      if (!guideDefinitions.has(slug)) guideDefinitions.set(slug, []);
      guideDefinitions.get(slug).push(short);
    }
  }

  for (const match of source.matchAll(/\/ratgeber\/([a-z0-9-]+)/g)) {
    const slug = match[1];
    if (!references.has(slug)) references.set(slug, new Set());
    references.get(slug).add(short);
  }
}

const duplicateDefinitions = [...guideDefinitions.entries()]
  .filter(([slug, sourceFiles]) => sourceFiles.length > 1 && !redirectedLegacyGuideSlugs.has(slug))
  .sort(([a], [b]) => a.localeCompare(b));

if (duplicateDefinitions.length && !runtimeDedupesSlugs) {
  console.error(`Found ${duplicateDefinitions.length} duplicate active Ratgeber slug definition(s):`);
  for (const [slug, sourceFiles] of duplicateDefinitions) {
    console.error(`- /ratgeber/${slug}`);
    for (const file of sourceFiles.sort()) console.error(`    defined in ${file}`);
  }
  process.exit(1);
}

const activeGuideSlugs = new Set(
  [...guideDefinitions.keys()].filter((slug) => !redirectedLegacyGuideSlugs.has(slug)),
);

if (duplicatesOnly) {
  const dedupeNote = duplicateDefinitions.length
    ? `; ${duplicateDefinitions.length} duplicate source definition(s) are neutralized by the active first-wins registry`
    : "; no duplicate source definitions found";
  console.log(
    `Guide slug integrity OK: ${activeGuideSlugs.size} active guide slugs across ${files.length} reachable modules${dedupeNote}.`,
  );
  process.exit(0);
}

const brokenReferences = [...references.entries()]
  .filter(([slug]) => !activeGuideSlugs.has(slug) && !redirectedLegacyGuideSlugs.has(slug))
  .sort(([a], [b]) => a.localeCompare(b));

if (brokenReferences.length) {
  console.error(`Found ${brokenReferences.length} internal Ratgeber link target(s) without an active guide or redirect:`);
  for (const [slug, sourceFiles] of brokenReferences) {
    console.error(`- /ratgeber/${slug}`);
    for (const file of [...sourceFiles].sort()) console.error(`    referenced by ${file}`);
  }
  process.exit(1);
}

const legacyReferences = [...references.entries()]
  .filter(([slug]) => redirectedLegacyGuideSlugs.has(slug))
  .sort(([a], [b]) => a.localeCompare(b));

if (legacyReferences.length) {
  console.warn(
    `Guide integrity warning: ${legacyReferences.length} redirected legacy Ratgeber target(s) still appear in reachable source modules. They resolve by 301, but direct-link cleanup is recommended.`,
  );
  for (const [slug, sourceFiles] of legacyReferences) {
    console.warn(`- /ratgeber/${slug}`);
    for (const file of [...sourceFiles].sort()) console.warn(`    referenced by ${file}`);
  }
}

const registryLabel = relative(root, registryFile);
const duplicateNote = duplicateDefinitions.length
  ? ` Runtime first-wins dedupe neutralizes ${duplicateDefinitions.length} duplicate source definition(s).`
  : "";
console.log(
  `Guide integrity OK for ${registryLabel}: ${activeGuideSlugs.size} active guide slugs cover ${references.size} reachable Ratgeber targets; all filtered legacy slugs have redirects.${duplicateNote}`,
);
