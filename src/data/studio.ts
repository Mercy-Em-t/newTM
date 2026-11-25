export interface StudioEpisodeItem {
  episodeNumber: number;
  title: string;
  duration: string;
  youtubeVideoId: string;
  synopsis: string;
}

export interface StudioChapterItem {
  time: string;
  seconds: number;
  title: string;
}

export interface StudioSeriesItem {
  id: string;
  title: string;
  isPlaylist: boolean;
  playlistId: string;
  seriesNumber: string;
  tag: string;
  category: string;
  categoryLabel: string;
  duration: string;
  totalEpisodes: number;
  youtubeVideoId: string;
  gradient: string;
  description: string;
  topics: string[];
  episodes: StudioEpisodeItem[];
  chapters: StudioChapterItem[];
}

            export const STUDIO_SERIES: StudioSeriesItem[] = [
                {
                    id: 'adult-disillusionment',
                    title: 'Adult Disillusionment 401',
                    isPlaylist: true,
                    playlistId: 'PL_adult_disillusionment_401',
                    seriesNumber: 'Series II',
                    tag: 'Series II · 3D Narrative Playlist',
                    category: '3d-narratives',
                    categoryLabel: '3D Narratives',
                    duration: '11:08 · 3 Episodes',
                    totalEpisodes: 3,
                    youtubeVideoId: 'mN0zPOpADL4',
                    gradient: 'from-[#110517] via-[#6B0733] to-[#6850AD]',
                    description: 'A serialized 3D visual monologue exploring the quiet shift from inherited expectations to self-authored ambition and creative sovereignty.',
                    topics: ['3D Narratives', 'Creative Sovereignty', 'Mental Models', 'Linear Scripts'],
                    episodes: [
                        {
                            episodeNumber: 1,
                            title: 'Scene I: The Myth of the Linear Script',
                            duration: '03:50',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Dissecting the false safety of predetermined life paths and the friction of breaking inherited patterns.'
                        },
                        {
                            episodeNumber: 2,
                            title: 'Scene II: Outgrowing Borrowed Metrics',
                            duration: '03:50',
                            youtubeVideoId: 'dQw4w9WgXcQ',
                            synopsis: 'Why evaluating your engineering craft using external institutional status traps kills genuine architectural agency.'
                        },
                        {
                            episodeNumber: 3,
                            title: 'Scene III: Authoring Your Own Architecture',
                            duration: '03:28',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Building your proprietary intellectual and systems stack from first principles without asking for permission.'
                        }
                    ],
                    chapters: [
                        { time: '00:00', seconds: 0, title: 'Scene I: The Myth of the Linear Script' },
                        { time: '03:50', seconds: 230, title: 'Scene II: Outgrowing Borrowed Metrics' },
                        { time: '07:40', seconds: 460, title: 'Scene III: Authoring Your Own Architecture' }
                    ]
                },
                {
                    id: 'anatomy-engineer',
                    title: 'The Anatomy of an Engineer',
                    isPlaylist: true,
                    playlistId: 'PL_anatomy_of_an_engineer',
                    seriesNumber: 'Series I',
                    tag: 'Series I · Visual Essays Playlist',
                    category: 'visual-essays',
                    categoryLabel: 'Visual Essays',
                    duration: '14:22 · 3 Episodes',
                    totalEpisodes: 3,
                    youtubeVideoId: 'mN0zPOpADL4',
                    gradient: 'from-[#2D1036] via-[#6B0733] to-[#D97352]',
                    description: 'Examining how systems engineers cultivate mental invariants, quiet discipline, and enduring architectural craft under real-world pressure.',
                    topics: ['Engineering Mindset', 'Invariants', 'Systems Architecture', 'Craftsmanship'],
                    episodes: [
                        {
                            episodeNumber: 1,
                            title: 'Episode 01: Thinking in Invariants Instead of Fleeting Frameworks',
                            duration: '04:18',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'How principal architects anchor architectural decisions to permanent mathematical invariants rather than transient npm trends.'
                        },
                        {
                            episodeNumber: 2,
                            title: 'Episode 02: Why Formal System Blueprints Save Months of Rework',
                            duration: '05:27',
                            youtubeVideoId: 'dQw4w9WgXcQ',
                            synopsis: 'The compounding ROI of rigorous upfront 3NF relational schemas, state transition matrices, and OpenAPI specifications.'
                        },
                        {
                            episodeNumber: 3,
                            title: 'Episode 03: Commissioning Software Built to Outlive Hype Cycles',
                            duration: '04:37',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Designing systems with zero-dependency boundaries, explicit data contracts, and ten-year operational longevity.'
                        }
                    ],
                    chapters: [
                        { time: '00:00', seconds: 0, title: 'Episode 01: Thinking in invariants' },
                        { time: '04:18', seconds: 258, title: 'Episode 02: Formal system blueprints' },
                        { time: '10:45', seconds: 645, title: 'Episode 03: Outliving hype cycles' }
                    ]
                },
                {
                    id: 'decoupling-monoliths-series',
                    title: 'Decoupling Monoliths: A Strategic Blueprint',
                    isPlaylist: true,
                    playlistId: 'PL_decoupling_monoliths_series',
                    seriesNumber: 'Series III',
                    tag: 'Series III · Architecture Breakdowns Playlist',
                    category: 'architecture-breakdowns',
                    categoryLabel: 'Architecture Breakdowns',
                    duration: '36:40 · 3 Episodes',
                    totalEpisodes: 3,
                    youtubeVideoId: 'mN0zPOpADL4',
                    gradient: 'from-[#1E0F2B] via-[#4A154B] to-[#E9A23B]',
                    description: 'A complete video breakdown of how to decommission legacy monoliths and carve out high-performance microservices without downtime.',
                    topics: ['Monolith Migration', 'Event-Driven', 'Strangler Fig', 'High-Availability'],
                    episodes: [
                        {
                            episodeNumber: 1,
                            title: 'Part 1: Auditing Architectural Seams & Shared State Bottlenecks',
                            duration: '12:00',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Performing dependency-graph audits to isolate tightly coupled database tables and untangle business logic.'
                        },
                        {
                            episodeNumber: 2,
                            title: 'Part 2: Strangler Fig Pattern & Transactional Outbox Queues',
                            duration: '14:30',
                            youtubeVideoId: 'dQw4w9WgXcQ',
                            synopsis: 'Implementing CDC event routing to mirror writes into new microservices with zero operational risk.'
                        },
                        {
                            episodeNumber: 3,
                            title: 'Part 3: Zero-Downtime DNS Cutover & Legacy Decommissioning',
                            duration: '10:10',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Final execution window protocols, blue-green ingress validation, and safely retiring legacy servers.'
                        }
                    ],
                    chapters: [
                        { time: '00:00', seconds: 0, title: 'Part 1: Auditing Architectural Seams' },
                        { time: '12:00', seconds: 720, title: 'Part 2: Strangler Fig Pattern' },
                        { time: '26:30', seconds: 1590, title: 'Part 3: Zero-Downtime DNS Cutover' }
                    ]
                },
                {
                    id: 'nueve-streaming-series',
                    title: 'Nueve Architecture: Low-Latency Streaming Under 120ms',
                    isPlaylist: true,
                    playlistId: 'PL_nueve_streaming_series',
                    seriesNumber: 'Series IV',
                    tag: 'Series IV · Media Infrastructure Playlist',
                    category: 'architecture-breakdowns',
                    categoryLabel: 'Architecture Breakdowns',
                    duration: '36:00 · 3 Episodes',
                    totalEpisodes: 3,
                    youtubeVideoId: 'mN0zPOpADL4',
                    gradient: 'from-[#0B1A28] via-[#10B981] to-[#3B82F6]',
                    description: 'A deep architectural walkthrough of how we built the Nueve streaming core to bypass third-party CDN markups and deliver 120ms live video.',
                    topics: ['Nueve Stream', 'Live Video', 'WebRTC', 'Bandwidth Optimization'],
                    episodes: [
                        {
                            episodeNumber: 1,
                            title: 'Episode 01: RTMP Ingestion & Pre-Allocated Buffer Pools',
                            duration: '11:45',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Direct ingestion protocols on Port 1935 with ring-buffer memory pooling to eliminate heap allocations.'
                        },
                        {
                            episodeNumber: 2,
                            title: 'Episode 02: WebRTC Chunk Relay vs. HLS Segment Tradeoffs',
                            duration: '14:20',
                            youtubeVideoId: 'dQw4w9WgXcQ',
                            synopsis: 'Balancing sub-second latency with mobile data stability across intermittent 4G cellular connections in East Africa.'
                        },
                        {
                            episodeNumber: 3,
                            title: 'Episode 03: Bypassing Third-Party CDN Egress Markups',
                            duration: '09:55',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Self-hosted edge proxy clustering on bare-metal Ubuntu nodes delivering 64.2% lower bandwidth egress cost.'
                        }
                    ],
                    chapters: [
                        { time: '00:00', seconds: 0, title: 'Episode 01: RTMP Ingestion' },
                        { time: '11:45', seconds: 705, title: 'Episode 02: WebRTC Chunk Relay' },
                        { time: '26:05', seconds: 1565, title: 'Episode 03: Bypassing CDN Markups' }
                    ]
                },
                {
                    id: 'whatsapp-concurrency-series',
                    title: 'High-Throughput Concurrency & Distributed Mutexes',
                    isPlaylist: true,
                    playlistId: 'PL_whatsapp_concurrency_series',
                    seriesNumber: 'Series V',
                    tag: 'Series V · Technical Teardowns Playlist',
                    category: 'technical-teardowns',
                    categoryLabel: 'Technical Teardowns',
                    duration: '26:45 · 2 Episodes',
                    totalEpisodes: 2,
                    youtubeVideoId: 'mN0zPOpADL4',
                    gradient: 'from-[#110517] via-[#059669] to-[#10B981]',
                    description: 'Preventing race conditions, double-allocations, and order collision in headless conversational commerce at 50 webhook requests/second.',
                    topics: ['Redis Mutex', 'Concurrency', 'PostgreSQL 3NF', 'Idempotency'],
                    episodes: [
                        {
                            episodeNumber: 1,
                            title: 'Episode 01: Atomic Inventory Locking Under WhatsApp Latency',
                            duration: '14:15',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Designing a Redis Lua-based distributed mutex with a 10-minute deterministic TTL to eliminate ghost checkouts.'
                        },
                        {
                            episodeNumber: 2,
                            title: 'Episode 02: PostgreSQL 3NF Schemas & B-Tree Index Locks',
                            duration: '12:30',
                            youtubeVideoId: 'dQw4w9WgXcQ',
                            synopsis: 'Structuring relational order ledgers in strict Third Normal Form to guarantee zero transaction deadlocks under load.'
                        }
                    ],
                    chapters: [
                        { time: '00:00', seconds: 0, title: 'Episode 01: Atomic Inventory Locking' },
                        { time: '14:15', seconds: 855, title: 'Episode 02: PostgreSQL 3NF Schemas' }
                    ]
                },
                {
                    id: 'rust-iam-series',
                    title: 'Zero-Garbage-Collection IAM Microservice in Rust',
                    isPlaylist: true,
                    playlistId: 'PL_rust_iam_series',
                    seriesNumber: 'Series VI',
                    tag: 'Series VI · Systems Philosophy Playlist',
                    category: 'systems-philosophy',
                    categoryLabel: 'Systems Philosophy',
                    duration: '23:55 · 2 Episodes',
                    totalEpisodes: 2,
                    youtubeVideoId: 'mN0zPOpADL4',
                    gradient: 'from-[#1A0B2E] via-[#6850AD] to-[#E9A23B]',
                    description: 'Why we engineered our authentication core in memory-safe Rust: eliminating GC tail latency, achieving 0.38ms token verification, and ISO 29148 alignment.',
                    topics: ['Rust', 'IAM', 'Zero GC', 'High-Performance', 'Security'],
                    episodes: [
                        {
                            episodeNumber: 1,
                            title: 'Episode 01: Sub-Millisecond Asymmetric JWT Verification',
                            duration: '13:10',
                            youtubeVideoId: 'mN0zPOpADL4',
                            synopsis: 'Building hardware-accelerated Ed25519 cryptographic token validators in Rust with zero memory allocations.'
                        },
                        {
                            episodeNumber: 2,
                            title: 'Episode 02: Eliminating Garbage Collection Pauses in Auth Infrastructure',
                            duration: '10:45',
                            youtubeVideoId: 'dQw4w9WgXcQ',
                            synopsis: 'Comparing Go and Node.js GC latency spikes against Rust deterministic memory profiling under synthetic peak load.'
                        }
                    ],
                    chapters: [
                        { time: '00:00', seconds: 0, title: 'Episode 01: Sub-Millisecond JWT Verification' },
                        { time: '13:10', seconds: 790, title: 'Episode 02: Eliminating GC Pauses' }
                    ]
                }
            ];

