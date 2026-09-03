import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Food Online - Fastest Doorstep Delivery",
  description: "Browse top restaurants, popular cuisines, and delicious meals near you. Order food online with lightning-fast delivery and secure checkout on Bhukkadh.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/order",
  },
  openGraph: {
    title: "Order Food Online - Fastest Doorstep Delivery | Bhukkadh",
    description: "Browse top restaurants, popular cuisines, and delicious meals near you. Order food online with lightning-fast delivery and secure checkout on Bhukkadh.",
    url: "https://bhukkadh.hindustaan.in/order",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Order Food Online - Fastest Doorstep Delivery - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Food Online - Fastest Doorstep Delivery | Bhukkadh",
    description: "Browse top restaurants, popular cuisines, and delicious meals near you. Order food online with lightning-fast delivery and secure checkout on Bhukkadh.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["order food online","food delivery Raipur","best restaurants","pizza delivery","fast food order","Bhukkadh food"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I place an order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the Bhukkadh app or website, enter your delivery address, select your favorite restaurant, choose your dishes, and proceed to checkout with secure payment options.",
      },
    },
    {
      "@type": "Question",
      name: "How can I track my order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once your order is confirmed, you can track the real-time status of your food preparation and live GPS location of your delivery partner directly in the app.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can cancel your order before the restaurant starts preparing it. Please check our Cancellation & Refund Policy for detailed guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept UPI (Google Pay, PhonePe, Paytm), Credit and Debit Cards, Net Banking, and Cash on Delivery (COD) on eligible orders.",
      },
    },
  ],
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
