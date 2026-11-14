# Driven Gloss website

Single-page website for Driven Gloss mobile car detailing (Malta).
Built with React, TypeScript, Vite and Tailwind CSS.

## Running it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
npm run lint
```

## Where things live

| What | File |
| --- | --- |
| Phone, WhatsApp, Instagram, Facebook links | `src/constants.ts` |
| Packages and prices | `src/pricing.ts` |
| Before & after gallery content | `src/gallery.ts` |
| Google reviews content | `src/reviews.ts` |
| Page sections (in display order) | `src/App.tsx` |
| Colours, fonts, shared styles | `src/index.css` |
| Search / social preview text | `index.html` |

## Placeholders never go live

Gallery items and reviews marked `placeholder: true` are shown only while
developing (`npm run dev`). On the live site they are hidden, and a section
with nothing real in it (plus its menu link) is not shown at all. To see
placeholders in a production build: `VITE_SHOW_PLACEHOLDERS=true npm run build`.

## Adding a before & after project

1. Copy the photos or video into `public/gallery/`
   (see `public/gallery/README.md` for sizes and formats).
2. Open `src/gallery.ts` and add an entry to `GALLERY_ITEMS`. Copy one of the
   commented examples in that file.
   - `type: 'compare'` — two photos with a drag-to-compare slider.
   - `type: 'video'` — a video with playback controls. Set
     `orientation: 'portrait'` for vertical phone footage.
3. Delete the placeholder entries once real ones exist.

Items appear on the page in the order they are listed.

## Adding Google reviews

Open `src/reviews.ts`.

1. Set `GOOGLE_REVIEWS_URL` to the Driven Gloss Google reviews link. This
   switches on the "Read All Reviews on Google" button.
2. Add each review to `REVIEWS`, copied exactly from Google: name, star
   rating and text. Do not edit or invent reviews.
3. Optionally set `GOOGLE_RATING` to the overall rating and review count
   shown on Google.
4. Delete the placeholder entries.
