"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AnimatePresence } from "framer-motion";
import CodeBlock from "@/components/CodeBlock";
import { Toast, ToastProps } from "@/components/ui/Toast";

export default function ToastPage() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (type: ToastProps["type"]) => {
    const id = Date.now(); // Identifiant unique
    const newToast: ToastProps = {
      id,
      message: `This is a ${type} toast message`,
      type,
      duration: 3000,
      onClose: () =>
        setToasts((currentToasts) =>
          currentToasts.filter((toast) => toast.id !== id)
        ),
    };
    setToasts((currentToasts) => [...currentToasts, newToast]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Toast Component</h1>

      {/* Section de démonstration */}
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
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </section>

      {/* Section de code */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Toast } from '@/components/ui/Toast'

export default function MyComponent() {
  return (
    <Toast
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

      {/* Section des props */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>message</code>: The text content of the toast
          </li>
          <li>
            <code>type</code>: The type of toast (&apos;success&apos; |
            &apos;error&apos; | &apos;info&apos; | &apos;warning&apos;)
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
    </div>
  );
}
