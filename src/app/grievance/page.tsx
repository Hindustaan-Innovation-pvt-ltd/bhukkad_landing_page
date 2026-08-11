import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function GrievanceRedressalPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 mb-6">Grievance Redressal</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: August 11, 2026</p>
        
        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Our Commitment</h2>
            <p>At Bhukkadh, we strive to provide the best possible experience for our customers, restaurant partners, and delivery partners. We understand that issues may arise, and we have established a robust grievance redressal mechanism to ensure your concerns are addressed promptly and fairly.</p>
          </section>
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. How to Raise a Concern</h2>
            <p className="mb-3">If you have a complaint or grievance regarding any aspect of our service, please follow these steps:</p>
            <ul className="list-decimal pl-5 space-y-2">
              <li><strong className="text-slate-800">Level 1 (Customer Support):</strong> The fastest way to resolve an issue is through our 24/7 in-app chat support or by emailing <a href="mailto:support@bhukkadh.com" className="text-primary hover:underline">support@bhukkadh.com</a>.</li>
              <li><strong className="text-slate-800">Level 2 (Escalation):</strong> If your issue remains unresolved after 48 hours, you can escalate it to our Grievance Officer using the contact details provided below.</li>
            </ul>
          </section>

          <section className="bg-slate-50 p-6 md:p-8 rounded-[24px] border border-slate-200 my-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">3. Grievance Officer Details</h2>
            <p className="mb-6">In accordance with the Information Technology Act, 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 shrink-0">
                  <span className="font-bold text-lg">GO</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-slate-900 text-lg">Mr. Rahul Sharma</h3>
                  <p className="text-sm text-slate-500 font-medium">Chief Grievance Officer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-slate-400 w-5 h-5 shrink-0" />
                <a href="mailto:grievance@bhukkadh.com" className="text-slate-700 hover:text-primary transition-colors font-medium">grievance@bhukkadh.com</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="text-slate-400 w-5 h-5 shrink-0" />
                <span className="text-slate-700 font-medium">+91 (800) 123-4567</span>
                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-md ml-2 font-bold">Mon-Fri, 9AM-6PM</span>
              </div>
              
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="text-slate-400 w-5 h-5 shrink-0 mt-1" />
                <span className="text-slate-700 font-medium">
                  Bhukkadh Technologies Pvt. Ltd.<br/>
                  123 Tech Park, Sector 45<br/>
                  Gurugram, Haryana 122003, India
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Resolution Timeframe</h2>
            <p>We aim to acknowledge all grievances within 24 hours of receipt. Our Grievance Officer will investigate the matter and aim to resolve it within 15 days from the date of receipt, as mandated by applicable laws.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
