export interface NearbyRestaurant {
  id: string;
  name: string;
  category: string;
  address: string;
  distance_km: number | null;
  rating: number;
  delivery_time: string;
  price_for_two: string;
  image_url: string;
  lat?: number;
  lng?: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getCachedLocation = (): { lat: number; lng: number } | null => {
  if (typeof window === "undefined") return null;
  try {
    const cached = localStorage.getItem("user_nearby_coords");
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && typeof parsed.lat === "number" && typeof parsed.lng === "number") {
        return { lat: parsed.lat, lng: parsed.lng };
      }
    }
  } catch (e) {
    console.error("Failed to read cached location", e);
  }
  return null;
};

export const setCachedLocation = (lat: number, lng: number): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("user_nearby_coords", JSON.stringify({ lat, lng, time: Date.now() }));
  } catch (e) {
    console.error("Failed to cache location", e);
  }
};

export const getCurrentCoordinates = (): Promise<{ lat: number; lng: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("UNSUPPORTED"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCachedLocation(coords.lat, coords.lng);
        resolve(coords);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          reject(new Error("PERMISSION_DENIED"));
        } else {
          reject(new Error("POSITION_UNAVAILABLE"));
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  });
};

export const geocodeCity = async (query: string): Promise<{ lat: number; lng: number } | null> => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lng = parseFloat(data[0].lon);
      if (!isNaN(lat) && !isNaN(lng)) {
        setCachedLocation(lat, lng);
        return { lat, lng };
      }
    }
  } catch (err) {
    console.error("Geocoding error:", err);
  }
  return null;
};

export const fetchNearbyRestaurants = async (
  lat: number,
  lng: number,
  radius: number = 5
): Promise<NearbyRestaurant[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/restaurants/nearby?lat=${lat}&lng=${lng}&radius=${radius}`);
    if (!response.ok) {
      // Fallback try production domain if local fails
      const prodRes = await fetch(`https://apibhukkad.allindiahub.com/api/restaurants/nearby?lat=${lat}&lng=${lng}&radius=${radius}`);
      if (prodRes.ok) {
        return await prodRes.json();
      }
      throw new Error(`Server returned status ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : (data.data || []);
  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    throw error;
  }
};
