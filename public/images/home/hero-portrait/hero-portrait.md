# Home hero portrait

**Save the generated image in this exact folder as:** `hero-portrait.jpg`

(full path: `public/images/home/hero-portrait/hero-portrait.jpg`)

Engine validation: **PASS** — built via the `nano-banana-prompt-generator` skill's engine (`engine.schema.build_skeleton()`), checked against the real pulled REF-A through REF-H bible sections, passed `engine.validate.gate(mode="nano")`.

Copy the `full_prompt` field below into ChatGPT and generate at High quality.

```json
{
  "prompt": {
    "scene": "Seamless pure white studio cyclorama with a solid crimson-red circle (#C81020-range) positioned behind and slightly above the subject's head, rising-sun placement.",
    "subject": "Young Indian man, early twenties, voluminous black curly hair, warm brown skin, calm confident half-turn gaze off-camera left. Oversized matte-black cotton hoodie, chest-up framing.",
    "composition": "Shot on a Canon EOS R5, 85mm lens at f/2. Subject center-left, red circle breaking the white field behind his head/shoulder, generous negative space right. Three-quarter angle to camera, eye-line at upper-third grid, face occupying roughly one-fifth of frame height — comfortably above the two-pass risk threshold.",
    "lighting": "Soft beauty-dish key at 5200K from camera-front-left (neutral daylight register), gentle fill from the right at 5000K to keep shadow ratio low, natural catchlights in both eyes, strict color lock — no warm/cool drift beyond ±100K, background exposed bright and even.",
    "materials": "Natural skin micro-texture with visible pores, fine vellus hair at the jaw and temple, individually defined curl clumps with soft frizz flyaways at the crown, brushed-cotton hoodie weave with a slightly uneven drape at the shoulder seam.",
    "style": "Photographic optical rendering, shot on Canon EOS R5, no CGI artifacts — commercial photography technical standard, color-graded to a clean neutral digital profile (not a warm film emulation, to keep true skin tone)."
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
  "category": "photoreal_portrait",
  "full_prompt": "Create photographic optical rendering, shot on a Canon EOS R5 with an 85mm lens at f/2, no CGI artifacts. Scene: a seamless pure white studio cyclorama with a solid crimson-red circle positioned behind and slightly above the subject's head, like a rising sun breaking the white field. Subject: a young Indian man in his early twenties with voluminous black curly hair — individually defined curl clumps with soft frizz flyaways at the crown — warm brown skin with natural micro-texture and visible pores, fine vellus hair along the jaw and temple, a calm confident expression looking slightly off-camera to his left. He wears an oversized matte-black cotton hoodie with a slightly uneven drape at the shoulder seam, chest-up framing. Composition: three-quarter angle to camera, eye-line on the upper-third grid line, face occupying roughly one-fifth of frame height (well above the risk threshold for feature fidelity), subject positioned center-left with the red circle breaking the background behind his head and shoulder, generous negative space to the right. Lighting: strict color temperature lock at 5200K soft beauty-dish key from camera-front-left, 5000K gentle fill from the right keeping the shadow ratio low, no warm/cool drift beyond ±100K, natural catchlights in both eyes, background exposed bright and even. Style: commercial photography technical standard, production-ready for premium print, clean neutral digital color profile preserving true-to-life skin tone, no plastic smoothing, no waxy specular sheen. Throughout, preserve natural micro-imperfections visible under close inspection, soft shadow falloff across the full tonal range, and a commercial rendering and photography technical standard. Portrait orientation, 4:5 aspect ratio."
}
```
