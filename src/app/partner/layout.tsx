import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Bhukkadh - Grow Your Restaurant Revenue",
  description: "List your restaurant on Bhukkadh with 0% commission for the first 30 days. Reach thousands of hungry customers and boost your daily orders with weekly payouts.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/partner",
  },
  openGraph: {
    title: "Partner With Bhukkadh - Grow Your Restaurant Revenue | Bhukkadh",
    description: "List your restaurant on Bhukkadh with 0% commission for the first 30 days. Reach thousands of hungry customers and boost your daily orders with weekly payouts.",
    url: "https://bhukkadh.hindustaan.in/partner",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Partner With Bhukkadh - Grow Your Restaurant Revenue - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Bhukkadh - Grow Your Restaurant Revenue | Bhukkadh",
    description: "List your restaurant on Bhukkadh with 0% commission for the first 30 days. Reach thousands of hungry customers and boost your daily orders with weekly payouts.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["restaurant partner","list restaurant online","grow restaurant sales","food delivery partner","Bhukkadh partner onboarding"],
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
