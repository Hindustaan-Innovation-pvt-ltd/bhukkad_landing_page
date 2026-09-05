"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Mail, Phone, MessageCircle, CheckCircle2, Loader2, AlertCircle, Copy, Check, ArrowRight, Search } from "lucide-react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    topic: "General",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    ticketReference: string;
    topic: string;
    contact: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_URL || "https://apibhukkad.allindiahub.com";

      const response = await fetch(`${apiBase}/api/support/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          contact: formData.contact.trim(),
          topic: formData.topic,
          message: formData.message.trim(),
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
          data.message || data.errors?.[0] || "Failed to submit support ticket. Please try again."
        );
      }

      setSubmittedData({
        ticketReference: data.data.ticketReference,
        topic: formData.topic,
        contact: formData.contact.trim(),
      });
    } catch (err: any) {
      console.error("Support ticket submission failed:", err);
      setErrorMessage(
        err.message || "Failed to submit ticket. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleCopy = () => {
    if (!submittedData?.ticketReference) return;
    navigator.clipboard.writeText(submittedData.ticketReference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topics = ["Bhukkadh (Order Issue)", "Bhukkadh Partner", "Bhukkadh Rider", "General"];

  return (
    <main className="w-full overflow-x-clip flex-1 bg-[#FCFBFF] dark:bg-transparent relative">

      <section className="relative w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 lg:pt-32 pb-20 z-10 min-h-auto lg:min-h-[85vh] flex flex-col justify-center">

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/[0.03] blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/[0.03] blur-[100px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-2 lg:mt-8">

          {/* LEFT SIDE: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col text-left items-start sticky top-32"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/90 border border-primary px-4 py-2 rounded-[16px] shadow-sm">
                <span className="text-slate-800 dark:text-slate-100 font-bold text-sm tracking-wide">Support Center</span>
              </div>
              <Link
                href="/support/track"
                className="inline-flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 rounded-[16px] text-sm font-bold transition-all"
              >
                <Search size={15} />
                <span>Track Existing Ticket</span>
              </Link>
            </div>

            <h1 className="font-poppins font-black text-[40px] md:text-[56px] leading-[1.1] mb-6 text-slate-900 dark:text-white tracking-tight">
              We're here to <span className="text-primary">help.</span>
            </h1>

            <p className="text-[18px] md:text-[20px] text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium max-w-lg mx-0">
              Have an issue with an order? Want to partner with us? Reach out to our team directly through the form or the channels below.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">Email Support</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-1">We aim to reply within 2 hours.</p>
                  <a href="mailto:support@hindustaan.in" className="font-bold text-primary hover:underline">support@hindustaan.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">Phone Support</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-1">Available for urgent order issues.</p>
                  <a href="tel:0771-299-4005" className="font-bold text-primary hover:underline">0771- 299 - 4005</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                  <Clock size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">Working Hours</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Our support team is available:</p>
                  <p className="font-bold text-slate-700 dark:text-slate-200 text-sm mt-1">Mon - Sat: 9:30 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-lg">Office HQ</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-[300px]">
                    CO: B-41, Sector-8A, Kamal-Vihar,<br />
                    Raipur (C.G.) - 492001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full relative z-20"
          >
            <div className="bg-white dark:bg-slate-800/90 rounded-[32px] p-6 md:p-10 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">

              {!submittedData ? (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 relative z-10"
                >
                  <div className="mb-2">
                    <h2 className="font-poppins font-bold text-2xl text-slate-800 dark:text-white mb-2">Send a Message</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Fill out the form below to create a trackable support ticket.</p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-[14px] bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-3 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Full Name</label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={loading}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="h-[52px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 rounded-[12px] focus-visible:ring-primary focus-visible:border-primary shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email or Phone Number</label>
                    <Input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      disabled={loading}
                      placeholder="e.g. rahul@example.com or +91 9876543210"
                      required
                      className="h-[52px] bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 dark:text-slate-100 rounded-[12px] focus-visible:ring-primary focus-visible:border-primary shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">What is this regarding?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          disabled={loading}
                          onClick={() => setFormData({ ...formData, topic })}
                          className={`w-full h-[52px] rounded-[12px] border font-bold text-[14px] transition-all flex items-center justify-center ${formData.topic === topic ? "bg-primary/10 border-primary text-primary" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"}`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={loading}
                      placeholder="Please describe your issue or inquiry in detail..."
                      required
                      className="min-h-[120px] p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all shadow-none resize-none font-medium text-slate-700 dark:text-slate-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-[56px] mt-4 w-full bg-primary hover:bg-primary/90 text-white rounded-[16px] font-bold text-[16px] shadow-[0_0_20px_rgba(88,204,2,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Creating Support Ticket...</span>
                      </>
                    ) : (
                      "Submit Support Ticket"
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-6 relative z-10"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950/50 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-poppins font-extrabold text-2xl md:text-3xl text-slate-800 dark:text-white mb-2">Ticket Created!</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-sm mx-auto mb-6">
                    We've received your request. Use your unique reference ID below to track real-time updates and replies.
                  </p>

                  {/* Reference ID Card */}
                  <div className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-[20px] p-5 mb-6 text-left">
                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Your Ticket Reference</div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-primary tracking-wider">
                        {submittedData.ticketReference}
                      </span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="rounded-[12px] h-10 px-3 text-xs font-bold gap-1.5 border-slate-200 dark:border-slate-700"
                      >
                        {copied ? (
                          <>
                            <Check size={14} className="text-green-500" />
                            <span className="text-green-600 dark:text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy</span>
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex justify-between">
                      <span>Category: <strong className="text-slate-700 dark:text-slate-300">{submittedData.topic}</strong></span>
                      <span>Status: <strong className="text-amber-600 dark:text-amber-400">OPEN</strong></span>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="flex flex-col w-full gap-3">
                    <Button asChild className="h-[52px] w-full bg-primary hover:bg-primary/90 text-white rounded-[14px] font-bold text-[15px] shadow-lg shadow-primary/25">
                      <Link href={`/support/track?ref=${encodeURIComponent(submittedData.ticketReference)}&contact=${encodeURIComponent(submittedData.contact)}`}>
                        Track Ticket Progress <ArrowRight size={18} className="ml-2" />
                      </Link>
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setFormData({ fullName: "", contact: "", topic: "General", message: "" });
                      }}
                      className="text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary font-bold text-sm py-2 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

