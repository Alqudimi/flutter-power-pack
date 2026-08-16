import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
const ids = manifest.extensionPack ?? [];
const normalized = ids.map((id) => id.toLowerCase());
const duplicates = normalized.filter((id, index) => normalized.indexOf(id) !== index);

if (!manifest.name || !manifest.version || !manifest.publisher || !manifest.engines?.vscode) {
  throw new Error("package.json is missing required extension metadata");
}
if (ids.length === 0 || duplicates.length > 0) {
  throw new Error(`extensionPack must be non-empty and unique; duplicates: ${duplicates.join(", ")}`);
}
if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) {
  throw new Error(`Invalid semantic version: ${manifest.version}`);
}

const response = await fetch(
  "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery?api-version=7.2-preview.1",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json;api-version=7.2-preview.1",
    },
    body: JSON.stringify({
      filters: ids.map((id) => ({ criteria: [{ filterType: 7, value: id }] })),
      assetTypes: [],
      flags: 914,
    }),
  },
);
if (!response.ok) {
  throw new Error(`Marketplace query failed with HTTP ${response.status}`);
}

const payload = await response.json();
const available = new Set();
for (const result of payload.results ?? []) {
  for (const extension of result.extensions ?? []) {
    const publisher = extension.publisher?.publisherName;
    const name = extension.extensionName;
    if (publisher && name) available.add(`${publisher}.${name}`.toLowerCase());
  }
}

const missing = ids.filter((id) => !available.has(id.toLowerCase()));
if (missing.length > 0) {
  throw new Error(`Marketplace IDs not found: ${missing.join(", ")}`);
}

console.log(`Manifest valid: ${ids.length} unique Marketplace extension IDs available.`);
