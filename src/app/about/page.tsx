"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Star,
  Users,
  Store,
  Bike,
  MapPin,
  ArrowRight,
  Search,
  ShieldCheck,
  TrendingUp,
  BarChart,
  Megaphone,
  Clock,
  Banknote,
  Trophy,
  CheckCircle2,
  Phone,
  Utensils,
  ShoppingBag,
  Truck,
  HeartHandshake,
  Gem,
  Briefcase,
  ThumbsUp
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-[1600px] mx-auto px-5 sm:px-6 md:px-12 mb-12 xl:mb-[100px] relative z-20 flex flex-col xl:flex-row items-center gap-12 justify-between">
        <div className="flex-1 text-center xl:text-left z-10 xl:max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center justify-center xl:justify-start gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6 text-primary font-bold text-sm">
              Our Story
            </div>
            
            <h1 className="font-poppins font-black text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.15] text-slate-900 mb-6 tracking-tight">
              One Platform.<br />
              Three Communities.<br />
              <span className="text-primary">Endless Possibilities.</span>
            </h1>
            
            <p className="text-slate-600 font-medium text-[15px] md:text-[17px] leading-relaxed max-w-xl mx-auto xl:mx-0 mb-10">
              Bhukkadh is more than a food delivery app. We bring hungry customers, passionate restaurants, and dedicated delivery partners together on one seamless platform—making food ordering easier, restaurant growth faster, and flexible earning opportunities accessible for everyone.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center xl:justify-start mb-12 w-full">
              <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-[15px] shadow-lg transition-transform hover:scale-[1.02]">
                Order Food
              </Button>
              <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-white hover:bg-slate-50 text-primary border-2 border-primary/20 rounded-full font-bold text-[15px] shadow-sm transition-transform hover:scale-[1.02]">
                Partner With Us
              </Button>
              <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-white hover:bg-slate-50 text-primary border-2 border-primary/20 rounded-full font-bold text-[15px] shadow-sm transition-transform hover:scale-[1.02]">
                Ride With Us
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="hidden lg:flex flex-wrap items-center justify-center xl:justify-start gap-4 sm:gap-6 md:gap-10 border-t border-slate-200 pt-8">
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-yellow-500 font-black text-xl"><Star className="fill-yellow-500 w-5 h-5"/> 4.8</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Average Rating</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Users className="text-primary w-5 h-5"/> 10K+</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Store className="text-primary w-5 h-5"/> 500+</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Restaurants</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 font-black text-xl text-slate-900"><Bike className="text-primary w-5 h-5"/> 2K+</div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Delivery Partners</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side illustration */}
        <div className="flex-1 relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex justify-center items-center mt-10 xl:mt-0">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative w-full h-full max-w-[800px] xl:-translate-y-16">
            {/* Desktop Image */}
            <Image src="/images/about.png" alt="About Bhukkadh" fill className="hidden xl:block object-contain drop-shadow-2xl" sizes="(min-width: 1280px) 50vw, 0vw" priority />
            {/* Mobile and Tab Image */}
            <Image src="/images/boy_bowl.png" alt="About Bhukkadh" fill className="block xl:hidden object-contain drop-shadow-2xl" sizes="(max-width: 1279px) 100vw, 0vw" priority />
          </motion.div>
        </div>
      </section>

      {/* 2. BUILT FOR EVERYONE (4-column grid) */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 mb-[80px]">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          <div className="xl:col-span-1 flex flex-col justify-center text-center xl:text-left mb-8 xl:mb-0">
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 tracking-tight mb-4 leading-tight">Built for <br className="hidden xl:block"/>Everyone</h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              One platform connecting customers, restaurants, and delivery partners.
            </p>
          </div>

          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Customers", emoji: "🍔", bg: "bg-[#F3F0FF]", btnColor: "bg-primary text-white", btnText: "Order Food", image: "/images/app.png",
                features: ["Discover nearby restaurants", "Real-time order tracking", "Safe and easy payments", "Exciting offers & discounts"]
              },
              {
                title: "For Restaurants", emoji: "🏪", bg: "bg-[#FFF9E5]", btnColor: "bg-yellow-500 text-white", btnText: "Become Partner", image: "/images/restraunt.png",
                features: ["Increase online orders", "Marketing and visibility", "Analytics and insights", "Grow your business"]
              },
              {
                title: "For Delivery Partners", emoji: "🛵", bg: "bg-[#E6F8F0]", btnColor: "bg-green-500 text-white", btnText: "Start Riding", image: "/images/rider.png",
                features: ["Flexible work schedule", "Weekly payouts", "Performance bonuses", "Insurance & support"]
              }
            ].map((card, idx) => (
              <div key={idx} className={`${card.bg} rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col h-full relative overflow-hidden group`}>
                <div className="flex items-center gap-2 mb-6 z-10">
                  <div className="text-2xl bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">{card.emoji}</div>
                  <h3 className="font-bold text-slate-900 text-lg">{card.title}</h3>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1 z-10">
                  {card.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-slate-700 font-medium text-sm">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-max px-6 h-10 rounded-full font-bold text-sm z-10 shadow-md ${card.btnColor}`}>
                  {card.btnText} <ArrowRight size={16} className="ml-2"/>
                </Button>

                {/* Subtle background image hinting */}
                <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Image src={card.image} alt="decoration" fill className="object-contain" sizes="128px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>







      {/* 6. MORE THAN FOOD DELIVERY */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 mb-[80px]">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-[400px] aspect-[4/3] relative rounded-3xl overflow-hidden shrink-0">
             <Image src="/images/boy_bowl.png" alt="Community" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          
          <div className="flex-1">
            <h2 className="font-poppins font-black text-3xl text-slate-900 mb-4">More Than Food Delivery</h2>
            <p className="text-slate-500 font-medium text-base mb-10 max-w-2xl leading-relaxed">
              Bhukkadh is a community built on trust, support, and growth. Every order you place supports a local restaurant and empowers a delivery partner.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Store/>, title: "Support Local Businesses" },
                { icon: <Briefcase/>, title: "Create Jobs & Opportunities" },
                { icon: <Utensils/>, title: "Better Food For Everyone" },
                { icon: <Users/>, title: "Stronger Local Communities" },
              ].map((ft, idx) => (
                <div key={idx} className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-primary">
                    {ft.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight pr-4">{ft.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 mb-[40px]">
         <div className="bg-primary rounded-[32px] py-10 px-6 sm:px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-2xl text-center lg:text-left w-full">
              <h2 className="font-poppins font-black text-[32px] sm:text-4xl text-white mb-4 tracking-tight leading-[1.15]">
                Join the Bhukkadh Family
              </h2>
              <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Whether you're craving your favorite meal, looking to grow your restaurant, or searching for flexible earning opportunities, Bhukkadh is here for you.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center">
              <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-white hover:bg-slate-50 text-primary rounded-full font-bold text-[14px] md:text-[15px] shadow-xl transition-all hover:scale-105 flex justify-center items-center">
                🍔 Order Food
              </Button>
              <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-white hover:bg-slate-50 text-primary rounded-full font-bold text-[14px] md:text-[15px] shadow-xl transition-all hover:scale-105 flex justify-center items-center">
                🍽️ Partner With Us
              </Button>
              <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-white hover:bg-slate-50 text-primary rounded-full font-bold text-[14px] md:text-[15px] shadow-xl transition-all hover:scale-105 flex justify-center items-center">
                🛵 Ride With Us
              </Button>
            </div>
         </div>
      </section>

    </main>
  );
}
