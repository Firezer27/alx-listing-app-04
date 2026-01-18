// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-4 text-white">Support</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Community</h4>
          <ul className="space-y-2">
            <li>Diversity & Inclusion</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Hosting</h4>
          <ul className="space-y-2">
            <li>Host your home</li>
            <li>Host resources</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">About</h4>
          <ul className="space-y-2">
            <li>Newsroom</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs">
        © 2026 ALX Listing App
      </div>
    </footer>
  );
};

export default Footer;
