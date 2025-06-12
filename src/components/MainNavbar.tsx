import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/main-logo.png";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f3f2ec] border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={img1} alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop: Navigation links */}
        <nav className="hidden md:flex space-x-6 text-[#555555] font-medium text-sm uppercase">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link to="/shop" className="cursor-pointer">
            Shop
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact
          </Link>
        </nav>

        {/* Mobile: Hamburger */}
        <div className="md:hidden flex items-center h-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#555555] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3 text-[#555555] font-medium text-sm uppercase">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about" className="block">
            About
          </Link>
          <Link to="/shop" className="block">
            Shop
          </Link>
          <Link to="/contact" className="block">
            Contact
          </Link>

          {/* Search input */}
          <input
            type="search"
            placeholder="Search..."
            className="mt-2 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-[#999]"
          />
        </div>
      )}
    </header>
  );
};

export default MainNavbar;
