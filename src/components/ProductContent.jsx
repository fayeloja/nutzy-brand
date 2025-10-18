import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import RecipesCarousel from "./RecipesCarousel";
import CrunchyBig from "../assets/product-photos/crunchy-big-web.png";

function ProductContent() {
  // Split into two categories
  const peanutButterProducts = products.filter((p) =>
    p.slug.includes("peanut-butter")
  );
  const snacksProducts = products.filter(
    (p) => p.slug.includes("snacks") || p.slug.includes("puffs")
  );

  return (
    <>
      {/* PEANUT BUTTER SECTION */}
      <div className="mb-20 mt-5">
        <h1 className="mb-6 text-primary text-center text-2xl md:text-4xl font-bold">
          PEANUT BUTTER
        </h1>
        <span className="flex justify-center items-center mb-10">
          <img src="/Line2.png" alt="" className="w-32 md:w-48" />
        </span>
      </div>

      <div className="flex text-center mx-auto px-5 md:px-24 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full">
          {peanutButterProducts.map((product) => (
            <Link
              to={`/products/${product.slug}`}
              key={product.slug}
              className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={product.productimage}
                alt={product.name}
                className="mx-auto w-40 md:w-56 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-5 text-lg md:text-xl font-semibold">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* SNACKS SECTION */}
      <div className="mt-20">
        <h1 className="mb-6 text-primary text-center text-2xl md:text-4xl font-bold">
          NUTZY SNACKS
        </h1>
        <span className="flex justify-center items-center mb-10">
          <img src="/Line2.png" alt="" className="w-32 md:w-48" />
        </span>
      </div>

      <div className="flex text-center mx-auto px-5 md:px-24 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full">
          {snacksProducts.map((product) => (
            <Link
              to={`/products/${product.slug}`}
              key={product.slug}
              className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={product.productimage}
                alt={product.name}
                className="mx-auto w-40 md:w-56 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-5 text-lg md:text-xl font-semibold">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="flex flex-col lg:flex-row text-center justify-center bg-primary py-20 mt-20 rounded-3xl px-5">
        <div className="mb-10 text-white lg:w-1/2">
          <h2 className="mb-5 text-3xl md:text-5xl lg:text-6xl font-bold">
            THE SPREAD THAT FITS
            <br />
            EVERY MOMENT
          </h2>
          <h3 className="mt-5 text-2xl md:text-4xl font-extrabold">
            CRUNCHY PEANUT BUTTER
          </h3>
          <p className="text-lg md:text-2xl mb-10 mt-5 max-w-md mx-auto">
            A hearty blend of creamy peanut butter and real nutty crunch,
            perfect for fueling busy days with texture and taste.
          </p>
          <a
            href="#order"
            className="button-hero-cta mb-5 bg-accent-red px-6 py-3 rounded-lg font-bold hover:border-2 hover:border-white transition duration-300 hover:bg-red-700"
          >
            GRAB YOURS TODAY
          </a>
        </div>
        <div className="flex justify-center">
          <img
            className="lazyload w-48 md:w-72 lg:w-auto"
            src={CrunchyBig}
            alt="Crunchy Peanut Butter"
          />
        </div>
      </div>

      <RecipesCarousel />
    </>
  );
}

export default ProductContent;
