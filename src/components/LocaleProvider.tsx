"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { i18n } from "../../i18n.config";

type Locale = (typeof i18n.locales)[number];

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: any;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const getBrowserLocale = (): Locale => {
  if (typeof window === "undefined") return i18n.defaultLocale;
  
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  const storedLocale = localStorage.getItem("locale") as Locale;
  
  // First check localStorage
  if (storedLocale && i18n.locales.includes(storedLocale)) {
    return storedLocale;
  }
  
  // Then check browser language
  if (i18n.locales.includes(browserLang as Locale)) {
    return browserLang as Locale;
  }
  
  // Fallback to default
  return i18n.defaultLocale;
};

// Preload all message files
const messageLoaders: Record<Locale, () => Promise<any>> = {
  en: () => import("../../messages/en.json"),
  tr: () => import("../../messages/tr.json"),
  fr: () => import("../../messages/fr.json"),
  es: () => import("../../messages/es.json"),
  de: () => import("../../messages/de.json"),
  pt: () => import("../../messages/pt.json"),
  zh: () => import("../../messages/zh.json"),
  ja: () => import("../../messages/ja.json"),
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(i18n.defaultLocale);
  const [messages, setMessages] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial locale
    const initialLocale = getBrowserLocale();
    setLocaleState(initialLocale);
    
    // Load messages
    const loader = messageLoaders[initialLocale];
    if (loader) {
      loader()
        .then((mod) => {
          setMessages(mod.default);
          setIsLoading(false);
        })
        .catch(() => {
          // Fallback to default locale
          messageLoaders[i18n.defaultLocale]()
            .then((mod) => {
              setMessages(mod.default);
              setLocaleState(i18n.defaultLocale);
              setIsLoading(false);
            });
        });
    }
  }, []);

  const setLocale = async (newLocale: Locale) => {
    if (!i18n.locales.includes(newLocale)) return;
    
    localStorage.setItem("locale", newLocale);
    
    try {
      const loader = messageLoaders[newLocale];
      if (loader) {
        const mod = await loader();
        setMessages(mod.default);
        setLocaleState(newLocale);
        // Reload page to apply new locale
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to load locale:", error);
    }
  };

  if (isLoading || !messages) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, messages }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return context;
};
