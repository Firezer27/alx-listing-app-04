// components/layout/Header.tsx
import React from "react";

const categories = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Beachfront",
  "Luxury",
  "Cabins",
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Top Row */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">alx</div>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search destinations"
            className="outline-none text-sm w-64"
          />
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4 text-sm">
          <button className="hover:underline">Sign in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Sign up
          </button>
        </div>
      </div>

      {/* Category Nav */}
      <div className="flex gap-6 px-6 py-3 overflow-x-auto text-sm max-w-7xl mx-auto">
        {categories.map((cat) => (
          <span
            key={cat}
            className="cursor-pointer whitespace-nowrap text-gray-600 hover:text-black"
          >
            {cat}
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
