export const siteConfig = {
  name: "Muhammad Wasif Ijaz",
  title: "Analytics & Product Intelligence Leader",
  headline: "Designing Analytics Products That Move Businesses From Instinct to Intelligence",
  subheadline:
    "I build the data systems, AI layers, and intelligence products that give commercial teams the clarity to act fast and the confidence to act right — across 90,000+ hotels, 300+ chains, and $350M in annual revenue.",
  email: "wasif.ijaz16@yahoo.com",
  linkedin: "https://linkedin.com/in/wasifijaz",
  github: "https://github.com/wasifijaz",
  location: "Dubai, UAE",
};

export const metrics = [
  {
    value: 90000,
    suffix: "+",
    label: "Hotels",
    context: "Served through analytics products I originated and own",
  },
  {
    value: 300,
    suffix: "+",
    label: "Hotel Chains",
    context: "Using IOL Pulse — the platform that started as my POC",
  },
  {
    value: 87,
    suffix: "%",
    label: "Resolution Rate",
    context: "BRG violation management (up from 36% before the system I built)",
  },
  {
    value: 90,
    suffix: "%",
    label: "Workload Reduced",
    context: "Manual data extraction eliminated by Athena, the AI analytics layer I shipped",
  },
  {
    value: 350,
    prefix: "$",
    suffix: "M→$1B",
    label: "Growth Strategy",
    context: "Revenue growth roadmap I modelled and delivered to C-suite",
  },
  {
    value: 100,
    suffix: "s Daily",
    label: "AI Queries",
    context: "Natural language queries answered by Athena across internal and external users",
  },
];

export const whatIDo = [
  {
    title: "Analytics Strategy",
    description:
      "I translate business ambiguity into measurable KPI frameworks. When an organisation doesn't know what to track or why, I define what success looks like — and build the systems that prove it.",
    icon: "strategy",
  },
  {
    title: "Data Products",
    description:
      "I build analytics products that teams actually use: intelligence platforms, automated pipelines, and AI-powered decision tools. I own them from concept to production to iteration.",
    icon: "product",
  },
  {
    title: "Revenue Intelligence",
    description:
      "I apply data to the decisions that grow businesses — pricing, client optimization, partner performance, and forecasting. My work connects directly to the top and bottom line.",
    icon: "revenue",
  },
];

export const featuredWork = [
  {
    slug: "iol-pulse",
    title: "IOL Pulse",
    subtitle: "From POC to Commercial Product",
    outcome:
      "A 3-day analytics concept I built for ITB Berlin became a commercial product now used by 300+ hotel chains and 90,000+ hotels.",
    situation:
      "IOL World needed to demonstrate its data capabilities to hotel chains and clients at ITB Berlin 2025. There was no product. Data was siloed, unsurfaced, and inaccessible to the commercial audience who needed it.",
    challenge:
      "Build something compelling enough that C-level hospitality executives — chains, clients, revenue managers — would immediately see the value of IOL World's data. In weeks, not months.",
    action:
      "I designed and built a custom web analytics portal as a POC — pulling multi-source hospitality data into a structured, visual intelligence platform. I defined the KPIs, designed the information architecture, built the data pipelines, and delivered a working product for the event. At ITB Berlin, chains and clients didn't just appreciate the demo — they asked for access.",
    result:
      "The CEO decided to turn the POC into a full commercial product: IOL Pulse. I now own the analytics layer of that product — defining new KPIs, translating business requirements into technical specs, building data pipelines, developing POCs for new features, and bridging the commercial team with the development team. IOL Pulse today serves 300+ chains, 90,000+ hotels, 400+ clients, and the internal team — on a daily basis.",
    tags: ["Product Analytics", "KPI Design", "Data Products", "Hospitality Tech", "Stakeholder Influence"],
    metrics: [
      { value: "300+", label: "Hotel Chains" },
      { value: "90,000+", label: "Hotels" },
      { value: "400+", label: "B2B Clients" },
    ],
  },
  {
    slug: "athena",
    title: "Athena",
    subtitle: "The AI Layer That Replaced 90% of Manual Data Work",
    outcome:
      "A conversational analytics engine I built inside IOL Pulse now answers hundreds of questions daily — eliminating 90% of the manual data extraction workload.",
    situation:
      "Business users and external hotel clients needed data insights constantly but had no direct access. Every request went to the analytics team, who ran SQL queries, built Excel files, and emailed them out. It was a bottleneck that scaled badly.",
    challenge:
      "Build an AI-powered analytics layer that non-technical users could query in plain language — with guaranteed accuracy, zero hallucination, and role-aware data access so nobody sees data they shouldn't.",
    action:
      "I designed and built Athena: a 10-stage NL2SQL and RAG pipeline combining entity resolution, intent extraction, natural language date parsing, parameterised SQL execution, vector search, and runtime computation — all grounded in live PostgreSQL data. Every answer returns the underlying SQL and data used, so results are explainable and auditable. Deployed inside IOL Pulse with role-based data abstraction, Athena also generates executive summaries and visual insights for every page of the platform.",
    result:
      "90% of manual data extraction and Excel delivery to business and external stakeholders is now handled by Athena. Hundreds of questions are answered daily across internal teams and external B2B hotel clients. The analytics team's time shifted from repetitive extraction to higher-value work.",
    tags: ["Conversational AI", "RAG Architecture", "NL2SQL", "Analytics Automation", "AI Product"],
    metrics: [
      { value: "90%", label: "Workload Eliminated" },
      { value: "100s", label: "Daily Queries" },
      { value: "0", label: "Hallucinations" },
    ],
  },
  {
    slug: "personas-dashboard",
    title: "Organization Personas Dashboard",
    subtitle: "Turning 2M Bookings Into Commercial Decisions",
    outcome:
      "Built the commercial intelligence brain of IOL World — a 19-module platform that turned weeks of guesswork into one-click decisions for 15-20 daily users.",
    situation:
      "IOL World manages 400+ B2B client companies. Without a structured view of their behaviour, performance, and potential, the commercial team was operating on intuition. Client onboarding, source optimization, churn risk, account manager accountability — all managed through manual SQL queries and gut feel.",
    challenge:
      "Build a single platform that gives the entire commercial team — sales, account management, and compliance — the intelligence they need to make faster, better decisions about every client relationship.",
    action:
      "I designed and built a 19-module Streamlit intelligence platform running on a nightly-refreshed pipeline from 2M+ booking records. The platform includes 6-cluster persona profiling with radar charts, an 8-dimension Source Matcher scoring engine, RFM health scoring with churn tracking, KAM performance dashboards with peer-normalised views, BRG compliance monitoring, and a full Organization 360 per client.",
    result:
      "Partner optimization moved from weeks of hit-and-trial to a single click. Every new client onboarding decision is now driven by scored recommendations. Management has full transparent visibility into KAM performance for the first time. 15-20 people use the platform daily to monitor partner health, identify at-risk clients, and decide which sources to open or shut down.",
    tags: ["Commercial Intelligence", "Analytics Platform", "RFM Scoring", "KAM Analytics", "B2B Intelligence"],
    metrics: [
      { value: "2M+", label: "Booking Records" },
      { value: "19", label: "Modules" },
      { value: "15-20", label: "Daily Users" },
    ],
  },
];

export const allProjects = [
  {
    slug: "brg-system",
    title: "BRG Violation Management System",
    description:
      "Replaced a manual spreadsheet process with a full enterprise workflow — automated enrichment from live booking data, multi-team resolution tracking, and a compliance dashboard.",
    outcome: "Resolution rate: 36% → 87% | $100K+ refunds recovered | 30+ users across 4 teams",
    tags: ["Process Automation", "Compliance", "Enterprise App", "Revenue Recovery"],
    metrics: [
      { value: "87%", label: "Resolution Rate" },
      { value: "36%", label: "Was" },
      { value: "30+", label: "Users" },
    ],
  },
  {
    slug: "revenue-forecast",
    title: "Revenue Forecasting & Growth Strategy",
    description:
      "Delivered a $350M → $1B revenue growth roadmap to IOL World's C-suite using ensemble forecasting with custom business logic and event trends embedded.",
    outcome: "3-year growth strategy with chain → client → region → country → city drill-down, monitored weekly",
    tags: ["Forecasting", "Strategic Analytics", "Prophet", "LSTM", "C-Suite"],
    metrics: [
      { value: "$350M", label: "Current Revenue" },
      { value: "$1B", label: "Target (3yr)" },
      { value: "Weekly", label: "Monitoring" },
    ],
  },
  {
    slug: "pricing-intelligence",
    title: "Pricing Intelligence & Margin Automation",
    description:
      "Transformed markup optimization from weeks of guesswork into a weekly data-driven decision cycle with trend-based pricing recommendations for each demand partner.",
    outcome: "Created the first feedback loop for markup decisions — weeks of guesswork reduced to weekly clarity",
    tags: ["Pricing Strategy", "Margin Analytics", "Automation", "Revenue Optimization"],
    metrics: [
      { value: "Weekly", label: "Feedback Loop" },
      { value: "WoW", label: "Margin Tracking" },
      { value: "Auto", label: "Recommendations" },
    ],
  },
  {
    slug: "travel-intelligence",
    title: "Travel Intelligence POC — Crisis Response",
    description:
      "When geopolitical conflict threatened hospitality demand, I built a crisis-aware analytics platform to help hotel executives identify at-risk KPIs and protect revenue through the uncertainty.",
    outcome: "Later informed the Crisis Intelligence module of IOL Pulse — now used by 300+ chains",
    tags: ["Crisis Analytics", "Hospitality Tech", "POC", "Executive Decision Support"],
    metrics: [
      { value: "Real-time", label: "Crisis Signals" },
      { value: "Multi-source", label: "Data Integration" },
      { value: "→ Pulse", label: "Productionised" },
    ],
  },
  {
    slug: "pipeline-intelligence",
    title: "iOL X Pipeline Intelligence",
    description:
      "Monday.com's default board view can't answer: what did the funnel look like 3 months ago? Which deals moved this week? Which owners are driving progress backward? I built a fully embedded Board View app that answers all of it — real-time webhooks writing to PostgreSQL, point-in-time funnel reconstruction, and an owner movement scoring engine across 1,500+ deals.",
    outcome: "Delivered end-to-end in 48 hours — React frontend on Vercel, Node.js/Express on Azure, PostgreSQL event log, real-time webhooks",
    tags: ["Monday.com App", "Pipeline Analytics", "React", "Node.js", "PostgreSQL", "Azure"],
    metrics: [
      { value: "48 hrs", label: "Concept to Deploy" },
      { value: "1,500+", label: "Deals Tracked" },
      { value: "10-stage", label: "Funnel with History" },
    ],
  },
];

export const skills = [
  {
    category: "Analytics Leadership",
    items: [
      "KPI Strategy & Design",
      "Analytics Roadmaps",
      "Stakeholder Management",
      "Business Requirements Translation",
      "Analytics Product Management",
      "Data-Driven Decision Frameworks",
    ],
  },
  {
    category: "Business Intelligence",
    items: [
      "Power BI (DAX, Semantic Models)",
      "Streamlit",
      "Tableau",
      "Executive Dashboard Design",
      "Data Storytelling",
      "Visual Analytics",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "PostgreSQL · SQL Server · MySQL",
      "Elasticsearch",
      "Azure Cosmos DB · MongoDB",
      "Data Modelling",
      "ETL Pipeline Architecture",
      "Data Quality & Governance",
    ],
  },
  {
    category: "Analytics Engineering",
    items: [
      "Python (pandas, NumPy, FastAPI)",
      "Reporting Automation",
      "REST API Design",
      "Docker",
      "Azure App Services",
      "AWS (EC2, S3, Lambda)",
    ],
  },
  {
    category: "AI & Emerging Technologies",
    items: [
      "LLM Integration (GPT-4o, Llama)",
      "RAG Architecture",
      "Vector Databases (Qdrant, FAISS)",
      "NL2SQL Systems",
      "Machine Learning (Prophet, LSTM)",
      "Agentic AI Pipelines",
    ],
  },
  {
    category: "Domain Expertise",
    items: [
      "Hospitality & Travel Technology",
      "Revenue Management Analytics",
      "B2B Commercial Intelligence",
      "Rate Parity & Compliance",
      "Booking Behaviour Analysis",
      "Supply-Demand Forecasting",
    ],
  },
];

export const career = [
  {
    period: "May 2024 – Present",
    role: "Data Scientist / Senior Data Analyst",
    company: "IOL World",
    location: "Dubai, UAE",
    description:
      "Originated IOL Pulse — a POC that became a commercial product serving 90,000+ hotels. Built Athena, Personas Dashboard, BRG System, Revenue Forecast, and Pricing Intelligence. Acts as analytics product lead — from requirements to pipeline to testing.",
    highlight: "Promoted to analytics lead role within 12 months",
  },
  {
    period: "Oct 2021 – Oct 2023",
    role: "AI/ML Engineer → Team Lead",
    company: "Codistan Ventures",
    location: "Islamabad, Pakistan",
    description:
      "Promoted to Team Lead within 6 months. Led delivery of 25+ enterprise ML and AI projects across NLP, computer vision, time-series forecasting, and classification for international clients including major US sports leagues.",
    highlight: "Promoted to Team Lead within 6 months",
  },
  {
    period: "Aug 2021 – Oct 2021",
    role: "Python / Data Engineering Intern",
    company: "VisionX Technologies",
    location: "Islamabad, Pakistan",
    description:
      "Built data scraping and processing pipelines for logistics tracking. Developed REST APIs for real-time data sync and reporting.",
    highlight: "",
  },
];

export const education = [
  {
    period: "2023 – 2024",
    degree: "MSc Data Science — Distinction",
    institution: "Middlesex University Dubai",
    detail: "Thesis: Predictive Analytics for Hotel Bookings & Cancellations using LSTM Time-Series Modelling",
  },
  {
    period: "2018 – 2022",
    degree: "BSc Computer Engineering — Gold Medalist",
    institution: "Bahria University, Islamabad",
    detail: "Final Year Project: Deep Learning-based Person Re-Identification using Computer Vision",
  },
];

export const thoughtLeadership = [
  {
    title: "How I Turned a 3-Day POC Into a Product Used by 90,000 Hotels",
    description:
      "The story behind IOL Pulse and what it taught me about the gap between analytics demos and analytics products.",
    tag: "Product Analytics",
    status: "coming-soon",
  },
  {
    title: "Why Your BI Dashboard Isn't Changing Decisions",
    description:
      "The difference between a dashboard that informs and one that drives action — and the design choices that determine which one you've built.",
    tag: "Analytics Strategy",
    status: "coming-soon",
  },
  {
    title: "Conversational Analytics: What It Actually Takes to Build It",
    description:
      "What I learned building Athena: entity resolution, hallucination prevention, and why most LLM analytics tools fail.",
    tag: "AI & Analytics",
    status: "coming-soon",
  },
];
