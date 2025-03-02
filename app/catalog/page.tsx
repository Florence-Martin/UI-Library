"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { components } from "@/lib/components";
import ComponentCard from "@/components/ComponentCard";
import { CategoryTags } from "@/components/ui/CategoryTags";
import { Button } from "@/components/ui/Button";
import { ProjectSearchBar } from "@/components/ProjectSearchBar";

const categories = [
  "Animation",
  "Design",
  "Feedback",
  "Filter",
  "Form",
  "Hero",
  "Layout",
  "Navigation",
  "Overlay",
  "Progress",
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredComponents = components.filter(
    (component) =>
      (component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedCategory || component.category === selectedCategory)
  );

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  return (
    <div className="container mx-auto mb-20 sm:mb-8  px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">UI Component Catalog</h1>

      <div className="flex items-center gap-4 mb-4 w-full">
        <ProjectSearchBar value={searchTerm} onChange={setSearchTerm} />
        <Button onClick={resetFilters} variant="outline">
          Reset
        </Button>
      </div>

      <CategoryTags
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

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
