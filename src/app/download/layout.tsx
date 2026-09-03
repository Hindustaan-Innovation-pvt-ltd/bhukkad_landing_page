import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Bhukkadh Apps - Customer, Partner & Rider",
  description: "Download official Bhukkadh apps for Android and iOS. Dedicated mobile applications built for food lovers, restaurant owners, and delivery fleet.",
  alternates: {
    canonical: "https://bhukkadh.hindustaan.in/download",
  },
  openGraph: {
    title: "Download Bhukkadh Apps - Customer, Partner & Rider | Bhukkadh",
    description: "Download official Bhukkadh apps for Android and iOS. Dedicated mobile applications built for food lovers, restaurant owners, and delivery fleet.",
    url: "https://bhukkadh.hindustaan.in/download",
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Download Bhukkadh Apps - Customer, Partner & Rider - Bhukkadh",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Bhukkadh Apps - Customer, Partner & Rider | Bhukkadh",
    description: "Download official Bhukkadh apps for Android and iOS. Dedicated mobile applications built for food lovers, restaurant owners, and delivery fleet.",
    images: ["/images/bukkadh.png"],
  },
  keywords: ["download Bhukkadh app","food delivery app apk","Bhukkadh partner app","Bhukkadh rider app"],
};

const appsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "Bhukkadh Food Delivery",
      operatingSystem: "Android, iOS",
      applicationCategory: "FoodAndDrinkApplication",
      installUrl: "https://play.google.com/store/apps/details?id=com.bhukkhad",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "MobileApplication",
      name: "Bhukkadh Partner",
      operatingSystem: "Android",
      applicationCategory: "BusinessApplication",
      installUrl: "https://play.google.com/store/apps/details?id=com.bhukkadh.restaurant",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "MobileApplication",
      name: "Bhukkadh Rider",
      operatingSystem: "Android",
      applicationCategory: "NavigationApplication",
      installUrl: "https://play.google.com/store/apps/details?id=com.bhukkadh.rider",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsJsonLd) }}
      />
      {children}
    </>
  );
}
