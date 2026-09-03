"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  ThumbsUp,
  Smartphone
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 dark:bg-transparent pt-28 pb-12 font-sans overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-12 xl:mb-[100px] relative z-20 flex flex-col xl:flex-row items-center gap-12 justify-between">
        <div className="flex-1 text-left z-10 xl:max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center justify-start gap-2 bg-white dark:bg-slate-800/90 border border-primary text-slate-800 dark:text-slate-100 px-4 py-2 rounded-[16px] mb-6 font-bold text-sm shadow-sm">
              <Smartphone size={16} className="text-primary" />
              <span>Our Story & 3 Apps Ecosystem</span>
            </div>
            
            <h1 className="font-poppins font-black text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.15] text-slate-900 dark:text-white mb-6 tracking-tight">
              One Brand.<br />
              Three Dedicated Apps.<br />
              <span className="text-primary">Endless Possibilities.</span>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 font-medium text-[15px] md:text-[17px] leading-relaxed max-w-xl mx-0 mb-10">
              Bhukkadh is more than a food delivery service. Operated by <strong className="text-slate-900 dark:text-white">Hindustaan Innovations Pvt. Ltd.</strong>, our platform powers an integrated 3-app ecosystem: <strong className="text-slate-900 dark:text-white">Bhukkadh</strong> for hungry foodies, <strong className="text-slate-900 dark:text-white">Bhukkadh Partner</strong> for restaurants, and <strong className="text-slate-900 dark:text-white">Bhukkadh Rider</strong> for delivery partners.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-start mb-12 w-full">
              <Button asChild className="w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-[15px] shadow-lg transition-transform hover:scale-[1.02]">
                <Link href="/download">
                  🍔 Download Bhukkadh
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary border-2 border-primary/20 rounded-full font-bold text-[15px] shadow-sm transition-transform hover:scale-[1.02]">
                <Link href="/partner">
                  🏪 Bhukkadh Partner
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto h-[48px] md:h-[52px] px-8 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary border-2 border-primary/20 rounded-full font-bold text-[15px] shadow-sm transition-transform hover:scale-[1.02]">
                <Link href="/rider">
                  🛵 Bhukkadh Rider
                </Link>
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="hidden lg:flex flex-wrap items-center justify-center xl:justify-start gap-4 sm:gap-6 md:gap-10 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-yellow-500 font-black text-xl"><Star className="fill-yellow-500 w-5 h-5"/> 4.8</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Average Rating</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 font-black text-xl text-slate-900 dark:text-white"><Users className="text-primary w-5 h-5"/> 10K+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Happy Customers</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 font-black text-xl text-slate-900 dark:text-white"><Store className="text-primary w-5 h-5"/> 500+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Restaurants</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2 font-black text-xl text-slate-900 dark:text-white"><Bike className="text-primary w-5 h-5"/> 2K+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Delivery Partners</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side illustration */}
        <div className="flex-1 relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex justify-center items-center mt-10 xl:mt-0">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative w-full h-full max-w-[800px] xl:-translate-y-16">
            {/* Desktop Image */}
            <Image src="/images/about.png" alt="About Bhukkadh" width={800} height={800} className="w-full h-full absolute inset-0 hidden xl:block object-contain drop-shadow-2xl" sizes="(min-width: 1280px) 50vw, 0vw" priority />
            {/* Mobile and Tab Image */}
            <Image src="/images/boy_bowl.png" alt="About Bhukkadh" width={800} height={800} className="w-full h-full absolute inset-0 block xl:hidden object-contain drop-shadow-2xl" sizes="(max-width: 1279px) 100vw, 0vw" priority />
          </motion.div>
        </div>
      </section>

      {/* 2. BUILT FOR EVERYONE (3 Apps Section) */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[80px]">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          <div className="xl:col-span-1 flex flex-col justify-center text-center xl:text-left mb-8 xl:mb-0">
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
              Our 3 Apps <br className="hidden xl:block"/>Ecosystem
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base leading-relaxed">
              Three custom-crafted mobile applications seamlessly connecting customers, restaurants, and delivery riders.
            </p>
          </div>

          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Bhukkadh App", subtitle: "For Customers", emoji: "🍔", bg: "bg-[#F3F0FF] dark:bg-indigo-950/40 dark:border-indigo-900/40", btnColor: "bg-primary text-white", btnText: "Download App", link: "/download", image: "/images/app.png",
                features: ["Discover nearby restaurants", "Real-time order tracking", "Safe and easy payments", "Exciting offers & discounts"]
              },
              {
                title: "Bhukkadh Partner", subtitle: "For Restaurants", emoji: "🏪", bg: "bg-[#FFF9E5] dark:bg-amber-950/40 dark:border-amber-900/40", btnColor: "bg-yellow-500 text-white", btnText: "Partner App", link: "/partner", image: "/images/restraunt.png",
                features: ["Real-time order management", "Menu & pricing control", "Business analytics & insights", "Grow your revenue"]
              },
              {
                title: "Bhukkadh Rider", subtitle: "For Delivery Fleet", emoji: "🛵", bg: "bg-[#E6F8F0] dark:bg-emerald-950/40 dark:border-emerald-900/40", btnColor: "bg-green-500 text-white", btnText: "Rider App", link: "/rider", image: "/images/rider.png",
                features: ["Flexible delivery shifts", "Instant trip notifications", "Weekly reliable payouts", "Insurance & rider support"]
              }
            ].map((card, idx) => (
              <div key={idx} className={`${card.bg} rounded-3xl p-6 shadow-sm border border-black/5 flex flex-col h-full relative overflow-hidden group`}>
                <div className="flex items-center gap-3 mb-4 z-10">
                  <div className="text-2xl bg-white dark:bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center shadow-sm">{card.emoji}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{card.title}</h3>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{card.subtitle}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1 z-10">
                  {card.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-slate-700 dark:text-slate-200 font-medium text-sm">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-slate-200 shrink-0"></div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className={`w-max px-6 h-10 rounded-full font-bold text-sm z-10 shadow-md ${card.btnColor}`}>
                  <Link href={card.link}>
                    {card.btnText} <ArrowRight size={16} className="ml-2"/>
                  </Link>
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

      {/* 3. MORE THAN FOOD DELIVERY */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[80px]">
        <div className="bg-white dark:bg-slate-800/90 rounded-4xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-[400px] aspect-[4/3] relative rounded-3xl overflow-hidden shrink-0">
             <Image src="/images/boy_bowl.png" alt="Community" width={600} height={450} className="w-full h-full absolute inset-0 object-cover" sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          
          <div className="flex-1">
            <h2 className="font-poppins font-black text-3xl text-slate-900 dark:text-white mb-4">More Than Food Delivery</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-base mb-10 max-w-2xl leading-relaxed">
              Bhukkadh is an interconnected community built on trust, support, and growth. Powered by <strong className="text-slate-800 dark:text-slate-200">Hindustaan Innovations Pvt. Ltd.</strong>, every order placed on Bhukkadh empowers a local restaurant and supports a hardworking delivery rider.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Store/>, title: "Support Local Businesses" },
                { icon: <Briefcase/>, title: "Create Jobs & Opportunities" },
                { icon: <Utensils/>, title: "Better Food For Everyone" },
                { icon: <Users/>, title: "Stronger Local Communities" },
              ].map((ft, idx) => (
                <div key={idx} className="flex flex-col items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-700 flex items-center justify-center text-primary">
                    {ft.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight pr-4">{ft.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA BANNER */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[40px]">
         <div className="bg-primary rounded-4xl py-10 px-6 sm:px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-2xl text-center lg:text-left w-full">
              <h2 className="font-poppins font-black text-[32px] sm:text-4xl text-white mb-4 tracking-tight leading-[1.15]">
                Join the Bhukkadh Family
              </h2>
              <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Whether you're ordering your favorite meal on <strong className="text-white">Bhukkadh</strong>, growing your kitchen with <strong className="text-white">Bhukkadh Partner</strong>, or delivering smiles with <strong className="text-white">Bhukkadh Rider</strong>, we are here for you.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center">
              <Button asChild className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-white hover:bg-slate-50 text-primary rounded-full font-bold text-[14px] md:text-[15px] shadow-xl transition-all hover:scale-105 flex justify-center items-center">
                <Link href="/download">
                  🍔 Bhukkadh App
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-white hover:bg-slate-50 text-primary rounded-full font-bold text-[14px] md:text-[15px] shadow-xl transition-all hover:scale-105 flex justify-center items-center">
                <Link href="/partner">
                  🍽️ Bhukkadh Partner
                </Link>
              </Button>
              <Button asChild className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-white hover:bg-slate-50 text-primary rounded-full font-bold text-[14px] md:text-[15px] shadow-xl transition-all hover:scale-105 flex justify-center items-center">
                <Link href="/rider">
                  🛵 Bhukkadh Rider
                </Link>
              </Button>
            </div>
         </div>
      </section>

    </main>
  );
}
