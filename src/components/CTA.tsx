"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Apple, PlayCircle as Play, ShieldCheck, Sparkles } from "lucide-react";

export const CTA = () => {
  const t = useTranslations();

  return (
    <section id="cta" className="relative w-full bg-white overflow-hidden py-24 md:py-40">
      {/* Global Standard Light Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.08)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />

        {/* Subtle Grid Pattern for Light Mode */}
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-10 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">
              {t("cta.badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-950 mb-8 tracking-tight max-w-4xl leading-[1.05]"
          >
            {t("cta.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-2xl text-gray-500 mb-16 max-w-2xl font-semibold leading-relaxed tracking-tight"
          >
            {t("cta.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            {/* Standard Apple-Style Black Button for Light Background */}
            <motion.a
              href="https://apps.apple.com/tr/app/green-steps-walk/id6757185484?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4, shadow: "0 25px 50px -12px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-5 px-10 py-5 bg-gray-950 text-white rounded-[2rem] font-bold transition-all w-full sm:w-auto overflow-hidden group relative shadow-2xl"
            >
              <Apple className="w-9 h-9" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-black text-gray-400 leading-none mb-1 tracking-widest">{t("cta.downloadOn")}</p>
                <p className="text-2xl font-black leading-none">{t("cta.appStore")}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            {/* Premium Secondary Button for Play Store */}
            <motion.div
              className="flex items-center gap-5 px-10 py-5 bg-white text-gray-400 rounded-[2rem] font-bold border-2 border-gray-100 w-full sm:w-auto cursor-default group relative overflow-hidden"
            >
              <Play className="w-9 h-9 opacity-40" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-black tracking-widest leading-none mb-1">{t("cta.comingSoon")}</p>
                <p className="text-2xl font-black leading-none italic opacity-60">{t("cta.googlePlay")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Clean Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-10 border-t border-gray-100 w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i + 22}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt={`${t("cta.environmentalHeroes")} ${i}`} />
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-gray-950 leading-none mb-1">{t("cta.join")}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("cta.environmentalHeroes")}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-gray-950 leading-none mb-1">{t("cta.secureTracking")}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("cta.privacyFirst")}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                {t("hero.badge").replace('🌱', '').trim()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
