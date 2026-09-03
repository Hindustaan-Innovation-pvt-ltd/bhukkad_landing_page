import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the official Terms of Service governing your access and usage of the Bhukkadh food delivery platform and ecosystem applications.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/terms",
  },
  openGraph: {
    title: "Terms of Service | Bhukkadh",
    description: "Read the official Terms of Service governing your access and usage of the Bhukkadh food delivery platform and ecosystem applications.",
    url: "https://bhukkadh.hindustaan.in/terms",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Terms of Service - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Bhukkadh",
    description: "Read the official Terms of Service governing your access and usage of the Bhukkadh food delivery platform and ecosystem applications.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh terms","terms of service","user agreement"],
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
