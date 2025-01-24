"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import clsx from "clsx";

interface AnimationVariant {
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  whileHover?: MotionProps["whileHover"];
  whileTap?: MotionProps["whileTap"];
  transition?: MotionProps["transition"];
}

const animationVariants: Record<string, AnimationVariant> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  rotate: {
    animate: { rotate: 360 },
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
  hoverEffect: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
  keyframes: {
    animate: {
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    },
    transition: { duration: 2, repeat: Infinity },
  },
};

interface AnimationItemProps {
  title: string;
  variantKey: string;
  bgColor: string;
}

const AnimationItem: React.FC<AnimationItemProps> = ({
  title,
  variantKey,
  bgColor,
}) => {
  const variant = animationVariants[variantKey];
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <motion.div className={clsx("w-16 h-16 rounded", bgColor)} {...variant} />
    </div>
  );
};

interface AnimationsProps {
  animations: Array<{ title: string; key: string; bgColor: string }>;
}

export function Animations({ animations }: AnimationsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4 py-8">
      {animations.map((animation) => (
        <AnimationItem
          key={animation.key}
          title={animation.title}
          variantKey={animation.key}
          bgColor={animation.bgColor}
        />
      ))}
    </div>
  );
}
