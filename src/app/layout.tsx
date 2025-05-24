import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./components/footer";
import FloatingWidget from "./components/FloatingWidget/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Innovative Leaders In Pediatric Therapy | The Speech Clinic Dubai";
const SITE_DESCRIPTION = "Discover why The Speech Clinic Dubai is a trusted name in pediatric therapy. Our innovative approach empowers children with speech, language, and developmental challenges to thrive";
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: 'speech therapy, occupational therapy, physiotherapy, ABA therapy, school readiness, feeding therapy, group therapy, neuro integrative therapy',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://thespeechclinic.ae",
    siteName: "The Speech Clinic Dubai",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1702,
        height: 877,
        alt: "The Speech Clinic Dubai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/thumbnail.jpg"],
    creator: "@speechclinic",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body style={{ fontFamily: "HuluStyle" }} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <FloatingWidget />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
