export interface Project {
  id: string;
  title: string;
  category: 'systems' | 'multi-tenant' | 'commerce';
  categoryLabel: string;
  featured: boolean;
  subtitle: string;
  summary: string;
  problem: string;
  architecture: string;
  tradeoffs: string;
  stack: string[];
  outcomes: string;
  liveUrl?: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'perpetual-order-guard',
    title: 'Perpetual & Order Guard',
    category: 'commerce',
    categoryLabel: 'Commerce & Ops',
    featured: true,
    subtitle: 'WhatsApp-Native Business Ops & Atomic Postgres Locking',
    summary: 'WhatsApp-native business operations platform powered by an atomic PostgreSQL inventory-locking engine hosted on hardened Ubuntu Linux.',
    problem: 'High-velocity WhatsApp merchants suffered double-allocation and overselling during flash drops when multiple buyers claimed identical SKUs within milliseconds under variable mobile latency.',
    architecture: 'Engineered Order Guard around PostgreSQL row-level locking (SELECT ... FOR UPDATE NOWAIT) inside strict ACID transactions, paired with idempotent webhook ingestion, Redis state coordination, and containerized services on a self-hosted Ubuntu Linux server.',
    tradeoffs: 'Chose pessimistic PostgreSQL row-level locks over optimistic application-layer retries to guarantee zero overselling under contention, accepting slight serialization on hot SKUs in exchange for deterministic financial accuracy.',
    stack: ['PostgreSQL', 'Python', 'Redis', 'Ubuntu Linux', 'WhatsApp API', 'Docker'],
    outcomes: 'Eliminated inventory double-allocation completely while maintaining sub-second conversational checkout confirmations and predictable self-hosted infrastructure costs.'
  },
  {
    id: 'tennissuite',
    title: 'Tennissuite Engine',
    category: 'multi-tenant',
    categoryLabel: 'Multi-Tenant Platforms',
    featured: true,
    subtitle: 'Multi-Tenant University Tennis Tournament Platform',
    summary: 'Multi-tenant university tennis tournament and match-scheduling platform refactored into a deterministic object-oriented engine architecture.',
    problem: 'University athletic directors managed multi-division draws, court assignments, and mandatory athlete rest intervals in fragile spreadsheets, causing schedule collisions during peak fixtures.',
    architecture: 'Refactored the scheduling core into a clean object-oriented domain engine with explicit match state machines, backed by a multi-tenant relational schema isolating institutions, divisions, and real-time court allocations.',
    tradeoffs: 'Prioritized strict domain encapsulation and deterministic state transitions over rapid ad-hoc CRUD scripts, adding upfront modeling effort that eliminated silent bracket corruption during live rain delays.',
    stack: ['Java', 'OOP Engine', 'PostgreSQL', 'React', 'REST API'],
    outcomes: 'Cut tournament scheduling overhead by over 70% while giving coaches, referees, and athletes real-time match progression visibility.'
  },
  {
    id: 'smart-matatu-dispatch',
    title: 'Smart Matatu Dispatch System',
    category: 'commerce',
    categoryLabel: 'Commerce & Ops',
    featured: true,
    subtitle: 'Live Fleet Dispatch & Google Sheets Audit Pipeline',
    summary: 'Live Nairobi commuter fleet dispatch console integrated with an automated Google Sheets compliance audit-trail pipeline deployed on Vercel.',
    problem: 'Urban SACCO transit operators lacked live stage queue visibility, turnaround interval metrics, and tamper-evident daily operational records usable by non-technical dispatchers.',
    architecture: 'Built a mobile-first, low-latency dispatch interface deployed on Vercel Edge that synchronizes live departure events asynchronously into structured, append-only Google Sheets audit ledgers.',
    tradeoffs: 'Used Google Sheets as an executive audit sink rather than forcing operators into a complex BI dashboard, ensuring immediate operational adoption while preserving structured transactional logs.',
    stack: ['React', 'Node.js', 'Google Sheets API', 'Vercel', 'Tailwind CSS'],
    outcomes: 'Delivered real-time stage dispatch visibility and instant end-of-day compliance audit trails with zero onboarding friction for field marshals.',
    liveUrl: 'https://commute-ke-alpha.vercel.app'
  },
  {
    id: 'tmsavannah-preview',
    title: 'TMSavannah & Client Preview Architecture',
    category: 'multi-tenant',
    categoryLabel: 'Multi-Tenant Platforms',
    featured: false,
    subtitle: 'Multi-Vendor Storefronts, QR Routing & PIN Staging',
    summary: 'Multi-vendor digital commerce infrastructure combining dynamic QR menu routing with path and PIN-isolated client staging environments.',
    problem: 'Hospitality and retail vendors needed instant QR-routed digital storefronts, while consultancy clients required private, zero-friction staging previews shielded from public indexing.',
    architecture: 'Architected dynamic multi-tenant slug and QR routing backed by Supabase PostgreSQL alongside an edge-enforced path and PIN gate isolating every active client build under its own staging namespace.',
    tradeoffs: 'Implemented lightweight PIN-gated path isolation instead of full enterprise SSO for client previews, dramatically reducing executive review friction while maintaining strict environment separation.',
    stack: ['React', 'Supabase', 'PostgreSQL', 'Edge Middleware', 'QR Routing'],
    outcomes: 'Shortened executive sign-off cycles and enabled rapid provisioning of multi-vendor storefronts on a unified multi-tenant core.',
    liveUrl: 'https://tmsavannah.com'
  },
  {
    id: 'academic-bursar-erp',
    title: 'Academic & Bursar Management System',
    category: 'systems',
    categoryLabel: 'Systems & Backend',
    featured: false,
    subtitle: 'Java OOP & JDBC Institutional ERP Engine',
    summary: 'Database-backed Java OOP and JDBC institutional engine automating academic term rollovers, student enrollment, grading, and bursar approvals.',
    problem: 'Siloed registrar and bursar records created fee clearance bottlenecks, manual grading discrepancies, and error-prone multi-day term rollover workflows.',
    architecture: 'Engineered a normalized relational schema accessed through parameterized Java JDBC service layers, enforcing transactional role-based approval gates across enrollment, grading, and fee clearance.',
    tradeoffs: 'Adopted explicit JDBC transaction control and prepared statements over heavy ORM abstractions to maintain full visibility into SQL execution and atomic term-rollover integrity.',
    stack: ['Java OOP', 'JDBC', 'Relational SQL', 'RBAC', 'ACID Transactions'],
    outcomes: 'Unified academic and financial approval workflows into one auditable source of truth, compressing term rollovers from days to minutes.'
  },
  {
    id: 'avatar-shift',
    title: 'The Avatar Shift',
    category: 'systems',
    categoryLabel: 'Systems & Backend',
    featured: false,
    subtitle: 'Virtual Role Marketplace Schema & Architecture',
    summary: 'Virtual role marketplace relational schema and modular system architecture engineered with React, Vite, and Supabase.',
    problem: 'Emerging virtual role ecosystems needed a fast, cleanly governed marketplace supporting rich role metadata, granular row-level permissions, and live state updates.',
    architecture: 'Designed a modular React + Vite frontend paired with a normalized Supabase PostgreSQL schema, Row-Level Security (RLS) access policies, and real-time subscription channels.',
    tradeoffs: 'Enforced authorization directly at the database layer via PostgreSQL RLS policies rather than duplicating permission checks across API endpoints, reducing attack surface and maintenance drift.',
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL RLS', 'TypeScript'],
    outcomes: 'Established a clean, extensible marketplace core ready for multi-role onboarding with minimal infrastructure overhead.'
  }
];
