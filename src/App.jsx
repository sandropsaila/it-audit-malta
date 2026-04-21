import { useState } from "react";

const LAST_UPDATED = "21 April 2026";

// Password stored as SHA-256 hash of "1122" — never stored as plain text

async function hashPin(pin) {
  const msgBuffer = new TextEncoder().encode(pin);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// SHA-256 of "1122"
const PIN_HASH = "6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443";

function PinScreen({ onUnlock }) {
  const [digits, setDigits]   = useState([]);
  const [shake, setShake]     = useState(false);
  const [checking, setChecking] = useState(false);

  const handleDigit = async (d) => {
    if (digits.length >= 4 || checking) return;
    const next = [...digits, d];
    setDigits(next);
    if (next.length === 4) {
      setChecking(true);
      const hash = await hashPin(next.join(""));
      if (hash === PIN_HASH) {
        onUnlock();
      } else {
        setShake(true);
        setTimeout(() => { setDigits([]); setShake(false); setChecking(false); }, 600);
      }
    }
  };

  const handleDelete = () => {
    if (checking) return;
    setDigits((d) => d.slice(0, -1));
  };

  const keys = [1,2,3,4,5,6,7,8,9,null,0,"⌫"];

  return (
    <div style={p.overlay}>
      <div style={p.box}>
        <div style={p.logo}>🇲🇹</div>
        <h2 style={p.title}>IT & Internal Audit<br/>Malta Vacancies</h2>
        <p style={p.sub}>Enter PIN to access</p>

        {/* Dots */}
        <div style={{ ...p.dots, animation: shake ? "shake 0.4s ease" : "none" }}>
          {[0,1,2,3].map((i) => (
            <div key={i} style={{ ...p.dot, background: digits.length > i ? "#2563eb" : "#e2e8f0" }} />
          ))}
        </div>

        {/* Keypad */}
        <div style={p.keypad}>
          {keys.map((k, i) => (
            k === null ? <div key={i} /> :
            k === "⌫" ? (
              <button key={i} style={{ ...p.key, ...p.keyDel }} onClick={handleDelete}>⌫</button>
            ) : (
              <button key={i} style={p.key} onClick={() => handleDigit(k)}>{k}</button>
            )
          ))}
        </div>

        {shake && <p style={p.err}>Incorrect PIN. Try again.</p>}
      </div>
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
      `}</style>
    </div>
  );
}

const p = {
  overlay:  { minHeight: "100vh", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif" },
  box:      { background: "#ffffff", borderRadius: 16, padding: "40px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", width: "100%", maxWidth: 340 },
  logo:     { fontSize: 40, marginBottom: 12 },
  title:    { fontSize: 20, fontWeight: 900, color: "#0f172a", margin: "0 0 6px", lineHeight: 1.3 },
  sub:      { color: "#64748b", fontSize: 13, margin: "0 0 28px", fontFamily: "'Courier New', monospace" },
  dots:     { display: "flex", gap: 16, justifyContent: "center", marginBottom: 28 },
  dot:      { width: 14, height: 14, borderRadius: "50%", border: "2px solid #e2e8f0", transition: "background 0.15s" },
  keypad:   { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 240, margin: "0 auto" },
  key:      { background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 0", fontSize: 22, fontWeight: 700, color: "#0f172a", cursor: "pointer", fontFamily: "Georgia, serif", transition: "background 0.1s" },
  keyDel:   { background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", fontSize: 18 },
  err:      { color: "#dc2626", fontSize: 12, marginTop: 16, fontFamily: "'Courier New', monospace" },
};

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
  "IT Audit":       { bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.3)",  text: "#1d4ed8" },
  "Internal Audit": { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.3)", text: "#6d28d9" },
  "External Audit": { bg: "rgba(5,150,105,0.08)",  border: "rgba(5,150,105,0.3)",  text: "#047857" },
};

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [category, setCategory] = useState("All");
  const [source, setSource]     = useState("All");
  const [search, setSearch]     = useState("");
  const [selected, setSelected] = useState(null);
  
  const [lastRefresh, setLastRefresh] = useState(LAST_UPDATED);

  const handleRefresh = () => {
    setSearch("");
    setCategory("All");
    setSource("All");
    setSelected(null);
    
    setLastRefresh(new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }));
  };

  if (!unlocked) return <PinScreen onUnlock={() => setUnlocked(true)} />;

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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 14 }}>
            <div style={s.badge}>LIVE RESULTS · {lastRefresh}</div>
            <button style={s.refreshBtn} onClick={handleRefresh} title="Refresh results">
              ↺ Refresh
            </button>
          </div>
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
          <strong style={{ color: "#0f172a" }}>📊 Market Snapshot:</strong> Malta's audit job market is active across all levels in April 2026.
          <strong style={{ color: "#1d4ed8" }}> IT Audit</strong> demand is led by Deloitte, Forvis Mazars and SpotOn (iGaming & fintech).
          <strong style={{ color: "#6d28d9" }}> Internal Audit</strong> roles are open at MFSA, Vista Global, BDO and a crypto/MiCA fintech (€60–80k).
          <strong style={{ color: "#047857" }}> External Audit</strong> vacancies span entry to senior management (€20k–€100k) across EY, DFK, GCB, Broadwing and Konnekt.
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
                  {job.salary && <span style={{ ...s.mi, color: "#b45309" }}>💰 {job.salary}</span>}
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
  root:        { minHeight: "100vh", background: "#ffffff", color: "#1e293b", fontFamily: "'Courier New',monospace", position: "relative", overflowX: "hidden" },
  grid:        { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(59,130,246,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" },
  wrap:        { maxWidth: 900, margin: "0 auto", padding: "40px 16px 60px", position: "relative", zIndex: 1 },
  header:      { textAlign: "center", marginBottom: 28 },
  badge:       { display: "inline-block", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.4)", color: "#059669", padding: "4px 14px", borderRadius: 3, fontSize: 11, letterSpacing: 2 },
  refreshBtn:  { background: "#2563eb", border: "none", color: "#ffffff", padding: "5px 14px", borderRadius: 3, fontSize: 11, letterSpacing: 1, cursor: "pointer", fontFamily: "inherit", fontWeight: 700 },
  title:       { fontSize: "clamp(26px,6vw,52px)", fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, margin: "0 0 12px", fontFamily: "Georgia,serif", color: "#0f172a" },
  accent:      { color: "#2563eb" },
  sub:         { color: "#334155", fontSize: 13, lineHeight: 1.7 },
  malta:       { color: "#d97706", fontWeight: 700 },
  statsBar:    { display: "flex", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden", marginBottom: 16, cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  stat:        { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 8px", transition: "background 0.15s" },
  sNum:        { fontSize: "clamp(20px,4vw,30px)", fontWeight: 900, lineHeight: 1 },
  sLbl:        { fontSize: 9, color: "#475569", letterSpacing: 0.5, marginTop: 4, textAlign: "center" },
  sdiv:        { width: 1, background: "#e2e8f0" },
  summBox:     { background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 6, padding: "12px 16px", fontSize: 13, color: "#334155", lineHeight: 1.8, marginBottom: 16 },
  searchBox:   { width: "100%", boxSizing: "border-box", background: "#ffffff", border: "1px solid #cbd5e1", borderRadius: 6, padding: "10px 14px", fontSize: 14, color: "#1e293b", fontFamily: "inherit", marginBottom: 12, outline: "none", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
  filterRow:   { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10, alignItems: "center" },
  filterLabel: { color: "#64748b", fontSize: 11, marginRight: 2 },
  tab:         { background: "#ffffff", border: "1px solid #e2e8f0", color: "#374151", padding: "6px 14px", borderRadius: 4, cursor: "pointer", fontFamily: "inherit", fontSize: 12, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
  tabSm:       { padding: "4px 10px", fontSize: 11 },
  tabSmOn:     { background: "#f1f5f9", border: "1px solid #94a3b8", color: "#1e293b" },
  count:       { color: "#64748b", fontSize: 11, marginBottom: 10 },
  list:        { display: "flex", flexDirection: "column", gap: 10 },
  card:        { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "14px 16px", cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  cardTop:     { display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 },
  catPill:     { padding: "2px 8px", borderRadius: 3, fontSize: 9, letterSpacing: 1, whiteSpace: "nowrap", flexShrink: 0 },
  jTitle:      { fontWeight: 700, fontSize: 14, color: "#0f172a" },
  jCo:         { color: "#2563eb", fontSize: 12, marginTop: 2 },
  srcTag:      { background: "#ede9fe", border: "1px solid #c4b5fd", color: "#7c3aed", padding: "2px 8px", borderRadius: 3, fontSize: 9, letterSpacing: 0.5, whiteSpace: "nowrap", flexShrink: 0 },
  meta:        { display: "flex", gap: 10, flexWrap: "wrap" },
  mi:          { color: "#64748b", fontSize: 11 },
  xhint:       { color: "#64748b", fontSize: 10, marginTop: 8, textAlign: "right" },
  det:         { marginTop: 12, paddingTop: 12, borderTop: "1px solid #f1f5f9" },
  desc:        { color: "#1e293b", fontSize: 12, lineHeight: 1.7, margin: "0 0 10px" },
  skills:      { display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 },
  skill:       { padding: "2px 8px", borderRadius: 3, fontSize: 10 },
  link:        { fontSize: 12, textDecoration: "none" },
  empty:       { textAlign: "center", color: "#64748b", padding: "40px 0", fontSize: 13 },
  legend:      { marginTop: 40, borderTop: "1px solid #e2e8f0", paddingTop: 20 },
  legendTitle: { color: "#64748b", fontSize: 11, letterSpacing: 2, marginBottom: 12 },
  legendGrid:  { display: "flex", flexWrap: "wrap", gap: 8 },
  srcLink:     { color: "#374151", fontSize: 11, textDecoration: "none", background: "#f8fafc", border: "1px solid #e2e8f0", padding: "4px 10px", borderRadius: 3 },
  footer:      { marginTop: 24, textAlign: "center", color: "#64748b", fontSize: 10 },
};
