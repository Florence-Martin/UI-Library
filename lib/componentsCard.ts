import SlideCard from "@/components/ui/SlideCard";
import SlideCardSkeleton from "@/components/ui/SlideCardSkeleton";
import AnimatedCard from "@/components/ui/AnimatedCard";

export const componentsCard = [
  {
    name: "SlideCard",
    component: SlideCard,
    hasAnimation: false,
    code: `""use client";
    
    import React from "react";
    
    const SlideCard: React.FC = () => {
      return (
        <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700">
          <div className="w-56 h-72 bg-lime-400 text-gray-800">
            <div className="flex flex-row justify-between">
              {/* Add any additional content here */}
            </div>
          </div>
          <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span className="text-lime-400 font-bold text-xs">TAILWIND</span>
            <span className="text-gray-800 font-bold text-3xl mb-3">
              Cheat Sheet
            </span>
            <p className="text-neutral-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      );
    };
    
    export default SlideCard;
    `,
    usage: `import SlideCard from "@/components/ui/SlideCard";

export default function MyComponent() {
  return <SlideCard />;
};`,
  },
  {
    name: "SlideCardSkeleton",
    component: SlideCardSkeleton,
    hasAnimation: false,
    code: `"import React from "react";
    
    const SlideCardSkeleton: React.FC = () => {
      return (
        <div className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl bg-gray-200 animate-pulse">
          <div className="w-56 h-72 bg-gray-300">
            <div className="flex flex-row justify-between">
              {/* Add any additional content here */}
            </div>
          </div>
          <div className="absolute bg-gray-300 -bottom-24 w-56 p-3 flex flex-col gap-1">
            <span className="text-gray-400 font-bold text-xs">TAILWIND</span>
            <span className="text-gray-400 font-bold text-3xl mb-3">
              Cheat Sheet
            </span>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      );
    };
    
    export default SlideCardSkeleton;
    `,
    usage: `import SlideCardSkeleton from "@/components/ui/SlideCardSkeleton";

    export default function MyComponent() {
      return <SlideCardSkeleton />;
    };`,
  },
  {
    name: "AnimatedCard",
    component: AnimatedCard,
    hasAnimation: true,
    code: `"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <div className="relative group cursor-pointer group overflow-hidden text-gray-800 h-72 w-56 rounded-2xl hover:duration-700 duration-700">
      <div className="w-56 h-72 bg-purple-600 text-gray-800">
        {/* Animated shapes */}
        <motion.div
          className="absolute top-[15%] left-[20%] w-12 h-12 bg-yellow-400 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-16 h-16 bg-green-400 rounded-md"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[30%] w-14 h-14 bg-red-400 rounded-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* Animated text */}
        <motion.h2
          className="absolute top-[25%] left-0 right-0 text-center text-2xl font-bold text-gray-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Innovez pour Réussir
        </motion.h2>
        <motion.p
          className="absolute top-[60%] left-0 right-0 text-center text-lg text-gray-800"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Transformez vos idées en succès
        </motion.p>
      </div>
    </div>
  );
}
`,
    usage: `import AnimatedCard from "@/components/ui/AnimatedCard";

export default function MyComponent() {
  return <AnimatedCard />;
};`,
  },
];
