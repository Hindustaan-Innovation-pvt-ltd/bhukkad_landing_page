"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronDown, Zap, ShieldCheck, Percent, Wifi } from "lucide-react";

interface AppPhoneMockupProps {
  className?: string;
}

export default function AppPhoneMockup({ className = "" }: AppPhoneMockupProps) {
  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-emerald-400/10 to-primary/5 rounded-[45px] blur-xl -z-10 opacity-70 dark:opacity-40" />

      {/* Outer Phone Hardware Frame - Compact, Sleek & Centered */}
      <div className="relative rounded-[36px] sm:rounded-[40px] p-[5px] sm:p-[6px] bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 shadow-[0_18px_45px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.18)_inset] ring-1 ring-slate-800/90">
        
        {/* Left Side Buttons (Volume) */}
        <div className="absolute -left-[8px] top-[72px] w-[3px] h-[18px] bg-slate-700 rounded-l-xs" />
        <div className="absolute -left-[8px] top-[96px] w-[3px] h-[30px] bg-slate-700 rounded-l-xs" />
        <div className="absolute -left-[8px] top-[134px] w-[3px] h-[30px] bg-slate-700 rounded-l-xs" />

        {/* Right Side Button (Power) */}
        <div className="absolute -right-[8px] top-[92px] w-[3px] h-[42px] bg-slate-700 rounded-r-xs" />

        {/* Inner Phone Screen Container */}
        <div className="relative w-full rounded-[31px] sm:rounded-[34px] overflow-hidden bg-[#fafcf9] dark:bg-[#0c121e] border border-slate-200/70 dark:border-slate-800 flex flex-col justify-between text-slate-900 dark:text-white transition-colors">
          
          {/* Subtle Screen Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-[#0c121e] dark:to-slate-900/90 pointer-events-none -z-0" />
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-44 h-44 bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl pointer-events-none -z-0" />

          {/* TOP CAMERA / NOTCH - Dead Center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[76px] h-[15px] bg-black rounded-b-[12px] flex items-center justify-center gap-1.5 z-30 shadow-xs">
            {/* Speaker Ear-piece */}
            <div className="w-6 h-[2.5px] bg-slate-800 rounded-full" />
            {/* Front Camera Lens */}
            <div className="w-2 h-2 rounded-full bg-[#0d1424] border border-slate-700/70 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-blue-600/90" />
            </div>
          </div>

          {/* SCREEN CONTENT */}
          <div className="relative z-10 flex flex-col h-full pt-1.5 px-3.5 pb-2">

            {/* Top iOS Status Bar */}
            <div className="flex items-center justify-between text-slate-800 dark:text-slate-200 px-1 pt-0.5 mb-1 text-[10px] font-bold">
              <span className="tracking-tight">9:41</span>

              {/* Status Icons (Right-aligned) */}
              <div className="flex items-center gap-1.5">
                {/* Cellular Signal Bars */}
                <div className="flex items-end gap-[1px] h-2">
                  <div className="w-[1.5px] h-1 bg-current rounded-xs" />
                  <div className="w-[1.5px] h-1.5 bg-current rounded-xs" />
                  <div className="w-[1.5px] h-2 bg-current rounded-xs" />
                  <div className="w-[1.5px] h-2.5 bg-current rounded-xs" />
                </div>
                <Wifi size={10} strokeWidth={2.5} />
                {/* Battery Icon */}
                <div className="w-3.5 h-2 border border-current rounded-[2px] p-[0.5px] flex items-center">
                  <div className="w-full h-full bg-current rounded-xs" />
                </div>
              </div>
            </div>

            {/* App Header Bar (Actual Brand Logo + Location) */}
            <div className="flex items-center justify-between pt-0.5 pb-1.5">
              <div className="flex items-center">
                {/* Light Mode Logo */}
                <Image
                  src="/images/bukkadh.png"
                  alt="Bhukkadh"
                  width={90}
                  height={32}
                  className="h-5 sm:h-6 w-auto object-contain dark:hidden"
                  priority
                />
                {/* Night Mode Logo */}
                <Image
                  src="/images/white logo.png"
                  alt="Bhukkadh"
                  width={90}
                  height={32}
                  className="h-5 sm:h-6 w-auto object-contain hidden dark:block"
                  priority
                />
              </div>

              {/* Location Selector Chip */}
              <div className="flex items-center gap-0.5 bg-white/95 dark:bg-slate-800/90 shadow-xs border border-slate-200/80 dark:border-slate-700/80 px-2 py-0.5 rounded-full text-slate-700 dark:text-slate-200 text-[9px] font-bold">
                <MapPin size={9} className="text-primary fill-primary" />
                <span>Raipur</span>
                <ChevronDown size={9} className="text-slate-400" />
              </div>
            </div>

            {/* Tag Badge */}
            <div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/50 text-[9px] font-bold text-emerald-700 dark:text-emerald-300 shadow-xs">
                <span className="text-[9px]">💚</span> Food. Delivered. Loved.
              </span>
            </div>

            {/* Hero Main Headline */}
            <div className="mt-1.5">
              <h3 className="font-poppins font-black text-[16px] sm:text-[18px] leading-[1.12] text-slate-900 dark:text-white tracking-tight">
                Good Food.<br />
                Great People.<br />
                <span className="text-primary">One Bhukkadh.</span>
              </h3>
              <p className="mt-1 text-[9px] sm:text-[9.5px] text-slate-500 dark:text-slate-400 font-medium leading-tight max-w-[200px]">
                Discover your favourite food from top restaurants. Fast delivery, live tracking & exclusive offers.
              </p>
            </div>

            {/* Food Graphic Section with Dotted Delivery Route */}
            <div className="relative my-1 py-0.5 flex items-center justify-center">
              {/* Dotted Delivery Route SVG Curve */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 220 110" fill="none">
                <path
                  d="M 190,8 C 200,38 165,72 110,76 C 55,80 32,96 28,105"
                  stroke="#58CC02"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  strokeOpacity="0.45"
                />
                <circle cx="190" cy="8" r="2.5" fill="#58CC02" />
                <circle cx="190" cy="8" r="5" stroke="#58CC02" strokeWidth="1" strokeOpacity="0.5" />
              </svg>

              {/* Floating Leaf 1 */}
              <span className="absolute left-3 top-1 text-[11px] opacity-80 pointer-events-none">🍃</span>
              {/* Floating Leaf 2 */}
              <span className="absolute right-5 bottom-1 text-[9px] opacity-75 pointer-events-none">🌿</span>

              {/* Center Food Dish */}
              <div className="relative z-10 w-[105px] sm:w-[115px]">
                <div className="absolute inset-0 bg-emerald-500/15 rounded-full blur-md -z-10 transform scale-90 translate-y-2" />
                <Image
                  src="/images/bowl.png"
                  alt="Delicious Bhukkadh Meal"
                  width={230}
                  height={230}
                  className="w-full h-auto object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.18)]"
                  priority
                />
              </div>
            </div>

            {/* Store Download Buttons (Apple App Store + Google Play) */}
            <div className="space-y-1.5 mt-auto pt-0.5 w-full max-w-[200px] mx-auto">
              {/* App Store Button */}
              <Link
                href="/download"
                className="w-full bg-[#000000] hover:bg-neutral-900 text-white px-2.5 py-1.5 rounded-[9px] flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all transform active:scale-[0.98] border border-neutral-700/80 group"
              >
                {/* Official Apple Logo SVG */}
                <svg className="w-4 h-4 fill-white shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[6.5px] uppercase tracking-wider text-neutral-300 font-medium">Download on the</div>
                  <div className="text-[10.5px] font-bold text-white tracking-tight mt-0.5">App Store</div>
                </div>
              </Link>

              {/* Google Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.bhukkhad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#000000] hover:bg-neutral-900 text-white px-2.5 py-1.5 rounded-[9px] flex items-center justify-center gap-2 shadow-xs hover:shadow-sm transition-all transform active:scale-[0.98] border border-neutral-700/80 group"
              >
                {/* Official Google Play Multicolor Triangle Logo SVG */}
                <svg className="w-4 h-4 shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-.83V2.645c.164-.326.377-.615.609-.831z" fill="#00e5ff" />
                  <path d="M17.208 8.584L13.792 12l3.416 3.416 4.184-2.378c1.189-.675 1.189-1.78 0-2.455l-4.184-2.399z" fill="#ffd300" />
                  <path d="M3.609 1.814l10.183 10.186 3.416-3.416L6.441.745c-.886-.503-1.99-.344-2.832.239l-.001.001-.001.001.002.828z" fill="#00f076" />
                  <path d="M17.208 15.416L13.792 12 3.609 22.186l.002.828c.842.583 1.946.742 2.832.239l10.765-6.107-.001.001.001-.731z" fill="#ff3838" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[6.5px] uppercase tracking-wider text-neutral-300 font-medium">GET IT ON</div>
                  <div className="text-[10.5px] font-bold text-white tracking-tight mt-0.5">Google Play</div>
                </div>
              </a>
            </div>

            {/* Bottom Value Badges Strip */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[7.5px] sm:text-[8px] font-bold text-emerald-800 dark:text-emerald-300">
              <div className="flex items-center gap-0.5">
                <Zap size={8} className="text-primary fill-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-0.5">
                <ShieldCheck size={8} className="text-primary" />
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-0.5">
                <Percent size={7.5} className="text-primary" />
                <span>Best Offers</span>
              </div>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="w-16 h-[2px] bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-1" />

          </div>
        </div>
      </div>
    </div>
  );
}
