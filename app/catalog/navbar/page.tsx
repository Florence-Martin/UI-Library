"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";
import Navbar from "@/components/ui/Navbar";

export default function NavbarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Navbar Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg overflow-hidden">
          <Navbar />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import Navbar from '@/components/ui/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* Your page content */}
    </div>
  )
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responsive design with mobile menu</li>
          <li>Smooth animations using Framer Motion</li>
          <li>Customizable navigation items</li>
          <li>
            Accessible with proper ARIA attributes and keyboard navigation
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          You can customize the Navbar by modifying the NavItem components
          within the Navbar. The styling can be adjusted using Tailwind CSS
          classes.
        </p>
      </section>
    </div>
  );
}
