// app/hooks/useUserLocation.ts
import { useState, useCallback } from 'react';

type LocationCallback = (lat: number, lng: number) => void;

export function useUserLocation(onLocationRetrieved?: LocationCallback) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoading(false);
        onLocationRetrieved?.(pos.coords.latitude, pos.coords.longitude);
      },
      () => {
        setError('Unable to retrieve your location. Please enable location permissions.');
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }, [onLocationRetrieved]);

  return { error, loading, getCurrentLocation };
}