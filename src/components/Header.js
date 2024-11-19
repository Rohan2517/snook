import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 text-white py-4 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Page Name */}
        <h1 className="text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500">
          SNOOK CHAMP
        </h1>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#matches" className="hover:text-yellow-300 transition-colors">
              Matches
            </a>
          </li>
          <li>
            <a href="#players" className="hover:text-yellow-300 transition-colors">
              Players
            </a>
          </li>
          <li>
            <a href="#news" className="hover:text-yellow-300 transition-colors">
              News
            </a>
          </li>
          <li>
            <a href="#shop" className="hover:text-yellow-300 transition-colors">
              Shop
            </a>
          </li>
        </ul>

        {/* Right-Side Icons and Button */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className="text-xl hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <FaSearch />
          </button>
          {/* Person Icon */}
          <button
            aria-label="User Profile"
            className="text-xl hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <FaUser />
          </button>
          {/* Sign-in Button */}
          <button className="bg-yellow-400 text-gray-900 font-semibold py-1 px-4 rounded-lg hover:bg-yellow-500 shadow-lg transition-transform transform hover:scale-105">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white shadow-lg rounded-lg mt-2">
          <ul className="flex flex-col space-y-2 p-4 text-center">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#matches" className="hover:text-yellow-300 transition-colors">
                Matches
              </a>
            </li>
            <li>
              <a href="#players" className="hover:text-yellow-300 transition-colors">
                Players
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-yellow-300 transition-colors">
                News
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-yellow-300 transition-colors">
                Shop
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
