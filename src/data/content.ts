export const site = {
  name: "Vedprakash",
  tagline: "Creative AI Specialist",
  headline: "Design. Automate.",
  headlineAccent: "Scale.",
  eyebrow: "AI · Automation · Real Results",
  intro:
    "I build AI powered websites, automation systems and smart bots that save time, increase productivity and help you grow.",
  email: "Vedv0987@gmail.com",
  phone: "+91 7710039946",
  location: "Available worldwide",
  hoodieLine: ["Discipline", "Creates", "Freedom"],
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Tools", to: "/tools" },
  { label: "Pricing", to: "/pricing" },
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

/**
 * Home page "What I Build" dark strip — from imagination to intelligent systems.
 * `image` values are visual-assets registry keys (see src/data/visual-assets.ts),
 * not raw paths. "Websites & UI/UX" deliberately uses the Services-page thumbnail
 * instead of home/service-artwork/websites-uiux, which qa-redo.json flags as
 * unintended medical/dashboard imagery — roadmap §4 "documented alternative".
 */
export const whatIBuild = [
  { title: "AI Cinematic Video", subtitle: "Storytelling with AI", icon: "video", image: "home/service-artwork/cinematic-video" },
  { title: "Generative Image Design", subtitle: "Visuals that inspire", icon: "image", image: "home/service-artwork/generative-image-design" },
  { title: "Websites & UI/UX", subtitle: "Modern digital experiences", icon: "monitor", image: "services/thumbnails/websites-uiux" },
  { title: "Claude AI Automation", subtitle: "Smarter workflows", icon: "spark", image: "home/service-artwork/claude-ai" },
  { title: "Custom AI Bots", subtitle: "AI that works for you", icon: "bot", image: "home/service-artwork/custom-ai-bots" },
  { title: "Workflow Automation", subtitle: "Save time. Do more.", icon: "refresh", image: "home/service-artwork/workflow-automation" },
  { title: "API Integrations", subtitle: "Connect. Create. Scale.", icon: "link", image: "home/service-artwork/api-integrations" },
  { title: "Creative Systems", subtitle: "Ideas into ecosystems", icon: "bulb", image: "home/service-artwork/creative-systems" },
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

/** Home page "Featured" strip — six visual categories, not literal projects (roadmap Phase B). */
export const homeCategories = [
  { title: "Healthcare Campaigns", category: "Healthcare", asset: "home/thumb-healthcare" },
  { title: "Luxury Real Estate", category: "Real Estate", asset: "home/thumb-real-estate" },
  { title: "Claude AI Automation", category: "AI & Automation", asset: "home/thumb-claude" },
  { title: "Custom AI Bots", category: "AI & Automation", asset: "home/thumb-ai-bot" },
  { title: "Cinematic AI Video", category: "AI Video", asset: "home/thumb-cinematic" },
  { title: "Web & UI/UX", category: "Websites", asset: "home/thumb-web-uiux" },
] as const;

/**
 * Roadmap Phase C — real 9-project roster (Reliance Foundation Hospital,
 * Blu Diamond, Claude AI, Custom AI Bots, OncoSphere, Realatte AI, Alfamed,
 * Social Media Campaign, ESMO Asia), replacing the old 4 generic demo
 * projects and their fabricated metrics.
 *
 * `image` is a visual-assets key and is deliberately OMITTED for 7 of the 9
 * — every work/artwork/* and work/cards/* asset for a named real client
 * (Reliance, Blu Diamond, Alfamed, OncoSphere, Realatte AI, ESMO Asia) has a
 * fabricated logo/tagline baked into the pixels, and the Claude AI asset
 * reproduces Anthropic's real Claude trademark in a fake product mockup —
 * neither is safe to publish (owner-confirmed: skip them, text-only cards
 * until real logos are supplied). Only Custom AI Bots and Social Media
 * Campaign have clean, unbranded artwork.
 *
 * `stack`/`problem`/`solution`/`result`/`impact` stay empty for the 7
 * without real project data — never fabricated (roadmap §7 content
 * integrity). Blu Diamond is the one fully-populated case study, using only
 * the roadmap's own supplied copy.
 */
export const projects = [
  {
    slug: "reliance-foundation-hospital",
    title: "Reliance Foundation Hospital Campaign",
    blurb: "A healthcare campaign built around real human impact and cinematic storytelling.",
    tags: ["Healthcare"],
    client: "Reliance Foundation Hospital",
    image: undefined as string | undefined,
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "blu-diamond",
    title: "Blu Diamond Luxury Visual Campaign",
    blurb:
      "A premium visual campaign that redefines modern luxury living, crafted with AI-powered creativity and cinematic storytelling.",
    tags: ["Real Estate"],
    client: "Blu Diamond",
    image: undefined as string | undefined,
    problem:
      "Position Blu Diamond as a premium, future-ready real estate brand in a highly competitive market. The challenge was to create a visual identity and campaign that not only showcased properties but also communicated a lifestyle of elegance, trust and a brighter tomorrow.",
    solution:
      "We combined AI-powered visual production, cinematic storytelling and strategic messaging to create a cohesive multi-platform campaign. Every frame was designed to evoke aspiration, emotion and possibility — from architectural beauty to the feeling of home.",
    result: "",
    stack: [
      "Cinematic Brand Film (AI-Powered)",
      "High-End Property Visuals & Lifestyle Photography",
      "Social Media Ad Creatives",
      "Website & Landing Page Assets",
      "Outdoor & Print Campaign Designs",
      "Campaign Strategy & Messaging",
    ],
    // Gallery: only generic, unbranded architecture/lifestyle photography —
    // case-study/gallery/branded-lifestyle and /brand-wall (and the hero,
    // and every outputs/* mockup) all have a fabricated "Blu Diamond" logo
    // baked in and are excluded, same rule as Phase C/D/E.
    gallery: ["case-study/gallery/villa-exterior", "case-study/gallery/luxury-interior", "case-study/gallery/ocean-pool"] as string[],
    impact: [] as { value: string; label: string }[],
    featured: true,
  },
  {
    slug: "claude-ai-automation",
    title: "Claude AI Automation Dashboard",
    blurb: "An automation dashboard turning ideas into intelligent systems — research, analyze, create, automate.",
    tags: ["AI & Automation"],
    client: "Internal",
    image: undefined as string | undefined,
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "custom-ai-bots",
    title: "Custom AI Bots for Real Work",
    blurb: "24/7 support, document analysis, workflow automation and custom intelligence in one assistant.",
    tags: ["AI & Automation"],
    client: "Internal",
    image: "work/artwork/custom-ai-bots",
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "oncosphere",
    title: "OncoSphere Medical Education",
    blurb: "Cancer-care education content designed to make complex medical topics approachable.",
    tags: ["Healthcare"],
    client: "OncoSphere",
    image: undefined as string | undefined,
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "realatte-ai",
    title: "Realatte AI — Real Estate Smarter with AI",
    blurb: "Search. Compare. Decide. — a real-estate platform website and UI system built for an AI-driven brand.",
    tags: ["Real Estate", "Websites"],
    client: "Realatte AI",
    image: undefined as string | undefined,
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "alfamed",
    title: "AlphaMed Product Content",
    blurb: "Healthcare product photography and content for a better tomorrow.",
    tags: ["Healthcare"],
    client: "AlphaMed",
    image: undefined as string | undefined,
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "social-media-campaign",
    title: "Social Media Campaign — Good Ideas, Bigger Reach",
    blurb: "A social-first creative campaign designed to convert across Instagram, LinkedIn, YouTube and TikTok.",
    tags: ["Social"],
    client: "Internal",
    image: "work/artwork/social-media-campaign",
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
  {
    slug: "esmo-asia",
    title: "ESMO Asia Event & Booth Experience",
    blurb: "Science today, brighter tomorrows — booth and event brand experience design.",
    tags: ["Healthcare"],
    client: "ESMO Asia",
    image: undefined as string | undefined,
    problem: "",
    solution: "",
    result: "",
    stack: [] as string[],
    gallery: [] as string[],
    impact: [] as { value: string; label: string }[],
    featured: false,
  },
] as const;

/**
 * Real client logos, supplied directly by the owner (public/images/clients/).
 * 7 of 9 clients have a real logo file; OncoSphere and Realatte AI don't
 * yet — `logo: undefined` renders a plain text chip for those, never a
 * fabricated mark.
 */
export const clients = [
  { name: "Reliance Foundation Hospital", logo: "/images/clients/reliance-foundation-hospital.png" },
  { name: "Blu Diamond", logo: "/images/clients/blu-diamond.png" },
  { name: "AlphaMed", logo: "/images/clients/alphamed.png" },
  { name: "OncoSphere", logo: "/images/clients/oncosphere.png" as string | undefined },
  { name: "MediSage", logo: "/images/clients/medisage.png" },
  { name: "Nanavati Max", logo: "/images/clients/nanavati-max.png" },
  { name: "S3K Impex", logo: "/images/clients/s3k-impex.png" },
  { name: "Realatte AI", logo: "/images/clients/realatte.png" as string | undefined },
  { name: "ESMO Asia", logo: "/images/clients/esmo-asia.png" },
  { name: "SevenHills Hospital", logo: "/images/clients/sevenhills-hospital.png" },
  { name: "AstraZeneca", logo: "/images/clients/astrazeneca.png" },
] as const;

export const industries = [
  { label: "Healthcare", icon: "heart", asset: "about/industries/cards/healthcare" },
  { label: "Real Estate", icon: "home", asset: "about/industries/cards/real-estate" },
  { label: "Jewelry & Retail", icon: "gem", asset: "about/industries/cards/jewelry" },
  { label: "AI Products", icon: "bot", asset: "about/industries/cards/ai-products" },
  { label: "Social Campaigns", icon: "share", asset: "about/industries/cards/social-campaigns" },
  { label: "Education", icon: "graduation", asset: "about/industries/cards/medical-education" },
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
    avatar: "/images/avatar-rohit.webp",
    rating: 5,
  },
  {
    quote:
      "The study bot feels like a private tutor. Our students actually use it every day — that never happened with the last tool we tried.",
    name: "Ananya Mehta",
    role: "Founder, Learnloop",
    avatar: "/images/avatar-ananya.webp",
    rating: 5,
  },
  {
    quote:
      "Clean build, honest timelines, and the bot started booking calls the same week it launched. Vedprakash just gets it.",
    name: "Kenji Sato",
    role: "Head of Growth",
    avatar: "/images/avatar-kenji.webp",
    rating: 5,
  },
  {
    quote:
      "He turned a messy stack of spreadsheets and Slack pings into one calm dashboard. Our ops team finally sleeps.",
    name: "Maya Brooks",
    role: "Operations Lead",
    avatar: "/images/avatar-maya.webp",
    rating: 5,
  },
] as const;

/**
 * Tools page. Every tile opens the tool's official website (`url`) in a new tab.
 * `logo` is a simple-icons slug (official brand SVG + brand color, CC0) where
 * one exists. simple-icons doesn't carry Adobe, OpenAI/ChatGPT, Higgsfield,
 * HeyGen, Midjourney, Runway, Kling, Luma, Canva or CapCut marks (removed at
 * those brands' request / never added), so those render a plain monogram
 * tile — never a hand-drawn imitation of their logo. Drop official logo files
 * into ~/Desktop/Logo and they can replace the monograms.
 */
export type ToolItem = {
  name: string;
  detail: string;
  url: string;
  logo?: string;
  monogram?: string;
  color?: string;
};

export const tools: { group: string; blurb: string; items: ToolItem[] }[] = [
  {
    group: "AI Assistants & Coding",
    blurb: "Reasoning, research and code — the brains behind every system.",
    items: [
      { name: "Claude AI", detail: "Agents, research & writing systems", url: "https://claude.ai", logo: "claude" },
      { name: "ChatGPT", detail: "Ideation, copy and quick analysis", url: "https://chatgpt.com", monogram: "GPT", color: "#0D0D0D" },
      { name: "Codex", detail: "AI pair-programming for real builds", url: "https://openai.com/codex/", monogram: "Cx", color: "#0D0D0D" },
      { name: "Google Gemini", detail: "Multimodal research & docs", url: "https://gemini.google.com", logo: "googlegemini" },
      { name: "Perplexity", detail: "Cited web research in seconds", url: "https://www.perplexity.ai", logo: "perplexity" },
      { name: "Cursor", detail: "AI-native code editor", url: "https://cursor.com", logo: "cursor" },
      { name: "GitHub Copilot", detail: "Inline AI coding assistant", url: "https://github.com/features/copilot", logo: "githubcopilot" },
    ],
  },
  {
    group: "AI Image & Video",
    blurb: "Cinematic visuals, product shots and motion — generated and art-directed.",
    items: [
      { name: "Higgsfield AI", detail: "Cinematic AI video & camera motion", url: "https://higgsfield.ai", monogram: "Hf", color: "#0D0D0D" },
      { name: "Freepik", detail: "Formerly Magnific AI — upscaling & imagery", url: "https://www.freepik.com", logo: "freepik" },
      { name: "Google Flow", detail: "AI filmmaking with Veo", url: "https://labs.google/flow/about", logo: "google" },
      { name: "Midjourney", detail: "Art-directed concept imagery", url: "https://www.midjourney.com", monogram: "Mj", color: "#0D0D0D" },
      { name: "Runway", detail: "Gen-video, motion & VFX tools", url: "https://runwayml.com", monogram: "Rw", color: "#0D0D0D" },
      { name: "Kling AI", detail: "Realistic text & image-to-video", url: "https://klingai.com", monogram: "Kl", color: "#0D0D0D" },
      { name: "Luma Dream Machine", detail: "Fast cinematic video generation", url: "https://lumalabs.ai/dream-machine", monogram: "Lu", color: "#0D0D0D" },
      { name: "Adobe Firefly", detail: "Commercially safe generative design", url: "https://firefly.adobe.com", monogram: "Ff", color: "#DA1F26" },
      { name: "HeyGen", detail: "AI avatars & spokesperson video", url: "https://www.heygen.com", monogram: "Hg", color: "#0D0D0D" },
    ],
  },
  {
    group: "AI Voice & Music",
    blurb: "Voice-overs, soundtracks and audio that finish the story.",
    items: [
      { name: "ElevenLabs", detail: "Natural AI voice-overs & dubbing", url: "https://elevenlabs.io", logo: "elevenlabs" },
      { name: "Suno", detail: "Original AI music & jingles", url: "https://suno.com", logo: "suno" },
    ],
  },
  {
    group: "Design & Editing",
    blurb: "Finishing, editing and brand polish.",
    items: [
      { name: "Adobe Creative Cloud", detail: "Photoshop, Premiere Pro, After Effects, Illustrator", url: "https://www.adobe.com/creativecloud.html", monogram: "Cc", color: "#DA1F26" },
      { name: "Figma", detail: "UI/UX design & prototypes", url: "https://www.figma.com", logo: "figma" },
      { name: "Canva", detail: "Quick brand-ready layouts", url: "https://www.canva.com", monogram: "Cv", color: "#00C4CC" },
      { name: "CapCut", detail: "Short-form edits & captions", url: "https://www.capcut.com", monogram: "Cut", color: "#0D0D0D" },
      { name: "DaVinci Resolve", detail: "Color grading & finishing", url: "https://www.blackmagicdesign.com/products/davinciresolve", logo: "davinciresolve" },
      { name: "Blender", detail: "3D scenes & product renders", url: "https://www.blender.org", logo: "blender" },
    ],
  },
  {
    group: "Web & Code",
    blurb: "Fast, modern websites and the code behind AI products.",
    items: [
      { name: "Python", detail: "Scripts, data & AI pipelines", url: "https://www.python.org", logo: "python" },
      { name: "React", detail: "Fast, modern interfaces", url: "https://react.dev", logo: "react" },
      { name: "Next.js", detail: "Production web apps & sites", url: "https://nextjs.org", logo: "nextdotjs" },
      { name: "TypeScript", detail: "Reliable, typed codebases", url: "https://www.typescriptlang.org", logo: "typescript" },
      { name: "Tailwind CSS", detail: "Pixel-perfect responsive UI", url: "https://tailwindcss.com", logo: "tailwindcss" },
      { name: "Supabase", detail: "Databases, auth & storage", url: "https://supabase.com", logo: "supabase" },
      { name: "Vercel", detail: "Global hosting & deploys", url: "https://vercel.com", logo: "vercel" },
      { name: "GitHub", detail: "Code, versioning & CI", url: "https://github.com", logo: "github" },
      { name: "Hugging Face", detail: "Open-source AI models", url: "https://huggingface.co", logo: "huggingface" },
      { name: "LangChain", detail: "LLM apps & AI agents", url: "https://www.langchain.com", logo: "langchain" },
      { name: "Webflow", detail: "No-code marketing sites", url: "https://webflow.com", logo: "webflow" },
    ],
  },
  {
    group: "Automation & Workflow",
    blurb: "The glue that turns tools into systems that run on their own.",
    items: [
      { name: "n8n", detail: "Self-hostable visual workflows", url: "https://n8n.io", logo: "n8n" },
      { name: "Make", detail: "Visual automations that don't break", url: "https://www.make.com", logo: "make" },
      { name: "Zapier", detail: "Fast connections for small teams", url: "https://zapier.com", logo: "zapier" },
      { name: "Airtable", detail: "Flexible databases for ops", url: "https://www.airtable.com", logo: "airtable" },
      { name: "Notion", detail: "Docs, wikis & project hubs", url: "https://www.notion.com", logo: "notion" },
      { name: "WhatsApp Business", detail: "Chatbots & customer messaging", url: "https://business.whatsapp.com", logo: "whatsapp" },
    ],
  },
];

export const journey = [
  { n: "01", title: "Design Foundations", body: "Built a strong foundation in design, visual communication and creative thinking." },
  { n: "02", title: "Multimedia & Video", body: "Expanded into video editing, motion graphics and cinematic storytelling." },
  { n: "03", title: "AI Integration", body: "Explored and integrated AI tools into creative workflows to work smarter and faster." },
  { n: "04", title: "Creative AI Specialist", body: "Bringing together design, AI and automation to create impactful brand experiences." },
] as const;

/**
 * Roadmap Phase E — the 4 professional-experience cards were missing
 * entirely on this page. Text-only (no dates/metrics) — none confirmed yet
 * (roadmap §7 content integrity). No office-signage imagery either: every
 * about/experience/artwork|cards/* asset has a fabricated logo/signage for
 * these real employers, same problem found in Phase C.
 */
export const experience = [
  { company: "MediSage", industry: "Medical Education", role: "Creative Partner", body: "Educational videos, campaign creatives and digital content for healthcare professionals.", logo: "/images/clients/medisage.png" },
  { company: "Nanavati Max", industry: "Healthcare", role: "Creative Partner", body: "Multimedia content and campaign assets for hospital initiatives and patient awareness.", logo: "/images/clients/nanavati-max.png" },
  { company: "S3K Impex", industry: "Jewelry", role: "Creative Partner", body: "Premium product visuals, videos and brand content for the jewelry industry.", logo: "/images/clients/s3k-impex.png" },
  { company: "Realatte AI", industry: "AI Products", role: "Creative Partner", body: "Brand identity, product visuals and digital content for an AI-driven real estate platform.", logo: "/images/clients/realatte.png" as string | undefined },
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
  { label: "Email", href: "mailto:Vedv0987@gmail.com", icon: "mail" },
  { label: "Call", href: "tel:+917710039946", icon: "phone" },
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
