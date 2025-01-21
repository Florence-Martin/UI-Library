"use client";

import React from "react";
import CodeBlock from "../../../components/CodeBlock";
import { Alert } from "../../../components/ui/Alert";

export default function AlertPage() {
  return (
    <div className="space-y-6">
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
            type="info"
            onClose={() => console.log("Alert closed")}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Alert } from '@/components/ui/Alert'

export default function MyComponent() {
  return (
    <Alert
      message="This is an alert message"
      type="success"
      onClose={() => console.log('Alert closed')}
    />
  )
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>message</code>: The text content of the alert
          </li>
          <li>
            <code>type</code>: The type of alert (&apos;success&apos; |
            &apos;error&apos; | &apos;info&apos; | &apos;warning&apos;)
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
