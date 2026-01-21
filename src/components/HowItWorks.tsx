"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Footprints, Calculator, FileText, Sparkles, CheckCircle2 } from "lucide-react";

const STEPS = [
    {
        icon: Footprints,
        key: "step1",
        color: "from-emerald-400 to-teal-500",
        glow: "rgba(16, 185, 129, 0.4)",
    },
    {
        icon: Calculator,
        key: "step2",
        color: "from-blue-400 to-indigo-500",
        glow: "rgba(59, 130, 246, 0.4)",
    },
    {
        icon: FileText,
        key: "step3",
        color: "from-purple-400 to-pink-500",
        glow: "rgba(168, 85, 247, 0.4)",
    },
];

export const HowItWorks = () => {
    const t = useTranslations("howItWorks");
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.9"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            className="relative py-24 md:py-40 bg-white overflow-hidden"
        >
            {/* Premium Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.3]" style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Professional Section Header */}
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">{t("badge")}</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.1] mb-8">
                        {t("title")} <br className="hidden md:block" />
                        <span className="text-emerald-500">{t("subtitle")}</span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-500 font-semibold max-w-2xl mx-auto leading-relaxed"
                    >
                        {t("description")}
                    </motion.p>
                </div>

                {/* Timeline Layout */}
                <div className="relative">
                    {/* Horizontal Timeline Container */}
                    <div className="relative py-20 md:py-32">
                        {/* Horizontal Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2 overflow-hidden z-10">
                            <motion.div
                                style={{ scaleX, originX: 0 }}
                                className="absolute inset-0 bg-emerald-500"
                            />
                        </div>

                        {/* Steps Container */}
                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                            {STEPS.map((step, index) => {
                                return (
                                    <motion.div
                                        key={step.key}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                        className="relative flex flex-col items-center text-center"
                                    >
                                        {/* Stage Label - Above the line */}
                                        <div className="relative z-30 mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                </div>
                                                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">{index + 1}. {t("stage")}</span>
                                            </div>
                                        </div>

                                        {/* Icon Node */}
                                        <div className="relative z-20 mb-6">
                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + 0.3 }}
                                                className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white border border-gray-100 shadow-xl flex items-center justify-center text-gray-950 group hover:border-emerald-500 transition-colors duration-500"
                                            >
                                                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-emerald-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                                            </motion.div>

                                            {/* Index Indicator */}
                                            <div className="absolute -top-3 -right-3 w-7 h-7 bg-gray-950 text-white rounded-full flex items-center justify-center text-[10px] font-black border-4 border-white">
                                                {index + 1}
                                            </div>
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex flex-col items-center">
                                            <h3 className="text-xl md:text-2xl font-black text-gray-950 mb-3 tracking-tight">
                                                {t(`${step.key}_title`)}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-500 font-semibold leading-relaxed max-w-xs">
                                                {t(`${step.key}_desc`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Global Verification Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-40 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl">
                        <div className="flex -space-x-1.5">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white" />
                            ))}
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            {t("trusted")}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
