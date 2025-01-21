"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import inProgressImage from "../../../public/in-progress.png";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Animation du texte 404 */}
      <motion.div
        className="text-9xl font-extrabold mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.div>

      {/* Texte explicatif */}
      <motion.p
        className="text-lg text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oops! The page you are looking for is not yet operational.
      </motion.p>

      {/* Image inProgress */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Image
          src={inProgressImage}
          alt="In Progress"
          width={400}
          height={400}
        />
      </motion.div>

      {/* Bouton pour retourner à l'accueil */}

      <Link href="/">
        <Button
          size="lg"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <Home className="mr-4 h-5 w-5" />
          Back to home page
        </Button>
      </Link>
    </div>
  );
}
