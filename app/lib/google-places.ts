function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return (R * c) * 0.621371;
}

interface GooglePlaceResult {
  name: string;
  lat: number;
  lng: number;
  distance: number;
  address?: string;
}

export async function getNearbyMosques(lat: number, lng: number): Promise<GooglePlaceResult[]> {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  
  if (!API_KEY) {
    console.error('GOOGLE_PLACES_API_KEY environment variable is not set');
    return [];
  }
  
  try {
    const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.location,places.formattedAddress,places.id',
      },
      body: JSON.stringify({
        includedTypes: ['mosque'],
        locationRestriction: {
          circle: {
            center: {
              latitude: lat,
              longitude: lng,
            },
            radius: 50000,
          },
        },
        maxResultCount: 20,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('Google Places API error:', data.error);
      return [];
    }

    if (!data.places || data.places.length === 0) {
      console.log('No places found in area');
      return [];
    }

    return data.places.map((place: { displayName?: { text?: string }; formattedAddress?: string; location?: { latitude?: number; longitude?: number } }) => ({
      name: place.displayName?.text || 'Mosque',
      lat: place.location?.latitude || 0,
      lng: place.location?.longitude || 0,
      distance: calculateDistance(lat, lng, place.location?.latitude || 0, place.location?.longitude || 0),
      address: place.formattedAddress,
    })).sort((a: { distance: number }, b: { distance: number }) => a.distance - b.distance);
  } catch (error) {
    console.error('Error fetching from Google Places API:', error);
    return [];
  }
}

interface GeocodingResult {
  lat: number;
  lng: number;
  name: string;
  formattedAddress?: string;
}

export async function geocodeLocation(query: string): Promise<GeocodingResult | null> {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  
  if (!API_KEY) {
    console.error('GOOGLE_PLACES_API_KEY not set');
    return null;
  }
  
  try {
    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.location,places.formattedAddress',
      },
      body: JSON.stringify({
        textQuery: query,
        maxResultCount: 1,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('Geocoding API error:', data.error);
      return null;
    }

    if (!data.places || data.places.length === 0) {
      console.log('No geocoding results for:', query);
      return null;
    }

    const place = data.places[0];
    return {
      lat: place.location?.latitude || 0,
      lng: place.location?.longitude || 0,
      name: place.displayName?.text || query,
      formattedAddress: place.formattedAddress,
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
}