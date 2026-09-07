export type Opportunity = {
  id: string;
  title: string;
  summary: string;
  tag: string;
  tone: "emerald" | "primary" | "amber";
  metricLabel: string;
  metricValue: string;
  delta: string;
  trend: number[];
  source: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "opp-1",
    title: "UPI Auto-pay for SaaS Billing",
    summary: "Indian mid-market SaaS teams churn on failed recurring card mandates.",
    tag: "High Fit / Low Competition",
    tone: "emerald",
    metricLabel: "Demand index",
    metricValue: "84",
    delta: "+22% QoQ",
    trend: [22, 28, 26, 35, 41, 52, 58, 71, 84],
    source: "Source: G2 Customer Reviews, Q1 2026 (n=1,284)",
  },
  {
    id: "opp-2",
    title: "Freight Ops Telemetry APIs",
    summary: "Logistics startups stitch 4+ vendors for shipment-level visibility.",
    tag: "High Fit / Medium Competition",
    tone: "primary",
    metricLabel: "Deal velocity",
    metricValue: "31d",
    delta: "-9d vs avg",
    trend: [61, 58, 55, 49, 47, 42, 38, 34, 31],
    source: "Source: Crunchbase funding + 42 win/loss interviews, Feb 2026",
  },
  {
    id: "opp-3",
    title: "Compliance-Ready Data Residency",
    summary: "RBI localisation mandates block US-hosted competitors from BFSI deals.",
    tag: "Regulatory Wedge",
    tone: "emerald",
    metricLabel: "Blocked deals",
    metricValue: "127",
    delta: "+38 this quarter",
    trend: [40, 52, 55, 63, 71, 88, 97, 112, 127],
    source: "Source: RBI circular tracking + Gartner Peer Insights, Jan 2026",
  },
  {
    id: "opp-4",
    title: "Agent-Led Onboarding for CX Teams",
    summary: "Support leaders want deployment in days, not 6-week PS engagements.",
    tag: "High Fit / Low Competition",
    tone: "emerald",
    metricLabel: "Time-to-value",
    metricValue: "4d",
    delta: "-31d vs incumbent",
    trend: [35, 33, 28, 24, 19, 14, 9, 6, 4],
    source: "Source: 68 onboarding transcripts, TrustRadius Q4 2025",
  },
  {
    id: "opp-5",
    title: "Usage-Based Pricing Migration",
    summary: "Seat-based incumbents cannot meter AI consumption per workspace.",
    tag: "Pricing Arbitrage",
    tone: "amber",
    metricLabel: "ACV lift",
    metricValue: "1.7x",
    delta: "+0.4x YoY",
    trend: [1.0, 1.05, 1.15, 1.2, 1.35, 1.42, 1.55, 1.62, 1.7],
    source: "Source: 214 public pricing pages scraped, Mar 2026",
  },
  {
    id: "opp-6",
    title: "Regional Language Sales Enablement",
    summary: "Tier-2 field sales teams are unserved by English-only playbooks.",
    tag: "Whitespace",
    tone: "primary",
    metricLabel: "Untapped TAM",
    metricValue: "$410M",
    delta: "+17% CAGR",
    trend: [190, 210, 240, 265, 290, 320, 355, 385, 410],
    source: "Source: Redseer market sizing, Dec 2025",
  },
];

export type Competitor = {
  id: string;
  name: string;
  posture: string;
  gap: string;
  severity: "Critical gap" | "Structural gap" | "Emerging gap";
  share: string;
};

export const competitors: Competitor[] = [
  {
    id: "c1",
    name: "Nexora Cloud",
    posture: "Enterprise incumbent · US-hosted",
    gap: "Lacks UPI Auto-pay integration — mandates fail at 19% renewal rate.",
    severity: "Critical gap",
    share: "31% share",
  },
  {
    id: "c2",
    name: "Palermo Logistics OS",
    posture: "Vertical challenger · SEA",
    gap: "No shipment-level webhook API; polling only at 15-min intervals.",
    severity: "Structural gap",
    share: "18% share",
  },
  {
    id: "c3",
    name: "Certia Suite",
    posture: "Compliance-first · EU",
    gap: "No India data residency zone — blocked from all BFSI RFPs.",
    severity: "Critical gap",
    share: "12% share",
  },
  {
    id: "c4",
    name: "Loopwork",
    posture: "PLG upstart · Global",
    gap: "Seat-based pricing only; cannot meter AI usage per workspace.",
    severity: "Emerging gap",
    share: "9% share",
  },
  {
    id: "c5",
    name: "Stackline CX",
    posture: "Mid-market · India",
    gap: "6-week professional services onboarding, no self-serve tier.",
    severity: "Structural gap",
    share: "7% share",
  },
  {
    id: "c6",
    name: "Vantiq Ops",
    posture: "Legacy on-prem",
    gap: "No regional language UI; loses Tier-2 field deployments.",
    severity: "Emerging gap",
    share: "5% share",
  },
];

export type Task = {
  id: string;
  title: string;
  meta: string;
  action: "Deploy Agent" | "Generate Blueprint";
};

export type Milestone = {
  id: string;
  index: string;
  title: string;
  window: string;
  owner: string;
  status: "In flight" | "Queued" | "Blocked";
  progress: number;
  tasks: Task[];
};

export const milestones: Milestone[] = [
  {
    id: "m1",
    index: "01",
    title: "Disrupt Nexora Cloud in Indian logistics startups",
    window: "Weeks 1–4",
    owner: "GTM Pod · Alpha",
    status: "In flight",
    progress: 62,
    tasks: [
      { id: "t1", title: "Map 120 Series A–C logistics accounts on failed-mandate signals", meta: "Data agent · 6h runtime", action: "Deploy Agent" },
      { id: "t2", title: "Build UPI Auto-pay displacement battlecard", meta: "Enablement asset", action: "Generate Blueprint" },
      { id: "t3", title: "Launch founder-led outbound to 40 ops leaders", meta: "Sequence · 5 touches", action: "Deploy Agent" },
      { id: "t4", title: "Instrument win/loss capture in CRM", meta: "Ops workflow", action: "Generate Blueprint" },
    ],
  },
  {
    id: "m2",
    index: "02",
    title: "Convert RBI data-residency mandate into BFSI pipeline",
    window: "Weeks 3–8",
    owner: "Regulated Accounts",
    status: "In flight",
    progress: 34,
    tasks: [
      { id: "t5", title: "Publish India residency architecture whitepaper", meta: "Content · 2,400 words", action: "Generate Blueprint" },
      { id: "t6", title: "Monitor 127 blocked competitor RFPs weekly", meta: "Signal agent · daily", action: "Deploy Agent" },
      { id: "t7", title: "Warm 18 CISO relationships via compliance roundtable", meta: "Field motion", action: "Deploy Agent" },
    ],
  },
  {
    id: "m3",
    index: "03",
    title: "Ship usage-based pricing motion for AI workloads",
    window: "Weeks 6–12",
    owner: "Pricing Council",
    status: "Queued",
    progress: 12,
    tasks: [
      { id: "t8", title: "Model 3 metering tiers against 214 competitor pages", meta: "Analysis agent", action: "Deploy Agent" },
      { id: "t9", title: "Draft migration playbook for 90 seat-based accounts", meta: "CS blueprint", action: "Generate Blueprint" },
      { id: "t10", title: "Pilot consumption billing with 5 design partners", meta: "Pilot cohort", action: "Generate Blueprint" },
    ],
  },
  {
    id: "m4",
    index: "04",
    title: "Own 4-day onboarding as the category benchmark",
    window: "Weeks 9–14",
    owner: "Lifecycle Pod",
    status: "Blocked",
    progress: 5,
    tasks: [
      { id: "t11", title: "Automate workspace provisioning from signed contract", meta: "Blocked on infra sign-off", action: "Deploy Agent" },
      { id: "t12", title: "Produce time-to-value proof pack from 68 transcripts", meta: "Proof asset", action: "Generate Blueprint" },
    ],
  },
];

export type Lead = {
  id: string;
  company: string;
  industry: string;
  tier: "Tier 1" | "Tier 2" | "Tier 3";
  fit: number;
  pain: string;
  contact: string;
  role: string;
  email: { subject: string; body: string };
  linkedin: string;
};

export const leads: Lead[] = [
  {
    id: "l1",
    company: "Freightwise Labs",
    industry: "Logistics · Series B · Bengaluru",
    tier: "Tier 1",
    fit: 94,
    pain: "19% of recurring mandates fail on card rails; no UPI Auto-pay fallback.",
    contact: "Ananya Rao",
    role: "VP Revenue Operations",
    email: {
      subject: "Freightwise: recovering the 19% of mandates failing on card rails",
      body: `Hi Ananya,

Your billing stack still routes recurring mandates through card rails — across comparable Series B logistics operators that fails on roughly 19% of renewals, most of it silent involuntary churn.

Three things we'd change in week one:
1. UPI Auto-pay as the primary mandate, cards as fallback
2. Retry orchestration keyed to salary-cycle dates
3. Dunning that pauses instead of cancelling on first failure

Two of your closest peers recovered 11–14% of at-risk ARR inside a quarter doing exactly this.

Worth 20 minutes on Thursday to walk through the mandate-failure model against your own numbers?

— Priya
SignalOS`,
    },
    linkedin: `Ananya — noticed Freightwise is scaling recurring billing fast. The gap we keep seeing at your stage is card-rail mandates quietly failing ~19% of renewals. We fix that with UPI Auto-pay + retry orchestration. Happy to share the teardown we ran on your public pricing page — no pitch.`,
  },
  {
    id: "l2",
    company: "Cargomint",
    industry: "Freight tech · Series A · Mumbai",
    tier: "Tier 1",
    fit: 91,
    pain: "Stitching 4 vendors for shipment visibility; 15-minute polling latency.",
    contact: "Rohit Menon",
    role: "Head of Platform",
    email: {
      subject: "Cargomint: shipment visibility without the 4-vendor stitch",
      body: `Hi Rohit,

From your engineering job posts and status page, shipment visibility at Cargomint looks like four vendors stitched behind a 15-minute polling loop. That latency is what turns "where is my load" into a support ticket.

We replace the stitch with event-level webhooks — sub-30-second shipment state, one contract, one schema.

A comparable freight platform cut visibility tickets 41% and retired two vendor contracts in the same quarter.

Open to a 20-minute architecture walkthrough next week?

— Priya
SignalOS`,
    },
    linkedin: `Rohit — your status page suggests shipment state is polled, not pushed. We give freight platforms event-level webhooks so visibility lands in under 30 seconds instead of 15 minutes. Can send the integration diagram if useful.`,
  },
  {
    id: "l3",
    company: "Aurelia Bank",
    industry: "BFSI · Enterprise · Chennai",
    tier: "Tier 1",
    fit: 89,
    pain: "RBI localisation blocks incumbent vendor; renewal decision in 90 days.",
    contact: "Vikram Iyer",
    role: "Chief Information Security Officer",
    email: {
      subject: "Aurelia: residency-compliant path before the 90-day renewal window",
      body: `Hi Vikram,

Your current platform is hosted outside India, which puts the upcoming renewal squarely against RBI localisation expectations. We track 127 deals stalled on exactly this constraint this quarter.

SignalOS runs in-country by default: Mumbai primary, Hyderabad DR, keys held in your own KMS, and an auditor-ready residency attestation on day one.

I can share the architecture pack and a migration timeline that fits inside your renewal window.

Would a 30-minute session with your architecture team be useful?

— Priya
SignalOS`,
    },
    linkedin: `Vikram — with the renewal window opening, residency is likely the deciding constraint. We run India-primary with customer-held keys and ship the attestation pack up front. Happy to send the architecture doc directly.`,
  },
  {
    id: "l4",
    company: "Loopcart Commerce",
    industry: "D2C SaaS · Series C · Gurugram",
    tier: "Tier 2",
    fit: 78,
    pain: "Seat-based contract cannot meter AI usage; margin leak on heavy workspaces.",
    contact: "Sneha Kapoor",
    role: "Director, Monetization",
    email: {
      subject: "Loopcart: metering AI usage without renegotiating every seat",
      body: `Hi Sneha,

Loopcart's AI features ship on a seat-based contract, which means your heaviest workspaces are your least profitable ones.

We meter consumption per workspace and map it back to your existing seat plans, so you can introduce usage tiers without reopening every contract.

Peers running this migration lifted ACV 1.7x within two renewal cycles.

Want the pricing model applied to your top 20 accounts?

— Priya
SignalOS`,
    },
    linkedin: `Sneha — seat-based pricing on AI features usually means the heaviest workspaces carry the thinnest margin. We meter per workspace and layer usage tiers onto existing plans. Can share the 1.7x ACV model if relevant.`,
  },
  {
    id: "l5",
    company: "Meridian Health Systems",
    industry: "Healthtech · Enterprise · Hyderabad",
    tier: "Tier 2",
    fit: 74,
    pain: "6-week professional services onboarding delays every regional rollout.",
    contact: "Dr. Kavita Nair",
    role: "VP Clinical Operations",
    email: {
      subject: "Meridian: regional rollouts in days instead of six weeks",
      body: `Hi Kavita,

Every new Meridian site currently waits on a six-week professional services onboarding. Across 68 onboarding transcripts we reviewed, that delay — not the software — is what stalls regional rollouts.

Our provisioning agent stands up a fully configured site in four days, with clinical templates pre-mapped.

Shall I send the four-day rollout plan modelled on your next two sites?

— Priya
SignalOS`,
    },
    linkedin: `Kavita — if each Meridian site still needs a six-week onboarding, that's the real constraint on regional rollout pace. We provision configured sites in four days. Happy to share the rollout plan.`,
  },
  {
    id: "l6",
    company: "Truxo Mobility",
    industry: "Fleet SaaS · Series B · Pune",
    tier: "Tier 2",
    fit: 71,
    pain: "English-only interface blocks Tier-2 driver and field-supervisor adoption.",
    contact: "Imran Sheikh",
    role: "Head of Field Operations",
    email: {
      subject: "Truxo: field adoption in the languages your supervisors actually use",
      body: `Hi Imran,

Truxo's field rollout is running against an English-only interface, and Tier-2 supervisor adoption is where that shows up first — usually as shadow WhatsApp workflows.

We ship the operator surface in Hindi, Marathi and Tamil with voice entry for low-literacy workflows.

Can I send the adoption benchmark from a comparable fleet deployment?

— Priya
SignalOS`,
    },
    linkedin: `Imran — Tier-2 field adoption usually stalls on English-only UI, and the work moves to WhatsApp. We ship operator screens in Hindi, Marathi and Tamil with voice entry. Can share adoption numbers from a similar fleet.`,
  },
  {
    id: "l7",
    company: "Northwind Capital",
    industry: "NBFC · Enterprise · Delhi",
    tier: "Tier 3",
    fit: 63,
    pain: "Manual reconciliation across 3 payment gateways; 4-day close cycle.",
    contact: "Meera Subramanian",
    role: "Financial Controller",
    email: {
      subject: "Northwind: closing books in a day, not four",
      body: `Hi Meera,

Reconciling three gateways by hand is what stretches Northwind's close to four days — and it gets worse with every new payment partner.

We auto-match settlement files against ledger entries and surface only the exceptions, typically 2–3% of volume.

Would a walkthrough against last month's settlement files be useful?

— Priya
SignalOS`,
    },
    linkedin: `Meera — a four-day close is usually gateway reconciliation, not accounting. We auto-match settlements and surface only exceptions. Happy to run it against a past month's files.`,
  },
  {
    id: "l8",
    company: "Vertex Retail Group",
    industry: "Retail · Enterprise · Kolkata",
    tier: "Tier 3",
    fit: 58,
    pain: "Store-level inventory syncs nightly; stockouts detected a day late.",
    contact: "Arjun Basu",
    role: "Director of Supply Chain",
    email: {
      subject: "Vertex: stockouts caught in minutes, not the next morning",
      body: `Hi Arjun,

Nightly inventory sync means a Vertex store discovers a stockout the morning after it costs a sale.

We stream store-level movement continuously and trigger replenishment at threshold, not at midnight.

Comparable retailers cut lost-sale incidents by roughly a third in one season.

Want the store-level impact model for your top 50 locations?

— Priya
SignalOS`,
    },
    linkedin: `Arjun — nightly inventory sync means stockouts surface a day late. We stream store movement and trigger replenishment at threshold. Can share the impact model for your top locations.`,
  },
];
