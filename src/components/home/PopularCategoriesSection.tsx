"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface FoodCategory {
  id: string;
  name: string;
  imageUrl?: string | null;
  itemCount?: number;
}

// Food fallback images mapping for categories without a uploaded image in DB
const CATEGORY_FOOD_FALLBACKS: Record<string, string> = {
  "Pizza": "/images/Margehrita Pizza.avif",
  "Momos": "/images/Veg momos [6 pieces].avif",
  "Desserts": "/images/Badam milk shake.avif",
  "Tea & Coffee": "/images/Java Chip Frappuccino..avif",
  "Beverages": "/images/Badam milk shake.avif",
  "Biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
  "Burger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
  "Chinese": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80",
  "Rolls": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=80",
  "Sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=80",
  "Fast Food": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop&q=80",
  "North Indian": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80",
  "South Indian": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500&auto=format&fit=crop&q=80",
  "Healthy": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
  "Thali": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=80",
  "Breakfast": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=500&auto=format&fit=crop&q=80",
  "Chicken": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format&fit=crop&q=80",
  "Pure Veg": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
  "Ice Cream": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
  "Juices": "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=80",
  "Street Food": "/images/Veg momos [6 pieces].avif",
  "Pasta": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=80",
  "Shawarma": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop&q=80",
  "Kebabs": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80"
};

export default function PopularCategoriesSection() {
  const [categories, setCategories] = useState<FoodCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://apibhukkad.allindiahub.com";

  const resolveImage = (cat: FoodCategory): string | null => {
    if (cat.imageUrl && typeof cat.imageUrl === "string" && cat.imageUrl.trim() !== "") {
      const cleaned = cat.imageUrl.trim();
      if (!cleaned.includes("bukkadh.png") && (cleaned.startsWith("http") || cleaned.startsWith("/"))) {
        return cleaned;
      }
    }
    // Return food photo fallback for category name if available
    return CATEGORY_FOOD_FALLBACKS[cat.name] || null;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let res = await fetch(`${API_BASE_URL}/api/restaurants/categories`);
        if (!res.ok) {
          res = await fetch("https://apibhukkad.allindiahub.com/api/restaurants/categories");
        }
        if (res.ok) {
          const json = await res.json();
          const list: FoodCategory[] = json.data || (Array.isArray(json) ? json : []);
          if (Array.isArray(list) && list.length > 0) {
            // Keep ONLY categories that resolve to a valid food image (filter out logo placeholders completely)
            const validWithFoodImages = list
              .map(cat => ({
                ...cat,
                imageUrl: resolveImage(cat)
              }))
              .filter(cat => cat.imageUrl !== null);

            setCategories(validWithFoodImages);
          }
        }
      } catch (err) {
        console.error("Error fetching food categories from DB:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [API_BASE_URL]);

  // Duplicate categories array for seamless infinite marquee loop
  const duplicatedCategories = [...categories, ...categories, ...categories];

  return (
    <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[100px] relative z-20 text-center overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full mb-3 text-xs font-extrabold uppercase tracking-wider">
          <Sparkles size={14} /> Explore Cuisines
        </div>

        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="flex gap-1 hidden sm:flex">
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>

          <h2 className="font-poppins font-black text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight">
            Popular Categories
          </h2>

          <div className="flex gap-1 hidden sm:flex">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 font-medium text-base max-w-md">
          Explore delicious dishes from top cuisines curated from our partner kitchens
        </p>
      </div>

      {/* --- SKELETON LOADING --- */}
      {loading && (
        <div className="flex gap-6 overflow-x-auto pb-6 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center space-y-3 animate-pulse w-[110px]">
              <div className="w-[100px] h-[100px] rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-20"></div>
            </div>
          ))}
        </div>
      )}

      {/* --- CATEGORIES DYNAMIC MARQUEE SLIDER --- */}
      {!loading && categories.length > 0 && (
        <div
          className="relative w-full overflow-hidden py-4 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#FDFDFF] dark:from-[#0B0F17] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#FDFDFF] dark:from-[#0B0F17] to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-6 sm:gap-10 w-max"
            animate={isPaused ? { x: undefined } : { x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedCategories.map((cat, idx) => (
              <motion.div
                key={`${cat.id || cat.name}-${idx}`}
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer group w-[110px] sm:w-[135px]"
              >
                <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700/80 group-hover:border-primary group-hover:ring-4 group-hover:ring-primary/15 shadow-md rounded-full mb-3 flex items-center justify-center overflow-hidden transition-all duration-300 p-1.5 relative">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={cat.imageUrl || "/images/bukkadh.png"}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-115 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>

                <span className="font-bold text-slate-900 dark:text-slate-100 text-[13px] sm:text-[15px] group-hover:text-primary transition-colors text-center line-clamp-1">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

    </section>
  );
}
