import { NextResponse } from 'next/server';
import { getNearbyMosquesOSM } from '@/lib/overpass';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    // Handle CORS preflight or simple requests if needed, but for GET simple headers suffice
    const headers = {
        'Access-Control-Allow-Origin': 'https://theraysoffaith.org', // Allow specific domain
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
        return NextResponse.json({}, { headers });
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
