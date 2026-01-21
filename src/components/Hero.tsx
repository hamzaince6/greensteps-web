"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useTransform, useSpring } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download, Sparkles, Star, Smartphone, Activity, ShieldCheck } from "lucide-react";

const SCREENSHOTS = [
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3b/96/bb/3b96bb25-f9c2-d0ca-c85d-f17b04e56d4f/1.png/460x1000bb.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/3c/30/da3c30d5-7ffe-6b48-05dc-ccd26d9b3edd/2.png/460x1000bb.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/96/f9/d9/96f9d96a-7b86-9da4-a66e-bbc50e9545d8/3.png/460x1000bb.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/33/dc/39/33dc397b-b663-f15f-2e46-dad02d9e43ee/4.png/460x1000bb.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/ec/9d/34ec9db0-cff1-e5f9-1ddc-de23113ea50f/5.png/460x1000bb.webp",
];

export const Hero = () => {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Mouse parallax motion
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SCREENSHOTS.length);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const titleWords = t("hero.title").split(" ");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white selection:bg-emerald-100 font-sans"
    >
      {/* Absolute Elite Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_70%_30%,_rgba(16,185,129,0.12)_0%,_transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.08)_0%,_transparent_60%)] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <motion.div
          style={{ x: useTransform(mouseX, [-20, 20], [50, -50]), y: useTransform(mouseY, [-20, 20], [50, -50]) }}
          className="absolute top-1/3 left-10 w-24 h-24 border border-emerald-500/10 rounded-full flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-emerald-500/20 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-xl shadow-emerald-500/5 mb-8 hover:border-emerald-500/30 transition-colors cursor-default"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40">
                <ShieldCheck className="w-3 h-3 text-white" />
              </div>
              <span className="text-[13px] font-black text-gray-950 tracking-tight uppercase">
                {t("hero.badge")}
              </span>
              <div className="h-4 w-px bg-gray-200 mx-1" />
              <div className="flex gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-[13px] font-bold text-gray-500">4.9</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black text-gray-950 leading-[0.92] tracking-tighter mb-8 perspective-1000">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.2em] last:mr-0 select-none pb-2"
                >
                  {word === "Etkisi" || word === "Impact" ? (
                    <span className="relative group">
                      <span className="relative z-10 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent italic px-2">
                        {word}
                      </span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
                        className="absolute bottom-6 left-0 w-full h-5 bg-emerald-100/40 -rotate-1 origin-left -z-0 rounded-full blur-[2px]"
                      />
                    </span>
                  ) : (
                    <span className="hover:text-emerald-600 transition-colors duration-500">{word}</span>
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-500 mb-12 max-w-xl leading-relaxed font-semibold tracking-tight"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-6"
            >
              <motion.a
                href="https://apps.apple.com/tr/app/green-steps-walk/id6757185484?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 30px 60px -12px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-6 bg-gray-950 text-white rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-4 overflow-hidden border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 pr-2">{t("hero.cta")}</span>
                <div className="relative z-10 h-7 w-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-all duration-500">
                  <Download className="w-4 h-4" />
                </div>
              </motion.a>

              <div className="hidden sm:block">
                <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">{t("hero.availableNow")}</p>
                <div className="flex gap-4 items-center opacity-40 group hover:opacity-100 transition-opacity">
                  <Smartphone className="w-5 h-5 text-gray-950" />
                  <div className="h-4 w-px bg-gray-300" />
                  <Activity className="w-5 h-5 text-gray-950" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-10 border-t border-gray-100 pt-10 mt-16 w-full"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i + 10}`}
                    alt={t("hero.user")}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-emerald-50 flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-emerald-700">{t("hero.usersCount")}</span>
                </div>
              </div>
              <div>
                <div className="flex gap-1 text-amber-400 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm font-bold text-gray-950">
                  {t("hero.appStoreRating")}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center perspective-2000">
            <motion.div
              style={{
                x: useTransform(mouseX, [-20, 20], [-15, 15]),
                y: useTransform(mouseY, [-20, 20], [-15, 15]),
              }}
              className="relative w-full max-w-[340px]"
            >
              <div className="relative z-20 bg-gray-950 rounded-[4rem] p-3 shadow-[0_80px_100px_-30px_rgba(0,0,0,0.4)] border-[8px] border-gray-800 ring-[12px] ring-gray-100/50">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-950 rounded-[2rem] z-40 flex items-center justify-end px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500/20 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                </div>

                <div className="relative w-full aspect-[1/2.16] rounded-[3.2rem] overflow-hidden bg-gray-900 border border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={SCREENSHOTS[currentSlide]}
                      alt={`${t("hero.title")} - ${t("hero.subtitle")} - Screenshot ${currentSlide + 1}`}
                      initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
                      animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                      exit={{ scale: 0.95, filter: "blur(10px)", opacity: 0 }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <motion.div
                style={{ x: useTransform(mouseX, [-20, 20], [-40, 40]), y: useTransform(mouseY, [-20, 20], [-30, 30]) }}
                className="absolute -top-10 -right-16 glass p-6 rounded-[2.5rem] shadow-2xl z-30 border border-white/80 hidden xl:flex flex-col items-center gap-2 min-w-[140px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{t("hero.efficiency")}</p>
                <p className="text-2xl font-black text-gray-950">{t("hero.efficiencyValue")}</p>
              </motion.div>

              <motion.div
                style={{ x: useTransform(mouseX, [-20, 20], [30, -30]), y: useTransform(mouseY, [-20, 20], [50, -50]) }}
                className="absolute -bottom-10 -left-16 glass p-6 rounded-[2.5rem] shadow-2xl z-30 border border-white/80 hidden xl:flex flex-col items-center gap-2 min-w-[140px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{t("hero.activeUsers")}</p>
                <p className="text-2xl font-black text-gray-950">{t("hero.activeUsersCount")}</p>
              </motion.div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-gray-100 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-emerald-500/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
