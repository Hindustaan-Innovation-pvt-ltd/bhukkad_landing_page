"use client";

import React from "react";
import Link from "next/link";
import { ChefHat, Globe, ChevronDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#051C08] text-slate-400 pt-24 pb-12 w-full mt-auto">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-center md:text-left">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center justify-center md:justify-start mb-8 cursor-pointer group">
              <img
                src="/images/logo.png"
                alt="Bhukkadh Logo"
                className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium mx-auto md:mx-0 max-w-[280px]">
              Delicious food from your favorite local restaurants, delivered to your door in minutes.
            </p>
            <Button className="h-12 px-6 mb-10 bg-primary hover:bg-primary/90 text-white rounded-[12px] font-bold shadow-[0_0_20px_rgba(88,204,2,0.3)] transition-all flex items-center justify-center md:justify-start gap-2 mx-auto md:mx-0 w-full sm:w-auto">
              <Smartphone size={20} />
              Download Bhukkadh App
            </Button>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-300"><InstagramIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-300"><FacebookIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-300"><TwitterIcon /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-300"><YoutubeIcon /></a>
            </div>
          </div>

          {/* Company & Business Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-[15px] font-medium mb-8">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Downloads & Partnerships */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Business & App</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><Link href="/restaurants" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="/rider" className="hover:text-primary transition-colors">Ride With Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors mt-4 block">iOS App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Android App</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grievance Redressal</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© 2026 Bhukkadh. All Rights Reserved.</p>

        </div>

      </div>
    </footer>
  );
}

// Inline Social Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 5 4.5 5 4.5 5h15s2 0 2 2.1c0 0 0 4.9 0 4.9s0 4.9-2 4.9h-15s-2 0-2-4.9c0 0 0-4.9 0-4.9z" /><path d="M9.5 15.5l7-3.5-7-3.5z" /></svg>
);
