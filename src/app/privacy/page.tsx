import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Lock, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-12 rounded-4xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Privacy</span>
        </div>

        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: August 25, 2026</p>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p className="mb-3">
              Welcome to Bhukkadh ("Bhukkadh", "we", "us", or "our"), a brand owned and operated by{" "}
              <strong className="text-slate-900">Hindustaan Innovations Pvt. Ltd.</strong>
            </p>
            <p className="mb-3">
              We respect your privacy and are committed to protecting the personal information and other information that you provide to us or that we collect when you use our services.
            </p>
            <p className="mb-2">This Privacy Policy explains how we collect, use, store, process, share, and protect your information when you:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Visit the Bhukkadh website;</li>
              <li>Use any of our 3 ecosystem applications: <strong>Bhukkadh</strong> (Customer), <strong>Bhukkadh Partner</strong> (Restaurant), or <strong>Bhukkadh Rider</strong> (Delivery);</li>
              <li>Create or manage a Bhukkadh account;</li>
              <li>Place, prepare, or deliver orders through the Platform; or</li>
              <li>Otherwise interact with our food ordering, delivery, payment, and related technology services.</li>
            </ul>
            <p className="mb-3">
              By accessing or using Bhukkadh, you acknowledge that your information may be collected and processed in accordance with this Privacy Policy and applicable laws.
            </p>
            <p>
              This Privacy Policy should be read together with our{" "}
              <Link href="/terms" className="text-primary font-bold hover:underline">
                Terms of Service
              </Link>{" "}
              and other policies made available on the Platform.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-4">
              We collect information that is reasonably necessary to provide, operate, secure, improve, and support our Platform and services.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">2.1 Identity and Contact Information</h3>
                <p className="mb-2">We may collect:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Full name;</li>
                  <li>Mobile phone number;</li>
                  <li>Email address;</li>
                  <li>Delivery and saved addresses;</li>
                  <li>Profile information; and</li>
                  <li>Other information you voluntarily provide to us.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">2.2 Account and Authentication Information</h3>
                <p className="mb-2">When you create or access an account, we may collect and process information required to authenticate and secure your account, such as:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-2">
                  <li>Mobile number;</li>
                  <li>OTP verification status;</li>
                  <li>Account identifiers; and</li>
                  <li>Login or session-related information.</li>
                </ul>
                <p className="text-sm text-slate-600">
                  We use this information to authenticate users, prevent unauthorized access, and maintain account security.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">2.3 Location Information</h3>
                <p className="mb-2">
                  With your permission and subject to your device settings, Bhukkadh may collect precise or approximate location information.
                </p>
                <p className="mb-2">Location information may be used to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-2">
                  <li>Show restaurants and services available near you;</li>
                  <li>Determine whether a delivery address is within our service area;</li>
                  <li>Estimate delivery charges and delivery times;</li>
                  <li>Assist with navigation and delivery fulfilment;</li>
                  <li>Display live order or delivery tracking;</li>
                  <li>Help Riders navigate to pickup and delivery locations; and</li>
                  <li>Improve location-based features.</li>
                </ul>
                <p className="text-sm text-slate-600">
                  You may be able to disable location permissions through your device settings. However, some features of the Platform may not function correctly without access to location information.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Order and Transaction Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. Order and Transaction Information</h2>
            <p className="mb-2">When you place an order, we may collect information relating to the transaction, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Restaurant or vendor selected;</li>
              <li>Food and beverage items ordered;</li>
              <li>Item quantities;</li>
              <li>Order value;</li>
              <li>Applicable taxes and charges;</li>
              <li>Delivery or pickup details;</li>
              <li>Order instructions;</li>
              <li>Order status;</li>
              <li>Cancellation information;</li>
              <li>Refund information; and</li>
              <li>Transaction and payment status.</li>
            </ul>
            <p>
              We maintain transaction-related information to process and fulfil orders, provide customer support, manage refunds, prevent fraud, and comply with applicable legal and accounting obligations.
            </p>
          </section>

          {/* 4. Payment Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Payment Information</h2>
            <p className="mb-3">
              Payments made through Bhukkadh may be processed through authorized third-party payment aggregators and payment service providers, including <strong className="text-slate-900">Razorpay</strong>, where applicable.
            </p>
            <p className="mb-2">Depending on the payment method used, payment processing may involve:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>UPI;</li>
              <li>Credit Cards;</li>
              <li>Debit Cards;</li>
              <li>Net Banking;</li>
              <li>Authorized Digital Wallets; or</li>
              <li>Other payment methods made available on the Platform.</li>
            </ul>
            <p className="mb-3">
              <strong className="text-slate-900">Bhukkadh does not intentionally store sensitive authentication information</strong> such as complete card numbers, CVVs, UPI PINs, or banking passwords on its own servers.
            </p>
            <p className="mb-3">
              Payment information required to complete a transaction is processed by the applicable payment service provider in accordance with its own security standards and privacy practices.
            </p>
            <p className="mb-2">We may receive limited transaction information, such as:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Payment status;</li>
              <li>Transaction reference or payment identifier;</li>
              <li>Payment amount;</li>
              <li>Payment method;</li>
              <li>Refund status; and</li>
              <li>Other information necessary to reconcile and manage transactions.</li>
            </ul>
          </section>

          {/* 5. Device and Technical Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Device and Technical Information</h2>
            <p className="mb-2">When you access or use Bhukkadh, we may automatically collect certain technical information, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>IP address;</li>
              <li>Device type and model;</li>
              <li>Device operating system;</li>
              <li>App version;</li>
              <li>Browser type;</li>
              <li>Device identifiers, where applicable;</li>
              <li>Network and connection information;</li>
              <li>Log data;</li>
              <li>Error and crash information; and</li>
              <li>General interaction and usage information.</li>
            </ul>
            <p>
              We use this information to maintain Platform security, diagnose technical problems, improve performance, detect fraud, and enhance the user experience.
            </p>
          </section>

          {/* 6. Information You Provide Voluntarily */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">6. Information You Provide Voluntarily</h2>
            <p className="mb-2">You may voluntarily provide additional information when you:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Contact customer support;</li>
              <li>Submit a complaint or feedback;</li>
              <li>Communicate with us through email, phone, chat, or other channels;</li>
              <li>Submit ratings or reviews;</li>
              <li>Respond to surveys; or</li>
              <li>Participate in promotions or other activities.</li>
            </ul>
            <p>
              Any information voluntarily provided by you may be processed to respond to your request and improve our services.
            </p>
          </section>

          {/* 7. How We Use Your Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">7. How We Use Your Information</h2>
            <p className="mb-4">We may use your information for the following purposes:</p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">7.1 Providing Our Services</h3>
                <p className="mb-2">We use information to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Create and manage user accounts;</li>
                  <li>Process and fulfil food orders;</li>
                  <li>Coordinate with Restaurant Partners and Delivery Riders;</li>
                  <li>Provide delivery and live tracking features;</li>
                  <li>Calculate applicable charges and taxes;</li>
                  <li>Process payments and refunds; and</li>
                  <li>Provide customer support.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">7.2 Communication</h3>
                <p className="mb-2">We may use your information to send:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-2">
                  <li>OTPs and account verification messages;</li>
                  <li>Order confirmations;</li>
                  <li>Payment confirmations;</li>
                  <li>Delivery updates;</li>
                  <li>Cancellation and refund updates;</li>
                  <li>Security alerts;</li>
                  <li>Customer support responses; and</li>
                  <li>Other service-related communications.</li>
                </ul>
                <p className="text-sm text-slate-600">
                  Where permitted by applicable law and subject to available preferences, we may also send promotional communications regarding offers, discounts, restaurants, or Platform features.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">7.3 Safety, Security and Fraud Prevention</h3>
                <p className="mb-2">We may use information to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Detect suspicious or fraudulent transactions;</li>
                  <li>Prevent unauthorized access;</li>
                  <li>Protect the security of our Platform;</li>
                  <li>Investigate policy violations;</li>
                  <li>Resolve disputes; and</li>
                  <li>Comply with applicable legal obligations.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-lg mb-2">7.4 Platform Improvement</h3>
                <p className="mb-2">We may analyze information to:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-2">
                  <li>Improve the performance and functionality of the Platform;</li>
                  <li>Understand how users interact with our services;</li>
                  <li>Improve restaurant discovery and delivery operations;</li>
                  <li>Identify and fix technical issues; and</li>
                  <li>Develop new features and services.</li>
                </ul>
                <p className="text-sm text-slate-600">
                  Where appropriate, information may be aggregated or de-identified for analytical purposes.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Information We Share */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">8. Information We Share</h2>
            <p className="mb-4">
              <strong className="text-slate-900">We do not sell your personal information as a standalone commercial product.</strong> We may share information only where necessary to operate and provide our services, including with the following categories of recipients:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1">8.1 Restaurant Partners</h3>
                <p className="text-sm text-slate-600 mb-2">
                  We may share relevant information with Restaurant Partners to enable them to prepare and fulfil your order. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                  <li>Order details, food items, and quantities;</li>
                  <li>Order instructions; and</li>
                  <li>Information reasonably necessary to process the order.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1">8.2 Delivery Partners or Riders</h3>
                <p className="text-sm text-slate-600 mb-2">
                  We may share relevant delivery information with Delivery Partners to enable order pickup and delivery. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                  <li>Your name;</li>
                  <li>Delivery location or address;</li>
                  <li>Contact information required for delivery;</li>
                  <li>Delivery instructions; and</li>
                  <li>Other information reasonably necessary to fulfil the delivery.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1">8.3 Payment Service Providers</h3>
                <p className="text-sm text-slate-700">
                  We may share transaction-related information with authorized payment aggregators and payment service providers, including <strong className="text-slate-900">Razorpay</strong>, where required to process payments, refunds, and payment-related disputes.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1">8.4 Technology and Service Providers</h3>
                <p className="text-sm text-slate-600 mb-2">
                  We may use third-party service providers for cloud hosting, authentication, mapping and location services, notifications, customer support, analytics, error monitoring, and other infrastructure services.
                </p>
                <p className="text-sm text-slate-600">
                  These providers may process information only as necessary to provide their services to us and subject to applicable contractual or legal safeguards.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1">8.5 Legal and Regulatory Authorities</h3>
                <p className="text-sm text-slate-700">
                  We may disclose information where required or permitted by applicable law in response to valid legal processes, regulatory requirements, law enforcement requests, or to protect our legal rights, users, Restaurant Partners, Riders, or the public.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <h3 className="font-bold text-slate-900 text-base mb-1">8.6 Business Transfers</h3>
                <p className="text-sm text-slate-700">
                  If Bhukkadh or Hindustaan Innovations Pvt. Ltd. is involved in a merger, acquisition, restructuring, financing, or sale of business assets, relevant information may be transferred as part of that transaction, subject to applicable law.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Location Data and Delivery Tracking */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">9. Location Data and Delivery Tracking</h2>
            <p className="mb-3">Bhukkadh may use location information to support location-based services:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>
                <strong className="text-slate-800">For Customers:</strong> Identify nearby restaurants, suggest or validate delivery addresses, determine serviceability, calculate delivery estimates, and display live order tracking where available.
              </li>
              <li>
                <strong className="text-slate-800">For Delivery Partners:</strong> Navigate to Restaurant Partner and customer delivery locations during active delivery operations, provide live order tracking, improve dispatch coordination, and verify delivery activity.
              </li>
            </ul>
            <p>Location collection depends on permissions granted through the relevant device and operating system.</p>
          </section>

          {/* 10. Cookies and Similar Technologies */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">10. Cookies and Similar Technologies</h2>
            <p className="mb-2">
              Our website and certain Platform services may use cookies and similar technologies to improve functionality and user experience, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Maintaining login sessions;</li>
              <li>Remembering user preferences;</li>
              <li>Understanding website usage;</li>
              <li>Improving Platform performance;</li>
              <li>Detecting technical issues; and</li>
              <li>Protecting against fraudulent activity.</li>
            </ul>
            <p>
              You may manage or disable certain cookies through your browser settings. However, disabling essential cookies may affect the functionality of the Platform.
            </p>
          </section>

          {/* 11. Data Security */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">11. Data Security</h2>
            <p className="mb-3">
              We implement reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, misuse, alteration, or disclosure, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Encryption of data in transit using secure communication protocols (TLS/SSL);</li>
              <li>Access controls and authentication mechanisms;</li>
              <li>Restricted access to systems and data;</li>
              <li>Security monitoring and audits; and</li>
              <li>Secure third-party service providers and infrastructure.</li>
            </ul>
            <p className="mb-3">
              However, no method of electronic transmission or storage is completely secure. While we take reasonable steps to protect your information, we cannot guarantee absolute security.
            </p>
            <p>
              You are also responsible for protecting your account credentials and should not share OTPs, passwords, or authentication codes with unauthorized persons.
            </p>
          </section>

          {/* 12. Data Retention */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">12. Data Retention</h2>
            <p className="mb-2">We retain personal information for as long as reasonably necessary to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Provide and maintain our services;</li>
              <li>Complete transactions and fulfil orders;</li>
              <li>Provide customer support;</li>
              <li>Process refunds;</li>
              <li>Resolve disputes;</li>
              <li>Prevent fraud;</li>
              <li>Maintain required business records; and</li>
              <li>Comply with applicable legal, tax, accounting, and regulatory obligations.</li>
            </ul>
            <p>
              When information is no longer required for these purposes, we may delete, anonymize, or securely retain it where required or permitted by law.
            </p>
          </section>

          {/* 13. Your Rights and Choices */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">13. Your Rights and Choices</h2>
            <p className="mb-2">Subject to applicable law, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Access certain personal information associated with your account;</li>
              <li>Correct or update inaccurate information;</li>
              <li>Update your delivery addresses and profile information;</li>
              <li>Manage certain communication preferences;</li>
              <li>Withdraw permissions granted through your device settings;</li>
              <li>Request account deletion; and</li>
              <li>Contact us regarding questions or concerns about your information.</li>
            </ul>
            <p>
              Some information may be retained after account deletion where necessary for legal compliance, fraud prevention, dispute resolution, transaction records, or other legitimate purposes permitted or required by applicable law.
            </p>
          </section>

          {/* 14. Account and Personal Data Deletion */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">14. Account and Personal Data Deletion</h2>
            <p className="mb-3">
              You may request deletion of your Bhukkadh account and associated personal information through the available account settings or by contacting us through our designated account deletion process.
            </p>
            <p className="mb-3">
              You may also request deletion through the{" "}
              <Link href="/delete-account" className="text-primary font-bold hover:underline">
                Delete Account
              </Link>{" "}
              page available on the Platform.
            </p>
            <p className="mb-3">
              Upon receiving a valid deletion request, we will review and process the request in accordance with applicable law and our legitimate legal and operational obligations.
            </p>
            <p className="mb-2">Certain information may need to be retained for a limited period for purposes such as:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Legal compliance;</li>
              <li>Tax and accounting requirements;</li>
              <li>Fraud prevention;</li>
              <li>Transaction reconciliation;</li>
              <li>Dispute resolution; and</li>
              <li>Enforcement of our Terms and policies.</li>
            </ul>
            <p>Where applicable, retained information will be restricted to the extent reasonably necessary.</p>
          </section>

          {/* 15. Children's Privacy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">15. Children's Privacy</h2>
            <p className="mb-3">
              Bhukkadh is not intended to be independently used by children who are not legally permitted to enter into contracts under applicable law.
            </p>
            <p className="mb-3">
              If a person below the applicable legal age uses the Platform, such use should be with the involvement and consent of a parent or legal guardian where required by law.
            </p>
            <p>
              If we become aware that personal information has been improperly collected in violation of applicable law, we may take reasonable steps to delete or restrict such information.
            </p>
          </section>

          {/* 16. Third-Party Links and Services */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">16. Third-Party Links and Services</h2>
            <p className="mb-3">
              The Platform may contain links to or integrations with third-party websites, services, payment providers, maps, or other technology platforms.
            </p>
            <p className="mb-3">
              This Privacy Policy applies only to information processed by or on behalf of Bhukkadh.
            </p>
            <p className="mb-3">
              Third-party services may have their own privacy policies and terms. We encourage you to review the policies of relevant third-party services before providing information to them.
            </p>
            <p>Bhukkadh is not responsible for the privacy practices of independent third parties.</p>
          </section>

          {/* 17. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">17. Changes to This Privacy Policy</h2>
            <p className="mb-2">We may update this Privacy Policy from time to time to reflect changes in:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Our services;</li>
              <li>Technology;</li>
              <li>Business practices;</li>
              <li>Legal or regulatory requirements; or</li>
              <li>Other operational requirements.</li>
            </ul>
            <p>
              When we make material changes, we may provide notice through the Platform, by email, through notifications, or by updating the "Last Updated" date at the top of this Privacy Policy. Your continued use of the Platform after the updated Privacy Policy becomes effective will be subject to the revised policy.
            </p>
          </section>

          {/* 18. Contact Us */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">18. Contact Us</h2>
            <p className="mb-3">
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, you may contact us at:
            </p>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-sm space-y-2">
              <p><strong className="text-slate-900">Company:</strong> Hindustaan Innovations Pvt. Ltd.</p>
              <p><strong className="text-slate-900">Brand:</strong> Bhukkadh</p>
              <p>
                <strong className="text-slate-900">Email:</strong>{" "}
                <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                  support@hindustaan.in
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Helpline:</strong>{" "}
                <a href="tel:0771-299-4005" className="text-primary font-bold hover:underline">
                  0771- 299 - 4005
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Registered Office:</strong> CO: B-41, Sector-8A, Kamal Vihar, Raipur, Chhattisgarh – 492001, India
              </p>
            </div>
          </section>

          {/* 19. Grievance and Privacy Concerns */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">19. Grievance and Privacy Concerns</h2>
            <p className="mb-3">
              If you have a grievance, complaint, or concern relating to your personal information or the processing of information through the Platform, you may contact us using the details provided above.
            </p>
            <p className="mb-3">
              Privacy-related grievances and requests will be reviewed and addressed in accordance with applicable laws and our{" "}
              <Link href="/grievance" className="text-primary font-bold hover:underline">
                Grievance Redressal Mechanism
              </Link>
              .
            </p>
            <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm">
              <p>
                <strong className="text-slate-800">For general customer support:</strong>{" "}
                <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                  support@hindustaan.in
                </a>
              </p>
              <p>
                <strong className="text-slate-800">For privacy or data-related concerns:</strong>{" "}
                <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                  support@hindustaan.in
                </a>
              </p>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              We may request reasonable information to verify your identity before processing certain privacy-related requests.
            </p>
            <div className="mt-6 p-4 bg-primary/5 rounded-2xl border border-primary/20 text-slate-800 text-sm font-semibold text-center">
              By accessing or using Bhukkadh, you acknowledge that you have read and understood this Privacy Policy.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
