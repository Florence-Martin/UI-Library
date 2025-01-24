"use client";

import React, { useState } from "react";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const alertComponentCode = `
'use client';

import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  BellOff,
  CheckCircle,
  Info,
  TriangleAlert,
  X,
  XCircle,
} from "lucide-react";

export interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning'| 'closable';
  onClose?: () => void;
}

export function Alert({ message, type = 'info', onClose }: AlertProps) {
  const iconMap = useMemo(() => ({
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <TriangleAlert className="w-5 h-5" />,
    closable: <BellOff className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  }), []);

  const backgroundColorMap = useMemo(() => ({
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    closable: "bg-gray-100 text-gray-800",
    info: "bg-blue-100 text-blue-800",
  }), []);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={\`p-4 rounded-md \${backgroundColorMap[type]} flex items-center\`}
      role="alert"
    >
      <span className="mr-2">{iconMap[type]}</span>
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={handleClose}
          className="ml-auto focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
}
`;

export default function AlertPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Alert Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="space-y-4">
          <Alert message="This is an info alert" type="info" />
          <Alert message="This is a success alert" type="success" />
          <Alert message="This is a warning alert" type="warning" />
          <Alert message="This is an error alert" type="error" />
          <Alert
            message="This is a closable alert"
            type="closable"
            onClose={() => console.log("Alert closed")}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Alert } from '@/components/ui/Alert';

export default function MyComponent() {
  return (
    <Alert
      message="This is an alert message"
      type="success"
      onClose={() => console.log('Alert closed')}
    />
  );
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
            <CodeBlock code={alertComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>message</code>: The text content of the alert
          </li>
          <li>
            <code>type</code>: The type of alert (&apos;success&apos; |
            &apos;error&apos; | &apos;info&apos; | &apos;warning&apos;|
            &apos;closable&apos;)
          </li>
          <li>
            <code>onClose</code>: Optional function to call when the alert is
            closed
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Different styles for various types of alerts</li>
          <li>Optional close button</li>
          <li>Smooth enter/exit animations using Framer Motion</li>
          <li>Accessible with proper ARIA attributes</li>
          <li>Responsive design that adapts to different screen sizes</li>
          <li>Customizable icons based on alert type</li>
        </ul>
      </section>
    </div>
  );
}
