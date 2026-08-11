"use client";

import React from "react";
import Image from "next/image";
import { Apple, Play, Star, ShieldCheck, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadAppPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans overflow-x-clip">
      
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6 text-primary font-bold text-sm">
            Get the App
          </div>
          
          <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.1] text-slate-900 mb-6 tracking-tight">
            Your Favorite Food, <br/>
            <span className="text-primary">Just a Tap Away.</span>
          </h1>
          
          <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-10">
            Download the Bhukkadh app today and enjoy exclusive discounts, real-time tracking, and lightning-fast delivery from the best restaurants around you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="h-[60px] px-8 bg-black hover:bg-slate-900 text-white rounded-[16px] shadow-lg flex items-center gap-3 transition-transform hover:scale-105">
              <Apple size={28} />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Download on the</div>
                <div className="text-lg font-bold leading-none">App Store</div>
              </div>
            </Button>
            
            <Button className="h-[60px] px-8 bg-primary hover:bg-primary/90 text-white rounded-[16px] shadow-lg flex items-center gap-3 transition-transform hover:scale-105">
              <Play size={26} fill="currentColor" />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-80">Get it on</div>
                <div className="text-lg font-bold leading-none">Google Play</div>
              </div>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8 pt-8 border-t border-slate-200">
             <div className="flex -space-x-2">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i})`, backgroundSize: 'cover' }}></div>
               ))}
             </div>
             <div className="flex flex-col text-left">
                <div className="flex gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <div className="text-xs font-bold text-slate-600">Loved by 1M+ users</div>
             </div>
          </div>
        </div>

        {/* Right side illustration/image */}
        <div className="flex-1 relative w-full h-[400px] md:h-[600px] flex justify-center items-center">
           <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]"></div>
           <Image 
              src="/images/app.png" 
              alt="Bhukkadh Mobile App" 
              width={500} 
              height={700} 
              className="object-contain relative z-10 drop-shadow-2xl hover:-translate-y-4 transition-transform duration-700" 
              priority
           />
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 mb-20 bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100">
         <h2 className="font-poppins font-black text-3xl text-center text-slate-900 mb-12">Why use the app?</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Zap size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
               <p className="text-slate-500 font-medium leading-relaxed">Experience a faster, smoother ordering process optimized for your mobile device.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Heart size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">App-Only Offers</h3>
               <p className="text-slate-500 font-medium leading-relaxed">Get access to exclusive discounts, personalized recommendations, and loyalty rewards.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <ShieldCheck size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Payments</h3>
               <p className="text-slate-500 font-medium leading-relaxed">Save your payment methods securely with a single tap checkout process.</p>
            </div>
         </div>
      </section>
    </main>
  );
}
