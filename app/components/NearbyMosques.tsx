'use client';

import { useState, useCallback } from 'react';
import { Search, MapPin, Loader2, Landmark } from 'lucide-react';
import { useUserLocation } from '@/hooks/useUserLocation';

interface Mosque {
  name: string;
  lat: number;
  lng: number;
  distance: number;
  address?: string;
}

interface NearbyMosquesProps {
  apiBaseUrl?: string;
}

export default function NearbyMosques({ apiBaseUrl = '' }: NearbyMosquesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mosques, setMosques] = useState<Mosque[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMosques = useCallback(async (lat: number, lng: number) => {
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
  }, [apiBaseUrl]);

  const { error: locationError, loading: locationLoading, getCurrentLocation } = useUserLocation(fetchMosques);

  const handleUseCurrentLocation = () => {
    setMosques([]);
    setError(null);
    getCurrentLocation();
  };

  const handleCitySearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${apiBaseUrl}/api/nearby-mosques?q=${encodeURIComponent(searchQuery)}`
      );

      if (!res.ok) {
        throw new Error('Failed to search location');
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error || 'Location not found');
      }

      if (data.length === 0) {
        throw new Error('No mosques found nearby');
      }

      setMosques(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nearby-mosques-widget bg-white rounded-lg shadow-md w-full p-4 md:p-6">
      <div className="flex items-center mb-4 md:mb-6">
        <Landmark className="nearby-mosques-heading-icon text-[#28348E] mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
        <h2 className="text-lg md:text-xl font-bold text-[#28348E]">Find Nearby Mosques</h2>
      </div>

      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
        <button
          onClick={handleUseCurrentLocation}
          disabled={locationLoading}
          className="w-full flex items-center justify-center px-3 md:px-4 py-2.5 md:py-3 bg-[#FFC931] text-[#28348E] rounded-md hover:bg-[#28348E] hover:text-[#FFC931] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
        >
          {locationLoading ? (
            <>
              <Loader2 className="animate-spin mr-2 w-4 h-4" />
              <span>Getting location...</span>
            </>
          ) : (
            <>
              <MapPin className="mr-2 w-4 h-4" />
              <span>Use My Current Location</span>
            </>
          )}
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs md:text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <form onSubmit={handleCitySearch} className="space-y-2 md:space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform text-[#28348E] -translate-y-1/2 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter city (e.g., Raleigh, NYC)"
              className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2.5 md:py-3 text-sm border border-gray-300 text-[#28348E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC931] focus:border-transparent"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !searchQuery.trim()}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-[#28348E] text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin inline mr-2 w-4 h-4" />
                <span>Searching...</span>
              </span>
            ) : (
              'Search Location'
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="p-3 md:p-4 mb-4 text-red-600 bg-red-50 rounded-md border border-red-200 text-sm">
          <p>{error}</p>
        </div>
      )}

      {locationError && (
        <div className="p-3 md:p-4 mb-4 text-red-600 bg-red-50 rounded-md border border-red-200 text-sm">
          <p>{locationError}</p>
        </div>
      )}

      {mosques.length > 0 && (
        <div className="space-y-2 md:space-y-3">
          <h3 className="font-semibold text-gray-700 text-sm md:text-base">
            Found {mosques.length} mosque{mosques.length !== 1 ? 's' : ''} nearby
          </h3>
          <div className="max-h-[300px] md:max-h-96 overflow-y-auto space-y-2">
            {mosques.map((mosque, index) => (
              <a
                key={index}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mosque.name)}%20${encodeURIComponent(mosque.address || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 md:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm md:text-base truncate block">{mosque.name}</h4>
                    {mosque.address && (
                      <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1 line-clamp-1">{mosque.address}</p>
                    )}
                    {mosque.distance !== undefined && (
                      <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">
                        {mosque.distance < 0.1
                          ? `${(mosque.distance * 5280).toFixed(0)} ft`
                          : `${mosque.distance.toFixed(1)} mi`}
                      </p>
                    )}
                  </div>
                  <MapPin className="text-gray-400 ml-2 w-4 h-4 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {!loading && !error && !locationError && mosques.length === 0 && (
        <div className="text-center py-6 md:py-8 text-gray-500">
          <Landmark className="nearby-mosques-heading-icon mx-auto mb-2 md:mb-3 w-8 h-8 md:w-10 md:h-10 text-gray-300" />
          <p className="text-sm">Search for mosques above</p>
        </div>
      )}
    </div>
  );
}