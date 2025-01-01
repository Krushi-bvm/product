import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: App Name */}
          <div className="text-xl font-semibold cursor-pointer">
            App Name
          </div>

          {/* Right Side: Login & Sign Up Buttons */}
          <div className="flex space-x-4">
            <button className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 transition">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
