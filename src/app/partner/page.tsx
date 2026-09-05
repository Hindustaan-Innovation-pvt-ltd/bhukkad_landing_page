"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle2, 
  Percent, 
  Wallet, 
  Megaphone, 
  TrendingUp,
  Store,
  ShoppingBag,
  MapPin,
  Star,
  Users,
  Headset,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  Download,
  Loader2,
  AlertCircle
} from "lucide-react";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    phoneNumber: "",
    city: "",
    area: "",
    fssaiStatus: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_URL || "https://apibhukkad.allindiahub.com";

      const response = await fetch(`${apiBase}/api/restaurants/onboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantName: formData.restaurantName.trim(),
          ownerName: formData.ownerName.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          city: formData.city.trim(),
          area: formData.area.trim(),
          address: formData.area.trim(),
          fssaiStatus: formData.fssaiStatus,
        }),
      });

      let data: any = {};
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "Backend endpoint not found. Please ensure the backend changes are deployed to the server."
              : `Server error (${response.status}). Please try again later.`
          );
        }
      }

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message || data.errors?.[0] || "Failed to submit enquiry. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Partner enquiry submission failed:", err);
      setErrorMessage(
        err.message || "Failed to submit enquiry. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      restaurantName: "",
      ownerName: "",
      phoneNumber: "",
      city: "",
      area: "",
      fssaiStatus: "",
    });
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-transparent pt-28 pb-12 font-sans overflow-x-clip">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[80px] relative z-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 text-left z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-start gap-2 bg-white dark:bg-slate-800/90 border border-primary text-slate-800 dark:text-slate-100 px-4 py-2 rounded-[16px] mb-6 font-bold text-sm shadow-sm">
              Restaurant Partners
            </div>
            
            <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-[64px] leading-[1.1] text-slate-900 dark:text-white mb-6 tracking-tight">
              Grow your <br className="hidden lg:block"/>
              restaurant revenue <br className="hidden lg:block"/>
              with <span className="text-primary">Bhukkadh.</span>
            </h1>
            
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg md:text-xl mb-10 max-w-xl mx-0 leading-relaxed">
              Join thousands of restaurants driving more orders and reaching new customers every single day.
            </p>

            <div className="flex flex-wrap justify-start gap-6 font-bold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary fill-primary/20" size={24} />
                <span>More Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary fill-primary/20" size={24} />
                <span>More Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary fill-primary/20" size={24} />
                <span>More Growth</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative w-full max-w-2xl lg:max-w-none flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px]"
          >
            <Image 
              src="/images/chef.png" 
              alt="Restaurant Partner" 
              fill 
              className="object-contain drop-shadow-2xl z-10" 
              priority
            />
            {/* Background blur decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* --- COMBINED FEATURES & ENQUIRY FORM SECTION --- */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[100px]" id="enquiry-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Features 2x2 Grid */}
          <div className="flex flex-col">
            <div className="mb-10">
              <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">Why Partner With Us?</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium mt-3 text-lg">Join thousands of restaurants growing their business.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Percent size={28}/>, title: "0% Commission", subtitle: "First 30 days", desc: "Keep everything you earn in your first month." },
                { icon: <Wallet size={28}/>, title: "Weekly Payouts", subtitle: "On time, every time", desc: "Reliable cash flow directly to your bank account." },
                { icon: <Megaphone size={28}/>, title: "Marketing Support", subtitle: "We promote, you grow", desc: "Get featured and reach more hungry customers." },
                { icon: <TrendingUp size={28}/>, title: "Business Growth", subtitle: "Scale your restaurant", desc: "Increase orders, visibility and build long-term loyal customers." },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col items-start gap-4 p-2">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 dark:text-white text-lg">{feature.title}</h3>
                    <p className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-1">{feature.subtitle}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Enquiry Form */}
          <div className="bg-white dark:bg-slate-800/90 p-8 md:p-10 rounded-[40px] shadow-2xl shadow-black/30 border border-slate-200 dark:border-slate-700/60 relative overflow-hidden">
            {/* Decorative subtle blob */}
            <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-indigo-50/50 dark:bg-indigo-950/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="text-center mb-10">
              <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 dark:text-white mb-4 tracking-tight">Partner Enquiry Form</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Fill out the details below and our team will get back to you within 24 hours.</p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-[16px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-600 dark:text-red-400 text-sm text-left">
                <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Restaurant Name</label>
                    <Input
                      required
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleChange}
                      disabled={loading}
                      className="h-14 rounded-[16px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 px-4"
                      placeholder="e.g. Sharma Dhaba"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Owner Name</label>
                    <Input
                      required
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      disabled={loading}
                      className="h-14 rounded-[16px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 px-4"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Mobile Number</label>
                  <Input
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    disabled={loading}
                    className="h-14 rounded-[16px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 px-4"
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">City</label>
                    <Input
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={loading}
                      className="h-14 rounded-[16px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 px-4"
                      placeholder="e.g. Raipur"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Area / Locality</label>
                    <Input
                      required
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      disabled={loading}
                      className="h-14 rounded-[16px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 px-4"
                      placeholder="e.g. Civil Lines"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">FSSAI Status</label>
                  <select
                    required
                    name="fssaiStatus"
                    value={formData.fssaiStatus}
                    onChange={handleChange}
                    disabled={loading}
                    className="flex h-14 w-full rounded-[16px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none font-medium text-slate-700 dark:text-slate-200"
                  >
                    <option value="">Select status...</option>
                    <option value="yes">Yes, I have an FSSAI license</option>
                    <option value="in_progress">In Progress / Applied</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-[16px] text-[15px] font-bold bg-primary hover:bg-primary/90 text-white mt-4 shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-10 bg-slate-50 dark:bg-slate-900/60 rounded-[24px]">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-poppins font-black text-2xl text-slate-800 dark:text-white mb-3">Application Received!</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
                  Thank you for applying. Our onboarding team will contact you within 24 hours to proceed with registration.
                </p>
                <Button onClick={handleReset} variant="outline" className="mt-8 h-12 rounded-[14px] font-bold px-8">
                  Submit Another Application
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* --- WHY PARTNER WITH BHUKKADH? --- */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[100px]">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex gap-1"><div className="w-2 h-1 rounded-full bg-primary"/><div className="w-2 h-1 rounded-full bg-primary"/></div>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight text-center">
            Why Partner with Bhukkadh?
          </h2>
          <div className="flex gap-1"><div className="w-2 h-1 rounded-full bg-primary"/><div className="w-2 h-1 rounded-full bg-primary"/></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Users size={40}/>, title: "Reach More Customers", desc: "Get discovered by thousands of food lovers." },
            { icon: <TrendingUp size={40}/>, title: "Boost Your Revenue", desc: "More visibility leads to more orders." },
            { icon: <Headset size={40}/>, title: "24/7 Partner Support", desc: "Our team is always here to help you." },
            { icon: <ShieldCheck size={40}/>, title: "Trusted & Secure", desc: "Safe payments and secure business experience." },
          ].map((card, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800/90 rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 dark:border-slate-700/60 hover:-translate-y-2 transition-transform">
              <div className="text-primary mb-6">
                {card.icon}
              </div>
              <h3 className="font-black text-slate-900 dark:text-white text-lg mb-3">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* --- BOTTOM CTA --- */}
      <section className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-[40px] relative z-20">
         <div className="bg-primary rounded-[32px] md:rounded-[40px] p-8 py-10 md:p-14 text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px]"></div>

            {/* Food Decor Images (using what's available) */}
            <div className="absolute bottom-[-20%] left-[-5%] w-48 h-48 lg:w-64 lg:h-64 opacity-30 lg:opacity-100 rotate-12">
                <Image src="/images/bowl.png" alt="Food" fill className="object-contain drop-shadow-2xl" />
            </div>

            <h2 className="font-poppins font-black text-[32px] sm:text-4xl md:text-5xl text-white mb-4 relative z-10 tracking-tight max-w-2xl mx-auto leading-[1.15]">
              Let's build something delicious together!
            </h2>
            <p className="text-white/90 font-medium text-base sm:text-lg md:text-xl mb-10 relative z-10 max-w-md mx-auto">
              More visibility. More orders. More growth.
            </p>
            
            <div className="relative z-10 flex flex-col items-center w-full sm:w-auto gap-6">
              <Button asChild className="w-full sm:w-max h-[48px] md:h-[52px] px-8 bg-white hover:bg-slate-50 text-primary rounded-full font-black text-[15px] shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <a href="https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant" target="_blank" rel="noopener noreferrer">
                  Become a Partner <ArrowRight size={20} />
                </a>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3 sm:gap-4 mt-2 pt-6 border-t border-white/20">
                <a
                  href="https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-[1.03] active:scale-[0.97] inline-block shadow-md rounded-[12px] overflow-hidden"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-[48px] w-auto object-contain"
                  />
                </a>
                <Link
                  href="/download"
                  className="transition-transform hover:scale-[1.03] active:scale-[0.97] inline-block shadow-md rounded-[12px] overflow-hidden"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-[48px] w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
         </div>
      </section>

    </main>
  );
}
