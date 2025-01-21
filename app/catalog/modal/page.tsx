"use client";

import React, { useState } from "react";
import { Modal } from "../../../components/ui/Modal";
import CodeBlock from "@/components/CodeBlock";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Modal Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="flex items-center justify-center h-32">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Open Modal
          </button>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Example Modal"
          >
            <p>
              This is the content of the modal. You can put any React components
              or HTML here.
            </p>
          </Modal>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal">
        <p>Modal content goes here</p>
      </Modal>
    </>
  )
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>isOpen</code>: Boolean to control the visibility of the modal
          </li>
          <li>
            <code>onClose</code>: Function to call when the modal should be
            closed
          </li>
          <li>
            <code>title</code>: The title to display in the modal header
          </li>
          <li>
            <code>children</code>: The content to display in the modal body
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Smooth open/close animations using Framer Motion</li>
          <li>Closes on escape key press or clicking outside the modal</li>
          <li>Prevents scrolling of the background when open</li>
          <li>Accessible with proper focus management</li>
          <li>Customizable styling using Tailwind CSS</li>
          <li>Dark mode support</li>
        </ul>
      </section>
    </div>
  );
}
