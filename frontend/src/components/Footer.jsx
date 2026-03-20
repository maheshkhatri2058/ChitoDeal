import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">ChitoDeal</h2>
          <p className="text-sm text-gray-200 mt-2">
            Nepal’s trusted marketplace to buy & sell anything quickly.
          </p>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-100">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-blue-600">Mobiles</a></li>
            <li><a href="#" className="hover:text-blue-600">Vehicles</a></li>
            <li><a href="#" className="hover:text-blue-600">Property</a></li>
            <li><a href="#" className="hover:text-blue-600">Electronics</a></li>
            <li><a href="#" className="hover:text-blue-600">Jobs</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-100">About</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="hidden md:block">
          <h3 className="font-semibold mb-3 text-gray-200">Help</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600">Safety Tips</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Apps + Social */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-100">Get the App</h3>
          
          {/* App buttons */}
          <div className="space-y-2">
            <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md text-sm w-full">
              <FaGooglePlay /> Google Play
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md text-sm w-full">
              <FaApple /> App Store
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-3 mt-4 text-gray-200">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-gray-200">
        © 2026 ChitoDeal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
