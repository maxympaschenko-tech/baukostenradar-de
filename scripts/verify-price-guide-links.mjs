import { access, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = process.cwd();

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function resolveConfiguredAlias(alias, fallback) {
  const tsconfig = JSON.parse(await readFile(join(root, "tsconfig.json"), "utf8"));
  const configured = tsconfig?.compilerOptions?.paths?.[alias]?.[0];
  const target = configured ?? fallback;
  const normalized = target.replace(/^\.\//, "");
  const candidates = [
    resolve(root, normalized),
    resolve(root, `${normalized}.ts`),
    resolve(root, `${normalized}.tsx`),
  ];

  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }

  throw new Error(`Configured ${alias} target does not exist: ${target}`);
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

function getSetSlugs(source, setName) {
  const escapedName = setName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `const\\s+${escapedName}\\s*=\\s*new\\s+Set\\s*\\(\\s*\\[([\\s\\S]*?)\\]\\s*\\)`,
  );
  const match = source.match(pattern);
  if (!match) return new Set();

  return new Set([...match[1].matchAll(/["']([a-z0-9-]+)["']/g)].map((item) => item[1]));
}

const productionConsumers = [
  join(root, "app", "kosten", "[slug]", "page.tsx"),
  join(root, "app", "kosten", "[slug]", "leistung", "[item]", "page.tsx"),
];

for (const file of productionConsumers) {
  const source = await readFile(file, "utf8");
  if (!source.includes('from "@/lib/price-guide-links"') && !source.includes("from '@/lib/price-guide-links'")) {
    console.error(`${relative(root, file)} must consume the configured @/lib/price-guide-links entrypoint.`);
    process.exit(1);
  }
}

const priceGuideEntry = await resolveConfiguredAlias("@/lib/price-guide-links", "./lib/price-guide-links.ts");
const guideRegistry = await resolveConfiguredAlias("@/lib/all-guides", "./lib/all-guides.ts");
const priceGuideFiles = await collectReachableFiles(priceGuideEntry);
const guideFiles = await collectReachableFiles(guideRegistry);
const guideRegistrySource = await readFile(guideRegistry, "utf8");
const redirectedLegacyGuideSlugs = getSetSlugs(guideRegistrySource, "redirectedLegacyGuideSlugs");

const guideDefinitions = new Set();
for (const file of guideFiles) {
  const source = await readFile(file, "utf8");
  const isGuideDefinitionModule =
    source.includes("sections:") && source.includes("faqs:") && source.includes("related:");

  if (!isGuideDefinitionModule) continue;
  for (const match of source.matchAll(/\bslug:\s*["']([a-z0-9-]+)["']/g)) {
    guideDefinitions.add(match[1]);
  }
}

const nextConfigSource = await readFile(join(root, "next.config.ts"), "utf8");
const configuredRatgeberRedirects = new Set(
  [...nextConfigSource.matchAll(/source:\s*["']\/ratgeber\/([a-z0-9-]+)["']/g)].map((match) => match[1]),
);

const priceGuideReferences = new Map();
for (const file of priceGuideFiles) {
  const source = await readFile(file, "utf8");
  const short = relative(root, file);

  for (const match of source.matchAll(/\/ratgeber\/([a-z0-9-]+)/g)) {
    const slug = match[1];
    if (!priceGuideReferences.has(slug)) priceGuideReferences.set(slug, new Set());
    priceGuideReferences.get(slug).add(short);
  }
}

const brokenReferences = [...priceGuideReferences.entries()]
  .filter(([slug]) =>
    !guideDefinitions.has(slug)
    && !redirectedLegacyGuideSlugs.has(slug)
    && !configuredRatgeberRedirects.has(slug),
  )
  .sort(([a], [b]) => a.localeCompare(b));

if (brokenReferences.length) {
  console.error(`Found ${brokenReferences.length} price-guide Ratgeber target(s) without an active guide or redirect:`);
  for (const [slug, sourceFiles] of brokenReferences) {
    console.error(`- /ratgeber/${slug}`);
    for (const file of [...sourceFiles].sort()) console.error(`    referenced by ${file}`);
  }
  process.exit(1);
}

console.log(
  `Price-guide integrity OK for ${relative(root, priceGuideEntry)}: ${priceGuideReferences.size} Ratgeber targets across ${priceGuideFiles.length} reachable mapping modules all resolve to an active guide or redirect.`,
);
