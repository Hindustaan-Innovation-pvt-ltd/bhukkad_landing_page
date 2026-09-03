import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Delivery Partner - Earn on Your Schedule",
  description: "Join the Bhukkadh delivery fleet. Deliver food with flexible working hours, weekly payouts, referral bonuses, and attractive incentives on every order.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/rider",
  },
  openGraph: {
    title: "Become a Delivery Partner - Earn on Your Schedule | Bhukkadh",
    description: "Join the Bhukkadh delivery fleet. Deliver food with flexible working hours, weekly payouts, referral bonuses, and attractive incentives on every order.",
    url: "https://bhukkadh.hindustaan.in/rider",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Become a Delivery Partner - Earn on Your Schedule - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Delivery Partner - Earn on Your Schedule | Bhukkadh",
    description: "Join the Bhukkadh delivery fleet. Deliver food with flexible working hours, weekly payouts, referral bonuses, and attractive incentives on every order.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["delivery partner job","rider registration","earn money delivery","part time delivery job","Bhukkadh rider"],
};

export default function RiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
