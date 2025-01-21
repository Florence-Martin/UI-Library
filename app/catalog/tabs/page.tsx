"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";
import { Tabs } from "@/components/ui/Tabs";

export default function TabsPage() {
  const exampleTabs = [
    { id: "tab1", label: "Tab 1", content: <p>Content for Tab 1</p> },
    { id: "tab2", label: "Tab 2", content: <p>Content for Tab 2</p> },
    { id: "tab3", label: "Tab 3", content: <p>Content for Tab 3</p> },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tabs Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <Tabs tabs={exampleTabs} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Tabs } from '@/components/ui/Tabs'

const tabs = [
  { id: 'tab1', label: 'Tab 1', content: <p>Content for Tab 1</p> },
  { id: 'tab2', label: 'Tab 2', content: <p>Content for Tab 2</p> },
  { id: 'tab3', label: 'Tab 3', content: <p>Content for Tab 3</p> },
]

export default function MyComponent() {
  return <Tabs tabs={tabs} />
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>tabs</code>: An array of tab objects with <code>id</code>,{" "}
            <code>label</code>, and <code>content</code> properties
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Smooth transitions between tabs using Framer Motion</li>
          <li>
            Accessible with proper ARIA attributes and keyboard navigation
          </li>
          <li>Customizable styling using Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
}
