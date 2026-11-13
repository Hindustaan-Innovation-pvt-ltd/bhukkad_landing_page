import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0b170e] text-slate-800 dark:text-white border-t border-slate-200/80 dark:border-white/5 pt-16 transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Contact Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/images/bhukkadh.png"
                alt="Bhukkadh Logo"
                width={64}
                height={64}
                className="h-16 w-16 rounded-2xl object-cover shadow-md group-hover:scale-[1.03] transition-transform duration-300"
              />
            </Link>

            <p className="text-slate-600 dark:text-gray-400 text-[13px] md:text-[14px] leading-relaxed mb-6 max-w-sm">
              Delicious food from your favorite local restaurants, delivered fresh in minutes. Operated by{" "}
              <span className="text-slate-900 dark:text-gray-200 font-semibold">Hindustaan Innovations Private Limited</span> across our 3 ecosystem apps:{" "}
              <span className="text-[#D70207] font-medium">Bhukkadh</span>,{" "}
              <span className="text-[#D70207] font-medium">Bhukkadh Partner</span>, and{" "}
              <span className="text-[#D70207] font-medium">Bhukkadh Master</span>.
            </p>

            {/* Quick Contact info */}
            <div className="space-y-2.5 mb-6 text-[13px] text-slate-600 dark:text-gray-300">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#D70207] shrink-0" />
                <a href="mailto:support@hindustaan.in" className="hover:text-[#D70207] transition-colors">
                  support@hindustaan.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#D70207] shrink-0" />
                <a href="tel:0771-299-4005" className="hover:text-[#D70207] transition-colors">
                  0771- 299 - 4005
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D70207] shrink-0 mt-0.5" />
                <span className="text-slate-500 dark:text-gray-400 text-[12px] leading-snug">
                  CO: B-41, Sector-8A, Kamal-Vihar, Raipur (C.G.) - 492001
                </span>
              </div>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.bhukkhad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D70207] hover:bg-[#b00105] text-white font-semibold py-2.5 px-5 rounded-xl flex w-max items-center gap-2 mb-6 transition-colors shadow-lg shadow-[#D70207]/20"
            >
              <Smartphone size={18} strokeWidth={2.5} />
              <span className="text-[14px]">Download Bhukkadh App</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/hindustaan_in?igsi=MXRzMDZpcnB4dWJsaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-gray-700/50 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-white hover:border-[#D70207] hover:bg-[#D70207] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590521631778"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-gray-700/50 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-white hover:border-[#D70207] hover:bg-[#D70207] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="https://x.com/Hindustaan_in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-gray-700/50 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-white hover:border-[#D70207] hover:bg-[#D70207] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/hindustaaninnovations"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-gray-700/50 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-white hover:border-[#D70207] hover:bg-[#D70207] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wider text-[13px] uppercase">COMPANY</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 3 Apps & Ecosystem */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wider text-[13px] uppercase">OUR 3 APPS</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/download" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Bhukkadh App <span className="text-[11px] text-slate-500 dark:text-gray-500 block">For Foodies</span>
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Bhukkadh Partner <span className="text-[11px] text-slate-500 dark:text-gray-500 block">For Restaurants</span>
                </Link>
              </li>
              <li>
                <Link href="/rider" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Bhukkadh Master <span className="text-[11px] text-slate-500 dark:text-gray-500 block">For Delivery Partners</span>
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-[#D70207] hover:underline transition-colors text-[12px] font-semibold">
                  View All Downloads →
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links (Razorpay Mandatory Suite) */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wider text-[13px] uppercase">LEGAL & POLICIES</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/terms" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-slate-600 dark:text-gray-400 hover:text-[#D70207] dark:hover:text-[#D70207] transition-colors text-[13px] md:text-[14px]">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parent Organization Banner */}
      <div className="w-full bg-white dark:bg-[#0b170e] border-y border-slate-200/80 dark:border-white/5 mt-8 transition-colors duration-200">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
          <div className="py-6 sm:py-7 md:py-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 w-full">
            {/* Left: Hindustaan Innovations Pvt. Ltd. */}
            <a
              href="https://hindustaan.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-100 hover:opacity-90 transition-opacity cursor-pointer inline-block shrink-0"
            >
              <Image
                src="/images/Frame 495.png"
                alt="Hindustaan Innovations Private Limited"
                width={1270}
                height={492}
                style={{ width: "auto" }}
                className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-[100px] 2xl:h-[104px] w-auto object-contain"
                priority
              />
            </a>

            {/* Right: Built in / Built for Hindustaan */}
            <div className="opacity-100 hover:opacity-90 transition-opacity shrink-0">
              <Image
                src="/images/Frame 497.png"
                alt="Built in Hindustaan, Built for Hindustaan"
                width={3544}
                height={1072}
                style={{ width: "auto" }}
                className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-[116px] 2xl:h-[120px] w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Legal Entity */}
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="py-6 grid grid-cols-3 items-center gap-2">
          <p className="text-slate-500 dark:text-gray-500 text-[13px] text-left">
            © 2026 Bhukkadh. All Rights Reserved.
          </p>
          <p className="text-slate-500 dark:text-gray-500 text-[13px] text-center">
            Powered by{" "}
            <span className="text-slate-700 dark:text-gray-400 font-medium">Hindustaan Innovations Private Limited.</span>
          </p>
          <p className="text-slate-500 dark:text-gray-500 text-[12px] text-right">
            Raipur, Chhattisgarh - 492001, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
