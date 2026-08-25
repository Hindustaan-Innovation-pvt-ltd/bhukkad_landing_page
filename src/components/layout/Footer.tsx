import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b170e] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Contact Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Bhukkadh Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                style={{ width: "auto" }}
              />
              <span className="text-2xl font-bold text-white tracking-tight">Bhukkadh</span>
            </Link>

            <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed mb-6 max-w-sm">
              Delicious food from your favorite local restaurants, delivered fresh to your door in minutes. Operated by{" "}
              <span className="text-gray-200 font-semibold">Hindustaan Innovations Pvt. Ltd.</span>
            </p>

            {/* Quick Contact info */}
            <div className="space-y-2.5 mb-6 text-[13px] text-gray-300">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#66C109] shrink-0" />
                <a href="mailto:support@hindustaan.in" className="hover:text-[#66C109] transition-colors">
                  support@hindustaan.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#66C109] shrink-0" />
                <a href="tel:0771-299-4005" className="hover:text-[#66C109] transition-colors">
                  0771- 299 - 4005
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#66C109] shrink-0 mt-0.5" />
                <span className="text-gray-400 text-[12px] leading-snug">
                  CO: B-41, Sector-8A, Kamal-Vihar, Raipur (C.G.) - 492001
                </span>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.bhukkhad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#58cc02] hover:bg-[#46a302] text-white font-semibold py-2.5 px-5 rounded-xl flex w-max items-center gap-2 mb-6 transition-colors shadow-lg shadow-[#58cc02]/20"
            >
              <Smartphone size={18} strokeWidth={2.5} />
              <span className="text-[14px]">Download Bhukkadh App</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#66C109] hover:bg-[#66C109]/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#66C109] hover:bg-[#66C109]/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#66C109] hover:bg-[#66C109]/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#66C109] hover:bg-[#66C109]/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[13px] uppercase">COMPANY</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[13px] uppercase">BUSINESS & APP</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/partner" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/rider" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Ride With Us
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  iOS App
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Android App
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links (Razorpay Mandatory Suite) */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[13px] uppercase">LEGAL & POLICIES</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-gray-400 hover:text-[#66C109] transition-colors text-[13px] md:text-[14px]">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parent Organization Banner */}
      <div className="w-full bg-[#060e08] border-y border-white/5 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="py-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 w-full">
            {/* Left: Hindustaan Innovations Pvt. Ltd. */}
            <a
              href="https://hindustaan.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <svg className="w-11.5 h-13.5 shrink-0" viewBox="8 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hiShadow" x1="25" y1="17" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect x="8" y="12" width="6" height="33" fill="#d4d4d8" />
                <path d="M13 28 C 18 22, 23 23, 26 26 V 45 H 20.5 V 29 C 18.5 26.5, 16 27, 13 30 Z" fill="#d4d4d8" />
                <path d="M25 17 C 36 17, 36 28, 32 36 C 34 28, 30 22, 24 22 Z" fill="url(#hiShadow)" />
                <circle cx="25.5" cy="17" r="4.5" fill="#d4d4d8" />
              </svg>
              <div className="flex flex-col leading-tight mt-0.5">
                <span className="text-[26px] font-medium text-[#d4d4d4] tracking-wide font-sans">
                  Hindustaan
                </span>
                <span className="text-[15px] text-[#8a8a8a] font-normal font-sans">
                  Innovations Pvt. Ltd.
                </span>
              </div>
            </a>

            {/* Right: Built in / Built for Hindustaan */}
            <div className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-gray-300 leading-none select-none font-bold" style={{ fontSize: "3.5rem" }}>
                #
              </span>
              <div className="flex flex-col text-sm sm:text-base leading-snug text-gray-400">
                <span>Built in <span className="font-bold text-gray-200">Hindustaan</span></span>
                <span>Built for <span className="font-bold text-gray-200">Hindustaan</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Legal Entity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-[13px]">
            © 2026 Bhukkadh. All Rights Reserved. Owned & Operated by{" "}
            <span className="text-gray-400">Hindustaan Innovations Pvt. Ltd.</span>
          </p>
          <p className="text-gray-500 text-[12px]">
            Raipur, Chhattisgarh - 492001, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;