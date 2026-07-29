"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChefHat, MapPin, Zap, ShieldCheck, Star, BadgePercent,
  Navigation, Clock, Bike, Store, ArrowRight, Heart, ShoppingBag, Compass, Sparkles, Tag, Timer,
  Info, Download, Users, FileText, MessageCircle, Utensils, TrendingUp, Newspaper, Briefcase, CheckCircle2, User, Wallet,
  BarChart, Banknote, Flame
} from "lucide-react";

export default function LandingPage() {
  const { scrollY } = useScroll();

  // Parallax Transforms
  const scooterX = useTransform(scrollY, [0, 800], [0, 350]);
  const scooterRotate = useTransform(scrollY, [0, 800], [0, 3]);
  const phoneY = useTransform(scrollY, [0, 800], [0, -30]);
  const bowlRotate = useTransform(scrollY, [0, 800], [5, 8]);
  const glowScale = useTransform(scrollY, [0, 800], [1, 1.15]);

  // Spring smoothing
  const springScooterX = useSpring(scooterX, { stiffness: 100, damping: 30 });
  const springScooterRotate = useSpring(scooterRotate, { stiffness: 100, damping: 30 });
  const springPhoneY = useSpring(phoneY, { stiffness: 100, damping: 30 });
  const springBowlRotate = useSpring(bowlRotate, { stiffness: 100, damping: 30 });
  const springGlowScale = useSpring(glowScale, { stiffness: 100, damping: 30 });

  return (
    <main className="w-full overflow-x-clip flex-1">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-auto lg:min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-12 pt-24 md:pt-28 pb-4 lg:pt-40 lg:pb-20 z-10">

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-[5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/[0.03] blur-[100px] md:blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/[0.04] blur-[80px] md:blur-[100px] rounded-full" />
        </div>

        {/* TOP TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full mt-2 md:mt-6 lg:mt-0 flex flex-col items-start text-left z-20 order-1 lg:col-start-1 lg:row-start-1 lg:self-end pt-4 lg:pt-0"
        >
          {/* Badge */}
          <div className="inline-flex self-start items-center gap-1.5 md:gap-2 bg-primary/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8 shadow-sm">
            <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
            <span className="text-primary font-bold text-[11px] sm:text-xs md:text-sm tracking-wide">Food. Delivered. Loved.</span>
          </div>

          {/* Headline */}
          <h1 className="font-poppins font-black text-[26px] sm:text-[32px] md:text-[42px] lg:text-[64px] xl:text-[72px] leading-[1.05] mb-6 text-slate-900 tracking-tight">
            Your next favorite meal is just a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">tap away.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-slate-500 mb-0 lg:mb-10 max-w-[580px] leading-relaxed font-medium">
            Discover nearby restaurants, track every order live, and enjoy fresh food delivered in minutes.
          </p>
        </motion.div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="w-full flex flex-col items-start text-left z-20 order-3 lg:col-start-1 lg:row-start-2 lg:self-start"
        >
          {/* Perks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 mb-12 w-full mt-0 lg:mt-0">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.96 }}
              className="w-full flex flex-row md:flex-col lg:flex-row xl:flex-col items-center md:items-start lg:items-start text-left md:text-left lg:text-left gap-4 lg:bg-white/70 lg:backdrop-blur-xl lg:border lg:border-slate-100 lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:rounded-[24px] lg:p-6 lg:hover:shadow-[0_0_25px_rgba(88,204,2,0.15)] lg:hover:border-primary/30 transition-all duration-300 h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 lg:bg-gradient-to-br lg:from-primary lg:to-accent flex items-center justify-center text-primary lg:text-white lg:shadow-md lg:shadow-primary/20 shrink-0">
                <ShoppingBag size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col items-start md:items-start lg:items-start">
                <h4 className="font-bold text-slate-900 text-[14px] md:text-[15px] lg:text-[16px] mb-0.5 md:mb-1">Wide Choices</h4>
                <p className="text-slate-500 text-[12px] md:text-[13px] leading-snug font-medium">From local eats to<br className="hidden md:block lg:hidden xl:block" /> top restaurants</p>
              </div>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.96 }}
              className="w-full flex flex-row md:flex-col lg:flex-row xl:flex-col items-center md:items-start lg:items-start text-left md:text-left lg:text-left gap-4 lg:bg-white/70 lg:backdrop-blur-xl lg:border lg:border-slate-100 lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:rounded-[24px] lg:p-6 lg:hover:shadow-[0_0_25px_rgba(88,204,2,0.15)] lg:hover:border-primary/30 transition-all duration-300 h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 lg:bg-gradient-to-br lg:from-primary lg:to-accent flex items-center justify-center text-primary lg:text-white lg:shadow-md lg:shadow-primary/20 shrink-0">
                <Zap size={20} strokeWidth={2.5} className="lg:fill-white" />
              </div>
              <div className="flex flex-col items-start md:items-start lg:items-start">
                <h4 className="font-bold text-slate-900 text-[14px] md:text-[15px] lg:text-[16px] mb-0.5 md:mb-1">Super Fast</h4>
                <p className="text-slate-500 text-[12px] md:text-[13px] leading-snug font-medium">Quick delivery,<br className="hidden md:block lg:hidden xl:block" /> always on time</p>
              </div>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.96 }}
              className="w-full flex flex-row md:flex-col lg:flex-row xl:flex-col items-center md:items-start lg:items-start text-left md:text-left lg:text-left gap-4 lg:bg-white/70 lg:backdrop-blur-xl lg:border lg:border-slate-100 lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:rounded-[24px] lg:p-6 lg:hover:shadow-[0_0_25px_rgba(88,204,2,0.15)] lg:hover:border-primary/30 transition-all duration-300 h-full cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 lg:bg-gradient-to-br lg:from-primary lg:to-accent flex items-center justify-center text-primary lg:text-white lg:shadow-md lg:shadow-primary/20 shrink-0">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col items-start md:items-start lg:items-start">
                <h4 className="font-bold text-slate-900 text-[14px] md:text-[15px] lg:text-[16px] mb-0.5 md:mb-1">Safe & Secure</h4>
                <p className="text-slate-500 text-[12px] md:text-[13px] leading-snug font-medium">Your safety and<br className="hidden md:block lg:hidden xl:block" /> trust come first</p>
              </div>
            </motion.div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-start gap-3 md:gap-4 w-full">
            <Button suppressHydrationWarning className="h-[48px] md:h-[56px] px-6 md:px-8 bg-primary hover:bg-primary/90 text-white rounded-[16px] font-bold text-[14px] md:text-[16px] shadow-[0_0_20px_rgba(88,204,2,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-auto">
              Order Now <ArrowRight size={18} strokeWidth={2.5} className="ml-2" />
            </Button>
            <Button suppressHydrationWarning variant="outline" className="group h-[48px] md:h-[56px] px-6 md:px-8 bg-white lg:bg-white lg:border-2 border border-slate-200 lg:border-primary/20 text-slate-800 hover:border-primary/50 hover:bg-slate-50 rounded-[16px] font-bold text-[14px] md:text-[16px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 md:gap-3 w-auto lg:shadow-sm">
              Explore Restaurants
              <Compass size={18} strokeWidth={2.5} className="text-primary group-hover:rotate-45 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Illustration Composition - ALL SCREENS) */}
        <div className="flex w-full relative items-center justify-center -mt-8 -mb-16 md:-mt-12 md:-mb-24 lg:my-0 order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:order-none z-20">

          {/* Subtle Background Radial Glow */}
          <motion.div
            style={{ scale: springGlowScale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px] bg-primary/10 blur-[40px] sm:blur-[60px] lg:blur-[80px] rounded-full z-0"
          />

          {/* ANIMATED VERSION FOR ALL SCREENS */}
          <div className="flex flex-1 relative w-full max-w-[450px] sm:max-w-[550px] lg:max-w-none mx-auto aspect-[3/4] lg:aspect-auto lg:h-[750px] items-center justify-center">
            <div className="relative w-full h-full max-w-[700px] z-10 flex items-center justify-center">

              {/* The Phone (Mobile.png) - Center overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring", bounce: 0.3 }}
                style={{ y: springPhoneY }}
                className="absolute z-20 top-1/2 left-1/2 -translate-x-[60%] -translate-y-1/2 w-[60%] aspect-[1/2]"
              >
                <Image
                  src="/images/mobile.png"
                  alt="Bhukkadh App"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_30px_40px_rgba(88,204,2,0.25)]"
                />
              </motion.div>

              {/* The Rider (Hero.svg) - MOBILE/TABLET (No Scroll Animation) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.2 }}
                className="lg:hidden absolute z-30 bottom-[12%] right-[-2%] w-[85%] sm:w-[80%] aspect-[4/3]"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/images/Hero.png"
                    alt="Bhukkadh Delivery Rider"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 0vw"
                    className="object-contain drop-shadow-xl"
                  />
                </motion.div>
              </motion.div>

              {/* The Rider (Hero.png) - DESKTOP (With Scroll Animation) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.2 }}
                style={{ x: springScooterX, rotate: springScooterRotate }}
                className="hidden lg:block absolute z-30 bottom-[10%] right-[-15%] w-[85%] aspect-[4/3]"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/images/Hero.png"
                    alt="Bhukkadh Delivery Rider"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 0vw"
                    className="object-contain drop-shadow-xl"
                  />
                </motion.div>
              </motion.div>

              {/* The Bowl (bowl.png) - Foreground left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ rotate: springBowlRotate }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
                className="absolute z-40 bottom-[15%] left-[5%] w-[35%] aspect-square cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/images/bowl.png"
                    alt="Delicious Food Bowl"
                    fill
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* --- PLATFORM NOTICE SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-2 pb-8 lg:py-8 relative z-20"
      >
        <div className="bg-primary/5 border border-primary/20 rounded-[24px] p-6 lg:p-8 flex flex-col md:flex-row items-start gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Info size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="font-poppins font-bold text-[18px] md:text-xl text-slate-800 mb-2">Ordering Happens in the Mobile App</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-[14px] md:text-[15px] lg:text-[16px] text-left">
              Bhukkadh's website is designed to introduce our platform, build trust, and help customers, restaurants, and delivery partners connect with us. All food ordering takes place exclusively through the Bhukkadh mobile application.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- WHY BHUKKADH SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 relative z-20"
      >
        <div className="text-center mb-12">
          <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-slate-800 mb-4 tracking-tight">
            Why Bhukkadh?
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Bhukkadh is the official digital front door of our platform. It isn't a place to order food on the web. Instead, it helps customers discover the app, restaurants join the platform, and riders start earning.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Download size={24} strokeWidth={2.5} />
            </div>
            <h3 className="font-poppins font-bold text-[17px] md:text-xl text-slate-800 mb-2 md:mb-3">Drive App Installs</h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-medium text-left leading-relaxed">Every section of the website encourages users to download the Bhukkadh mobile app.</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Store size={24} strokeWidth={2.5} />
            </div>
            <h3 className="font-poppins font-bold text-[17px] md:text-xl text-slate-800 mb-2 md:mb-3">Recruit Restaurants</h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-medium text-left leading-relaxed">Restaurant owners can quickly register and get onboarded with Bhukkadh.</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Bike size={24} strokeWidth={2.5} />
            </div>
            <h3 className="font-poppins font-bold text-[17px] md:text-xl text-slate-800 mb-2 md:mb-3">Recruit Riders</h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-medium text-left leading-relaxed">Delivery partners can explore flexible earning opportunities and register easily.</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Users size={24} strokeWidth={2.5} />
            </div>
            <h3 className="font-poppins font-bold text-[17px] md:text-xl text-slate-800 mb-2 md:mb-3">Build Trust</h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-medium text-left leading-relaxed">Learn about our mission, platform, achievements, and growing community.</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary mb-6">
              <FileText size={24} strokeWidth={2.5} />
            </div>
            <h3 className="font-poppins font-bold text-[17px] md:text-xl text-slate-800 mb-2 md:mb-3">Compliance</h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-medium text-left leading-relaxed">Access FSSAI information, refund policy, grievance redressal, and legal resources.</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="bg-white rounded-[24px] p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-[16px] bg-primary/10 flex items-center justify-center text-primary mb-6">
              <MessageCircle size={24} strokeWidth={2.5} />
            </div>
            <h3 className="font-poppins font-bold text-[17px] md:text-xl text-slate-800 mb-2 md:mb-3">Customer Support</h3>
            <p className="text-slate-500 text-[13px] md:text-[14px] font-medium text-left leading-relaxed">Reach us anytime through Contact, Email, or WhatsApp support.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* --- BUILT FOR EVERYONE SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 relative z-20"
      >
        <div className="text-center mb-12">
          <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-slate-800 mb-4 tracking-tight">
            Built for Everyone
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Bhukkadh serves different audiences with dedicated experiences designed for their needs.
          </p>
        </div>

        {/* Photo Cards Grid (Replaces original 6 white cards) */}

        {/* Photo Cards Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {/* Customer Card */}
          {/* Customer Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -8 }}
            className="relative w-full h-[420px] rounded-[28px] bg-white border border-slate-100 overflow-hidden pt-8 px-7 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center text-primary bg-white">
                  <User size={14} strokeWidth={2.5} />
                </div>
                <span className="text-primary font-semibold text-[13px]">For Customers</span>
              </div>

              <h3 className="font-poppins text-[32px] font-black text-slate-900 mb-3 tracking-tight leading-[1.1] max-w-[200px]">
                Crave it.<br />Get it.
              </h3>

              <p className="font-medium text-[14px] text-slate-500 leading-relaxed max-w-[220px] lg:max-w-[180px] xl:max-w-[220px] text-left">
                Discover top restaurants, exciting offers, and get your favorite food delivered to your doorstep.
              </p>

              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:bg-primary/90 transition-colors mt-auto mb-2">
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 w-[45%] md:w-[40%] lg:w-[45%] xl:w-[55%] h-[50%] lg:h-[50%] xl:h-[60%] z-[5] flex items-end justify-end pointer-events-none">
              <Image src="/images/customer.png" alt="Customer" width={300} height={300} className="w-full h-full object-contain object-bottom origin-bottom-right group-hover:scale-[1.03] transition-transform duration-300" unoptimized />
            </div>
          </motion.div>

          {/* Restaurant Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -8 }}
            className="relative w-full h-[420px] rounded-[28px] bg-white border border-slate-100 overflow-hidden pt-8 px-7 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center text-primary bg-white">
                  <Store size={14} strokeWidth={2.5} />
                </div>
                <span className="text-primary font-semibold text-[13px]">For Restaurants</span>
              </div>

              <h3 className="font-poppins text-[32px] font-black text-slate-900 mb-3 tracking-tight leading-[1.1] max-w-[200px]">
                Grow with<br />Bhukkadh.
              </h3>

              <p className="font-medium text-[14px] text-slate-500 leading-relaxed max-w-[220px] lg:max-w-[180px] xl:max-w-[220px] text-left">
                Expand your reach, increase orders, and grow your business with our powerful tools.
              </p>

              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:bg-primary/90 transition-colors mt-auto mb-2">
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 w-[45%] md:w-[40%] lg:w-[45%] xl:w-[55%] h-[50%] lg:h-[50%] xl:h-[60%] z-[5] flex items-end justify-end pointer-events-none">
              <Image src="/images/restraunt.png" alt="Restaurant" width={300} height={300} className="w-full h-full object-contain object-bottom origin-bottom-right group-hover:scale-[1.03] transition-transform duration-300" unoptimized />
            </div>
          </motion.div>

          {/* Rider Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -8 }}
            className="relative w-full h-[420px] rounded-[28px] bg-white border border-slate-100 overflow-hidden pt-8 px-7 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full border border-primary flex items-center justify-center text-primary bg-white">
                  <Bike size={14} strokeWidth={2.5} />
                </div>
                <span className="text-primary font-semibold text-[13px]">For Riders</span>
              </div>

              <h3 className="font-poppins text-[32px] font-black text-slate-900 mb-3 tracking-tight leading-[1.1] max-w-[200px]">
                Ride.<br />Deliver.<br />Earn.
              </h3>

              <p className="font-medium text-[14px] text-slate-500 leading-relaxed max-w-[220px] lg:max-w-[180px] xl:max-w-[220px] text-left">
                Flexible hours, great earnings, and the freedom to be your own boss with Bhukkadh.
              </p>

              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:bg-primary/90 transition-colors mt-auto mb-2">
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 w-[55%] md:w-[50%] lg:w-[55%] xl:w-[70%] h-[55%] lg:h-[55%] xl:h-[65%] z-[5] flex items-end justify-end pointer-events-none">
              <Image src="/images/rider.png" alt="Rider" width={300} height={300} className="w-full h-full object-contain object-bottom origin-bottom-right group-hover:scale-[1.03] transition-transform duration-300" unoptimized />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* --- WHAT YOU CAN DO COMPACT SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 relative z-20"
      >
        <div className="text-center mb-12">
          <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-slate-800 mb-4 tracking-tight">
            What You Can Do on Bhukkadh
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-[16px] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4">
            <CheckCircle2 size={24} strokeWidth={2.5} className="text-primary shrink-0" />
            <span className="font-poppins font-bold text-[13px] md:text-[15px] text-slate-800 text-left">Download the mobile app</span>
          </div>
          <div className="bg-white rounded-[16px] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4">
            <CheckCircle2 size={24} strokeWidth={2.5} className="text-primary shrink-0" />
            <span className="font-poppins font-bold text-[13px] md:text-[15px] text-slate-800 text-left">Become a restaurant partner</span>
          </div>
          <div className="bg-white rounded-[16px] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4">
            <CheckCircle2 size={24} strokeWidth={2.5} className="text-primary shrink-0" />
            <span className="font-poppins font-bold text-[13px] md:text-[15px] text-slate-800 text-left">Become a delivery partner</span>
          </div>
          <div className="bg-white rounded-[16px] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4">
            <CheckCircle2 size={24} strokeWidth={2.5} className="text-primary shrink-0" />
            <span className="font-poppins font-bold text-[13px] md:text-[15px] text-slate-800 text-left">Explore Bhukkadh's mission</span>
          </div>
          <div className="bg-white rounded-[16px] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4">
            <CheckCircle2 size={24} strokeWidth={2.5} className="text-primary shrink-0" />
            <span className="font-poppins font-bold text-[13px] md:text-[15px] text-slate-800 text-left">Contact customer support</span>
          </div>
          <div className="bg-white rounded-[16px] p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4">
            <CheckCircle2 size={24} strokeWidth={2.5} className="text-primary shrink-0" />
            <span className="font-poppins font-bold text-[13px] md:text-[15px] text-slate-800 text-left">Read policies and legal info</span>
          </div>
        </div>
      </motion.section>



      {/* --- DOWNLOAD APP SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-16 lg:py-24 relative z-20"
      >
        <div className="bg-white rounded-[32px] lg:rounded-[40px] border border-slate-100 p-6 sm:p-8 md:p-10 lg:p-16 relative flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 shadow-2xl shadow-primary/5 overflow-hidden">

          {/* Subtle Gradient Background */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/[0.03] to-transparent pointer-events-none" />

          {/* Left: Content */}
          <div className="relative z-10 flex-1 max-w-xl">
            <h2 className="font-poppins font-extrabold text-[32px] md:text-4xl lg:text-5xl mb-4 md:mb-8 text-slate-800 tracking-tight leading-[1.1]">
              Get the <span className="text-primary">Bhukkadh</span> App
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-lg text-slate-500 mb-8 md:mb-10 font-medium">
              Unlock exclusive offers, real-time tracking, and lightning-fast checkout. Your next meal is just a tap away.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="bg-primary/10 p-2 md:p-2.5 rounded-[10px] md:rounded-[12px] text-primary"><Navigation size={18} strokeWidth={2.5} className="md:w-5 md:h-5" /></div>
                <span className="text-slate-700 font-bold text-[14px] md:text-[16px] lg:text-lg">Live Order Tracking</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="bg-primary/10 p-2 md:p-2.5 rounded-[10px] md:rounded-[12px] text-primary"><BadgePercent size={18} strokeWidth={2.5} className="md:w-5 md:h-5" /></div>
                <span className="text-slate-700 font-bold text-[14px] md:text-[16px] lg:text-lg">Exclusive App-Only Offers</span>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="bg-primary/10 p-2 md:p-2.5 rounded-[10px] md:rounded-[12px] text-primary"><Zap size={18} strokeWidth={2.5} className="fill-primary/20 md:w-5 md:h-5" /></div>
                <span className="text-slate-700 font-bold text-[14px] md:text-[16px] lg:text-lg">Lightning Fast Checkout</span>
              </div>
            </div>
          </div>

          {/* Center: QR Code */}
          <div className="relative z-10 hidden xl:flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-[24px] shadow-xl shadow-slate-200/50 border border-slate-100 relative group">
              <div className="w-[120px] h-[120px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary w-10 h-10 rounded-[12px] flex items-center justify-center text-white font-extrabold text-sm shadow-md">B</div>
              </div>
            </div>
            <p className="text-sm font-bold text-slate-500 text-center tracking-wide">Scan to download</p>
          </div>

          {/* Right: App Mockup */}
          <div className="relative z-10 flex justify-center lg:justify-end flex-1">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[500px]"
            >
              <Image
                src="/images/app.png"
                alt="Bhukkadh App"
                width={800}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </motion.section>

    </main>
  );
}
