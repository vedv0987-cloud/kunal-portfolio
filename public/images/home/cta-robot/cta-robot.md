# Home CTA robot

**Save the generated image in this exact folder as:** `cta-robot.jpg`

(full path: `public/images/home/cta-robot/cta-robot.jpg`)

Engine validation: **PASS** — built via the `nano-banana-prompt-generator` skill's engine (`engine.schema.build_skeleton()`), checked against the real pulled REF-A through REF-H bible sections, passed `engine.validate.gate(mode="nano")`.

Copy the `full_prompt` field below into ChatGPT and generate at High quality.

```json
{
  "prompt": {
    "scene": "Dark charcoal-black studio backdrop, soft warm-red glow rising from the lower right corner, a faint reflective floor.",
    "subject": "Small friendly white robot character, rounded head, two glowing red oval eyes, compact matte-white plastic body, dynamic mid-wave pose, one arm raised and open.",
    "composition": "Lower-left third of frame, full body visible, dark negative space above/right for later text overlay, camera at the robot's own eye height (product-hero framing).",
    "lighting": "Key light 4800K soft from above-front sculpting the rounded plastic, 3000K warm-red rim light from the lower right (tungsten-gel register) separating the character from the black background, subtle floor reflection.",
    "materials": "Matte white polymer shell with soft specular roll-off, visible fine seam lines at the joints, a light scuff and slightly uneven gloss on one shoulder panel (imperfection trigger), dark charcoal joint accents, glossy optical-sensor eyes.",
    "style": "3D product render photographed as if under real studio strobes — no CGI-clean uniformity, deliberate small surface imperfections, commercial toy/product photography technical standard."
  },
  "technical_params": {
    "aspect_ratio": "4:5",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "4:5",
      "image_size": "2K"
    },
    "output_format": "PNG — DEFAULT. JPEG only if file size is a hard constraint."
  },
  "category": "product_shot",
  "full_prompt": "Create 3D character product render, lit and photographed as if under real studio strobes — no CGI-clean uniformity. Scene: a dark charcoal-black backdrop with a soft warm-red glow rising from the lower right corner of frame and a faint reflective floor beneath the subject. Subject: a small friendly white robot character with a rounded head, two glowing red oval eyes, and a compact matte-white plastic body, standing in a dynamic mid-wave pose with one arm raised and open as if greeting the viewer. Composition: robot positioned in the lower-left third of frame at the character's own eye height, full body visible, generous dark negative space above and to the right. Lighting: 4800K soft key light from above-front sculpting the rounded plastic surfaces, 3000K warm-red tungsten-gel rim light from the lower right separating the character from the black background, subtle floor reflection beneath its feet, no warm/cool drift beyond ±100K on the key. Materials: matte white polymer shell with soft specular roll-off, visible fine seam lines at the shoulder and hip joints, a light scuff and slightly uneven gloss patch on one shoulder panel, dark charcoal joint accents, glossy optical-sensor eyes. Style: commercial product-render photography technical standard, deliberate small surface imperfections rather than uniform CGI gloss. Throughout, preserve natural micro-imperfections visible under close inspection, soft shadow falloff across the full tonal range, and a commercial rendering and photography technical standard. Portrait orientation, 4:5 aspect ratio."
}
```
