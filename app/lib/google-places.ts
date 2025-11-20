// lib/google-places.ts
export async function getNearbyMosques(lat: number, lng: number) {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=mosque&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}