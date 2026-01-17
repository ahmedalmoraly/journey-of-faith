This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Nearby Mosques Embed

The `NearbyMosques` component can be exported as a standalone widget for WordPress or any site that supports either script tags or iframes.

1. **Build the bundle**

   ```bash
   npm run build:embed
   ```

   This runs Vite with `vite.config.embed.ts` and copies `app/embed/widget.html` into `public/embed/widget.html`.

2. **Expose the files**

   Make sure your deployment serves the generated assets (e.g. `https://journey.theraysoffaith.org/embed/nearby-mosques-embed.iife.js` and `widget.html`).

3. **Allow the host origin**

   Configure the API route CORS allow-list through `EMBED_ALLOWED_ORIGINS` (comma-separated). Defaults already include `https://theraysoffaith.org`, `https://journey.theraysoffaith.org`, and `http://localhost:3000` in non-production builds.

4. **Choose an integration**

   - **Script tag (host page owns the DOM):**

     ```html
     <link rel="stylesheet" href="https://journey.theraysoffaith.org/embed/nearby-mosques-embed.css" />
     <div id="nearby-mosques-root" data-api-base-url="https://journey.theraysoffaith.org"></div>
     <script src="https://journey.theraysoffaith.org/embed/nearby-mosques-embed.iife.js" defer></script>
     ```

     Place the container where you want the widget rendered and include the script. The bootstrapper waits for the container to exist before mounting, so it works with WordPress shortcodes/blocks.

   - **Iframe (recommended for CMS blocks):**

     ```html
     <iframe
       src="https://journey.theraysoffaith.org/embed/widget.html"
       width="100%"
       height="500"
       loading="lazy"
       style="border:0;"
       allow="geolocation *"
     ></iframe>
     ```

     The `allow="geolocation *"` attribute is required so browsers permit the widget to request location while inside the iframe.

5. **Troubleshooting**

   - Location errors inside iframes usually mean the `allow` attribute is missing.
   - API 403 responses typically indicate the iframe host was not added to `EMBED_ALLOWED_ORIGINS`.
