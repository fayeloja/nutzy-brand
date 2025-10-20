import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      {/* HEADER SECTION */}
      <div className="flex flex-col text-center justify-center items-center mt-20 md:mt-40 mx-auto px-6 md:px-24 md:mb-20">
        <h1 className="text-accent-red text-5xl md:text-8xl">CONTACT US</h1>
        <p className="text-primary mt-5 mb-10 text-base md:text-2xl max-w-4xl">
          Whether you have a question about our products, partnership
          opportunities, or just want to say hello—our team is here to help.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-24 px-6 mb-20 gap-6 md:gap-10 justify-center">
        {/* LOCATION */}
        <div className="flex flex-col p-6 md:p-10 bg-blue-300 rounded-3xl shadow-2xl text-center justify-center items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-5">LOCATION</h3>
          <h3 className="text-xl md:text-2xl font-semibold mb-5">
            AJRENA FOODS LTD
          </h3>
          <p className="paragraph-footer text-primary">
            25 Asa Afariogun Street, Ajao Estate, Oshodi-Isolo, Lagos, Nigeria.
          </p>
        </div>

        {/* CALL US */}
        <div className="flex flex-col p-6 md:p-10 bg-blue-300 rounded-3xl shadow-2xl text-center justify-center items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-5">CALL US</h3>
          <h3 className="text-xl md:text-2xl font-semibold">
            +234 818 911 1119
          </h3>
          <h3 className="text-xl md:text-2xl font-semibold">
            +234 708 119 9919
          </h3>
          <p className="paragraph-footer text-primary mt-5">
            Mon - Fri, 9am - 5pm
          </p>
        </div>

        {/* EMAIL US */}
        <div className="flex flex-col p-6 md:p-10 bg-blue-300 rounded-3xl shadow-2xl text-center justify-center items-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-5">EMAIL US</h3>
          <h3 className="text-xl md:text-2xl font-semibold">info@nutzy.ng</h3>
          <h3 className="text-xl md:text-2xl font-semibold">sales@nutzy.ng</h3>
        </div>
      </div>

      {/* CONTACT FORM */}
      <ContactForm />
    </>
  );
}

export default Contact;
