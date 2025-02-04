import Link from "next/link";
import { motion } from "framer-motion";
import type { UIComponent } from "../type/type";

interface ComponentCardProps {
  component: UIComponent;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/catalog/${component.id}`}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{component.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {component.description}
          </p>
        </div>
        {/* Catégorie positionnée en bas à droite */}
        <span className="absolute bottom-4 right-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm shadow-sm">
          {component.category}
        </span>
      </Link>
    </motion.div>
  );
}
