# Search strategy (v2.2, Sep 2026)

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
- Recruiters: add BettingJobs (Sliema) to the recruiter list and the filter.
- Stale check: drop or skip postings older than ~2 months (e.g. Manpower's Senior Technical Compliance Analyst, Apr-May 2026, was skipped).

## No double listings (rule added Sep 2026)
- Before adding any role, search `src/App.jsx` for the same employer. A re-titled or reposted role (e.g. Betsson "Technical Compliance Manager - Italy" vs "Technical Compliance Officer - Italy") is **one** listing: update the existing entry, keep the direct employer/ATS link, and do not add a second.
- Same role seen on several sources (LinkedIn, agency, employer site) = one entry; prefer the employer or ATS link.
- Screenshots often show the same job twice (e.g. once "Viewed", once promoted): add once.
- `npm run build` runs `scripts/check-duplicates.js`: it **fails** on same company + title, and **warns** on same-company similar titles and shared job URLs. Review every warning by hand.

## Per-refresh checklist
1. Ask for LinkedIn feed screenshots and add every relevant role.
2. Re-check every employer already on the board, then run every query family above; run at least one search per watchlist employer group.
3. Check for duplicates against existing entries, then verify each posting (title, employer, location, date, still open); record a direct URL.
4. Set `added` to today so the red dot shows; update `LAST_UPDATED`.
5. `CI=true npm run build`, push to `main`, confirm the Vercel deployment is READY.
