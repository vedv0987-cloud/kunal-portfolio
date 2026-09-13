export const site = {
  name: "Vedprakash",
  tagline: "Build · Automate · Grow",
  headline: "Ideas to Intelligent",
  headlineAccent: "Solutions",
  eyebrow: "AI · Automation · Real Results",
  intro:
    "I build AI powered websites, automation systems and smart bots that save time, increase productivity and help you grow.",
  email: "hello@vedprakash.build",
  location: "Available worldwide",
  hoodieLine: ["Discipline", "Creates", "Freedom"],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Tools", to: "/tools" },
  { label: "Testimonials", to: "/testimonials" },
] as const;

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Focus on Results" },
] as const;

export const heroRail = [
  { label: "Websites", icon: "monitor" },
  { label: "AI Bots", icon: "bot" },
  { label: "Automations", icon: "refresh" },
  { label: "Claude AI", icon: "spark" },
  { label: "Custom Tools", icon: "wrench" },
  { label: "Integrations", icon: "link" },
] as const;

export const highlightBar = [
  {
    title: "Modern Websites",
    subtitle: "Fast. Responsive. Stunning.",
    icon: "monitor",
  },
  {
    title: "AI Automation",
    subtitle: "Work Smarter. Not Harder.",
    icon: "zap",
  },
  {
    title: "Custom Bots",
    subtitle: "For Business & Personal Use.",
    icon: "bot",
  },
  {
    title: "Claude AI Solutions",
    subtitle: "Research. Analyze. Create.",
    icon: "spark",
  },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: "globe",
    summary: "Modern, responsive & conversion focused websites.",
    body: "From personal brands to product sites — designed to load fast, look sharp on every screen, and turn visitors into clients.",
    deliverables: [
      "Custom design system",
      "Mobile-first build",
      "SEO-ready structure",
      "Analytics & forms",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: "zap",
    summary: "Automate repetitive tasks and save hours.",
    body: "I map the busywork in your business and replace it with reliable workflows — lead capture, reporting, follow-ups, content ops.",
    deliverables: [
      "Process audit",
      "Workflow design",
      "Tool connections",
      "Monitoring & handoff",
    ],
  },
  {
    slug: "bot-creation",
    title: "Bot Creation",
    icon: "bot",
    summary: "Custom AI bots for business, study or personal use.",
    body: "Always-on assistants that answer, qualify, tutor, or operate tools — trained on your knowledge, not generic chat.",
    deliverables: [
      "Conversation design",
      "Knowledge setup",
      "Channel deploy",
      "Guardrails & logging",
    ],
  },
  {
    slug: "claude-ai",
    title: "Claude AI Integration",
    icon: "spark",
    summary: "Smart solutions using Claude AI's powerful models.",
    body: "Research agents, writing systems, and analysis tools built on Claude — for teams that need depth, not just another chatbot.",
    deliverables: [
      "Prompt systems",
      "Tool use / function calling",
      "Private knowledge",
      "Eval loops",
    ],
  },
  {
    slug: "custom-tools",
    title: "Custom AI Tools",
    icon: "wrench",
    summary: "Tailored tools for your unique needs.",
    body: "Internal dashboards, generators, and operators designed around how you actually work — not a template with your logo.",
    deliverables: [
      "Scoped prototype",
      "Production UI",
      "Auth & data layer",
      "Training for your team",
    ],
  },
  {
    slug: "api-integrations",
    title: "API & Integrations",
    icon: "link",
    summary: "Connect your favorite apps and platforms.",
    body: "Make your stack talk. CRMs, sheets, WhatsApp, Stripe, Notion, calendars — wired so information moves without you copying it.",
    deliverables: [
      "API mapping",
      "Error handling",
      "Webhooks",
      "Admin visibility",
    ],
  },
] as const;

export const processSteps = [
  {
    n: "1",
    title: "Understand",
    body: "We discuss your goals and requirements.",
    icon: "chat",
  },
  {
    n: "2",
    title: "Plan",
    body: "I create a clear strategy and roadmap.",
    icon: "file",
  },
  {
    n: "3",
    title: "Build",
    body: "I develop, test and refine your solution.",
    icon: "cog",
  },
  {
    n: "4",
    title: "Deliver",
    body: "You get a powerful, ready to use solution.",
    icon: "rocket",
  },
  {
    n: "5",
    title: "Support",
    body: "Ongoing support to keep you ahead.",
    icon: "headset",
  },
] as const;

export const projects = [
  {
    slug: "ai-study-assistant",
    title: "AI Study Assistant Bot",
    blurb: "A 24/7 tutor that quizzes, explains, and tracks progress from your notes.",
    image: "/images/project-study-bot.jpg",
    tags: ["Claude AI", "Automation"],
    year: "2026",
    client: "EdTech studio",
    problem:
      "Students were drowning in notes and had no way to quiz themselves without waiting for a tutor.",
    solution:
      "A Claude-powered study bot that ingests PDFs, generates quizzes, explains answers in the student's voice, and logs weak topics.",
    result: "Average study time dropped 40% for the pilot group, with higher quiz scores in two weeks.",
    stack: ["Claude", "WhatsApp", "Notion", "Python"],
  },
  {
    slug: "ecommerce-automation",
    title: "E-Commerce Automation",
    blurb: "Orders, inventory and customer replies running on autopilot.",
    image: "/images/project-ecommerce.jpg",
    tags: ["Website", "Automation"],
    year: "2025",
    client: "D2C brand",
    problem:
      "The founder was manually updating stock, chasing abandoned carts, and answering the same five questions every day.",
    solution:
      "A storefront plus a workflow layer that syncs inventory, nudges carts, and drafts customer replies for review.",
    result: "12 hours/week returned to the founder. Cart recovery up 18%.",
    stack: ["Shopify", "Make", "Claude", "Slack"],
  },
  {
    slug: "custom-business-bot",
    title: "Custom Business Bot",
    blurb: "Your 24/7 business partner — qualify leads, book calls, answer FAQs.",
    image: "/images/project-business-bot.jpg",
    tags: ["AI Bot", "Integration"],
    year: "2026",
    client: "Consulting firm",
    problem:
      "Inbound leads sat unanswered overnight. Qualified calls were being lost to competitors who replied first.",
    solution:
      "A branded bot on the site and WhatsApp that qualifies, books calendar slots, and hands warm leads to the team with a briefing.",
    result: "Response time went from hours to under a minute. 2.4× more booked calls.",
    stack: ["Claude", "Calendly", "HubSpot", "WhatsApp"],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    blurb: "A conversion-first personal brand site for an AI builder.",
    image: "/images/project-portfolio.jpg",
    tags: ["Web Design", "Development"],
    year: "2026",
    client: "Personal brand",
    problem:
      "The previous site looked generic and did not explain the offer, so inquiries were vague and low-intent.",
    solution:
      "A red-black-white brand system, tight copy, and a brief form that captures service, budget and context.",
    result: "Inquiry quality jumped — most briefs now arrive ready to scope.",
    stack: ["React", "Tailwind", "Analytics"],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Vedprakash delivered an amazing AI automation system for my business. Super professional, fast and creative! Highly recommended!",
    name: "Rohit Sharma",
    role: "Business Owner",
    avatar: "/images/avatar-rohit.jpg",
    rating: 5,
  },
  {
    quote:
      "The study bot feels like a private tutor. Our students actually use it every day — that never happened with the last tool we tried.",
    name: "Ananya Mehta",
    role: "Founder, Learnloop",
    avatar: "/images/avatar-ananya.jpg",
    rating: 5,
  },
  {
    quote:
      "Clean build, honest timelines, and the bot started booking calls the same week it launched. Vedprakash just gets it.",
    name: "Kenji Sato",
    role: "Head of Growth",
    avatar: "/images/avatar-kenji.jpg",
    rating: 5,
  },
  {
    quote:
      "He turned a messy stack of spreadsheets and Slack pings into one calm dashboard. Our ops team finally sleeps.",
    name: "Maya Brooks",
    role: "Operations Lead",
    avatar: "/images/avatar-maya.jpg",
    rating: 5,
  },
] as const;

export const tools = [
  {
    group: "AI",
    items: [
      { name: "Claude AI", detail: "Agents, research, writing systems" },
      { name: "Custom GPTs", detail: "Specialist bots on your data" },
      { name: "Prompt systems", detail: "Reusable, tested instructions" },
    ],
  },
  {
    group: "Automation",
    items: [
      { name: "Make & n8n", detail: "Visual workflows that don't break" },
      { name: "Zapier", detail: "Fast connections for small teams" },
      { name: "Webhooks", detail: "Event-driven glue between apps" },
    ],
  },
  {
    group: "Product",
    items: [
      { name: "React", detail: "Fast, modern interfaces" },
      { name: "APIs", detail: "REST, GraphQL, private backends" },
      { name: "Analytics", detail: "Know what actually converts" },
    ],
  },
] as const;

export const about = {
  kicker: "About",
  title: "Builder. Automator. Partner.",
  story: [
    "I help founders and teams turn messy, manual work into intelligent systems — websites that convert, bots that actually help, and automations that run while you sleep.",
    "The work is simple in principle: understand the outcome, cut the noise, ship something people use. No theatre. No 40-page decks. Real tools in your hands.",
    "Discipline creates freedom — that's how I build, and that's what I try to give you back: time, focus, and a system that keeps growing with you.",
  ],
  values: [
    { title: "Clarity first", body: "If we can't explain it simply, we don't build it yet." },
    { title: "Ship, then sharpen", body: "A working tool in week one beats a perfect plan in month three." },
    { title: "Own the outcome", body: "Pretty isn't the goal. Hours saved and revenue moved is." },
  ],
} as const;

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "Email", href: "mailto:hello@vedprakash.build", icon: "mail" },
] as const;

export const serviceOptions = [
  "Website Development",
  "AI Automation",
  "Bot Creation",
  "Claude AI Integration",
  "Custom AI Tools",
  "API & Integrations",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $1k",
  "$1k – $3k",
  "$3k – $8k",
  "$8k+",
  "Let's talk",
] as const;
