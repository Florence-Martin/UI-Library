"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Book, PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-6">
          Welcome to UI Component Library
        </h1>
        <p className="text-xl mb-8">
          Discover a collection of modern, responsive, and customizable UI
          components built with Next.js, TypeScript, and TailwindCSS.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/catalog" aria-label="Explore Components">
            <Button>
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link
            href="/technical-documentation"
            aria-label="Technical Documentation"
          >
            <Button variant="outline">
              🇫🇷 Documentation globale
              <Book className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link
            href="/accessibility-documentation"
            aria-label="Accessibility Documentation"
          >
            <Button variant="outline">
              🇫🇷 Documentation &quot;accessibility&quot;
              <Book className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          How to Use Our Components
        </h2>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-medium mb-4">1. Browse the Catalog</h3>
            <p className="mb-4">
              Start by exploring our{" "}
              <Link href="/catalog" className="text-blue-500 hover:underline">
                component catalog
              </Link>
              . Here, you&#39;ll find an overview of all available components,
              each with a brief description and preview.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">2. Component Details</h3>
            <p className="mb-4">
              Click on a component to view its dedicated page. Each component
              page includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A live preview of the component</li>
              <li>Usage examples with code snippets</li>
              <li>Available props and their descriptions</li>
              <li>Key features and accessibility information</li>
              <li>The full source code of the component</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">3. Copy and Customize</h3>
            <p className="mb-4">To use a component in your project:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Copy the component&apos;s source code from the &quot;Component
                Code&quot; section
              </li>
              <li>
                Paste it into your project, adjusting the import paths as needed
              </li>
              <li>
                Customize the component&apos;s props and styling to fit your
                needs
              </li>
              <li>Refactore</li>
            </ol>
            <p className="mt-4">
              ‼️ Refactoring your codebase regularly is essential to maintaining
              a scalable, maintainable and modular architecture. This practice
              enables you to manage technical debt, continuously adapt your UI
              library to the evolving requirements of the project and guarantee
              a robust experience over the long term.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">
              4. Explore Advanced Features
            </h3>
            <p className="mb-4">
              Many of our components come with additional features:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dark mode support</li>
              <li>Responsive design</li>
              <li>Accessibility enhancements</li>
              <li>Animation capabilities with Framer Motion</li>
            </ul>
            <p className="mt-4">
              Check each component&apos;s documentation for specific details on
              these features.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">
              5. Add Your Own Components
            </h3>
            <p className="mb-4">
              We encourage contributions! To add your own component to the
              library:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Fork the repository on GitHub</li>
              <li>Create a new branch for your component</li>
              <li>
                Add your component file in the appropriate directory (e.g.,{" "}
                <code>components/ui/YourComponent.tsx</code>)
              </li>
              <li>
                Create a new page for your component in the catalog (e.g.,{" "}
                <code>app/catalog/your-component/page.tsx</code>)
              </li>
              <li>
                Update the <code>components.ts</code> file to include your new
                component
              </li>
              <li>
                Submit a pull request with a clear description of your component
              </li>
            </ol>
            <p className="mt-4">
              Ensure your component follows our coding standards, includes
              proper documentation, and is accessible.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl mb-6">Ready to get started?</p>
          <div className="flex justify-center space-x-4">
            <Link href="/catalog">
              <Button size="lg">
                Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/catalog/notFound">
              <Button size="lg" variant="outline">
                Contribute
                <PlusCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
