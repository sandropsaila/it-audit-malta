// Coverage report: which employers from data/targeted-employers.tsv (250 Malta
// employers) currently have a listing on the board. Informational only (never fails).
// Run: node scripts/employer-coverage.js  (also runs before every build)
// Purpose: the board must not rely on job-title searches alone. Every employer
// on the list must be swept individually each refresh (see SEARCH_STRATEGY.md v2.3).
const fs = require("fs");
const src = fs.readFileSync("src/App.jsx", "utf8");
const start = src.indexOf("const JOBS = [");
const block = src.slice(start, src.indexOf("\n];", start)).toLowerCase();
const clean = (n) =>
  n.toLowerCase().replace(/\(.*?\)/g, " ").replace(/p\.l\.c\.?|plc|ltd|limited|group|holdings?|malta/g, " ")
    .replace(/[^a-z0-9& ]/g, " ").replace(/\s+/g, " ").trim();
const rows = fs.readFileSync("data/targeted-employers.tsv", "utf8").split("\n").slice(1).filter(Boolean)
  .map((l) => l.split("\t")).map(([n, name, site]) => ({ n, name, key: clean(name) }));
const hit = rows.filter((r) => r.key.length > 3 && block.includes(r.key));
console.log(`Employer coverage: ${hit.length}/${rows.length} targeted employers have a listing on the board.`);
console.log("Sweep ALL " + rows.length + " each refresh; employers with no listing are not 'clear' until swept and logged.");
