#!/usr/bin/env python3
"""Create web-sized WebP siblings for the site's heavy raster images.

Non-destructive: originals stay in place; a `.webp` is written next to each
source and skipped when it is already newer than the source. The generated
PNGs are ~2 MB each at ~1800px wide but are never displayed wider than
~1200 CSS px, so 1600px WebP keeps them sharp on retina at a fraction of the
weight. Run `node scripts/build-visual-assets.mjs` afterwards so the registry
points at the WebP files.

Usage: python3 scripts/optimize-images.py
"""

from pathlib import Path

from PIL import Image

GENERATED = Path("public/images/regenerated-assets-2026-09-14")
ROOT_PHOTOS = Path("public/images")
MAX_WIDTH = 1600
AVATAR_WIDTH = 320  # testimonial avatars render at 40-56 CSS px


def to_webp(src: Path, max_width: int) -> tuple[int, int] | None:
    out = src.with_suffix(".webp")
    if out.exists() and out.stat().st_mtime >= src.stat().st_mtime:
        return None
    im = Image.open(src)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() or im.mode == "P" else "RGB")
    if im.width > max_width:
        im = im.resize((max_width, round(im.height * max_width / im.width)), Image.LANCZOS)
    im.save(out, "WEBP", quality=80, method=6)
    return src.stat().st_size, out.stat().st_size


def main() -> None:
    before = after = count = 0
    jobs = [(p, MAX_WIDTH) for p in sorted(GENERATED.rglob("*.png"))]
    for p in sorted(ROOT_PHOTOS.glob("*.jpg")):
        jobs.append((p, AVATAR_WIDTH if p.name.startswith("avatar-") else MAX_WIDTH))
    for path, width in jobs:
        sizes = to_webp(path, width)
        if sizes:
            before += sizes[0]
            after += sizes[1]
            count += 1
    print(f"converted {count} images: {before / 1e6:.1f} MB -> {after / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
