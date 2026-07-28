"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Zap, Navigation, CheckCircle2, Bell, Smartphone, MapPin,
  Utensils, Store, CreditCard, Star, ShieldCheck, QrCode, Gift, Download,
  ChevronDown, Flame, Plus, Heart, MapPinOff
} from "lucide-react";

export default function OrderPage() {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<"idle" | "available" | "unavailable">("idle");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const checkServiceability = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode.trim()) return;
    if (pincode.startsWith("4") || pincode === "100001") {
      setStatus("available");
    } else {
      setStatus("unavailable");
    }
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll notify you when we launch in " + pincode);
    setStatus("idle");
    setPincode("");
    setName("");
    setMobile("");
  };

  const categories = [
    { name: "Margehrita Pizza", img: "/images/Margehrita Pizza.avif" },
    { name: "Veg Momos", img: "/images/Veg momos [6 pieces].avif" },
    { name: "Badam Milk Shake", img: "/images/Badam milk shake.avif" },
    { name: "Java Chip Frappuccino", img: "/images/Java Chip Frappuccino..avif" },
    { name: "Margehrita Pizza", img: "/images/Margehrita Pizza.avif" },
    { name: "Veg Momos", img: "/images/Veg momos [6 pieces].avif" },
    { name: "Badam Milk Shake", img: "/images/Badam milk shake.avif" },
    { name: "Java Chip Frappuccino", img: "/images/Java Chip Frappuccino..avif" },
  ];

  const restaurants = [
    { name: "Momo House", type: "Tibetan • Fast Food", time: "25 min", price: "₹200 for two", img: "/images/Veg momos [6 pieces].avif", rating: "4.8" },
    { name: "Pizza World", type: "Italian • Pizza", time: "30 min", price: "₹250 for two", img: "/images/Margehrita Pizza.avif", rating: "4.7" },
    { name: "Shake Point", type: "Beverages • Desserts", time: "28 min", price: "₹300 for two", img: "/images/Badam milk shake.avif", rating: "4.8" },
    { name: "Coffee Cafe", type: "Cafe • Beverages", time: "25 min", price: "₹250 for two", img: "/images/Java Chip Frappuccino..avif", rating: "4.5" },
  ];

  const deals = [
    { title: "FLAT 50% OFF", subtitle: "Up to ₹120", desc: "on your first order", icon: <Gift className="text-cyan-500" size={28} /> },
    { title: "FREE DELIVERY", subtitle: "No minimum order", desc: "On orders above ₹199", icon: <Smartphone className="text-red-500" size={28} /> },
    { title: "BUY 1 GET 1", subtitle: "Up to ₹500 off", desc: "On selected restaurants", icon: <Gift className="text-orange-500" size={28} /> },
    { title: "₹100 OFF", subtitle: "Use Code: BHUKKADH100", desc: "On orders above ₹299", icon: <Gift className="text-pink-500" size={28} /> },
  ];

  const testimonials = [
    { text: "The delivery was incredibly fast, and the food arrived fresh and hot!", name: "Rahul Sharma", loc: "Bangalore", img: "/images/customer.png" },
    { text: "Great discounts and a smooth ordering experience every time.", name: "Priya Verma", loc: "Delhi", img: "/images/customer.png" },
    { text: "My go-to app for late-night cravings. Highly recommended!", name: "Aman Gupta", loc: "Mumbai", img: "/images/customer.png" },
  ];

  const faqs = [
    "How do I place an order?",
    "How can I track my order?",
    "Can I cancel my order?",
    "What payment methods do you accept?",
  ];

  return (
    <main className="w-full overflow-x-clip flex-1 bg-[#FDFDFF]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-[100px] pb-[40px] lg:pt-[160px] lg:pb-[80px] z-10 flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-purple-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-sm border border-purple-200">
            <Utensils className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-primary font-bold text-[9px] md:text-[11px] lg:text-xs tracking-wider uppercase">Order Food</span>
          </div>

          <h1 className="font-poppins font-black text-[34px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] mb-6 text-slate-900 tracking-tight">
            Your Favorite Food, <br/>
            <span className="text-primary">Delivered Fast.</span>
          </h1>
          
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-slate-500 mb-10 leading-relaxed font-medium max-w-lg px-2 sm:px-0">
            Discover the best restaurants near you, enjoy exclusive offers, track your order live, and get fresh meals delivered to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0">
            <Button 
              size="lg"
              className="w-full sm:w-auto h-[48px] md:h-[56px] px-8 md:px-10 bg-primary hover:bg-primary/90 text-white rounded-[16px] font-bold text-[14px] md:text-[16px] shadow-[0_0_20px_rgba(109,40,217,0.3)] transition-all hover:scale-[1.03]"
            >
              Order Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-[48px] md:h-[56px] px-8 md:px-10 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:text-primary rounded-[16px] font-bold text-[14px] md:text-[16px] transition-all hover:scale-[1.03]"
            >
              Browse Restaurants
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"><Star size={12} className="fill-yellow-600" /></div>
              <span className="text-slate-600 font-bold text-xs">10K+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Store size={12} /></div>
              <span className="text-slate-600 font-bold text-xs">500+ Restaurants</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Zap size={12} className="fill-green-600" /></div>
              <span className="text-slate-600 font-bold text-xs">Avg Delivery 30 min</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end"
        >
          {/* Big Purple Circle Background */}
          <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] bg-primary rounded-full flex items-center justify-center">
            {/* Dots Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPg==')] rounded-full" />
            
            {/* The Bowl Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] max-w-none">
              <Image src="/images/boy_bowl.png" alt="Delicious Noodles" width={600} height={600} className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" priority />
            </div>

            {/* Floating Tomatos & Leaves (Optional Decorations) */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-red-500 rounded-full blur-[2px] opacity-80 shadow-xl" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
            <div className="absolute bottom-20 left-4 w-8 h-8 bg-green-500 rounded-full blur-[1px] opacity-80 shadow-xl" style={{ borderRadius: '50% 50% 50% 70% / 50% 50% 70% 60%' }}></div>

            {/* Hot & Fresh Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-4 right-0 sm:right-8 bg-white rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 border border-slate-100"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <Flame size={20} className="fill-orange-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm">Hot & Fresh</p>
                <p className="text-xs text-slate-500 font-medium">At your doorstep</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </section>



      {/* --- WHY CHOOSE BHUKKADH? --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px] relative z-20">
        <div className="bg-[#F6F4FF] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Left - Rider Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
             <Image src="/images/rider.png" alt="Delivery Rider" width={300} height={300} className="w-full max-w-[300px] object-contain drop-shadow-2xl z-10 relative hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-slate-100">
              <Utensils className="w-4 h-4 text-primary" />
              <span className="text-primary font-bold text-[10px] sm:text-xs tracking-wider uppercase">Why Choose Bhukkadh?</span>
            </div>

            <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 mb-8 tracking-tight">
              Why Choose Bhukkadh?
            </h2>

            <ul className="space-y-4 mb-8 text-left w-full max-w-md mx-auto lg:mx-0">
              {[
                "Lightning fast delivery at your doorstep",
                "Best offers and lowest prices guaranteed",
                "Live order tracking in real-time",
                "Trusted restaurants and hygienic food",
                "Multiple payment options & secure checkout"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-md">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="h-[56px] px-10 bg-primary hover:bg-primary/90 text-white rounded-[16px] font-bold text-[16px] shadow-[0_0_20px_rgba(109,40,217,0.3)] transition-all hover:scale-[1.03]">
              Order Now
            </Button>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full shadow-2xl overflow-hidden hidden lg:block animate-bounce" style={{animationDuration: '3s'}}>
             <Image src="/images/Margehrita Pizza.avif" alt="Pizza" fill className="object-cover" />
          </div>
          <div className="absolute bottom-10 right-32 w-20 h-20 rounded-full shadow-2xl overflow-hidden hidden lg:block animate-bounce" style={{animationDuration: '4s'}}>
             <Image src="/images/Veg momos [6 pieces].avif" alt="Burger" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- HOW ORDERING WORKS --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px] relative z-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary/20"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary"/></div>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 tracking-tight">How Ordering Works</h2>
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary/20"/></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-12 md:gap-4 relative">
          
          {[
            { num: 1, title: "Browse Restaurants", desc: "Explore top restaurants near you.", icon: <Store size={28} /> },
            { num: 2, title: "Choose Your Food", desc: "Add your favorite food to the cart.", icon: <Utensils size={28} /> },
            { num: 3, title: "Make Payment", desc: "Choose a payment method and place your order.", icon: <CreditCard size={28} /> },
            { num: 4, title: "Food Delivered", desc: "We deliver your food hot and fresh.", icon: <Smartphone size={28} /> }
          ].map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center flex-1 z-20 relative group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center absolute top-[-10px] left-[50%] ml-[-20px] shadow-lg z-30 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div className="w-24 h-24 bg-white border border-slate-100 shadow-xl rounded-[20px] flex items-center justify-center text-slate-700 mb-6 group-hover:-translate-y-2 group-hover:border-primary/30 transition-all">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed px-4">{step.desc}</p>
              </div>

              {idx < 3 && (
                <div className="hidden md:block flex-1 h-[2px] border-t-2 border-dashed border-primary/40 relative top-[-60px] z-10">
                   <div className="absolute -right-1 -top-[5px] w-2 h-2 border-t-2 border-r-2 border-primary/40 rotate-45"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* --- POPULAR CATEGORIES --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px] relative z-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary/20"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary"/></div>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 tracking-tight">Popular Categories</h2>
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary/20"/></div>
        </div>
        <p className="text-slate-500 font-medium mb-12">Choose from hundreds of cuisines</p>
        
        <div className="flex overflow-x-auto pb-6 hide-scrollbar gap-6 md:gap-8 justify-start lg:justify-center">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer group w-[100px] sm:w-[120px]"
            >
              <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] bg-white border border-slate-100 shadow-sm rounded-full mb-4 flex items-center justify-center overflow-hidden group-hover:border-primary/40 group-hover:shadow-lg transition-all p-2">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                   <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                </div>
              </div>
              <span className="font-bold text-slate-800 text-[13px] sm:text-[15px]">{cat.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5 font-bold px-8 h-12">
            View All Categories
          </Button>
        </div>
      </section>

      {/* --- POPULAR RESTAURANTS NEAR YOU --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px] relative z-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
           <Flame className="text-orange-500 fill-orange-500" size={28} />
           <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 tracking-tight">Popular Restaurants Near You</h2>
        </div>
        <p className="text-slate-500 font-medium mb-12">Best rated restaurants delivering to you</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {restaurants.map((rest, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all text-left flex flex-col group"
            >
              <div className="h-[200px] w-full relative overflow-hidden">
                <Image src={rest.img} alt={rest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-[10px] shadow-md flex items-center gap-1 font-bold text-sm text-slate-800">
                  <Star size={14} className="fill-yellow-500 text-yellow-500" /> {rest.rating}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-900 text-xl mb-1">{rest.name}</h3>
                <p className="text-slate-500 text-sm font-medium mb-5">{rest.type}</p>
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-6 bg-slate-50 p-3 rounded-[12px]">
                  <span className="flex items-center gap-1"><Zap size={14} className="text-primary"/> {rest.time}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{rest.price}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-green-600">Free Delivery</span>
                </div>
                <div className="mt-auto">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-[14px] font-bold text-base shadow-md transition-all hover:scale-[1.02]">Order Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5 font-bold px-10 h-12">
          See More Restaurants
        </Button>
      </section>

      {/* --- WHAT OUR CUSTOMERS SAY --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px] relative z-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary/20"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary"/></div>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 tracking-tight">What Our Customers Say</h2>
          <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary/20"/></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left flex flex-col hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1 text-base">"{test.text}"</p>
              <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{test.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{test.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-2 h-2 rounded-full bg-primary/30 cursor-pointer hover:bg-primary/50 transition-colors"></div>
          <div className="w-8 h-2 rounded-full bg-primary cursor-pointer"></div>
          <div className="w-2 h-2 rounded-full bg-primary/30 cursor-pointer hover:bg-primary/50 transition-colors"></div>
        </div>
      </section>

      {/* --- BOTTOM SECTION: DOWNLOAD APP & FAQ --- */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-[100px] relative z-20 flex flex-col lg:flex-row gap-12 lg:gap-8">
        
        {/* Download App */}
        <div className="flex-1 bg-white rounded-[40px] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="relative z-10 lg:max-w-[65%]">
            <h2 className="font-poppins font-black text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">Download Bhukkadh App</h2>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Order faster, get exclusive deals, track orders easily and enjoy a better experience.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-[56px] px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-[16px] font-bold text-[14px] flex items-center gap-3 shadow-md hover:scale-[1.03] transition-transform">
                <Smartphone size={20} /> Google Play
              </Button>
              <Button className="h-[56px] px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-[16px] font-bold text-[14px] flex items-center gap-3 shadow-md hover:scale-[1.03] transition-transform">
                <Download size={20} /> App Store
              </Button>
            </div>
          </div>
          {/* Mobile Image */}
          <div className="absolute -bottom-10 -right-10 w-[280px] opacity-20 lg:opacity-100 lg:w-[350px] z-0">
             <Image src="/images/Mobile.png" alt="App Preview" width={400} height={800} className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* FAQ */}
        <div className="flex-1 lg:pl-10 flex flex-col justify-center">
          <div className="flex items-center justify-start gap-4 mb-8">
            <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-primary/20"/><div className="w-2 h-2 rounded-full bg-primary/50"/><div className="w-2 h-2 rounded-full bg-primary"/></div>
            <h2 className="font-poppins font-black text-2xl md:text-3xl text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[20px] p-6 flex justify-between items-center shadow-sm cursor-pointer hover:border-primary/40 hover:shadow-md transition-all group">
                <span className="font-bold text-slate-800 group-hover:text-primary transition-colors">{faq}</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Plus size={18} className="text-slate-500 group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}
