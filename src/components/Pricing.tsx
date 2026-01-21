"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    key: "free",
    price: "₺0",
    features: [
      "step_tracking",
      "carbon_impact",
      "streak_system",
      "badges",
      "water_tracking"
    ],
    popular: false
  },
  {
    key: "pro",
    price: "₺29",
    period: "/ ay",
    features: [
      "priority_tracking",
      "carbon_deep_dive",
      "special_streaks",
      "exclusive_badges",
      "advanced_water",
      "monthly_reports"
    ],
    popular: true,
    trial: true
  }
];

export const Pricing = () => {
  const t = useTranslations("pricing");
  const featT = useTranslations("features");
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white dark:bg-black"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            {t("title")}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            {t("title")}
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[3rem] border flex flex-col ${plan.popular
                ? "bg-gray-900 border-emerald-500 shadow-2xl shadow-emerald-500/20 z-10"
                : "bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-white/5"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8 px-4 py-1 bg-emerald-500 text-white text-xs font-black rounded-full shadow-lg">
                  RECOMMENDED
                </div>
              )}

              {plan.trial && (
                <div className="absolute top-8 right-8 text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {t("trial")}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-3xl font-black mb-2 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {t(plan.key)}
                </h3>
                <p className={`text-sm font-medium ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                  {t(`${plan.key}_desc`)}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-6xl font-black ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-xl font-medium ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${plan.popular ? "text-emerald-400" : "text-emerald-600"}`}>
                  {plan.key === "free" ? t("basic_features") : t("premium_features")}
                </p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.popular ? "bg-emerald-500" : "bg-emerald-100 dark:bg-emerald-900/30"}`}>
                      <Check className={`w-4 h-4 ${plan.popular ? "text-white" : "text-emerald-600 dark:text-emerald-400"}`} />
                    </div>
                    <span className={`text-base font-medium ${plan.popular ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                      {featT(feature as any)}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${plan.popular
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-500/30"
                  : "bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20"
                  }`}
              >
                {t("get_started")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
