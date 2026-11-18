# Gallery assets

Put real Driven Gloss before/after photos and videos in this folder, then list
them in `src/gallery.ts`. Full instructions are in the project `README.md`.

Recommended formats
- Photos: `.webp` or `.jpg`, about 1200 px wide, cropped to 4:3 (landscape)
  or 3:4 (portrait). Shoot the before and after from the same spot, at the
  same zoom, so the comparison slider lines up. If they don't match, use
  `mode: 'toggle'` in `src/gallery.ts`.
- Videos: `.mp4` (H.264), 1080p or smaller, ideally under 15 MB each, plus a
  `.jpg`/`.webp` poster image (a still frame) for each video.

The `placeholders/` folder only holds the labelled dummy images used until real
assets are added. It can be deleted once no entry in `src/gallery.ts` uses it.
