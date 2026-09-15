import { readFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();
const tsconfig = JSON.parse(await readFile(join(root, "tsconfig.json"), "utf8"));
const paths = tsconfig?.compilerOptions?.paths ?? {};

const expectedAliases = {
  "@/lib/all-guides": "./lib/all-guides-live.ts",
  "@/lib/guide-groups": "./lib/guide-groups-live.ts",
  "@/lib/guide-silo": "./lib/guide-silo-live.ts",
  "@/lib/guide-supplemental-links": "./lib/guide-supplemental-links-live.ts",
  "@/lib/price-guide-links": "./lib/price-guide-links-live.ts",
};

for (const [alias, expected] of Object.entries(expectedAliases)) {
  const configured = paths?.[alias]?.[0];
  if (configured !== expected) {
    console.error(`${alias} must resolve to ${expected}; found ${configured ?? "<missing>"}.`);
    process.exit(1);
  }
}

const registrySource = await readFile(join(root, "lib", "all-guides-live.ts"), "utf8");
if (!registrySource.includes('from "./all-guides-sanitaer-trades"') || !registrySource.includes('from "./all-guides-kellerbau"')) {
  console.error("all-guides-live.ts must merge both legacy and expanded guide registries.");
  process.exit(1);
}

const groupsSource = await readFile(join(root, "lib", "guide-groups-live.ts"), "utf8");
if (!groupsSource.includes('from "./guide-groups-sanitaer-trades"') || !groupsSource.includes('from "./guide-groups-kellerbau"')) {
  console.error("guide-groups-live.ts must merge both legacy and expanded guide directories.");
  process.exit(1);
}

const siloSource = await readFile(join(root, "lib", "guide-silo-live.ts"), "utf8");
if (!siloSource.includes('from "./guide-silo-sanitaer-trades"') || !siloSource.includes('from "./guide-silo-kellerbau"')) {
  console.error("guide-silo-live.ts must route across both legacy and expanded silo branches.");
  process.exit(1);
}

const supplementalSource = await readFile(join(root, "lib", "guide-supplemental-links-live.ts"), "utf8");
if (!supplementalSource.includes('from "./guide-supplemental-links-daemmung-expansion"') || !supplementalSource.includes('from "./guides-terrace-cover"')) {
  console.error("guide-supplemental-links-live.ts must extend the legacy supplemental chain with expanded guide peers.");
  process.exit(1);
}

const priceGuideSource = await readFile(join(root, "lib", "price-guide-links-live.ts"), "utf8");
if (!priceGuideSource.includes('from "./price-guide-links-abriss-expansion"') || !priceGuideSource.includes('from "./price-guide-links-kellerbau"')) {
  console.error("price-guide-links-live.ts must route across both legacy and expanded price-guide branches.");
  process.exit(1);
}

const decisionRegistrations = [
  ["all-guides-garage.ts", "guide-fertiggarage-massivgarage-vergleich"],
  ["all-guides-kellerbau.ts", "guide-fertigkeller-massivkeller-vergleich"],
  ["all-guides-pool.ts", "guide-gfk-betonpool-vergleich"],
  ["all-guides-terrace-cover.ts", "guide-terrassendach-glas-kunststoff-vergleich"],
  ["all-guides-wintergarten.ts", "guide-kalt-wohnwintergarten-vergleich"],
];

for (const [fileName, expectedImport] of decisionRegistrations) {
  const source = await readFile(join(root, "lib", fileName), "utf8");
  if (!source.includes(expectedImport)) {
    console.error(`${fileName} must register decision guide ${expectedImport}.`);
    process.exit(1);
  }
}

const decisionSiloImports = [
  "guide-fertiggarage-massivgarage-vergleich",
  "guide-fertigkeller-massivkeller-vergleich",
  "guide-gfk-betonpool-vergleich",
  "guide-terrassendach-glas-kunststoff-vergleich",
  "guide-kalt-wohnwintergarten-vergleich",
];
for (const expectedImport of decisionSiloImports) {
  if (!siloSource.includes(expectedImport)) {
    console.error(`guide-silo-live.ts must route decision guide ${expectedImport}.`);
    process.exit(1);
  }
}

const supplementalDecisionImports = [
  "guide-fertigkeller-massivkeller-vergleich",
  "guide-gfk-betonpool-vergleich",
  "guide-terrassendach-glas-kunststoff-vergleich",
  "guide-kalt-wohnwintergarten-vergleich",
];
for (const expectedImport of supplementalDecisionImports) {
  if (!supplementalSource.includes(expectedImport)) {
    console.error(`guide-supplemental-links-live.ts must expose decision guide ${expectedImport} to peer links.`);
    process.exit(1);
  }
}

const garageSupplementalSource = await readFile(join(root, "lib", "guide-supplemental-links-carport-expansion.ts"), "utf8");
if (!garageSupplementalSource.includes("fertiggarage-oder-massivgarage-kosten")) {
  console.error("Garage supplemental links must expose the Fertiggarage-vs-Massivgarage decision guide.");
  process.exit(1);
}

const directoryPage = await readFile(join(root, "app", "ratgeber", "page.tsx"), "utf8");
if (!directoryPage.includes('from "@/lib/all-guides"') || !directoryPage.includes('from "@/lib/guide-groups"')) {
  console.error("app/ratgeber/page.tsx must consume the live all-guides and guide-groups aliases.");
  process.exit(1);
}
if (directoryPage.includes("guide-groups-sanitaer-trades") || directoryPage.includes("guide-groups-kellerbau")) {
  console.error("app/ratgeber/page.tsx must not bypass the live guide-groups alias.");
  process.exit(1);
}

const detailPage = await readFile(join(root, "app", "ratgeber", "[slug]", "page.tsx"), "utf8");
const requiredDetailImports = [
  'from "@/lib/all-guides"',
  'from "@/lib/guide-silo"',
  'from "@/lib/guide-supplemental-links"',
];
for (const requiredImport of requiredDetailImports) {
  if (!detailPage.includes(requiredImport)) {
    console.error(`app/ratgeber/[slug]/page.tsx is missing live entrypoint import ${requiredImport}.`);
    process.exit(1);
  }
}

console.log("Live guide entrypoints OK: registry, directory, silo, supplemental links, price-guide mappings and decision-guide registrations all use merged production paths.");
