"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToCatalog() {
  return (
    <div className="flex items-center mb-6">
      <Link
        href="/catalog"
        className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Catalog
      </Link>
    </div>
  );
}
