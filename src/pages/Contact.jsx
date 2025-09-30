import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <div className="flex flex-col text-center justify-center items-center mt-50 mx-auto px-24 mb-20 lazyload">
        <h1 className="hero-title text-accent-red">CONTACT US</h1>
        <p className="hero-subtitle text-primary mt-5 mb-10">
          Whether you have a question about our products, partnership
          opportunities, or just want to say hello—our team is here to help.
        </p>
      </div>
      <div className="grid grid-cols-3 md:px-24 mb-20 gap-10 justify-center">
        <div className="flex flex-col p-10 bg-blue-300 rounded-3xl shadow-2xl lazyload text-center justify-center items-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-5 ">LOCATION</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-5">AJRENA FOODS LTD</h3>
          </div>
          <div>
            <p className="paragraph-footer justify-center lazyload text-center text-primary">
              25 Asa Afariogun street, Ajao Estate, Oshodi-Isolo, Lagos,
              Nigeria.
            </p>
          </div>
        </div>
        <div className="flex flex-col p-10 bg-blue-300 rounded-3xl shadow-2xl lazyload text-center justify-center items-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-5">CALL US</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">+234 818 911 1119</h3>
            <h3 className="text-2xl font-semibold">+234 708 119 9919</h3>
          </div>
          <div>
            <p className="paragraph-footer justify-center lazyload text-center text-primary mt-5">
              Mon - Fri, 9am - 5pm
            </p>
          </div>
        </div>
        <div className="flex flex-col p-10 bg-blue-300 rounded-3xl shadow-2xl lazyload text-center justify-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-5 ">EMAIL US</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">info@nutzy.ng</h3>
            <h3 className="text-2xl font-semibold">sales@nutzy.ng</h3>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
