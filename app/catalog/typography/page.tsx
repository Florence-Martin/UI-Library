"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import { Typography } from "../../../components/ui/Typography";
import BackToCatalog from "@/components/BackToCatalog";

const typographyComponentCode = `
"use client";

import React, { useState } from "react";
import {
  Inter,
  Roboto,
  Poppins,
  Playfair_Display,
  Montserrat,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const fonts = [
  { name: "Inter", font: inter },
  { name: "Roboto", font: roboto },
  { name: "Poppins", font: poppins },
  { name: "Playfair Display", font: playfair },
  { name: "Montserrat", font: montserrat },
];

export function Typography() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [sampleText, setSampleText] = useState(
    "Polar bears are on the brink of extinction"
  );

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="font-select"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Select a font:
        </label>
        <select
          id="font-select"
          className="mt-1 block w-full pl-3 dark:bg-gray-800 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedFont.name}
          onChange={(e) =>
            setSelectedFont(
              fonts.find((f) => f.name === e.target.value) || fonts[0]
            )
          }
        >
          {fonts.map((font) => (
            <option key={font.name} value={font.name}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="sample-text"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Sample text:
        </label>
        <input
          type="text"
          id="sample-text"
          className="mt-1 block w-full border dark:bg-gray-800 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
        />
      </div>
      <div className="p-4 border border-gray-300 dark:bg-gray-800 rounded-md">
        <p className={\`text-3xl \${selectedFont.font.className}\`}>
          {sampleText}
        </p>
      </div>
    </div>
  );
}

`;

export default function TypographyPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Typography Demo Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <Typography />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Typography } from '@/components/ui/Typography'

export default function MyComponent() {
  return <Typography />
}`}
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
            <CodeBlock code={typographyComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Interactive font selection from a curated list of modern fonts
          </li>
          <li>Real-time preview of selected font</li>
          <li>Editable sample text for custom previews</li>
          <li>Optimized font loading using next/font</li>
          <li>Responsive design that adapts to different screen sizes</li>
        </ul>
      </section>
    </div>
  );
}
