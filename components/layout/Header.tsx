import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">MyStay</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-blue-600">
            Rooms
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Mansion
          </Link>
          <Link href="#" className="hover:text-blue-600">
            Countryside
          </Link>
          <Link href="#" className="hover:text-blue-600">
            City
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-1 rounded-lg hidden md:block"
          />
          <button className="px-4 py-1 border rounded-lg hover:bg-blue-600 hover:text-white">
            Sign In
          </button>
          <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
