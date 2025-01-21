"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { components } from "@/lib/components";
import SearchBar from "@/components/SearchBar";
import ComponentCard from "@/components/ComponentCard";

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredComponents = components.filter(
    (component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">UI Component Catalog</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredComponents.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </motion.div>
    </div>
  );
}
