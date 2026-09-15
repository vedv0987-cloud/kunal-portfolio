/**
 * Web derivatives of the regenerated artwork (public/images/derived/), made
 * non-destructively from the PNG masters in regenerated-assets-2026-09-14/:
 * - *-cta-banner: the generator padded every CTA banner with white bands
 *   above/below the art — cropped to the real banner so there's no empty
 *   gap around it on the page.
 * - hero-*: separate cards for the animated landing montage (so each one
 *   can move independently), resized to 900px wide WebP. hero-real-estate
 *   also has the asset-board "PROMO CARD 02" caption cropped off.
 * - services-hero-montage: white margins trimmed.
 * Masters are untouched; dimensions below are the derivative's real size.
 */
const d = (file: string, width: number, height: number) => ({
  url: `/images/derived/${file}`,
  width,
  height,
});

export const derived = {
  homeCta: d("home-cta-banner.webp", 2172, 345),
  workCta: d("work-cta-banner.webp", 2172, 286),
  servicesCta: d("services-cta-banner.webp", 2172, 224),
  aboutCta: d("about-cta-banner.webp", 2172, 266),
  servicesHero: d("services-hero-montage.webp", 1820, 647),
  heroCinematic: d("hero-cinematic.webp", 900, 604),
  heroRealEstate: d("hero-real-estate.webp", 900, 723),
  heroHealthcare: d("hero-healthcare.webp", 900, 488),
  heroWebsites: d("hero-websites.webp", 900, 659),
  heroJewelry: d("hero-jewelry.webp", 900, 491),
  heroAiBot: d("hero-ai-bot.webp", 900, 654),
  heroAutomation: d("hero-automation.webp", 900, 659),
  // pool-*: extra frames the hero cards swap to. Photo-only artwork (no baked
  // client logos / third-party marks), inset past the baked rounded corners and
  // center-cropped (≤5%) to the aspect ratio of the card they rotate into.
  poolPromoCinematic: d("pool-promo-cinematic.webp", 900, 604),
  poolPortrait: d("pool-portrait.webp", 900, 723),
  poolHospital: d("pool-hospital.webp", 900, 488),
  poolDna: d("pool-dna.webp", 900, 488),
  poolWorkflow: d("pool-workflow.webp", 900, 659),
  poolRing: d("pool-ring.webp", 900, 491),
  poolVilla: d("pool-villa.webp", 900, 491),
  poolCamera: d("pool-camera.webp", 900, 659),
  poolRobot: d("pool-robot.webp", 900, 654),
  poolBulb: d("pool-bulb.webp", 900, 659),
} as const;
