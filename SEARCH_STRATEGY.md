# Search strategy (v2.3, Sep 2026)

Goal: never miss relevant Malta roles in IT Audit, Internal Audit, External Audit and GRC & ISO.

## Lessons learned
- Title-only searches miss roles. Search **by employer** as well.
- Job-board aggregators are dominated by a few recruiters; diversify sources.
- LinkedIn's personalised feed is not publicly searchable: use user screenshots.
- Employer career sites and ATS boards (Greenhouse, Teamtailor) are indexed and give direct links.
- Always check age: drop or flag postings older than ~2 months.

## Query families (append "Malta")
- IT audit: IT auditor, IS auditor, GITC, ITGC, SOC 1/2, ISAE 3402, CISA, technology risk, IT assurance, SOX
- Internal audit: internal audit officer / analyst / manager / head of, IIA, CIA
- External audit: audit junior / senior / manager / associate, ACCA, IFRS, statutory audit
- GRC & ISO: GRC, ICT governance, ICT risk, DORA, NIS2, MiCA, EU AI Act, CRA, operational resilience, third-party risk, ISO 27001 / 22301 / 42001, information security, CISO, technical compliance, regulatory compliance, MLRO, business continuity

## Employer watchlist (search "<name> careers Malta")
- iGaming: Betsson, Kindred/Unibet, Evolution, LeoVegas, Play North, Yggdrasil, Playtech, Entain, Flutter, SkyBet, Kaizen, Videoslots, Rank, 888
- Fintech / payments / crypto: Rakuten Viber, Multitude, Shift4, Crypto.com, Nexo, Bitpanda, Papaya, Paysafe, Revolut, Wise, Foris DAX
- Banks / insurance: Lombard Bank, BOV, HSBC Malta, APS, Bank of Valletta, MAPFRE, Atlas, GasanMamo
- Big 4 / mid-tier: Deloitte, KPMG, PwC, EY, BDO, Forvis Mazars, Grant Thornton, Crowe, RSM, DFK, GCB, UHY, CSB
- Regulators / public: MFSA, MGA, FIAU, CBM, MITA, Malta Enterprise
- Recruiters: Konnekt, JobMatchingPartner, iTalent PLUS, GRS, Broadwing, Pentasia, Castille, Archer IT, Accelerate

## Boards
konnekt.com, jobmatchingpartner.com, italentplus.teamtailor.com, jobsinmalta.com, keepmeposted.com.mt, jobhound.mt, muovo.eu, findajob.mt, jobsplus.gov.mt, jobs.accaglobal.com, wearedevelopers.com, swooped.co, mt.linkedin.com/jobs

## v2.1 additions (second LinkedIn screenshot)
- **Re-check every employer already on the board** each refresh. A new Vista "Senior Internal Auditor" was missed because only the older "Internal Auditor" was tracked.
- **ISO / management-systems employers:** Luke Desira, STEP Enterprises, Certification Malta, BSI, TUV, SGS, Bureau Veritas, DNV, NQA, Kiwa. Titles: ISO Advisor & Auditor, ISO Systems Advisor, ISO Compliance Manager, Lead Auditor, Quality / Management Systems Auditor.
- **Non-finance sectors:** aviation (Vista Global, Luqa), shipping, pharma, telecoms, public sector (recruitment.gov.mt, MITA).
- **Direct ATS pages that index well:** careers.ey.com (Msida), careers-vistaglobal.icims.com, job-boards.greenhouse.io/betsson, betssongroup.com/careers/available-jobs.
- **Seniority variants:** Officer, Analyst, Associate, Senior, Manager, Head of.
- **Screenshots with cut-off titles:** ask the user for the title rather than guessing.

## v2.2 additions (iGaming technical-compliance / ISMS gap, Sep 2026)
**Why these roles were missed** (LeoVegas, Kaizen, Evolution, Superbet, Heroix "Tech Compliance Analyst"):
1. **Wrong category.** Technical-compliance roles are filed under *Legal & Compliance* (Betsson lists them under "Legal"), not IT or Audit. IT-audit-style queries never surface them.
2. **Employer groups, not employers.** The v2 checklist only required one search per watchlist *group*. LeoVegas and Kaizen were on the list but were never swept individually.
3. **Title variants.** "Tech Compliance Analyst" (abbreviated), "Technical Compliance Specialist", "Compliance Assurance Officer", "Senior Gaming Compliance Specialist" did not match the queries used.
4. **Source gaps.** Careerjet blocks automated fetches; Built In, startup.jobs and the jobboardly mirrors (anyreality.jobboardly.com carries LeoVegas, Kaizen and Betway) were not used; Jobhound's Legal & Compliance catalogue was not scanned.
5. **Employer gaps.** Superbet, Betway/Super Group, Evolution, Videoslots, Greentube and BettingJobs (an iGaming recruiter) were not on the watchlist.

**Rules added**
- Sweep *Legal & Compliance* catalogues as well as IT/Audit: `jobhound.mt/jobs/catalog/legal-and-compliance-jobs-in-malta`, jobsinmalta compliance, konnekt compliance.
- Add these title variants to the GRC & ISO family: Tech / Technical Compliance Analyst, Specialist, Officer, Manager; Compliance Assurance; Gaming Compliance; Game / RNG certification; Security Governance Specialist; ISMS Manager; Vendor / Third-Party Risk; Game Integrity.
- **Per-employer ATS sweep** every refresh for iGaming: LeoVegas, Kaizen (Betano), Betsson (job-boards.greenhouse.io/betsson, Legal department), Evolution, Superbet (job-boards.eu.greenhouse.io/superbet), Betway/Super Group, Videoslots, Greentube, Yggdrasil, Playtech, Entain, Flutter.
- Extra sources: builtin.com, startup.jobs, anyreality.jobboardly.com, jobhound.mt catalogues. Treat Careerjet snippets (and AI summaries that cite them) as **leads only**: verify on the employer/ATS page before adding.
- Recruiters: add BettingJobs (Sliema), Hireroo / TalentXD (merged iGaming recruiters), Betting Connections, Bet On Talent, Nordic Jobs Worldwide, R77 Global, VacancyCentre, Crossroads Recruitment to the recruiter list and the board filter.
- **Careerjet via Nimble:** `nimble_search` with `include_domains=["careerjet.com.mt"]` works (run sequentially, echo the `conversation_id`); `nimble_extract` on Careerjet is blocked. Query families: technical compliance, compliance igaming, information security / ISMS / GRC, ICT risk analyst, compliance consultant. Snapshot ages are unreliable (e.g. MFSA ICT-risk analyst ads shown as "1 month" had expired in June/July): **verify every lead on the employer, recruiter or ATS page**.
- Regulator-side technical compliance roles (e.g. Heroix "Tech Compliance Analyst - iGaming": review of third-party audit outputs, system audits) are IT-audit-adjacent: keep them on the board.
- Stale check: drop or skip postings older than ~2 months (e.g. Manpower's Senior Technical Compliance Analyst, Apr-May 2026, was skipped).

## v2.3 additions (Sep 2026: Lufthansa Technik Malta + Premier Capital misses)
**Missed roles:** Lufthansa Technik Malta "Governance, Compliance and Grants Specialist - Finance Department" (Luqa) and Premier Capital (McDonald's licencee) "Information Security Officer" (Marsa). Both employers were already on the 250-employer target list (#224, #247) but that list was never used as a search input.

**Why they were missed**
1. **Target list not operationalised.** `Targeted_Searches` (250 Malta employers) sat in the project files; the watchlist above only covered ~70 names in sectors already searched. Lufthansa Technik and Premier Capital were on neither.
2. **Title-first, not employer-first.** Neither ad is indexed by web search (a LinkedIn-only ad; the Premier Capital one is a personal feed post by the Director of IT, not a job-board listing).
3. **Vocabulary gaps.** "Grants" / "Funding" / "Governance ... Finance Department" titles; roles hidden inside Finance, Legal or IT departments of non-finance employers (aviation, food retail/QSR, shipping, manufacturing).
4. **Sector blind spot.** Large non-financial employers (MRO, retail, QSR, manufacturing) have their own compliance, security and governance staff.

**Rules**
- **Sweep all 250 employers** in `data/targeted-employers.tsv` every refresh: `"<company> careers Malta"` plus one role-family query (compliance / governance / information security / risk / audit). Log employers swept, even when nothing is found. `node scripts/employer-coverage.js` (runs on build) reports how many have a listing.
- **Tier the list:** Tier 1 (sweep every refresh): plcs, banks, insurers, telecoms, utilities, airports/aviation, iGaming, group HQs (#1-32, #87, #199-250). Tier 2 (every second refresh): retail, distribution, manufacturing (#33-198).
- **New vocabulary:** grants, funding, EU funds, governance specialist, finance compliance, financial controls, internal control, risk & controls, information security officer, security officer, ISMS, data protection officer, quality & compliance, regulatory affairs.
- **Department sweep:** for each employer look at Finance, Legal, IT and Quality/Safety vacancies, not only jobs titled audit/compliance.
- **Feed posts count:** LinkedIn posts by hiring managers ("We're hiring...") are vacancies. Search `"<employer> hiring <role>"` and ask for screenshots.
- **Never mark an employer "clear" without a logged sweep.**

## No double listings (rule added Sep 2026)
- Before adding any role, search `src/App.jsx` for the same employer. A re-titled or reposted role (e.g. Betsson "Technical Compliance Manager - Italy" vs "Technical Compliance Officer - Italy") is **one** listing: update the existing entry, keep the direct employer/ATS link, and do not add a second.
- Same role seen on several sources (LinkedIn, agency, employer site) = one entry; prefer the employer or ATS link.
- Screenshots often show the same job twice (e.g. once "Viewed", once promoted): add once.
- `npm run build` runs `scripts/check-duplicates.js`: it **fails** on same company + title, and **warns** on same-company similar titles and shared job URLs. Review every warning by hand.

## Per-refresh checklist
1. Ask for LinkedIn feed screenshots and add every relevant role.
2. Sweep the 250-employer list (`data/targeted-employers.tsv`), re-check every employer already on the board, then run every query family above; run at least one search per watchlist employer group.
3. Check for duplicates against existing entries, then verify each posting (title, employer, location, date, still open); record a direct URL.
4. Set `added` to today so the red dot shows; update `LAST_UPDATED`.
5. `CI=true npm run build`, push to `main`, confirm the Vercel deployment is READY.
