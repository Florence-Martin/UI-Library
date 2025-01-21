"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import CodeBlock from "../../../components/CodeBlock";
import { components } from "@/lib/components";

export default function ComponentDetail() {
  const params = useParams();
  const componentId = params.component as string;
  const component = components.find((c) => c.id === componentId);

  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Titre et description */}
      <h1 className="text-3xl font-bold">{component.name}</h1>
      <p className="text-xl">{component.description}</p>

      {/* Aperçu */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        {/* Add component preview here */}
      </div>

      {/* Bloc de code */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Code</h2>
        <CodeBlock
          code={`// ${component.name} component code here`}
          language="tsx"
        />
      </div>

      {/* Documentation */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <p>Add component documentation here.</p>
      </div>
    </motion.div>
  );
}
