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
    subtitle: 'Zero-Overselling WhatsApp Engine & Atomic Postgres Locking',
    summary: 'Built for high-velocity merchants who cannot afford stock collisions. Stops double-allocation dead in its tracks when 50 buyers rush the same SKU simultaneously over WhatsApp.',
    problem: 'During high-velocity flash drops, dozens of WhatsApp buyers send payment proofs for the same limited item within seconds. Fragile software sells the same stock twice, leaving merchants with angry customers, manual refund chaos, and damaged trust.',
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
    subtitle: 'Rain-Delay Resilient Tournament Match Scheduling Engine',
    summary: 'A deterministic scheduling engine that dynamically recalculates matches, courts, and rest windows without breaking tournament brackets when rain hits.',
    problem: 'A sudden afternoon downpour floods 4 courts at 2 PM. Athletic directors are stuck juggling paper sheets and spreadsheets trying to reassign 30 matches while respecting mandatory athlete rest rules, leading to schedule collisions and exhausted players.',
    architecture: 'Refactored the scheduling core into a clean object-oriented domain engine with explicit match state machines, backed by a multi-tenant relational schema isolating institutions, divisions, and real-time court allocations.',
    tradeoffs: 'Prioritized strict domain encapsulation and deterministic state transitions over rapid ad-hoc CRUD scripts, adding upfront modeling effort that eliminated silent bracket corruption during live rain delays.',
    stack: ['Java', 'OOP Engine', 'PostgreSQL', 'React', 'REST API'],
    outcomes: 'Cut tournament rescheduling time from hours of chaotic guesswork to automated one-click recalculations with real-time progression visible to players and coaches.'
  },
  {
    id: 'smart-matatu-dispatch',
    title: 'Smart Matatu Dispatch System',
    category: 'commerce',
    categoryLabel: 'Commerce & Ops',
    featured: true,
    subtitle: 'Tamper-Evident Fleet Dispatch & Google Sheets Audit Engine',
    summary: 'Live Nairobi commuter vehicle dispatch system turning chaotic stage queues into tamper-evident, automated Google Sheets audit ledgers.',
    problem: 'Urban matatu SACCO operators had zero visibility into stage queues, departure intervals, or collected revenue. Field marshals relied on paper clipboards that got lost or altered, bleeding cash and leaving fleet owners in the dark.',
    architecture: 'Built a mobile-first, low-latency dispatch interface deployed on Vercel Edge that synchronizes live departure events asynchronously into structured, append-only Google Sheets audit ledgers.',
    tradeoffs: 'Used Google Sheets as an executive audit sink rather than forcing operators into a complex BI dashboard, ensuring immediate operational adoption while preserving structured transactional logs.',
    stack: ['React', 'Node.js', 'Google Sheets API', 'Vercel', 'Tailwind CSS'],
    outcomes: 'Eliminated manual clipboard loss, provided live departure tracking for field marshals on mobile, and automated tamper-evident daily revenue audit ledgers.',
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
