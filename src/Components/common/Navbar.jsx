import { useState } from 'react';
import logo from '../../assets/nabvar/logo.webp';

const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const logoPlaceholder = logo ; 
  
  return (
    <nav className="bg-black sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <img src={logoPlaceholder} alt="logo" className='w-24 h-24' />
        
        <button 
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        
        <div className="hidden lg:flex space-x-12 relative items-center">
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
      
      
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="block py-2 text-white hover:text-gray-300">HOME</Link>
            <Link to="/Hardware" className="block py-2 text-white hover:text-gray-300">HARDWARE</Link>
            <Link to="/Managed" className="block py-2 text-white hover:text-gray-300">MANAGED SERVICES</Link>
            <Link to="/Marketing" className="block py-2 text-white hover:text-gray-300">MARKETING</Link>
            <Link to="/Development" className="block py-2 text-white hover:text-gray-300">DEVELOPMENT</Link>
            
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full py-2 text-white hover:text-gray-300"
            >
              <span>MORE</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                ></path>
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="pl-4 border-l border-gray-700">
                <Link to="/Career" className="block py-2 text-white hover:text-gray-300">Career</Link>
                <Link to="/Website" className="block py-2 text-white hover:text-gray-300">Website</Link>
                <Link to="/ContactUs" className="block py-2 text-white hover:text-gray-300">Contact Us</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}