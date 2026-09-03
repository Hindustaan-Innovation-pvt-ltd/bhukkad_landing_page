import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account & Personal Data",
  description: "Submit an account deletion request for your Bhukkadh customer, restaurant, or rider profile and associated personal data.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/delete-account",
  },
  openGraph: {
    title: "Delete Account & Personal Data | Bhukkadh",
    description: "Submit an account deletion request for your Bhukkadh customer, restaurant, or rider profile and associated personal data.",
    url: "https://bhukkadh.hindustaan.in/delete-account",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Delete Account & Personal Data - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete Account & Personal Data | Bhukkadh",
    description: "Submit an account deletion request for your Bhukkadh customer, restaurant, or rider profile and associated personal data.",
    images: ["/images/bukkadh.png"],
  },
  robots: { index: false, follow: true },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
