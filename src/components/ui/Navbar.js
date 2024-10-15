import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* <img src="./assets/images/Logo.jpg" alt="PACT Logo" className="h-10 w-auto mr-2" />
           */}
           <img src="./assets/images/Logo.jpg" alt="PACT Logo" className="h-10 w-auto mr-2" />
          <span className="text-white text-xl font-bold">PACT</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-green-300 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="text-white hover:text-green-300 transition-colors duration-300">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-green-300 transition-colors duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-green-300 transition-colors duration-300">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;