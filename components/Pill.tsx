// components/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, active = false }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border
        ${
          active
            ? "bg-black text-white border-black"
            : "bg-white text-gray-700 border-gray-300 hover:border-black"
        }`}
    >
      {label}
    </button>
  );
};

export default Pill;
