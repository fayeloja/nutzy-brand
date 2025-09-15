import React from "react";

function Footer() {
  return (
    <div className="bg-primary text-white px-24 pt-20 mt-20 w-full text-justify">
      <div className="flex flex-row justify-between">
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
        <div className="flex flex-3 justify-center">
          <div>MENU</div>
          <div>PRODUCT</div>
          <div>SOCIAL</div>
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
