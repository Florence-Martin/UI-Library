"use client";

import React, { useState } from "react";
import { SearchBar } from "../../../components/ui/SearchBar";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const searchBarComponentCode = `
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <div className="relative flex items-center flex-grow">
      {/* Champ de recherche */}
      <Input
        type="search"
        placeholder={placeholder || "Search for UI components..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-20" // Ajustement pour laisser de la place au bouton
        aria-label="Search-input"
      />

      {/* Icône de recherche à gauche */}
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
        aria-hidden="true"
      />

      {/* Bouton reset à droite */}
      {value && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onChange("")} // Réinitialise la valeur
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          aria-label="Clear search input"
        >
          Reset
        </Button>
      )}
    </div>
  );
}
`;

export default function SearchBarPage() {
  const [searchValue, setSearchValue] = useState("");
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />

      <h1 className="text-3xl font-bold">SearchBar Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="w-full max-w-md">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search for UI components..."
          />
        </div>
        <p className="mt-4">Current search value: {searchValue}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { SearchBar } from '@/components/ui/SearchBar'
import { useState } from 'react'

export default function MyComponent() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <SearchBar 
      value={searchValue} 
      onChange={setSearchValue} 
      placeholder="Search for items..." 
    />
  )
}

// The SearchBar includes:
// - A search input field with a placeholder
// - A Reset button that clears the search value when clicked
`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={searchBarComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>value</code> (string): The current value of the search input.
          </li>
          <li>
            <code>onChange</code> (function): A callback function that is called
            with the new value when the input changes.
          </li>
          <li>
            <code>placeholder</code> (string, optional): The placeholder text
            for the input. Defaults to &quot;Search...&quot;.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Integrated search icon for clear visual indication</li>
          <li>Customizable placeholder text</li>
          <li>Controlled input for easy state management</li>
          <li>Responsive design that adapts to container width</li>
          <li>Dark mode support</li>
          <li>Accessibility-friendly with proper ARIA attributes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <p>The SearchBar component is designed with accessibility in mind:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Uses semantic HTML with the <code>type=&quot;search&quot;</code>{" "}
            attribute for better screen reader support
          </li>
          <li>
            Includes an <code>aria-label</code> that matches the placeholder
            text for clear context
          </li>
          <li>
            The search icon is marked as{" "}
            <code>aria-hidden=&quot;true&quot;</code> to prevent redundant
            information for screen readers
          </li>
          <li>
            Inherits focus styles from the Input component for clear visual
            indication when focused
          </li>
        </ul>
        <p className="mt-4">
          To further improve accessibility in your implementation, consider:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Adding a visible label if the SearchBar&apos;s purpose isn&apos;t
            clear from context
          </li>
          <li>
            Ensuring that search results are announced to screen readers,
            possibly using ARIA live regions
          </li>
        </ul>
      </section>
    </div>
  );
}
