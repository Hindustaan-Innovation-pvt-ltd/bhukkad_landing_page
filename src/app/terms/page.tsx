import React from "react";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: August 11, 2026</p>
        
        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the Bhukkadh platform (website and mobile applications), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using Bhukkadh's services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Description of Service</h2>
            <p>Bhukkadh provides a platform for users to connect with independent food service providers (restaurants) and independent delivery partners. Bhukkadh does not prepare or deliver food directly; we are a technology platform facilitating these transactions.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. User Conduct</h2>
            <p className="mb-3">You agree to use the service only for lawful purposes. You are prohibited from:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using the service to transmit any illegal or harmful content.</li>
              <li>Attempting to interfere with or disrupt the service or servers.</li>
              <li>Providing false information during registration or checkout.</li>
              <li>Harassing or abusing restaurant partners, delivery partners, or our customer support team.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Pricing and Payment</h2>
            <p>All prices listed on the platform are determined by the respective restaurant partners and are subject to change without notice. Delivery fees and other applicable charges will be displayed clearly before you confirm your order. You agree to pay all charges associated with your orders.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
            <p>Bhukkadh shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of the platform.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">6. Modifications to Terms</h2>
            <p>Bhukkadh reserves the right to modify these terms at any time. We will notify users of any material changes. Your continued use of the service after such modifications constitutes your acceptance of the new terms.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
