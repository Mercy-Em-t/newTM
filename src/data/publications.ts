export interface Section {
  num: string;
  heading: string;
  content: string;
  pullQuote?: string;
  blueprintTitle?: string;
  blueprintCode?: string;
  marginalia?: string;
  contentAfter?: string;
  axioms?: string[];
}

export interface Publication {
  id: string;
  ref: string;
  volume: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  subtitle: string;
  lead: string;
  sections: Section[];
  citation: string;
}

export const PUBLICATIONS: Publication[] = [
                {
                    id: 'atomic-pg-locks',
                    ref: 'SAV-PUB-2026-01',
                    volume: 'Vol. IV · Monograph 01',
                    category: 'Distributed Systems & Concurrency',
                    readTime: '9 min read',
                    date: 'November 2026',
                    title: 'Atomic Inventory Locking Under WhatsApp Latency: Inside Order Guard',
                    subtitle: 'How row-level PostgreSQL locks, idempotent webhook ingestion, and deterministic reservation state machines eliminate overselling in high-velocity conversational commerce.',
                    lead: 'Conversational commerce behaves fundamentally differently from traditional browser-based checkout funnels. When an artisan or retailer broadcasts a limited-inventory SKU drop inside a high-traffic WhatsApp broadcast channel, hundreds of concurrent buyers confirm purchase intent within the same 400-millisecond window—frequently over mobile networks with jitter, packet loss, and automatic webhook retry cascades.',
                    sections: [
                        {
                            num: '01.0',
                            heading: 'The Fallacy of Optimistic Locking in Conversational Commerce',
                            content: 'In standard web applications, optimistic locking via version columns (e.g. version = version + 1) is celebrated for high-throughput reads. However, when 200 buyers simultaneously attempt to purchase the final 3 units of an exclusive release, optimistic locking degrades catastrophically into write starvation. 197 transactions fail their version check, triggering exponential backoffs and retry floods that overwhelm the application tier while leaving buyers in agonizing conversational limbo.',
                            pullQuote: 'In conversational commerce, optimistic concurrency control is an architectural anti-pattern. Under contention spikes, it guarantees write starvation and phantom cart commitments.'
                        },
                        {
                            num: '02.0',
                            heading: 'Pessimistic Row-Level Locking with NOWAIT',
                            content: 'Inside Order Guard, we rejected optimistic application-level reconciliation entirely. Stock allocation is treated as a strict financial transaction executed directly inside a single PostgreSQL ACID boundary using SELECT ... FOR UPDATE NOWAIT.',
                            blueprintTitle: 'PostgreSQL Atomic Reservation & Lock Ledger',
                            blueprintCode: `-- Order Guard Atomic Inventory Reservation Ledger
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Acquire immediate pessimistic lock on the SKU row without blocking indefinitely
SELECT sku_id, available_stock, reserved_stock 
FROM catalog_inventory 
WHERE sku_id = 'SKU-SAVANNAH-409' 
FOR UPDATE NOWAIT;

-- Validate business invariant: ensure stock covers requested units
-- If stock available: write atomic reservation with a 10-minute deterministic TTL
INSERT INTO order_reservations (
    reservation_id, tenant_id, sku_id, buyer_phone, quantity, expires_at, status
) VALUES (
    gen_random_uuid(), 'ten_savannah_01', 'SKU-SAVANNAH-409', '+254710720949', 1, NOW() + INTERVAL '10 minutes', 'RESERVED'
);

-- Decrement available stock atomically within the same lock boundary
UPDATE catalog_inventory 
SET available_stock = available_stock - 1,
    reserved_stock = reserved_stock + 1
WHERE sku_id = 'SKU-SAVANNAH-409';

COMMIT;`
                        },
                        {
                            num: '03.0',
                            heading: 'Idempotent Ingestion Across Mobile Network Jitter',
                            content: 'WhatsApp webhook delivery via headless Baileys gateways or official BSP endpoints does not guarantee exactly-once delivery. When cell towers switch hands or packet ACK timeouts fire, duplicate webhook events arrive with identical message payloads milliseconds apart.',
                            marginalia: 'Savannah Field Observation: Over Nairobi cellular masts during 8:00 PM peak commerce drops, 6.2% of inbound WhatsApp order webhooks arrive duplicated within a 140ms window. Without cryptographic idempotency keys, duplicate reservations are guaranteed.',
                            contentAfter: 'Every incoming event payload is fingerprinted using a deterministic SHA-256 hash of (tenant_id + sender_phone + message_id + timestamp_bucket). The event is routed through an atomic Redis SETNX gate with a 30-minute expiration window before any database transaction is initiated.'
                        },
                        {
                            num: '04.0',
                            heading: 'Production Invariants & Measurable Outcomes',
                            content: 'Over six months of live production routing millions in conversational volume across self-hosted Ubuntu Linux servers, Order Guard maintained zero oversells, sub-25ms average lock acquisition latencies, and total deterministic auditability for merchant accounting.',
                            axioms: [
                                'Axiom 1: Contention must be resolved at the database kernel, never through loose application-level retries.',
                                'Axiom 2: All reservations must possess a finite, deterministic TTL that auto-releases expired locks via temporal daemons.',
                                'Axiom 3: Duplicate webhook deliveries are not exceptions; they are an expected property of mobile network physics.'
                            ]
                        }
                    ],
                    citation: 'Emurugat, M. T. (2026). "Atomic Inventory Locking Under WhatsApp Latency: Inside Order Guard." Savannah Atelier Monograph Series, Vol. IV, Issue 1. Nairobi, Kenya.'
                },
                {
                    id: 'tournament-state-machines',
                    ref: 'SAV-PUB-2026-02',
                    volume: 'Vol. IV · Monograph 02',
                    category: 'Software Architecture & Domain Modeling',
                    readTime: '8 min read',
                    date: 'October 2026',
                    title: 'Refactoring Tournament State Machines in Multi-Tenant Architectures',
                    subtitle: 'Replacing brittle procedural scheduling logic with explicit object-oriented domain invariants and tenant-isolated relational schemas in Tennissuite.',
                    lead: 'Multi-tenant scheduling systems fail silently when domain state transitions are scattered across ad-hoc database queries and UI event listeners. In university athletic tournaments, a sudden afternoon thunderstorm or an unannounced player walkover sends ripples across court assignments, umpire allocations, and downstream bracket seedings across dozens of concurrent divisions.',
                    sections: [
                        {
                            num: '01.0',
                            heading: 'The Cascading Fragility of Procedural Tournament Scheduling',
                            content: 'Prior to refactoring, tournament administrators relied on fragmented spreadsheets and procedural CRUD scripts. When a match was delayed by rain, staff manually dragged match rows across courts. If an administrator rescheduled a semi-final before its dependent quarter-final completed, the bracket entered an impossible state: athletes scheduled on two distinct courts simultaneously, with zero automated validation.',
                            pullQuote: 'When rain delays strike, procedural systems cascade into silent bracket corruption. Only mathematically defined, deterministic state machines can preserve tournament integrity.'
                        },
                        {
                            num: '02.0',
                            heading: 'The Finite State Machine Architecture',
                            content: 'In Tennissuite, every match is governed by an explicit Finite State Machine (FSM). State mutations cannot occur through raw SQL UPDATE calls; they must pass through audited transition methods that verify strict domain invariants.',
                            blueprintTitle: 'Tennissuite Deterministic Match State Transition Machine',
                            blueprintCode: `+--------------------------------------------------------------------------+
|                     TENNISSUITE MATCH STATE MACHINE                      |
+--------------------------------------------------------------------------+

     [ SCHEDULED ] ──────( Assign Court & Umpire )─────> [ READY_TO_PLAY ]
           │                                                     │
      ( Rain Delay )                                       ( Call Match )
           ▼                                                     ▼
     [ SUSPENDED ] <──────( Weather Hold / Injury )───── [ IN_PROGRESS ]
           │                                                     │
     ( Re-allocate )                                      ( Match Concluded )
           ▼                                                     ▼
     [ RESCHEDULED ]                                       [ COMPLETED ]
                                                                 │
                                                       ( Advance Winner )
                                                                 ▼
                                                        [ BRACKET_SEEDED ]

  * Invariant: Transition to IN_PROGRESS strictly forbids any court assignment
    overlap with an active match on the same court_id.`
                        },
                        {
                            num: '03.0',
                            heading: 'Multi-Tenant Isolation via 3NF Composite Foreign Keys',
                            content: 'Because Tennissuite hosts multiple university conferences on a single shared PostgreSQL engine, tenant isolation could not rely on superficial WHERE tenant_id = ? clauses alone. A single omitted clause in a reporting query would leak athlete medical clearances and private match communications.',
                            marginalia: 'Architectural Defense: All relational foreign keys enforce compound foreign constraints: FOREIGN KEY (tenant_id, tournament_id) REFERENCES tournaments(tenant_id, id). It is mathematically impossible to link a match to a tournament belonging to another tenant.',
                            contentAfter: 'This normalized 3NF schema, coupled with PostgreSQL row-level security (RLS) policies, guarantees airtight multi-tenant privacy while allowing shared connection pooling and low infrastructure operating costs.'
                        },
                        {
                            num: '04.0',
                            heading: 'Production Outcomes & Engineering Impact',
                            content: 'The architectural refactor cut tournament scheduling overhead by over 70%, eliminated 100% of double-booking incidents during live regional championships, and provided real-time progression feeds to thousands of players, coaches, and spectators.',
                            axioms: [
                                'Axiom 1: Complex business processes must be modeled as formal state machines, never as arbitrary status column strings.',
                                'Axiom 2: Multi-tenant safety must be enforced at the relational foreign-key level, not left to application-layer memory.',
                                'Axiom 3: Domain models must reject invalid states at compile time and instantiation, before touching the database.'
                            ]
                        }
                    ],
                    citation: 'Emurugat, M. T. (2026). "Refactoring Tournament State Machines in Multi-Tenant Architectures: The Tennissuite Blueprint." Savannah Atelier Monograph Series, Vol. IV, Issue 2. Nairobi, Kenya.'
                },
                {
                    id: 'pin-isolated-staging',
                    ref: 'SAV-PUB-2026-03',
                    volume: 'Vol. IV · Monograph 03',
                    category: 'Commissioning Governance & Delivery',
                    readTime: '7 min read',
                    date: 'September 2026',
                    title: 'Designing PIN-Isolated Staging Previews for High-Trust Client Sign-Offs',
                    subtitle: 'Why executive stakeholders should never decipher pull requests—and how path and PIN-isolated preview portals transform independent consultancy delivery.',
                    lead: 'Independent software consultancies frequently lose operational trust in the silent gap between project kickoff and final handover. Expecting non-technical founders, chief commercial officers, or institutional executives to navigate git repositories, read pull requests, or debug local Docker containers creates severe friction and delays milestone approvals.',
                    sections: [
                        {
                            num: '01.0',
                            heading: 'The Executive Cognitive Gap in Technical Commissioning',
                            content: 'When engineers present raw terminal outputs or staging environments behind complex VPN gateways, executive stakeholders feel alienated. Approval meetings devolve into defensive discussions over incomplete UI stubs or transient network timeouts rather than rigorous review of business invariants and core workflows.',
                            pullQuote: 'Executive sponsors should never decipher pull requests or debug staging VPNs. High-trust engineering consultancy is founded on calm, sovereign staging environments.'
                        },
                        {
                            num: '02.0',
                            heading: 'The Architecture of Sovereign PIN-Isolated Staging Vaults',
                            content: 'At Savannah Atelier, every active client commission is provisioned within an isolated, cryptographic preview gateway. Clients receive a single clean URL paired with a private 4-digit PIN. The gateway decrypts their verified milestone environment, complete with simulated production data, a live system telemetry dashboard, and a phase-signoff checklist.',
                            blueprintTitle: 'Savannah Atelier Staging Gateway & Access Protocol',
                            blueprintCode: `+--------------------------------------------------------------------------+
|                 SAVANNAH ATELIER CLIENT STAGING GATEWAY                  |
+--------------------------------------------------------------------------+

   [ Executive Client ] ──( clean URL: missperpetual.cloud/portal )
            │
            ▼
   +─────────────────────────────────────────────────────────────+
   |  PIN GATEWAY: SHA-256 Salted Challenge                     |
   |  • Rate Limited: 5 attempts per 15 min                      |
   |  • Anti-Crawling: X-Robots-Tag: noindex, nofollow, noarchive |
   +─────────────────────────────────────────────────────────────+
            │  ( Authenticated PIN: 7821 )
            ▼
   +─────────────────────────────────────────────────────────────+
   |  ISOLATED PREVIEW NAMESPACE                                 |
   |  • Live Interactive Platform Deployment                     |
   |  • Real-Time Schema Invariant Health Report                 |
   |  • 1-Click Milestone Verification & Formal Sign-Off         |
   +─────────────────────────────────────────────────────────────+`
                        },
                        {
                            num: '03.0',
                            heading: 'Turning Reviews into Calm, High-Trust Milestone Approvals',
                            content: 'Instead of ambiguous Zoom screenshares, executive clients test real workflows on their mobile devices during their own time. When they test an order placement or schedule change, they see the actual database state reflect cleanly.',
                            marginalia: 'Consultancy Metric: Client approval turnaround times collapsed from an average of 9 business days to under 36 hours once sovereign PIN staging vaults were introduced across all active Savannah Atelier projects.',
                            contentAfter: 'The staging vault maintains an immutable audit log of sign-off approvals, generating formal ISO-conforming acceptance certificates upon phase completion.'
                        },
                        {
                            num: '04.0',
                            heading: 'Delivery Axioms for Independent Technical Leaders',
                            content: 'True technical authority is demonstrated not through complex jargon, but through radical clarity, deterministic delivery schedules, and respect for client executive focus.',
                            axioms: [
                                'Axiom 1: Make your engineering deliverables tangibly testable on day one of every phase.',
                                'Axiom 2: Shield pre-release client intellectual property with strict zero-index security headers.',
                                'Axiom 3: A phase gate is only complete when the client executes a formal sign-off against documented test criteria.'
                            ]
                        }
                    ],
                    citation: 'Emurugat, M. T. (2026). "Designing PIN-Isolated Staging Previews for High-Trust Client Sign-Offs." Savannah Atelier Monograph Series, Vol. IV, Issue 3. Nairobi, Kenya.'
                },
                {
                    id: 'decoupling-monoliths',
                    ref: 'SAV-PUB-2026-04',
                    volume: 'Vol. IV · Monograph 04',
                    category: 'Enterprise Architecture & Modernization',
                    readTime: '12 min read',
                    date: 'October 2026',
                    title: 'Decoupling Monoliths: A Strategic Blueprint',
                    subtitle: 'How to transition a legacy enterprise monolith into a decoupled, phase-gated microservices architecture without operational downtime.',
                    lead: 'Enterprise organizations with legacy monolithic architectures inevitably hit a velocity wall: deployment cycles stretch into multi-week regression exercises, database locks cascade across unrelated modules, and minor schema adjustments risk system-wide outages.',
                    sections: [
                        {
                            num: '01.0',
                            heading: 'The Strangler Fig Pattern in Enterprise Modernization',
                            content: 'Big-bang rewrites boast an 80% failure rate in enterprise software. Instead, Savannah Atelier applies the Strangler Fig pattern: intercepting domain boundaries via an API gateway, migrating specific high-churn capabilities (e.g. billing, order reservations) into isolated services, and delegating reads through replicated 3NF materialized views.',
                            pullQuote: 'A legacy rewrite should never halt running revenue. We strangle the monolith at the network perimeter, one atomic boundary at a time.'
                        },
                        {
                            num: '02.0',
                            heading: 'Boundary Isolation & Database Decoupling',
                            content: 'The hardest aspect of decoupling is not network transport; it is relational database disentanglement. Monoliths share tables with unchecked foreign keys across departmental domains.',
                            blueprintTitle: 'Monolith Perimeter Gateway & Strangler Interceptor',
                            blueprintCode: `+--------------------------------------------------------------------------+
|             STRANGLER FIG PERIMETER GATEWAY ARCHITECTURE                 |
+--------------------------------------------------------------------------+

   [ Client Traffic ] ───> [ API Gateway / Reverse Proxy ]
                                   │
             ┌─────────────────────┴─────────────────────┐
             ▼ (90% Legacy Routes)                       ▼ (10% Strangled Domain)
     [ LEGACY MONOLITH ]                        [ NEW AUTONOMOUS SERVICE ]
     • Core ERP & Accounting                    • High-Velocity Order Engine
     • Shared PostgreSQL DB                     • Dedicated PostgreSQL 3NF
             │                                           ▲
             └──────( Change Data Capture / Debezium )───┘`
                        },
                        {
                            num: '03.0',
                            heading: 'Zero-Downtime Cutover Verification',
                            content: 'Prior to full traffic migration, both the legacy monolith and the new service run in parallel under dark-launch traffic mirroring. Read responses are compared at the gateway to certify 100% data parity before the legacy module is permanently decommissioned.'
                        }
                    ],
                    citation: 'Emurugat, M. T. (2026). "Decoupling Monoliths: A Strategic Enterprise Blueprint." Savannah Atelier Monograph Series, Vol. IV, Issue 4. Nairobi, Kenya.'
                },
                {
                    id: 'nueve-streaming',
                    ref: 'SAV-PUB-2026-05',
                    volume: 'Vol. IV · Monograph 05',
                    category: 'Media Infrastructure & Edge Ops',
                    readTime: '14 min read · Video Breakdown',
                    date: 'September 2026',
                    title: 'Nueve Architecture: Low-Latency Streaming Core',
                    subtitle: 'A technical teardown of how we engineered the Nueve streaming core to bypass third-party CDNs and reduce media distribution latency by 60%.',
                    lead: 'Commercial live video broadcasting across East Africa suffers from exorbitant bandwidth egress charges and high network buffering when routed through centralized American or European CDN edges. In Emurugat Labs, we engineered Nueve: a low-latency, edge-aware streaming core.',
                    sections: [
                        {
                            num: '01.0',
                            heading: 'The Edge Latency Bottleneck in African Media Streams',
                            content: 'Routing video chunks from Nairobi to Frankfurt and back to Nairobi introduces an unavoidable 160ms minimum round-trip physical delay before considering TCP congestion and transcoding queues. Nueve terminates RTMP/WebRTC feeds directly on local Nairobi edge nodes.',
                            pullQuote: 'Routing local video traffic through overseas CDNs wastes bandwidth and destroys real-time interactive latency. Sovereign edge infrastructure is the answer.'
                        },
                        {
                            num: '02.0',
                            heading: 'FFmpeg Pipeline & Zero-Copy Transcoding',
                            content: 'Nueve leverages custom automated ffmpeg pipelines and hardware acceleration to transcode single-source high-bitrate feeds into multi-quality HLS streams with under 1.8 seconds of glass-to-glass latency.'
                        }
                    ],
                    citation: 'Emurugat, M. T. (2026). "Nueve Architecture: Low-Latency Streaming Core." Savannah Atelier Monograph Series, Vol. IV, Issue 5. Nairobi, Kenya.'
                },
                {
                    id: 'rust-iam-microservice',
                    ref: 'SAV-PUB-2026-06',
                    volume: 'Vol. IV · Monograph 06',
                    category: 'Systems Programming & Security',
                    readTime: '10 min read',
                    date: 'August 2026',
                    title: 'Securing the IAM Microservice with Rust',
                    subtitle: 'Why we chose Rust for our Identity Access Manager and how it eliminated memory-leak vulnerabilities and token verification latencies.',
                    lead: 'Authentication and authorization microservices operate in the direct critical path of every single inbound API request. If an IAM service introduces 15ms of garbage collection pause or suffers from memory leaks under sustained load, the entire distributed system suffers degraded SLAs.',
                    sections: [
                        {
                            num: '01.0',
                            heading: 'Zero-Cost Abstractions and Memory Safety Without GC',
                            content: 'By building our Identity Access Manager in Rust, we eliminated garbage collection pauses entirely. Cryptographic JWT signature verification, PBKDF2 password hashing, and RBAC permission checks execute in sub-millisecond latencies under constant memory utilization.',
                            pullQuote: 'In the critical security path, garbage collector pauses are an operational liability. Rust gives us deterministic, sub-millisecond token evaluation.'
                        },
                        {
                            num: '02.0',
                            heading: 'Hardware Key & Multi-Tenant RBAC Integration',
                            content: 'The microservice supports WebAuthn FIDO2 hardware keys, tenant-scoped API tokens, and deterministic permission matrix evaluation compiled into optimized binary representations.'
                        }
                    ],
                    citation: 'Emurugat, M. T. (2026). "Securing the IAM Microservice with Rust." Savannah Atelier Monograph Series, Vol. IV, Issue 6. Nairobi, Kenya.'
                }

            ];
