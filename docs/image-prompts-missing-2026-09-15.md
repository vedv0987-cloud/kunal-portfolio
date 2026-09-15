# Image prompts — missing website images (Nano Banana Pro)

**Current audit, 15 September:** Work prompts 1–7 fill the seven missing current project covers. Work prompt 8 is optional future content. Pricing 1–4 and the Tools banner are optional visual enhancements. See [the release and integration plan](RELEASE-2026-09-15.md) for the exact page mapping.

Generated with the nano-banana-prompt-generator skill (NANO mode, all 8 core bibles, engine-validated).
Paste each `full_prompt` into Freepik → AI Image Generator → Nano Banana Pro, set the aspect ratio and 2K in the UI,
and save with the suggested filename into `public/images/new/`. Tell me when they're in and I'll wire them in.

- Work cards 1–8 → Work page project cards (16:9; the card frame will be switched to 16:9 so nothing is cropped)
- Pricing 1–4 → Pricing page pack visuals (4:3, a matched set)
- Tools hero → Tools page banner (21:9)

**Work card 1/8 — Reliance Foundation Hospital healthcare campaign (16:9)**

```json
{
  "prompt": {
    "scene": "A calm, sunlit hospital atrium in Mumbai: a restored heritage stone archway on the left opening into a bright modern glass-and-steel wing on the right; potted areca palms; polished terrazzo floor.",
    "subject": "A doctor in a crisp white coat walking beside an elderly patient in a soft grey kurta, both seen from behind and three-quarter back, faces turned away toward the light.",
    "composition": "Wide 16:9 establishing frame, figures on the left third at mid-ground, deep perspective through the atrium, open negative space on the right for card legibility.",
    "lighting": "Primary: 5500K window daylight from the right, soft wide source. Secondary: warm bounce from the terrazzo floor at 30% of primary. Accent: 3200K pendant practicals overhead.",
    "materials": "honed cream heritage basalt stone arch, polished terrazzo with brass inlay strips, low-iron glass curtain wall, brushed stainless handrails, cotton white coat",
    "style": "warm aspirational healthcare editorial, documentary realism"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "lifestyle",
  "full_prompt": "Shot on ARRI Alexa 35 with ARRI Signature Prime at 35mm, T2 — gentle falloff, round creamy bokeh, natural lens character. Create a warm, hopeful healthcare campaign still set in a sunlit hospital atrium in Mumbai. On the left, a restored heritage basalt stone archway with carved cornice; on the right, a bright modern glass-and-steel wing with a double-height low-iron glass curtain wall. A doctor in a crisp cotton white coat walks beside an elderly patient in a soft grey kurta; both are seen from behind in three-quarter back view, faces turned away toward the light, the doctor's hand gently guiding at the elbow. Areca palms in matte black planters line the path; polished terrazzo floor with thin brass inlay strips. 5500K window daylight from the right, soft wide source, creates a long rectangular specular strip on the polished floor; environmental bounce light from the terrazzo warms the figures' lower bodies at about 30% of the key; 3200K pendant practicals glow softly overhead. One small signal-red detail — a red lanyard on the doctor — carries the brand accent. Wide 16:9 composition with the pair on the left third at mid-ground, deep perspective through the atrium and calm negative space on the right. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-reliance-healthcare.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 2/8 — Blu Diamond luxury real-estate campaign (16:9)**

```json
{
  "prompt": {
    "scene": "A contemporary luxury residence living room at blue hour: floor-to-ceiling glass opening onto an infinity pool and a twinkling city skyline.",
    "subject": "The interior itself — a low sculptural sofa, a travertine coffee table with a single red glass vase, a statement arc floor lamp.",
    "composition": "Wide 16:9 interior, two-point perspective, true vertical lines, pool and skyline through the glass in the background plane.",
    "lighting": "Primary: 3000K warm cove and pendant light inside. Secondary: deep 9000K blue-hour sky through glass. Practical: pool underwater lights 4000K.",
    "materials": "honed travertine, oiled walnut veneer panelling, bouclé upholstery, brushed brass lamp arc, low-iron glass, dark basalt pool coping",
    "style": "dramatic luxury architectural photography"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "real_estate",
  "full_prompt": "Shot on Hasselblad X2D with Medium format lens at 32mm, F/8, Kodak Portra 400 (real-photo) film emulation, Soft Warmth color grade — corrected verticals, fine medium-format tonality. Create a luxury real-estate campaign still of a contemporary residence living room at blue hour. Floor-to-ceiling low-iron glass spans the back wall and opens onto an infinity pool with dark basalt coping, beyond it a softly glowing city skyline under a deep blue-purple twilight sky. Inside, a low sculptural bouclé sofa faces a honed travertine coffee table holding a single signal-red glass vase; a brushed brass arc floor lamp leans over the seating; the walls are oiled walnut veneer panelling with a warm 3000K cove light washing down them. The warm interior glow against the cool blue-hour exterior creates the black-and-gold sense of arrived luxury while staying light and airy. The pendant light drops a narrow hard shadow directly below onto the travertine, and the polished stone floor carries a long specular strip from the glass. Wide 16:9 two-point perspective at chest height with true vertical lines and the skyline in the background plane. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-blu-diamond-real-estate.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 3/8 — AI automation dashboard (16:9)**

```json
{
  "prompt": {
    "scene": "A dark, minimal studio desk at night with a large ultra-thin monitor showing an abstract AI automation dashboard.",
    "subject": "The monitor: flowing node-graph of connected rounded cards linked by glowing red and white data lines, soft charts made of bars and curves with no labels.",
    "composition": "Three-quarter angle on the monitor filling the right two-thirds, keyboard and a ceramic mug in the soft foreground, dark room falling off to black on the left.",
    "lighting": "Primary: the screen's own 6500K cool glow. Accent: 2700K warm desk lamp from far left rim-lighting the mug. Deep low-key fill.",
    "materials": "anodized aluminium monitor stand, matte black oak desk, glazed white ceramic mug, woven felt desk mat",
    "style": "cinematic moody tech product still"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "technology",
  "full_prompt": "Shot on Sony Venice with Zeiss Ultra Prime at 50mm, T2 — clean, neutral rendering with shallow depth of field. Create a cinematic moody still of an AI automation dashboard on a large ultra-thin monitor at night. The screen shows a flowing node graph: rounded dark-graphite cards connected by glowing signal-red and white data lines that branch, merge and pulse toward a central glowing hub, surrounded by soft bar charts and smooth curves built purely from shape and light. The monitor sits on an anodized aluminium stand on a matte black oak desk with a woven felt desk mat, a low-profile keyboard and a glazed white ceramic mug in the soft foreground. The screen's own cool 6500K glow is the key light, spilling onto the desk; a warm 2700K desk lamp at far left adds a thin rim light on the mug; the rest of the room falls into low-key darkness in film-noir depth. Three-quarter angle, monitor filling the right two-thirds of the 16:9 frame, shallow focus on the screen's central hub. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-ai-automation-dashboard.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 4/8 — OncoSphere cancer-care medical education (16:9)**

```json
{
  "prompt": {
    "scene": "A calm medical-education studio: a translucent 3D cell visualisation floating above a white lecture table, oncology teaching atmosphere.",
    "subject": "A luminous, anatomically plausible translucent human cell with a visible nucleus and soft membrane, rendered as a glowing holographic teaching model.",
    "composition": "Centered subject in the upper-middle third, table edge in the lower foreground, softly blurred bookshelf and a model skeleton-free background wall.",
    "lighting": "Primary: 5000K crisp commercial softbox from upper left. Accent: the model's own soft red-and-white inner glow. Cool 6500K fill from the right.",
    "materials": "matte white Corian table, frosted acrylic display base, pale ash wood shelving, soft linen wall panels",
    "style": "editorial cool medical education visual"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "healthcare",
  "full_prompt": "Shot on Sony Venice with Cooke S4 at 50mm, T2.8 — warm, gentle Cooke rendering with soft contrast. Create a calm, reassuring medical-education visual for cancer care. Above a matte white Corian lecture table floats a luminous, anatomically plausible translucent human cell — a soft membrane, a visible nucleus, delicate internal structures — rendered as a glowing holographic teaching model on a frosted acrylic display base, its inner light a gentle mix of warm white and a restrained signal red. Behind it, pale ash wood shelving with neatly stacked blank-spined books and soft linen wall panels fall into gentle focus. 5000K crisp commercial softbox light from the upper left gives clean shadows and product-reveal quality; a cool 6500K fill from the right keeps the mood editorial and trustworthy; the model casts a soft glow and a faint contact shadow onto the acrylic base. Centered composition in the upper-middle third with open space on both sides of the 16:9 frame. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-oncosphere-education.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 5/8 — Realatte real-estate AI platform website (16:9)**

```json
{
  "prompt": {
    "scene": "A bright modern apartment workspace by a window: an open laptop showing a real-estate search platform UI.",
    "subject": "The laptop screen: a clean property-search interface — large rounded photo cards of homes, a soft map panel with glowing pins, filter chips made of plain pill shapes.",
    "composition": "Laptop at three-quarter view on the left-center, window with soft city view out of focus on the right, a small architectural model house beside the laptop.",
    "lighting": "Primary: 5500K window daylight from the right. Secondary: warm bounce from an oak table at 30%. Screen glow 6500K.",
    "materials": "space-grey aluminium laptop, white oak table, matte white architectural model, linen curtain, ceramic planter",
    "style": "warm aspirational tech lifestyle photography"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "technology",
  "full_prompt": "Shot on Sony Venice with Cooke S4 at 35mm, T2.8 — warm interior rendering, soft falloff. Create a warm, aspirational tech lifestyle still of an AI real-estate search platform on an open space-grey aluminium laptop in a bright modern apartment. The screen shows a clean property-search interface built only from shapes and photographs: large rounded cards with small photos of modern homes, a soft grey map panel with glowing signal-red location pins, rows of plain pill-shaped filter chips and a smooth comparison slider. The laptop sits at three-quarter view on a white oak table beside a small matte white architectural model house and a ceramic planter. 5500K window daylight from the right, softened by a linen curtain, wraps the scene with a wide penumbra; the oak table bounces warm fill at about 30% of the key onto the underside of the laptop lid; the screen adds a cool 6500K glow. The window view of the city melts into soft bokeh on the right side of the 16:9 frame. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-realatte-platform.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 6/8 — AlphaMed healthcare product photography (16:9)**

```json
{
  "prompt": {
    "scene": "A premium healthcare product still life on a seamless warm-white set.",
    "subject": "An unbranded matte white pharmaceutical bottle, a frosted glass dropper vial and a folded blister strip of white tablets, arranged in a staggered trio.",
    "composition": "Products grouped on the right-center over a stepped plinth, generous negative space on the left, low camera height for a heroic but calm stance.",
    "lighting": "Primary: large 5000K softbox from upper left, window light with softbox quality. Accent: thin 6500K strip light rim on the glass from the right. White bounce card fill.",
    "materials": "matte white HDPE bottle, frosted borosilicate glass vial with glossy black cap, silver foil blister strip, honed white limestone plinth, signal-red silicone band",
    "style": "crisp commercial pharmaceutical product photography"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "product",
  "full_prompt": "Shot on Phase One XF IQ4 with Medium format lens at 85mm, F/11 — razor-sharp medium-format detail, full product depth of field. Create a crisp commercial healthcare product still life on a seamless warm-white set. On a stepped honed white limestone plinth sit three unbranded products in a staggered trio: a matte white HDPE pharmaceutical bottle with a smooth blank surface, a frosted borosilicate glass dropper vial with a glossy black cap and a thin signal-red silicone band, and a folded silver foil blister strip of white round tablets resting against the plinth step. A large 5000K softbox from the upper left produces window light with softbox quality and a wide penumbra; a thin 6500K strip light from the right draws a clean vertical rim highlight along the frosted glass; a white bounce card lifts the shadow side. Each product sits firmly on the stone with a crisp contact shadow at its base and correct product proportions. Products grouped right-of-center with generous negative space on the left of the 16:9 frame, low camera height. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-alphamed-product.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 7/8 — ESMO Asia oncology congress booth (16:9)**

```json
{
  "prompt": {
    "scene": "A premium oncology congress exhibition booth inside a large convention hall in Singapore, before doors open.",
    "subject": "An open-plan exhibition booth: curved white fabric wall, suspended circular red lighting ring overhead, a sleek reception counter, a large LED wall showing an abstract glowing cell animation, lounge seating.",
    "composition": "Wide 16:9 frontal three-quarter view, booth filling the center, aisle carpet in the foreground, hall ceiling trusses fading into the background.",
    "lighting": "Primary: 4000K hall downlights. Accent: signal-red LED ring overhead casting a soft red halo. Practical: LED wall 6500K glow.",
    "materials": "tension-fabric white wall, gloss white solid-surface counter, oak-veneer lounge tables, charcoal aisle carpet, brushed aluminium truss",
    "style": "crisp commercial event architecture photography"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "events",
  "full_prompt": "Shot on Canon EOS R5 Mark II with Canon TS-E 24mm at 24mm, F/8 — corrected verticals, near-zero distortion. Create a crisp commercial photograph of a premium oncology congress exhibition booth inside a large convention hall in Singapore, captured just before the doors open. The open-plan booth has a sweeping curved white tension-fabric wall, a large suspended circular ring of signal-red LED light hanging overhead, a sleek gloss white solid-surface reception counter, a tall LED wall displaying an abstract glowing cell animation in soft red and white light, and a lounge corner of oak-veneer tables with charcoal upholstered chairs. A charcoal aisle carpet runs across the foreground; brushed aluminium ceiling trusses and rows of neighbouring booths fade into the soft background. 4000K hall downlights give even, clean illumination; the red LED ring casts a soft red halo onto the fabric wall and counter top; the LED wall adds a cool 6500K glow. The hall is empty of visitors. Wide 16:9 frontal three-quarter view with true vertical lines. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-esmo-congress-booth.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Work card 8/8 — Cinematic AI video production (16:9)**

```json
{
  "prompt": {
    "scene": "A dark editing and colour suite: a wide curved monitor playing a cinematic frame of a lone figure on a misty mountain ridge at sunrise.",
    "subject": "The monitor image: epic mountain landscape at golden hour; beneath the screen a timeline of abstract coloured clip blocks; a grading control panel with trackballs.",
    "composition": "Over-the-desk view, monitor filling the upper two-thirds, colour panel in the soft foreground, anamorphic flare crossing the frame from a small practical light.",
    "lighting": "Primary: the monitor's 2700K golden-hour image glow. Accent: 3200K practical bias light behind the monitor. Deep low-key fill.",
    "materials": "matte black grading panel with knurled aluminium trackballs, acoustic foam panels, black walnut desk, anodized monitor bezel",
    "style": "cinematic moody filmmaking behind-the-scenes"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "16:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "cinematic",
  "full_prompt": "Shot on ARRI Alexa Mini LF with Cooke Anamorphic/i at 50mm, T2 — oval bokeh, horizontal amber flare streaks typical of single-coated vintage-style glass. Create a cinematic moody still inside a dark colour-grading suite. A wide curved monitor plays a breathtaking frame of a lone hiker silhouetted on a misty mountain ridge at sunrise, warm 2700K golden light breaking through clouds over layered peaks. Beneath the image runs a timeline of abstract coloured clip blocks. In the soft foreground, a matte black grading control panel with three knurled aluminium trackballs rests on a black walnut desk; acoustic foam panels line the dark walls. The monitor's golden glow is the key light, washing across the panel; a warm 3200K bias light behind the monitor creates a soft halo; a small practical produces a horizontal amber anamorphic flare streak across the upper frame with oval bokeh in the background. Over-the-desk 16:9 composition, monitor filling the upper two-thirds, deep film-noir shadows at the edges. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "16:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "project-ai-video-production.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Pricing 1/4 — Starter Pack (4:3)**

```json
{
  "prompt": {
    "scene": "A dark studio still life on a seamless black stage, part of a matched four-image series.",
    "subject": "a single polished signal-red glass sphere the size of an orange",
    "composition": "Centered arrangement on the plinth in the lower-middle, generous black negative space above, identical camera height and framing across the series.",
    "lighting": "Primary: 5000K softbox upper left. Accent: 6500K strip rim from the right. Signal-red back glow.",
    "materials": "polished red borosilicate glass sphere, honed black basalt plinth",
    "style": "dramatic luxury studio still life, matched series style lock"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "4:3",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "product",
  "full_prompt": "Shot on Phase One XF IQ4 with Medium format lens at 85mm, F/8 — medium-format clarity, clean tonal separation. Create a dramatic luxury studio still life, one image in a matched series of four, showing a single polished signal-red glass sphere the size of an orange on a seamless matte black stage that fades to deep black, a single low honed black basalt plinth in the lower third; a large 5000K softbox from the upper left gives crisp commercial product-reveal light, a thin 6500K strip light from the right draws rim highlights, and a faint signal-red back glow separates the objects from the dark background; the arrangement reads as one small, confident object — minimal and precise. Gold object catching the key light scatters a secondary warm glow onto nearby surfaces where metal is present. Centered arrangement on the plinth in the lower-middle of the 4:3 frame with generous black negative space above, identical camera height, lens and framing to the rest of the series so the four images line up as a set. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "pricing-starter.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Pricing 2/4 — Pro Pack (4:3)**

```json
{
  "prompt": {
    "scene": "A dark studio still life on a seamless black stage, part of a matched four-image series.",
    "subject": "a polished signal-red glass sphere stacked with a brushed aluminium ring and a matte white ceramic cube, with two thin arcs of warm light orbiting them",
    "composition": "Centered arrangement on the plinth in the lower-middle, generous black negative space above, identical camera height and framing across the series.",
    "lighting": "Primary: 5000K softbox upper left. Accent: 6500K strip rim from the right. Signal-red back glow.",
    "materials": "polished red glass sphere, brushed aluminium ring, matte white glazed ceramic cube, honed black basalt plinth",
    "style": "dramatic luxury studio still life, matched series style lock"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "4:3",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "product",
  "full_prompt": "Shot on Phase One XF IQ4 with Medium format lens at 85mm, F/8 — medium-format clarity, clean tonal separation. Create a dramatic luxury studio still life, one image in a matched series of four, showing a polished signal-red glass sphere stacked with a brushed aluminium ring and a matte white ceramic cube, with two thin arcs of warm light orbiting them on a seamless matte black stage that fades to deep black, a single low honed black basalt plinth in the lower third; a large 5000K softbox from the upper left gives crisp commercial product-reveal light, a thin 6500K strip light from the right draws rim highlights, and a faint signal-red back glow separates the objects from the dark background; the arrangement reads as a balanced, rising trio — clearly more than Starter. Gold object catching the key light scatters a secondary warm glow onto nearby surfaces where metal is present. Centered arrangement on the plinth in the lower-middle of the 4:3 frame with generous black negative space above, identical camera height, lens and framing to the rest of the series so the four images line up as a set. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "pricing-pro.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Pricing 3/4 — Premium Pack (4:3)**

```json
{
  "prompt": {
    "scene": "A dark studio still life on a seamless black stage, part of a matched four-image series.",
    "subject": "a large faceted signal-red crystal cut like a gemstone, flanked by a brushed brass ring, a white ceramic cube and a smaller red sphere, with fine orbiting light trails and a soft reflection on the plinth",
    "composition": "Centered arrangement on the plinth in the lower-middle, generous black negative space above, identical camera height and framing across the series.",
    "lighting": "Primary: 5000K softbox upper left. Accent: 6500K strip rim from the right. Signal-red back glow.",
    "materials": "faceted red optical crystal, brushed brass ring, matte white ceramic cube, polished red glass sphere, honed black basalt plinth",
    "style": "dramatic luxury studio still life, matched series style lock"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "4:3",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "product",
  "full_prompt": "Shot on Phase One XF IQ4 with Medium format lens at 85mm, F/8 — medium-format clarity, clean tonal separation. Create a dramatic luxury studio still life, one image in a matched series of four, showing a large faceted signal-red crystal cut like a gemstone, flanked by a brushed brass ring, a white ceramic cube and a smaller red sphere, with fine orbiting light trails and a soft reflection on the plinth on a seamless matte black stage that fades to deep black, a single low honed black basalt plinth in the lower third; a large 5000K softbox from the upper left gives crisp commercial product-reveal light, a thin 6500K strip light from the right draws rim highlights, and a faint signal-red back glow separates the objects from the dark background; the arrangement reads as a rich, jewel-like arrangement — premium and layered. Gold object catching the key light scatters a secondary warm glow onto nearby surfaces where metal is present. Centered arrangement on the plinth in the lower-middle of the 4:3 frame with generous black negative space above, identical camera height, lens and framing to the rest of the series so the four images line up as a set. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "pricing-premium.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Pricing 4/4 — Enterprise (4:3)**

```json
{
  "prompt": {
    "scene": "A dark studio still life on a seamless black stage, part of a matched four-image series.",
    "subject": "an architectural constellation of many small red glass spheres, white ceramic cubes and brushed aluminium rings connected by thin glowing lines into a floating network around a central faceted red crystal",
    "composition": "Centered arrangement on the plinth in the lower-middle, generous black negative space above, identical camera height and framing across the series.",
    "lighting": "Primary: 5000K softbox upper left. Accent: 6500K strip rim from the right. Signal-red back glow.",
    "materials": "red glass spheres, matte white ceramic cubes, brushed aluminium rings, faceted red crystal, honed black basalt plinth",
    "style": "dramatic luxury studio still life, matched series style lock"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "4:3",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "product",
  "full_prompt": "Shot on Phase One XF IQ4 with Medium format lens at 85mm, F/8 — medium-format clarity, clean tonal separation. Create a dramatic luxury studio still life, one image in a matched series of four, showing an architectural constellation of many small red glass spheres, white ceramic cubes and brushed aluminium rings connected by thin glowing lines into a floating network around a central faceted red crystal on a seamless matte black stage that fades to deep black, a single low honed black basalt plinth in the lower third; a large 5000K softbox from the upper left gives crisp commercial product-reveal light, a thin 6500K strip light from the right draws rim highlights, and a faint signal-red back glow separates the objects from the dark background; the arrangement reads as an expansive, interconnected system — the most elaborate of the four. Gold object catching the key light scatters a secondary warm glow onto nearby surfaces where metal is present. Centered arrangement on the plinth in the lower-middle of the 4:3 frame with generous black negative space above, identical camera height, lens and framing to the rest of the series so the four images line up as a set. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "4:3",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "pricing-enterprise.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```

**Tools page hero — AI creative workstation (21:9)**

```json
{
  "prompt": {
    "scene": "A premium AI creative studio workstation at dusk: triple ultra-wide monitors, pen tablet, studio monitors, cinema camera on a shelf.",
    "subject": "The desk setup: three monitors showing abstract creative work — a glowing node workflow, a colour-graded film frame of a coastline, and a 3D product render of a red glass sphere.",
    "composition": "Ultra-wide 21:9 frontal view, desk spanning the frame, window with dusk city light on the far right, shelves with a cinema camera and headphones on the left.",
    "lighting": "Primary: monitors' mixed 6500K glow. Accent: 2700K warm desk lamp and LED strip under shelves. Dusk 9000K window fill.",
    "materials": "matte black oak desk, anodized aluminium monitor arms, walnut shelving, felt acoustic panels, graphite pen tablet, knit fabric studio monitors",
    "style": "cinematic moody creator-studio photography"
  },
  "colorRestriction": "signal red #E11D2E, deep black, warm white, graphite grey",
  "technical_params": {
    "aspect_ratio": "21:9",
    "resolution": "2K",
    "image_config": {
      "aspect_ratio": "21:9",
      "image_size": "2K"
    },
    "output_format": "PNG"
  },
  "category": "technology",
  "full_prompt": "Shot on Sony Venice with Zeiss Ultra Prime at 35mm, T2.8 — clean wide rendering, gentle vignette. Create a cinematic moody ultra-wide still of a premium AI creative studio workstation at dusk. A long matte black oak desk spans the frame holding three ultra-wide monitors on anodized aluminium arms: the left screen shows a glowing node-based automation workflow with signal-red and white connection lines, the center screen a colour-graded cinematic frame of a rugged coastline at golden hour, the right screen a 3D product render of a polished red glass sphere on a black plinth. On the desk sit a graphite pen tablet with stylus, a compact mechanical keyboard, knit fabric studio monitor speakers and a glazed ceramic mug. Walnut shelving on the left holds a cinema camera body, over-ear headphones and a small plant, with a warm 2700K LED strip glowing beneath each shelf; felt acoustic panels line the back wall; a window on the far right shows a dusky blue city at 9000K. The monitors' cool 6500K glow is the key light across the desk; a warm 2700K desk lamp adds a pool of warmth on the tablet. Ultra-wide 21:9 frontal composition at seated eye height. Every object rests on its surface with a contact shadow directly under it, deepest at the touching edge, and ambient occlusion gathers in crevices, corners and recesses. Cast shadows carry a penumbra gradient — sharp core, soft diffuse edge. Surfaces show realistic surface reflections and accurate proportions, in a clean uncluttered composition. All screens, signage, packaging and surfaces are free of letters, numbers, logos and brand marks — interface areas read as abstract shapes, soft gradients and glowing data lines only. Color grade: filmic S-curve with soft highlight rolloff, neutral deep black shadows, restrained saturation with a single accent of signal red, palette held to signal red, deep black, warm white and graphite grey so the image sits naturally on a red-black-white brand website. ",
  "nb_pro_features": {
    "thinking_level": "high",
    "search_grounding": false
  },
  "freepik_handoff": {
    "model": "Nano Banana Pro",
    "where": "Freepik → AI Image Generator → Models",
    "aspect_ratio": "21:9",
    "resolution": "2K",
    "references": "none",
    "suggested_filename": "tools-stack-hero.png",
    "paste": "Paste `full_prompt` verbatim into the prompt field; set aspect + resolution in the UI."
  }
}
```
