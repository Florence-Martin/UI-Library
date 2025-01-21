"use client";

import React from "react";
import { motion } from "framer-motion";

export function Animations() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Fade In</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-16 h-16 bg-blue-500 rounded"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Scale</h3>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-16 h-16 bg-green-500 rounded"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Rotate</h3>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="w-16 h-16 bg-yellow-500 rounded"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Hover Effect</h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-red-500 rounded cursor-pointer"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Keyframes</h3>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-16 h-16 bg-purple-500"
        />
      </div>
    </div>
  );
}
