import React from "react";
import Link from "next/link";
import { Scale, Mail, Phone, MapPin, Clock, ShieldCheck, UserCheck, AlertCircle } from "lucide-react";

export default function GrievanceRedressalPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 dark:bg-transparent pt-28 pb-12 font-sans">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-800/90 p-6 sm:p-8 md:p-12 rounded-4xl shadow-sm border border-slate-100 dark:border-slate-700/60">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Scale className="w-5 h-5" />
          </div>
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Compliance</span>
        </div>

        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 dark:text-white mb-4">
          Grievance Redressal Mechanism
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Last Updated: August 25, 2026</p>

        <div className="space-y-8 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          {/* 1. Our Commitment */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Our Commitment</h2>
            <p className="mb-3">
              At Bhukkadh, a brand owned and operated by{" "}
              <strong className="text-slate-900 dark:text-white">Hindustaan Innovations Pvt. Ltd.</strong>, we are committed to providing a transparent, fair, and effective mechanism for addressing concerns and grievances raised by our customers, Restaurant Partners, Delivery Partners, and other users of our Platform.
            </p>
            <p className="mb-3">
              We aim to address complaints in a timely and reasonable manner and in accordance with applicable laws and regulations, including applicable provisions of the Information Technology Act, 2000, the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, and other applicable laws and regulations, as amended from time to time.
            </p>
            <p>
              This Grievance Redressal Mechanism explains how you can submit a complaint, escalate an unresolved issue, and communicate directly with our designated Grievance Officer.
            </p>
          </section>

          {/* 2. What Can You Raise a Grievance About? */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">2. What Can You Raise a Grievance About?</h2>
            <p className="mb-2">You may contact us regarding concerns relating to the Bhukkadh Platform or services, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Food orders and order fulfilment;</li>
              <li>Missing, incorrect, or damaged items;</li>
              <li>Food quality-related complaints;</li>
              <li>Delivery-related issues;</li>
              <li>Order cancellations;</li>
              <li>Refunds and payment-related issues;</li>
              <li>Restaurant Partner conduct;</li>
              <li>Delivery Partner conduct;</li>
              <li>Account-related issues;</li>
              <li>Privacy or personal-data concerns;</li>
              <li>Promotional offers or coupon-related issues;</li>
              <li>Unauthorized or suspicious account activity;</li>
              <li>Content or information displayed on the Platform; and</li>
              <li>Other concerns relating to the services provided through Bhukkadh.</li>
            </ul>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">
              For urgent issues relating to an active order, customers should first contact Customer Support through the available support channels.
            </p>
          </section>

          {/* 3. Grievance Redressal Process */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Grievance Redressal Process</h2>
            <p className="mb-4">
              Bhukkadh follows a structured escalation process designed to resolve complaints efficiently.
            </p>

            <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Level 1: Customer Support</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                For routine customer-service concerns, including active orders, cancellations, refunds, delivery issues, missing items, or food-quality complaints, customers should first contact Bhukkadh Customer Support.
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong className="text-slate-800 dark:text-slate-200">Support Email:</strong>{" "}
                  <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                    support@hindustaan.in
                  </a>
                </p>
                <p>
                  <strong className="text-slate-800 dark:text-slate-200">Support Helpline:</strong>{" "}
                  <a href="tel:0771-299-4005" className="text-primary font-bold hover:underline">
                    0771- 299 - 4005
                  </a>
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Where available, customers may also use the in-app support or chat functionality.
              </p>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                  When submitting a complaint, please provide:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li>Name;</li>
                  <li>Registered mobile number or email address;</li>
                  <li>Order ID, where applicable;</li>
                  <li>Date of the order or transaction;</li>
                  <li>Description of the issue;</li>
                  <li>Relevant photographs, screenshots, or supporting documents; and</li>
                  <li>Previous support ticket number, if applicable.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Escalation to the Grievance Officer */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Escalation to the Grievance Officer</h2>
            <p className="mb-3">
              If your complaint has not been satisfactorily resolved through the Customer Support process, or if you wish to formally escalate the matter, you may contact our designated Grievance Officer.
            </p>
            <p className="mb-2">Where possible, an escalation should include:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Your name and contact details;</li>
              <li>Order ID or transaction reference, where applicable;</li>
              <li>Previous support ticket or complaint reference;</li>
              <li>Details of the issue;</li>
              <li>Steps already taken to resolve the issue; and</li>
              <li>The resolution you are seeking.</li>
            </ul>
            <p>
              The Grievance Officer may review the complaint, relevant records, communications, transaction information, and other information reasonably necessary to investigate the matter.
            </p>
          </section>

          {/* 5. Designated Grievance Officer */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Designated Grievance Officer</h2>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Legal Entity</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base mt-0.5">Hindustaan Innovations Pvt. Ltd.</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Designation</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base mt-0.5">Grievance Redressal Officer</p>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Email:</strong>{" "}
                    <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                      support@hindustaan.in
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Contact Number:</strong>{" "}
                    <a href="tel:0771-299-4005" className="text-primary font-bold hover:underline">
                      0771- 299 - 4005
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">Office Address:</strong> CO: B-41, Sector-8A, Kamal Vihar,
                    Raipur, Chhattisgarh – 492001, India
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Acknowledgment of Grievances */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Acknowledgment of Grievances</h2>
            <p className="mb-3">
              Formal grievances submitted to the Grievance Officer will be acknowledged within a reasonable period. Where appropriate, we may provide a complaint or reference number that can be used for future communication regarding the grievance.
            </p>
            <p className="mb-2">The acknowledgment may include information regarding:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The complaint reference number;</li>
              <li>Confirmation that the grievance has been received;</li>
              <li>The general nature of the complaint; and</li>
              <li>Any additional information required from the complainant.</li>
            </ul>
          </section>

          {/* 7. Investigation and Resolution */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">7. Investigation and Resolution</h2>
            <p className="mb-2">
              Upon receiving a grievance, we may review relevant information necessary to understand and resolve the matter. Depending on the nature of the complaint, this may include reviewing:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Order information;</li>
              <li>Payment and refund records;</li>
              <li>Delivery records;</li>
              <li>Communications with Customer Support;</li>
              <li>Restaurant Partner information;</li>
              <li>Delivery Partner information;</li>
              <li>Platform activity; and</li>
              <li>Other relevant records.</li>
            </ul>
            <p className="mb-3">
              We may contact the complainant if additional information or clarification is required.
            </p>
            <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30 space-y-2 mb-3">
              <p className="text-slate-900 dark:text-white font-semibold text-sm">
                We aim to provide a final response or appropriate resolution <span className="text-primary font-bold">within 15 business days</span> from receipt of a complete grievance, wherever reasonably practicable and subject to the nature and complexity of the matter.
              </p>
            </div>
            <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
              Certain matters may require additional time due to their complexity, third-party dependencies, payment-provider investigations, legal requirements, or circumstances beyond our reasonable control.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Where additional time is required, we may communicate the status of the grievance and, where appropriate, the expected next steps.
            </p>
          </section>

          {/* 8. Refund and Payment-Related Grievances */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">8. Refund and Payment-Related Grievances</h2>
            <p className="mb-3">
              Complaints relating to payments, failed transactions, duplicate charges, cancellations, or refunds will be reviewed using the relevant order and transaction information.
            </p>
            <p className="mb-3">
              Where a refund is approved, it will be processed in accordance with our{" "}
              <Link href="/refund" className="text-primary font-bold hover:underline">
                Cancellation & Refund Policy
              </Link>{" "}
              and applicable payment-processing procedures.
            </p>
            <p className="mb-3">
              Where necessary, Bhukkadh may coordinate with the relevant payment gateway, bank, card network, UPI provider, or other financial institution to investigate a transaction.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The time taken by a bank, payment network, or payment service provider to complete a refund or transaction reversal may be outside Bhukkadh's direct control.
            </p>
          </section>

          {/* 9. Privacy and Personal Data Grievances */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">9. Privacy and Personal Data Grievances</h2>
            <p className="mb-3">
              If your grievance relates to the collection, use, disclosure, security, or processing of your personal information, you may contact us using the details provided above.
            </p>
            <p className="mb-3">
              We may request reasonable information to verify your identity before processing privacy-related requests.
            </p>
            <p>
              Privacy-related matters will be handled in accordance with our{" "}
              <Link href="/privacy" className="text-primary font-bold hover:underline">
                Privacy Policy
              </Link>{" "}
              and applicable data-protection requirements.
            </p>
          </section>

          {/* 10. Restaurant and Delivery Partner Grievances */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">10. Restaurant and Delivery Partner Grievances</h2>
            <p className="mb-2">Restaurant Partners and Delivery Partners using Bhukkadh may also raise grievances relating to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Account access;</li>
              <li>Orders and fulfilment;</li>
              <li>Payments or settlements;</li>
              <li>Platform operations;</li>
              <li>Delivery assignments;</li>
              <li>Conduct or safety concerns;</li>
              <li>Policy enforcement; or</li>
              <li>Other Platform-related issues.</li>
            </ul>
            <p className="mb-3">
              Such partners may use the support channels available through their respective Bhukkadh applications or contact the designated support team using the details provided in this Policy.
            </p>
            <p>Where necessary, unresolved matters may be escalated to the Grievance Officer.</p>
          </section>

          {/* 11. Consumer Rights */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">11. Consumer Rights</h2>
            <p className="mb-3">
              Nothing in this Grievance Redressal Mechanism limits or excludes any rights or remedies available to consumers under applicable Indian law.
            </p>
            <p className="mb-3">
              Customers may exercise their statutory rights and may approach an appropriate consumer or regulatory authority where permitted by applicable law.
            </p>
            <p>Bhukkadh will cooperate with lawful requests and proceedings from competent authorities.</p>
          </section>

          {/* 12. False, Fraudulent, or Abusive Complaints */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">12. False, Fraudulent, or Abusive Complaints</h2>
            <p className="mb-2">
              Bhukkadh encourages users to raise genuine complaints and provide accurate information. We may take appropriate action where we reasonably determine that a complaint involves:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Fraudulent information;</li>
              <li>Deliberately false claims;</li>
              <li>Repeated abuse of the complaint or refund process;</li>
              <li>Threats or harassment of employees, Restaurant Partners, or Delivery Partners; or</li>
              <li>Attempts to misuse the Platform or grievance mechanism.</li>
            </ul>
            <p>Such action will be taken subject to applicable law.</p>
          </section>

          {/* 13. Confidentiality */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">13. Confidentiality</h2>
            <p className="mb-3">
              We will handle grievance-related information responsibly and use it only to the extent reasonably necessary to investigate, resolve, document, or comply with legal requirements relating to the grievance.
            </p>
            <p>
              Information may be shared with relevant internal teams, Restaurant Partners, Delivery Partners, payment service providers, professional advisers, or authorities where reasonably necessary to investigate or resolve the complaint or where required by law.
            </p>
          </section>

          {/* 14. Contact Details */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">14. Contact Details</h2>
            <p className="mb-3">For customer support or grievance-related communication:</p>
            <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm space-y-2">
              <p><strong className="text-slate-900 dark:text-white">Legal Entity:</strong> Hindustaan Innovations Pvt. Ltd.</p>
              <p><strong className="text-slate-900 dark:text-white">Brand:</strong> Bhukkadh</p>
              <p>
                <strong className="text-slate-900 dark:text-white">Email:</strong>{" "}
                <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                  support@hindustaan.in
                </a>
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Helpline:</strong>{" "}
                <a href="tel:0771-299-4005" className="text-primary font-bold hover:underline">
                  0771- 299 - 4005
                </a>
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Registered Office:</strong> CO: B-41, Sector-8A, Kamal Vihar, Raipur, Chhattisgarh – 492001, India
              </p>
            </div>
          </section>

          {/* 15. Changes to This Mechanism */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">15. Changes to This Mechanism</h2>
            <p className="mb-3">
              Bhukkadh may update this Grievance Redressal Mechanism from time to time to reflect changes in our services, operational processes, or applicable legal and regulatory requirements.
            </p>
            <p className="mb-4">
              Any updated version will be published on the Platform with a revised "Last Updated" date. We encourage users to review this mechanism periodically.
            </p>
            <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30 text-slate-800 dark:text-slate-200 text-sm font-semibold text-center">
              By using Bhukkadh, you acknowledge that you have access to this Grievance Redressal Mechanism and understand the channels available for raising and escalating complaints.
            </div>
          </section>
        </div>
        </div>
      </div>
    </main>
  );
}
