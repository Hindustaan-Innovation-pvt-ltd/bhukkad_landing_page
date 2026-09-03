import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Bhukkadh and Hindustaan Innovations Pvt. Ltd. protect, handle, and secure your personal data, transaction information, and location data.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Bhukkadh",
    description: "Learn how Bhukkadh and Hindustaan Innovations Pvt. Ltd. protect, handle, and secure your personal data, transaction information, and location data.",
    url: "https://bhukkadh.hindustaan.in/privacy",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Privacy Policy - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Bhukkadh",
    description: "Learn how Bhukkadh and Hindustaan Innovations Pvt. Ltd. protect, handle, and secure your personal data, transaction information, and location data.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh privacy policy","data security","user privacy"],
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
