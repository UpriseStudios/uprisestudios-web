export type AppKey =
  | "uprise"
  | "lumen"
  | "tally"
  | "anchor"
  | "anchor-plus"
  | "page"
  | "unsent"
  | "ember"
  | "calmbet";

export type PrivacyNotice = {
  key: AppKey;
  name: string;
  summary: string;
  lastUpdated: string;
  contactEmail: string;
  sections: Array<{ title: string; body: string[] }>;
};

const CONTACT = "hello@uprisestudios.co.uk";

export const PRIVACY_NOTICES: Record<AppKey, PrivacyNotice> = {
  uprise: {
    key: "uprise",
    name: "Uprise Studios",
    summary:
      "The studio website provides product information and optional early-access registration. Advertising is not currently integrated.",
    lastUpdated: "2026-11-21",
    contactEmail: CONTACT,
    sections: [
      {
        title: "What we collect",
        body: [
          "Website analytics: none by default. If we add analytics later, it will be privacy-preserving and disclosed here.",
          "Contact emails: if you email us, we receive your address and the content you send.",
          "Lumen early-access registration: submitted email addresses are stored encrypted alongside a one-way hash used for duplicate detection.",
          "Hosting providers may process technical request logs to operate and secure the site.",
        ],
      },
      {
        title: "How we use it",
        body: ["To respond to enquiries, manage requested early-access notifications and operate and protect the website."],
      },
      {
        title: "Advertising and cookies",
        body: [
          "Google AdSense is not currently integrated on this website. Before introducing advertising or non-essential tracking, we will update this notice and implement required consent controls.",
          "Any essential technical storage and external services will be assessed as part of our deployment audit.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You can request deletion of any emails you’ve sent us (where feasible).",
          "You can ask what data we hold about you.",
        ],
      },
    ],
  },

  lumen: {
    key: "lumen",
    name: "Lumen",
    summary:
      "Lumen is designed for consent-first memory and harm reduction. It is local-first by default.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [
      {
        title: "Local-first by default",
        body: [
          "Lumen runs on your device. Your device is the source of truth.",
          "Memory is only stored when you explicitly allow it.",
        ],
      },
      {
        title: "Optional cloud sync",
        body: [
          "If cloud sync is enabled in the future, it will be opt-in only and end-to-end encrypted before upload.",
          "Consent can be withdrawn and data purged immediately.",
        ],
      },
      {
        title: "Early access registration",
        body: [
          "If you register interest on this site, we store your email encrypted. We do not store plaintext emails.",
          "We will only use it to notify you when early access opens, then delete it.",
        ],
      },
    ],
  },

  tally: {
    key: "tally",
    name: "Tally",
    summary:
      "Tally is a privacy-first finance companion. It is designed to minimise data collection and keep you in control.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [
      {
        title: "What Tally stores",
        body: [
          "Budgets, categories, and manual transactions live on-device by default.",
          "If you connect a bank account (optional), data is used to display transactions and insights.",
        ],
      },
      {
        title: "Bank connections",
        body: [
          "Bank connections are handled through regulated providers (e.g., open banking).",
          "We aim to keep processing local where possible and store only what’s necessary for the feature you enable.",
        ],
      },
      {
        title: "Your control",
        body: [
          "You can disconnect a bank at any time.",
          "You can export or delete your data from within the app (where supported).",
        ],
      },
    ],
  },

  anchor: {
    key: "anchor",
    name: "Anchor",
    summary: "Anchor is a simple thought-unloader designed to reduce cognitive load.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [
      { title: "Data", body: ["Anchor stores your entries on-device by default."] },
      { title: "Control", body: ["You can delete entries at any time."] },
    ],
  },

  "anchor-plus": {
    key: "anchor-plus",
    name: "Anchor++",
    summary: "Anchor++ adds optional locking and extended tools, while remaining local-first.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [
      { title: "Local-first", body: ["Entries are stored on-device by default."] },
      { title: "App Lock", body: ["Optional PIN/biometric locking can be enabled in settings."] },
    ],
  },

  page: {
    key: "page",
    name: "Page",
    summary: "Page is a now/then reflection tool designed to help you return and reflect.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [{ title: "Data", body: ["Reflections are stored on-device by default."] }],
  },

  unsent: {
    key: "unsent",
    name: "Unsent",
    summary: "Unsent helps you write what you need to say — without having to send it.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [{ title: "Data", body: ["Letters are stored on-device by default."] }],
  },

  ember: {
    key: "ember",
    name: "Ember",
    summary: "Ember provides quick grounding exercises for stress and overwhelm.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [{ title: "Data", body: ["Ember does not require an account."] }],
  },

  calmbet: {
    key: "calmbet",
    name: "CalmBet",
    summary: "CalmBet is an experimental tool. Details will be published when it launches.",
    lastUpdated: "2026-01-26",
    contactEmail: CONTACT,
    sections: [{ title: "Status", body: ["Coming soon."] }],
  },
};

export const PRIVACY_LIST = Object.values(PRIVACY_NOTICES);
