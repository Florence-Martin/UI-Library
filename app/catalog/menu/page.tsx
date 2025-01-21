"use client";

import React from "react";
import { Menu } from "../../../components/ui/Menu";
import CodeBlock from "@/components/CodeBlock";

export default function MenuPage() {
  const menuItems = [
    { label: "Profile", href: "#profile" },
    { label: "Settings", href: "#settings" },
    { label: "Logout", href: "#logout" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Menu Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="flex items-center justify-center h-32">
          <Menu label="Options" items={menuItems} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Menu } from '@/components/ui/Menu'

const menuItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Settings', href: '#settings' },
  { label: 'Logout', href: '#logout' },
]

export default function MyComponent() {
  return <Menu label="Options" items={menuItems} />
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>label</code>: The text to display on the menu button
          </li>
          <li>
            <code>items</code>: An array of menu items, each with a{" "}
            <code>label</code> and <code>href</code>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dropdown menu with smooth animations using Framer Motion</li>
          <li>Closes when clicking outside the menu</li>
          <li>Accessible with keyboard navigation support</li>
          <li>Customizable styling using Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
}
