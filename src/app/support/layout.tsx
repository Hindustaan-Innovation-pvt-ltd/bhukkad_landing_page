import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center & Helpdesk",
  description: "Get quick assistance with order tracking, refunds, partner support, or general queries at the official Bhukkadh Support Center.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/support",
  },
  openGraph: {
    title: "Support Center & Helpdesk | Bhukkadh",
    description: "Get quick assistance with order tracking, refunds, partner support, or general queries at the official Bhukkadh Support Center.",
    url: "https://bhukkadh.hindustaan.in/support",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Support Center & Helpdesk - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Center & Helpdesk | Bhukkadh",
    description: "Get quick assistance with order tracking, refunds, partner support, or general queries at the official Bhukkadh Support Center.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh support","order help","refund help","helpdesk"],
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
