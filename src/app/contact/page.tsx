"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Mail, Phone, Building2, CheckCircle2 } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    topic: "General",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.contact && formData.topic && formData.message) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const topics = ["Order Issue", "Partnership", "Rider Inquiry", "Billing & Payments", "General"];

  return (
    <main className="w-full overflow-x-clip flex-1 bg-[#FCFBFF] relative">
      <section className="relative w-full max-w-350 mx-auto px-6 md:px-12 pt-28 lg:pt-36 pb-20 z-10 min-h-auto lg:min-h-[85vh] flex flex-col justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 right-1/4 w-100 md:w-150 h-100 md:h-150 bg-primary/3 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-75 md:w-125 h-75 md:h-125 bg-accent/3 blur-[100px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE: Direct Contact Info & Legal Business Entity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col text-left items-start"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 shadow-sm self-start">
              <span className="text-primary font-bold text-sm tracking-wide">Get in Touch</span>
            </div>

            <h1 className="font-poppins font-black text-[40px] md:text-[56px] leading-[1.1] mb-6 text-slate-900 tracking-tight">
              Contact <span className="text-primary">Us</span>
            </h1>

            <p className="text-[17px] md:text-[19px] text-slate-500 mb-8 leading-relaxed font-medium max-w-lg mx-0">
              Have questions about your order, payments, merchant onboarding, or partnership? Our support team is ready to assist you.
            </p>

            {/* Legal Entity Card */}
            <div className="w-full bg-white rounded-2xl p-5 border border-slate-100 shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 size={18} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal Company Entity</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Hindustaan Innovations Pvt. Ltd.</h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">Brand: Bhukkadh Food Delivery</p>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Customer Support Email</h3>
                  <p className="text-slate-500 font-medium text-sm mb-1">Guaranteed response within 2-4 hours.</p>
                  <a href="mailto:support@hindustaan.in" className="font-bold text-primary hover:underline">
                    support@hindustaan.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Customer Support Helpline</h3>
                  <p className="text-slate-500 font-medium text-sm mb-1">Available during operational business hours.</p>
                  <a href="tel:0771-299-4005" className="font-bold text-primary hover:underline">
                    0771- 299 - 4005
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <Clock size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Operating Hours</h3>
                  <p className="text-slate-500 font-medium text-sm">Customer Helpdesk:</p>
                  <p className="font-bold text-slate-700 text-sm mt-1">Monday - Saturday: 9:30 AM - 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Registered & Operating Office</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-85">
                    CO: B-41, Sector-8A, Kamal-Vihar,<br />
                    Raipur, Chhattisgarh (C.G.) - 492001, India
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
            <div className="bg-white rounded-4xl p-6 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 relative z-10"
                >
                  <div className="mb-2">
                    <h2 className="font-poppins font-bold text-2xl text-slate-800 mb-2">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm font-medium">We'll get back to you within 24 business hours.</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="h-13 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-primary focus-visible:border-primary shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Email or Phone Number</label>
                    <Input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com or +91 9876543210"
                      required
                      className="h-13 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-primary focus-visible:border-primary shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Category</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setFormData({ ...formData, topic })}
                          className={`w-full h-11.5 rounded-xl border font-bold text-[13px] transition-all flex items-center justify-center ${
                            formData.topic === topic
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry or concern..."
                      required
                      className="min-h-30 p-4 bg-slate-50 border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all shadow-none resize-none font-medium text-slate-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-14 mt-4 w-full bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-[16px] shadow-[0_0_20px_rgba(88,204,2,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit Request
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 relative z-10 min-h-125"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-poppins font-extrabold text-3xl text-slate-800 mb-4">Message Sent!</h2>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xs mx-auto">
                    We've received your message. Our support team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: "", contact: "", topic: "General", message: "" });
                    }}
                    className="mt-8 text-slate-400 hover:text-primary font-bold text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
