"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 bg-white/95 backdrop-blur shadow-lg z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo à gauche */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo-removebg.png"
                alt="Logo"
                width={100}
                height={100}
                className="mt-2"
              />
            </Link>
          </div>

          {/* Navigation à droite */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/catalog">Components</NavItem>
            <ThemeToggle />
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md 
                         text-gray-400 hover:text-white hover:bg-gray-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {/* icône affichée selon l’état */}
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-100%" },
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavItem href="/" onClick={() => setIsOpen(false)}>
            Home
          </NavItem>
          <NavItem href="/catalog" onClick={() => setIsOpen(false)}>
            Components
          </NavItem>
        </div>
      </motion.div>
    </nav>
  );
}
