"use client";

import React, { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/ui/Footer";
import BackToCatalog from "@/components/BackToCatalog";
import { Button } from "@/components/ui/Button";

const footerComponentCode = `"use client";

import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-gray-100 dark:bg-gray-800 py-6 z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; 2025 UI Component Library. All rights reserved.
        </p>

        {/* Social links */}
        <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/fake-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com/fake-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
          >
            <Github size={24} aria-label="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
`;

export default function FooterPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="space-y-6">
      <BackToCatalog />
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
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={footerComponentCode} language="tsx" />
          </div>
        )}
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
