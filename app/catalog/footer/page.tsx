"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/ui/Footer";

export default function FooterPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Footer Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg overflow-hidden">
          <Footer />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import Footer from '@/components/ui/Footer'

export default function Layout() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  )
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Includes links to LinkedIn and GitHub</li>
          <li>Fully responsive layout</li>
          <li>Dark mode support</li>
          <li>Accessible with proper ARIA attributes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          You can customize the Footer by modifying the social media links and
          the styling of the component. Tailwind CSS classes can be used to
          adjust the design to fit your needs.
        </p>
      </section>
    </div>
  );
}
