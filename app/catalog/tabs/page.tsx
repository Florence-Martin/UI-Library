"use client";

import React, { useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const tabsComponentCode = `
"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react"; // Adjust based on your icon imports

interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  if (tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`flex items-center space-x-2 px-4 py-2 font-medium text-sm focus:outline-none transition-colors duration-300 \${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }\`}
          >
            {tab.icon && <tab.icon className="h-4 w-4" />}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === tab.id ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

`;

export default function TabsPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  const exampleTabs = [
    { id: "tab1", label: "Tab 1", content: <p>Content for Tab 1</p> },
    { id: "tab2", label: "Tab 2", content: <p>Content for Tab 2</p> },
    { id: "tab3", label: "Tab 3", content: <p>Content for Tab 3</p> },
  ];

  return (
    <div className="container mx-auto mb-20 sm:mb-3 px-4 py-8 space-y-6">
      <BackToCatalog />
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
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={tabsComponentCode} language="tsx" />
          </div>
        )}
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
