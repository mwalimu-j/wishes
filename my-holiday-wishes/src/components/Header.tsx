import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-500 to-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl sm:text-2xl font-bold">
              🎄 Holiday Wishes 🎅
            </Link>
          </div>

          {/* Menu for larger screens */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-sm sm:text-base md:text-lg font-medium hover:underline focus:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm sm:text-base md:text-lg font-medium hover:underline focus:underline"
            >
              About
            </Link>
            <Link
              to="/topic"
              className="text-sm sm:text-base md:text-lg font-medium hover:underline focus:underline"
            >
              Topic
            </Link>
          </nav>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown menu for small screens */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 mt-2">
              <Link
                to="/"
                className="text-sm sm:text-base font-medium hover:underline focus:underline"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm sm:text-base font-medium hover:underline focus:underline"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/topic"
                className="text-sm sm:text-base font-medium hover:underline focus:underline"
                onClick={toggleMenu}
              >
                Topic
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
