"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@/components/ui/button";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    role: "customer"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Your account is deleted");
        setFormData({ name: "", mobile: "", password: "", role: "customer" });
      } else {
        toast.error(result.error || "Failed to process request.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-50/30 dark:bg-transparent pt-28 pb-12 font-sans flex items-center justify-center px-4">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      
      <div className="w-full max-w-md bg-white dark:bg-slate-800/90 p-8 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-700/60">
        <h1 className="font-poppins font-black text-2xl text-slate-900 dark:text-white mb-2">Delete Account</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Please provide your details below to request account deletion.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-slate-800 dark:text-slate-100"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1" htmlFor="mobile">Mobile Number</label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-slate-800 dark:text-slate-100"
              placeholder="Enter your mobile number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-slate-800 dark:text-slate-100"
              placeholder="Enter your password"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1" htmlFor="role">User Role</label>
            <select 
              id="role" 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-slate-800 dark:text-slate-100"
            >
              <option value="customer">Customer</option>
              <option value="restaurant_owner">Restaurant Owner</option>
              <option value="rider">Rider</option>
            </select>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/25 transition-all mt-4"
          >
            {isSubmitting ? "Processing..." : "Delete Account"}
          </Button>
        </form>
      </div>
    </main>
  );
}
