import React from 'react';
import { createRoot } from 'react-dom/client';
import NearbyMosques from '../components/NearbyMosques';
import '../globals.css'; // Import global styles to ensure Tailwind is applied
import './embed.css'; // Load local font faces for standalone embeds

const targetId = 'nearby-mosques-root';

function mountWidget() {
    const container = document.getElementById(targetId);

    if (!container) {
        return false;
    }

    const apiBaseUrl = container.dataset.apiBaseUrl || 'https://journey.theraysoffaith.org';
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <NearbyMosques apiBaseUrl={apiBaseUrl} />
        </React.StrictMode>
    );
    return true;
}

function waitForContainer() {
    const observer = new MutationObserver(() => {
        if (mountWidget()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Stop observing after a reasonable time to avoid leaks
    setTimeout(() => observer.disconnect(), 15000);
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (!mountWidget()) {
        waitForContainer();
    }
} else {
    document.addEventListener('DOMContentLoaded', () => {
        if (!mountWidget()) {
            waitForContainer();
        }
    });
}
