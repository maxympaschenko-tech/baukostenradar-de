import { access, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = process.cwd();
const duplicatesOnly = process.argv.includes("--duplicates-only");
const registryFile = join(root, "lib", "all-guides.ts");

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

function getDeprecatedCatalogSlugs(source) {
  const match = source.match(/const\s+deprecatedCatalogGuideSlugs\s*=\s*new\s+Set\s*\(\s*\[([\s\S]*?)\]\s*\)/);
  if (!match) return new Set();

  return new Set([...match[1].matchAll(/["']([a-z0-9-]+)["']/g)].map((item) => item[1]));
}

const registrySource = await readFile(registryFile, "utf8");
const deprecatedCatalogGuideSlugs = getDeprecatedCatalogSlugs(registrySource);
const files = await collectReachableFiles(registryFile);
const guideDefinitions = new Map();
const references = new Map();

for (const file of files) {
  const source = await readFile(file, "utf8");
  const short = relative(root, file);

  // Only modules reachable from lib/all-guides.ts are part of the live guide
  // registry. This intentionally ignores old standalone guide files that are
  // no longer imported anywhere but may still remain in the repository.
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
  .filter(([slug, sourceFiles]) => sourceFiles.length > 1 && !deprecatedCatalogGuideSlugs.has(slug))
  .sort(([a], [b]) => a.localeCompare(b));

if (duplicateDefinitions.length) {
  console.error(`Found ${duplicateDefinitions.length} duplicate active Ratgeber slug definition(s):`);
  for (const [slug, sourceFiles] of duplicateDefinitions) {
    console.error(`- /ratgeber/${slug}`);
    for (const file of sourceFiles.sort()) console.error(`    defined in ${file}`);
  }
  process.exit(1);
}

const guideSlugs = new Set(guideDefinitions.keys());

if (duplicatesOnly) {
  console.log(
    `Guide slug integrity OK: ${guideSlugs.size} active guide slugs across ${files.length} reachable modules; no duplicate active definitions found.`,
  );
  process.exit(0);
}

const missing = [...references.entries()]
  .filter(([slug]) => !guideSlugs.has(slug))
  .sort(([a], [b]) => a.localeCompare(b));

if (missing.length) {
  console.error(`Found ${missing.length} active internal Ratgeber link target(s) without a guide definition:`);
  for (const [slug, sourceFiles] of missing) {
    console.error(`- /ratgeber/${slug}`);
    for (const file of [...sourceFiles].sort()) console.error(`    referenced by ${file}`);
  }
  process.exit(1);
}

console.log(
  `Guide integrity OK: ${guideSlugs.size} active guide slugs cover ${references.size} active internal Ratgeber targets; no duplicate active definitions found.`,
);
