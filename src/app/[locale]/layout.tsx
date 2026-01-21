import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { i18n } from "../../../i18n.config";
import "../globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenSteps - Every Step Counts 🌱",
  description:
    "Transform your daily walks into measurable environmental impact. Track steps, see carbon savings, get monthly impact reports.",
};

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "tr" },
    { locale: "fr" },
    { locale: "es" },
    { locale: "de" },
    { locale: "pt" },
    { locale: "zh" },
    { locale: "ja" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  // Validate locale and fallback to default if invalid
  const locale = i18n.locales.includes(rawLocale as any) 
    ? rawLocale 
    : i18n.defaultLocale;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScroll>
            <NextIntlClientProvider messages={messages}>
              <Header />
              {children}
            </NextIntlClientProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
