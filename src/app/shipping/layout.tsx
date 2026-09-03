import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Understand Bhukkadh's delivery timelines, delivery charges, service areas, live GPS tracking, and contactless delivery processes.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/shipping",
  },
  openGraph: {
    title: "Shipping & Delivery Policy | Bhukkadh",
    description: "Understand Bhukkadh's delivery timelines, delivery charges, service areas, live GPS tracking, and contactless delivery processes.",
    url: "https://bhukkadh.hindustaan.in/shipping",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Shipping & Delivery Policy - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Delivery Policy | Bhukkadh",
    description: "Understand Bhukkadh's delivery timelines, delivery charges, service areas, live GPS tracking, and contactless delivery processes.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh delivery policy","shipping charges","delivery timeline"],
};

export default function ShippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
