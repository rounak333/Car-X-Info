import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Login from './Login'; // Import the Login modal

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for controlling login modal

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen); // Toggle login modal

  return (
    <>
      <header className="relative z-50 w-full  text-gray-200 font-kanit bg-transparent" >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img src="./Images/Logo.png" alt="Logo" className="h-12 w-auto shadow-lg" />
          </NavLink>

          {/* Hamburger Menu Button */}
          <button
            className="text-3xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-cyan-400" />
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-0 left-0 w-full md:relative md:flex md:items-center md:space-x-8 md:justify-center transition-all duration-500 ease-in-out`}
          >
            <div className="absolute top-4 right-4 md:hidden">
              {/* Close Button for Mobile Menu */}
              {isMenuOpen && (
                <button
                  className="text-3xl text-cyan-400 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </div>
            <ul
              className={`flex w-full justify-center flex-col md:flex-row md:space-x-8 items-center text-center space-y-6 md:space-y-0 md:mt-0  ${
                isMenuOpen ? 'bg-black h-80 ' : 'bg-transparent '
              }`}
            >
              <li className="hover:text-cyan-400 transition duration-300 ">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">
                  Home
                </NavLink>
              </li>
              <li className="hover:text-cyan-400 transition duration-300 ">
                <NavLink to="/carsforsale" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">
                  Cars for Sale
                </NavLink>
              </li>
              <li className="hover:text-cyan-400 transition duration-300">
                <NavLink to="/newcars" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">
                  New Cars
                </NavLink>
              </li>
             
              <li className="hover:text-cyan-400 transition duration-300">
                <NavLink to="/research" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">
                  Research & Review
                </NavLink>
              </li>
             
              
              <li className="md:ml-[100%] mt-6 md:mt-0 w-20">
              <button
                className="flex items-center justify-center space-x-2 w-full py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition transform duration-300 focus:outline-none shadow-lg   md:ml-[80%] lg:ml-[200%] xl:ml-[350%] 2xl:ml-[500%]"
                onClick={toggleLoginModal}
              >
                <span className="font-semibold text-xs md:text-base sm:text-base">Sign In</span>
                <FontAwesomeIcon icon={faUser} className="text-gray-100" />
              </button>
            </li>
              
            </ul>
            
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      <Login isOpen={isLoginOpen} toggleModal={toggleLoginModal} />
    </>
  );
}

export default Navbar;
