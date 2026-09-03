import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/layout/ChatBot";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bhukkadh.hindustaan.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bhukkadh: Online Food Delivery & Restaurant Ordering App",
    template: "%s | Bhukkadh",
  },
  description:
    "Order fresh, hot, and hygienic food online from top local restaurants with Bhukkadh. Enjoy superfast doorstep delivery, real-time live order tracking, and exclusive discounts.",
  keywords: [
    "food delivery",
    "order food online",
    "Bhukkadh",
    "restaurants near me",
    "fast delivery",
    "food delivery app",
    "food delivery Raipur",
    "Hindustaan Innovations",
    "delivery partner",
    "restaurant partner",
  ],
  authors: [{ name: "Hindustaan Innovations Pvt. Ltd." }],
  creator: "Hindustaan Innovations Pvt. Ltd.",
  publisher: "Hindustaan Innovations Pvt. Ltd.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhukkadh: Online Food Delivery & Restaurant Ordering App",
    description:
      "Order fresh, hot, and hygienic food online from top local restaurants with Bhukkadh. Enjoy superfast doorstep delivery, real-time live order tracking, and exclusive discounts.",
    url: siteUrl,
    siteName: "Bhukkadh",
    images: [
      {
        url: "/images/bukkadh.png",
        width: 800,
        height: 600,
        alt: "Bhukkadh Food Delivery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhukkadh: Online Food Delivery & Restaurant Ordering App",
    description:
      "Order fresh, hot, and hygienic food online from top local restaurants with Bhukkadh. Enjoy superfast doorstep delivery, real-time live order tracking, and exclusive discounts.",
    images: ["/images/bukkadh.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/bukkadh.png",
    apple: "/images/bukkadh.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bhukkadh",
      legalName: "Hindustaan Innovations Pvt. Ltd.",
      url: siteUrl,
      logo: `${siteUrl}/images/bukkadh.png`,
      description:
        "Bhukkadh is an on-demand food delivery platform connecting food lovers, restaurants, and riders across India.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@hindustaan.in",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.instagram.com/hindustaan_in",
        "https://www.facebook.com/profile.php?id=61590521631778",
        "https://x.com/Hindustaan_in",
        "https://www.linkedin.com/company/hindustaaninnovations",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Bhukkadh",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F4F5] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Navbar />
          {children}
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
