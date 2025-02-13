"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import clsx from "clsx";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      setShowFooter(progress > 0.95); // Afficher le footer quand on atteint 95% du scroll
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: showFooter ? 1 : 0, y: showFooter ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "bg-gray-100 dark:bg-gray-800 py-6 z-10",
        "text-sm text-gray-600 dark:text-gray-300",
        "fixed bottom-0 left-0 w-full"
      )}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Copyright */}
        <p>&copy; {currentYear} UI Component Library. All rights reserved.</p>

        {/* Social links */}
        <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-end">
          <SocialLink
            href="https://www.linkedin.com/in/florence-martin-922b3861/"
            label="LinkedIn"
            icon={<Linkedin size={24} />}
          />
          <SocialLink
            href="https://github.com/Florence-Martin"
            label="GitHub"
            icon={<Github size={24} />}
          />
        </div>
      </div>
    </motion.footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
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
}
