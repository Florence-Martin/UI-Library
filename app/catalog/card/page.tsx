"use client";

import React, { useState } from "react";

import BackToCatalog from "@/components/BackToCatalog";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CardSkeleton from "@/components/ui/CardSkeleton";

const buttonComponentCode = `"use client";

import React from "react";

const Card: React.FC = () => {
  return (
    <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700">
      <div className="w-56 h-72 bg-lime-400 text-gray-800">
        <div className="flex flex-row justify-between">
          {/* Add any additional content here */}
        </div>
      </div>
      <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-lime-400 font-bold text-xs">TAILWIND</span>
        <span className="text-gray-800 font-bold text-3xl mb-3">
          Cheat Sheet
        </span>
        <p className="text-neutral-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Card;
`;

const CardPage = () => {
  const [showComponentCode, setShowComponentCode] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Card Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>

        <div>
          <div className="flex items-center justify-center space-x-4">
            <Card />
            <CardSkeleton />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import React from "react";
import Card from "@/components/ui/Card";

export default function MyComponent()
  return (
    <div className="flex justify-center items-center h-screen">
      <Card />
    </div>
  );
};`}
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
            <CodeBlock code={buttonComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responsive design with mobile menu</li>
          <li>Hover effect with animation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          You can customize the Card component by changing the colors, text, and
          content to match your design system.
        </p>
      </section>
    </div>
  );
};

export default CardPage;
