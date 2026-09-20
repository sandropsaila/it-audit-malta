// Duplicate guard for the JOBS array in src/App.jsx.
// FAIL (exit 1): same URL, or same normalised company + title.
// WARN (exit 0): same company with overlapping title words (possible re-titled repost).
const fs = require("fs");
const src = fs.readFileSync("src/App.jsx", "utf8");
const start = src.indexOf("const JOBS = [");
const end = src.indexOf("\n];", start);
const block = src.slice(start, end);

const jobs = [];
const re = /category:\s*"([^"]*)",\s*title:\s*"([^"]*)",\s*company:\s*"([^"]*)"[\s\S]*?url:\s*(?:"([^"]*)"|null)/g;
let m;
while ((m = re.exec(block))) jobs.push({ category: m[1], title: m[2], company: m[3], url: m[4] || null });

const norm = (t) => t.toLowerCase().replace(/[–—-]/g, " ").replace(/&/g, "and").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
const co = (c) => norm(c.replace(/\(.*?\)/g, " ")).replace(/\b(ltd|plc|limited|group|malta|official|via .*)\b/g, "").replace(/\s+/g, " ").trim();
const STOP = new Set(["the","and","of","for","a","officer","manager","senior","junior","associate","analyst","executive","consultant","head"]);
const words = (t) => new Set(norm(t).split(" ").filter((w) => w && !STOP.has(w)));

const errors = [], warns = [];
const seenUrl = new Map(), seenKey = new Map();
jobs.forEach((j, i) => {
  const key = co(j.company) + "|" + norm(j.title);
  if (seenKey.has(key)) errors.push(`DUPLICATE title+company: "${j.title}" @ ${j.company} (entries ${seenKey.get(key) + 1} and ${i + 1})`);
  else seenKey.set(key, i);
  if (j.url && !j.url.includes("linkedin.com/jobs/search")) {
    if (seenUrl.has(j.url)) {
      // Generic listing pages (no numeric id) are legitimately shared; a specific job URL shared by two entries is suspicious.
      if (/\d{5,}/.test(j.url)) warns.push(`SAME JOB URL: ${j.url} (entries ${seenUrl.get(j.url) + 1} and ${i + 1})`);
    } else seenUrl.set(j.url, i);
  }
});
for (let a = 0; a < jobs.length; a++) for (let b = a + 1; b < jobs.length; b++) {
  if (co(jobs[a].company) !== co(jobs[b].company)) continue;
  if (norm(jobs[a].title) === norm(jobs[b].title)) continue;
  const wa = words(jobs[a].title), wb = words(jobs[b].title);
  const shared = [...wa].filter((w) => wb.has(w));
  if (shared.length && shared.length >= Math.min(wa.size, wb.size)) warns.push(`POSSIBLE REPOST: "${jobs[a].title}" vs "${jobs[b].title}" @ ${jobs[a].company}`);
}
console.log(`Checked ${jobs.length} jobs.`);
warns.forEach((w) => console.warn("WARN  " + w));
errors.forEach((e) => console.error("ERROR " + e));
process.exit(errors.length ? 1 : 0);
