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
    >
      <h1 className="text-3xl font-bold mb-6">{component.name}</h1>
      <p className="text-xl mb-8">{component.description}</p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        {/* Add component preview here */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Code</h2>
        <CodeBlock
          code={`// ${component.name} component code here`}
          language="tsx"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <p>Add component documentation here.</p>
      </div>
    </motion.div>
  );
}
