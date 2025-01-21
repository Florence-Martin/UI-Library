"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";
import { Tooltip } from "@/components/ui/Tooltip";

export default function TooltipPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tooltip Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="flex items-center justify-center h-32">
          <Tooltip content="This is a tooltip">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Hover me
            </button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Tooltip } from '@/components/ui/Tooltip'

export default function MyComponent() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  )
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>content</code>: The text content of the tooltip
          </li>
          <li>
            <code>children</code>: The element that triggers the tooltip
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Smooth enter/exit animations using Framer Motion</li>
          <li>Accessible with keyboard focus support</li>
          <li>Customizable styling using Tailwind CSS</li>
          <li>Dark mode support</li>
        </ul>
      </section>
    </div>
  );
}
