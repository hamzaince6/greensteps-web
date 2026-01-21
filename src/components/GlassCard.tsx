"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({
  children,
  className = "",
  delay = 0,
}: GlassProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3 },
      }}
      className={`glass rounded-3xl p-8 shadow-modern hover:shadow-glow transition-modern group ${className}`}
    >
      {children}
    </motion.div>
  );
};
