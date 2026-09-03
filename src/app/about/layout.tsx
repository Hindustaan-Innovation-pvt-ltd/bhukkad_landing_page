import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Empowering Food Communities Across India",
  description: "Learn about Bhukkadh by Hindustaan Innovations Pvt. Ltd. Connecting food lovers, local restaurants, and delivery fleets through cutting-edge technology.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/about",
  },
  openGraph: {
    title: "About Us - Empowering Food Communities Across India | Bhukkadh",
    description: "Learn about Bhukkadh by Hindustaan Innovations Pvt. Ltd. Connecting food lovers, local restaurants, and delivery fleets through cutting-edge technology.",
    url: "https://bhukkadh.hindustaan.in/about",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "About Us - Empowering Food Communities Across India - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Empowering Food Communities Across India | Bhukkadh",
    description: "Learn about Bhukkadh by Hindustaan Innovations Pvt. Ltd. Connecting food lovers, local restaurants, and delivery fleets through cutting-edge technology.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["about Bhukkadh","Hindustaan Innovations","food delivery company","our mission"],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
