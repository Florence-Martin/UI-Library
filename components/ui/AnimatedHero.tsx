"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function AnimatedHero({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}: AnimatedHeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Animated shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Circle 1 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-indigo-300/70"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: "10%", top: "20%" }}
        />
        {/* Circle 2 */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-300/70"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ right: "15%", top: "10%" }}
        />
        {/* Square */}
        <motion.div
          className="absolute w-72 h-72 bg-blue-300/70"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: "50%", bottom: "15%", transform: "translateX(-50%)" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/90 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              {subtitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onButtonClick}
              className="rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center backdrop-blur-sm"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
