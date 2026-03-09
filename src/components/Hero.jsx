import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      id="home"
      style={{ backgroundImage: "url('/bg-img.png')" }}
      className="h-screen mb-20 bg-cover bg-center bg-no-repeat"
    >
      {/* Hero Content */}
      <div className="text-center items-center justify-center pt-20 md:pt-60">
        <div className="mb-10 w-full">
          <h1 className="hero-title text-primary transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ...">
            REAL NOURISHMENT, <br />{" "}
            <span className="text-accent-red">ZERO FUSS!</span>
          </h1>
        </div>
        <button className="button-hero-cta mt-5 md:mb-5 shadow-2xl animate-bounce ...">
          <Link to="/distributor-location">FIND LOCATION</Link> <span></span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
