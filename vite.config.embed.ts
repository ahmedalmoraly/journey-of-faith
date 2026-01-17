import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    publicDir: false, // Disable public directory copying to avoid recursion warning
    define: {
        'process.env': {} // Mock process.env for libraries that might use it
    },
    build: {
        outDir: 'public/embed',
        emptyOutDir: false, // Don't empty the directory as it might contain other files we want to keep or manual copies
        lib: {
            entry: path.resolve(__dirname, 'app/embed/nearby-mosques-embed.tsx'),
            name: 'NearbyMosquesEmbed',
            fileName: (format) => `nearby-mosques-embed.${format}.js`,
            formats: ['iife'], // Immediately Invoked Function Expression for direct script tag usage
        },
        rollupOptions: {
            // Ensure external dependencies are bundled if we want a standalone file
            // For a truly standalone embed, we usually bundle React. 
            // If the host site has React, we might externalize it, but for WordPress, it's safer to bundle.
            external: [],
            output: {
                // Globals are only needed if we have external dependencies
                globals: {},
                // Ensure CSS is extracted to a separate file
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'nearby-mosques-embed.css';
                    }
                    return assetInfo.name || 'assets/[name]-[hash][extname]';
                },
            },
        },
        // Minify for production
        minify: 'esbuild',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './app'),
            '@fonts': path.resolve(__dirname, './public/fonts'),
        },
    },
});
