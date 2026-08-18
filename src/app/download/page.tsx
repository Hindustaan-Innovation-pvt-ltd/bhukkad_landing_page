"use client";

import React, { useState } from "react";
import { ChevronRight, Bike, Store, ArrowLeft } from "lucide-react";

export default function DownloadPage() {
  const [downloadState, setDownloadState] = useState<'menu' | 'bhukkadh' | 'rider' | 'restaurant'>('menu');

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Blobs for Glassmorphism Background */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
      <div className="absolute bottom-[0%] left-[30%] w-[600px] h-[600px] bg-orange-300/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

      <div className="max-w-5xl w-full bg-white/60 backdrop-blur-2xl rounded-[32px] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/80 relative z-10">
        {downloadState === 'menu' && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Choose Your App</h1>
              <p className="text-slate-500 text-lg md:text-xl">Select the app you want to download to get started</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Bhukkadh */}
              <div 
                onClick={() => setDownloadState('bhukkadh')}
                className="flex-1 bg-white/70 hover:bg-white backdrop-blur-xl cursor-pointer transition-all duration-300 p-8 rounded-[24px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:border-primary/50 group flex flex-col justify-between min-h-[240px]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 rounded-full border-[4px] border-primary"></div>
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-primary transition-colors" size={28} />
                </div>
                <div className="mt-8">
                  <h3 className="text-slate-900 text-2xl font-bold"><span className="text-primary">Bhukkadh</span> App</h3>
                  <p className="text-slate-500 text-base mt-3 leading-relaxed">Order food from your favorite restaurants delivered fast</p>
                </div>
              </div>

              {/* Rider */}
              <div 
                onClick={() => setDownloadState('rider')}
                className="flex-1 bg-white/70 hover:bg-white backdrop-blur-xl cursor-pointer transition-all duration-300 p-8 rounded-[24px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:border-blue-500/50 group flex flex-col justify-between min-h-[240px]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Bike className="text-blue-500" size={28} />
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-blue-500 transition-colors" size={28} />
                </div>
                <div className="mt-8">
                  <h3 className="text-slate-900 text-2xl font-bold"><span className="text-blue-500">Bhukkadh</span> Rider</h3>
                  <p className="text-slate-500 text-base mt-3 leading-relaxed">Register as a rider to deliver food and earn money</p>
                </div>
              </div>

              {/* Restaurant */}
              <div 
                onClick={() => setDownloadState('restaurant')}
                className="flex-1 bg-white/70 hover:bg-white backdrop-blur-xl cursor-pointer transition-all duration-300 p-8 rounded-[24px] border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 hover:border-orange-500/50 group flex flex-col justify-between min-h-[240px]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl border border-slate-100/50 bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Store className="text-orange-500" size={28} />
                  </div>
                  <ChevronRight className="text-slate-400 group-hover:text-orange-500 transition-colors" size={28} />
                </div>
                <div className="mt-8">
                  <h3 className="text-slate-900 text-2xl font-bold"><span className="text-orange-500">Bhukkadh</span> Restaurant</h3>
                  <p className="text-slate-500 text-base mt-3 leading-relaxed">Partner with us to grow your restaurant business</p>
                </div>
              </div>
            </div>
          </>
        )}

        {downloadState !== 'menu' && (
          <div className="py-6 px-2 md:px-8">
            <button onClick={() => setDownloadState('menu')} className="text-slate-500 hover:text-primary flex items-center gap-1 text-sm font-bold mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to options
            </button>
            <h2 className="text-slate-900 font-black text-4xl md:text-5xl mb-6 leading-tight tracking-tight">
              Get <span className="text-primary">Bhukkadh</span> {downloadState === 'rider' ? 'Rider ' : downloadState === 'restaurant' ? 'Restaurant ' : ''}app on
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-xl">
              Download the app today for a 100% mobile experience. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#" className="transition-transform hover:scale-[1.03] active:scale-[0.97]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[60px] w-auto" />
              </a>
              <a href={
                downloadState === 'bhukkadh' ? "https://play.google.com/store/apps/details?id=com.bhukkhad" :
                downloadState === 'rider' ? "https://play.google.com/store/apps/details?id=com.bhukkadh.rider" :
                "https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant"
              } target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-[1.03] active:scale-[0.97]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[60px] w-auto" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
