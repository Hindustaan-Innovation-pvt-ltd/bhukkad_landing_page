import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Help Us Build the Future of Food Delivery",
  description: "Join our passionate team at Bhukkadh. Explore exciting job openings in engineering, operations, marketing, and product development.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/careers",
  },
  openGraph: {
    title: "Careers - Help Us Build the Future of Food Delivery | Bhukkadh",
    description: "Join our passionate team at Bhukkadh. Explore exciting job openings in engineering, operations, marketing, and product development.",
    url: "https://bhukkadh.hindustaan.in/careers",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Careers - Help Us Build the Future of Food Delivery - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Help Us Build the Future of Food Delivery | Bhukkadh",
    description: "Join our passionate team at Bhukkadh. Explore exciting job openings in engineering, operations, marketing, and product development.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh careers","jobs at Bhukkadh","food tech jobs","hiring"],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
