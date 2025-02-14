"use client";

import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse bg-gray-300 dark:bg-zinc-700 h-12 w-48 rounded-md"></div>
  );
};
export default SkeletonLoader;
