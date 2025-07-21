import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "../Atoms/NavLink";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-copy-primary">
          NF.
        </Link>

        <nav className="hidden sm:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/settings">Settings</NavLink>
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
        <div className="absolute w-full shadow-sm sm:hidden bg-white border-t-2 border-border">
          <nav className="flex flex-col space-y-2 py-4">
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
              className="text-gray-700 hover:text-black flex justify-center p-0"
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
