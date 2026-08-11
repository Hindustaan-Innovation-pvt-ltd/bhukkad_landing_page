import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: August 11, 2026</p>
        
        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>Welcome to Bhukkadh. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our application.</p>
          </section>
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Data We Collect</h2>
            <p className="mb-3">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong className="text-slate-800">Contact Data:</strong> includes delivery address, email address and telephone numbers.</li>
              <li><strong className="text-slate-800">Financial Data:</strong> includes payment card details (processed securely by our payment partners).</li>
              <li><strong className="text-slate-800">Transaction Data:</strong> includes details about payments to and from you and other details of orders you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Data</h2>
            <p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., delivering your food).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at <strong>privacy@bhukkadh.com</strong>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
