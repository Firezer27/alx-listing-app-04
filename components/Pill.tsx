import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border rounded-full text-sm cursor-pointer transition-all duration-200
${active ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-100"}`}
    >
      {label}
    </button>
  );
};

export default Pill;
