"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative group inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 ${
        showLabel
          ? "w-full px-4 py-2.5 rounded-2xl justify-between bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-200"
          : "w-10 h-10 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md text-slate-700 dark:text-amber-400"
      } ${className}`}
    >
      {showLabel ? (
        <>
          <span className="text-sm font-bold flex items-center gap-2">
            {isDark ? "Dark Mode" : "Light Mode"}
          </span>
          <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-amber-400"
                >
                  <Moon size={16} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-amber-500"
                >
                  <Sun size={16} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark-icon"
              initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-amber-400"
            >
              <Moon size={18} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="light-icon"
              initial={{ rotate: 45, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -45, scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-slate-700 hover:text-amber-500 transition-colors"
            >
              <Sun size={18} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </button>
  );
}
