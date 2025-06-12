
import React, { useState } from 'react';
import bird from '../assets/bird.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between fixed top-0 z-50 w-full bg-black rounded-full px-4 py-3">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <img className="h-16 w-auto" src={bird} alt="Bird Logo" />
        <p className="text-2xl font-semibold text-white">Sample Website</p>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul className={`md:flex gap-8 text-white mr-5 ${isOpen ? 'block' : 'hidden'} absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent px-5 py-4 md:p-0 rounded-b-xl`}>
        <li className="hover:text-gray-600 transition-colors duration-200">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-gray-600 transition-colors duration-200">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-600 transition-colors duration-200">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-gray-600 transition-colors duration-200">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

