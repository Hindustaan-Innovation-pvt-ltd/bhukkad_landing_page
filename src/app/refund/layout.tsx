import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "Review Bhukkadh's clear and transparent policies on order cancellations, payment refunds, processing timelines, and customer compensation.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/refund",
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Bhukkadh",
    description: "Review Bhukkadh's clear and transparent policies on order cancellations, payment refunds, processing timelines, and customer compensation.",
    url: "https://bhukkadh.hindustaan.in/refund",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Cancellation & Refund Policy - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation & Refund Policy | Bhukkadh",
    description: "Review Bhukkadh's clear and transparent policies on order cancellations, payment refunds, processing timelines, and customer compensation.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh refund policy","cancellation policy","refund timeline"],
};

export default function RefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
