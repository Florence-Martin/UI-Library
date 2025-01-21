"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-6">
        Welcome to UI Component Library
      </h1>
      <p className="text-xl mb-8">
        Discover a collection of modern, responsive, and customizable UI
        components built with Next.js, TypeScript, and TailwindCSS.
      </p>
      <Link
        href="/catalog"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Explore Components
      </Link>
    </motion.div>
  );
}
