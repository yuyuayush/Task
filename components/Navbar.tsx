import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Brand</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/job" className="text-white hover:text-gray-200">Job</a>
          <a href="/profile" className="text-white hover:text-gray-200">Profile</a>
          <a href="/work" className="text-white hover:text-gray-200">Work</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
