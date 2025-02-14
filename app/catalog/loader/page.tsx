"use client";

import React, { useEffect, useRef, useState } from "react";

import BackToCatalog from "@/components/BackToCatalog";
import CircleLoader from "@/components/ui/CircleLoader";
import CirclesLoader from "@/components/ui/CirclesLoader";
import AlternativeCircleLoader from "@/components/ui/AlternativeCircleLoader";
import { useReplayAnimation } from "@/hooks/useReplayAnimation";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff, Repeat1 } from "lucide-react";
import useSWR, { mutate } from "swr";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import CodeBlock from "@/components/CodeBlock";

// Associer les noms des composants aux vrais composants React
const componentMap: { [key: string]: React.FC } = {
  CircleLoader,
  CirclesLoader,
  AlternativeCircleLoader,
};

// Récupération des composants via Firebase API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function LoaderPage() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  const { keys, replay } = useReplayAnimation();
  const topRef = useRef<HTMLDivElement | null>(null); // Ref pour remonter la page
  const codeRef = useRef<HTMLDivElement | null>(null); // Ref pour la section du code

  // Récupération des composants depuis Firebase
  const { data: components, error } = useSWR("/api/componentsLoader", fetcher);

  console.log("Components from Firebase:", components);

  // Effet pour scroller vers le code après l'affichage
  useEffect(() => {
    if (selectedComponent && codeRef.current) {
      codeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (!selectedComponent && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedComponent]);

  if (error)
    return (
      <div className="text-red-500 text-center p-4">
        <p className="text-red-500">
          {" "}
          🚨 Failed to load components: {error.message}
        </p>
        <button
          onClick={() => mutate("/api/componentsLoader")} // Recharge SWR
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
        >
          Try again 🔄
        </button>
      </div>
    );
  if (!components) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonLoader key={i} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={topRef}
      className="container mx-auto mb-20 sm:mb-3 px-4 py-8 space-y-6"
    >
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Loader Component</h1>

      {/* Preview Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {components.map(
            (comp: {
              name: string;
              component: string;
              hasAnimation: boolean;
              usage?: string;
              code?: string;
            }) => (
              <div
                key={comp.name}
                className="flex flex-col items-center space-y-2"
              >
                {/* Relancer l'animation avec une clé dynamique */}
                <div key={keys[comp.name] || 0}>
                  {componentMap[comp.component] ? (
                    React.createElement(componentMap[comp.component])
                  ) : (
                    <p className="text-red-500">
                      Invalid component: {comp.component}
                    </p>
                  )}
                </div>
                <div className="flex flex-col md:flex-row flex-grow space-y-2 md:space-y-0 md:space-x-2">
                  <Button
                    onClick={() => {
                      if (selectedComponent === comp.name) {
                        setSelectedComponent(null);
                      } else {
                        setSelectedComponent(comp.name);
                      }
                    }}
                    startIcon={
                      selectedComponent === comp.name ? (
                        <EyeOff name="eye-off" />
                      ) : (
                        <Eye name="eye" />
                      )
                    }
                  >
                    {selectedComponent === comp.name
                      ? "Hide Code"
                      : "Show Code"}
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
            )
          )}
        </div>
      </section>

      {/* Details Section */}
      {selectedComponent && (
        <section ref={codeRef} className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedComponent} Code
          </h2>

          {/* Usage */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Usage</h3>
            <CodeBlock
              code={
                components.find(
                  (comp: {
                    name: string;
                    component: string;
                    hasAnimation: boolean;
                    usage?: string;
                    code?: string;
                  }) => comp.name === selectedComponent
                )?.usage || "Usage not found."
              }
              language="tsx"
            />
          </div>

          {/* Component Code */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Component Code</h3>
            <CodeBlock
              code={
                components.find(
                  (comp: {
                    name: string;
                    component: string;
                    hasAnimation: boolean;
                    usage?: string;
                    code?: string;
                  }) => comp.name === selectedComponent
                )?.code || "Code not found."
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
        </ul>
      </section>

      {/* Customization Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>You can customize the Loader component by changing the colors.</p>
      </section>
    </div>
  );
}
