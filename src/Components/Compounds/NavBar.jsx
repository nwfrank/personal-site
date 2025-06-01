import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          MyApp
        </Link>

        <nav className="hidden sm:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
        </nav>

        <div className="sm:hidden">
          <button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute w-full shadow-sm sm:hidden z-40">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-black flex justify-center"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-black flex justify-center"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
