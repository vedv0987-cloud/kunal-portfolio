export const site = {
  name: "Vedprakash",
  tagline: "Creative AI Specialist",
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
  { label: "Work", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Tools", to: "/tools" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Focus on Results" },
] as const;

/** Home hero's 4-stat row — kept separate from `stats` so About/Contact's 3-col grids don't shift. */
export const heroStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Industries" },
  { value: "∞", label: "Bigger Possibilities" },
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

/** Home page "What I Build" dark strip — from imagination to intelligent systems. */
export const whatIBuild = [
  { title: "AI Cinematic Video", subtitle: "Storytelling with AI", icon: "video", image: "/images/services/service-ai-cinematic-video/service-ai-cinematic-video.jpg" },
  { title: "Generative Image Design", subtitle: "Visuals that inspire", icon: "image", image: "/images/services/service-generative-image-design/service-generative-image-design.jpg" },
  { title: "Websites & UI/UX", subtitle: "Modern digital experiences", icon: "monitor", image: "/images/services/service-website-development/service-website-development.jpg" },
  { title: "Claude AI Automation", subtitle: "Smarter workflows", icon: "spark", image: "/images/services/service-claude-ai/service-claude-ai.jpg" },
  { title: "Custom AI Bots", subtitle: "AI that works for you", icon: "bot", image: "/images/services/service-bot-creation/service-bot-creation.jpg" },
  { title: "Workflow Automation", subtitle: "Save time. Do more.", icon: "refresh", image: "/images/services/service-workflow-automation/service-workflow-automation.jpg" },
  { title: "API Integrations", subtitle: "Connect. Create. Scale.", icon: "link", image: "/images/services/service-api-integrations/service-api-integrations.jpg" },
  { title: "Creative Systems", subtitle: "Ideas into ecosystems", icon: "bulb" },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Websites & UI/UX",
    icon: "monitor",
    image: "/images/services/service-website-development/service-website-development.jpg",
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
    slug: "ai-cinematic-video",
    title: "AI Cinematic Video",
    icon: "video",
    image: "/images/services/service-ai-cinematic-video/service-ai-cinematic-video.jpg",
    summary: "Story-driven AI video for brands, products and campaigns.",
    body: "High-quality cinematic visuals — concept to final cut — for ads, socials and product launches, produced faster with AI in the loop.",
    deliverables: [
      "Concept & script",
      "AI-generated footage",
      "Color grade & sound",
      "Export for every platform",
    ],
  },
  {
    slug: "generative-image-design",
    title: "Generative Image Design",
    icon: "image",
    image: "/images/services/service-generative-image-design/service-generative-image-design.jpg",
    summary: "On-brand AI imagery for campaigns, products and socials.",
    body: "Hero shots, product visuals and social creative generated and art-directed to match your brand — no stock-photo look.",
    deliverables: [
      "Visual direction",
      "Iterative AI generation",
      "Retouch & brand pass",
      "Export kit for every channel",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: "zap",
    image: "/images/services/service-ai-automation/service-ai-automation.jpg",
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
    title: "Custom AI Bots",
    icon: "bot",
    image: "/images/services/service-bot-creation/service-bot-creation.jpg",
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
    title: "Claude AI Automation",
    icon: "spark",
    image: "/images/services/service-claude-ai/service-claude-ai.jpg",
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
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: "refresh",
    image: "/images/services/service-workflow-automation/service-workflow-automation.jpg",
    summary: "Save time. Do more. Systems that run without you.",
    body: "Visual, resilient workflows across the tools you already use — so information moves and work gets done without manual handoffs.",
    deliverables: [
      "Workflow mapping",
      "Make / n8n / Zapier build",
      "Error handling & alerts",
      "Documentation & handoff",
    ],
  },
  {
    slug: "custom-tools",
    title: "Custom AI Tools",
    icon: "wrench",
    image: "/images/services/service-custom-tools/service-custom-tools.jpg",
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
    image: "/images/services/service-api-integrations/service-api-integrations.jpg",
    summary: "Connect your favorite apps and platforms.",
    body: "Make your stack talk. CRMs, sheets, WhatsApp, Stripe, Notion, calendars — wired so information moves without you copying it.",
    deliverables: [
      "API mapping",
      "Error handling",
      "Webhooks",
      "Admin visibility",
    ],
  },
  {
    slug: "3d-visualization",
    title: "3D Visualization",
    icon: "cube",
    image: "/images/services/service-3d-visualization/service-3d-visualization.jpg",
    summary: "Ideas into immersive worlds.",
    body: "Product renders, architectural walkthroughs and 3D brand visuals that sell the idea before anything is built.",
    deliverables: [
      "Reference & moodboard",
      "3D modeling & lighting",
      "Render pass",
      "Interactive/video export",
    ],
  },
  {
    slug: "social-media-campaigns",
    title: "Social Media Campaigns",
    icon: "share",
    image: "/images/services/service-social-media-campaigns/service-social-media-campaigns.jpg",
    summary: "Content that converts, across every channel.",
    body: "Campaign concepts, creative sets and a posting system built for Instagram, YouTube, LinkedIn and TikTok — designed to be reused, not one-off.",
    deliverables: [
      "Campaign concept",
      "Creative set (video + static)",
      "Channel-ready exports",
      "Posting calendar",
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

/** Reused on every case study page — the same production approach, not project-specific claims. */
export const caseStudyProcess = [
  { n: "1", title: "Research & Reference", body: "Market study, brand understanding, visual direction." },
  { n: "2", title: "AI Ideation", body: "Concept development with AI image & video generation." },
  { n: "3", title: "Refine & Direct", body: "Iterate, enhance and guide visuals for brand alignment." },
  { n: "4", title: "Post-Production", body: "Color grading, sound, cinematic edits, final polish." },
  { n: "5", title: "Multi-Platform Delivery", body: "Format for web, social, ads, outdoor and presentations." },
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
    impact: [
      { value: "40%", label: "Less study time" },
      { value: "2 wks", label: "To higher quiz scores" },
    ],
    featured: false,
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
    impact: [
      { value: "12 hrs/wk", label: "Time returned" },
      { value: "+18%", label: "Cart recovery" },
    ],
    featured: true,
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
    impact: [
      { value: "<1 min", label: "Response time" },
      { value: "2.4×", label: "More booked calls" },
    ],
    featured: false,
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
    impact: [{ value: "Ready to scope", label: "Most briefs now arrive" }],
    featured: false,
  },
] as const;

/** Generic, unbranded placeholders — swap in real client names/logos when supplied. */
export const trustedBy = [
  "Healthcare",
  "Real Estate",
  "EdTech",
  "D2C / E-Commerce",
  "Consulting",
  "AI Products",
] as const;

export const industries = [
  { label: "Healthcare", icon: "heart" },
  { label: "Real Estate", icon: "home" },
  { label: "Jewelry & Retail", icon: "gem" },
  { label: "AI Products", icon: "bot" },
  { label: "Social Campaigns", icon: "share" },
  { label: "Education", icon: "graduation" },
] as const;

export const coreExpertise = [
  { title: "AI Content Creation", icon: "spark" },
  { title: "Video Editing", icon: "video" },
  { title: "UI/UX Design", icon: "monitor" },
  { title: "Automation Workflows", icon: "refresh" },
  { title: "Brand Storytelling", icon: "chat" },
  { title: "Creative Direction", icon: "target" },
  { title: "3D & Motion Graphics", icon: "cube" },
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

export const journey = [
  { n: "01", title: "Design Foundations", body: "Built a strong foundation in design, visual communication and creative thinking." },
  { n: "02", title: "Multimedia & Video", body: "Expanded into video editing, motion graphics and cinematic storytelling." },
  { n: "03", title: "AI Integration", body: "Explored and integrated AI tools into creative workflows to work smarter and faster." },
  { n: "04", title: "Creative AI Specialist", body: "Bringing together design, AI and automation to create impactful brand experiences." },
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

export const collaborationProcess = [
  { n: "01", title: "Discover", body: "Understand your goals and explore possibilities.", icon: "compass" },
  { n: "02", title: "Plan", body: "Define the right strategy and solution approach.", icon: "file" },
  { n: "03", title: "Create", body: "Design, develop and bring your vision to life.", icon: "cog" },
  { n: "04", title: "Deliver", body: "Launch, iterate and scale for greater impact.", icon: "rocket" },
] as const;

export const serviceOptions = [
  "Website Development",
  "AI Automation",
  "Bot Creation",
  "Claude AI Integration",
  "Custom AI Tools",
  "API & Integrations",
  "AI Cinematic Video",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $1k",
  "$1k – $3k",
  "$3k – $8k",
  "$8k+",
  "Let's talk",
] as const;
