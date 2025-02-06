"use client";

import React from "react";

const SlideCard: React.FC = () => {
  return (
    <div className="relative group cursor-pointer group overflow-hidden text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700">
      <div className="w-56 h-72 bg-lime-400 text-gray-800">
        <div className="flex flex-row justify-between">
          {/* Add any additional content here */}
        </div>
      </div>
      <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-lime-400 font-bold text-xs">TAILWIND</span>
        <span className="text-gray-800 font-bold text-3xl mb-3">
          Cheat Sheet
        </span>
        <p className="text-neutral-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default SlideCard;
