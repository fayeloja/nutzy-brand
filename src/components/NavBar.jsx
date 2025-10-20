// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="shadow-md fixed w-full z-50 bg-white/10 backdrop-blur-md px-4 md:px-24">
      <nav className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/nutzy-logo.png"
            alt="NUTZY brand Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-primary font-medium">
          <li className="hover:text-hover-accent-red transition">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-hover-accent-red transition">
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li className="hover:text-hover-accent-red transition">
            <Link to="/ourstory">OUR STORY</Link>
          </li>
          <li className="hover:text-hover-accent-red transition">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primary focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col space-y-4 p-6 text-primary font-medium">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="hover:text-hover-accent-red transition"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={toggleMenu}
                className="hover:text-hover-accent-red transition"
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                to="/ourstory"
                onClick={toggleMenu}
                className="hover:text-hover-accent-red transition"
              >
                OUR STORY
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="hover:text-hover-accent-red transition"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
