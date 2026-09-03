"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { TrendingUp, Wallet, Megaphone, CheckCircle2 } from "lucide-react";

export default function RestaurantRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full flex-1 pt-32 pb-24 dark:bg-transparent">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Pitch */}
        <div>
          <div className="inline-flex items-center gap-2 bg-slate-900 dark:bg-primary text-white px-4 py-2 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
            For Restaurants
          </div>
          <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-slate-800 dark:text-white mb-6 tracking-tight leading-[1.1]">
            Grow your restaurant revenue with <span className="text-primary">Bhukkadh.</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-md">
            Join thousands of restaurants reaching more customers, increasing sales, and growing their brand.
          </p>

          <div className="relative w-full max-w-sm mb-12 aspect-[4/3]">
            <Image 
              src="/images/chef.png" 
              alt="Restaurant Partner" 
              fill 
              className="object-contain drop-shadow-2xl" 
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-[16px] shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary flex-shrink-0">
                <TrendingUp size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">0% Commission for 30 Days</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Keep everything you earn in your first month on the platform.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-[16px] shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary flex-shrink-0">
                <Wallet size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">Weekly Payouts</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Get paid on time, every week. Reliable cash flow for your business.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-[16px] shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary flex-shrink-0">
                <Megaphone size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">Local Marketing Support</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">We heavily invest in local marketing to drive orders to your kitchen.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white dark:bg-slate-800/90 p-8 md:p-10 rounded-[32px] shadow-2xl shadow-primary/5 dark:shadow-none border border-slate-100 dark:border-slate-700/60">
          {!submitted ? (
            <>
              <h2 className="font-poppins font-extrabold text-2xl text-slate-800 dark:text-white mb-2">Register your restaurant</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Takes less than 2 minutes to apply.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Restaurant Name</label>
                    <Input required className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100" placeholder="e.g. Sharma Dhaba" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Owner Name</label>
                    <Input required className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100" placeholder="e.g. Rahul Sharma" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Mobile Number</label>
                  <Input required type="tel" className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100" placeholder="+91 99999 99999" />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">City</label>
                    <Input required className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100" placeholder="e.g. Raipur" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Area / Locality</label>
                    <Input required className="h-12 rounded-[14px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100" placeholder="e.g. Civil Lines" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">FSSAI Status</label>
                  <select required className="flex h-12 w-full rounded-[14px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-700 dark:text-slate-200">
                    <option value="">Select status</option>
                    <option value="yes">Yes, I have an FSSAI license</option>
                    <option value="in_progress">In Progress / Applied</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <Button type="submit" className="w-full h-14 rounded-[16px] text-base font-bold bg-primary hover:bg-primary/90 text-white mt-4 shadow-lg shadow-primary/25">
                  Become a Partner
                </Button>
              </form>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="font-poppins font-extrabold text-2xl text-slate-800 dark:text-white mb-3">Application Received!</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Thank you for applying. Our onboarding team will contact you within 24 hours to proceed with registration.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8 rounded-[14px] font-bold">
                Submit Another Application
              </Button>
            </motion.div>
          )}
        </div>

      </div>
    </main>
  );
}
