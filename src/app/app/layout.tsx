import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get the Bhukkadh Mobile App",
  description: "Experience lightning-fast food ordering, live GPS tracking, and exclusive discounts right on your smartphone with the official Bhukkadh app.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/app",
  },
  openGraph: {
    title: "Get the Bhukkadh Mobile App | Bhukkadh",
    description: "Experience lightning-fast food ordering, live GPS tracking, and exclusive discounts right on your smartphone with the official Bhukkadh app.",
    url: "https://bhukkadh.hindustaan.in/app",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Get the Bhukkadh Mobile App - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get the Bhukkadh Mobile App | Bhukkadh",
    description: "Experience lightning-fast food ordering, live GPS tracking, and exclusive discounts right on your smartphone with the official Bhukkadh app.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh mobile app","food ordering app","order food smartphone"],
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
