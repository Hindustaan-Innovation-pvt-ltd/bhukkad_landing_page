import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Customer Care & Partner Support",
  description: "Have questions about your order, restaurant onboarding, or payments? Contact the Bhukkadh team via email, phone, or live enquiry form.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/contact",
  },
  openGraph: {
    title: "Contact Us - Customer Care & Partner Support | Bhukkadh",
    description: "Have questions about your order, restaurant onboarding, or payments? Contact the Bhukkadh team via email, phone, or live enquiry form.",
    url: "https://bhukkadh.hindustaan.in/contact",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Contact Us - Customer Care & Partner Support - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Customer Care & Partner Support | Bhukkadh",
    description: "Have questions about your order, restaurant onboarding, or payments? Contact the Bhukkadh team via email, phone, or live enquiry form.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["contact Bhukkadh","customer care number","Bhukkadh helpdesk","support email"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
