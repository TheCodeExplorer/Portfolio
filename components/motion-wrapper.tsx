"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface SectionRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}

export function MotionSection({
  children,
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
}: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.06,
            delayChildren: 0.05,
          },
    },
  };

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledBy}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function MotionItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
