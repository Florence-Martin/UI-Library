"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const buttonComponentCode = `
"use client";

import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx"; // Pour fusionner les classes conditionnellement

// Définition des variantes de styles
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
        link: "bg-transparent underline hover:underline text-slate-900 dark:text-slate-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// TypeScript : définition des props
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean; // Indique si le bouton est en chargement
}

// Composant Button avec forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonVariants({ variant, size }), className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full"></span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

`;

export default function ButtonPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Button Component</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Sizes</h3>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small Button</Button>
              <Button>Default Size</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Loading State</h3>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Default Loading</Button>
              <Button variant="destructive" isLoading>
                Destructive Loading
              </Button>
              <Button variant="outline" isLoading>
                Outline Loading
              </Button>
              <Button variant="subtle" isLoading>
                Subtle Loading
              </Button>
              <Button variant="ghost" isLoading>
                Ghost Loading
              </Button>
              <Button variant="link" isLoading>
                Link Loading
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { Button } from '@/components/ui/Button'

export default function MyComponent() {
  return (
    <div className="space-y-4">
      <Button variant="default" size="default">Default Button</Button>
      <Button variant="destructive" size="lg" isLoading>
        Loading Button
      </Button>
      <Button variant="link" size="sm">Small Link</Button>
    </div>
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
            <CodeBlock code={buttonComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>variant</code>: Specifies the style of the button. Possible
            values:
            <ul className="list-disc pl-6">
              <li>
                <code>&apos;default&apos;</code>: Default style
              </li>
              <li>
                <code>&apos;destructive&apos;</code>: Red, for destructive
                actions
              </li>
              <li>
                <code>&apos;outline&apos;</code>: Transparent with a border
              </li>
              <li>
                <code>&apos;subtle&apos;</code>: Minimal background
              </li>
              <li>
                <code>&apos;ghost&apos;</code>: Fully transparent
              </li>
              <li>
                <code>&apos;link&apos;</code>: Text with an underline
              </li>
            </ul>
          </li>
          <li>
            <code>size</code>: Controls the size of the button. Possible values:
            <ul className="list-disc pl-6">
              <li>
                <code>&apos;default&apos;</code>: Standard size
              </li>
              <li>
                <code>&apos;sm&apos;</code>: Small size
              </li>
              <li>
                <code>&apos;lg&apos;</code>: Large size
              </li>
            </ul>
          </li>
          <li>
            <code>isLoading</code>: A boolean to show a loading spinner
            (default: <code>false</code>).
          </li>
          <li>
            Supports all standard HTML button props, such as{" "}
            <code>onClick</code>, <code>disabled</code>, etc.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
        <p>This button component is designed with accessibility in mind:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fully supports keyboard navigation.</li>
          <li>
            Includes appropriate ARIA attributes for assistive technologies.
          </li>
          <li>Provides visual feedback for focus, hover, and active states.</li>
          <li>
            Disables interactions and updates styles when <code>disabled</code>{" "}
            or <code>isLoading</code>.
          </li>
        </ul>
      </section>
    </div>
  );
}
