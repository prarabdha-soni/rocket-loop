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
    title: "Student Budget Protein Packets",
    summary:
      "180,000+ Coaching students in Kunadi & Talwandi hubs demand sub-₹99 single-serve sachets.",
    tag: "High Fit / Low Competition",
    tone: "emerald",
    metricLabel: "Demand index",
    metricValue: "92%",
    delta: "+31% QoQ",
    trend: [41, 48, 46, 55, 61, 70, 76, 85, 92],
    source: "Source: 1,140 student intercept surveys across Kunadi & Talwandi coaching hubs, Feb 2026",
  },
  {
    id: "opp-2",
    title: "Gym Trainer Wholesale Arbitrage",
    summary:
      "Local gym trainers control 65% of sales but get low 8-12% retail cuts from big brands.",
    tag: "High Fit / Medium Competition",
    tone: "primary",
    metricLabel: "Margin lift",
    metricValue: "2.5x",
    delta: "vs premium brands",
    trend: [1.0, 1.1, 1.2, 1.4, 1.6, 1.9, 2.1, 2.3, 2.5],
    source: "Source: 42 trainer interviews across Gumanpura & Talwandi gyms, Jan 2026",
  },
  {
    id: "opp-3",
    title: "Instant 30-Min Hostel Delivery",
    summary:
      "Students fear counterfeit online products and want verified batch delivery before evening workouts.",
    tag: "Velocity Wedge",
    tone: "emerald",
    metricLabel: "Delivery time",
    metricValue: "30m",
    delta: "vs 4 days online",
    trend: [96, 72, 60, 48, 36, 24, 12, 4, 0.5],
    source: "Source: Delivery-time audit of 312 student orders to Kota PIN codes, Q1 2026",
  },
  {
    id: "opp-4",
    title: "Institutional Mess Bulk Pantries",
    summary:
      "Hostel mess contractors in Landmark City seeking cheap, clean protein powders for high-volume student kitchens.",
    tag: "Whitespace",
    tone: "amber",
    metricLabel: "Untapped TAM",
    metricValue: "₹4.5Cr",
    delta: "/yr",
    trend: [1.2, 1.5, 1.9, 2.3, 2.8, 3.3, 3.8, 4.1, 4.5],
    source: "Source: Interviews with 18 mess contractors, Landmark City & Indra Vihar, Mar 2026",
  },
  {
    id: "opp-5",
    title: "Tier-2 Sports Nutrition Hubs",
    summary:
      "Wholesalers in Dadabari & Station area want regional Hindi point-of-sale materials to move budget inventory.",
    tag: "Regional Wedge",
    tone: "primary",
    metricLabel: "Retail ROI",
    metricValue: "+24%",
    delta: "YoY",
    trend: [4, 6, 9, 11, 13, 16, 19, 21, 24],
    source: "Source: 26 stockist interviews, Dadabari & Station Road wholesale belt, Feb 2026",
  },
  {
    id: "opp-6",
    title: "Lab-Certified Pure Whey Counterparts",
    summary:
      "Widespread student fear of counterfeit tubs creates space for QR-code scan-verified local batches.",
    tag: "Trust Play",
    tone: "emerald",
    metricLabel: "Conversion boost",
    metricValue: "1.8x",
    delta: "verified vs unverified",
    trend: [1.0, 1.05, 1.1, 1.2, 1.3, 1.45, 1.6, 1.7, 1.8],
    source: "Source: A/B counter trial at 9 Kota supplement stores, Jan–Mar 2026",
  },
];

export type Competitor = {
  id: string;
  name: string;
  posture: string;
  gap: string;
  tag: "Pricing Gap" | "Margin Gap" | "Distribution Gap" | "Product Format Gap";
};

export const competitors: Competitor[] = [
  {
    id: "c1",
    name: "Optimum Nutrition (ON)",
    posture: "Premium global player",
    gap: "Retails at high price points (₹4k+). Multi-day e-commerce shipping delays to Kota.",
    tag: "Pricing Gap",
  },
  {
    id: "c2",
    name: "MuscleBlaze",
    posture: "Domestic incumbent",
    gap: "Only offers low 8% margins to local Kota trainers. Zero local warehouse presence.",
    tag: "Margin Gap",
  },
  {
    id: "c3",
    name: "HealthKart Retailers",
    posture: "Gumanpura hub physical stores",
    gap: "Strict corporate retail pricing. No direct hostel delivery infrastructure.",
    tag: "Distribution Gap",
  },
  {
    id: "c4",
    name: "Asitis Nutrition",
    posture: "Raw whey focus",
    gap: "Lacks flavored single-serve sachets; unappealing to daily hostel-dwelling students.",
    tag: "Product Format Gap",
  },
];

export type Task = {
  id: string;
  title: string;
  meta: string;
};

export type Milestone = {
  id: string;
  index: string;
  title: string;
  focus: string;
  owner: string;
  status: "In flight" | "Queued" | "Blocked";
  progress: number;
  tasks: Task[];
};

export const milestones: Milestone[] = [
  {
    id: "m1",
    index: "01",
    title: "The Gym Trainer Margin Wedge",
    focus: "Focus: Gumanpura & Talwandi Gyms",
    owner: "Field Pod · North Kota",
    status: "In flight",
    progress: 40,
    tasks: [
      {
        id: "t1",
        title: "Scrape numbers of Head Trainers at Top 20 Kota Gyms",
        meta: "Scout agent · 4h runtime",
      },
      {
        id: "t2",
        title: "Dispatch 3-flavor sample toolkit routes",
        meta: "Logistics agent · same-day routes",
      },
    ],
  },
  {
    id: "m2",
    index: "02",
    title: "The Hostel Campus Ambassador Network",
    focus: "Focus: Landmark City & Indra Vihar",
    owner: "Campus Pod",
    status: "In flight",
    progress: 18,
    tasks: [
      {
        id: "t1b",
        title: "Map high-density private student mess structures",
        meta: "Mapping agent · 2-day sweep",
      },
      {
        id: "t2b",
        title: "Deploy QR-coded “30-Min Hostel Gate Delivery” poster agents",
        meta: "Print & placement agent",
      },
    ],
  },
  {
    id: "m3",
    index: "03",
    title: "Wholesale Stockist Disruption",
    focus: "Focus: Bhimganj Mandi Hub",
    owner: "Trade Pod",
    status: "Queued",
    progress: 6,
    tasks: [
      {
        id: "t1c",
        title: "Pitch regional manufacturing freight savings to local stockists",
        meta: "Pitch agent · 12 stockist visits",
      },
    ],
  },
];

export type Lead = {
  id: string;
  name: string;
  territory: string;
  type: string;
  pain: string;
  contact: string;
  whatsapp: string;
};

export const leads: Lead[] = [
  {
    id: "l1",
    name: "Anytime Fitness",
    territory: "Gumanpura",
    type: "Premium Gym Network",
    pain: "Slow product rotation; low retail margin cut",
    contact: "Gym Manager",
    whatsapp: `Namaste, big brands give local gyms just an 8-10% cut on every tub they sell. KotaWhey is manufactured right here in Rajasthan, and we offer a direct 25% margin for your trainers — plus fresh stock weekly, so nothing sits on your shelf.

Can our manager drop off samples today at 6 PM?`,
  },
  {
    id: "l2",
    name: "Agrawal And Grandson",
    territory: "Bhimganj Mandi",
    type: "Wholesale Distributor",
    pain: "Sourcing stock from Delhi; high freight costs",
    contact: "Head Stockist",
    whatsapp: `Namaste Agrawal ji, you currently pay Delhi freight on every carton of national brands. KotaWhey is manufactured regionally — no interstate freight, faster restock, and an extra 6-8% margin straight to you.

Can we send our rate card and a trial carton to Bhimganj Mandi this week?`,
  },
  {
    id: "l3",
    name: "FitX Gym",
    territory: "Rajiv Gandhi Nagar",
    type: "Budget Student Gym",
    pain: "Needs cheap single-serve student sachets",
    contact: "Owner / Head Trainer",
    whatsapp: `Namaste, coaching students ask for protein daily but can't commit to a ₹2,000 tub. KotaWhey makes single-serve sachets under ₹99 — perfect counter-sale for FitX, with 25% trainer margin and weekly top-ups.

Shall we drop a sachet starter box at your reception tomorrow?`,
  },
  {
    id: "l4",
    name: "Landmark Student Residency",
    territory: "Kunadi Hub",
    type: "Mega-Hostel Mess Committee",
    pain: "Looking for unbranded bulk protein for kitchen pantry",
    contact: "Mess Committee Lead",
    whatsapp: `Namaste, we supply lab-tested unbranded bulk whey for hostel kitchens — clean protein for daily mess use at wholesale per-kg rates, delivered same-week in Kota. Every batch carries a QR-verified lab certificate.

Can we share the bulk rate sheet and a sample pack for your kitchen trial?`,
  },
];
