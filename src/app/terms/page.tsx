"use client";

import React from "react";
import Link from "next/link";
import { FileText, Shield, Scale, Mail, Phone, MapPin } from "lucide-react";
import PolicyLayout, { PolicyHeading } from "@/components/layout/PolicyLayout";

const headings: PolicyHeading[] = [
  {
    "id": "section-1",
    "title": "1. Acceptance of Terms"
  },
  {
    "id": "section-2",
    "title": "2. About Bhukkadh & Platform"
  },
  {
    "id": "section-3",
    "title": "3. User Eligibility"
  },
  {
    "id": "section-4",
    "title": "4. Accounts & Security"
  },
  {
    "id": "section-5",
    "title": "5. Restaurant Listings & Menus"
  },
  {
    "id": "section-6",
    "title": "6. Placing an Order"
  },
  {
    "id": "section-7",
    "title": "7. Pricing, Fees & Taxes"
  },
  {
    "id": "section-8",
    "title": "8. Payments"
  },
  {
    "id": "section-9",
    "title": "9. Payment Failures"
  },
  {
    "id": "section-10",
    "title": "10. Delivery & Pickup"
  },
  {
    "id": "section-11",
    "title": "11. Cancellations & Refunds"
  },
  {
    "id": "section-12",
    "title": "12. Restaurant Responsibilities"
  },
  {
    "id": "section-13",
    "title": "13. Food Allergies & Dietary"
  },
  {
    "id": "section-14",
    "title": "14. User Conduct"
  },
  {
    "id": "section-15",
    "title": "15. Promotions & Offers"
  },
  {
    "id": "section-16",
    "title": "16. Ratings & Reviews"
  },
  {
    "id": "section-17",
    "title": "17. Intellectual Property"
  },
  {
    "id": "section-18",
    "title": "18. Third-Party Services"
  },
  {
    "id": "section-19",
    "title": "19. Suspension & Termination"
  },
  {
    "id": "section-20",
    "title": "20. Disclaimer"
  },
  {
    "id": "section-21",
    "title": "21. Limitation of Liability"
  },
  {
    "id": "section-22",
    "title": "22. Indemnity"
  },
  {
    "id": "section-23",
    "title": "23. Privacy & Data Protection"
  },
  {
    "id": "section-24",
    "title": "24. Electronic Communications"
  },
  {
    "id": "section-25",
    "title": "25. Force Majeure"
  },
  {
    "id": "section-26",
    "title": "26. Governing Law"
  },
  {
    "id": "section-27",
    "title": "27. Grievance & Support"
  },
  {
    "id": "section-28",
    "title": "28. Contact & Company Details"
  },
  {
    "id": "section-29",
    "title": "29. Entire Agreement"
  }
];

export default function TermsOfServicePage() {
  return (
    <PolicyLayout
      currentPage="terms"
      badge="Legal"
      badgeIcon={<FileText className="w-5 h-5" />}
      title="Terms of Service"
      lastUpdated="August 25, 2026"
      headings={headings}
    >
      {/* 1. Acceptance of Terms */}
          <section id="section-1" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
            <p className="mb-3">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "Customer", "you", or "your") and{" "}
              <strong className="text-slate-900 dark:text-white">Hindustaan Innovations Pvt. Ltd.</strong>, operating the brand Bhukkadh ("Company", "Bhukkadh", "we", "us", or "our").
            </p>
            <p className="mb-3">
              These Terms govern your access to and use of the Bhukkadh website, mobile applications, and associated products, services, features, software, and technology platforms (collectively, the "Platform").
            </p>
            <p className="mb-3">
              By registering for, accessing, browsing, or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms and all applicable policies referenced herein, including our:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>
                <Link href="/privacy" className="text-primary font-bold hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-primary font-bold hover:underline">
                  Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-primary font-bold hover:underline">
                  Shipping & Delivery Policy
                </Link>
              </li>
            </ul>
            <p className="mb-3">
              If you do not agree to these Terms or any applicable policy, you must not access or use the Platform.
            </p>
            <p>
              We may update or modify these Terms from time to time. The updated version will be published on the Platform with a revised "Last Updated" date. Your continued use of the Platform after such changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* 2. About Bhukkadh and Our Platform */}
          <section id="section-2" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">2. About Bhukkadh and Our Platform</h2>
            <p className="mb-3">
              Bhukkadh operates an on-demand technology platform that enables Users to discover restaurants and food vendors, browse menus, place food and beverage orders, make payments, and coordinate delivery or pickup of orders. The Platform operates through three dedicated mobile applications: (i) <strong>Bhukkadh</strong> (for customers), (ii) <strong>Bhukkadh Partner</strong> (for restaurants and merchant partners), and (iii) <strong>Bhukkadh Rider</strong> (for delivery fleet partners).
            </p>
            <p className="mb-2">The Platform connects Users with:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Independent restaurants and food vendors ("Restaurant Partners") via the Bhukkadh Partner app;</li>
              <li>Independent delivery partners ("Riders" or "Delivery Partners") via the Bhukkadh Rider app; and</li>
              <li>Other third-party service providers necessary for providing the Platform.</li>
            </ul>
            <p className="mb-3">
              Bhukkadh acts as a technology and marketplace facilitator between Users, Restaurant Partners, and Delivery Partners.
            </p>
            <p className="mb-3">
              Unless expressly stated otherwise, Bhukkadh does not itself prepare, manufacture, package, or sell food items listed by independent Restaurant Partners. The preparation, ingredients, food quality, hygiene, packaging, safety, and legal compliance of food items are primarily the responsibility of the respective Restaurant Partner.
            </p>
            <p>
              Bhukkadh may, however, provide customer support and facilitate communication or resolution of complaints relating to orders placed through the Platform.
            </p>
          </section>

          {/* 3. User Eligibility */}
          <section id="section-3" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">3. User Eligibility</h2>
            <p className="mb-2">To create or use a Bhukkadh account, you must:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Be legally capable of entering into a binding contract under applicable law;</li>
              <li>Be at least 18 years of age, or use the Platform with the consent and supervision of a parent or legal guardian;</li>
              <li>Provide accurate, complete, and current information during registration and use of the Platform; and</li>
              <li>Comply with these Terms and all applicable laws and regulations.</li>
            </ul>
            <p>You are responsible for ensuring that your use of the Platform is lawful in your jurisdiction.</p>
          </section>

          {/* 4. User Accounts and Account Security */}
          <section id="section-4" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">4. User Accounts and Account Security</h2>
            <p className="mb-3">Certain features of the Platform may require you to create and maintain an account.</p>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Provide accurate and complete registration information;</li>
              <li>Keep your mobile number, email address, delivery address, and other account details up to date;</li>
              <li>Maintain the confidentiality of your login credentials and verification codes;</li>
              <li>Not share your account with unauthorized persons; and</li>
              <li>Immediately notify us if you suspect unauthorized access to your account.</li>
            </ul>
            <p className="mb-3">
              You are responsible for activities carried out through your account unless such activity results directly from a security failure attributable to Bhukkadh.
            </p>
            <p>
              We reserve the right to suspend, restrict, or terminate accounts that contain false information, are used fraudulently, violate these Terms, or pose a risk to the Platform, Restaurant Partners, Riders, or other Users.
            </p>
          </section>

          {/* 5. Restaurant Listings, Menu Information and Availability */}
          <section id="section-5" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Restaurant Listings, Menu Information and Availability</h2>
            <p className="mb-3">
              Restaurant menus, food descriptions, images, prices, ingredients, preparation times, availability, and other listing information may be provided or maintained by Restaurant Partners.
            </p>
            <p className="mb-3">
              While we make reasonable efforts to ensure that information displayed on the Platform is accurate, Bhukkadh does not guarantee that all menu information will always be complete, current, or error-free.
            </p>
            <p className="mb-2">A Restaurant Partner may:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Change menu prices;</li>
              <li>Modify food items;</li>
              <li>Mark items as unavailable;</li>
              <li>Substitute or remove ingredients;</li>
              <li>Change preparation times; or</li>
              <li>Temporarily or permanently stop accepting orders.</li>
            </ul>
            <p className="mb-3">
              Availability displayed on the Platform does not guarantee that an item will remain available when the order is accepted by the Restaurant Partner.
            </p>
            <p>
              If an ordered item becomes unavailable, the Restaurant Partner or Bhukkadh may contact you regarding a suitable alternative, partial cancellation, or refund, as applicable.
            </p>
          </section>

          {/* 6. Placing an Order */}
          <section id="section-6" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Placing an Order</h2>
            <p className="mb-3">
              When you place an order through the Platform, you are submitting a request to the relevant Restaurant Partner to prepare and fulfil your selected items.
            </p>
            <p className="mb-2">Before placing an order, you are responsible for reviewing:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>The selected food items;</li>
              <li>Item quantities;</li>
              <li>Delivery address or pickup details;</li>
              <li>Applicable charges;</li>
              <li>Taxes;</li>
              <li>Instructions provided with the order; and</li>
              <li>The final payable amount.</li>
            </ul>
            <p className="mb-3">
              An order is subject to acceptance by the relevant Restaurant Partner and, where applicable, successful payment authorization.
            </p>
            <p className="mb-2">We may not process or may cancel an order where:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>The Restaurant Partner is unavailable or unable to fulfil the order;</li>
              <li>One or more selected items are unavailable;</li>
              <li>Payment authorization fails;</li>
              <li>Incorrect or suspicious information is provided;</li>
              <li>The delivery location is outside the serviceable area; or</li>
              <li>We reasonably believe that the order is fraudulent or violates applicable law or these Terms.</li>
            </ul>
          </section>

          {/* 7. Pricing, Fees and Taxes */}
          <section id="section-7" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">7. Pricing, Fees and Taxes</h2>
            <p className="mb-3">
              The prices displayed on the Platform may include or exclude applicable taxes as indicated during checkout.
            </p>
            <p className="mb-2">The total amount payable may include, where applicable:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Food or beverage item prices;</li>
              <li>Packaging or handling charges;</li>
              <li>Delivery charges;</li>
              <li>Platform or service fees;</li>
              <li>Applicable government taxes, including GST;</li>
              <li>Additional charges arising from special delivery conditions, where clearly disclosed before payment; and</li>
              <li>Other applicable charges displayed during checkout.</li>
            </ul>
            <p className="mb-3">
              All applicable charges will be presented to you before you complete the payment process.
            </p>
            <p className="mb-3">
              Prices and charges may vary depending on factors such as the Restaurant Partner, order value, location, distance, time, promotional offers, and applicable taxes.
            </p>
            <p>
              Promotional discounts or offers may be subject to separate terms and eligibility requirements.
            </p>
          </section>

          {/* 8. Payments */}
          <section id="section-8" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">8. Payments</h2>
            <p className="mb-3">
              Bhukkadh may offer multiple payment methods through authorized third-party payment service providers.
            </p>
            <p className="mb-2">Available payment methods may include:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>UPI;</li>
              <li>Credit Cards;</li>
              <li>Debit Cards;</li>
              <li>Net Banking;</li>
              <li>Authorized Digital Wallets; and</li>
              <li>Other payment methods made available on the Platform from time to time.</li>
            </ul>
            <p className="mb-3">
              Online payments are processed through authorized third-party payment aggregators and payment service providers, including <strong className="text-slate-900 dark:text-white">Razorpay</strong>, where applicable.
            </p>
            <p className="mb-3">
              By placing an order and initiating payment, you authorize the applicable payment service provider to process the payment for the final order amount displayed during checkout.
            </p>
            <p className="mb-3">
              Bhukkadh does not store complete card details, UPI credentials, PINs, or other sensitive payment authentication information.
            </p>
            <p className="mb-2">You agree that:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>The payment information provided by you is accurate and lawfully available for your use;</li>
              <li>You will not use fraudulent or unauthorized payment methods;</li>
              <li>You will not attempt to reverse, dispute, or charge back a legitimate transaction without reasonable grounds; and</li>
              <li>You will cooperate with reasonable verification or investigation processes relating to suspicious transactions.</li>
            </ul>
            <p>
              Payment confirmation does not guarantee fulfilment of an order if the Restaurant Partner is unable to accept or fulfil the order. In such cases, any eligible refund will be processed in accordance with our{" "}
              <Link href="/refund" className="text-primary font-bold hover:underline">
                Cancellation & Refund Policy
              </Link>
              .
            </p>
          </section>

          {/* 9. Payment Failures and Duplicate Transactions */}
          <section id="section-9" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">9. Payment Failures and Duplicate Transactions</h2>
            <p className="mb-3">
              In certain circumstances, a payment may fail, remain pending, or be temporarily debited without immediate order confirmation.
            </p>
            <p className="mb-3">
              Where a payment is successfully captured but an order cannot be processed or accepted, we will initiate a refund in accordance with our applicable Cancellation & Refund Policy.
            </p>
            <p className="mb-3">
              If you believe you have been charged more than once for the same order, please contact our support team with your order details and transaction information.
            </p>
            <p>
              We may investigate payment discrepancies and coordinate with the applicable payment service provider or banking institution to resolve the issue.
            </p>
          </section>

          {/* 10. Delivery and Pickup */}
          <section id="section-10" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">10. Delivery and Pickup</h2>
            <p className="mb-3">
              Orders may be delivered by independent Delivery Partners or made available for pickup, depending on the Restaurant Partner and options available in your location.
            </p>
            <p className="mb-2">Estimated delivery times shown on the Platform are approximate and may change due to factors including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Restaurant preparation time;</li>
              <li>Traffic conditions;</li>
              <li>Weather;</li>
              <li>Rider availability;</li>
              <li>Location and distance;</li>
              <li>Technical issues; or</li>
              <li>Other circumstances beyond reasonable control.</li>
            </ul>
            <p className="mb-3">
              You are responsible for providing an accurate and accessible delivery address and being available to receive the order.
            </p>
            <p className="mb-2">If delivery cannot be completed because:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>You are unreachable;</li>
              <li>The delivery address is incorrect or inaccessible;</li>
              <li>You refuse to accept the order without a valid reason; or</li>
              <li>The order cannot be delivered due to circumstances attributable to you,</li>
            </ul>
            <p className="mb-3">
              the order may be treated as delivered, returned, cancelled, or otherwise handled according to the circumstances. Refund eligibility in such cases will be determined in accordance with our Cancellation & Refund Policy.
            </p>
            <p>
              Additional delivery terms are available in our{" "}
              <Link href="/shipping" className="text-primary font-bold hover:underline">
                Shipping & Delivery Policy
              </Link>
              .
            </p>
          </section>

          {/* 11. Cancellations and Refunds */}
          <section id="section-11" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">11. Cancellations and Refunds</h2>
            <p className="mb-3">
              Order cancellations and refund requests are governed by our{" "}
              <Link href="/refund" className="text-primary font-bold hover:underline">
                Cancellation & Refund Policy
              </Link>
              .
            </p>
            <p className="mb-2">Depending on the status of an order, cancellation may be:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Allowed before restaurant acceptance or preparation;</li>
              <li>Subject to approval after preparation has started; or</li>
              <li>Not available once the order has been prepared, dispatched, or delivered, except in circumstances covered by our applicable refund policy.</li>
            </ul>
            <p className="mb-3">
              Eligible refunds may include full or partial refunds depending on the nature of the issue and the stage of order fulfilment.
            </p>
            <p className="mb-3">
              Where a refund is approved for an online payment, the refund will generally be initiated to the original source payment method. Actual credit timelines may depend on the payment method, issuing bank, payment network, or payment service provider.
            </p>
            <p>
              Unless otherwise communicated, approved refunds may take approximately <strong className="text-slate-800 dark:text-slate-200">5–7 business days</strong> to reflect in the original payment source.
            </p>
          </section>

          {/* 12. Restaurant Partner Responsibilities */}
          <section id="section-12" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">12. Restaurant Partner Responsibilities</h2>
            <p className="mb-2">
              Restaurant Partners are responsible for matters relating to the food and beverages they prepare and sell, including, where applicable:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Food quality;</li>
              <li>Ingredients;</li>
              <li>Preparation;</li>
              <li>Hygiene and sanitation;</li>
              <li>Packaging;</li>
              <li>Allergen information;</li>
              <li>Food safety;</li>
              <li>Product descriptions; and</li>
              <li>Compliance with applicable food safety and licensing laws.</li>
            </ul>
            <p className="mb-3">
              Restaurant Partners are responsible for obtaining and maintaining the licenses, registrations, and approvals required to operate their food business.
            </p>
            <p>
              Bhukkadh may take reasonable measures to address customer complaints or concerns but does not guarantee that every product will meet every User's personal preferences or expectations.
            </p>
          </section>

          {/* 13. Food Allergies and Dietary Requirements */}
          <section id="section-13" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">13. Food Allergies and Dietary Requirements</h2>
            <p className="mb-3">
              If you have a food allergy, intolerance, dietary restriction, or other food-related requirement, you should carefully review available product information and, where necessary, contact the Restaurant Partner before placing an order.
            </p>
            <p className="mb-3">
              You are responsible for clearly communicating any special instructions or dietary requirements through the options available on the Platform.
            </p>
            <p className="mb-3">
              However, Bhukkadh cannot guarantee that food items are free from allergens or cross-contamination unless expressly confirmed by the relevant Restaurant Partner.
            </p>
            <p>Users with severe allergies or medical concerns should exercise appropriate caution before ordering.</p>
          </section>

          {/* 14. User Conduct */}
          <section id="section-14" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">14. User Conduct</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Provide false, misleading, or fraudulent information;</li>
              <li>Use stolen, unauthorized, or fraudulent payment methods;</li>
              <li>Place fake or fraudulent orders;</li>
              <li>Abuse, threaten, harass, or harm Restaurant Partners, Riders, customer support personnel, or other Users;</li>
              <li>Use the Platform for unlawful purposes;</li>
              <li>Attempt to gain unauthorized access to the Platform, servers, APIs, databases, or accounts;</li>
              <li>Interfere with the security or normal operation of the Platform;</li>
              <li>Introduce malicious software, viruses, or harmful code;</li>
              <li>Manipulate ratings, reviews, promotions, offers, or referral programs;</li>
              <li>Create multiple accounts for fraudulent purposes; or</li>
              <li>Reverse engineer, copy, scrape, or misuse the Platform except as permitted by applicable law.</li>
            </ul>
            <p>
              We may investigate suspected violations and take appropriate action, including order cancellation, account suspension, account termination, or cooperation with law enforcement authorities where required.
            </p>
          </section>

          {/* 15. Promotions, Coupons and Offers */}
          <section id="section-15" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">15. Promotions, Coupons and Offers</h2>
            <p className="mb-3">
              Bhukkadh, Restaurant Partners, or third parties may offer promotional codes, discounts, coupons, cashback, or other offers.
            </p>
            <p className="mb-2">Unless otherwise specified:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Promotions may have limited validity;</li>
              <li>Promotions may be subject to minimum order values;</li>
              <li>Promotions may apply only to eligible Users, restaurants, locations, or payment methods;</li>
              <li>Promotions cannot be exchanged for cash;</li>
              <li>Promotions may be cancelled or withdrawn in cases of fraud or misuse; and</li>
              <li>Only one offer may be applicable to an order unless expressly stated otherwise.</li>
            </ul>
            <p>We reserve the right to modify or discontinue promotional offers at any time, subject to applicable law.</p>
          </section>

          {/* 16. Ratings, Reviews and Feedback */}
          <section id="section-16" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">16. Ratings, Reviews and Feedback</h2>
            <p className="mb-3">The Platform may allow Users to submit ratings, reviews, comments, feedback, or other content.</p>
            <p className="mb-2">By submitting such content, you agree that:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Your content is accurate and based on genuine experience;</li>
              <li>Your content does not violate applicable law or the rights of another person;</li>
              <li>Your content is not abusive, defamatory, misleading, threatening, or obscene; and</li>
              <li>We may moderate, remove, or restrict content that violates our policies or applicable law.</li>
            </ul>
            <p>
              You grant Bhukkadh a non-exclusive right to use, reproduce, display, and publish your submitted feedback or reviews for operating and improving the Platform.
            </p>
          </section>

          {/* 17. Intellectual Property */}
          <section id="section-17" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">17. Intellectual Property</h2>
            <p className="mb-3">
              The Platform, including its software, design, logos, trademarks, text, graphics, interfaces, and other proprietary content, is owned by or licensed to Bhukkadh or its respective licensors.
            </p>
            <p className="mb-3">You may use the Platform only for its intended personal and lawful purposes.</p>
            <p className="mb-3">
              You may not copy, reproduce, distribute, modify, sell, license, or commercially exploit any part of the Platform without prior written permission from the relevant rights holder.
            </p>
            <p>"Bhukkadh" and associated brand assets may not be used without authorization.</p>
          </section>

          {/* 18. Third-Party Services */}
          <section id="section-18" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">18. Third-Party Services</h2>
            <p className="mb-2">The Platform may integrate with or link to third-party services, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Payment gateways;</li>
              <li>Mapping and navigation services;</li>
              <li>Authentication providers;</li>
              <li>Communication services; and</li>
              <li>Restaurant or delivery technology partners.</li>
            </ul>
            <p className="mb-3">
              Your use of such third-party services may also be subject to their respective terms and privacy policies.
            </p>
            <p>Bhukkadh is not responsible for third-party services that are outside our reasonable control.</p>
          </section>

          {/* 19. Suspension and Termination */}
          <section id="section-19" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">19. Suspension and Termination</h2>
            <p className="mb-2">We may suspend, restrict, or terminate your access to the Platform if we reasonably believe that:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>You have violated these Terms;</li>
              <li>Your account is being used fraudulently;</li>
              <li>Your activity creates a security or legal risk;</li>
              <li>You have repeatedly abused the Platform or its partners; or</li>
              <li>We are required to do so by law or a lawful authority.</li>
            </ul>
            <p>
              You may stop using the Platform at any time and may request account closure through the available account settings or customer support process, subject to applicable legal and record-keeping requirements.
            </p>
          </section>

          {/* 20. Disclaimer */}
          <section id="section-20" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">20. Disclaimer</h2>
            <p className="mb-3">The Platform is provided on an "as available" basis.</p>
            <p className="mb-2">While we strive to maintain a reliable service, we do not guarantee that:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>The Platform will always be uninterrupted or error-free;</li>
              <li>Every Restaurant Partner or Rider will always be available;</li>
              <li>Every listed item will remain available; or</li>
              <li>Estimated delivery times will always be exact.</li>
            </ul>
            <p>Nothing in these Terms excludes any consumer rights that cannot legally be excluded under applicable law.</p>
          </section>

          {/* 21. Limitation of Liability */}
          <section id="section-21" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">21. Limitation of Liability</h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, <strong className="text-slate-900 dark:text-white">Hindustaan Innovations Pvt. Ltd.</strong>, its directors, officers, employees, affiliates, and service providers shall not be liable for any indirect, incidental, special, punitive, or consequential damages arising from your use of or inability to use the Platform.
            </p>
            <p className="mb-3">
              Bhukkadh's liability, where legally established and permitted to be limited, shall be limited to the amount paid by the User for the specific order giving rise to the claim, except where applicable law requires otherwise.
            </p>
            <p>Nothing in these Terms limits liability where such limitation is prohibited by applicable law.</p>
          </section>

          {/* 22. Indemnity */}
          <section id="section-22" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">22. Indemnity</h2>
            <p className="mb-2">
              You agree to indemnify and hold harmless Hindustaan Innovations Pvt. Ltd. and its directors, officers, employees, affiliates, Restaurant Partners, and service providers from claims, losses, liabilities, damages, or expenses arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Your violation of these Terms;</li>
              <li>Your unlawful use of the Platform;</li>
              <li>Your fraudulent or unauthorized activity; or</li>
              <li>Your violation of the rights of another person.</li>
            </ul>
            <p>This clause shall apply to the extent permitted by applicable law.</p>
          </section>

          {/* 23. Privacy and Data Protection */}
          <section id="section-23" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">23. Privacy and Data Protection</h2>
            <p className="mb-3">
              Your use of the Platform is also governed by our{" "}
              <Link href="/privacy" className="text-primary font-bold hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, store, and protect personal information.
            </p>
            <p>
              By using the Platform, you acknowledge that your information may be processed as described in our Privacy Policy and as permitted or required by applicable law.
            </p>
          </section>

          {/* 24. Electronic Communications */}
          <section id="section-24" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">24. Electronic Communications</h2>
            <p className="mb-2">By using the Platform, you consent to receive communications from Bhukkadh through available channels, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Mobile notifications;</li>
              <li>SMS;</li>
              <li>WhatsApp, where permitted;</li>
              <li>Email;</li>
              <li>In-app notifications; and</li>
              <li>Other electronic communication methods.</li>
            </ul>
            <p className="mb-3">
              These communications may include order updates, account information, transactional messages, security notifications, and, where permitted, promotional communications.
            </p>
            <p>You may manage certain communication preferences through the Platform or other available opt-out mechanisms.</p>
          </section>

          {/* 25. Force Majeure */}
          <section id="section-25" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">25. Force Majeure</h2>
            <p>
              Bhukkadh shall not be responsible for delays or failure to perform obligations caused by circumstances beyond its reasonable control, including natural disasters, severe weather, government actions, internet or telecommunications failures, strikes, civil disturbances, epidemics, or other unforeseen events.
            </p>
          </section>

          {/* 26. Governing Law and Jurisdiction */}
          <section id="section-26" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">26. Governing Law and Jurisdiction</h2>
            <p className="mb-3">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India.
            </p>
            <p>
              Subject to applicable law, any dispute, controversy, or claim arising out of or relating to these Terms or the use of the Platform shall be subject to the jurisdiction of the competent courts in{" "}
              <strong className="text-slate-900 dark:text-white">Raipur, Chhattisgarh, India</strong>.
            </p>
          </section>

          {/* 27. Grievance and Customer Support */}
          <section id="section-27" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">27. Grievance and Customer Support</h2>
            <p className="mb-3">
              For order-related issues, refunds, complaints, questions, or support requests, you may contact us through our{" "}
              <Link href="/grievance" className="text-primary font-bold hover:underline">
                Grievance Redressal
              </Link>{" "}
              channel or the contact details below.
            </p>
            <p>
              We will make reasonable efforts to review and address legitimate customer concerns in accordance with applicable laws and our internal support processes.
            </p>
          </section>

          {/* 28. Contact and Company Details */}
          <section id="section-28" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">28. Contact and Company Details</h2>
            <div className="mt-3 p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm space-y-2">
              <p><strong className="text-slate-900 dark:text-white">Legal Entity:</strong> Hindustaan Innovations Pvt. Ltd.</p>
              <p><strong className="text-slate-900 dark:text-white">Brand:</strong> Bhukkadh</p>
              <p>
                <strong className="text-slate-900 dark:text-white">Support Email:</strong>{" "}
                <a href="mailto:support@hindustaan.in" className="text-primary font-bold hover:underline">
                  support@hindustaan.in
                </a>
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Phone:</strong>{" "}
                <a href="tel:0771-299-4005" className="text-primary font-bold hover:underline">
                  0771- 299 - 4005
                </a>
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Registered Office:</strong> CO: B-41, Sector-8A, Kamal Vihar, Raipur, Chhattisgarh – 492001, Chhattisgarh, India
              </p>
            </div>
          </section>

          {/* 29. Entire Agreement */}
          <section id="section-29" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">29. Entire Agreement</h2>
            <p className="mb-3">
              These Terms, together with the Privacy Policy, Cancellation & Refund Policy, Shipping & Delivery Policy, and any other policies expressly incorporated by reference, constitute the entire agreement between you and Bhukkadh regarding your use of the Platform.
            </p>
            <p className="mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to remain valid and enforceable to the extent permitted by law.
            </p>
            <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30 text-slate-800 dark:text-slate-200 text-sm font-semibold text-center">
              By continuing to use Bhukkadh, you acknowledge that you have read and agreed to these Terms of Service.
            </div>
          </section>
    </PolicyLayout>
  );
}
