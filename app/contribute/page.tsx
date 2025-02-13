"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileCode,
  Cpu,
  Layout,
  Book,
  CornerDownLeft,
  SquareArrowOutUpLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const steps = [
  {
    icon: FileCode,
    title: "Create the component",
    description: "in /components/ui/",
  },
  {
    icon: Cpu,
    title: "Update the registry",
    description: "in /lib/components.ts",
  },
  {
    icon: Layout,
    title: "Create a demo page",
    description: "in /app/catalog/[component-name]/page.tsx",
  },
  {
    icon: Book,
    title: "Update the documentation",
    description: "if necessary",
  },
];

export default function ContributionGuidePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active l'overlay pendant 2 secondes lorsqu'on atteint la dernière étape
  useEffect(() => {
    if (currentStep === steps.length - 1) {
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 5000);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen mb-28 sm:mb-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center relative">
      {/* Bouton Retour - Toujours visible */}
      <div className="w-full max-w-2xl mt-4 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          aria-label="Go back to the previous page"
        >
          <SquareArrowOutUpLeft className="w-5 h-5 mr-2" />
          Back to Home page
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center z-10">
        How to contribute: Add a new component
      </h1>

      {/* Overlay flouté quand la dernière étape est atteinte */}
      {currentStep === steps.length && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Liste des étapes */}
      <div className="relative flex flex-col items-center gap-6 mb-8 w-full max-w-2xl z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative w-full p-6 border rounded-lg flex flex-col items-start transition-all duration-300 cursor-pointer shadow-md
                ${
                  index === currentStep
                    ? "bg-blue-100 border-blue-500 scale-105 shadow-lg"
                    : "bg-gray-100 border-gray-300 scale-100"
                }
                ${
                  currentStep === steps.length - 1 ? "opacity-50 blur-sm" : ""
                } `}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setCurrentStep(index)}
          >
            {/* Icône et titre */}
            <div className="flex items-center">
              <step.icon className="mr-3 text-blue-500" size={28} />
              <h2 className="font-bold text-lg text-gray-800">{step.title}</h2>
            </div>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-800">{step.description}</p>

            {/* Icône de progression (affichée uniquement sur l'étape active) */}
            {index === currentStep && (
              <CornerDownLeft
                className="absolute -right-2 sm:-right-6 top-1/2 transform -translate-y-1/2 text-blue-500"
                size={36}
                strokeWidth={3}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Image et message final en overlay (au centre de l'écran) */}
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 flex flex-col items-center justify-center z-50"
        >
          <Image
            src="/woman-hat.png"
            alt="Woman tipping her hat"
            width={180}
            height={180}
            className="mb-4 rounded-full"
          />
          <p className="text-lg font-semibold text-gray-800 text-center">
            Thank you for your contribution! 🎉
          </p>
          <p className="text-gray-700 text-center">
            Your help makes this project better.
          </p>
        </motion.div>
      )}

      {/* Bouton pour avancer / Restart */}
      <motion.button
        className="relative z-50 block mx-auto mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (currentStep === steps.length - 1) {
            scrollToTop();
            setTimeout(() => setCurrentStep(0), 500);
          } else {
            setCurrentStep((prev) => prev + 1);
          }
        }}
      >
        {currentStep === steps.length - 1 ? "Restart" : "Next step"}
      </motion.button>
    </div>
  );
}
