import type { IconName } from "@/components/icons";

export type PlanId = "starter" | "pro" | "premium" | "enterprise";

export type PricingPlan = {
  id: PlanId;
  name: string;
  tagline: string;
  icon: IconName;
  /** INR before discount; undefined = custom quote (Enterprise). */
  listPrice?: number;
  discountPct?: number;
  badge?: string;
  highlight?: boolean;
  cta: string;
  /** "Everything in <plan>, plus" heading above the feature list. */
  includesFrom?: string;
  features: string[];
};

/**
 * Prices and discounts are the owner's (Starter ₹49,999 −25%, Pro ₹99,999 −35%,
 * Premium ₹1,49,999). Pack contents are a proposed starting point — edit freely;
 * the proposal email reads from this same list.
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Pack",
    tagline: "Launch with a sharp, AI-powered presence.",
    icon: "spark",
    listPrice: 49999,
    discountPct: 25,
    cta: "Get Starter",
    features: [
      "10 AI-generated brand visuals & social posts",
      "2 short-form AI videos (up to 30 sec)",
      "1-page responsive landing website",
      "Basic brand look — colours, fonts & templates",
      "1 round of revisions",
      "Delivery in 2–3 weeks",
    ],
  },
  {
    id: "pro",
    name: "Pro Pack",
    tagline: "Content, website and your first automations.",
    icon: "rocket",
    listPrice: 99999,
    discountPct: 35,
    badge: "Most popular",
    highlight: true,
    cta: "Get Pro",
    includesFrom: "Starter",
    features: [
      "25 AI visuals & ad creatives",
      "4 short-form videos + 1 cinematic brand film (60 sec)",
      "Up to 5-page website with UI/UX design",
      "Custom AI chatbot for your website or WhatsApp",
      "1 workflow automation (n8n / Make / Zapier)",
      "2 rounds of revisions",
      "30 days post-launch support",
    ],
  },
  {
    id: "premium",
    name: "Premium Pack",
    tagline: "A full creative + AI system for serious growth.",
    icon: "gem",
    listPrice: 149999,
    badge: "Best value",
    cta: "Get Premium",
    includesFrom: "Pro",
    features: [
      "50 AI visuals with campaign art direction",
      "8 short-form videos + 2 cinematic brand films",
      "Up to 10-page website with CMS & SEO setup",
      "Claude AI automation system (up to 3 workflows)",
      "Custom AI tool or API integration",
      "3 rounds of revisions & priority delivery",
      "60 days support + monthly strategy call",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom scope for brands, hospitals & teams.",
    icon: "globe",
    cta: "Let's Talk",
    includesFrom: "Premium",
    features: [
      "Custom scope across video, web, AI & automation",
      "Multi-brand or multi-location campaigns",
      "Advanced AI agents & system integrations",
      "Dedicated timelines & a single point of contact",
      "NDA and flexible billing on request",
      "Ongoing retainer options",
    ],
  },
];

export function finalPrice(plan: PricingPlan): number | undefined {
  if (plan.listPrice === undefined) return undefined;
  return Math.round(plan.listPrice * (1 - (plan.discountPct ?? 0) / 100));
}

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function formatINR(value: number): string {
  return inr.format(value);
}
