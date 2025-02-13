"use client";

import React, { useState } from "react";
import { Menu } from "@/components/ui/Menu";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const menuComponentCode = `
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useClickOutside } from "../../hooks/useClickOutside";

export function Menu({ label, items }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button className={clsx("...")} onClick={toggleMenu}>
        {label}
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className={clsx("...")}>
            {items.map((item, index) => (
              <a key={index} href={item.href} className={clsx("...")}>
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`;

export default function MenuPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  const menuItems = [
    { label: "Profile", href: "#profile" },
    { label: "Settings", href: "#settings" },
    { label: "Logout", href: "#logout" },
  ];

  return (
    <div className="container mx-auto mb-20 sm:mb-3 px-4 py-8 space-y-6">
      <BackToCatalog />
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
          code={`import { Menu } from '@/components/ui/Menu';

const menuItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Settings', href: '#settings' },
  { label: 'Logout', href: '#logout' },
];

export default function MyComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Menu label="Options" items={menuItems} />
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom hook to detect outside clicks</li>
          <li>Usage of `clsx` for conditional CSS class management</li>
          <li>Smooth animations with Framer Motion</li>
          <li>Accessibility and customization via Tailwind CSS</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Component code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={menuComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>label</code>: The text to display on the menu button
          </li>
          <li>
            <code>items</code>: An array of menu items, each with a{" "}
            <code>label</code> (string) and <code>href</code> (string) for the
            link.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dropdown menu with smooth animations using Framer Motion</li>
          <li>
            Closes when clicking outside the menu using a custom hook
            (`useClickOutside`)
          </li>
          <li>
            Conditional class management with `clsx` for clean and maintainable
            styling
          </li>
          <li>Customizable styling using Tailwind CSS</li>
          <li>Keyboard and accessibility-friendly design</li>
        </ul>
      </section>
    </div>
  );
}
