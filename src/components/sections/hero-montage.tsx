import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Icon, type IconName } from "@/components/icons";
import { derived } from "@/data/derived-assets";
import { cn } from "@/lib/utils";

type Frame = {
  key: keyof typeof derived;
  alt: string;
  /** Live caption for photo-only frames; frames with baked text leave this off. */
  label?: { title: string; tag: string };
};

type Card = {
  /** Frames share one aspect ratio (pool images are pre-cropped to match), so swapping never resizes or crops the card. */
  frames: Frame[];
  pos: CSSProperties;
  rot: number;
  /** Parallax strength — higher = moves more with the cursor (reads as closer). */
  depth: number;
  z: number;
  float: number;
};

// Positions are % of the stage (6:5). Each card is its own element, so every
// one can pop in on its own beat, drift on its own float cycle, respond to the
// cursor at its own depth, and swap artwork on its own turn.
const CARDS: Card[] = [
  {
    frames: [
      { key: "heroCinematic", alt: "A Bigger Tomorrow — cinematic AI video" },
      { key: "poolPromoCinematic", alt: "A Bigger Tomorrow — cinematic AI video trailer" },
    ],
    pos: { left: "0%", top: "2%", width: "46%" }, rot: -4, depth: 0.55, z: 2, float: 7.2,
  },
  {
    frames: [
      { key: "heroRealEstate", alt: "Extraordinary Spaces — real estate visuals" },
      { key: "poolPortrait", alt: "Generative AI portrait", label: { title: "Visuals That Inspire", tag: "Generative Image" } },
    ],
    pos: { right: "0%", top: "0%", width: "34%" }, rot: 4, depth: 0.85, z: 3, float: 6.4,
  },
  {
    frames: [
      { key: "heroHealthcare", alt: "Healthcare campaign visual", label: { title: "Better Care, Brighter Lives", tag: "Healthcare" } },
      { key: "poolHospital", alt: "Bright modern hospital corridor", label: { title: "Care Spaces, Reimagined", tag: "Healthcare" } },
      { key: "poolDna", alt: "DNA helix medical visual", label: { title: "Complex Science, Made Clear", tag: "Medical Education" } },
    ],
    pos: { left: "2%", top: "44%", width: "36%" }, rot: -3, depth: 0.75, z: 4, float: 8.1,
  },
  {
    frames: [
      { key: "heroAutomation", alt: "AI automation dashboard", label: { title: "Ideas into Intelligent Systems", tag: "AI Automation" } },
      { key: "poolWorkflow", alt: "Connected workflow automation nodes", label: { title: "Save Time. Do More.", tag: "Workflow Automation" } },
    ],
    pos: { left: "30%", top: "27%", width: "44%" }, rot: 0, depth: 0.35, z: 6, float: 9,
  },
  {
    frames: [
      { key: "heroJewelry", alt: "Jewelry product visual", label: { title: "Elegance Reimagined", tag: "Product Visual" } },
      { key: "poolRing", alt: "Gold diamond ring product shot", label: { title: "Crafted to Shine", tag: "Jewelry & Retail" } },
      { key: "poolVilla", alt: "Modern luxury villa at dusk", label: { title: "Luxury Living, Visualised", tag: "Real Estate" } },
    ],
    pos: { right: "0%", top: "37%", width: "30%" }, rot: 5, depth: 1, z: 5, float: 6.8,
  },
  {
    frames: [
      { key: "heroWebsites", alt: "Website and UI/UX design", label: { title: "Premium Digital Experiences", tag: "Websites / UI/UX" } },
      { key: "poolCamera", alt: "Cinema camera in dramatic light", label: { title: "Storytelling with AI", tag: "AI Cinematic Video" } },
    ],
    pos: { left: "8%", bottom: "2%", width: "42%" }, rot: -2, depth: 0.65, z: 7, float: 7.6,
  },
  {
    frames: [
      { key: "heroAiBot", alt: "Custom AI assistant bot", label: { title: "Your AI Assistant, Always On", tag: "AI Bots" } },
      { key: "poolRobot", alt: "Friendly AI robot assistant", label: { title: "AI That Works for You", tag: "Custom AI Bots" } },
    ],
    pos: { right: "4%", bottom: "4%", width: "30%" }, rot: 3, depth: 1.1, z: 8, float: 6.1,
  },
];

// Floating keyword chips — the "closest" layer, so they get the most parallax.
const CHIPS: { label: string; icon: IconName; pos: CSSProperties; depth: number; float: number }[] = [
  { label: "Claude AI", icon: "spark", pos: { left: "38%", top: "-3%" }, depth: 1.6, float: 5.4 },
  { label: "Automation", icon: "zap", pos: { left: "-4%", top: "36%" }, depth: 1.4, float: 6.2 },
  { label: "4K AI Video", icon: "video", pos: { right: "-3%", top: "29%" }, depth: 1.7, float: 5.8 },
  { label: "UI/UX", icon: "monitor", pos: { left: "46%", bottom: "-4%" }, depth: 1.5, float: 6.6 },
];

// One card swaps at a time, in a scattered order, so the montage feels alive without everything changing at once.
const SWAP_ORDER = [3, 0, 5, 2, 6, 1, 4];
const SWAP_EVERY_MS = 1500;
const FIRST_SWAP_AFTER_MS = 3000;

export function HeroMontage() {
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const paused = useRef(false);
  const [active, setActive] = useState<number[]>(() => CARDS.map(() => 0));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let step = 0;
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        // Hold still while the visitor is looking at a card, and when the tab is in the background.
        if (paused.current || document.hidden) return;
        const card = SWAP_ORDER[step % SWAP_ORDER.length];
        step += 1;
        setActive((prev) => prev.map((f, i) => (i === card ? (f + 1) % CARDS[i].frames.length : f)));
      }, SWAP_EVERY_MS);
    }, FIRST_SWAP_AFTER_MS);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, []);

  const setPointer = useCallback((x: number, y: number) => {
    const el = stage.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
      el.style.setProperty("--gx", `${(((x + 1) / 2) * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${(((y + 1) / 2) * 100).toFixed(1)}%`);
    });
  }, []);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    // Parallax is a mouse-only nicety; touch devices just get pop-in, float and swaps.
    if (e.pointerType !== "mouse" || !stage.current) return;
    const r = stage.current.getBoundingClientRect();
    setPointer(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <div
      ref={stage}
      onPointerMove={onMove}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") paused.current = true;
      }}
      onPointerLeave={() => {
        paused.current = false;
        setPointer(0, 0);
      }}
      className="hero-stage relative mx-auto aspect-[6/5] w-full max-w-[640px] min-w-0 flex-1"
      style={{ "--mx": 0, "--my": 0 } as CSSProperties}
    >
      <div aria-hidden className="hero-glow pointer-events-none absolute -inset-10 rounded-full" />
      {CARDS.map((card, i) => (
        <div
          key={card.frames[0].key}
          className="hero-slot absolute"
          style={
            {
              ...card.pos,
              zIndex: card.z,
              "--depth": card.depth,
              "--rot": `${card.rot}deg`,
              "--delay": `${180 + i * 140}ms`,
              "--float": `${card.float}s`,
            } as CSSProperties
          }
        >
          <div className="hero-pop">
            <div className="hero-float">
              <figure className="hero-card relative overflow-hidden rounded-[0.9rem] bg-ink ring-1 ring-black/5">
                {card.frames.map((f, fi) => {
                  const img = derived[f.key];
                  const isActive = active[i] === fi;
                  return (
                    <div
                      key={f.key}
                      className={cn("hero-frame", fi === 0 ? "relative" : "absolute inset-0")}
                      data-active={isActive ? "" : undefined}
                      aria-hidden={isActive ? undefined : true}
                    >
                      <img
                        src={img.url}
                        width={img.width}
                        height={img.height}
                        alt={f.alt}
                        loading={fi === 0 && i < 4 ? "eager" : "lazy"}
                        fetchPriority={fi === 0 && i < 2 ? "high" : "low"}
                        decoding="async"
                        draggable={false}
                        className={cn("block select-none", fi === 0 ? "h-auto w-full" : "size-full object-cover")}
                      />
                      {f.label ? (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-[7%] pt-[18%] pb-[6%] text-white">
                          <span className="block font-display text-[clamp(0.6rem,1.35vw,0.95rem)] leading-tight font-bold">
                            {f.label.title}
                          </span>
                          <span className="mt-1 block text-[clamp(0.45rem,0.75vw,0.6rem)] font-semibold tracking-[0.18em] text-white/75 uppercase">
                            {f.label.tag}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </figure>
            </div>
          </div>
        </div>
      ))}
      {CHIPS.map((chip, i) => (
        <div
          key={chip.label}
          aria-hidden
          className="hero-slot pointer-events-none absolute hidden sm:block"
          style={
            {
              ...chip.pos,
              zIndex: 20,
              "--depth": chip.depth,
              "--rot": "0deg",
              "--delay": `${1300 + i * 160}ms`,
              "--float": `${chip.float}s`,
            } as CSSProperties
          }
        >
          <div className="hero-pop">
            <div className="hero-float">
              <span className="flex items-center gap-1.5 rounded-full border border-black/5 bg-white/90 px-3 py-1.5 text-[11px] font-bold whitespace-nowrap text-foreground shadow-[0_10px_24px_-12px_rgb(10_10_10/0.35)] backdrop-blur">
                <Icon name={chip.icon} className="size-3.5 text-primary" />
                {chip.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
