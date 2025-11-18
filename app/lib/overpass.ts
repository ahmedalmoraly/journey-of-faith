// app/lib/overpass.ts
interface Mosque {
  name: string;
  lat: number;
  lng: number;
  distance: number;
}

interface OverpassElement {
  tags?: {
    name?: string;
    amenity?: string;
    religion?: string;
  };
  lat?: number;
  lon?: number;
  center?: {
    lat: number;
    lon: number;
  };
}

// Calculate distance between two coordinates in kilometers
function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export async function getNearbyMosquesOSM(lat: number, lng: number): Promise<Mosque[]> {
  if (!lat || !lng) {
    throw new Error('Invalid coordinates provided');
  }

  const query = `
    [out:json];
    (
      node["amenity"="place_of_worship"]["religion"="muslim"](around:40000,${lat},${lng});
      way["amenity"="place_of_worship"]["religion"="muslim"](around:40000,${lat},${lng});
      relation["denomination"="sunni"]["amenity"="place_of_worship"]["religion"="muslim"](around:40000,${lat},${lng});
    );
    out center;
  `;

  try {
    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: query,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Overpass API error response:', errorText);
      throw new Error(`Overpass API error: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    
    if (!data.elements) {
      return [];
    }

    return data.elements
      .map((el: OverpassElement) => {
        const mosqueLat = el.lat || el.center?.lat;
        const mosqueLng = el.lon || el.center?.lon;
        
        if (!mosqueLat || !mosqueLng) {
          return null;
        }

        return {
          name: el.tags?.name || 'Mosque',
          lat: mosqueLat,
          lng: mosqueLng,
          distance: calculateDistance(lat, lng, mosqueLat, mosqueLng),
        };
      })
      .filter((mosque: Mosque | null): mosque is Mosque => mosque !== null)
      .sort((a: Mosque, b: Mosque) => a.distance - b.distance);
  } catch (error) {
    console.error('Error fetching mosques from Overpass API:', error);
    throw new Error('Failed to fetch nearby mosques');
  }
}