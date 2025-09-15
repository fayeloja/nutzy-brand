// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger menu icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md fixed w-full z-50 bg-white/10 backdrop-blur-md">
      {/* Navigation Bar */}
      <nav className="container mx-auto flex justify-between justify-items-center">
        {/* Logo */}
        <div className="flex justify-between items-center py-5 px-10 w-full">
          <div>
            <a href="/">
              <img
                src="/nutzy-logo.png"
                alt="NUTZY brand Logo"
                className="h-12 w-auto shadow-2xl"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="navbar-menu flex space-x-8 text-primary">
              <li className="hover:text-hover-accent-red focus:text-hover-accent-red">
                <a href="#home">HOME</a>
              </li>
              <li className="hover:text-hover-accent-red focus:text-hover-accent-red">
                <a href="#products">PRODUCTS</a>
              </li>
              <li className="hover:text-hover-accent-red focus:text-hover-accent-red">
                <a href="#ourstory">OUR STORY</a>
              </li>
              <li className="hover:text-hover-accent-red focus:text-hover-accent-red">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md max-h-screen overflow-auto">
          <ul className="navbar-menu flex flex-col space-y-4 p-4 text-primary">
            <li>
              <a
                href="#home"
                className="hover:text-hover-accent-red focus:text-hover-accent-red"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-hover-accent-red focus:text-hover-accent-red"
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="#ourstory"
                className="hover:text-hover-accent-red focus:text-hover-accent-red"
              >
                OUR STORY
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-hover-accent-red focus:text-hover-accent-red"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
