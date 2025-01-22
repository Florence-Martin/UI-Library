"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, SquareArrowOutUpLeft } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FontsDocumentation: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="max-w-4xl mx-auto p-6 space-y-8"
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
            Back to Typography
          </button>
        </div>

        <motion.div variants={item} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Typography Guide: Modern and Popular Fonts
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              1. Why Typography Matters
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Typography plays a crucial role in design. It impacts readability,
            user experience, and conveys the tone of your application. Choosing
            the right fonts ensures your message is both clear and aesthetically
            pleasing.
          </p>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              2. Popular Fonts for Modern Applications
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Inter:</strong> A clean and modern sans-serif font, great
              for UI design and body text.
            </li>
            <li>
              <strong>Roboto:</strong> Known for its readability, it&apos;s a
              staple in Android applications.
            </li>
            <li>
              <strong>Poppins:</strong> A geometric sans-serif font with a
              contemporary style.
            </li>
            <li>
              <strong>Playfair Display:</strong> A serif font perfect for
              elegant headlines and high-end branding.
            </li>
            <li>
              <strong>Montserrat:</strong> Versatile and stylish, ideal for both
              headings and branding.
            </li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              3. Tips for Effective Typography
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              Use no more than two or three fonts to maintain consistency and
              balance.
            </li>
            <li>
              Ensure contrast between text and background for readability.
            </li>
            <li>
              Adjust line height and spacing for better text clarity, especially
              for body content.
            </li>
            <li>Pair serif fonts with sans-serif fonts for visual harmony.</li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              4. Choosing Fonts for Your Project
            </h2>
          </div>
          <p>Select fonts that align with your app&apos;s tone. For example:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Professional apps:</strong> Use clean fonts like Inter or
              Roboto.
            </li>
            <li>
              <strong>Creative apps:</strong> Experiment with Playfair Display
              or Poppins.
            </li>
            <li>
              <strong>E-commerce:</strong> Choose versatile fonts like
              Montserrat for branding.
            </li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              5. Optimizing Performance with Fonts
            </h2>
          </div>
          <p>
            Use tools like `next/font` for efficient font loading. Optimize by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Loading only the necessary font weights and styles.</li>
            <li>Using subsets to reduce font file size.</li>
            <li>Testing font rendering on different devices and browsers.</li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              6. Accessibility in Typography
            </h2>
          </div>
          <p>Always ensure your typography is accessible to all users by:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Using sufficient contrast ratios for readability.</li>
            <li>Choosing readable font sizes (16px minimum for body text).</li>
            <li>Testing fonts with screen readers to ensure compatibility.</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default FontsDocumentation;
