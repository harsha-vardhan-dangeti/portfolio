export const personal = {
  name: "Harsha Vardhan Dangeti",
  nameLine1: "Harsha Vardhan",
  nameLine2: "Dangeti",
  initials: "HVD",
  brand: "HVD",
  title: "Backend & AI Engineer",
  email: "harshavardhan.dangeti2001@gmail.com",
  location: "Gachibowli, Hyderabad, IN",
  locationShort: "Gachibowli, Hyderabad",
  resumePdf: "/Harsha_Vardhan_Dangeti_Resume.pdf",
  // Set to image path (e.g. "/profile.jpg") to show your photo; null shows initials placeholder
  avatar: "/profile.webp",
  // Tags shown in the home page profile card
  profileStack: ["Ruby on Rails", "Python", "Sidekiq", "RabbitMQ", "Redis", "REST APIs", "LangGraph", "RAG"],
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
    rest: " Rails services, Sidekiq and RabbitMQ pipelines, and storage automation across regional data centers. Now applying the same discipline to LLM workflows: deterministic guardrails, LLM judgment, and a human in the loop.",
  },
  stats: [
    { value: "200 TB", label: "Storage reclaimed by a lifecycle system I built" },
    { value: "8,000+", label: "Git repos served by a GC service I rebuilt" },
    { value: "70%",    label: "Less manual onboarding (≈40 admin hrs/month)" },
  ],
};

export const about = {
  heading: "Background",
  paragraphs: [
    "I've spent 4 years building production backend systems at Qualcomm: Ruby on Rails services, Sidekiq and RabbitMQ pipelines, and storage automation across regional data centers. I designed a storage lifecycle that reclaimed 200 TB, added end-to-end message tracking that ended silent message loss during broker incidents, and led Rails upgrades plus a San Diego to Las Vegas data-center migration with zero data loss. I'm on call for the services I build.",
    "My AI work applies the same discipline. Job Radar, my daily job-triage pipeline in LangGraph, combines deterministic pre-filtering with LLM fit scoring and a human-review gate before any action is taken. At Qualcomm I've presented on AI/ML, vector databases, AWS SageMaker and agentic AI development, and I was a finalist in the QBUZZ Hackathon 2025.",
    "I care about the gap between \"it works in the notebook\" and \"it works in production.\" Backend engineering is how you close it: clear contracts, tests, monitoring and failure handling.",
  ],
  facts: [
    { label: "Location",          value: "Gachibowli, Hyderabad, IN" },
    { label: "Current role",      value: "IT Software Developer, Qualcomm" },
    { label: "Total experience",  value: "~4.5 yrs (incl. HPE internship)" },
    { label: "Focus area",        value: "Backend & AI engineering: Rails and Python services, LLM workflows" },
    { label: "Status",            value: "Open to backend & AI roles · Remote/Hybrid", highlight: true },
    { label: "Outside tech",      value: "Distance running, VO₂ max tracking, meal prep, content creation" },
  ],
};

export const experience = [
  {
    role: "IT Software Developer",
    company: "Qualcomm",
    dates: "Dec 2024 — Present · ~2 yrs",
    current: true,
    bullets: [
      "Designed and shipped a 3-stage automated storage lifecycle (archival, rebalancing, promotion) for ChipCode repositories across regional data centers, using scheduled Sidekiq workers to purge inactive repositories and delete expired archives. Reclaimed 200 TB of storage and cut manual cleanup effort by 80%.",
      "Automated the Export Compliance reporting process, saving global teams 2 weeks of manual work per cycle and speeding validation for the U.S. Government's biannual compliance review.",
      "Built end-to-end RabbitMQ message-status tracking (received, processing, completed, failed) across publisher and aggregator services for release workflows, eliminating silent message loss during broker incidents. On call for these services: built the monitoring alerts and lead incident response for 6 message types and 500+ messages a day.",
      "Led the upgrade of 3 production services (ChipCode, RDC Git Services, Token Master) to Ruby 3.1.6 / Rails 6.1, raising unit test coverage by 15% and cutting job processing time by 20% with a Resque to Sidekiq-Cron migration. Then moved them from San Diego to Las Vegas with blue-green deployments, improving latency and reliability with zero data loss.",
      "Modernized SlimFast, a legacy Git garbage-collection service for the LV and RDC regions: upgraded to Ruby 3.4.5 / Rails 8.1, added Swagger-documented REST APIs for bulk repack requests and status tracking, and moved execution to Sidekiq-Cron on Redis Sentinel. Reduced loose objects by 70% across 8,000+ repositories.",
      "Improved Service Manager performance by 25% by upgrading it from Ruby 2.3 / Rails 3.2 to Ruby 3.1 / Rails 6.1 and re-architecting it with new API modules.",
    ],
    tags: ["Ruby on Rails", "Sidekiq", "RabbitMQ", "Redis", "Python", "SQL", "REST APIs", "React"],
  },
  {
    role: "Associate IT Software Developer",
    company: "Qualcomm",
    dates: "Jul 2022 — Nov 2024 · ~2.5 yrs",
    current: false,
    bullets: [
      "Architected and deployed an automated email notification system that improved download and clone efficiency by 40%.",
      "Revamped an LDAP-backed user provisioning API, cutting manual onboarding effort by 70% (about 40 admin hours a month).",
      "Rebuilt the release cache update path, cutting cache update time by 25%, and added post-sync routing of customers to their nearest regional data center, making downloads and clones 35% faster.",
    ],
    tags: ["Ruby on Rails", "Python", "JavaScript", "Redis", "Sidekiq", "SQL", "RSpec", "CI/CD", "AWS"],
  },
  {
    role: "Technical Solution Consultant (GRSB Internship)",
    company: "Hewlett Packard Enterprise",
    dates: "Jan 2022 — Jul 2022 · ~6 months",
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
    description: "Web app for a Hyderabad triathlon club: public landing page with a live countdown to the next session, member dashboard with RSVPs and training logs, and an admin console for events, members and testimonial moderation. Supabase Postgres with row-level security, Google OAuth, the Strava API and Google Maps.",
    github: "https://github.com/harsha-vardhan-dangeti/turtle-runners",
    demo: "https://turtlerunners.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    icon: "users",
    featured: true,
    image: "/projects/turtle-runners.webp",
    imageAlt: "Turtle Runners landing page with the headline 'Swim the lake. Ride the dawn. Run it home.'",
    highlights: [
      "Member and admin roles enforced in Postgres with row-level security, not just in the UI",
      "Strava REST API imports members' running, cycling and swimming activity into one dashboard",
      "Admin console for events, members and testimonial moderation, with Google Maps for event locations",
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
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science & Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, IN",
    dates: "Jun 2018 — Mar 2022",
    grade: "CGPA: 8.13/10",          // e.g. "CGPA: 8.4 / 10" — leave empty to hide
    highlights: [],     // e.g. ["Relevant coursework: ...", "Final year project: ..."]
  },
];

// The three areas an interviewer should remember. Shown above the skill explorer.
export const strengths = [
  {
    title: "Production backend",
    text: "Rails services at Qualcomm since 2022: Sidekiq and RabbitMQ pipelines, on call for 500+ messages a day, and a storage lifecycle that reclaimed 200 TB.",
  },
  {
    title: "LLM workflows",
    text: "Job Radar: a LangGraph triage pipeline with deterministic pre-filtering, LLM fit scoring and a human-review gate before any action.",
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
    items: ["Ruby on Rails", "Sidekiq", "RabbitMQ", "Redis", "REST APIs", "FastAPI", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "AI engineering",
    items: ["LangGraph", "LangChain", "Agentic workflows", "RAG pipelines", "Vector databases", "RAGAS", "PyTorch"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "React Router", "PWA", "HTML/CSS"],
  },
  {
    category: "Languages",
    items: ["Python", "Ruby", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Testing",
    items: ["RSpec", "Vitest", "React Testing Library"],
  },
  {
    category: "Cloud & tooling",
    items: ["AWS", "Docker", "Jenkins", "CI/CD", "Git", "Vercel"],
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
    title: "Finalist — Qualcomm QBUZZ Hackathon 2025",
    meta: "Qualcomm · 2025 · Finalist",
    description: "Reached the finals of QBUZZ, Qualcomm's internal hackathon, in 2025.",
    icon: "trophy",
  },
  {
    title: "Internal tech talks on emerging technology",
    meta: "Qualcomm · Multiple presentations",
    description: "Presented to Qualcomm teams on AI/ML, vector databases, AWS cloud services and SageMaker, and agentic AI development, helping teams evaluate and adopt new tools.",
    icon: "edit",
    note: "Internal talks — slides available on request.",
  },
];
