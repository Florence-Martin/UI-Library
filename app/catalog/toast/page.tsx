"use client";

import React, { useState } from "react";
import { Toast, type ToastProps } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

// Simulons la récupération du code source du composant
const toastComponentCode = `
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface ToastProps {
  id: number;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose?: () => void;
}

export function Toast({
  id,
  message,
  type = "info",
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getBackgroundColor = () => {
    const colors = {
      success: "bg-green-500",
      error: "bg-red-500",
      warning: "bg-yellow-500",
      info: "bg-blue-500",
    };
    return colors[type] || "bg-blue-500";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={\`fixed bottom-4 right-4 p-4 rounded-md text-white shadow-lg flex items-center \${getBackgroundColor()}\z-50\`} 
          role="alert"
        >
          <span className="mr-2">{message}</span>
          <button
            onClick={() => {
              setIsVisible(false);
              if (onClose) onClose();
            }}
            className="ml-auto focus:outline-none hover:text-gray-300 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
`;

export default function ToastPage() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [showComponentCode, setShowComponentCode] = useState(false);

  const addToast = (type: ToastProps["type"]) => {
    const id = Date.now(); // Génération d'un ID unique
    const newToast: ToastProps = {
      id,
      message: `This is a ${type} toast message`,
      type,
      duration: 3000,
      onClose: () =>
        setToasts((currentToasts) => currentToasts.filter((t) => t.id !== id)),
    };
    setToasts((currentToasts) => [...currentToasts, newToast]);
  };

  return (
    <div className="space-y-6">
      <BackToCatalog />

      <h1 className="text-3xl font-bold">Toast Component</h1>

      {/* Section Preview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="flex space-x-2">
          <Button onClick={() => addToast("info")}>Show Info Toast</Button>
          <Button onClick={() => addToast("success")}>
            Show Success Toast
          </Button>
          <Button onClick={() => addToast("warning")}>
            Show Warning Toast
          </Button>
          <Button onClick={() => addToast("error")}>Show Error Toast</Button>
        </div>
        <div>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>
      </section>

      {/* Section Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Toast } from '@/components/ui/Toast'

export default function MyComponent() {
  return (
    <Toast
      id={1}
      message="This is a toast message"
      type="success"
      duration={3000}
      onClose={() => console.log('Toast closed')}
    />
  )
}`}
          language="tsx"
        />
      </section>

      {/* Section Component Code */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={toastComponentCode} language="tsx" />
          </div>
        )}
      </section>

      {/* Section Props */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>id</code>: Unique identifier for the toast (number)
          </li>
          <li>
            <code>message</code>: The text content of the toast
          </li>
          <li>
            <code>type</code>: The type of toast (&quot;success&quot; |
            &lsquo;error&lsquo; | &quot;info&quot; | &quot;warning&quot;)
          </li>
          <li>
            <code>duration</code>: How long the toast should be displayed (in
            milliseconds)
          </li>
          <li>
            <code>onClose</code>: Function to call when the toast is closed
          </li>
        </ul>
      </section>

      {/* Section Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Customizable appearance based on the type of message</li>
          <li>Auto-dismissal after a specified duration</li>
          <li>Smooth enter/exit animations using Framer Motion</li>
          <li>Accessible with proper ARIA attributes</li>
          <li>Responsive design that works on all screen sizes</li>
        </ul>
      </section>
    </div>
  );
}
