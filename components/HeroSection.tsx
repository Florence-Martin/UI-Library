import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight, Book } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold mb-6">
        Welcome to UI Component Library
      </h1>
      <p className="text-xl mb-8">
        Discover a collection of modern, responsive, and customizable UI
        components built with Next.js, TypeScript, and TailwindCSS.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Link href="/catalog" aria-label="Explore Components">
          <Button>
            Explore Components
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
        <Link
          href="/technical-documentation"
          aria-label="Technical Documentation"
        >
          <Button variant="outline">
            🇫🇷 Documentation globale
            <Book className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
        <Link
          href="/accessibility-documentation"
          aria-label="Accessibility Documentation"
        >
          <Button variant="outline">
            🇫🇷 Documentation &quot;accessibility&quot;
            <Book className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
