"use client";

import React, { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  BellOff,
  CheckCircle,
  Info,
  TriangleAlert,
  X,
  XCircle,
} from "lucide-react";

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "info" | "warning" | "closable";
  onClose?: () => void;
}

export function Alert({ message, type = "info", onClose }: AlertProps) {
  const iconMap = useMemo(
    () => ({
      success: <CheckCircle className="w-5 h-5" />,
      error: <XCircle className="w-5 h-5" />,
      warning: <TriangleAlert className="w-5 h-5" />,
      closable: <BellOff className="w-5 h-5" />,
      info: <Info className="w-5 h-5" />,
    }),
    []
  );

  const backgroundColorMap = useMemo(
    () => ({
      success: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800",
      warning: "bg-yellow-100 text-yellow-800",
      closable: "bg-gray-100 text-gray-800",
      info: "bg-blue-100 text-blue-800",
    }),
    []
  );

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`p-4 rounded-md ${backgroundColorMap[type]} flex items-center`}
      role="alert"
    >
      <span className="mr-2">{iconMap[type]}</span>
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={handleClose}
          className="ml-auto focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </motion.div>
  );
}
