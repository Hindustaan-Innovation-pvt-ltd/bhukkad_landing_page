import React from "react";
import Link from "next/link";
import { Truck, Clock, MapPin, AlertCircle, ShieldCheck, Mail, Phone, PackageCheck } from "lucide-react";

export default function ShippingDeliveryPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 dark:bg-transparent pt-28 pb-12 font-sans">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-800/90 p-6 sm:p-8 md:p-12 rounded-4xl shadow-sm border border-slate-100 dark:border-slate-700/60">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Truck className="w-5 h-5" />
          </div>
          <span className="text-primary font-bold text-sm uppercase tracking-wider">Policy</span>
        </div>

        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 dark:text-white mb-4">
          Shipping & Delivery Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">Last Updated: August 25, 2026</p>

        <div className="space-y-8 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          {/* 1. Overview */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Overview</h2>
            <p className="mb-3">
              Bhukkadh ("Bhukkadh", "we", "us", or "our") is an on-demand food ordering and delivery technology platform owned and operated by{" "}
              <strong className="text-slate-900 dark:text-white">Hindustaan Innovations Pvt. Ltd.</strong>
            </p>
            <p className="mb-3">
              Bhukkadh enables customers to discover partner restaurants, place orders for food and beverages, and receive such orders through available delivery services or, where applicable, pickup options.
            </p>
            <p className="mb-3">
              Orders may be prepared by independent Restaurant Partners and delivered by independent Delivery Partners or Riders.
            </p>
            <p>
              This Shipping & Delivery Policy explains how delivery services are facilitated through the Bhukkadh Platform. It should be read together with our{" "}
              <Link href="/terms" className="text-primary font-bold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/refund" className="text-primary font-bold hover:underline">
                Cancellation & Refund Policy
              </Link>
              .
            </p>
          </section>

          {/* 2. Service Areas and Availability */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">2. Service Areas and Availability</h2>
            <p className="mb-3">
              Bhukkadh delivery services are available only in selected serviceable locations and designated delivery zones.
            </p>
            <p className="mb-2">Service availability may depend on factors including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Your exact delivery address;</li>
              <li>Distance from the selected Restaurant Partner;</li>
              <li>Restaurant operating hours;</li>
              <li>Rider availability;</li>
              <li>Local operational conditions; and</li>
              <li>Temporary service restrictions.</li>
            </ul>
            <p className="mb-3">
              Restaurant availability and delivery eligibility are dynamically determined based on your selected or entered delivery address.
            </p>
            <p className="mb-3">
              Bhukkadh may add, modify, restrict, suspend, or discontinue service in any location at its discretion.
            </p>
            <p>Availability in one area does not guarantee that delivery services will be available at all times.</p>
          </section>

          {/* 3. Order Preparation and Delivery Process */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Order Preparation and Delivery Process</h2>
            <p className="mb-3">
              After an order is placed and payment is successfully processed, the order may be transmitted to the relevant Restaurant Partner for acceptance and preparation.
            </p>
            <p className="mb-2">The general order flow may include:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Order placed by the Customer;</li>
              <li>Order confirmation or acceptance;</li>
              <li>Food preparation by the Restaurant Partner;</li>
              <li>Assignment of a Delivery Partner, where applicable;</li>
              <li>Pickup of the prepared order;</li>
              <li>Transit to the delivery address; and</li>
              <li>Delivery and handover to the Customer.</li>
            </ul>
            <p>The availability and timing of each stage may vary depending on the specific order and operational conditions.</p>
          </section>

          {/* 4. Estimated Delivery Timelines */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Estimated Delivery Timelines</h2>
            <p className="mb-3">
              All food and beverage orders are generally prepared fresh after the order is accepted.
            </p>
            <p className="mb-3">
              The delivery time displayed on the Platform is an estimated time of arrival and is not a guaranteed delivery deadline.
            </p>
            <p className="mb-3">
              Under normal operating conditions, orders may typically be delivered within{" "}
              <strong className="text-slate-900 dark:text-white">approximately 30 to 45 minutes</strong> after order confirmation, depending on the preparation and delivery requirements of the specific order.
            </p>
            <p className="mb-2">Actual delivery time may vary based on:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Restaurant preparation time;</li>
              <li>Complexity and size of the order;</li>
              <li>Restaurant order volume;</li>
              <li>Availability of Delivery Partners;</li>
              <li>Distance between the Restaurant Partner and delivery location;</li>
              <li>Traffic conditions;</li>
              <li>Weather conditions;</li>
              <li>Festivals, public events, or local disruptions;</li>
              <li>Technical or operational issues; and</li>
              <li>Other circumstances beyond reasonable control.</li>
            </ul>
            <p className="mb-3">
              The estimated delivery time displayed on the Platform may be updated as the order progresses.
            </p>
            <p>Customers may be able to track the status of their order in real time through the Bhukkadh application.</p>
          </section>

          {/* 5. Delivery Charges and Applicable Fees */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Delivery Charges and Applicable Fees</h2>
            <p className="mb-2">Delivery charges, where applicable, may vary depending on factors such as:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Distance between the Restaurant Partner and the delivery address;</li>
              <li>Delivery location;</li>
              <li>Order value;</li>
              <li>Availability of delivery services;</li>
              <li>Current operational conditions;</li>
              <li>Applicable promotions or discounts; and</li>
              <li>Other disclosed factors.</li>
            </ul>
            <p className="mb-2">
              Additional charges, including surge or special delivery charges, may apply during certain operational conditions, such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Late-night delivery periods;</li>
              <li>Adverse weather conditions;</li>
              <li>High-demand periods; or</li>
              <li>Other exceptional delivery circumstances.</li>
            </ul>
            <p>
              All applicable charges, including delivery fees, platform charges, packaging charges, and applicable taxes, where relevant, will be displayed before you complete the checkout and payment process.
            </p>
          </section>

          {/* 6. Delivery Address */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Delivery Address</h2>
            <p className="mb-3">Customers are responsible for providing an accurate and complete delivery address.</p>
            <p className="mb-2">To ensure successful delivery, customers should provide, where applicable:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>House or flat number;</li>
              <li>Building or apartment name;</li>
              <li>Street or locality;</li>
              <li>Floor number;</li>
              <li>Landmark;</li>
              <li>Gate or entry instructions; and</li>
              <li>Any other information reasonably necessary to locate the delivery address.</li>
            </ul>
            <p className="mb-3">
              The delivery location provided during checkout will generally be treated as the intended delivery location.
            </p>
            <p className="mb-3">
              If an incorrect, incomplete, or inaccessible address is provided, the delivery may be delayed or may not be completed.
            </p>
            <p>
              Bhukkadh and the Delivery Partner are not responsible for delays or failed deliveries resulting from inaccurate or insufficient delivery information provided by the Customer.
            </p>
          </section>

          {/* 7. Customer Availability and Delivery Handover */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">7. Customer Availability and Delivery Handover</h2>
            <p className="mb-2">Customers are responsible for being reasonably available to receive the order. Customers should:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Keep the registered mobile number accessible;</li>
              <li>Answer reasonable calls or communications from the Delivery Partner;</li>
              <li>Be available at or near the delivery location;</li>
              <li>Ensure that the delivery location is reasonably accessible; and</li>
              <li>Provide any necessary entry or gate instructions.</li>
            </ul>
            <p className="mb-3">
              The Delivery Partner may contact the Customer to locate the delivery address or complete the handover.
            </p>
            <p>
              For safety and operational reasons, the Customer may be requested to collect the order from a reasonably accessible point near the delivery location where direct doorstep delivery is not possible.
            </p>
          </section>

          {/* 8. Contactless or Alternative Delivery */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">8. Contactless or Alternative Delivery</h2>
            <p className="mb-2">
              Where available, Bhukkadh may provide or facilitate contactless delivery. Customers may provide reasonable delivery instructions through the Platform, subject to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Safety considerations;</li>
              <li>Building or location restrictions;</li>
              <li>Delivery Partner availability; and</li>
              <li>Applicable operational requirements.</li>
            </ul>
            <p>Alternative delivery instructions may not be followed where they could create a safety, security, or operational risk.</p>
          </section>

          {/* 9. Live Order Tracking */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">9. Live Order Tracking</h2>
            <p className="mb-2">
              Bhukkadh may provide live order tracking features through the mobile application. Customers may be able to view:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Restaurant order status;</li>
              <li>Food preparation status;</li>
              <li>Order pickup status;</li>
              <li>Delivery Partner assignment;</li>
              <li>Estimated arrival time; and</li>
              <li>Approximate real-time delivery location.</li>
            </ul>
            <p className="mb-3">
              Live tracking information is provided for convenience and operational visibility.
            </p>
            <p className="mb-3">
              Actual delivery routes, location information, and estimated arrival times may vary due to GPS limitations, network availability, traffic, route changes, or other operational factors.
            </p>
            <p>The information displayed through live tracking should therefore be treated as approximate.</p>
          </section>

          {/* 10. Delayed Deliveries */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">10. Delayed Deliveries</h2>
            <p className="mb-2">
              Although Bhukkadh and its partners make reasonable efforts to facilitate timely deliveries, delays may occasionally occur. A delivery may be delayed because of:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Extended restaurant preparation time;</li>
              <li>High order volumes;</li>
              <li>Rider unavailability;</li>
              <li>Traffic congestion;</li>
              <li>Road closures;</li>
              <li>Weather conditions;</li>
              <li>Local events or restrictions;</li>
              <li>Technical issues; or</li>
              <li>Other unforeseen operational circumstances.</li>
            </ul>
            <p className="mb-3">
              A delay does not automatically make an order eligible for cancellation or a refund.
            </p>
            <p>
              Where a significant delivery issue occurs, the Customer may contact Bhukkadh Support. Any applicable cancellation or refund will be handled in accordance with our{" "}
              <Link href="/refund" className="text-primary font-bold hover:underline">
                Cancellation & Refund Policy
              </Link>
              .
            </p>
          </section>

          {/* 11. Failed Delivery Attempts */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">11. Failed Delivery Attempts</h2>
            <p className="mb-2">An order may not be successfully delivered if:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>The Customer is unreachable;</li>
              <li>The delivery address is incorrect;</li>
              <li>The delivery location is inaccessible;</li>
              <li>The Customer repeatedly fails to respond to reasonable contact attempts;</li>
              <li>Entry to the premises is denied or unavailable;</li>
              <li>The Customer refuses to accept the correctly delivered order without a valid reason; or</li>
              <li>Other circumstances attributable to the Customer prevent completion of delivery.</li>
            </ul>
            <p className="mb-3">
              Where a Delivery Partner is unable to complete delivery, reasonable attempts may be made to contact the Customer.
            </p>
            <p className="mb-3">
              If the Customer remains unreachable or delivery cannot be completed due to circumstances attributable to the Customer, the Delivery Partner may wait for a reasonable period, which may generally be{" "}
              <strong className="text-slate-900 dark:text-white">up to 10 minutes</strong>, depending on operational circumstances.
            </p>
            <p className="mb-3">
              <strong className="text-slate-900 dark:text-white">
                Because food and beverages are perishable products, an order that cannot be delivered due to the Customer's unavailability or incorrect delivery information may not be eligible for a refund.
              </strong>
            </p>
            <p>
              Refund eligibility will be determined in accordance with the Cancellation & Refund Policy and the specific circumstances of the order.
            </p>
          </section>

          {/* 12. Delivery Failures Caused by Operational Issues */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">12. Delivery Failures Caused by Operational Issues</h2>
            <p className="mb-2">
              If an order cannot be delivered due to an operational failure attributable to Bhukkadh, the Restaurant Partner, or the delivery process, Bhukkadh will review the circumstances of the order. Depending on the situation, the available resolution may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Reassignment of a Delivery Partner;</li>
              <li>Reattempting delivery, where feasible;</li>
              <li>Replacement or re-preparation of the order, where available;</li>
              <li>Partial refund; or</li>
              <li>Full refund.</li>
            </ul>
            <p className="mb-3">
              Any approved refund will be processed in accordance with the{" "}
              <Link href="/refund" className="text-primary font-bold hover:underline">
                Cancellation & Refund Policy
              </Link>
              .
            </p>
            <p>
              Where a refund is applicable to an online payment, it will generally be initiated to the original payment source, subject to applicable payment processing timelines.
            </p>
          </section>

          {/* 13. Pickup Orders */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">13. Pickup Orders</h2>
            <p className="mb-3">
              Where the Platform offers a pickup or self-collection option, the Customer is responsible for collecting the order from the designated Restaurant Partner.
            </p>
            <p className="mb-3">
              Customers should collect the order within the estimated or communicated pickup time. Restaurant operating hours and preparation times may apply.
            </p>
            <p className="mb-3">
              Bhukkadh is not responsible for delays caused by a Customer arriving significantly earlier or later than the estimated pickup time.
            </p>
            <p>
              If a Customer fails to collect a prepared order within a reasonable period, refund eligibility may be limited because food and beverages are perishable.
            </p>
          </section>

          {/* 14. Packaging and Order Condition */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">14. Packaging and Order Condition</h2>
            <p className="mb-2">
              Food orders are packaged by the respective Restaurant Partner. The Restaurant Partner is primarily responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Food packaging;</li>
              <li>Item preparation;</li>
              <li>Product quality;</li>
              <li>Product quantity; and</li>
              <li>Appropriate handling of food before handover to the Delivery Partner.</li>
            </ul>
            <p className="mb-2">
              Customers should inspect the order, where reasonably possible, at the time of delivery. If there is a material issue with an order, such as:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Missing items;</li>
              <li>Incorrect items;</li>
              <li>Significant damage;</li>
              <li>Spillage; or</li>
              <li>Other order fulfilment issues,</li>
            </ul>
            <p>
              the Customer should report the issue to Bhukkadh Support as soon as reasonably possible and provide relevant information or evidence where requested. Such issues will be reviewed in accordance with our applicable support and Cancellation & Refund procedures.
            </p>
          </section>

          {/* 15. Delivery Partner Conduct and Customer Conduct */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">15. Delivery Partner Conduct and Customer Conduct</h2>
            <p className="mb-2">Delivery Partners and Customers are expected to interact respectfully and safely. Customers must not:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Abuse, threaten, or harass Delivery Partners;</li>
              <li>Request unlawful activities;</li>
              <li>Create unsafe delivery conditions; or</li>
              <li>Engage in conduct that puts another person at risk.</li>
            </ul>
            <p className="mb-3">
              Delivery Partners are also expected to follow applicable Bhukkadh policies and operational requirements.
            </p>
            <p>Bhukkadh may investigate reports of misconduct and take appropriate action where necessary.</p>
          </section>

          {/* 16. Force Majeure and Circumstances Beyond Reasonable Control */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">16. Force Majeure and Circumstances Beyond Reasonable Control</h2>
            <p className="mb-2">Delivery services may be affected by circumstances beyond reasonable control, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li>Severe weather;</li>
              <li>Floods or natural disasters;</li>
              <li>Public emergencies;</li>
              <li>Government restrictions;</li>
              <li>Strikes or civil disturbances;</li>
              <li>Major road closures;</li>
              <li>Network or technology failures; or</li>
              <li>Other unforeseen events.</li>
            </ul>
            <p>In such circumstances, delivery estimates may be affected, and services may be delayed, restricted, or temporarily unavailable.</p>
          </section>

          {/* 17. Contact Us for Delivery Assistance */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">17. Contact Us for Delivery Assistance</h2>
            <p className="mb-3">
              If you experience an issue with an active delivery or have questions regarding this Shipping & Delivery Policy, you may contact Bhukkadh Support.
            </p>
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
                <strong className="text-slate-900 dark:text-white">Phone:</strong>{" "}
                <a href="tel:0771-299-4005" className="text-primary font-bold hover:underline">
                  0771- 299 - 4005
                </a>
              </p>
              <p>
                <strong className="text-slate-900 dark:text-white">Registered Office:</strong> CO: B-41, Sector-8A, Kamal Vihar, Raipur, Chhattisgarh – 492001, India
              </p>
            </div>
          </section>

          {/* 18. Changes to This Policy */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">18. Changes to This Policy</h2>
            <p className="mb-3">
              Bhukkadh may update this Shipping & Delivery Policy from time to time to reflect changes in our services, operational processes, legal requirements, or business practices.
            </p>
            <p className="mb-4">
              Any revised version will be published on the Platform with an updated "Last Updated" date. We encourage Customers to review this policy periodically.
            </p>
            <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30 text-slate-800 dark:text-slate-200 text-sm font-semibold text-center">
              By placing an order through Bhukkadh, you acknowledge that you have read and understood this Shipping & Delivery Policy.
            </div>
          </section>
        </div>
        </div>
      </div>
    </main>
  );
}
