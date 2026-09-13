# Custom AI Bots

**Save the generated image in this exact folder as:** `service-bot-creation.jpg`

(full path: `public/images/services/service-bot-creation/service-bot-creation.jpg`)

Engine validation: **PASS** — built via the `nano-banana-prompt-generator` skill's engine (`engine.schema.build_skeleton()`), checked against the real pulled REF-A through REF-H bible sections, passed `engine.validate.gate(mode="nano")`.

Copy the `full_prompt` field below into ChatGPT and generate at High quality.

```json
{
  "prompt": {
    "scene": "Dark studio with soft red ambient light pooling on the floor.",
    "subject": "A small friendly white robot character with a rounded head, glowing red eyes, and a matte-white plastic shell, standing three-quarter angle with one hand slightly raised.",
    "composition": "Medium close-up 3D character render, robot positioned center-left with negative space to the right, shallow depth of field.",
    "lighting": "Soft key at 4800K from above-front, warm 3000K rim from behind separating the robot from the pure black background, Kelvin-locked.",
    "materials": "Matte white polymer shell with soft gloss highlights and a light scuff on one shoulder, dark joint accents, glowing red optical-sensor eyes.",
    "style": "High-end character product render, friendly and approachable, no readable text anywhere."
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
  "full_prompt": "Create high-end character product render, friendly and approachable, no readable text anywhere. Scene: Dark studio with soft red ambient light pooling on the floor. Subject: A small friendly white robot character with a rounded head, glowing red eyes, and a matte-white plastic shell, standing three-quarter angle with one hand slightly raised. Composition: Medium close-up 3D character render, robot positioned center-left with negative space to the right, shallow depth of field. Lighting: Soft key at 4800K from above-front, warm 3000K rim from behind separating the robot from the pure black background, Kelvin-locked. Materials: Matte white polymer shell with soft gloss highlights and a light scuff on one shoulder, dark joint accents, glowing red optical-sensor eyes. Throughout, preserve natural micro-imperfections visible under close inspection, soft shadow falloff across the full tonal range, and a commercial rendering and photography technical standard. Portrait orientation, 4:5 aspect ratio."
}
```
