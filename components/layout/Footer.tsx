import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-4">
        <div>
          <h2 className="font-semibold text-lg mb-2">MyStay</h2>
          <p>Your trusted platform for luxury property bookings.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Follow Us</h2>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-8 text-gray-400">
        © 2025 MyStay. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
