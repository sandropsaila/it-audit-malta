import { useState } from "react";

const LAST_UPDATED = "21 April 2026";

const JOBS = [
  // ── IT AUDIT ──────────────────────────────────────────────────────────────
  {
    category: "IT Audit",
    title: "IT Audit – Risk Advisory (Senior IT Auditor)",
    company: "Deloitte Malta",
    location: "Birkirkara, Malta",
    type: "Full-time",
    salary: null,
    posted: "Active",
    description:
      "Senior IT Auditor in the Risk Advisory team. Responsible for IT audit activities including general IT control assessments, application control reviews, security reviews and data analytics. Develop risk-based IT audit programmes and conduct GITC/ITAC testing for clients in iGaming, financial services and hospitality.",
    skills: ["GITC", "ITAC", "Risk Assessment", "Data Analytics", "Security Reviews", "Deloitte Methodology"],
    source: "LinkedIn",
    url: "https://mt.linkedin.com/jobs/view/it-audit-risk-advisory-at-deloitte-3755956991",
  },
  {
    category: "IT Audit",
    title: "IT Auditor",
    company: "Forvis Mazars Malta",
    location: "Malta",
    type: "Full-time",
    salary: null,
    posted: "Active",
    description:
      "Part of the IT specialists' team within the Advisory service line. Conduct IT audit activities including general IT control reviews, IT application controls audits, and data analytics in support of financial and internal audit engagements. Key clients in iGaming, insurance and financial services.",
    skills: ["GITC", "IT Application Controls", "Data Analytics", "Risk Assessment", "iGaming", "Financial Services"],
    source: "Forvis Mazars",
    url: "https://forvismazars.com/mt/en/join-us/job-offers/it-auditor",
  },
  {
    category: "IT Audit",
    title: "IT Internal Auditor",
    company: "SpotOn Connections (Financial Services client)",
    location: "Msida, Malta",
    type: "Full-time",
    salary: "€45,000 – €55,000/yr",
    posted: "Recent",
    description:
      "Reporting to the Head of Internal Audit, perform independent reviews and audits of IT areas using a risk-based methodology. Responsibilities include reviewing IT infrastructure, security, business continuity, policies, processes and third-party risks. CISA or equivalent required.",
    skills: ["CISA", "IT Infrastructure", "Business Continuity", "Risk-Based Auditing", "Banking", "Third-Party Risk"],
    source: "LinkedIn",
    url: "https://mt.linkedin.com/jobs/it-auditor-jobs",
  },
  {
    category: "IT Audit",
    title: "IT Risk Manager",
    company: "Confidential – Financial Services",
    location: "Msida, Malta",
    type: "Full-time",
    salary: null,
    posted: "3 weeks ago",
    description:
      "IT Risk Manager role within a financial services firm. Manage IT risk frameworks, conduct technology risk assessments and report to senior management on risk posture and control effectiveness.",
    skills: ["IT Risk", "Risk Frameworks", "Technology Risk", "Governance", "Regulatory Reporting"],
    source: "LinkedIn",
    url: "https://mt.linkedin.com/jobs/internal-audit-jobs",
  },
  {
    category: "IT Audit",
    title: "Risk Advisory – Accounting & Internal Controls Manager",
    company: "Deloitte Malta",
    location: "Birkirkara, Malta",
    type: "Full-time",
    salary: null,
    posted: "3 weeks ago",
    description:
      "Manager-level position in Deloitte Malta's Strategy, Risk & Transactions Advisory team. Focus on internal audit co-sourcing, accounting controls, SOX compliance, and regulatory advisory across gaming, financial services and hospitality sectors.",
    skills: ["Internal Controls", "SOX", "Risk Advisory", "Internal Audit", "MFSA Regulations", "iGaming"],
    source: "LinkedIn",
    url: "https://mt.linkedin.com/jobs/internal-audit-jobs",
  },

  // ── INTERNAL AUDIT ────────────────────────────────────────────────────────
  {
    category: "Internal Audit",
    title: "Internal Auditor",
    company: "Malta Financial Services Authority (MFSA)",
    location: "Malta (Hybrid)",
    type: "Full-time",
    salary: "Grade 10",
    posted: "Nov 2025",
    description:
      "Internal Audit function established under Article 12B of the MFSA Act. Responsible for audit planning, execution and reporting across MFSA's operations. Requires NQF Level 6 qualification in Accounting/Finance/Auditing and a minimum of 3 years' audit experience.",
    skills: ["Internal Audit", "Risk Management", "MFSA Act", "Audit Planning", "Regulatory", "Finance"],
    source: "MFSA Careers",
    url: "https://careers.mfsa.mt/jobs/83803/internal-auditor",
  },
  {
    category: "Internal Audit",
    title: "Senior Internal Auditor",
    company: "Malta Financial Services Authority (MFSA)",
    location: "Malta (Hybrid)",
    type: "Indefinite",
    salary: "Grade 9",
    posted: "Oct 2025",
    description:
      "Senior role within MFSA's Internal Audit function. Requires continuous development of audit standards, best practices and techniques. Minimum 5 years' audit experience or 10 years' relevant experience without formal qualification.",
    skills: ["Internal Audit", "Audit Standards", "Risk", "Best Practices", "Financial Services", "Regulatory"],
    source: "MFSA Careers",
    url: "https://careers.mfsa.mt/jobs/82887/senior-internal-auditor",
  },
  {
    category: "Internal Audit",
    title: "Internal Auditor",
    company: "Vista Global (Private Aviation)",
    location: "Malta International Airport, Hybrid",
    type: "Full-time (Permanent)",
    salary: null,
    posted: "Active",
    description:
      "Experienced internal auditor for Vista's in-house Internal Audit function. Support the business in building sound internal controls, advise on business process development and test correct application. Vista is the global leader in private aviation.",
    skills: ["Internal Controls", "Business Process Review", "Risk Management", "Aviation", "Assurance", "Advisory"],
    source: "Vista Global Careers",
    url: "https://careers-vistaglobal.icims.com/jobs/4837/internal-auditor/job",
  },
  {
    category: "Internal Audit",
    title: "Internal Auditor",
    company: "BDO Malta",
    location: "Msida, Malta",
    type: "Full-time",
    salary: null,
    posted: "Active",
    description:
      "Vacancy within BDO Malta's Internal Audit Department. Perform individual internal audit projects as part of agreed audit plans, develop audit scope, execute audit procedures and prepare reports. Covers functional and operating units across regulated industries. Apply to recruitment@bdo.com.mt.",
    skills: ["Internal Audit", "Audit Scope", "Regulated Industries", "Reporting", "Risk", "Controls"],
    source: "BDO Malta",
    url: "https://www.bdo.com.mt/en-gb/careers/careers-at-bdo-malta/internal-auditor",
  },
  {
    category: "Internal Audit",
    title: "Internal Auditor – Crypto / Fintech (MiCA)",
    company: "Aqovia / Fintech firm",
    location: "Malta (Hybrid)",
    type: "Full-time",
    salary: "€60,000 – €80,000/yr",
    posted: "Active",
    description:
      "Plan and execute internal audits under MiCA and EMI frameworks for a Malta-based CASP/fintech. Evaluate compliance, identify operational risks and prepare reports for CEO and regulatory bodies. Requires 5–7 years' experience with strong MiCA and AML knowledge.",
    skills: ["MiCA", "AML", "CASP", "EMI", "CIA/CPA/CISA", "Crypto Compliance", "Internal Audit"],
    source: "LinkedIn",
    url: "https://mt.linkedin.com/jobs/internal-audit-jobs",
  },
  {
    category: "Internal Audit",
    title: "Independent Internal Auditor",
    company: "Malta Stock Exchange",
    location: "Malta",
    type: "Outsourced / Contract",
    salary: null,
    posted: "2025 (Jobsplus #97/2025)",
    description:
      "The Malta Stock Exchange is outsourcing its Internal Audit function. The appointee will report to the Audit Committee, assist in developing and executing the internal audit plan, and evaluate the effectiveness of governance, risk management and control processes.",
    skills: ["Internal Audit", "Governance", "Risk Management", "Audit Committee", "Financial Services", "Controls"],
    source: "Jobsplus",
    url: "https://jobsplus.gov.mt",
  },

  // ── AUDIT (GENERAL / EXTERNAL) ────────────────────────────────────────────
  {
    category: "External Audit",
    title: "Auditor",
    company: "AIMS International Malta",
    location: "Malta",
    type: "Full-time",
    salary: "€40,000 – €43,000/yr",
    posted: "Active (expires ~47 days)",
    description:
      "Audit role at AIMS International Malta listed on Jobsinmalta.com and Jobhound.mt. Intermediate level (1–3 years experience). Responsibilities include audit planning, client liaison and execution of audit engagements to applicable standards.",
    skills: ["Audit", "Client Liaison", "Financial Statements", "ACCA", "IFRS", "Risk Assessment"],
    source: "Jobhound.mt / Jobsinmalta",
    url: "https://jobhound.mt/jobs/auditor-9706",
  },
  {
    category: "External Audit",
    title: "Auditor – Senior Level",
    company: "Heroix / Confidential",
    location: "Malta",
    type: "Full-time",
    salary: "€90,000 – €100,000/yr",
    posted: "Active (expires ~12 days)",
    description:
      "Senior management audit position advertised via Heroix on Jobsinmalta.com. High-seniority role with an exceptional salary band for Malta, likely a Head of Audit or Partner-equivalent position.",
    skills: ["External Audit", "Senior Management", "Audit Leadership", "Client Management", "Financial Services"],
    source: "Jobsinmalta",
    url: "https://jobsinmalta.com/audit-jobs",
  },
  {
    category: "External Audit",
    title: "Auditor – Entry Level",
    company: "Konnekt (client confidential)",
    location: "Malta",
    type: "Full-time",
    salary: "€22,000 – €40,000/yr",
    posted: "Active (expires ~28 days)",
    description:
      "Entry-level audit vacancy placed by Konnekt on Jobsinmalta.com. Suitable for ACCA students or recent graduates. Wide salary band reflects range of possible roles across different audit firms in Malta.",
    skills: ["Audit", "ACCA", "Financial Statements", "GAPSME", "IFRS", "Teamwork"],
    source: "Jobsinmalta",
    url: "https://jobsinmalta.com/audit-jobs",
  },
  {
    category: "External Audit",
    title: "Audit Associate",
    company: "GCB Malta Ltd",
    location: "Malta",
    type: "Full-time",
    salary: null,
    posted: "Active",
    description:
      "GCB Malta Ltd is a reputable audit firm specialising in SMEs. The Audit Associate will manage a client portfolio, lead audit planning and execution, prepare financial statements per IFRS, conduct risk assessments and ensure regulatory compliance. ACCA candidates given priority.",
    skills: ["Audit Planning", "IFRS", "SME Clients", "Risk Assessment", "ACCA", "MS Excel", "Regulatory Compliance"],
    source: "Keepmeposted",
    url: "https://keepmeposted.com.mt/jobs/GCB-Malta-Ltd-Audit-Associate-KMP-97002",
  },
  {
    category: "External Audit",
    title: "Senior Auditor",
    company: "DFK Malta",
    location: "Malta",
    type: "Full-time",
    salary: null,
    posted: "Active",
    description:
      "DFK Malta is a medium-sized multi-disciplinary firm seeking a Senior Auditor. Coordinate audit engagements from planning to completion, interact with client management, delegate to junior staff and prepare financial statements following GAPSME and IFRS.",
    skills: ["Audit", "GAPSME", "IFRS", "Client Management", "Team Leadership", "Financial Statements"],
    source: "Keepmeposted",
    url: "https://keepmeposted.com.mt",
  },
  {
    category: "External Audit",
    title: "Junior Auditor",
    company: "Broadwing",
    location: "San Gwann, Malta",
    type: "Full-time",
    salary: "€20,000 – €25,000/yr",
    posted: "Jan 2026",
    description:
      "Entry-level auditor at Broadwing in San Gwann covering advisory, auditing and financial services. Ideal for ACCA students with strong attention to detail and MS Office proficiency.",
    skills: ["Audit", "ACCA", "Microsoft Office", "Finance", "Attention to Detail", "Teamwork"],
    source: "Muovo.eu",
    url: "https://muovo.eu/",
  },
  {
    category: "External Audit",
    title: "Semi-Senior Auditor",
    company: "Broadwing",
    location: "San Gwann, Malta",
    type: "Full-time",
    salary: null,
    posted: "Jan 2026",
    description:
      "Mid-level audit role at Broadwing. Requires knowledge of GAPSME and IFRS. Responsible for preparing and reviewing financial statements, maintaining audit documentation and client liaison in financial services.",
    skills: ["GAPSME", "IFRS", "Financial Statements", "Audit Documentation", "ACCA", "Client Liaison"],
    source: "Muovo.eu",
    url: "https://muovo.eu/",
  },
  {
    category: "External Audit",
    title: "EY Malta – Assurance & Audit (Multiple Levels)",
    company: "EY Malta",
    location: "Malta",
    type: "Full-time",
    salary: null,
    posted: "Ongoing",
    description:
      "EY Malta's Assurance Department is hiring across all levels. Responsibilities include managing audit strategies, executing complex audit procedures, using state-of-the-art diagnostic tools, coaching team members and developing long-term client relationships.",
    skills: ["Assurance", "Audit Strategy", "Risk Diagnostics", "Client Management", "IT Controls", "IFRS"],
    source: "EY Careers",
    url: "https://www.ey.com/en_mt/careers/careers-ey-malta",
  },
  {
    category: "External Audit",
    title: "IT Audit Role (findajob.mt listing)",
    company: "Confidential",
    location: "Malta",
    type: "Full-time",
    salary: null,
    posted: "Active",
    description:
      "findajob.mt currently lists 1 active IT Audit vacancy and 6 Auditing vacancies. Roles require skills including ACCA, IFRS, audit, and financial statement preparation. Visit findajob.mt for the full listing.",
    skills: ["IT Audit", "ACCA", "IFRS", "Audit", "Financial Statements", "Compliance"],
    source: "Findajob.mt",
    url: "https://findajob.mt/jobs/sectors/it-software/",
  },
];

const CATEGORIES = ["All", "IT Audit", "Internal Audit", "External Audit"];
const ALL_SOURCES = [
  "All",
  ...new Set(JOBS.map((j) => j.source)),
];

const CAT_COLORS = {
  "IT Audit":       { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.35)", text: "#60a5fa" },
  "Internal Audit": { bg: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.35)", text: "#c084fc" },
  "External Audit": { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.35)", text: "#34d399" },
};

export default function App() {
  const [category, setCategory] = useState("All");
  const [source, setSource]     = useState("All");
  const [search, setSearch]     = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = JOBS.filter((j) => {
    const matchCat = category === "All" || j.category === category;
    const matchSrc = source === "All" || j.source === source;
    const q = search.toLowerCase();
    const matchQ =
      !q ||
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q) ||
      j.skills.some((s) => s.toLowerCase().includes(q));
    return matchCat && matchSrc && matchQ;
  });

  const counts = {
    "IT Audit":       JOBS.filter((j) => j.category === "IT Audit").length,
    "Internal Audit": JOBS.filter((j) => j.category === "Internal Audit").length,
    "External Audit": JOBS.filter((j) => j.category === "External Audit").length,
  };

  return (
    <div style={s.root}>
      <div style={s.grid} />
      <div style={s.wrap}>

        {/* ── HEADER ── */}
        <header style={s.header}>
          <div style={s.badge}>LIVE RESULTS · {LAST_UPDATED}</div>
          <h1 style={s.title}><span style={s.accent}>IT & INTERNAL AUDIT</span><br />MALTA VACANCIES</h1>
          <p style={s.sub}>
            {JOBS.length} vacancies across 10+ sources including LinkedIn, Keepmeposted,
            Jobsinmalta, Findajob.mt, Jobhound, Muovo, Jobsplus & firm career pages in{" "}
            <span style={s.malta}>🇲🇹 Malta</span>
          </p>
        </header>

        {/* ── STATS ── */}
        <div style={s.statsBar}>
          {Object.entries(counts).map(([cat, n], i, arr) => {
            const c = CAT_COLORS[cat];
            return (
              <>
                <div key={cat} style={s.stat}
                  onClick={() => setCategory(category === cat ? "All" : cat)}
                  title={`Filter by ${cat}`}
                >
                  <span style={{ ...s.sNum, color: c.text }}>{n}</span>
                  <span style={s.sLbl}>{cat}</span>
                </div>
                {i < arr.length - 1 && <div style={s.sdiv} />}
              </>
            );
          })}
        </div>

        {/* ── MARKET SUMMARY ── */}
        <div style={s.summBox}>
          <strong style={{ color: "#e2e8f0" }}>📊 Market Snapshot:</strong> Malta's audit job market is active across all levels in April 2026.
          <strong style={{ color: "#60a5fa" }}> IT Audit</strong> demand is led by Deloitte, Forvis Mazars and SpotOn (iGaming & fintech).
          <strong style={{ color: "#c084fc" }}> Internal Audit</strong> roles are open at MFSA, Vista Global, BDO and a crypto/MiCA fintech (€60–80k).
          <strong style={{ color: "#34d399" }}> External Audit</strong> vacancies span entry to senior management (€20k–€100k) across EY, DFK, GCB, Broadwing and Konnekt.
        </div>

        {/* ── SEARCH ── */}
        <input
          style={s.searchBox}
          placeholder="🔍  Search by title, company, skill, or location..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setSelected(null); }}
        />

        {/* ── CATEGORY TABS ── */}
        <div style={s.filterRow}>
          {CATEGORIES.map((cat) => {
            const c = CAT_COLORS[cat] || {};
            const active = category === cat;
            return (
              <button key={cat}
                style={{ ...s.tab, ...(active ? { background: c.bg || "rgba(255,255,255,0.08)", borderColor: c.border || "#fff", color: c.text || "#fff" } : {}) }}
                onClick={() => { setCategory(cat); setSelected(null); }}
              >{cat}</button>
            );
          })}
        </div>

        {/* ── SOURCE FILTER ── */}
        <div style={{ ...s.filterRow, marginTop: -6 }}>
          <span style={s.filterLabel}>Source:</span>
          {ALL_SOURCES.map((src) => (
            <button key={src}
              style={{ ...s.tab, ...s.tabSm, ...(source === src ? s.tabSmOn : {}) }}
              onClick={() => { setSource(src); setSelected(null); }}
            >{src}</button>
          ))}
        </div>

        <div style={s.count}>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>

        {/* ── JOB CARDS ── */}
        <div style={s.list}>
          {filtered.map((job, i) => {
            const c = CAT_COLORS[job.category] || {};
            const open = selected === i;
            return (
              <div key={i}
                style={{ ...s.card, ...(open ? { borderColor: c.border, boxShadow: `0 0 20px ${c.bg}` } : {}) }}
                onClick={() => setSelected(open ? null : i)}
              >
                <div style={s.cardTop}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                      <span style={{ ...s.catPill, background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>{job.category}</span>
                      <div style={s.jTitle}>{job.title}</div>
                    </div>
                    <div style={s.jCo}>{job.company}</div>
                  </div>
                  <span style={s.srcTag}>{job.source}</span>
                </div>

                <div style={s.meta}>
                  <span style={s.mi}>📍 {job.location}</span>
                  <span style={s.mi}>⏱ {job.type}</span>
                  {job.salary && <span style={{ ...s.mi, color: "#fbbf24" }}>💰 {job.salary}</span>}
                  <span style={s.mi}>🗓 {job.posted}</span>
                </div>

                {open && (
                  <div style={s.det}>
                    <p style={s.desc}>{job.description}</p>
                    <div style={s.skills}>
                      {job.skills.map((sk, si) => (
                        <span key={si} style={{ ...s.skill, background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>{sk}</span>
                      ))}
                    </div>
                    <a href={job.url} target="_blank" rel="noreferrer" style={{ ...s.link, color: c.text }}>
                      View / Apply on {job.source} →
                    </a>
                  </div>
                )}
                <div style={s.xhint}>{open ? "▲ collapse" : "▼ details"}</div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div style={s.empty}>No results found. Try adjusting your search or filters.</div>
          )}
        </div>

        {/* ── SOURCE LEGEND ── */}
        <div style={s.legend}>
          <div style={s.legendTitle}>Sources Searched</div>
          <div style={s.legendGrid}>
            {[
              { name: "LinkedIn",        url: "https://mt.linkedin.com/jobs/it-auditor-jobs" },
              { name: "Keepmeposted",    url: "https://keepmeposted.com.mt" },
              { name: "Jobsinmalta",     url: "https://jobsinmalta.com/audit-jobs" },
              { name: "Findajob.mt",     url: "https://findajob.mt/jobs/sectors/it-software/" },
              { name: "Jobhound.mt",     url: "https://jobhound.mt" },
              { name: "Muovo.eu",        url: "https://muovo.eu/" },
              { name: "Jobsplus",        url: "https://jobsplus.gov.mt" },
              { name: "MFSA Careers",    url: "https://careers.mfsa.mt" },
              { name: "BDO Malta",       url: "https://www.bdo.com.mt/en-gb/careers" },
              { name: "Forvis Mazars",   url: "https://forvismazars.com/mt/en/join-us" },
              { name: "EY Malta",        url: "https://www.ey.com/en_mt/careers" },
              { name: "Deloitte Malta",  url: "https://www2.deloitte.com/mt/en/careers.html" },
            ].map((src) => (
              <a key={src.name} href={src.url} target="_blank" rel="noreferrer" style={s.srcLink}>{src.name} ↗</a>
            ))}
          </div>
        </div>

        <div style={s.footer}>
          Data gathered from LinkedIn, Keepmeposted, Jobsinmalta, Findajob.mt, Jobhound, Muovo, Jobsplus & firm career pages · {LAST_UPDATED}
        </div>
      </div>
    </div>
  );
}

const s = {
  root:        { minHeight: "100vh", background: "#0a0e1a", color: "#e2e8f0", fontFamily: "'Courier New',monospace", position: "relative", overflowX: "hidden" },
  grid:        { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.05) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" },
  wrap:        { maxWidth: 900, margin: "0 auto", padding: "40px 16px 60px", position: "relative", zIndex: 1 },
  header:      { textAlign: "center", marginBottom: 28 },
  badge:       { display: "inline-block", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)", color: "#34d399", padding: "4px 14px", borderRadius: 3, fontSize: 11, letterSpacing: 2, marginBottom: 14 },
  title:       { fontSize: "clamp(26px,6vw,52px)", fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, margin: "0 0 12px", fontFamily: "Georgia,serif" },
  accent:      { color: "#3b82f6" },
  sub:         { color: "#94a3b8", fontSize: 13, lineHeight: 1.7 },
  malta:       { color: "#f59e0b", fontWeight: 700 },
  statsBar:    { display: "flex", background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, overflow: "hidden", marginBottom: 16, cursor: "pointer" },
  stat:        { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 8px", transition: "background 0.15s" },
  sNum:        { fontSize: "clamp(20px,4vw,30px)", fontWeight: 900, lineHeight: 1 },
  sLbl:        { fontSize: 9, color: "#64748b", letterSpacing: 0.5, marginTop: 4, textAlign: "center" },
  sdiv:        { width: 1, background: "#1e293b" },
  summBox:     { background: "rgba(15,23,42,0.8)", border: "1px solid #1e293b", borderRadius: 6, padding: "12px 16px", fontSize: 13, color: "#94a3b8", lineHeight: 1.8, marginBottom: 16 },
  searchBox:   { width: "100%", boxSizing: "border-box", background: "#0f172a", border: "1px solid #334155", borderRadius: 6, padding: "10px 14px", fontSize: 14, color: "#e2e8f0", fontFamily: "inherit", marginBottom: 12, outline: "none" },
  filterRow:   { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10, alignItems: "center" },
  filterLabel: { color: "#475569", fontSize: 11, marginRight: 2 },
  tab:         { background: "transparent", border: "1px solid #1e293b", color: "#64748b", padding: "6px 14px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontSize: 12 },
  tabSm:       { padding: "4px 10px", fontSize: 11 },
  tabSmOn:     { background: "rgba(255,255,255,0.06)", border: "1px solid #475569", color: "#cbd5e1" },
  count:       { color: "#475569", fontSize: 11, marginBottom: 10 },
  list:        { display: "flex", flexDirection: "column", gap: 10 },
  card:        { background: "#0f172a", border: "1px solid #1e293b", borderRadius: 8, padding: "14px 16px", cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s" },
  cardTop:     { display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 },
  catPill:     { padding: "2px 8px", borderRadius: 3, fontSize: 9, letterSpacing: 1, whiteSpace: "nowrap", flexShrink: 0 },
  jTitle:      { fontWeight: 700, fontSize: 14, color: "#e2e8f0" },
  jCo:         { color: "#60a5fa", fontSize: 12, marginTop: 2 },
  srcTag:      { background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", color: "#a5b4fc", padding: "2px 8px", borderRadius: 3, fontSize: 9, letterSpacing: 0.5, whiteSpace: "nowrap", flexShrink: 0 },
  meta:        { display: "flex", gap: 10, flexWrap: "wrap" },
  mi:          { color: "#64748b", fontSize: 11 },
  xhint:       { color: "#1e293b", fontSize: 10, marginTop: 8, textAlign: "right" },
  det:         { marginTop: 12, paddingTop: 12, borderTop: "1px solid #1e293b" },
  desc:        { color: "#94a3b8", fontSize: 12, lineHeight: 1.7, margin: "0 0 10px" },
  skills:      { display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 },
  skill:       { padding: "2px 8px", borderRadius: 3, fontSize: 10 },
  link:        { fontSize: 12, textDecoration: "none" },
  empty:       { textAlign: "center", color: "#475569", padding: "40px 0", fontSize: 13 },
  legend:      { marginTop: 40, borderTop: "1px solid #1e293b", paddingTop: 20 },
  legendTitle: { color: "#475569", fontSize: 11, letterSpacing: 2, marginBottom: 12 },
  legendGrid:  { display: "flex", flexWrap: "wrap", gap: 8 },
  srcLink:     { color: "#334155", fontSize: 11, textDecoration: "none", background: "#0f172a", border: "1px solid #1e293b", padding: "4px 10px", borderRadius: 3 },
  footer:      { marginTop: 24, textAlign: "center", color: "#1e293b", fontSize: 10 },
};
