# 3D Visualization

**Save the generated image in this exact folder as:** `service-3d-visualization.jpg`

(full path: `public/images/services/service-3d-visualization/service-3d-visualization.jpg`)

Engine validation: **PASS** — built via the `nano-banana-prompt-generator` skill's engine (`engine.schema.build_skeleton()`), checked against the real pulled REF-A through REF-H bible sections, passed `engine.validate.gate(mode="nano")`.

Copy the `full_prompt` field below into ChatGPT and generate at High quality.

```json
{
  "prompt": {
    "scene": "Dark architectural studio with dramatic red side lighting and a dark reflective floor.",
    "subject": "A composition of abstract 3D-rendered geometric forms — a glossy sphere, a faceted translucent prism, and a tall matte obelisk — arranged together on the reflective surface.",
    "composition": "Wide three-quarter architectural visualization, the three forms arranged left to right at varying heights, soft reflections visible on the floor beneath them.",
    "lighting": "Dramatic red side light at 3000K casting long shadows across the floor, cool 6500K rim on the opposite edge of each form, dark background, Kelvin-locked.",
    "materials": "Matte black stone-like obelisk with a natural surface grain, glossy black sphere with a subtle fingerprint smudge, translucent red glass prism with a faint internal fracture line.",
    "style": "Architectural 3D visualization render, minimal and dramatic, no readable text anywhere."
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
  "category": "architectural",
  "full_prompt": "Create architectural 3D visualization render, minimal and dramatic, no readable text anywhere. Scene: Dark architectural studio with dramatic red side lighting and a dark reflective floor. Subject: A composition of abstract 3D-rendered geometric forms — a glossy sphere, a faceted translucent prism, and a tall matte obelisk — arranged together on the reflective surface. Composition: Wide three-quarter architectural visualization, the three forms arranged left to right at varying heights, soft reflections visible on the floor beneath them. Lighting: Dramatic red side light at 3000K casting long shadows across the floor, cool 6500K rim on the opposite edge of each form, dark background, Kelvin-locked. Materials: Matte black stone-like obelisk with a natural surface grain, glossy black sphere with a subtle fingerprint smudge, translucent red glass prism with a faint internal fracture line. Throughout, preserve natural micro-imperfections visible under close inspection, soft shadow falloff across the full tonal range, and a commercial rendering and photography technical standard. Portrait orientation, 4:5 aspect ratio."
}
```
