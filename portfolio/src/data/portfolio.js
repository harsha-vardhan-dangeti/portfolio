export const personal = {
  name: "Harsha Vardhan Dangeti",
  nameLine1: "Harsha Vardhan",
  nameLine2: "Dangeti",
  initials: "HVD",
  brand: "HVD",
  title: "Backend & AI Engineer",
  email: "harsha.vardhan.422812@gmail.com",
  location: "Gachibowli, Hyderabad, IN",
  locationShort: "Gachibowli, Hyderabad",
  resumePdf: "https://drive.google.com/uc?export=download&id=1JFOjrIYu5S6Q3qrWltE_m1WWS5-rcATQ",
  // Set to image path (e.g. "/profile.jpg") to show your photo; null shows initials placeholder
  avatar: "/profile.webp",
  // Tags shown in the home page profile card
  profileStack: ["Ruby on Rails", "Python", "REST APIs", "MySQL", "Redis", "RabbitMQ", "RAG", "RAGAS"],
  linkedin: {
    url: "https://www.linkedin.com/in/harshavardhandangeti/",
    handle: "linkedin.com/in/harshavardhandangeti",
  },
  github: {
    url: "https://github.com/harsha-vardhan-dangeti",
    handle: "github.com/harsha-vardhan-dangeti",
  },
  credly: "harsha-vardhan.c11364e9",
};

export const hero = {
  badge: "Open to backend and AI engineering roles, remote or hybrid",
  tagline: {
    bold: "4 years building production backend systems at Qualcomm.",
    rest: " Now bringing the same backend discipline to LLM systems: RAG pipelines with measured retrieval quality, and the evaluation that catches regressions before users do.",
  },
  stats: [
    { value: "1M+",  label: "API requests a day on Rails services I maintain" },
    { value: "500K+", label: "Users of the Qualcomm apps I build" },
    { value: "~40%", label: "Fewer RAG hallucinations (HyDE)" },
  ],
};

export const about = {
  heading: "Background",
  paragraphs: [
    "I've spent 4 years building production Ruby on Rails APIs at Qualcomm: services handling 1M+ requests a day for 500K+ users, zero-downtime schema migrations on multi-million-row tables, RabbitMQ background jobs and Redis caching. That work gave me strong opinions about API contracts, failure handling, and what it takes to ship safely.",
    "My AI work builds on that foundation. I built a RAGAS evaluation pipeline for an internal RAG system and used it to show that HyDE retrieval cut hallucinations on schema-sensitive queries by about 40%. I taught the method in a 45-minute internal workshop with a live demo, and my Vision2Code prototype, which turns design mockups into frontend code, was a Hot Finalist at Qualcomm's AIBUZZ competition.",
    "I care about the gap between \"it works in the notebook\" and \"it works in production.\" Backend engineering is how you close it: clear contracts, tests, measurement and failure handling.",
  ],
  facts: [
    { label: "Location",          value: "Gachibowli, Hyderabad, IN" },
    { label: "Current role",      value: "IT Software Developer, Qualcomm" },
    { label: "Total experience",  value: "~4.5 yrs (incl. HPE internship)" },
    { label: "Focus area",        value: "Backend & AI engineering: Rails and Python APIs, RAG evaluation" },
    { label: "Status",            value: "Open to backend & AI roles · Remote/Hybrid", highlight: true },
    { label: "Outside tech",      value: "Distance running, VO₂ max tracking, meal prep, content creation" },
  ],
};

export const experience = [
  {
    role: "IT Software Developer",
    company: "Qualcomm",
    dates: "2025 — Present · ~1.5 yrs",
    current: true,
    bullets: [
      "Maintain and extend production Ruby on Rails APIs serving 500K+ users and 1M+ requests a day.",
      "Led zero-downtime schema migrations on live tables of several million rows.",
      "Built a RAGAS evaluation pipeline for an internal RAG system and used it to A/B test retrieval changes: adding HyDE cut hallucinations on schema-sensitive queries by ~40% against the baseline (RAGAS faithfulness).",
      "Delivered 45-min RAG Evaluation workshop (live demo on production data) and AI Trends 2025–2026 presentation to an engineering org of 50+ engineers.",
    ],
    tags: ["Ruby on Rails", "PostgreSQL", "Python", "LangChain", "RAGAS", "BigQuery"]
  },
  {
    role: "Associate IT Software Developer",
    company: "Qualcomm",
    dates: "2022 — 2025 · ~2.5 yrs",
    current: false,
    bullets: [
      "Shipped Rails features end to end for apps used by 500K+ people: MySQL schema design, REST API implementation and frontend integration.",
      "Moved long-running work off the request path into RabbitMQ background jobs, and cached hot reads in Redis.",
      "Wrote and maintained RSpec suites for the REST APIs, and containerised local development with Docker to match production.",
    ],
    tags: ["Ruby on Rails", "JavaScript", "MySQL", "Redis", "RSpec", "REST APIs", "RabbitMQ", "Docker"],
  },
  {
    role: "Technical Solution Consultant (GRSB Internship)",
    company: "Hewlett Packard Enterprise",
    dates: "2022 · ~6 months",
    current: false,
    bullets: [
      "Built Python and shell automation for internal workflows with cross-functional teams, cutting manual effort by about 30%.",
    ],
    tags: ["Python", "Shell Scripting", "Automation", "Cross-functional Collaboration"],
  },

];

export const projects = [
  {
    title: "Tally — Expense Tracker",
    description: "Mobile-first PWA that answers \"what's safe to spend today?\". Works offline through a versioned service worker, syncs phone and laptop via Supabase with Google sign-in, and logs spends from plain text (\"lunch 350, split with arjun\") or receipt photos using in-browser Tesseract OCR.",
    github: "https://github.com/harsha-vardhan-dangeti/tally-web",
    demo: "https://tally-web-kappa.vercel.app",
    tags: ["React", "TypeScript", "Vite", "Supabase", "PWA"],
    icon: "wallet",
    featured: true,
    image: "/projects/tally.webp",
    imageAlt: "Tally landing page showing a safe-to-spend-today card and a Smart add demo parsing 'lunch 350 at chutneys, split with arjun'",
    highlights: [
      "Offline-first: a build step versions every file and precaches the release in a service worker",
      "Smart add parses free text and receipt photos entirely in the browser (Tesseract WebAssembly)",
      "Restores are validated, then written in one IndexedDB transaction with an undo point",
    ],
  },
  {
    title: "Turtle Runners — Club Platform",
    description: "Web app for a Hyderabad triathlon club: public landing page with a live countdown to the next session, member dashboard with RSVPs and training logs, and an admin console for events, members and testimonial moderation. Supabase Postgres with row-level security and Google OAuth.",
    github: "https://github.com/harsha-vardhan-dangeti/turtle-runners",
    demo: "https://turtlerunners.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    icon: "users",
    featured: true,
    image: "/projects/turtle-runners.webp",
    imageAlt: "Turtle Runners landing page with the headline 'Swim the lake. Ride the dawn. Run it home.'",
    highlights: [
      "Member and admin roles enforced in Postgres with row-level security, not just in the UI",
      "Admin console for events, members and testimonial moderation",
      "Runs fully in a seeded demo mode when no Supabase keys are present",
    ],
  },
  {
    title: "Job Hunt HQ",
    description: "Private job-search tracker on Next.js App Router and Supabase, with a token-authenticated REST API that a scheduled AI agent writes new roles into. Sign-in is restricted to an allow-listed Google account.",
    github: "https://github.com/harsha-vardhan-dangeti/job-hunt-hq",
    demo: "https://job-hunt-hq-pi.vercel.app",
    tags: ["Next.js", "React", "Supabase", "REST API"],
    icon: "briefcase",
    featured: true,
    demoLocked: true,
  },
  // Only add a project here once it has public code or a live demo. Projects
  // without `featured: true` render in the grid on /projects.
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, IN",
    dates: "2018 — 2022",
    grade: "CGPA: 8.1/10",          // e.g. "CGPA: 8.4 / 10" — leave empty to hide
    highlights: [],     // e.g. ["Relevant coursework: ...", "Final year project: ..."]
  },
];

// The three areas an interviewer should remember. Shown above the skill explorer.
export const strengths = [
  {
    title: "Production backend",
    text: "Rails APIs at Qualcomm since 2022, serving 500K+ users and 1M+ requests a day: zero-downtime migrations on multi-million-row tables, RabbitMQ background jobs, Redis caching and RSpec coverage.",
  },
  {
    title: "Measured RAG",
    text: "A RAGAS evaluation pipeline that showed HyDE retrieval cut hallucinations by about 40%, taught to 50+ engineers in an internal workshop.",
  },
  {
    title: "Full stack product",
    text: "Three live apps on React, Next.js and Supabase, with offline support, row-level security and Google sign-in.",
  },
];

// This portfolio is evidence too. Used by the skill explorer.
export const siteBuild = {
  title: "This portfolio",
  detail: "React SPA with client-side routing, serverless GitHub and Credly APIs on Vercel, and 160+ Vitest + React Testing Library tests.",
  tags: ["React", "React Router", "Vite", "JavaScript", "HTML/CSS", "Vitest", "React Testing Library", "REST APIs", "Git"],
};

export const skills = [
  {
    category: "Backend",
    items: ["Ruby on Rails", "REST APIs", "FastAPI", "PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Supabase"],
  },
  {
    category: "AI engineering",
    items: ["RAGAS", "HyDE", "LangChain", "RAG evaluation", "Embeddings", "Vector Search"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "React Router", "PWA", "HTML/CSS"],
  },
  {
    category: "Languages",
    items: ["Python", "Ruby", "JavaScript", "SQL"],
  },
  {
    category: "Testing",
    items: ["RSpec", "Vitest", "React Testing Library"],
  },
  {
    category: "Cloud & tooling",
    items: ["BigQuery", "Google Cloud", "AWS", "Docker", "Git", "GitHub Actions"],
  },
];

// Credly badges also load live on the site (api/credly.js), so new badges
// appear automatically; the Credly entries here are the offline fallback.
// Add certificates that aren't on Credly or LinkedIn here by hand.
// LinkedIn courses: `npm run import:linkedin -- <LinkedIn export .zip or Certifications.csv>`.
export const certifications = [
  {
    issuer: "Google for Developers · Hack2skill",
    name: "PromptWars: Hyderabad — Participant",
    date: "2026-06-02",
    url: "https://certificate.hack2skill.com/claim/6035e10e31e66b03010073e1ecd8da79b9d76fda322bfce5c5da49f802c349a5",
    image: null,
    badge: "🏆",
  },
  {
    issuer: "IBM",
    name: "Docker Essentials: A Developer Introduction",
    date: "2023-09-22",
    url: "https://www.credly.com/badges/bcc7cad1-0b64-4504-b3c4-1e53f0e50df9",
    image: "https://images.credly.com/images/b0c5445a-72a2-46ce-a599-96147e210efb/blob",
  },
  {
    issuer: "Cisco",
    name: "Cybersecurity Essentials",
    date: "2021-05-13",
    url: "https://www.credly.com/badges/3619372b-50d2-40ef-9859-7c7baffabce2",
    image: "https://images.credly.com/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png",
  },
  {
    issuer: "Cisco",
    name: "Introduction to Cybersecurity",
    date: "2021-04-18",
    url: "https://www.credly.com/badges/bbd7b01f-b893-4886-af1e-52966d5106a7",
    image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
  },
  {
    issuer: "Cisco",
    name: "Introduction to Packet Tracer",
    date: "2021-04-15",
    url: "https://www.credly.com/badges/c100bb20-ac73-4c86-8f27-3a907afe341e",
    image: "https://images.credly.com/images/09b6d58c-763a-4b40-aea1-787d8f46bbcd/Intro2PT.png",
  },
];

export const githubStats = {
  username: 'harsha-vardhan-dangeti',
  // key maps to the property returned by useGithubData
  highlights: [
    { label: 'Public Repos',    key: 'publicRepos',   icon: 'folder' },
    { label: 'Total Stars',     key: 'totalStars',    icon: 'star'   },
    // Label/value resolved at runtime: accurate "Contributions (1y)" when a
    // token is configured, else the "Commits (90d)" events-feed proxy.
    { label: 'Commits (90d)',   key: 'recentCommits', icon: 'commit' },
    { label: 'Followers',       key: 'followers',     icon: 'pr'     },
  ],
};

export const talks = [
  {
    title: "AIBUZZ Hot Finalist — Vision2Code",
    meta: "Qualcomm AIBUZZ · 2025 · Hot Finalist",
    description: "Selected as a Hot Finalist at Qualcomm's internal AIBUZZ innovation competition for Vision2Code — a system that takes Figma mockups and hand-drawn sketch diagrams as input and generates production-ready frontend code in the chosen technology stack. The pipeline interprets visual design intent, understands component hierarchy from the sketch, and outputs structured, framework-specific components ready for integration.",
    icon: "trophy",
  },
  {
    title: "RAG Evaluation: From Theory to Production",
    meta: "Internal Engineering Talk · 45 min · Live Demo · Audience: 50+ engineers",
    description: "Covered RAGAS framework, G-Eval, HyDE, and custom evaluation metrics for production RAG systems. Included a live evaluation run on a production pipeline demonstrating retrieval quality measurement, hallucination detection, and regression tracking across model changes.",
    icon: "edit",
    note: "Internal talk — slides available on request.",
  },
  {
    title: "AI Engineering Trends 2025–2026",
    meta: "Internal Presentation · Engineering Org",
    description: "Surveyed the evolving AI engineering landscape: agentic frameworks, RAG advancements, MCP protocol adoption, LLM observability tooling, and production deployment patterns. Included concrete takeaways and a framework for evaluating new AI tools before adoption.",
    icon: "monitor",
    note: "Internal talk — slides available on request.",
  },
];
