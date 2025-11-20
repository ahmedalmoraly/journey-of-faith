import React from 'react';
import { createRoot } from 'react-dom/client';
import NearbyMosques from '../components/NearbyMosques';
import '../globals.css'; // Import global styles to ensure Tailwind is applied

// Find the target element
const targetId = 'nearby-mosques-root';
const container = document.getElementById(targetId);

if (container) {
    // Read configuration from data attributes
    const apiBaseUrl = container.dataset.apiBaseUrl || 'https://journey.theraysoffaith.org'; // Fallback or default

    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <NearbyMosques apiBaseUrl={apiBaseUrl} />
        </React.StrictMode>
    );
} else {
    console.warn(`NearbyMosques: Target container #${targetId} not found.`);
}
