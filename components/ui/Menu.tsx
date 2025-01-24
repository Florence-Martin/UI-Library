"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useClickOutside } from "../../hooks/useClickOutside";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuProps {
  label: string;
  items: MenuItem[];
}

export function Menu({ label, items }: MenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className={clsx(
          "inline-flex justify-center w-full rounded-md border px-4 py-2 text-sm font-medium",
          "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:outline-none",
          "focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        )}
        onClick={toggleMenu}
      >
        {label}
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white",
              "ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
            )}
          >
            <div className="py-1">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={clsx(
                    "block px-4 py-2 text-sm text-gray-700",
                    "hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
