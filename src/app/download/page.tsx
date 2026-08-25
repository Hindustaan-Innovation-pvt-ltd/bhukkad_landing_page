"use client";

import React, { useState } from "react";
import { ChevronRight, Bike, Store, ArrowLeft, Smartphone } from "lucide-react";

export default function DownloadPage() {
  const [downloadState, setDownloadState] = useState<'menu' | 'bhukkadh' | 'rider' | 'partner'>('menu');

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden font-sans">
      {/* Decorative Blobs for Glassmorphism Background */}
      <div className="absolute top-[10%] left-[15%] w-125 h-125 bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div className="absolute top-[20%] right-[10%] w-100 h-100 bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div className="absolute bottom-[0%] left-[30%] w-150 h-150 bg-orange-300/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

      <div className="max-w-5xl w-full bg-white/60 backdrop-blur-2xl rounded-4xl p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 relative z-10">
        {downloadState === 'menu' && (
          <>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-4 text-primary font-bold text-sm">
                <Smartphone size={16} />
                <span>Our 3 Apps Ecosystem</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Choose Your <span className="text-primary">Bhukkadh</span> App
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto">
                Download the dedicated application built specifically for your role in our food community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bhukkadh Customer */}
              <div
                onClick={() => setDownloadState('bhukkadh')}
                className="bg-white/70 hover:bg-white backdrop-blur-xl cursor-pointer transition-all duration-300 p-8 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:border-primary/50 group flex flex-col justify-between min-h-65"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-full border-4 border-primary"></div>
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-primary transition-colors" size={28} />
                </div>
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">For Food Lovers</span>
                  <h3 className="text-slate-900 text-2xl font-bold mt-1">Bhukkadh App</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">Order food from your favorite restaurants delivered fast</p>
                </div>
              </div>

              {/* Bhukkadh Partner */}
              <div
                onClick={() => setDownloadState('partner')}
                className="bg-white/70 hover:bg-white backdrop-blur-xl cursor-pointer transition-all duration-300 p-8 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:border-orange-500/50 group flex flex-col justify-between min-h-65"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Store className="text-orange-500" size={28} />
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-orange-500 transition-colors" size={28} />
                </div>
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-500">For Restaurants</span>
                  <h3 className="text-slate-900 text-2xl font-bold mt-1">Bhukkadh Partner</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">Manage orders, update menus, and grow your restaurant business</p>
                </div>
              </div>

              {/* Bhukkadh Rider */}
              <div
                onClick={() => setDownloadState('rider')}
                className="bg-white/70 hover:bg-white backdrop-blur-xl cursor-pointer transition-all duration-300 p-8 rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:border-blue-500/50 group flex flex-col justify-between min-h-65"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Bike className="text-blue-500" size={28} />
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-blue-500 transition-colors" size={28} />
                </div>
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500">For Delivery Fleet</span>
                  <h3 className="text-slate-900 text-2xl font-bold mt-1">Bhukkadh Rider</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">Accept orders, navigate seamlessly, and earn on your schedule</p>
                </div>
              </div>
            </div>
          </>
        )}

        {downloadState !== 'menu' && (
          <div className="py-6 px-2 md:px-8">
            <button onClick={() => setDownloadState('menu')} className="text-slate-500 hover:text-primary flex items-center gap-1 text-sm font-bold mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to all apps
            </button>
            <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-6 leading-tight tracking-tight">
              Get <span className="text-primary">
                {downloadState === 'bhukkadh' ? 'Bhukkadh' : downloadState === 'partner' ? 'Bhukkadh Partner' : 'Bhukkadh Rider'}
              </span> App
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-xl">
              Download the official mobile app today on Android and iOS devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#" className="transition-transform hover:scale-[1.03] active:scale-[0.97]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-15 w-auto" />
              </a>
              <a href={
                downloadState === 'bhukkadh' ? "https://play.google.com/store/apps/details?id=com.bhukkhad" :
                  downloadState === 'rider' ? "https://play.google.com/store/apps/details?id=com.bhukkadh.rider" :
                    "https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant"
              } target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-[1.03] active:scale-[0.97]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-15 w-auto" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
