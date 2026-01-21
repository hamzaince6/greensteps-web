import { ReactNode } from "react";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://greensteps.hamzaince.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "GreenSteps - Every Step Counts 🌱",
    template: "%s | GreenSteps",
  },
  description:
    "Transform your daily walks into measurable environmental impact. Track steps, see carbon savings, get monthly impact reports.",
  keywords: [
    "eco app",
    "carbon footprint",
    "step tracker",
    "environmental impact",
    "sustainability",
    "walking app",
    "green technology",
    "carbon savings",
    "eco-friendly",
    "sustainable living",
  ],
  authors: [{ name: "GreenSteps" }],
  creator: "GreenSteps",
  publisher: "GreenSteps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "GreenSteps",
    title: "GreenSteps - Every Step Counts 🌱",
    description:
      "Transform your daily walks into measurable environmental impact. Track steps, see carbon savings, get monthly impact reports.",
    images: [
      {
        url: `${baseUrl}/images/hero_mockup.png`,
        width: 1200,
        height: 630,
        alt: "GreenSteps App - Track Your Environmental Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenSteps - Every Step Counts 🌱",
    description:
      "Transform your daily walks into measurable environmental impact. Track steps, see carbon savings, get monthly impact reports.",
    images: [`${baseUrl}/images/hero_mockup.png`],
    creator: "@greensteps",
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
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 overflow-x-hidden transition-colors duration-300`}>
        <LocaleProvider>
          <StructuredData />
          <ThemeProvider>
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
