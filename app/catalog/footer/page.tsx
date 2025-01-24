"use client";

import React, { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Footer from "@/components/ui/Footer";
import BackToCatalog from "@/components/BackToCatalog";
import { Button } from "@/components/ui/Button";

const footerComponentCode = `"use client";

import { useMemo } from "react";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx("sticky bottom-0 bg-gray-100 dark:bg-gray-800 py-6 z-10", "text-sm text-gray-600 dark:text-gray-300")}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p>&copy; {currentYear} UI Component Library. All rights reserved.</p>

        {/* Social links */}
        <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-end">
          <SocialLink
            href="https://www.linkedin.com/in/fake-profile/"
            label="LinkedIn"
            icon={<Linkedin size={24} />}
          />
          <SocialLink
            href="https://github.com/fake-profile"
            label="GitHub"
            icon={<Github size={24} />}
          />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}`;

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
          code={`import Footer from '@/components/ui/Footer';

export default function Layout() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  );
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
          <li>Links to LinkedIn and GitHub with modern styling.</li>
          <li>Fully responsive and adaptive to different screen sizes.</li>
          <li>Dark mode compatibility with Tailwind&apos;s `dark` classes.</li>
          <li>Accessible links with proper ARIA attributes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          Adjust the `href` properties of the `SocialLink` component to update
          the links. Tailwind CSS classes can be used to further customize the
          appearance of the footer.
        </p>
      </section>
    </div>
  );
}
