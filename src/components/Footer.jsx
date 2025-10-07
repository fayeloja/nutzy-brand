import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-white md:px-24 pt-20 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Contact */}
        <div>
          <Link to="/">
            <img
              src="/nutzy-logo.png"
              alt="NUTZY brand Logo"
              className="h-12 w-auto shadow-2xl mb-10"
            />
          </Link>

          <div className="paragraph-footer text-sm leading-relaxed">
            <p className="mb-4">
              25 Asa Afariogun St., Ajao Estate, <br />
              Oshodi-Isolo, Lagos, <br />
              LG 100263, Nigeria.
            </p>
            <p className="mb-4">
              <a href="mailto:info@nutzy.ng" className="hover:underline">
                info@nutzy.ng
              </a>{" "}
              <br />
              <a href="mailto:sale@nutzy.ng" className="hover:underline">
                sale@nutzy.ng
              </a>
            </p>
            <p>
              Monday - Friday: 9 AM - 10 PM <br />
              Saturday: 10 AM – 3 PM
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 md:gap-20 justify-between text-sm">
          {/* MENU */}
          <div>
            <p className="font-semibold mb-4 text-lg">MENU</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ourstory" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:underline">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* PRODUCT */}
          <div>
            <p className="font-semibold mb-4 text-lg">PRODUCT</p>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/crispy-peanut-snacks"
                  className="hover:underline"
                >
                  Crispy Peanut Snacks
                </Link>
              </li>
              <li>
                <Link to="/products/peanut-puffs" className="hover:underline">
                  Peanut Puffs
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  More...
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="font-semibold mb-4 text-lg">SOCIAL</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/nutzypeanutbutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/nutzyng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@nutzypeanutbutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ajrena-foods-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div id="copyright" className="mt-20 mb-10 text-center md:text-left">
        <p className="paragraph-footer text-sm">
          &copy; {new Date().getFullYear()} Ajrena Foods Ltd. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
