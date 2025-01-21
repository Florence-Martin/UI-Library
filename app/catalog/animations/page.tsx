"use client";

import React from "react";
import { Animations } from "../../../components/ui/Animations";
import CodeBlock from "@/components/CodeBlock";

export default function AnimationsPage() {
  return (
    <div className="space-y-6">
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
