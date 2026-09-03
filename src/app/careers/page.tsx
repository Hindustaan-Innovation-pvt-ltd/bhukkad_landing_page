"use client";

import React from "react";
import { ArrowRight, Briefcase, Users, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 dark:bg-transparent pt-28 pb-12 font-sans overflow-x-clip">
      {/* Hero Section */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-16 text-center">
        <div className="inline-flex items-center justify-center gap-2 bg-indigo-50 dark:bg-primary/20 px-4 py-2 rounded-full mb-6 text-primary font-bold text-sm">
          Join Our Team
        </div>
        <h1 className="font-poppins font-black text-[38px] md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 tracking-tight">
          Help Us Build the Future <br className="hidden md:block" />
          of <span className="text-primary">Food Delivery</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 font-medium text-[16px] md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          At Bhukkadh, we're on a mission to connect people with the food they love, support local businesses, and create flexible earning opportunities. We're looking for passionate individuals to join our journey.
        </p>
        <Button className="h-[52px] px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-[15px] shadow-lg transition-transform hover:scale-[1.02]">
          View Open Positions
        </Button>
      </section>

      {/* Why Join Us */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-20">
        <h2 className="font-poppins font-black text-3xl text-center text-slate-900 dark:text-white mb-12">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="w-6 h-6"/>, title: "Fast-Paced Impact", desc: "Work in a dynamic environment where your ideas turn into reality quickly." },
            { icon: <Users className="w-6 h-6"/>, title: "Amazing Team", desc: "Collaborate with talented, diverse, and driven people from all backgrounds." },
            { icon: <Briefcase className="w-6 h-6"/>, title: "Career Growth", desc: "We invest in our people with continuous learning and growth opportunities." },
            { icon: <Heart className="w-6 h-6"/>, title: "Great Benefits", desc: "Enjoy comprehensive health coverage, flexible hours, and free food!" }
          ].map((perk, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800/90 p-6 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-700/60 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-700 flex items-center justify-center text-primary mb-4">
                {perk.icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{perk.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white dark:bg-slate-800/90 rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-700/60">
          <h2 className="font-poppins font-black text-3xl text-slate-900 dark:text-white mb-8">Open Positions</h2>
          
          <div className="space-y-4">
            {[
              { title: "Senior Frontend Engineer", team: "Engineering", location: "Gurugram / Remote", type: "Full-time" },
              { title: "Product Manager - Delivery Experience", team: "Product", location: "Gurugram", type: "Full-time" },
              { title: "City Operations Lead", team: "Operations", location: "Delhi NCR", type: "Full-time" },
              { title: "Social Media Executive", team: "Marketing", location: "Gurugram", type: "Full-time" }
            ].map((job, idx) => (
              <div key={idx} className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 hover:bg-slate-50/50 dark:hover:bg-slate-700/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-primary transition-colors mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded-md">{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">Don't see a role that fits you?</p>
            <a href="mailto:careers@bhukkadh.com" className="text-primary font-bold hover:underline">Send us your resume anyway!</a>
          </div>
        </div>
      </section>
    </main>
  );
}
