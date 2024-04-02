import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="bg-yellow-50">
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-8">
          {/* Menu Icon */}
          <div>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex justify-center w-full">
            <a href="/" title="Feather">
              <img
                alt="Logo"
                src=""
                className="block h-8 w-auto"
              />
            </a>
          </div>
          {/* User Icon */}
          <div>
            <button
              type="button"
              onClick={toggleUserMenu}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
              </svg>
            </button>
            {/* User Menu */}
            {userMenuOpen && (
              <div className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <Link
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </Link>
                  <Link
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 flex z-50">
            <div className="fixed inset-0 transition-opacity">
              <div
                onClick={toggleMenu}
                className="absolute inset-0 bg-gray-600 opacity-75"
              ></div>
            </div>
            <div className="relative flex flex-col flex-1 bg-white max-w-xs w-full shadow-xl">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Mobile menu links */}
              <div className="pt-5 pb-4 px-2 space-y-1">
                <Link
                  href=""
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href=""
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Link
                  href=""
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Tutorials
                </Link>
                <Link
                  href=""
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="relative flex items-center justify-between p-8 bg-yellow-50 lg:block">
        <div className="lg:hidden"></div>
        <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center space-x-11 p-16">
          <div className="relative z-10 shrink-0 b">
            <a href="/" title="Feather" className="flex bg-white">
              <img
                alt="Logo"
                src=""
                className="block h-8 w-auto"
              />
            </a>
          </div>

          <Link
            href=""
            className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
          >
            Features
          </Link>
          <Link
            href=""
            className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
          >
            Pricing
          </Link>
          <Link
            href=""
            className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
          >
            Tutorials
          </Link>
          <Link
            href=""
            className="inline-flex items-center rounded-lg border border-transparent px-2 py-1 text-base transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium"
          >
            More
          </Link>

          <div className="relative z-10 flex items-center gap-x-3">
            <div className="hidden sm:block">
              <Link
                href=""
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-base font-semibold transition-all duration-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 btn-bg-2"
              >
                Sign in
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-x-3">
            <div className="hidden sm:block">
              <Link
                href=""
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-base font-semibold transition-all duration-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 btn-bg-2"
              >
                Sign up
              </Link>
            </div>
          </div>

          <select id="languageSelect" className="bg-yellow-50">
            <option value="english">EN</option>
            <option value="tamil">TA</option>
            <option value="hindi">HINDI</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
