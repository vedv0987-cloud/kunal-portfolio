# Project: AI Study Assistant Bot

**Save the generated image in this exact folder as:** `project-ai-study-assistant.jpg`

(full path: `public/images/projects/project-ai-study-assistant/project-ai-study-assistant.jpg`)

Engine validation: **PASS** — built via the `nano-banana-prompt-generator` skill's engine (`engine.schema.build_skeleton()`), checked against the real pulled REF-A through REF-H bible sections, passed `engine.validate.gate(mode="nano")`.

Copy the `full_prompt` field below into ChatGPT and generate at High quality.

```json
{
  "prompt": {
    "scene": "Pure black studio backdrop with a soft red ambient glow bleeding in from the left edge.",
    "subject": "Small white robot with glowing red eyes standing beside a large floating dark dashboard panel showing abstract chat bubbles, a bar chart, and a line graph in red/white tones, no readable text.",
    "composition": "Shot as a 3D product render at the robot's own eye-height, robot on the left third at three-quarter angle, floating panel filling the right two-thirds at a slight depth offset for dimensionality.",
    "lighting": "Panel glow as key at 6000K cool white, 3000K warm-red tungsten rim on the robot from behind, dark vignette at the frame edges, strict Kelvin lock on both sources.",
    "materials": "Matte white robot shell with a visible fine seam at the neck joint and a small scuff on one forearm, glass-like translucent panel edge with a soft chromatic fringe at the rim (lens-artifact micro-detail).",
    "style": "Futuristic AI-product visualization rendered with real camera-lens artifacts (subtle rim chromatic aberration) rather than flat CGI cleanliness, no readable text or letterforms anywhere on the panel."
  },
  "technical_params": {
    "aspect_ratio": "3:2",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "3:2",
      "image_size": "2K"
    },
    "output_format": "PNG — DEFAULT. JPEG only if file size is a hard constraint."
  },
  "category": "product_shot",
  "full_prompt": "Create 3D product-visualization render with real camera-lens artifacts, not flat CGI cleanliness. Scene: a pure black studio backdrop with a soft red ambient glow bleeding in from the left edge of frame. Subject: a small white robot character with glowing red eyes standing beside a large floating dark dashboard panel that shows abstract chat-bubble shapes, a simple bar chart, and a line graph rendered in red and white tones, with no readable text or letterforms anywhere. Composition: camera at the robot's own eye-height, robot on the left third of frame at a three-quarter angle, the floating panel filling the right two-thirds at a slightly different depth for dimensionality. Lighting: 6000K cool white glow from the panel as the key light source, 3000K warm-red tungsten rim light on the robot from behind, dark vignette at the frame edges, strict Kelvin lock with no drift beyond ±100K. Materials: matte white robot shell with a visible fine seam line at the neck joint and a small scuff mark on one forearm, glass-like translucent panel edge showing a soft chromatic fringe at the rim. Style: futuristic AI-product visualization, no readable text anywhere on the interface. Throughout, preserve natural micro-imperfections visible under close inspection, soft shadow falloff across the full tonal range, and a commercial rendering and photography technical standard. Landscape orientation, 3:2 aspect ratio."
}
```
