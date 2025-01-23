import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface CategoryTagsProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryTags({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "rounded-full",
          selectedCategory === null &&
            "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        onClick={() => onSelectCategory(null)}
      >
        #Tous
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full",
            selectedCategory === category &&
              "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onClick={() => onSelectCategory(category)}
        >
          #{category}
        </Button>
      ))}
    </div>
  );
}
