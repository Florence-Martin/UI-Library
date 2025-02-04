import React from "react";

const CardSkeleton: React.FC = () => {
  return (
    <div className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl bg-gray-200 animate-pulse">
      <div className="w-56 h-72 bg-gray-300">
        <div className="flex flex-row justify-between">
          {/* Add any additional content here */}
        </div>
      </div>
      <div className="absolute bg-gray-300 -bottom-24 w-56 p-3 flex flex-col gap-1">
        <span className="text-gray-400 font-bold text-xs">TAILWIND</span>
        <span className="text-gray-400 font-bold text-3xl mb-3">
          Cheat Sheet
        </span>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default CardSkeleton;
