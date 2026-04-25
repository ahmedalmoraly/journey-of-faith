import { NextResponse } from 'next/server';
import { getNearbyMosques, geocodeLocation } from '@/lib/google-places';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

const defaultAllowedOrigins = ['https://theraysoffaith.org', 'https://journey.theraysoffaith.org'];

if (process.env.NODE_ENV !== 'production') {
    defaultAllowedOrigins.push('http://localhost:3000');
}

const envAllowedOrigins = process.env.EMBED_ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()).filter(Boolean);
const additionalOrigins = envAllowedOrigins || [];
const allowedOrigins = [...defaultAllowedOrigins, ...additionalOrigins];

function isOriginAllowed(origin: string): boolean {
    return allowedOrigins.includes(origin);
}

function buildCorsHeaders(origin: string | null): Record<string, string> {
    const headers: Record<string, string> = {
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (origin) {
        headers['Access-Control-Allow-Origin'] = origin;
        headers['Vary'] = 'Origin';
    }

    return headers;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const query = searchParams.get('q');
    const origin = request.headers.get('origin');

    if (origin && !isOriginAllowed(origin)) {
        return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
    }

    const headers = buildCorsHeaders(origin);

    if (request.method === 'OPTIONS') {
        return NextResponse.json({}, { headers, status: 204 });
    }

    let targetLat: number;
    let targetLng: number;

    if (lat && lng) {
        targetLat = parseFloat(lat);
        targetLng = parseFloat(lng);
    } else if (query) {
        try {
            const geocoded = await geocodeLocation(query);
            if (!geocoded) {
                return NextResponse.json({ error: 'Location not found' }, { status: 404, headers });
            }
            targetLat = geocoded.lat;
            targetLng = geocoded.lng;
        } catch (err) {
            console.error('Geocoding error:', err);
            return NextResponse.json({ error: 'Geocoding failed' }, { status: 500, headers });
        }
    } else {
        return NextResponse.json({ error: 'Missing lat/lng or query' }, { status: 400, headers });
    }

    if (isNaN(targetLat) || isNaN(targetLng)) {
        return NextResponse.json({ error: 'Invalid coordinates' }, { status: 400, headers });
    }

    try {
        const mosques = await getNearbyMosques(targetLat, targetLng);
        return NextResponse.json(mosques, { headers });
    } catch (error) {
        console.error('Error fetching mosques:', error);
        return NextResponse.json({ error: 'Failed to fetch mosques' }, { status: 500, headers });
    }
}
