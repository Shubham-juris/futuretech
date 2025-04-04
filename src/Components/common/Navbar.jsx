import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Components/assets/nabvar/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <nav className="bg-black sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <img src={logo} alt="logo" width={70} />
        <button className="block lg:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div className="hidden lg:flex space-x-12 relative">
          <Link to="/" className="text-white hover:text-gray-300">HOME</Link>
          <Link to="/Hardware" className="text-white hover:text-gray-300">HARDWARE</Link>
          <Link to="/Managed" className="text-white hover:text-gray-300">MANAGED SERVICES</Link>
          <Link to="/Marketing" className="text-white hover:text-gray-300">MARKETING</Link>
          <Link to="/Development" className="text-white hover:text-gray-300">DEVELOPMENT</Link>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              MORE
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <Link to="/Career" className="block px-4 py-2 text-black hover:bg-gray-200">Career</Link>
                <Link to="/Website" className="block px-4 py-2 text-black hover:bg-gray-200">Website</Link>
                <Link to="/ContactUs" className="block px-4 py-2 text-black hover:bg-gray-200">Contact Us</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
