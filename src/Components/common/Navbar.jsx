import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Components/assets/nabvar/logo.png'
const Navbar = () => {
  return (
    <>

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

          <div className="hidden lg:flex space-x-12">
            <Link to="/Home" className="text-white hover:text-gray-300">HOME</Link>
            <Link to="/Hardware" className="text-white hover:text-gray-300">HARDWARE</Link>
            <Link to="/Managed" className="text-white hover:text-gray-300">MANAGED SERVICES</Link>
            <Link to="/Markiting" className="text-white hover:text-gray-300">MARKETING</Link>
            <Link to="/Development" className="text-white hover:text-gray-300">DEVELOPMENT</Link>
            <Link to="#" className="text-white hover:text-gray-300">MORE</Link>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
