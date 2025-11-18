// app/api/nearby-mosques/route.ts
import { NextResponse } from 'next/server';
// import { getNearbyMosques } from '@/lib/google-places';
import { getNearbyMosquesOSM } from '@/lib/overpass';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    if (!lat || !lng) {
        return NextResponse.json({ error: 'Missing coordinates' }, { status: 400 });
    }

    try {
        const mosques = await getNearbyMosquesOSM(parseFloat(lat), parseFloat(lng));
        return NextResponse.json(mosques);
    } catch (error) {
        console.error('Error fetching mosques:', error);
        return NextResponse.json({ error: 'Failed to fetch mosques' }, { status: 500 });
    }
}
