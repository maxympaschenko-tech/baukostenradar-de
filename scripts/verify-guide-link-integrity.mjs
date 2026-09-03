import { readdir, readFile } from "node:fs/promises";
import { basename, join, relative } from "node:path";
import process from "node:process";

const root = process.cwd();
const libRoot = join(root, "lib");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(?:ts|tsx)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(libRoot);
const guideSlugs = new Set();
const references = new Map();

for (const file of files) {
  const source = await readFile(file, "utf8");
  const short = relative(root, file);

  // Guide-definition modules consistently contain sections, FAQs and related
  // links. This avoids treating group/link configuration objects as real
  // guides while still supporting both hand-written guides and config-driven
  // guide factories.
  const isGuideDefinitionModule =
    source.includes("sections:") && source.includes("faqs:") && source.includes("related:");

  if (isGuideDefinitionModule) {
    for (const match of source.matchAll(/\bslug:\s*["']([a-z0-9-]+)["']/g)) {
      guideSlugs.add(match[1]);
    }
  }

  for (const match of source.matchAll(/\/ratgeber\/([a-z0-9-]+)/g)) {
    const slug = match[1];
    if (!references.has(slug)) references.set(slug, new Set());
    references.get(slug).add(short);
  }
}

const missing = [...references.entries()]
  .filter(([slug]) => !guideSlugs.has(slug))
  .sort(([a], [b]) => a.localeCompare(b));

if (missing.length) {
  console.error(`Found ${missing.length} internal Ratgeber link target(s) without a guide definition:`);
  for (const [slug, sourceFiles] of missing) {
    console.error(`- /ratgeber/${slug}`);
    for (const file of [...sourceFiles].sort()) console.error(`    referenced by ${file}`);
  }
  process.exit(1);
}

console.log(`Guide link integrity OK: ${guideSlugs.size} guide slugs cover ${references.size} internal Ratgeber targets.`);
