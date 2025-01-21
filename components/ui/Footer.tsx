"use client";

import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-gray-100 dark:bg-gray-800 py-3 z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; 2025 UI Component Library. All rights reserved.
        </p>

        {/* Social links */}
        <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/florence-martin-922b3861/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com/Florence-Martin"
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
