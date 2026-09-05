"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Flame, 
  MapPin, 
  Star, 
  Zap, 
  Search, 
  AlertCircle, 
  Loader2, 
  RefreshCw, 
  CheckCircle2, 
  Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  NearbyRestaurant, 
  getCurrentCoordinates, 
  fetchNearbyRestaurants, 
  geocodeCity, 
  getCachedLocation 
} from "@/lib/location";

const DEFAULT_FALLBACK_RESTAURANTS: NearbyRestaurant[] = [
  {
    id: "fallback-1",
    name: "Momo House",
    category: "Tibetan • Fast Food",
    address: "Tatibandh, Raipur",
    distance_km: 1.2,
    rating: 4.8,
    delivery_time: "25 min",
    price_for_two: "₹200 for two",
    image_url: "/images/Veg momos [6 pieces].avif"
  },
  {
    id: "fallback-2",
    name: "Pizza World",
    category: "Italian • Pizza",
    address: "Bhatagaon, Raipur",
    distance_km: 2.4,
    rating: 4.7,
    delivery_time: "30 min",
    price_for_two: "₹250 for two",
    image_url: "/images/Margehrita Pizza.avif"
  },
  {
    id: "fallback-3",
    name: "Shake Point",
    category: "Beverages • Desserts",
    address: "Telibandha, Raipur",
    distance_km: 3.1,
    rating: 4.8,
    delivery_time: "28 min",
    price_for_two: "₹300 for two",
    image_url: "/images/Badam milk shake.avif"
  },
  {
    id: "fallback-4",
    name: "Royal Biryani & Grill",
    category: "Biryani • North Indian",
    address: "Pandri, Raipur",
    distance_km: 3.8,
    rating: 4.6,
    delivery_time: "35 min",
    price_for_two: "₹350 for two",
    image_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80"
  }
];

interface NearbyRestaurantsSectionProps {
  initialRestaurants?: any[];
}

export default function NearbyRestaurantsSection({ initialRestaurants = [] }: NearbyRestaurantsSectionProps) {
  const [restaurants, setRestaurants] = useState<NearbyRestaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [stateStatus, setStateStatus] = useState<"idle" | "loading" | "success" | "permission_denied" | "unsupported" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");
  const [manualSearching, setManualSearching] = useState<boolean>(false);
  const [locationLabel, setLocationLabel] = useState<string>("");

  useEffect(() => {
    // Auto-fetch database records on mount
    const initLoad = async () => {
      const cached = getCachedLocation();
      const lat = cached?.lat || 21.2514;
      const lng = cached?.lng || 81.6296;
      try {
        const data = await fetchNearbyRestaurants(lat, lng, 50);
        if (data && data.length > 0) {
          setRestaurants(data);
        }
      } catch (err) {
        console.error("Initial DB load error:", err);
      }
    };
    initLoad();
  }, []);

  // Display exactly 4 cards at a time.
  // If DB returns >= 4 active restaurants, show top 4 real DB restaurants (no mock data).
  // If DB returns < 4 active restaurants, fill remaining slots with mock fallback data to reach 4 cards.
  const activeRestaurants = React.useMemo(() => {
    if (restaurants.length >= 4) {
      return restaurants.slice(0, 4);
    }
    const needed = 4 - restaurants.length;
    const padding = DEFAULT_FALLBACK_RESTAURANTS.slice(0, needed);
    return [...restaurants, ...padding];
  }, [restaurants]);

  const handleFindNearby = async () => {
    setLoading(true);
    setStateStatus("loading");
    setErrorMessage("");

    try {
      // Check cache first or ask browser geolocation
      const cached = getCachedLocation();
      let coords = cached;

      if (!coords) {
        coords = await getCurrentCoordinates();
      } else {
        // Run fresh in background
        getCurrentCoordinates().then(c => {
          if (c) fetchRestaurantsForCoords(c.lat, c.lng);
        }).catch(() => {});
      }

      if (coords) {
        await fetchRestaurantsForCoords(coords.lat, coords.lng);
      }
    } catch (err: any) {
      console.error("Location detection error:", err);
      if (err.message === "PERMISSION_DENIED") {
        setStateStatus("permission_denied");
      } else if (err.message === "UNSUPPORTED") {
        setStateStatus("unsupported");
      } else {
        setStateStatus("error");
        setErrorMessage("Something went wrong. Try again.");
      }
      setLoading(false);
    }
  };

  const fetchRestaurantsForCoords = async (lat: number, lng: number) => {
    try {
      const data = await fetchNearbyRestaurants(lat, lng, 5);
      setRestaurants(data);
      setStateStatus("success");
      setLocationLabel(`Near current location (${lat.toFixed(2)}, ${lng.toFixed(2)})`);
    } catch (err) {
      console.error("Fetch error:", err);
      setStateStatus("error");
      setErrorMessage("Could not load restaurants from backend database.");
    } finally {
      setLoading(false);
    }
  };

  const handleManualSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCity.trim()) return;

    setManualSearching(true);
    setLoading(true);
    setStateStatus("loading");

    try {
      const coords = await geocodeCity(searchCity);
      if (coords) {
        await fetchRestaurantsForCoords(coords.lat, coords.lng);
        setLocationLabel(`Near "${searchCity}"`);
      } else {
        setStateStatus("error");
        setErrorMessage(`Could not find coordinates for "${searchCity}". Please try a different city.`);
      }
    } catch (err) {
      setStateStatus("error");
      setErrorMessage("Failed to geocode location. Please try again.");
    } finally {
      setManualSearching(false);
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[100px] relative z-20 text-center bg-white dark:bg-slate-900/40 rounded-[32px] p-6 sm:p-10 border border-gray-100 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <Flame className="text-orange-500 fill-orange-500" size={28} />
        <h2 className="font-poppins font-black text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight">
          Popular Restaurants Near You
        </h2>
      </div>

      <p className="text-gray-500 dark:text-gray-400 font-medium mb-6 max-w-md mx-auto">
        Best rated restaurants delivering to you
      </p>

      {/* Button: Find Restaurants Near Me */}
      <div className="flex flex-col items-center justify-center mb-10">
        <Button
          onClick={handleFindNearby}
          disabled={loading}
          className="h-[52px] px-8 sm:px-10 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white rounded-full font-black text-[15px] sm:text-[16px] shadow-lg shadow-green-500/20 dark:shadow-green-900/30 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 border-none"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-white" />
              <span>Finding restaurants near you...</span>
            </>
          ) : (
            <>
              <MapPin className="w-5 h-5 text-white" />
              <span>📍 Find Restaurants Near Me</span>
            </>
          )}
        </Button>

        {locationLabel && stateStatus === "success" && (
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 px-4 py-1.5 rounded-full border border-green-200 dark:border-green-800/50">
            <CheckCircle2 size={14} />
            <span>{locationLabel}</span>
          </div>
        )}
      </div>

      {/* --- STATE HANDLING --- */}

      {/* 1. Loading State (Spinner & Skeleton Placeholders) */}
      {stateStatus === "loading" && (
        <div className="w-full">
          {/* Centered Spinner */}
          <div className="flex flex-col items-center justify-center py-8 mb-8">
            <div className="w-12 h-12 rounded-full border-4 border-gray-300 dark:border-slate-600 border-t-green-500 animate-spin mb-3"></div>
            <p className="text-gray-900 dark:text-white font-bold text-sm">
              Finding restaurants near you...
            </p>
          </div>

          {/* Skeleton Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-slate-800 rounded-[24px] overflow-hidden border border-gray-200 dark:border-slate-700 p-4 space-y-4 animate-pulse text-left"
              >
                <div className="h-[180px] w-full bg-gray-200 dark:bg-slate-700 rounded-[16px]"></div>
                <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2"></div>
                <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded-[12px] w-full"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Permission Denied & Unsupported Browser States */}
      {(stateStatus === "permission_denied" || stateStatus === "unsupported") && (
        <div className="max-w-md mx-auto bg-gray-100 dark:bg-slate-800 p-6 sm:p-8 rounded-[24px] border border-gray-200 dark:border-slate-700 mb-10 text-left shadow-sm">
          <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400 font-bold mb-2">
            <AlertCircle size={20} />
            <span>
              {stateStatus === "permission_denied"
                ? "Location access denied"
                : "Your browser doesn't support location services."}
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium mb-5">
            Please enter your city or address manually to find nearby restaurants:
          </p>

          <form onSubmit={handleManualSearch} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              required
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Enter city or area e.g. Raipur"
              className="h-12 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 rounded-[14px] px-4 font-medium focus-visible:ring-green-500"
            />
            <Button
              type="submit"
              disabled={manualSearching}
              className="h-12 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white font-bold rounded-[14px] px-6 shrink-0 flex items-center justify-center gap-2"
            >
              {manualSearching ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
              Search
            </Button>
          </form>
        </div>
      )}

      {/* 3. Error State */}
      {stateStatus === "error" && (
        <div className="max-w-md mx-auto bg-red-50 dark:bg-red-950/40 p-6 rounded-[24px] border border-red-200 dark:border-red-900/50 mb-10 text-center">
          <p className="text-red-700 dark:text-red-300 font-bold text-sm mb-4">
            {errorMessage || "Something went wrong. Try again."}
          </p>
          <Button
            onClick={handleFindNearby}
            className="h-10 bg-green-500 hover:bg-green-600 dark:bg-green-600 text-white font-bold rounded-[12px] px-6 inline-flex items-center gap-2"
          >
            <RefreshCw size={14} /> Try again
          </Button>
        </div>
      )}

      {/* --- SUCCESS / RESTAURANT CARDS GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {activeRestaurants.map((rest, idx) => (
          <motion.div
            key={rest.id || idx}
            whileHover={{ y: -5 }}
            className="bg-gray-100 dark:bg-slate-800 rounded-[24px] overflow-hidden border border-gray-200 dark:border-slate-700 shadow-md dark:shadow-none hover:shadow-xl transition-all duration-300 text-left flex flex-col group"
          >
            {/* Image & Rating Badge */}
            <div className="h-[200px] w-full relative overflow-hidden bg-slate-200 dark:bg-slate-700">
              <Image
                src={rest.image_url || "/images/bukkadh.png"}
                alt={rest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              {/* Rating Badge (top right) */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-[10px] shadow-md flex items-center gap-1 font-bold text-xs sm:text-sm text-gray-900 dark:text-white border border-gray-100 dark:border-slate-800">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span>{rest.rating || 4.5}</span>
              </div>

              {/* Distance Badge (top left if distance is present) */}
              {typeof rest.distance_km === "number" && (
                <div className="absolute top-4 left-4 bg-green-600/90 text-white backdrop-blur-md px-2.5 py-1 rounded-[8px] shadow-sm flex items-center gap-1 font-extrabold text-[11px]">
                  <Navigation size={12} className="fill-white" />
                  <span>📍 {rest.distance_km} km away</span>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Name */}
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-1 truncate">
                {rest.name}
              </h3>

              {/* Category Tags */}
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-5 truncate">
                {rest.category}
              </p>

              {/* Meta Row */}
              <div className="flex items-center justify-between text-xs font-bold text-gray-600 dark:text-gray-300 mb-6 bg-white/80 dark:bg-slate-900/80 p-3 rounded-[12px] border border-gray-100 dark:border-slate-700/50">
                <span className="flex items-center gap-1">
                  <Zap size={14} className="text-green-500" /> {rest.delivery_time}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-700"></span>
                <span className="truncate">{rest.price_for_two}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-slate-700"></span>
                <span className="text-green-600 dark:text-green-400 shrink-0">Free Delivery</span>
              </div>

              {/* Full-width Order Now button */}
              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full h-12 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white rounded-[14px] font-bold text-base shadow-md transition-all hover:scale-[1.02] border-none"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bhukkhad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Button
        asChild
        variant="outline"
        className="rounded-full border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-slate-800 font-bold px-10 h-12"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.bhukkhad"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More Restaurants
        </a>
      </Button>

    </section>
  );
}
