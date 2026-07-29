"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Mail, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function SupportPage() {
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

  const topics = ["Order Issue", "Partnership", "Rider", "General"];

  return (
    <main className="w-full overflow-x-clip flex-1 bg-[#FCFBFF] relative">
      

      <section className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-20 lg:pt-32 pb-20 z-10 min-h-auto lg:min-h-[85vh] flex flex-col justify-center">
        
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
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 shadow-sm self-start">
              <span className="text-primary font-bold text-sm tracking-wide">Support Center</span>
            </div>
            
            <h1 className="font-poppins font-black text-[40px] md:text-[56px] leading-[1.1] mb-6 text-slate-900 tracking-tight">
              We're here to <span className="text-primary">help.</span>
            </h1>

            <p className="text-[18px] md:text-[20px] text-slate-500 mb-10 leading-relaxed font-medium max-w-lg mx-0">
              Have an issue with an order? Want to partner with us? Reach out to our team directly through the form or the channels below.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Email Support</h3>
                  <p className="text-slate-500 font-medium text-sm mb-1">We aim to reply within 2 hours.</p>
                  <a href="mailto:support@bhukkadh.com" className="font-bold text-primary hover:underline">support@bhukkadh.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Phone Support</h3>
                  <p className="text-slate-500 font-medium text-sm mb-1">Available for urgent order issues.</p>
                  <a href="tel:1800-123-4567" className="font-bold text-primary hover:underline">1800-123-4567</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <Clock size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Working Hours</h3>
                  <p className="text-slate-500 font-medium text-sm">Our support team is available:</p>
                  <p className="font-bold text-slate-700 text-sm mt-1">Mon - Sun: 8:00 AM - 1:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0 border border-slate-100">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Office HQ</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[250px]">
                    123 Foodie Lane, Tech Park,<br/>
                    Bandra West, Mumbai, 400050
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
            <div className="bg-white rounded-[32px] p-6 md:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
              
              {!isSubmitted ? (
                <motion.form 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-5 relative z-10"
                >
                  <div className="mb-2">
                    <h2 className="font-poppins font-bold text-2xl text-slate-800 mb-2">Send a Message</h2>
                    <p className="text-slate-500 text-sm font-medium">Fill out the form below to create a ticket.</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                    <Input 
                      name="fullName" value={formData.fullName} onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma" required
                      className="h-[52px] bg-slate-50 border-slate-200 rounded-[12px] focus-visible:ring-primary focus-visible:border-primary shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Email or Phone Number</label>
                    <Input 
                      type="text" name="contact" value={formData.contact} onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com or +91 9876543210" required
                      className="h-[52px] bg-slate-50 border-slate-200 rounded-[12px] focus-visible:ring-primary focus-visible:border-primary shadow-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">What is this regarding?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {topics.map((topic) => (
                        <button 
                          key={topic}
                          type="button"
                          onClick={() => setFormData({...formData, topic})}
                          className={`w-full h-[52px] rounded-[12px] border font-bold text-[14px] transition-all flex items-center justify-center ${formData.topic === topic ? "bg-primary/10 border-primary text-primary" : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300"}`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Message</label>
                    <textarea 
                      name="message" value={formData.message} onChange={handleInputChange}
                      placeholder="Please describe your issue or inquiry in detail..." required
                      className="min-h-[120px] p-4 bg-slate-50 border border-slate-200 rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all shadow-none resize-none font-medium text-slate-700"
                    />
                  </div>

                  <Button type="submit" className="h-[56px] mt-4 w-full bg-primary hover:bg-primary/90 text-white rounded-[16px] font-bold text-[16px] shadow-[0_0_20px_rgba(88,204,2,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 relative z-10 min-h-[500px]"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-poppins font-extrabold text-3xl text-slate-800 mb-4">Message Sent!</h2>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xs mx-auto">
                    We've received your inquiry and our support team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({fullName: "", contact: "", topic: "General", message: ""});
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
