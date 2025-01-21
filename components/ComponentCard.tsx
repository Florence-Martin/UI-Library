import Link from "next/link";
import { motion } from "framer-motion";
import type { UIComponent } from "@/lib/components";

interface ComponentCardProps {
  component: UIComponent;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/catalog/${component.id}`}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{component.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {component.description}
          </p>
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
            {component.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
