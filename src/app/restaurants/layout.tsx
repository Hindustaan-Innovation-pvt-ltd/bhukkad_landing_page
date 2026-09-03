import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Onboarding & Merchant Registration",
  description: "Join thousands of restaurants scaling their business on Bhukkadh. Simple onboarding, 0% commission for 30 days, and guaranteed on-time weekly payouts.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/restaurants",
  },
  openGraph: {
    title: "Restaurant Onboarding & Merchant Registration | Bhukkadh",
    description: "Join thousands of restaurants scaling their business on Bhukkadh. Simple onboarding, 0% commission for 30 days, and guaranteed on-time weekly payouts.",
    url: "https://bhukkadh.hindustaan.in/restaurants",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Restaurant Onboarding & Merchant Registration - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Onboarding & Merchant Registration | Bhukkadh",
    description: "Join thousands of restaurants scaling their business on Bhukkadh. Simple onboarding, 0% commission for 30 days, and guaranteed on-time weekly payouts.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["restaurant registration","merchant onboarding","Bhukkadh merchant","food business growth"],
};

export default function RestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
