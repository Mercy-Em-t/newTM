export interface CatalogService {
  id: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  title: string;
  description: string;
  investmentUsd: string;
  investmentKes: string;
  actionText: string;
  serviceKey: string;
  isBestseller?: boolean;
  bestsellerLabel?: string;
  category?: string;
}

export interface CatalogProduct {
  id: string;
  badge: string;
  badgeColor: string;
  borderColor: string;
  subBadge: string;
  title: string;
  description: string;
  inquiryText: string;
  isBestseller?: boolean;
  bestsellerLabel?: string;
  category?: string;
}

export interface CatalogCategory {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  items: CatalogItem[];
}

export type CatalogItem = (CatalogService & { itemType: 'service' }) | (CatalogProduct & { itemType: 'product' });

export const CATALOG_SERVICES: CatalogService[] = [
  {
    id: 'legacy-rescue',
    badge: 'Code Audit',
    badgeColor: 'text-indigo-400',
    borderColor: 'border-t-indigo-500',
    title: 'Legacy System Rescue',
    description: 'A deep-dive technical audit of your existing codebase to identify security vulnerabilities, scaling bottlenecks, and technical debt. Includes an executive refactoring roadmap.',
    investmentUsd: 'From $1,500',
    investmentKes: 'From KES 200,000',
    actionText: 'Request Audit →',
    serviceKey: 'Legacy System Rescue Audit',
    isBestseller: true,
    bestsellerLabel: 'Bestseller · High Demand',
    category: 'audits'
  },
  {
    id: 'concurrency-audit',
    badge: 'Concurrency',
    badgeColor: 'text-amber-400',
    borderColor: 'border-t-amber-500',
    title: 'Concurrency & Race-Condition Teardown',
    description: 'Audit high-throughput transaction paths, state mutations, and unhandled edge cases under peak concurrent traffic. Formulate ACID invariants and row-locking strategies.',
    investmentUsd: 'Fixed Sprint ($2,200)',
    investmentKes: 'Fixed Sprint (KES 290k)',
    actionText: 'Book Concurrency Audit →',
    serviceKey: 'Concurrency & Race-Condition Teardown',
    category: 'audits'
  },
  {
    id: 'query-optimization',
    badge: 'Database',
    badgeColor: 'text-cyan-400',
    borderColor: 'border-t-cyan-500',
    title: '3NF Schema & Deadlock Optimization',
    description: 'Resolve database deadlocks and slow load times. We profile SQL queries, implement partial indexing strategies, and restructure relational schemas to strict 3NF standards.',
    investmentUsd: '$65/hr or Sprint',
    investmentKes: 'KES 8k/hr or Sprint',
    actionText: 'Book DBA Audit →',
    serviceKey: 'Database Query & Deadlock Optimization',
    category: 'audits'
  },
  {
    id: 'fsm-engine',
    badge: 'FSM Engine',
    badgeColor: 'text-purple-400',
    borderColor: 'border-t-purple-500',
    title: 'Deterministic FSM State Engine',
    description: 'Replace fragile procedural if/else scheduling logic with explicit, object-oriented finite-state machines, ensuring illegal state transitions are mathematically blocked.',
    investmentUsd: 'Fixed Sprint ($2,500)',
    investmentKes: 'Fixed Sprint (KES 330k)',
    actionText: 'Commission FSM →',
    serviceKey: 'Deterministic FSM State Engine Sprint',
    category: 'backends'
  },
  {
    id: 'transactional-outbox',
    badge: 'Reliability',
    badgeColor: 'text-amber-400',
    borderColor: 'border-t-amber-500',
    title: 'Transactional Outbox & Webhook Dispatcher',
    description: 'Guarantee at-least-once message delivery to third-party payment and chat APIs with transactional deduplication tables, exponential backoff, and dead-letter queues.',
    investmentUsd: 'Fixed Sprint ($1,800)',
    investmentKes: 'Fixed Sprint (KES 240k)',
    actionText: 'Deploy Outbox →',
    serviceKey: 'Transactional Outbox & Webhook Dispatcher',
    category: 'backends'
  },
  {
    id: 'inventory-locking',
    badge: 'ACID Locking',
    badgeColor: 'text-rose-400',
    borderColor: 'border-t-rose-500',
    title: 'Pessimistic Inventory & Seat Locking Engine',
    description: 'Row-level locking microservice for reservation platforms (courts, ticketing, hotel rooms) with automatic TTL reservation expiry and zero overselling guarantees.',
    investmentUsd: 'Fixed Sprint ($2,100)',
    investmentKes: 'Fixed Sprint (KES 280k)',
    actionText: 'Commission Engine →',
    serviceKey: 'Pessimistic Inventory & Seat Locking Engine',
    category: 'backends'
  },
  {
    id: 'cicd-design',
    badge: 'DevOps',
    badgeColor: 'text-precious-gold',
    borderColor: 'border-t-precious-gold',
    title: 'CI/CD Pipeline Design Sprint',
    description: 'Automate your deployments. We design and implement a Dockerized, zero-downtime deployment pipeline using GitHub Actions, staging verification, and cloud hosting.',
    investmentUsd: 'Fixed Sprint ($1,900)',
    investmentKes: 'Fixed Sprint (KES 250k)',
    actionText: 'Deploy Pipeline →',
    serviceKey: 'CI/CD Pipeline Design Sprint',
    isBestseller: true,
    bestsellerLabel: 'Popular DevOps',
    category: 'infrastructure'
  },
  {
    id: 'server-hardening',
    badge: 'Security',
    badgeColor: 'text-blue-400',
    borderColor: 'border-t-blue-500',
    title: 'Bare-Metal Linux Server Hardening',
    description: 'Comprehensive Linux bastion hardening: SSH key isolation, fail2ban rate-limiting, UFW firewall segmentation, automated TLS renewals, and encrypted offsite backups.',
    investmentUsd: 'Fixed Sprint ($1,200)',
    investmentKes: 'Fixed Sprint (KES 160k)',
    actionText: 'Harden Server →',
    serviceKey: 'Bare-Metal Linux Server Hardening',
    category: 'infrastructure'
  },
  {
    id: 'staging-gateway',
    badge: 'Governance',
    badgeColor: 'text-teal-400',
    borderColor: 'border-t-teal-500',
    title: 'PIN-Isolated Staging Gateways',
    description: 'Deploy ephemeral preview environments protected by time-bound PINs so non-technical executives and clients can sign off on builds before production deployment.',
    investmentUsd: 'Fixed Sprint ($1,400)',
    investmentKes: 'Fixed Sprint (KES 185k)',
    actionText: 'Deploy Staging →',
    serviceKey: 'PIN-Isolated Staging Gateways',
    category: 'infrastructure'
  }
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'nueve-streaming',
    badge: 'SaaS License',
    badgeColor: 'text-precious-gold',
    borderColor: 'border-t-precious-gold',
    subBadge: '• Demo Available in Labs',
    title: 'Nueve Streaming Core',
    description: 'Our proprietary, low-latency media streaming architecture. License the core engine to build your own live broadcasting platforms, webinars, or OTT services without relying on costly third-party CDNs.',
    inquiryText: 'Hello Tryphen, I would like to inquire about licensing the Nueve Streaming Core for our video platform.',
    isBestseller: true,
    bestsellerLabel: 'Flagship IP · Top Licensed',
    category: 'ip'
  },
  {
    id: 'order-guard-whatsapp',
    badge: 'E-Commerce IP',
    badgeColor: 'text-precious-gold',
    borderColor: 'border-t-precious-gold',
    subBadge: '• Case Study Verified',
    title: 'Order Guard: WhatsApp Concurrency Gateway',
    description: 'A pre-built conversational commerce middleware that uses row-level PostgreSQL locks and idempotent webhook ingestion to eliminate double-orders and overselling in high-velocity WhatsApp stores.',
    inquiryText: 'Hello Tryphen, I would like to inquire about deploying the Order Guard WhatsApp Concurrency Gateway for our commerce platform.',
    isBestseller: true,
    bestsellerLabel: 'Bestseller · Conversational Commerce',
    category: 'ip'
  },
  {
    id: 'iam-rust',
    badge: 'Microservice IP',
    badgeColor: 'text-purple-400',
    borderColor: 'border-t-purple-500',
    subBadge: '• API Sandbox Available',
    title: 'Identity Access Manager (IAM) in Rust',
    description: 'A drop-in, highly secure authentication microservice featuring JWT-based SSO, role-based access control (RBAC), and hardware key integration. Engineered in Rust for zero-latency verifications and zero garbage collection pauses.',
    inquiryText: 'Hello Tryphen, I would like to inquire about licensing the IAM Rust Microservice.',
    category: 'ip'
  }
];

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'audits',
    index: '01',
    title: 'Architectural Audits & Invariant Verification',
    tagline: 'Zero-Downtime Diagnostics & Teardowns',
    description: 'Targeted technical interventions to diagnose bottlenecks, eliminate concurrency collisions, and establish mathematical invariant guarantees before refactoring.',
    items: CATALOG_SERVICES.filter(s => s.category === 'audits').map(s => ({ ...s, itemType: 'service' as const }))
  },
  {
    id: 'ip',
    index: '02',
    title: 'Sovereign IP & Pre-Built Engines (Emurugat Labs)',
    tagline: 'Licensed Enterprise Cores & Microservices',
    description: 'Production-proven software engines and sovereign architectures available for live demonstration and private enterprise licensing.',
    items: CATALOG_PRODUCTS.filter(p => p.category === 'ip').map(p => ({ ...p, itemType: 'product' as const }))
  },
  {
    id: 'backends',
    index: '03',
    title: 'High-Concurrency Backend Microservices',
    tagline: 'Mission-Critical Domain Engines & Workflows',
    description: 'Custom-commissioned domain engines engineered with explicit finite-state machines, transactional outbox dispatchers, and ACID row-level locking.',
    items: CATALOG_SERVICES.filter(s => s.category === 'backends').map(s => ({ ...s, itemType: 'service' as const }))
  },
  {
    id: 'infrastructure',
    index: '04',
    title: 'Sovereign DevOps & Cloud Infrastructure',
    tagline: 'Automated CI/CD & Hardened Infrastructure',
    description: 'Production deployment pipelines, bare-metal server hardening, and PIN-isolated staging gateways engineered for 99.99% uptime.',
    items: CATALOG_SERVICES.filter(s => s.category === 'infrastructure').map(s => ({ ...s, itemType: 'service' as const }))
  }
];
