"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const modalComponentCode = `
"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Utilisation du hook personnalisé pour fermer la modal avec la touche "Échap"
  useEscapeKey(onClose);

  // Empêche le défilement du corps de la page lorsque la modal est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <ModalHeader title={title} onClose={onClose} />

              {/* Content */}
              <div className="p-4">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Extracted ModalHeader Component
interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => (
  <div className="flex justify-between items-center border-b p-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    <button
      onClick={onClose}
      aria-label="Close"
      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    >
      <X size={24} />
    </button>
  </div>
);
`;

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto mb-20 sm:mb-3 px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Modal Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="flex items-center justify-center h-32">
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
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
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={modalComponentCode} language="tsx" />
          </div>
        )}
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
