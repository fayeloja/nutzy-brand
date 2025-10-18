import React from "react";
import Herobg from "/bg-img.png"; // Ensure you have the image in the specified path

function Hero() {
  return (
    <section
      id="home"
      className="relative bg-fixed bg-center h-screen flex items-center mb-20 bg-[url(./bg-img.png)] background-cover bg-no-repeat"
    >
      {/* Hero Content */}
      <div className="items-center justify-center text-center pt-20 md:pt-50 h-screen w-full">
        <div className="mb-10 w-full">
          <h1 className="hero-title text-primary transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ...">
            REAL NOURISHMENT, <br />{" "}
            <span className="text-accent-red">ZERO FUSS!</span>
          </h1>
        </div>
        <button className="button-hero-cta mt-5 md:mb-5 shadow-2xl animate-bounce ...">
          FIND LOCATION <span></span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
