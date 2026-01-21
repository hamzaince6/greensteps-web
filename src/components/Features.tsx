"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Footprints,
  Leaf,
  TrendingUp,
  BarChart3,
  Droplet,
  Award,
  Zap,
  ArrowUpRight,
  Flame,
  CheckCircle2,
  Calendar
} from "lucide-react";

const FEATURES = [
  {
    icon: Footprints,
    key: "step_tracking",
    color: "from-emerald-400 to-teal-500",
    visualName: "steps",
  },
  {
    icon: Leaf,
    key: "carbon_impact",
    color: "from-emerald-500 to-green-600",
    visualName: "carbon",
  },
  {
    icon: TrendingUp,
    key: "streak_system",
    color: "from-orange-400 to-amber-500",
    visualName: "streak",
  },
  {
    icon: Award,
    key: "badges",
    color: "from-amber-400 to-yellow-600",
    visualName: "badges",
  },
  {
    icon: Droplet,
    key: "water_tracking",
    color: "from-blue-400 to-cyan-500",
    visualName: "water",
  },
  {
    icon: BarChart3,
    key: "monthly_reports",
    color: "from-indigo-400 to-blue-600",
    visualName: "reports",
  },
];

const FeatureVisual = ({ name }: { name: string }) => {
  const t = useTranslations("features");
  
  const commonHeader = (title: string, Icon: any, color: string) => (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-black text-gray-950 tracking-tight leading-none mb-1">{title}</h4>
          <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{t("liveActivity")}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-100" />)}
      </div>
    </div>
  );

  const renders: Record<string, React.ReactNode> = {
    steps: (
      <div className="flex flex-col h-full">
        {commonHeader(t("stepsAnalytics"), Footprints, "text-emerald-500")}
        <div className="flex-1 flex flex-col items-center justify-center -mt-8">
          <div className="relative w-56 h-56 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle cx="112" cy="112" r="100" fill="transparent" stroke="#f1f5f9" strokeWidth="16" />
              <motion.circle
                initial={{ strokeDasharray: "0 628" }}
                animate={{ strokeDasharray: "470 628" }}
                transition={{ duration: 2, ease: "easeOut" }}
                cx="112" cy="112" r="100" fill="transparent" stroke="#10b981" strokeWidth="16" strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-gray-950 tracking-tighter">8,420</span>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t("goal")}</span>
            </div>
          </div>
          <div className="mt-12 w-full grid grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 rounded-3xl">
              <p className="text-[8px] font-black text-emerald-600 uppercase tracking-widest mb-1">{t("calories")}</p>
              <p className="font-black text-lg text-emerald-700">342 kcal</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-3xl">
              <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">{t("distance")}</p>
              <p className="font-black text-lg text-blue-700">5.8 km</p>
            </div>
          </div>
        </div>
      </div>
    ),
    carbon: (
      <div className="flex flex-col h-full">
        {commonHeader(t("ecoTracker"), Leaf, "text-emerald-600")}
        <div className="flex-1 space-y-6">
          <div className="bg-emerald-500 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">{t("savedThisMonth")}</p>
              <h4 className="text-4xl font-black mb-6">42.8kg <span className="text-xl opacity-60 font-medium">{t("co2")}</span></h4>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-4 py-2 rounded-full">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-[10px] font-bold">{t("moreThanLastMonth")}</span>
              </div>
            </div>
            <Leaf className="absolute -bottom-4 -right-4 w-40 h-40 text-white/10 -rotate-12" />
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">{t("globalContribution")}</h5>
            {[
              { label: t("treesSaved"), val: "3.2 Trees", color: "bg-green-50" },
              { label: t("plasticReduction"), val: "124 Bottles", color: "bg-blue-50" }
            ].map((item, i) => (
              <div key={i} className={`flex items-center justify-between p-5 ${item.color} rounded-3xl`}>
                <span className="text-sm font-bold text-gray-700">{item.label}</span>
                <span className="text-sm font-black text-gray-950">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    streak: (
      <div className="flex flex-col h-full">
        {commonHeader(t("dailyMotivation"), Flame, "text-orange-500")}
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center relative mb-10"
          >
            <div className="absolute inset-0 bg-orange-200/50 rounded-full blur-xl animate-pulse" />
            <Flame className="w-20 h-20 text-orange-500 drop-shadow-2xl relative z-10" fill="currentColor" />
          </motion.div>

          <h4 className="text-4xl font-black text-gray-950 tracking-tighter mb-2">12 {t("dayStreak")}</h4>
          <div className="flex gap-2 mb-12">
            {[1, 1, 1, 1, 1, 1, 0].map((active, i) => (
              <div key={i} className={`w-1.5 h-6 rounded-full ${active ? 'bg-orange-500' : 'bg-gray-100'}`} />
            ))}
          </div>

          <div className="bg-orange-50 p-6 rounded-[2rem] w-full flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 shadow-sm font-black text-lg">
              2x
            </div>
            <div>
              <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">{t("bonusMultiplier")}</p>
              <p className="text-sm font-bold text-gray-700">{t("earningsIncreased")}</p>
            </div>
          </div>
        </div>
      </div>
    ),
    badges: (
      <div className="flex flex-col h-full">
        {commonHeader(t("ecoAchievements"), Award, "text-amber-500")}
        <div className="flex-1 grid grid-cols-2 gap-4 pt-4">
          {[
            { name: t("forestGuard"), color: "bg-emerald-100", icon: Leaf },
            { name: t("waterMaster"), color: "bg-blue-100", icon: Droplet },
            { name: t("stepPro"), color: "bg-orange-100", icon: Footprints },
            { name: t("ecoHero"), color: "bg-indigo-100", icon: Zap }
          ].map((badge, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-sm">
              <div className={`w-16 h-16 ${badge.color} rounded-2xl flex items-center justify-center mb-4`}>
                <badge.icon className="w-8 h-8 opacity-60" />
              </div>
              <p className="text-[10px] font-black text-gray-950 leading-tight">{badge.name}</p>
              <div className="mt-2 h-1 w-12 bg-gray-50 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-3/4" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-amber-50 rounded-[2rem] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            <span className="text-xs font-black text-amber-700 tracking-tight">{t("expertRankReach")}</span>
          </div>
          <CheckCircle2 className="w-5 h-5 text-amber-500" />
        </div>
      </div>
    ),
    water: (
      <div className="flex flex-col h-full">
        {commonHeader(t("hydrationFlow"), Droplet, "text-blue-500")}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-48 h-64 bg-blue-50/50 rounded-[3rem] border border-blue-100 overflow-hidden mb-8">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-x-0 bottom-0 h-3/4 bg-blue-500/10"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Droplet className="w-20 h-20 text-blue-500 drop-shadow-2xl" fill="currentColor" />
              <span className="text-3xl font-black text-blue-600 mt-4">1.5 <span className="text-lg font-medium">Liters</span></span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full">
            {[25, 50, 75].map(p => (
              <div key={p} className="flex flex-col items-center p-4 bg-white border border-gray-50 rounded-2xl">
                <span className="text-[10px] font-black text-gray-400 mb-1">{p}%</span>
                <div className="h-10 w-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-full bg-blue-400" style={{ height: `${p}%` }} />
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg shadow-blue-500/20">
            Add Cup +
          </button>
        </div>
      </div>
    ),
    reports: (
      <div className="flex flex-col h-full">
        {commonHeader(t("impactSummary"), BarChart3, "text-indigo-500")}
        <div className="flex-1 space-y-8">
          <div className="bg-indigo-50 rounded-[2rem] p-6">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{t("carbonNeutrality")}</p>
              <Zap className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="flex items-end gap-2 h-32">
              {[40, 70, 50, 90, 60, 85, 55].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="flex-1 bg-indigo-500/20 rounded-t-lg relative group"
                >
                  <div className="absolute inset-0 bg-indigo-500 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-gray-50 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-gray-950 uppercase tracking-widest leading-none mb-1">{t("monthlyGoal")}</p>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-2/3" />
                </div>
              </div>
              <span className="text-xs font-black text-gray-950">65%</span>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-full h-full bg-gray-950 rounded-[3.5rem] p-2.5 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] border-[8px] border-gray-900 ring-1 ring-white/10 relative overflow-hidden">
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white flex flex-col pt-16 px-8">
        {renders[name] || renders.steps}

        {/* Dynamic Island Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-950 rounded-full z-20 flex items-center justify-end px-3 gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
          <div className="w-1 h-1 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  const t = useTranslations("features");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="relative py-24 md:py-40 overflow-hidden bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 shadow-sm mb-8"
          >
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">{t("badge")}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-950 tracking-tight leading-[1.05] mb-8">
            {t("titleMain")} <br className="hidden md:block" />
            <span className="text-emerald-500">{t("titleSuffix")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-center">

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.key}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center text-center p-6 rounded-[2.5rem] transition-all duration-500 border group ${activeIndex === index
                    ? "bg-white border-gray-100 shadow-2xl scale-[1.05] z-10"
                    : "bg-gray-50/50 border-transparent opacity-60 hover:opacity-100 hover:bg-white hover:border-gray-100"
                  }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white shadow-lg mb-6 transition-all duration-500 ${activeIndex === index ? 'scale-110 rotate-3' : 'group-hover:scale-110'}`}>
                  {(() => {
                    const Icon = feature.icon;
                    return <Icon className="w-full h-full" strokeWidth={2.5} />;
                  })()}
                </div>
                <h3 className={`text-[10px] font-black tracking-[0.2em] uppercase leading-tight transition-colors ${activeIndex === index ? "text-gray-950" : "text-gray-400 group-hover:text-gray-950"}`}>
                  {t(`${feature.key}`).replace('•', '').trim()}
                </h3>
              </button>
            ))}
          </div>

          <div className="lg:col-span-12 xl:col-span-7 flex justify-center perspective-2000">
            <div className="relative w-[300px] md:w-[420px] aspect-[1/2.05]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 15, y: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: -15, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <FeatureVisual name={FEATURES[activeIndex].visualName} />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] -z-10 rounded-full animate-pulse" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap px-6 py-2.5 bg-gray-950 text-white rounded-full shadow-2xl flex items-center gap-3 border border-white/10"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t("liveSimulationMode")}</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
