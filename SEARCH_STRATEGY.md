# Search strategy (v2, Sep 2026)

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

## Per-refresh checklist
1. Ask for LinkedIn feed screenshots and add every relevant role.
2. Run every query family above; run at least one search per watchlist employer group.
3. Verify each posting (title, employer, location, date, still open); record a direct URL.
4. Set `added` to today so the red dot shows; update `LAST_UPDATED`.
5. `CI=true npm run build`, push to `main`, confirm the Vercel deployment is READY.
