import React from "react";
import RecipesCarousel from "./RecipesCarousel";
import { Link } from "react-router-dom";

function ProductContent() {
  return (
    <>
      <div className="mb-40 mt-5">
        <h1 className="mb-10 text-primary lazyload text-center justify-center">
          PEANUT BUTTER
        </h1>
        <span className="flex justify-center items-center mb-20 lazyload">
          <img src="/Line2.png" alt="" />
        </span>
      </div>
      <div
        className="flex text-center mx-auto md:px-24 justify-center"
        id="content"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-20 mb-10 items justify-center ">
            <div className="text-center  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/creamy.png"
                alt="Creamy Peanut Butter"
              />
              <h3 className="mt-5">CREAMY</h3>
            </div>
            <div className=" text-center 2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/crunchy.png"
                alt="Crunchy Peanut Butter"
              />
              <h3 className="mt-5">CRUNCHY</h3>
            </div>
            <div className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/honey.png"
                alt="Honey Peanut Butter"
              />
              <h3 className="mt-5">HONEY</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20 mb-10 items justify-center ">
            <div className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/chocolate.png"
                alt="Chocolate Peanut Butter"
              />
              <h3 className="mt-5">CHOCOLATE</h3>
            </div>
            <div className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/coconut.png"
                alt="Coconut Peanut Butter"
              />
              <h3 className="mt-5">COCONUT</h3>
            </div>
            <div className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/chilli.png"
                alt="Chilli Peanut Butter"
              />
              <h3 className="mt-5">CHILLI DIP</h3>
            </div>
          </div>
        </div>
      </div>
      <div classname="flex text-center mx-auto md:px-24 justify-center">
        <div className="mb-40 mt-10">
          <h1 className="mb-10 text-primary lazyload text-center justify-center">
            NUTZY SNACKS
          </h1>
          <span className="flex justify-center items-center mb-10 lazyload">
            <img src="/Line2.png" alt="" />
          </span>
        </div>
        <div className="flex gap-20 mb-10 items-center justify-center">
          <div className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="./src/assets/product-photos/peanut-snacks.png"
              alt="Crispy Peanut Snacks"
            />
            <h3 className="mt-5">CRISPY PEANUT SNACKS</h3>
          </div>
          <div className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="./src/assets/product-photos/peanut-puffs.png"
              alt="Creamy Peanut Butter"
            />
            <h3 className="mt-5">PEANUT PUFFS</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 text-center justify-center bg-primary py-30 mt-20 rounded-3xl">
        <div className="mb-10 text-white w-1/2">
          <h2 className="mb-10 mt-20 text-3xl md:text-5xl lg:text-6xl text-accent-red font-bold lazyload">
            THE SPREAD THAT FITS
            <br />
            EVERY MOMENT
          </h2>
          <h3 className="mt-5 text-white text-4xl font-extrabold ">
            CRUNCHY PEANUT BUTTER
          </h3>
          <p className="text-3xl text-white mb-10 mt-10 w-3/4 mx-auto">
            A hearty blend of creamy peanut butter and real nutty crunch,
            perfect for fueling busy days with texture and taste.
          </p>
          <a
            href="#order"
            className="button-hero-cta mb-5 bg-accent-red shadow-2xl"
          >
            GRAB YOURS TODAY
          </a>
        </div>
        <div className="flex text-center items-center justify-center">
          <img
            className="lazyload"
            src="./src/assets/product-photos/crunchy-big-web.png"
            alt="Crunchy Peanut Butter"
          />
        </div>
      </div>
      <RecipesCarousel />
    </>
  );
}

export default ProductContent;
