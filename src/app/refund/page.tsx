import React from "react";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 mb-6">Cancellation & Refund Policy</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: August 11, 2026</p>
        
        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Order Cancellations</h2>
            <p className="mb-3">We understand that plans can change. Here is our policy regarding order cancellations:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Before Restaurant Acceptance:</strong> You may cancel your order for a full refund at any time before the restaurant has accepted and started preparing your order.</li>
              <li><strong className="text-slate-800">After Restaurant Acceptance:</strong> Once the restaurant has accepted the order and started preparation, cancellations are generally not permitted, and you may be charged up to the full amount of the order.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Refunds for Missing or Incorrect Items</h2>
            <p>If you receive an order with missing items, incorrect items, or items that are completely different from what you ordered, please contact our support team within 24 hours of delivery. We will investigate the issue and, if verified, provide a partial or full refund to your original payment method or Bhukkadh wallet.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. Quality Issues</h2>
            <p>If you are dissatisfied with the quality of your food (e.g., undercooked, spoiled), please reach out to us immediately with photographic evidence. While taste preferences are subjective and generally not eligible for refunds, we take food safety and objective quality issues very seriously.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Processing Time</h2>
            <p>Approved refunds will be processed immediately on our end. However, depending on your bank or payment provider, it may take 5-7 business days for the funds to reflect in your account.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Non-Refundable Scenarios</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>If the delivery partner was unable to contact you at the time of delivery after multiple attempts.</li>
              <li>If you provided an incorrect or incomplete delivery address.</li>
              <li>If you cancel the order after the restaurant has prepared the food.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
