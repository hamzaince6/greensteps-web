"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Smartphone, Layout, Sparkles, ChevronRight, ChevronLeft, Layers, ShieldCheck } from "lucide-react";

const SCREENSHOTS = [
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3b/96/bb/3b96bb25-f9c2-d0ca-c85d-f17b04e56d4f/1.png/460x1000bb.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/3c/30/da3c30d5-7ffe-6b48-05dc-ccd26d9b3edd/2.png/460x1000bb.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/96/f9/d9/96f9d96a-7b86-9da4-a66e-bbc50e9545d8/3.png/460x1000bb.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/33/dc/39/33dc397b-b663-f15f-2e46-dad02d9e43ee/4.png/460x1000bb.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/34/ec/9d/34ec9db0-cff1-e5f9-1ddc-de23113ea50f/5.png/460x1000bb.webp",
];

export const Screenshots = () => {
    const t = useTranslations("screenshots");
    const impactT = useTranslations("impact");
    const [centerIndex, setCenterIndex] = useState(2);
    const containerRef = useRef<HTMLDivElement>(null);

    const next = () => setCenterIndex((prev) => (prev + 1) % SCREENSHOTS.length);
    const prev = () => setCenterIndex((prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="screenshots"
            ref={containerRef}
            className="py-24 md:py-40 bg-white relative overflow-hidden"
        >
            {/* Professional Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(16,185,129,0.05)_0%,_transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.4]" style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Global Standard Header */}
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm mb-8"
                    >
                        <Layout className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">{t("badge")}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.1] mb-8">
                        {t("titlePrefix")} <br className="hidden md:block" />
                        <span className="text-emerald-500">{t("title")}</span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-500 font-semibold max-w-2xl mx-auto leading-relaxed"
                    >
                        {t("description", { example1: impactT("example1") })}
                    </motion.p>
                </div>

                {/* Refined Slider Area */}
                <div className="relative h-[550px] md:h-[750px] flex items-center justify-center perspective-1000">

                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {SCREENSHOTS.map((url, index) => {
                                const offset = (index - centerIndex + SCREENSHOTS.length) % SCREENSHOTS.length;
                                let normalizedOffset = offset;
                                if (normalizedOffset > SCREENSHOTS.length / 2) normalizedOffset -= SCREENSHOTS.length;

                                const isCenter = normalizedOffset === 0;
                                const isSide = Math.abs(normalizedOffset) === 1;
                                const isFar = Math.abs(normalizedOffset) > 1;

                                return (
                                    <motion.div
                                        key={url}
                                        initial={false}
                                        animate={{
                                            opacity: isFar ? 0 : (isCenter ? 1 : 0.6),
                                            scale: isCenter ? 1 : (isSide ? 0.85 : 0.7),
                                            x: normalizedOffset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 280),
                                            rotateY: normalizedOffset * -10,
                                            filter: isCenter ? "blur(0px)" : "blur(2px)",
                                            zIndex: 10 - Math.abs(normalizedOffset)
                                        }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute w-[260px] md:w-[300px] aspect-[1/2.1] cursor-pointer"
                                        onClick={() => setCenterIndex(index)}
                                    >
                                        <div className="w-full h-full bg-gray-950 rounded-[2.5rem] p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-[4px] border-white ring-1 ring-gray-100 group">
                                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-950">
                                                <img
                                                    src={url}
                                                    alt={`App Screen ${index + 1}`}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                                />
                                                {/* Light Shine Effect */}
                                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                                            </div>

                                            {/* Hardware Micro-Details */}
                                            <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-950 rounded-full z-20 flex items-center justify-center border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
                                            </div>
                                        </div>

                                        {/* Status Tag for Center Card */}
                                        {isCenter && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 px-5 py-2 rounded-full shadow-lg flex items-center gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                <span className="text-[10px] font-black text-white tracking-widest uppercase italic">{t("liveInterface")}</span>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Minimalist Navigation */}
                    <div className="absolute -bottom-10 md:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95 group"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-950 group-hover:-translate-x-0.5 transition-transform" />
                        </button>
                        <div className="flex gap-1.5">
                            {SCREENSHOTS.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 rounded-full transition-all duration-500 ${centerIndex === i ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-200'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95 group"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-950 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Standard Feature Grid */}
                <div className="mt-32 md:mt-48 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 border-t border-gray-50 pt-16">
                    {[
                        { icon: Smartphone, title: t("nativeExperience"), desc: t("nativeExperienceDesc") },
                        { icon: ShieldCheck, title: t("privateSecure"), desc: t("privateSecureDesc") },
                        { icon: Sparkles, title: t("gamifiedGoals"), desc: t("gamifiedGoalsDesc") },
                        { icon: Layers, title: t("ecoStatistics"), desc: t("ecoStatisticsDesc") },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                <item.icon className="w-6 h-6" strokeWidth={2.5} />
                            </div>
                            <h4 className="font-black text-gray-950 tracking-tight text-sm mb-2">{item.title}</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
