export interface ProtocolStep {
  num: string;
  short: string;
  shortTag: string;
  phase: string;
  question: string;
  timeline: string;
  pricingKes: string;
  pricingUsd: string;
  title: string;
  summary: string;
  deliverables: string[];
  techDeliverables: string[];
  signoff: string;
}

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    num: '01',
    short: 'Strategy & Blueprint',
    shortTag: 'DIAGNOSE & PLAN',
    phase: 'PHASE 01 · STRATEGY & BLUEPRINT',
    question: 'Know exactly what to build, what it will cost, and eliminate costly rework before writing a line of code.',
    timeline: 'Week 1',
    pricingKes: 'From KES 300,000 / wk',
    pricingUsd: 'From $2,300 / wk',
    title: 'Strategy & Architecture Blueprint',
    summary: 'Most software projects overrun because teams build on unverified assumptions. We diagnose operational bottlenecks, concurrency risks, and business constraints before committing engineering capital—giving you a locked budget and clear timeline.',
    deliverables: [
      'Operational & Growth Bottleneck Diagnosis Memo',
      'Decoupled Delivery Roadmap with Guaranteed Budget & Milestones',
      'System Architecture Blueprint & Security Safeguard Plan',
      'Executive Feasibility Review & Return-on-Investment Model'
    ],
    techDeliverables: [
      'Operational & Concurrency Audit Memo',
      'Decoupled Feasibility & Phased Milestone Roadmap',
      'Calculated Failure-Mode & Bottleneck Assessment',
      'Guaranteed Delivery Budget & SLA Specification'
    ],
    signoff: 'Mutual executive sign-off on scope boundaries, ROI milestones, and guaranteed delivery budget.'
  },
  {
    num: '02',
    short: 'Interactive Prototype',
    shortTag: 'PROTOTYPE & RULES',
    phase: 'PHASE 02 · PROTOTYPE & RULES',
    question: 'See, click through, and validate your complete system workflows and screens before building.',
    timeline: 'Weeks 1 – 2',
    pricingKes: 'From KES 350,000 / wk',
    pricingUsd: 'From $2,700 / wk',
    title: 'Interactive Prototype & Systems Model',
    summary: 'We transform your business requirements into a live clickable prototype and verified database rules. You and your team click through every screen, user journey, and transaction state before production development begins.',
    deliverables: [
      'Clickable Interactive Prototype (Test Real User Journeys)',
      'Ironclad Business Rules & Transaction State Machine Logic',
      'Complete Database Schema (Zero Duplicate Records or Broken States)',
      'Third-Party API & Payment Integration Architecture'
    ],
    techDeliverables: [
      'Normalized 3NF PostgreSQL Domain Schema Spec',
      'Deterministic State Machines & Transition Invariant Proofs',
      'ISO/IEC 29148 Software Requirements Specification (SRS)',
      'OpenAPI 3.1 Contract & Boundary Schema Definitions'
    ],
    signoff: 'Clickable prototype validation sign-off, data boundary review, and state-machine locking.'
  },
  {
    num: '03',
    short: 'Production Engine',
    shortTag: 'CRASH-PROOF ENGINE',
    phase: 'PHASE 03 · PRODUCTION ENGINE',
    question: 'A high-speed, crash-proof engine built and stress-tested under heavy real-world volume.',
    timeline: 'Weeks 2 – 4',
    pricingKes: 'From KES 800,000',
    pricingUsd: 'From $6,150',
    title: 'High-Assurance Production Build',
    summary: 'We build your core backend engines, database rules, and web interfaces with crash-proof controls. Customers will never encounter duplicate charges, ghost inventory, or dropped orders even during sudden traffic spikes.',
    deliverables: [
      'Crash-Proof High-Traffic Engine (Zero Duplicate Orders or Over-Selling)',
      'Private Client Staging Vault (Test and Approve Before Going Live)',
      'Multi-Tenant Safe Harbor Architecture (Total Data Privacy)',
      'Automated Self-Testing Shield (Prevents New Updates from Breaking Existing Features)'
    ],
    techDeliverables: [
      'Row-Level Pessimistic Locking & Idempotent Event Rails',
      'Isolated Client Staging Vault & Interactive Preview',
      'Multi-Tenant Safe Harbor Security Architecture',
      'Automated Invariant & Regression Guard Harness'
    ],
    signoff: 'Passing test harness under synthetic concurrency load, architecture verification report.'
  },
  {
    num: '04',
    short: 'Cutover & Handover',
    shortTag: 'ZERO-DOWNTIME LAUNCH',
    phase: 'PHASE 04 · ZERO-DOWNTIME LAUNCH',
    question: 'Zero-downtime launch, staff training, complete documentation, and 100% code ownership.',
    timeline: 'Weeks 4 – 8+',
    pricingKes: 'From KES 1,500,000',
    pricingUsd: 'From $11,500',
    title: 'Cutover, Launch & Executive Handover',
    summary: 'We migrate your live customer data with zero downtime, configure 24/7 automated health monitoring, train your internal team, and hand over 100% of the sovereign source code and operational runbooks.',
    deliverables: [
      'Zero-Downtime Live Launch & Seamless Data Cutover',
      'Hardened Cloud/Server Infrastructure Setup (Linux / Docker)',
      '24/7 Self-Healing System Monitoring & Telemetry Daemon',
      'Comprehensive Staff Operational Runbooks & 100% Code Handover'
    ],
    techDeliverables: [
      'Hardened Containerized Deployment (Ubuntu Linux / Docker)',
      'Zero-Downtime Migration & Data Backfill Scripts',
      '24/7 Self-Healing System Monitoring & Telemetry Daemon',
      'Permanent Operator Documentation & Architecture Handover'
    ],
    signoff: 'Certified live cutover verification, zero-defect release sign-off, and executive handover.'
  }
];
