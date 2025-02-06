"use client";

import React, { useState } from "react";

import BackToCatalog from "@/components/BackToCatalog";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/Button";
import { componentsCard } from "@/lib/componentsCard";
import { useReplayAnimation } from "@/hooks/useReplayAnimation";
import { Eye, EyeOff, Repeat1 } from "lucide-react";

const CardPage = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const { keys, replay } = useReplayAnimation();

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Card Components</h1>

      {/* Preview Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {componentsCard.map((comp) => (
            <div
              key={comp.name}
              className="flex flex-col items-center space-y-2"
            >
              {/* Relancer l'animation en changeant la clé */}
              <div key={keys[comp.name] || 0}>
                {React.createElement(comp.component)}
              </div>
              <div className="flex flex-col md:flex-row flex-grow space-y-2 md:space-y-0 md:space-x-2">
                <Button
                  onClick={
                    () =>
                      selectedComponent === comp.name
                        ? setSelectedComponent(null) // Désélectionne si déjà sélectionné
                        : setSelectedComponent(comp.name) // Sélectionne si non sélectionné
                  }
                  startIcon={
                    selectedComponent === comp.name ? (
                      <EyeOff name="eye-off" />
                    ) : (
                      <Eye name="eye" />
                    )
                  }
                >
                  {selectedComponent === comp.name ? "Hide Code" : "Show Code"}
                </Button>
                {/* Afficher le bouton Replay seulement si hasAnimation est vrai */}
                {comp.hasAnimation && (
                  <Button onClick={() => replay(comp.name)}>
                    <Repeat1 name="repeat-1" className="mr-2" />
                    Replay Animation
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Details Section */}
      {selectedComponent && (
        <section className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedComponent} Code
          </h2>

          {/* Usage */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Usage</h3>
            <CodeBlock
              code={
                componentsCard.find((comp) => comp.name === selectedComponent)
                  ?.usage || "Usage not found."
              }
              language="tsx"
            />
          </div>

          {/* Component Code */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Component Code</h3>
            <CodeBlock
              code={
                componentsCard.find((comp) => comp.name === selectedComponent)
                  ?.code || "Code not found."
              }
              language="tsx"
            />
          </div>

          <Button onClick={() => setSelectedComponent(null)} className="mt-4">
            <EyeOff name="eye-off" className="mr-2" />
            Hide
          </Button>
        </section>
      )}

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Responsive design with mobile menu</li>
          <li>Hover effect with animation</li>
        </ul>
      </section>

      {/* Customization Section */}
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
