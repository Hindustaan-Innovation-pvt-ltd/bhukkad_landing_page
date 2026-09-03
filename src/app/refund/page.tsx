"use client";

import React from "react";
import Link from "next/link";
import { RotateCcw, AlertCircle, CheckCircle2, Clock, Mail, Phone, MapPin, ShieldAlert, CreditCard } from "lucide-react";
import PolicyLayout, { PolicyHeading } from "@/components/layout/PolicyLayout";

const headings: PolicyHeading[] = [
  {
    "id": "section-1",
    "title": "1. Introduction"
  },
  {
    "id": "section-2",
    "title": "2. Customer Cancellations"
  },
  {
    "id": "section-3",
    "title": "3. Restaurant Cancellations"
  },
  {
    "id": "section-4",
    "title": "4. Bhukkadh Cancellations"
  },
  {
    "id": "section-5",
    "title": "5. Customer Delivery Failure"
  },
  {
    "id": "section-6",
    "title": "6. Missing or Damaged Items"
  },
  {
    "id": "section-7",
    "title": "7. Food Quality Complaints"
  },
  {
    "id": "section-8",
    "title": "8. Payment Failures"
  },
  {
    "id": "section-9",
    "title": "9. Duplicate Payments"
  },
  {
    "id": "section-10",
    "title": "10. Refund Eligibility"
  },
  {
    "id": "section-11",
    "title": "11. Non-Refundable Situations"
  },
  {
    "id": "section-12",
    "title": "12. Refund Method"
  },
  {
    "id": "section-13",
    "title": "13. Processing Timeline"
  },
  {
    "id": "section-14",
    "title": "14. Status and Delays"
  },
  {
    "id": "section-15",
    "title": "15. Promotional Offers"
  },
  {
    "id": "section-16",
    "title": "16. Refund Abuse Claims"
  },
  {
    "id": "section-17",
    "title": "17. Changes to Orders"
  },
  {
    "id": "section-18",
    "title": "18. Customer Support"
  },
  {
    "id": "section-19",
    "title": "19. Policy Updates"
  }
];

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      currentPage="refund"
      badge="Policy"
      badgeIcon={<RotateCcw className="w-5 h-5" />}
      title="Cancellation & Refund Policy"
      lastUpdated="August 25, 2026"
      headings={headings}
    >
      {/* 1. Introduction */}
          <section id="section-1" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Introduction</h2>
            <p className="mb-3">
              This Cancellation & Refund Policy ("Policy") explains the circumstances under which orders placed through the Bhukkadh platform may be cancelled and when refunds may be issued.
            </p>
            <p className="mb-3">
              Bhukkadh is a food ordering and delivery technology platform owned and operated by{" "}
              <strong className="text-slate-900 dark:text-white">Hindustaan Innovations Pvt. Ltd.</strong>
            </p>
            <p className="mb-3">
              Because food and beverages are generally prepared specifically for each order and are perishable, cancellation and refund eligibility may depend on the stage of order preparation and the circumstances resulting in the cancellation or refund request.
            </p>
            <p>
              This Policy should be read together with our{" "}
              <Link href="/terms" className="text-primary font-bold hover:underline">
                Terms of Service
              </Link>
              ,{" "}
              <Link href="/privacy" className="text-primary font-bold hover:underline">
                Privacy Policy
              </Link>
              , and{" "}
              <Link href="/shipping" className="text-primary font-bold hover:underline">
                Shipping & Delivery Policy
              </Link>
              .
            </p>
          </section>

          {/* 2. Customer-Initiated Order Cancellation */}
          <section id="section-2" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">2. Customer-Initiated Order Cancellation</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">2.1 Cancellation Before Restaurant Acceptance</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Customers may generally cancel an order before the Restaurant Partner accepts the order or begins preparation.
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Where the cancellation is successfully completed before preparation begins, the customer will generally be eligible for a{" "}
                  <strong className="text-slate-900 dark:text-white">full refund</strong> of the amount paid for the cancelled order.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  The refund will be processed to the original payment source, subject to applicable payment processing timelines.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">2.2 Cancellation After Restaurant Acceptance</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Once the Restaurant Partner has accepted the order and started preparing the food, cancellation may no longer be available.
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  If cancellation is requested after preparation has started, the customer may be charged up to the full value of the order because the food may have already been prepared specifically for that customer and cannot ordinarily be resold.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Any applicable cancellation charge will be communicated or reflected through the Platform where technically applicable.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">2.3 Cancellation After Dispatch</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Once the order has been prepared and handed over to the Delivery Partner, cancellation will generally not be permitted except where required by applicable law or where Bhukkadh determines that cancellation is appropriate due to an operational issue.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Restaurant-Initiated Cancellations */}
          <section id="section-3" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Restaurant-Initiated Cancellations</h2>
            <p className="mb-2">A Restaurant Partner may cancel an order in circumstances including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>One or more ordered items becoming unavailable;</li>
              <li>Restaurant closure;</li>
              <li>Kitchen or equipment failure;</li>
              <li>Inability to prepare the order;</li>
              <li>Excessive operational load;</li>
              <li>Incorrect menu availability information; or</li>
              <li>Other circumstances preventing the Restaurant Partner from fulfilling the order.</li>
            </ul>
            <p className="mb-2">
              Where an order is cancelled by the Restaurant Partner before successful fulfilment and the customer has already made payment, Bhukkadh will generally initiate an appropriate refund for the cancelled order.
            </p>
            <p>
              Where the cancellation is attributable to the Restaurant Partner and the order has not been fulfilled, no cancellation charge will generally be imposed on the customer.
            </p>
          </section>

          {/* 4. Bhukkadh-Initiated Cancellations */}
          <section id="section-4" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Bhukkadh-Initiated Cancellations</h2>
            <p className="mb-2">Bhukkadh may cancel an order where reasonably necessary, including in circumstances such as:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>No suitable Delivery Partner being available;</li>
              <li>Technical or system failures;</li>
              <li>Serviceability restrictions;</li>
              <li>Fraud or suspicious activity;</li>
              <li>Payment verification failure;</li>
              <li>Severe weather or safety concerns;</li>
              <li>Government or local restrictions;</li>
              <li>Restaurant operational issues; or</li>
              <li>Other circumstances preventing safe or reasonable fulfilment.</li>
            </ul>
            <p>
              Where Bhukkadh cancels an order that has already been successfully paid for and the customer is eligible for a refund, the applicable refund will generally be initiated to the original payment source.
            </p>
          </section>

          {/* 5. Delivery Failure Caused by the Customer */}
          <section id="section-5" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Delivery Failure Caused by the Customer</h2>
            <p className="mb-2">A customer may become ineligible for a refund where an order cannot be delivered because of circumstances attributable to the customer, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Providing an incorrect or incomplete delivery address;</li>
              <li>Providing an unreachable or incorrect phone number;</li>
              <li>Failing to respond to reasonable calls or delivery communications;</li>
              <li>Refusing to accept the order without a valid reason;</li>
              <li>Failing to provide required building or access instructions; or</li>
              <li>Failing to be available to receive the order.</li>
            </ul>
            <p className="mb-3">
              The Delivery Partner may make reasonable attempts to contact the customer before the order is treated as a failed delivery.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">
                Because food and beverages are perishable and are prepared specifically for the order, a failed delivery caused by the customer may not qualify for a refund.
              </strong>
            </p>
          </section>

          {/* 6. Missing, Incorrect, Damaged, or Spilled Items */}
          <section id="section-6" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Missing, Incorrect, Damaged, or Spilled Items</h2>
            <p className="mb-2">If an order is delivered with an issue such as:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Missing item(s);</li>
              <li>Incorrect item(s);</li>
              <li>Significant packaging damage;</li>
              <li>Significant food spillage;</li>
              <li>Items that are materially different from the ordered items; or</li>
              <li>Other fulfilment issues,</li>
            </ul>
            <p className="mb-3">
              the customer should report the issue through the Bhukkadh application or by contacting customer support as soon as reasonably possible. For best results, complaints should generally be submitted{" "}
              <strong className="text-slate-900 dark:text-white">within 12 hours of delivery</strong>.
            </p>
            <p className="mb-2">Customers may be requested to provide:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Order ID;</li>
              <li>Description of the issue;</li>
              <li>Photographs of the delivered food;</li>
              <li>Photographs of packaging, where relevant; and</li>
              <li>Other information reasonably necessary to investigate the complaint.</li>
            </ul>
            <p className="mb-2">
              After reviewing the available information, Bhukkadh may provide an appropriate resolution, which may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Replacement, where available;</li>
              <li>Partial refund;</li>
              <li>Full refund; or</li>
              <li>Other appropriate resolution.</li>
            </ul>
            <p>The amount of any refund will depend on the nature and extent of the verified issue.</p>
          </section>

          {/* 7. Food Quality Complaints */}
          <section id="section-7" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">7. Food Quality Complaints</h2>
            <p className="mb-3">
              If you believe that an order has a significant food quality, safety, or preparation issue, you should contact Bhukkadh Support as soon as possible after delivery.
            </p>
            <p className="mb-2">Complaints may be reviewed based on information including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Order details;</li>
              <li>Customer description;</li>
              <li>Photographs or other evidence;</li>
              <li>Restaurant information;</li>
              <li>Delivery information; and</li>
              <li>Other relevant circumstances.</li>
            </ul>
            <p className="mb-3">
              Bhukkadh may coordinate with the relevant Restaurant Partner to investigate the complaint.
            </p>
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
              Minor subjective preferences, such as personal taste preferences, spice preferences, or dissatisfaction where the food was prepared and delivered substantially as ordered, may not qualify for a refund.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Nothing in this section limits any rights or remedies available to customers under applicable law.</p>
          </section>

          {/* 8. Payment Failure and Order Not Confirmed */}
          <section id="section-8" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">8. Payment Failure and Order Not Confirmed</h2>
            <p className="mb-3">
              Sometimes a payment may appear to have been deducted from a customer's bank account even though the order is not successfully confirmed.
            </p>
            <p className="mb-3">
              If an amount is successfully debited but the order is not successfully created or confirmed, Bhukkadh may initiate or facilitate reconciliation and refund processing through the applicable payment service provider.
            </p>
            <p className="mb-3">
              The customer may be required to provide transaction details or payment references to assist with reconciliation.
            </p>
            <p>
              Refund timelines in such cases depend on the payment gateway, bank, card network, UPI system, or other applicable payment service provider.
            </p>
          </section>

          {/* 9. Duplicate Payments */}
          <section id="section-9" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">9. Duplicate Payments</h2>
            <p className="mb-3">
              If a customer is charged more than once for the same order due to a technical or payment processing issue, Bhukkadh will review the transaction records.
            </p>
            <p className="mb-3">
              Where a duplicate payment is confirmed, the excess amount will be eligible for refund to the applicable original payment source.
            </p>
            <p>
              Customers should contact Bhukkadh Support with the relevant order ID and payment transaction details if they believe a duplicate charge has occurred.
            </p>
          </section>

          {/* 10. Refund Eligibility */}
          <section id="section-10" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">10. Refund Eligibility</h2>
            <p className="mb-3">Depending on the circumstances, a customer may be eligible for:</p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Full Refund</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">A full refund may generally be applicable where:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>An order is cancelled before preparation begins;</li>
                  <li>The Restaurant Partner cancels the order and the order cannot be fulfilled;</li>
                  <li>Bhukkadh cancels an order for an operational reason and the order cannot be fulfilled;</li>
                  <li>A payment is successfully captured but the order is not created or confirmed; or</li>
                  <li>Another circumstance warrants a full refund following review.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Partial Refund</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">A partial refund may be applicable where:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <li>One or more items are missing;</li>
                  <li>An incorrect item is delivered;</li>
                  <li>Part of an order is materially affected;</li>
                  <li>A verified issue affects only part of the order; or</li>
                  <li>Another circumstance warrants a partial refund.</li>
                </ul>
                <p className="text-xs text-slate-500 dark:text-slate-400">The final refund amount may depend on the nature and extent of the issue.</p>
              </div>
            </div>
          </section>

          {/* 11. Non-Refundable or Generally Non-Eligible Situations */}
          <section id="section-11" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">11. Non-Refundable or Generally Non-Eligible Situations</h2>
            <p className="mb-2">A refund will generally not be available where:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>The customer cancels after food preparation has begun, subject to applicable law;</li>
              <li>The customer provides an incorrect or incomplete delivery address;</li>
              <li>The customer is unreachable after reasonable delivery attempts;</li>
              <li>The customer refuses to accept a correctly prepared order without a valid reason;</li>
              <li>The customer fails to provide reasonable access to the delivery location;</li>
              <li>The customer fails to collect a pickup order within a reasonable period;</li>
              <li>The complaint relates only to subjective taste preferences where the order was correctly prepared;</li>
              <li>The customer misuses promotional offers or refund mechanisms; or</li>
              <li>The claim is determined to be fraudulent or unsupported after reasonable review.</li>
            </ul>
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">Bhukkadh may consider exceptional circumstances on a case-by-case basis.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Nothing in this section limits mandatory consumer rights or remedies available under applicable law.</p>
          </section>

          {/* 12. Refund Method */}
          <section id="section-12" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">12. Refund Method</h2>
            <p className="mb-3">
              <strong className="text-slate-900 dark:text-white">
                Approved refunds for online payments will generally be processed to the original payment source used for the transaction.
              </strong>
            </p>
            <p className="mb-2">Depending on the payment method, this may include:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>UPI account;</li>
              <li>Credit Card;</li>
              <li>Debit Card;</li>
              <li>Net Banking account;</li>
              <li>Authorized Wallet; or</li>
              <li>Another original payment method supported by the payment provider.</li>
            </ul>
            <p>Bhukkadh generally does not redirect refunds to an unrelated bank account or third-party payment method.</p>
          </section>

          {/* 13. Refund Processing Timeline */}
          <section id="section-13" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">13. Refund Processing Timeline</h2>
            <p className="mb-3">
              Once a refund has been approved, Bhukkadh will initiate the refund through the applicable payment processing system within a reasonable processing period.
            </p>
            <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30 space-y-2 mb-3">
              <p className="text-slate-800 dark:text-slate-200 font-semibold text-sm">
                Where applicable, Bhukkadh aims to initiate approved refunds <span className="text-primary font-bold">within 24 hours</span> of approval.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                After initiation, the amount may generally take approximately <strong className="text-slate-900 dark:text-white">5–7 business days</strong> to appear in the customer's account or statement.
              </p>
            </div>
            <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">The actual time may vary depending on:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-400 mb-3">
              <li>Bank processing times;</li>
              <li>Card issuer;</li>
              <li>UPI service provider;</li>
              <li>Payment network;</li>
              <li>Wallet provider; or</li>
              <li>Other financial institution involved in the transaction.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">The processing time after Bhukkadh initiates a refund is generally outside Bhukkadh's direct control.</p>
          </section>

          {/* 14. Refund Status and Delays */}
          <section id="section-14" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">14. Refund Status and Delays</h2>
            <p className="mb-3">
              If a refund has been approved but has not appeared within the expected processing period, customers may contact Bhukkadh Support.
            </p>
            <p className="mb-2">Customers may be asked to provide:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Order ID;</li>
              <li>Payment transaction ID;</li>
              <li>Refund reference number, if available;</li>
              <li>Payment method; and</li>
              <li>Relevant transaction details.</li>
            </ul>
            <p>Bhukkadh may coordinate with the applicable payment provider or financial institution to investigate delayed refunds.</p>
          </section>

          {/* 15. Promotional Offers and Coupons */}
          <section id="section-15" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">15. Promotional Offers and Coupons</h2>
            <p className="mb-3">
              Refund treatment for orders involving coupons, promotional discounts, cashback, or other offers may vary depending on the specific promotion's terms.
            </p>
            <p className="mb-2">If an order is cancelled or refunded, promotional benefits may:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Be cancelled;</li>
              <li>Not be reinstated;</li>
              <li>Be partially restored; or</li>
              <li>Be handled according to the terms of the specific promotion.</li>
            </ul>
            <p>Cashback, credits, or promotional benefits are not necessarily refundable as cash unless expressly stated in the applicable offer.</p>
          </section>

          {/* 16. Refund Abuse and Fraudulent Claims */}
          <section id="section-16" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">16. Refund Abuse and Fraudulent Claims</h2>
            <p className="mb-3">
              Bhukkadh reserves the right to investigate repeated, suspicious, or potentially fraudulent refund claims.
            </p>
            <p className="mb-2">Where we reasonably determine that a customer is abusing the cancellation or refund process, we may:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Reject unsupported refund claims;</li>
              <li>Restrict certain refund privileges;</li>
              <li>Suspend promotional benefits;</li>
              <li>Restrict or suspend the account; or</li>
              <li>Take other appropriate action permitted by law.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400">Nothing in this section prevents customers from exercising legitimate legal or consumer rights.</p>
          </section>

          {/* 17. Changes to Orders */}
          <section id="section-17" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">17. Changes to Orders</h2>
            <p className="mb-2">
              Once an order has been successfully placed, modifications such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Adding additional items;</li>
              <li>Removing items;</li>
              <li>Changing quantities;</li>
              <li>Changing the Restaurant Partner; or</li>
              <li>Changing the delivery address</li>
            </ul>
            <p className="mb-3">may not always be possible.</p>
            <p className="mb-3">
              Customers should contact Bhukkadh Support as soon as possible if an order requires correction.
            </p>
            <p>
              Where a change cannot be accommodated, the original order may remain subject to the cancellation rules described in this Policy.
            </p>
          </section>

          {/* 18. Customer Support */}
          <section id="section-18" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">18. Customer Support</h2>
            <p className="mb-3">For cancellation, refund, or payment-related assistance, please contact:</p>
            <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm space-y-2">
              <p><strong className="text-slate-900 dark:text-white">Company:</strong> Hindustaan Innovations Pvt. Ltd.</p>
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
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              When contacting support, please provide your Order ID and relevant transaction details where available.
            </p>
          </section>

          {/* 19. Policy Updates */}
          <section id="section-19" className="scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">19. Policy Updates</h2>
            <p className="mb-3">
              Bhukkadh may update this Cancellation & Refund Policy from time to time to reflect changes in our services, payment processes, operational practices, or applicable legal requirements.
            </p>
            <p className="mb-4">
              Any updated version will be published on the Platform with a revised "Last Updated" date. Customers are encouraged to review this Policy before placing orders.
            </p>
            <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30 text-slate-800 dark:text-slate-200 text-sm font-semibold text-center">
              By placing an order through Bhukkadh, you acknowledge that you have read and understood this Cancellation & Refund Policy.
            </div>
          </section>
    </PolicyLayout>
  );
}
