import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-28 pb-12 font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-slate-100">
        <h1 className="font-poppins font-black text-3xl md:text-5xl text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8 font-medium">Last Updated: August 24, 2026</p>

        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>Welcome to Bhukkadh ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or interact with our services. Please read this Privacy Policy carefully to understand our policies and practices regarding your information.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect several different types of information for various purposes to provide and improve our service to you. This includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Personal Identity and Contact Data:</strong> Includes your first name, last name, email address, telephone number, and delivery address.</li>
              <li><strong className="text-slate-800">Location Data:</strong> We collect precise or approximate location data from your mobile device if you enable us to do so. This includes background location data to track order deliveries in real-time, find nearby restaurants, and estimate delivery times. You can disable location tracking through your device settings, but this may affect the functionality of our services.</li>
              <li><strong className="text-slate-800">Financial Data:</strong> Includes payment card details. Please note that your payment data is processed securely by our third-party payment gateways, and we do not store full credit card numbers on our servers.</li>
              <li><strong className="text-slate-800">Transaction and Usage Data:</strong> Includes details about payments, order history, preferences, and how you interact with our app (e.g., search queries, viewed items).</li>
              <li><strong className="text-slate-800">Device Information:</strong> Includes your device's Internet Protocol (IP) address, browser type, operating system, and device identifiers (such as IMEI or advertising IDs).</li>
              <li><strong className="text-slate-800">Camera and Photo Library:</strong> With your permission, we may access your device's camera and photo library to allow you to upload profile pictures, leave photo reviews, or share images with our support team.</li>
              <li><strong className="text-slate-800">Microphone Access:</strong> With your permission, we may access your microphone for voice search or to record voice notes for delivery instructions.</li>
              <li><strong className="text-slate-800">Push Notifications:</strong> We may request to send you push notifications regarding your account, order status, or promotional offers. You can opt-out at any time in your device settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the collected data for various purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve our services, including processing and fulfilling your orders.</li>
              <li><strong className="text-slate-800">To track and facilitate deliveries:</strong> We use your Location Data to assign delivery partners, provide you with live tracking of your order, and ensure accurate delivery.</li>
              <li>To manage your account, including registration and authentication.</li>
              <li>To communicate with you regarding your orders, updates, promotional offers, and customer support.</li>
              <li>To monitor the usage of our service and detect, prevent, and address technical issues or fraudulent activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. How We Share Your Information</h2>
            <p className="mb-3">We may share your personal data with third parties in the following situations:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Restaurant Partners:</strong> We share your order details and delivery address with the restaurants you order from to fulfill your request.</li>
              <li><strong className="text-slate-800">Delivery Partners:</strong> We share your name, delivery address, phone number, and location data with our delivery personnel to ensure your food reaches you promptly.</li>
              <li><strong className="text-slate-800">Service Providers:</strong> We may employ third-party companies (e.g., payment processors, cloud hosting, analytics providers) to facilitate our service. These parties have access to your data only to perform specific tasks on our behalf.</li>
              <li><strong className="text-slate-800">Legal Obligations:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Data Security and Retention</h2>
            <p className="mb-3">We have implemented robust security measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
            <p>We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Once data is no longer necessary, it is securely deleted or anonymized.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">6. Your Data Privacy Rights</h2>
            <p className="mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Access and Update:</strong> You can review and change your personal information by logging into the app and visiting your account profile page.</li>
              <li><strong className="text-slate-800">Data Deletion:</strong> You have the right to request the deletion of your personal data. You can do this directly through the "Delete Account" section in the app settings, or by contacting us.</li>
              <li><strong className="text-slate-800">Withdraw Consent:</strong> You can withdraw your consent for location tracking or marketing communications at any time through your device settings or app preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">8. Cookies and Tracking Technologies</h2>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize our service and improve your experience. When you access our application, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of our services.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">9. Children's Privacy</h2>
            <p>Our services are not intended for children under the age of 13 (or 18 in certain jurisdictions). We do not knowingly collect personally identifiable information from children. If you become aware that a child has provided us with personal data, please contact us. If we become aware that we have collected personal data from a child without verification of parental consent, we take steps to remove that information from our servers.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">10. Contact Us & Grievance Officer</h2>
            <p className="mb-3">If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at <strong>support@hindustaan.in</strong>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
