"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Order Food", path: "/order" },
  { name: "Partner with Us", path: "/partner" },
  { name: "Ride with Us", path: "/rider" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 border-b ${scrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-slate-200/50 py-5"
            : "bg-transparent border-transparent py-8"
          }`}
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer group relative z-10">
            <img
              src="/images/bukkadh.png"
              alt="Bhukkadh Logo"
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-300 dark:hidden"
            />
            <img
              src="/images/logo.png"
              alt="Bhukkadh Logo Dark"
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-300 hidden dark:block"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-bold text-slate-700 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative py-2 px-1 transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 relative z-10">

            {/* CTA Button */}
            <Button suppressHydrationWarning className="rounded-full px-7 h-12 font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_8px_20px_rgba(88,204,2,0.25)] transition-all hover:scale-[1.03] active:scale-[0.98] text-[14px] flex items-center gap-2">
              <Download size={16} strokeWidth={2.5} />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 p-2 text-slate-700 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer (Sheet behavior sliding from right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-slate-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl p-6 pt-24 flex flex-col h-full"
              onClick={(e) => e.stopPropagation()}
            >


              <div className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base md:text-lg font-bold py-2 md:py-2.5 transition-colors ${isActive ? "text-primary" : "text-slate-700 hover:text-primary"}`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-5 border-t border-slate-100">
                <Button suppressHydrationWarning className="w-full rounded-full h-[48px] font-bold bg-primary text-white text-[15px] flex items-center gap-2 justify-center shadow-lg shadow-primary/25">
                  <Download size={18} strokeWidth={2.5} />
                  Download App
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
