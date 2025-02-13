"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Layers,
  PackagePlus,
  PlusCircle,
  Sparkles,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HomeCard from "@/components/HomeCard";

// Animation Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Sections transformées en objets
const homeSections = [
  {
    id: 1,
    title: "1. Browse the Catalog",
    description: (
      <>
        <p className="mb-4">
          Start by exploring our{" "}
          <Link href="/catalog" className="text-blue-500 hover:underline">
            component catalog
          </Link>
          . Here, you&#39;ll find an overview of all available components, each
          with a brief description and preview.
        </p>
      </>
    ),
    icon: <Layers size={28} className="text-blue-500" />,
    ariaLabel: "browse-catalog",
  },
  {
    id: 2,
    title: "2. Component Details",
    description: (
      <>
        <p className="mb-4">
          Click on a component to view its dedicated page. Each component page
          includes:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A live preview of the component</li>
          <li>Usage examples with code snippets</li>
          <li>Available props and their descriptions</li>
          <li>Key features and accessibility information</li>
          <li>The full source code of the component</li>
        </ul>
      </>
    ),
    icon: <BookOpen size={28} className="text-green-500" />,
    ariaLabel: "component-details",
  },
  {
    id: 3,
    title: "3. Copy and Customize",
    description: (
      <>
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
            Customize the component&apos;s props and styling to fit your needs
          </li>
          <li>Refactor</li>
        </ol>
        <p className="mt-4">
          ‼️ Refactoring your codebase regularly is essential to maintaining a
          scalable, maintainable, and modular architecture. This practice
          enables you to manage technical debt, continuously adapt your UI
          library to the evolving requirements of the project, and guarantee a
          robust experience over the long term.
        </p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5 }}
          className="border-l-4 border-blue-600 pl-4"
        >
          <h4 className="text-xl font-medium mt-6 mb-4">
            Why Refactor Your Code?
          </h4>
          <p className="mb-4">
            Refactoring improves code readability, reduces complexity, and
            enhances performance. It helps identify and eliminate redundant or
            outdated patterns, ensures consistency across the codebase, and
            makes your application easier to scale and maintain. Additionally,
            separating the view (UI) from the functionality (logic) improves
            reusability and simplifies future updates.
          </p>
          <h4 className="text-xl font-medium mt-6 mb-4">How to Refactor?</h4>
          <p className="mb-1">Follow these steps for effective refactoring:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Identify the sections of code that are redundant, inefficient, or
              difficult to understand.
            </li>
            <li>
              Separate the view (UI) from the functionality (logic) by:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Using hooks or utility functions to handle logic.</li>
                <li>
                  Keeping components focused on rendering and passing logic as
                  props when necessary.
                </li>
                <li>
                  Moving state management to a dedicated context or store if
                  shared across components.
                </li>
              </ul>
            </li>
            <li>
              Break down large functions or components into smaller, reusable
              pieces.
            </li>
            <li>
              Replace hard-coded values with variables or configuration files
              where applicable.
            </li>
            <li>Remove unused imports and dependencies.</li>
            <li>
              Test the refactored code thoroughly to ensure functionality
              remains intact.
            </li>
            <li>
              Document changes to help team members understand improvements and
              reasoning.
            </li>
          </ol>
        </motion.div>
      </>
    ),
    icon: <ClipboardList size={28} className="text-yellow-500" />,
    ariaLabel: "copy-customize",
  },
  {
    id: 4,
    title: "4. Explore Advanced Features",
    description: (
      <>
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
      </>
    ),
    icon: <Sparkles size={28} className="text-purple-500" />,
    ariaLabel: "advanced-features",
  },
  {
    id: 5,
    title: "5. Add Your Own Components",
    description: (
      <>
        <p className="mb-4">
          We encourage contributions! To add your own component to the library:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Fork the repository on GitHub</li>
          <li>Create a new branch for your component</li>
          <li>
            Add your component file in the appropriate directory (e.g.,{" "}
            <code className="break-words break-all text-sm p-1 bg-gray-200 dark:bg-gray-700 rounded">
              components/ui/YourComponent.tsx
            </code>
            )
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
          Ensure your component follows our coding standards, includes proper
          documentation, and is accessible.
        </p>
      </>
    ),
    icon: <PackagePlus size={28} className="text-red-500" />,
    ariaLabel: "add-components",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      {/* Ajout d'un max-w-lg pour éviter que le titre prenne toute la largeur */}
      <div className="max-w-3xl mx-auto mb-16 sm:mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          How to Use Our Components
        </h2>
      </div>

      {/* Sections responsives */}
      <div className="grid grid-cols-1 gap-y-10 sm:gap-x-6 max-w-5xl mx-auto">
        {homeSections.map((section) => (
          <HomeCard
            key={section.id}
            icon={section.icon}
            title={section.title}
            description={section.description}
            ariaLabel={section.ariaLabel}
            variants={cardVariants}
          />
        ))}
      </div>

      {/* Section finale */}
      <div className="mt-12 text-center mb-12 sm:mb-6">
        <p className="text-xl mb-6">Ready to get started?</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/catalog">
            <Button size="lg" className="w-full sm:w-auto">
              Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contribute">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contribute
              <PlusCircle className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
