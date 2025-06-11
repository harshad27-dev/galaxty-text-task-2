import React from 'react';
import bird from '../assets/bird.png';

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 m-3 sticky">
        <div className="flex items-center gap-4">
          <img className="h-20 w-auto" src={bird} alt="Bird Logo" />
          <p className="text-3xl font-semibold text-white">Sample Website</p>
        </div>
        <ul className="flex gap-8 text-white">
          <li className="hover:text-gray-600 transition-colors duration-200"><a href="#home">Home</a></li>
          <li className="hover:text-gray-600 transition-colors duration-200"><a href="#about">About</a></li>
          <li className="hover:text-gray-600 transition-colors duration-200"><a href="#services">Services</a></li>
          <li className="hover:text-gray-600 transition-colors duration-200"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;