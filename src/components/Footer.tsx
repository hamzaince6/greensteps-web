"use client";

import { useTranslations } from "next-intl";
import { Leaf, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
    const t = useTranslations("footer");
    const navT = useTranslations("nav");

    return (
        <footer className="bg-gray-50 dark:bg-gray-950 pt-20 pb-10 border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo and Tagline */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                                <Leaf className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black text-gray-900 dark:text-white">
                                GreenSteps
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xs transition-colors">
                            {t("tagline")}
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                            GreenSteps
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {navT("home")}
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {navT("howItWorks")}
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {navT("features")}
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {navT("pricing")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                            {t("about")}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {t("about")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {t("privacy")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                                    {t("terms")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                            {t("contact")}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-emerald-500" />
                            support@greensteps.app
                        </p>
                        <div className="glass p-6 rounded-2xl border border-white/50 dark:border-white/5">
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                Subscribe to our newsletter for eco-tips.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2 w-full text-sm outline-none focus:border-emerald-500 transition-colors"
                                />
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-200 dark:border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        {t("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
};
