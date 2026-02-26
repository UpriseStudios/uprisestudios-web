export type Tier =
  | "Flagship Desktop Platform"
  | "Guardian"
  | "Professional Tools"
  | "Core Utilities"
  | "Quick Utilities"
  | "Flagship IDE";

export type ProductLink = {
  label: string;
  href: string; // can be internal (/coda) or external (https://...)
};

export type Product = {
  id: string;
  name: string;
  tier: Tier;
  tagline: string;
  description: string;
  highlights?: string[];
  badge?: string; // e.g. "Flagship", "Best value"
  status?: string; // e.g. "Coming soon", "In progress", "Live"
  href?: string; // internal details page route
  links?: ProductLink[]; // marketplace links: Etsy/Steam/Download/etc.
  price: {
    personal: number; // GBP
    enterprise?: number; // GBP (optional)
  };
};

export type Bundle = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[]; // Product ids
  value: number; // GBP
  bundlePrice: number;// GBP
  badge?: string;
};

export function gbp(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(n);
}

export const TIER_ORDER: Tier[] = [
  "Flagship IDE",
  "Flagship Desktop Platform",
  "Guardian",
  "Professional Tools",
  "Core Utilities",
  "Quick Utilities",
];

// NOTE: Replace placeholder links with real ones as you publish.
// Internal pages you already have/plan: /coda, /caretaker, /sanctuary etc.
// External marketplaces can be added per product: Etsy, Steam, Gumroad, etc.

export const PRODUCTS: Product[] = [
  // =========================
  // FLAGSHIP IDE (FREE + TIERS)
  // =========================
  {
    id: "coda-studio",
    name: "Coda Studio",
    tier: "Flagship IDE",
    tagline: "AI-native IDE with autonomous coding workflows.",
    description:
      "Coda Studio is Uprise’s flagship desktop product: an AI-native IDE designed for autonomous, multi-step execution across real codebases — with professional UI, activity logging, and cross-project context awareness.",
    highlights: [
      "Autonomous multi-step coding agent",
      "Cross-project context awareness",
      "Professional UI + real-time activity logging",
      "Built for serious workflows (not demos)",
      "Free download with tiered upgrades",
    ],
    badge: "Flagship IDE",
    status: "Free download",
    href: "/coda",
    links: [
      // add real links when ready
      { label: "Download", href: "https://uprisestudios.co.uk/#contact" },
      { label: "Roadmap", href: "/coda" },
      // { label: "Steam", href: "https://store.steampowered.com/..." },
    ],
    // keep a nominal "0" so UI can still show something if needed
    price: { personal: 0, enterprise: 0 },
  },

  // =========================
  // FLAGSHIP DESKTOP PLATFORM
  // =========================
  {
    id: "sanctuary",
    name: "Uprise Sanctuary",
    tier: "Flagship Desktop Platform",
    tagline: "Flagship calm desktop environment.",
    description:
      "A premium calm companion environment built on the Uprise Desktop Platform Core. Designed to be stable, local-first, and Steam-ready.",
    highlights: ["Local-first by default", "Calm environments + Worlds DLC model", "Enterprise-ready foundations"],
    badge: "Flagship",
    status: "Coming soon",
    href: "/sanctuary",
    links: [
      { label: "Steam (soon)", href: "/marketplace" },
      { label: "Etsy (soon)", href: "/marketplace" },
    ],
    price: { personal: 11.99, enterprise: 19.99 },
  },
  {
    id: "worlds",
    name: "Uprise Worlds",
    tier: "Flagship Desktop Platform",
    tagline: "Environment library & loader for Sanctuary.",
    description:
      "Browse, install, and switch desktop environments (Worlds). Built to deliver DLC drops cleanly and reliably.",
    highlights: ["World library + previews", "Performance impact indicators", "Live switching support"],
    status: "Coming soon",
    href: "/worlds",
    links: [{ label: "Steam (soon)", href: "/marketplace" }],
    price: { personal: 7.99, enterprise: 14.99 },
  },
  {
    id: "focus-space",
    name: "Uprise Focus Space",
    tier: "Flagship Desktop Platform",
    tagline: "Distraction-free calm focus environment.",
    description:
      "Fullscreen calm workspace with focus modes (writing/coding/thinking), session tracking, and stable long-use behaviour.",
    highlights: ["Fullscreen calm mode", "Focus modes", "Local session tracking"],
    status: "Coming soon",
    href: "/focus-space",
    links: [{ label: "Steam (soon)", href: "/marketplace" }],
    price: { personal: 7.99, enterprise: 14.99 },
  },
  {
    id: "workspace-os",
    name: "Uprise Workspace OS",
    tier: "Flagship Desktop Platform",
    tagline: "Calm desktop overlay & launcher layer.",
    description:
      "A calm overlay productivity layer with a minimal launcher, calm score, and workspace stats — built on Platform Core overlays.",
    highlights: ["Overlay layer", "Calm score", "Launcher integration"],
    status: "Coming soon",
    href: "/workspace-os",
    links: [{ label: "Steam (soon)", href: "/marketplace" }],
    price: { personal: 9.99, enterprise: 18.99 },
  },

  // =========================
  // GUARDIAN
  // =========================
  {
    id: "caretaker",
    name: "Uprise Caretaker",
    tier: "Guardian",
    tagline: "Enterprise-grade PC health & stability guardian.",
    description:
      "Caretaker is the calm, safety-first guardian app: identify health risks (storage pressure, startup bloat, crash patterns) and apply safe maintenance with transparent previews.",
    highlights: ["Safety-first changes", "Transparent actions", "Diagnostics + audit readiness", "Enterprise credibility"],
    badge: "Guardian tier",
    status: "In progress",
    href: "/caretaker",
    links: [
      { label: "Etsy (soon)", href: "/marketplace" },
      { label: "Steam (soon)", href: "/marketplace" },
    ],
    price: { personal: 9.99, enterprise: 24.99 },
  },

  // =========================
  // PROFESSIONAL TOOLS
  // =========================
  {
    id: "backup-manager",
    name: "Local Backup Manager",
    tier: "Professional Tools",
    tagline: "Local-first backups with restore + verification.",
    description:
      "Mirror, incremental, or versioned snapshots. Browse backups, restore safely, and verify integrity — no cloud required.",
    highlights: ["Profiles + scheduling", "Restore browser", "Optional hash verification", "No deletion of originals"],
    status: "Coming soon",
    href: "/utilities/backup-manager",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 9.99 },
  },
  {
    id: "desktop-search",
    name: "Desktop Search Engine",
    tier: "Professional Tools",
    tagline: "Fast local search, privacy-first.",
    description:
      "Index and search your local files quickly with filters, ranking, and a calm UI. No telemetry.",
    highlights: ["Local indexing", "Filters + quick actions", "Private by default"],
    status: "Coming soon",
    href: "/utilities/desktop-search",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 7.99 },
  },
  {
    id: "file-watcher",
    name: "File Watcher Automation",
    tier: "Professional Tools",
    tagline: "Rules engine for file events.",
    description:
      "Monitor folders and apply automation rules (move/copy/rename). Includes safe mode + audit logs.",
    highlights: ["Rule builder", "Dry-run mode", "Audit logs", "Designed for future service mode"],
    status: "Coming soon",
    href: "/utilities/file-watcher",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 7.99 },
  },
  {
    id: "desktop-companion",
    name: "Desktop Companion",
    tier: "Professional Tools",
    tagline: "Workspace calm score + hygiene overview.",
    description:
      "A calm dashboard for disk health, clutter risk, duplicates risk, and actionable recommendations.",
    highlights: ["Calm score engine", "Disk & clutter indicators", "Actionable insights"],
    status: "Coming soon",
    href: "/utilities/desktop-companion",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 7.99 },
  },
  {
    id: "aura-studio",
    name: "Aura Studio",
    tier: "Professional Tools",
    tagline: "Premium local image utility suite.",
    description:
      "A calm, polished image utility suite aligned with the Aura aesthetic — built for creators and pros.",
    highlights: ["Local-only processing", "Creator workflows", "Premium UX"],
    status: "Coming soon",
    href: "/utilities/aura-studio",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 7.99 },
  },
  {
    id: "screensaver-engine",
    name: "Screensaver Engine",
    tier: "Professional Tools",
    tagline: "Calm screensaver environments & presets.",
    description:
      "Build and run calm screensavers/environments, designed to work with Sanctuary/Worlds over time.",
    highlights: ["Preset engine", "Environment-ready", "Local-first"],
    status: "Coming soon",
    href: "/utilities/screensaver-engine",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 7.99 },
  },

  // =========================
  // CORE UTILITIES (4.99)
  // =========================
  {
    id: "duplicate-finder",
    name: "Duplicate Finder",
    tier: "Core Utilities",
    tagline: "Find and remove duplicates safely.",
    description:
      "Exact-match hashing, grouped duplicates, safe delete options, export reports — designed for 100k+ files.",
    highlights: ["Exact hash scan", "Safe delete defaults", "Export reports"],
    status: "Coming soon",
    href: "/utilities/duplicate-finder",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 4.99 },
  },
  {
    id: "bulk-image-resizer",
    name: "Bulk Image Resizer",
    tier: "Core Utilities",
    tagline: "Batch resize/convert with presets.",
    description:
      "Batch resize, convert, preserve/remove metadata, and apply presets (Etsy/Instagram/wallpaper).",
    highlights: ["Presets", "Quality controls", "Safe output options"],
    status: "Coming soon",
    href: "/utilities/bulk-image-resizer",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 4.99 },
  },
  {
    id: "folder-size-analyzer",
    name: "Folder Size Analyzer",
    tier: "Core Utilities",
    tagline: "See what’s eating your disk.",
    description:
      "Analyze folder sizes fast and surface the real culprits with clear breakdowns and exportable results.",
    highlights: ["Fast scan", "Clear breakdowns", "Export"],
    status: "Coming soon",
    href: "/utilities/folder-size-analyzer",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 4.99 },
  },
  {
    id: "file-renamer-pro",
    name: "File Renamer Pro",
    tier: "Core Utilities",
    tagline: "Bulk rename with preview + undo.",
    description:
      "Pipeline-based renaming (replace, regex, numbering, case transforms) with live preview and rollback logs.",
    highlights: ["Live preview", "Conflict resolution", "Undo log"],
    status: "Coming soon",
    href: "/utilities/file-renamer",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 4.99 },
  },
  {
    id: "downloads-organizer",
    name: "Downloads Organizer",
    tier: "Core Utilities",
    tagline: "Keep Downloads tidy automatically.",
    description:
      "Rules-based sorting by type, keep-recent option, exclusions, and dry-run previews.",
    highlights: ["Rule editor", "Dry run preview", "Keep recent"],
    status: "Coming soon",
    href: "/utilities/downloads-organizer",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 4.99 },
  },

  // =========================
  // QUICK UTILITIES
  // =========================
  {
    id: "screenshot-organizer",
    name: "Screenshot Organizer",
    tier: "Quick Utilities",
    tagline: "Auto-sort screenshots cleanly.",
    description:
      "Sort screenshots by date/app/resolution, with review queue and undo-last-batch where feasible.",
    highlights: ["Sort by date/app", "Review queue", "Undo batch"],
    status: "Coming soon",
    href: "/utilities/screenshot-organizer",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 3.99 },
  },
  {
    id: "calm-workspace-reset",
    name: "Calm Workspace Reset",
    tier: "Quick Utilities",
    tagline: "Safe reset profiles with preview.",
    description:
      "Light/standard/deep reset profiles with explicit previews and undo support where possible.",
    highlights: ["Reset profiles", "Preview before run", "Safe guarantees"],
    status: "Coming soon",
    href: "/utilities/calm-workspace-reset",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 4.99 },
  },
  {
    id: "project-folder-builder",
    name: "Project Folder Builder",
    tier: "Quick Utilities",
    tagline: "Standardize projects instantly.",
    description:
      "Create structured project folders from templates (software/design/custom) with naming enforcement options.",
    highlights: ["Templates", "Custom templates", "Audit logs"],
    status: "Coming soon",
    href: "/utilities/project-folder-builder",
    links: [{ label: "Etsy (soon)", href: "/marketplace" }],
    price: { personal: 3.99 },
  },
];

export const BUNDLES: Bundle[] = [
  {
    id: "utilities-bundle",
    name: "Uprise Utilities Bundle",
    tagline: "High-volume utilities. One clean price.",
    description:
      "A conversion-friendly bundle of core utilities — the simplest way to get the everyday tools.",
    includes: [
      "duplicate-finder",
      "bulk-image-resizer",
      "folder-size-analyzer",
      "file-renamer-pro",
      "downloads-organizer",
      "calm-workspace-reset",
    ],
    value: 28.94,
    bundlePrice: 14.99,
    badge: "Best value",
  },
  {
    id: "professional-bundle",
    name: "Uprise Professional Bundle",
    tagline: "Power tools + guardian tier essentials.",
    description:
      "For people who want serious capability across backup, automation, search, and creator workflows.",
    includes: [
      "caretaker",
      "backup-manager",
      "desktop-search",
      "file-watcher",
      "aura-studio",
    ],
    value: 43.95,
    bundlePrice: 19.99,
    badge: "Pro bundle",
  },
  {
    id: "desktop-platform-bundle",
    name: "Uprise Desktop Platform Bundle",
    tagline: "Flagship ecosystem bundle (highest leverage).",
    description:
      "The core Uprise desktop ecosystem: calm environments, worlds, focus, overlays — plus Caretaker guardian tier.",
    includes: ["sanctuary", "worlds", "focus-space", "workspace-os", "caretaker"],
    value: 47.95,
    bundlePrice: 24.99,
    badge: "Flagship bundle",
  },
];
