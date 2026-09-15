import { useCallback, useRef, type CSSProperties, type PointerEvent } from "react";
import { derived } from "@/data/derived-assets";

type Card = {
  key: keyof typeof derived;
  alt: string;
  /** Live caption for photo-only cards; cards with baked text leave this off. */
  label?: { title: string; tag: string };
  pos: CSSProperties;
  rot: number;
  /** Parallax strength — higher = moves more with the cursor (reads as closer). */
  depth: number;
  z: number;
  float: number;
};

// Positions are % of the stage (6:5). Each card is its own image, so every
// one can pop in on its own beat, drift on its own float cycle, and respond
// to the cursor at its own depth.
const CARDS: Card[] = [
  { key: "heroCinematic", alt: "A Bigger Tomorrow — cinematic AI video", pos: { left: "0%", top: "2%", width: "46%" }, rot: -4, depth: 0.55, z: 2, float: 7.2 },
  { key: "heroRealEstate", alt: "Extraordinary Spaces — real estate visuals", pos: { right: "0%", top: "0%", width: "34%" }, rot: 4, depth: 0.85, z: 3, float: 6.4 },
  { key: "heroHealthcare", alt: "Healthcare campaign visual", label: { title: "Better Care, Brighter Lives", tag: "Healthcare" }, pos: { left: "2%", top: "44%", width: "36%" }, rot: -3, depth: 0.75, z: 4, float: 8.1 },
  { key: "heroAutomation", alt: "Claude AI automation dashboard", label: { title: "Ideas into Intelligent Systems", tag: "AI Automation" }, pos: { left: "30%", top: "27%", width: "44%" }, rot: 0, depth: 0.35, z: 6, float: 9 },
  { key: "heroJewelry", alt: "Jewelry product visual", label: { title: "Elegance Reimagined", tag: "Product Visual" }, pos: { right: "0%", top: "37%", width: "30%" }, rot: 5, depth: 1, z: 5, float: 6.8 },
  { key: "heroWebsites", alt: "Website and UI/UX design", label: { title: "Premium Digital Experiences", tag: "Websites / UI/UX" }, pos: { left: "8%", bottom: "2%", width: "42%" }, rot: -2, depth: 0.65, z: 7, float: 7.6 },
  { key: "heroAiBot", alt: "Custom AI assistant bot", label: { title: "Your AI Assistant, Always On", tag: "AI Bots" }, pos: { right: "4%", bottom: "4%", width: "30%" }, rot: 3, depth: 1.1, z: 8, float: 6.1 },
];

export function HeroMontage() {
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

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
    // Parallax is a mouse-only nicety; touch devices just get pop-in + float.
    if (e.pointerType !== "mouse" || !stage.current) return;
    const r = stage.current.getBoundingClientRect();
    setPointer(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <div
      ref={stage}
      onPointerMove={onMove}
      onPointerLeave={() => setPointer(0, 0)}
      className="hero-stage relative mx-auto aspect-[6/5] w-full max-w-[640px] min-w-0 flex-1"
      style={{ "--mx": 0, "--my": 0 } as CSSProperties}
    >
      <div aria-hidden className="hero-glow pointer-events-none absolute -inset-10 rounded-full" />
      {CARDS.map((card, i) => {
        const img = derived[card.key];
        return (
          <div
            key={card.key}
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
                  <img
                    src={img.url}
                    width={img.width}
                    height={img.height}
                    alt={card.alt}
                    loading={i < 4 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="block h-auto w-full select-none"
                  />
                  {card.label ? (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-[7%] pt-[18%] pb-[6%] text-white">
                      <span className="block font-display text-[clamp(0.6rem,1.35vw,0.95rem)] leading-tight font-bold">
                        {card.label.title}
                      </span>
                      <span className="mt-1 block text-[clamp(0.45rem,0.75vw,0.6rem)] font-semibold tracking-[0.18em] text-white/75 uppercase">
                        {card.label.tag}
                      </span>
                    </figcaption>
                  ) : null}
                </figure>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
