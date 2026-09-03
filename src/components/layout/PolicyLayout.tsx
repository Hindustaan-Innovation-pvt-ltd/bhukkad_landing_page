"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ListOrdered, ChevronDown, ArrowUp, ShieldCheck, FileText, RotateCcw, Truck, Scale, ChevronRight } from "lucide-react";

export interface PolicyHeading {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  currentPage: "privacy" | "terms" | "refund" | "shipping" | "grievance";
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  lastUpdated: string;
  headings: PolicyHeading[];
  children: React.ReactNode;
}

const allLegalPages = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy", icon: ShieldCheck },
  { id: "terms", label: "Terms of Service", href: "/terms", icon: FileText },
  { id: "refund", label: "Cancellation & Refund", href: "/refund", icon: RotateCcw },
  { id: "shipping", label: "Shipping & Delivery", href: "/shipping", icon: Truck },
  { id: "grievance", label: "Grievance Redressal", href: "/grievance", icon: Scale },
];

export default function PolicyLayout({
  currentPage,
  badge,
  badgeIcon,
  title,
  lastUpdated,
  headings,
  children,
}: PolicyLayoutProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = headings.length - 1; i >= 0; i--) {
        const section = document.getElementById(headings[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(headings[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeHeadingObj = headings.find((h) => h.id === activeId) || headings[0];

  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-transparent pt-28 sm:pt-32 pb-16 sm:pb-24 font-sans overflow-x-clip">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Top Legal Breadcrumb / Category Bar (Hidden on mobile) */}
        <div className="hidden md:flex mb-6 lg:mb-8 overflow-x-auto pb-2 hide-scrollbar">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm">
            {allLegalPages.map((page) => {
              const Icon = page.icon;
              const isCurrent = page.id === currentPage;
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    isCurrent
                      ? "bg-primary text-white shadow-sm shadow-primary/25"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <Icon size={15} />
                  <span>{page.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Sticky Table of Contents Header */}
        <div className="lg:hidden mb-6 sticky top-20 z-30">
          <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md p-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between text-left px-2 py-1"
              aria-label="Toggle Table of Contents"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ListOrdered size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
                    Table of Contents ({headings.length})
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                    {activeHeadingObj?.title || "Jump to section"}
                  </p>
                </div>
              </div>
              <ChevronDown
                size={18}
                className={`text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
                  mobileMenuOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 max-h-72 overflow-y-auto space-y-1 pr-1">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  return (
                    <button
                      key={heading.id}
                      onClick={() => scrollToSection(heading.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/40"
                      }`}
                    >
                      <span className="truncate">{heading.title}</span>
                      {isActive && <ChevronRight size={14} className="text-primary shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Desktop & Main Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* LEFT SIDEBAR: Heading Navigation */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-3xl p-5 border border-slate-200/80 dark:border-slate-700/70 shadow-sm flex flex-col max-h-[calc(100vh-8.5rem)]">
              
              {/* Sidebar Header */}
              <div className="pb-4 border-b border-slate-100 dark:border-slate-700/60 shrink-0">
                <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-2">
                  {badgeIcon}
                  <span>{badge}</span>
                </div>
                <h3 className="font-poppins font-bold text-slate-900 dark:text-white text-base flex items-center justify-between">
                  <span>Table of Contents</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                    {headings.length}
                  </span>
                </h3>
              </div>

              {/* Scrollable Headings List */}
              <nav className="flex-1 overflow-y-auto py-3 pr-1 space-y-1 custom-scrollbar">
                {headings.map((heading) => {
                  const isActive = activeId === heading.id;
                  return (
                    <button
                      key={heading.id}
                      onClick={() => scrollToSection(heading.id)}
                      title={heading.title}
                      className={`w-full text-left px-3 py-2 rounded-xl text-[13px] leading-snug transition-all flex items-center justify-between group ${
                        isActive
                          ? "bg-primary/10 dark:bg-primary/20 text-primary font-bold shadow-xs border-l-2 border-primary pl-2.5"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/40"
                      }`}
                    >
                      <span className="line-clamp-2">{heading.title}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 ml-1.5" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Sidebar Footer / Quick Actions */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 shrink-0 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span>Last updated {lastUpdated}</span>
                <button
                  onClick={scrollToTop}
                  className="hover:text-primary dark:hover:text-primary flex items-center gap-1 font-bold transition-colors"
                  title="Scroll to top"
                >
                  <ArrowUp size={14} /> Top
                </button>
              </div>

            </div>
          </aside>

          {/* RIGHT SIDE: Policy Content */}
          <div className="w-full lg:col-span-8 xl:col-span-9 min-w-0">
            <article className="bg-white dark:bg-slate-800/90 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 md:p-14 shadow-sm border border-slate-100 dark:border-slate-700/60">
              
              {/* Content Header */}
              <header className="mb-10 pb-8 border-b border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-xs">
                    {badgeIcon}
                  </div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-primary/5 dark:bg-primary/15">
                    {badge}
                  </span>
                </div>

                <h1 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-3 tracking-tight">
                  {title}
                </h1>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Last Updated: {lastUpdated} • Hindustaan Innovations Pvt. Ltd.
                </p>
              </header>

              {/* Content Sections */}
              <div className="space-y-10 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {children}
              </div>

            </article>
          </div>

        </div>

      </div>
    </main>
  );
}
