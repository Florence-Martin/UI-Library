"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CircleHelp,
  HandHelping,
  KeyRound,
  SquareArrowOutUpLeft,
} from "lucide-react";
import DocumentationCard from "../../components/DocumentationCard";
import { useRouter } from "next/navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const AccessibilityDocumentation = () => {
  const router = useRouter();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 space-y-4"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Bouton Retour */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          aria-label="Go back to the previous page"
        >
          <SquareArrowOutUpLeft className="w-5 h-5 mr-2" />
          Back to Home page
        </button>
      </div>

      <motion.div className="text-center mb-12" aria-labelledby="doc-title">
        <h1
          id="doc-title"
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Accessibility Documentation
        </h1>
        <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300"
        aria-describedby="doc-intro"
      >
        This page serves as a guide to help developers integrate accessibility
        standards into their components. Ensuring accessible design is crucial
        for creating inclusive user experiences.
      </motion.p>

      <DocumentationCard
        icon={<CircleHelp className="w-6 h-6 text-blue-500" />}
        title="Why Accessibility Matters"
        description="Accessibility allows users with different abilities to navigate, interact with, and understand your application. It also aligns with web standards and legal requirements in many regions."
        ariaLabel="why-accessibility-matters"
        variants={item} // Passe l'animation à la section
      />

      <DocumentationCard
        icon={<KeyRound className="w-6 h-6 text-blue-500" />}
        title="Key Guidelines"
        description={
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            <li>Provide meaningful alternative text for images and media.</li>
            <li>Ensure sufficient color contrast for text and backgrounds.</li>
            <li>Use semantic HTML for better screen reader support.</li>
            <li>Make all interactive elements keyboard accessible.</li>
            <li>
              Implement ARIA (Accessible Rich Internet Applications) roles and
              attributes appropriately.
            </li>
          </ul>
        }
        ariaLabel="key-guidelines"
        variants={item} // Passe l'animation à la section
      />

      <DocumentationCard
        icon={<HandHelping className="w-6 h-6 text-blue-500" />}
        title="Helpful Resources"
        description={
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            <li>
              <Link
                href="https://www.w3.org/WAI/standards-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                aria-label="Visit the W3C Web Accessibility Initiative for guidelines"
              >
                W3C Web Accessibility Initiative (WAI)
              </Link>
            </li>
            <li>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                aria-label="Read about accessibility on MDN Web Docs"
              >
                MDN Web Docs: Accessibility
              </Link>
            </li>
            <li>
              <Link
                href="https://webaim.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                aria-label="Learn more about web accessibility at WebAIM"
              >
                WebAIM: Web Accessibility In Mind
              </Link>
            </li>
            <li>
              <Link
                href="https://www.a11yproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                aria-label="Explore the A11Y Project for accessibility resources"
              >
                The A11Y Project
              </Link>
            </li>
          </ul>
        }
        ariaLabel="helpful-resources"
        variants={item} // Passe l'animation à la section
      />

      <motion.footer
        className="pt-4 border-t border-gray-300 dark:border-gray-700"
        aria-label="Footer"
      >
        <p className="text-gray-600 dark:text-gray-300">
          For further guidance or to share feedback, please contact our team or
          refer to the resources above.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default AccessibilityDocumentation;
