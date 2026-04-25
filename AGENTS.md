# Journey of Faith

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Development

```bash
npm run dev        # starts http://localhost:3000
npm run build      # next build + embed bundle
npm run build:embed  # Vite IIFE for standalone widget
npm run lint       # ESLint
```

## Project Structure

- `app/` - App Router pages and components
- `app/api/` - API routes (e.g., nearby-mosques)
- `app/components/` - React components
- `app/data/` - Static JSON data (landing, reasons-to-believe, knots-of-faith)
- `app/lib/` - Utilities (fonts, google-places, overpass)
- `app/hooks/` - Custom hooks (useUserLocation)

## Build Order

`npm run build` runs `next build` then `npm run build:embed` - so embed is built after Next.js.

## Nearby Mosques API

Uses **Google Places API** (requires `GOOGLE_PLACES_API_KEY` env var). Fallback is `app/lib/overpass.ts` for OpenStreetMap data.

## Embed Widget

The `NearbyMosques` component exports as standalone IIFE via `vite.config.embed.ts`. Output goes to `public/embed/`.

To test embed locally:
1. Run `npm run build:embed`
2. Add origin to `EMBED_ALLOWED_ORIGINS` env var
3. Use iframe: `<iframe src="http://localhost:3000/embed/widget.html" allow="geolocation *">`

CORS allow-list includes `https://theraysoffaith.org`, `https://journey.theraysoffaith.org`, and `http://localhost:3000` (non-prod only).

## Dependencies

- `@fortawesome/react-fontawesome` - icons
- `lucide-react` - icons
- `swiper` - carousel