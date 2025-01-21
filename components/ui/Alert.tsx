"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose?: () => void;
}

export function Alert({ message, type = "info", onClose }: AlertProps) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5" />;
      case "error":
        return <XCircle className="w-5 h-5" />;
      case "warning":
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`p-4 rounded-md ${getBackgroundColor()} flex items-center`}
      role="alert"
    >
      <span className="mr-2">{getIcon()}</span>
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto focus:outline-none"
          aria-label="Close"
        >
          <XCircle className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
}
