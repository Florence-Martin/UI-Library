"use client";

import React, { useState } from "react";
import { Animations } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

export default function AnimationsPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  const animationsComponentCode = `
'use client';

import React, { useMemo } from 'react';
import { motion, MotionProps } from 'framer-motion';
import clsx from 'clsx';

interface AnimationVariant {
  initial?: MotionProps['initial'];
  animate?: MotionProps['animate'];
  whileHover?: MotionProps['whileHover'];
  whileTap?: MotionProps['whileTap'];
  transition?: MotionProps['transition'];
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
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
  rotate: {
    animate: { rotate: 360 },
    transition: { duration: 2, repeat: Infinity, ease: 'linear' },
  },
  hoverEffect: {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
  keyframes: {
    animate: {
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['0%', '0%', '50%', '50%', '0%'],
    },
    transition: { duration: 2, repeat: Infinity },
  },
};

interface AnimationItemProps {
  title: string;
  variantKey: string;
  bgColor: string;
}

const AnimationItem: React.FC<AnimationItemProps> = ({ title, variantKey, bgColor }) => {
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
`;

  const exampleAnimations = [
    { title: "Fade In", key: "fadeIn", bgColor: "bg-blue-500" },
    { title: "Scale", key: "scale", bgColor: "bg-green-500" },
    { title: "Rotate", key: "rotate", bgColor: "bg-yellow-500" },
    { title: "Hover Effect", key: "hoverEffect", bgColor: "bg-pink-500" },
    { title: "Keyframes", key: "keyframes", bgColor: "bg-purple-500" },
  ];

  return (
    <div className="container mx-auto mb-20 sm:mb-3 px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Animations Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <Animations animations={exampleAnimations} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Animations } from '@/components/ui/Animations';

export default function MyComponent() {
  const animations = [
    { title: 'Fade In', key: 'fadeIn', bgColor: 'bg-blue-500' },
    { title: 'Scale', key: 'scale', bgColor: 'bg-green-500' },
    { title: 'Rotate', key: 'rotate', bgColor: 'bg-yellow-500' },
    { title: 'Hover Effect', key: 'hoverEffect', bgColor: 'bg-pink-500' },
    { title: 'Keyframes', key: 'keyframes', bgColor: 'bg-purple-500' },
  ];

  return <Animations animations={animations} />;
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={animationsComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Showcase of various animation techniques using Framer Motion</li>
          <li>
            Includes fade in, scale, rotate, hover effects, and keyframe
            animations
          </li>
          <li>Easy to copy and adapt for use in other components</li>
          <li>Customizable styling using Tailwind CSS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          To use these animations in your own components, you can copy the
          relevant motion.div elements and their properties. Adjust the
          className and animation properties as needed to fit your specific use
          case.
        </p>
      </section>
    </div>
  );
}
