"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react"; // Adjust based on your icon imports

interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  if (tabs.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 font-medium text-sm focus:outline-none transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.icon && <tab.icon className="h-4 w-4" />}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === tab.id ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
