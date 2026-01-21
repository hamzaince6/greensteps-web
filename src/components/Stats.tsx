"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Users,
  Leaf,
  Trees,
  Sparkles,
  ArrowUpRight,
  Globe,
  Activity
} from "lucide-react";

// Counter Component to handle the numeric animation
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract number from string (e.g., "1.2M" -> 1.2, "50K" -> 50)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isMillion = value.includes('M');
  const isK = value.includes('K');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplayValue(latest)
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue === numericValue
        ? value
        : (isMillion
          ? displayValue.toFixed(1) + 'M'
          : isK
            ? Math.floor(displayValue) + 'K'
            : Math.floor(displayValue))}
    </span>
  );
};

export const Stats = () => {
  const t = useTranslations("impact");
  const containerRef = useRef<HTMLElement>(null);

  const stats = useMemo(() => [
    {
      key: "stats_users",
      value: "1.2M",
      icon: Users,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      detail: "Active Environmentalists"
    },
    {
      key: "stats_co2",
      value: "840K",
      icon: Leaf,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      detail: "kg CO₂ Prevented"
    },
    {
      key: "stats_trees",
      value: "24.5K",
      icon: Trees,
      color: "text-emerald-700",
      bgColor: "bg-emerald-100/50",
      detail: "Tree Planting Impact"
    },
  ], []);

  return (
    <section
      id="stats"
      ref={containerRef}
      className="relative py-24 md:py-40 overflow-hidden bg-white border-y border-gray-50"
    >
      {/* Global Standard Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.3]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,_rgba(16,185,129,0.03)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Professional Section Header */}
        <div className="mb-20 md:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm mb-8"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Global Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.1] mb-8">
            Measurable Change <br className="hidden md:block" />
            <span className="text-emerald-500">For Our Planet.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-500 font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Every step you take is tracked and verified, contributing to a global movement of sustainability and environmental health.
          </motion.p>
        </div>

        {/* Standard SaaS Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex flex-col p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon Visual */}
              <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center ${stat.color} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <stat.icon className="w-7 h-7" strokeWidth={2.5} />
              </div>

              {/* Stat Number & Label */}
              <div className="flex-1">
                <div className="flex items-end gap-3 mb-2">
                  <h3 className="text-5xl md:text-6xl font-black text-gray-950 tracking-tighter leading-none">
                    <Counter value={stat.value} />
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>

                <p className="text-sm font-black text-gray-950 uppercase tracking-widest mb-4">
                  {t(stat.key)}
                </p>

                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  {stat.detail}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <Sparkles className={`w-12 h-12 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Badge / Partnership Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 pt-16 border-t border-gray-50 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
              Partnered with global NGOs
            </p>
          </div>
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em] text-center max-w-lg">
            Impact data is securely synchronized and verified by independent environmental monitoring systems.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
