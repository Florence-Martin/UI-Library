"use client";

import React, { useState } from "react";
import { Animations } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";

const animationsComponentCode = `
'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function Animations() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Fade In</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-16 h-16 bg-blue-500 rounded"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Scale</h3>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-16 h-16 bg-green-500 rounded"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Rotate</h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-yellow-500 rounded"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Hover Effect</h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-red-500 rounded cursor-pointer"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Keyframes</h3>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 bg-purple-500"
        />
      </div>
    </div>
  )
}
`;

export default function AnimationsPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">Animations Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <Animations />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Animations } from '@/components/ui/Animations'

export default function MyComponent() {
  return <Animations />
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
