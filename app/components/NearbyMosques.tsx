'use client';

import { useState } from 'react';
import { Search, MapPin, Loader2, Landmark } from 'lucide-react';
import { useUserLocation } from '@/hooks/useUserLocation';

interface Mosque {
  name: string;
  lat: number;
  lng: number;
  distance: number;
}

interface NearbyMosquesProps {
  apiBaseUrl?: string;
}

export default function NearbyMosques({ apiBaseUrl = '' }: NearbyMosquesProps) {
  const { location, error: locationError, loading: locationLoading, getCurrentLocation } = useUserLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchMethod, setSearchMethod] = useState<'current' | 'city' | null>(null);

  const fetchMosques = async (lat: number, lng: number) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${apiBaseUrl}/api/nearby-mosques?lat=${lat}&lng=${lng}`);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      setMosques(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch mosques');
    } finally {
      setLoading(false);
    }
  };

  const handleUseCurrentLocation = () => {
    setSearchMethod('current');
    getCurrentLocation();
  };

  const handleCitySearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearchMethod('city');
    setLoading(true);
    setError(null);

    try {
      // Geocoding API to get coordinates from city name
      const geocodingRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
      );

      if (!geocodingRes.ok) {
        throw new Error('Failed to geocode location');
      }

      const geocodingData = await geocodingRes.json();

      if (geocodingData.length === 0) {
        throw new Error('Location not found');
      }

      const { lat, lon } = geocodingData[0];
      await fetchMosques(parseFloat(lat), parseFloat(lon));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search location');
      setLoading(false);
    }
  };

  // Fetch mosques when location is available
  if (location && searchMethod === 'current' && mosques.length === 0 && !loading) {
    fetchMosques(location.lat, location.lng);
  }

  return (
    <div className="nearby-mosques-widget bg-white rounded-lg shadow-md w-full p-6">
      <div className="flex items-center mb-6">
        <Landmark className="nearby-mosques-heading-icon text-[#28348E] mr-3" />
        <h2 className="text-xl font-bold text-[#28348E]">Find Nearby Mosques</h2>
      </div>

      {/* Search Methods */}
      <div className="space-y-4 mb-6">
        {/* Current Location Button */}
        <button
          onClick={handleUseCurrentLocation}
          disabled={locationLoading}
          className="w-full flex items-center justify-center px-4 py-3 bg-[#FFC931] text-[#28348E] rounded-md hover:bg-[#28348E] hover:text-[#FFC931] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {locationLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={18} />
              Getting location...
            </>
          ) : (
            <>
              <MapPin className="mr-2" size={18} />
              Use My Current Location
            </>
          )}
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* City Search Form */}
        <form onSubmit={handleCitySearch} className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform text-[#28348E] -translate-y-1/2" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter city or location (e.g., Mecca, London)"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 text-[#28348E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC931] focus:border-transparent"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !searchQuery.trim()}
            className="w-full px-4 py-3 bg-[#28348E] text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin inline mr-2" size={18} />
                Searching...
              </>
            ) : (
              'Search Location'
            )}
          </button>
        </form>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-4 mb-6 text-red-600 bg-red-50 rounded-md border border-red-200">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {locationError && (
        <div className="p-4 mb-6 text-red-600 bg-red-50 rounded-md border border-red-200">
          <p className="text-sm">{locationError}</p>
        </div>
      )}

      {/* Results */}
      {mosques.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-700">
            Found {mosques.length} mosque{mosques.length !== 1 ? 's' : ''} nearby
          </h3>
          <div className="max-h-96 overflow-y-auto space-y-2">
            {mosques.map((mosque, index) => (
              <a
                key={index}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mosque.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{mosque.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {mosque.distance.toFixed(1)} km away
                    </p>
                  </div>
                  <MapPin className="text-gray-400 ml-2" size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && !locationError && mosques.length === 0 && (searchMethod || location) && (
        <div className="text-center py-8 text-gray-500">
          <Landmark className="nearby-mosques-heading-icon mx-auto mb-3 text-gray-300" />
          <p className="text-sm">No mosques found nearby</p>
          <p className="text-xs mt-1">Try a different location or search area</p>
        </div>
      )}
    </div>
  );
}