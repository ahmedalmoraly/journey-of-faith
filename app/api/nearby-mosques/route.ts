import { NextResponse } from 'next/server';
import { getNearbyMosquesOSM } from '@/lib/overpass';

const defaultAllowedOrigins = ['https://theraysoffaith.org', 'https://journey.theraysoffaith.org'];

if (process.env.NODE_ENV !== 'production') {
    defaultAllowedOrigins.push('http://localhost:3000');
}

const envAllowedOrigins = process.env.EMBED_ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()).filter(Boolean);
const allowedOrigins = envAllowedOrigins && envAllowedOrigins.length > 0 ? envAllowedOrigins : defaultAllowedOrigins;

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
    const origin = request.headers.get('origin');

    if (origin && !allowedOrigins.includes(origin)) {
        return NextResponse.json({ error: 'Origin not allowed' }, { status: 403 });
    }

    const headers = buildCorsHeaders(origin);

    if (request.method === 'OPTIONS') {
        return NextResponse.json({}, { headers, status: 204 });
    }

    if (!lat || !lng) {
        return NextResponse.json({ error: 'Missing coordinates' }, { status: 400, headers });
    }

    try {
        const mosques = await getNearbyMosquesOSM(parseFloat(lat), parseFloat(lng));
        return NextResponse.json(mosques, { headers });
    } catch (error) {
        console.error('Error fetching mosques:', error);
        return NextResponse.json({ error: 'Failed to fetch mosques' }, { status: 500, headers });
    }
}
