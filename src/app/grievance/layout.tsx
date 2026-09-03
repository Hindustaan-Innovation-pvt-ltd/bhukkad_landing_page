import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grievance Redressal Mechanism",
  description: "Official grievance redressal process and designated Grievance Officer contact details for Bhukkadh in compliance with applicable laws.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/grievance",
  },
  openGraph: {
    title: "Grievance Redressal Mechanism | Bhukkadh",
    description: "Official grievance redressal process and designated Grievance Officer contact details for Bhukkadh in compliance with applicable laws.",
    url: "https://bhukkadh.hindustaan.in/grievance",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Grievance Redressal Mechanism - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grievance Redressal Mechanism | Bhukkadh",
    description: "Official grievance redressal process and designated Grievance Officer contact details for Bhukkadh in compliance with applicable laws.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["Bhukkadh grievance","grievance officer","consumer rights"],
};

export default function GrievanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
