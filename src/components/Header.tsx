"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Leaf } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "./LocaleProvider";
import { i18n } from "../../i18n.config";

// Map language codes to country codes for flag API
const languageToCountry: Record<string, string> = {
  en: "gb",
  tr: "tr",
  fr: "fr",
  es: "es",
  de: "de",
  pt: "pt",
  zh: "cn",
  ja: "jp",
};

const getFlagUrl = (lang: string) => {
  const countryCode = languageToCountry[lang] || lang;
  return `https://flagcdn.com/w20/${countryCode}.png`;
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { locale, setLocale } = useLocaleContext();
  const t = useTranslations();

  const navLinks = [
    { key: "home", href: "#home", label: t("nav.home") },
    { key: "howItWorks", href: "#how-it-works", label: t("nav.howItWorks") },
    { key: "features", href: "#features", label: t("nav.features") },
    { key: "screenshots", href: "#screenshots", label: t("nav.screenshots") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (langOpen && !target.closest('.language-selector')) {
        setLangOpen(false);
      }
    };
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "py-4 px-4"
        : "py-6 px-4"
        }`}
    >
      <div className={`max-w-7xl mx-auto px-6 h-16 flex justify-between items-center transition-all duration-300 rounded-2xl ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-xl shadow-emerald-500/5 border border-gray-100" : ""
        }`}>
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="tracking-tighter">GreenSteps</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <motion.a
              key={item.key}
              href={item.href}
              whileHover={{ y: -1 }}
              className="text-sm font-bold text-gray-700 hover:text-emerald-500 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </motion.a>
          ))}

          <div className="h-4 w-px bg-gray-200" />

          {/* Language Selector */}
          <div className="relative language-selector">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-emerald-500 transition-colors rounded-lg hover:bg-gray-50"
            >
              <Globe size={18} />
              <span className="text-sm font-bold uppercase">{locale}</span>
              <ChevronDown size={16} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 p-2 w-64"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {i18n.locales.map((lang) => {
                      return (
                        <motion.button
                          key={lang}
                          onClick={() => {
                            setLocale(lang);
                            setLangOpen(false);
                          }}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          className={`flex items-center gap-2 px-3 py-2 text-sm font-bold uppercase rounded-lg transition-colors w-full text-left ${
                            locale === lang ? "bg-emerald-50 text-emerald-600" : "text-gray-700 hover:text-emerald-500 hover:bg-gray-50"
                          }`}
                        >
                          <img 
                            src={getFlagUrl(lang)} 
                            alt={lang}
                            className="w-5 h-4 object-cover rounded-sm mr-1"
                            loading="lazy"
                          />
                          <span>{lang}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Download Button */}
          <motion.a
            href="https://apps.apple.com/tr/app/green-steps-walk/id6757185484?l=tr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg transition-all"
          >
            {t("nav.download")}
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-lg font-bold text-gray-700"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-gray-100" />
              {/* Mobile Language Selector */}
              <div className="px-4 py-2">
                <div className="flex items-center gap-3 mb-3">
                  <Globe size={20} className="text-gray-700" />
                  <span className="text-lg font-bold text-gray-700">Dil / Language</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {i18n.locales.map((lang) => {
                    return (
                      <button
                        key={lang}
                        onClick={() => {
                          setLocale(lang);
                          setIsOpen(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-2.5 text-sm font-bold uppercase rounded-lg transition-colors w-full ${
                          locale === lang
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        <img 
                          src={getFlagUrl(lang)} 
                          alt={lang}
                          className="w-5 h-4 object-cover rounded-sm mr-1"
                          loading="lazy"
                        />
                        <span>{lang}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
