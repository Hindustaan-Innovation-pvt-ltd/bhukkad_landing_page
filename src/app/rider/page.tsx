"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Clock, 
  Banknote, 
  TrendingUp, 
  ShieldCheck,
  Zap,
  MapPin,
  Wallet,
  Coins,
  Users,
  ShoppingBag,
  Star,
  ArrowRight,
  ClipboardList,
  Smartphone,
  Trophy,
  Gift,
  CalendarDays,
  Download
} from "lucide-react";

export default function RiderPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-12 font-sans overflow-x-clip">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-4 pb-0 xl:pt-8 xl:pb-24 flex flex-col xl:flex-row items-center justify-between gap-0 xl:gap-12 relative z-20">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-left z-10 xl:max-w-md">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-start gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6 text-primary font-bold text-sm">
              Delivery Partners
            </div>
            
            <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-slate-900 mb-6 tracking-tight">
              Earn on your <br className="hidden xl:block"/>
              schedule with <br className="hidden xl:block"/>
              <span className="text-primary">Bhukkadh.</span>
            </h1>
            
            <p className="text-slate-500 font-medium text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-0">
              Turn your free time into extra income. Join our fleet of delivery partners and enjoy unmatched flexibility and rewards.
            </p>

            <div className="flex flex-col gap-6 text-left max-w-md mx-0">
              {[
                { icon: <Clock size={24}/>, title: "Flexible hours", desc: "Work when you want, where you want. You are your own boss." },
                { icon: <Banknote size={24}/>, title: "Instant payouts", desc: "Get paid for your deliveries immediately. No waiting around." },
                { icon: <TrendingUp size={24}/>, title: "Performance bonuses", desc: "Earn more during peak hours and hit milestones for extra cash." },
                { icon: <ShieldCheck size={24}/>, title: "Safety coverage", desc: "Comprehensive accidental coverage while you are active on the app." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-primary shrink-0 shadow-sm border border-indigo-100/50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-[15px]">{item.title}</h3>
                    <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center: Image */}
        <div className="flex-1 relative w-full flex justify-center xl:justify-center mt-0 mb-0 xl:my-0 xl:translate-x-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[500px] xl:max-w-[750px] aspect-square"
          >
            {/* Background circular pattern */}
            <div className="absolute inset-4 border border-indigo-100 rounded-full bg-indigo-50/50 -z-10"></div>
            
            <Image 
              src="/images/delivery.png" 
              alt="Delivery Rider" 
              fill 
              className="object-contain drop-shadow-2xl z-10 scale-110 xl:scale-125" 
              priority
            />
          </motion.div>
        </div>

      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px]">
        <div className="bg-white rounded-[40px] py-12 px-8 shadow-sm border border-slate-100 flex flex-col relative overflow-hidden mt-0 xl:mt-0">
          
          <div className="flex items-center justify-center gap-4 mb-16 relative z-10">
            <div className="flex gap-1"><div className="w-2 h-1 rounded-full bg-primary"/><div className="w-2 h-1 rounded-full bg-primary"/></div>
            <h2 className="font-poppins font-black text-2xl text-slate-900 tracking-tight text-center">
              How it Works
            </h2>
            <div className="flex gap-1"><div className="w-2 h-1 rounded-full bg-primary"/><div className="w-2 h-1 rounded-full bg-primary"/></div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 relative z-10">
            
            {/* Step 1 */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-6 relative group w-full">
              <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110 shadow-inner z-10 relative">
                <ClipboardList size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-black text-slate-900 text-[15px] mb-1">1. Sign Up</h3>
                <p className="text-slate-500 text-xs font-medium max-w-[150px]">Create your account in just a few minutes.</p>
              </div>
              <div className="hidden md:block absolute top-10 left-24 right-0 border-t-2 border-dashed border-slate-200 -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-6 relative group w-full">
              <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110 shadow-inner z-10 relative">
                <Smartphone size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-black text-slate-900 text-[15px] mb-1">2. Go Online</h3>
                <p className="text-slate-500 text-xs font-medium max-w-[150px]">Go online and get orders near you.</p>
              </div>
              <div className="hidden md:block absolute top-10 left-24 right-0 border-t-2 border-dashed border-slate-200 -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-6 relative group w-full">
              <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110 shadow-inner z-10 relative">
                <ShoppingBag size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-black text-slate-900 text-[15px] mb-1">3. Deliver Orders</h3>
                <p className="text-slate-500 text-xs font-medium max-w-[150px]">Pick up food and deliver to customers safely.</p>
              </div>
              <div className="hidden md:block absolute top-10 left-24 right-0 border-t-2 border-dashed border-slate-200 -translate-y-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-6 relative group w-full md:w-auto">
              <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110 shadow-inner z-10 relative">
                <Wallet size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-black text-slate-900 text-[15px] mb-1">4. Earn Money</h3>
                <p className="text-slate-500 text-xs font-medium max-w-[150px]">Get paid weekly and enjoy exciting bonuses.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- ENQUIRY FORM SECTION --- */}
      <section className="w-full max-w-[800px] mx-auto px-6 md:px-12 mb-[100px]" id="enquiry-form">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-black/30 border border-slate-200 relative overflow-hidden">
          {/* Decorative subtle blob */}
          <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-10">
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">Rider Enquiry Form</h2>
            <p className="text-slate-500 font-medium">Fill out the details below and our team will get back to you within 24 hours.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name</label>
                <Input required className="h-14 rounded-[16px] bg-slate-50 border-slate-200 px-4" placeholder="e.g. Rahul Sharma" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Mobile Number</label>
                <Input required type="tel" className="h-14 rounded-[16px] bg-slate-50 border-slate-200 px-4" placeholder="+91 99999 99999" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">City</label>
                  <Input required className="h-14 rounded-[16px] bg-slate-50 border-slate-200 px-4" placeholder="e.g. Raipur" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Vehicle Type</label>
                  <select required className="flex h-14 w-full rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none font-medium text-slate-700">
                    <option value="">Select vehicle...</option>
                    <option value="bike">Bike (Motorcycle)</option>
                    <option value="scooty">Scooty / Moped</option>
                    <option value="cycle">Bicycle</option>
                    <option value="none">No Vehicle Yet</option>
                  </select>
                </div>
              </div>

              <Button type="submit" className="w-full h-14 rounded-[16px] text-[15px] font-bold bg-primary hover:bg-primary/90 text-white mt-4 shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
                Submit Enquiry
              </Button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-10 bg-slate-50 rounded-[24px]">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck size={40} />
              </div>
              <h3 className="font-poppins font-black text-2xl text-slate-800 mb-3">Application Received!</h3>
              <p className="text-slate-500 font-medium max-w-sm">
                Thank you for applying. Our onboarding team will contact you within 24 hours to proceed with registration.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 h-12 rounded-[14px] font-bold px-8">
                Submit Another Application
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-[40px] relative z-20">
         <div className="bg-primary rounded-[32px] md:rounded-[40px] p-8 py-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]"></div>

            {/* Left Side */}
            <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <h2 className="font-poppins font-black text-[32px] sm:text-4xl text-white mb-3 tracking-tight leading-[1.15]">
                More Deliveries. More Earnings.
              </h2>
              <p className="text-white/90 font-medium text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Be your own boss and earn on your terms with Bhukkadh.
              </p>
              
              <Button className="w-full sm:w-max h-[48px] md:h-[52px] px-8 bg-white hover:bg-slate-50 text-primary rounded-full font-black text-[15px] shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto lg:mx-0">
                Join Now <ArrowRight size={20} />
              </Button>

              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mt-8 pt-6 md:pt-8 border-t border-white/20 justify-center lg:justify-start">
                <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-slate-900/50 hover:bg-slate-900/80 backdrop-blur-md text-white rounded-[16px] font-bold text-[14px] flex items-center justify-center gap-3 shadow-md hover:scale-[1.03] transition-all border border-white/10">
                  <Smartphone size={18} className="md:w-5 md:h-5" /> Google Play
                </Button>
                <Button className="w-full sm:w-auto h-[48px] md:h-[52px] px-6 bg-slate-900/50 hover:bg-slate-900/80 backdrop-blur-md text-white rounded-[16px] font-bold text-[14px] flex items-center justify-center gap-3 shadow-md hover:scale-[1.03] transition-all border border-white/10">
                  <Download size={18} className="md:w-5 md:h-5" /> App Store
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative z-10 lg:w-[45%] flex flex-col gap-6">
            {[
                { icon: <Trophy size={24} className="text-yellow-500"/>, title: "Top Performers", desc: "Earn up to ₹25,000 extra every month" },
                { icon: <Gift size={24} className="text-orange-500"/>, title: "Referral Bonus", desc: "Refer a friend and get ₹500 bonus" },
                { icon: <CalendarDays size={24} className="text-pink-500"/>, title: "Weekly Incentives", desc: "Complete targets and unlock more rewards" },
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base">{feat.title}</h3>
                    <p className="text-white/80 text-xs font-medium leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

         </div>
      </section>

    </main>
  );
}
