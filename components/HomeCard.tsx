import React from "react";
import { motion, Variants } from "framer-motion";

interface HomeCardProps {
  icon?: React.ReactNode;
  title: string;
  description: React.ReactNode;
  ariaLabel: string;
  variants?: Variants; // Ajout pour prendre les animations en charge
}

const HomeCard: React.FC<HomeCardProps> = ({
  icon,
  title,
  description,
  ariaLabel,
  variants,
}) => {
  return (
    <motion.section
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      aria-labelledby={ariaLabel}
      initial="hidden"
      animate="show"
      variants={variants} // Application des animations
    >
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
        {icon}
        <h2
          id={ariaLabel}
          className="text-xl font-semibold text-gray-800 dark:text-white"
        >
          {title}
        </h2>
      </div>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </div>
    </motion.section>
  );
};

export default HomeCard;
