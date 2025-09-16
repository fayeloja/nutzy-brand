import React from "react";

function Footer() {
  return (
    <div className="bg-primary text-white md:px-24 pt-20 mt-20">
      <div className="container mx-auto flex justify-between justify-items-center">
        <div>
          <a href="/">
            <img
              src="/nutzy-logo.png"
              alt="NUTZY brand Logo"
              className="h-12 w-auto shadow-2xl mb-10"
            />
          </a>
          <div className="paragraph-footer">
            <p className="mb-4">
              25 Asa Afariogun St., Ajao Estate, <br />
              Oshodi-Isolo, Lagos, <br />
              LG 100263 Nigeria. <br />
            </p>
            <p className="mb-4">
              info@nutzy.ng <br />
              sale@nutzy.ng
            </p>
            <p>
              Monday - Friday: 9 AM - 10 PM <br />
              Saturday: 10 AM – 3 PM
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-3 justify-center space-x-20">
            <div>
              <p>MENU</p>
              <div className="paragraph-footer mt-4">
                <ul>
                  <li>Home</li>
                  <li>Our Story</li>
                  <li>Recipes</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div>
              <p>PRODUCT</p>
              <div className="paragraph-footer mt-4">
                <ul>
                  <li>Peanut Butter</li>
                  <li>Crispy Peanut Snacks</li>
                  <li>Peanut Puffs</li>
                  <li>More..</li>
                </ul>
              </div>
            </div>
            <div>
              <p>SOCIAL</p>
              <div className="paragraph-footer mt-4">
                <ul>
                  <a href="#instagram">
                    <li>Instagram</li>
                  </a>
                  <a href="#facebook">
                    <li>Facebook</li>
                  </a>
                  <a href="#tikton">
                    <li>Tiktok</li>
                  </a>
                  <a href="#linkedin">
                    <li>Linkedin</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="mt-20 mb-20">
        <p className="paragraph-footer text-left mt-10">
          &copy; {new Date().getFullYear()} Ajrena Foods Ltd. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
