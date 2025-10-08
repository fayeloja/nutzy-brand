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
      <div className="mb-40 mt-5">
        <h1 className="mb-10 text-primary text-center">PEANUT BUTTER</h1>
        <span className="flex justify-center items-center mb-20">
          <img src="/Line2.png" alt="" />
        </span>
      </div>

      <div className="flex text-center mx-auto md:px-24 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {peanutButterProducts.map((product) => (
            <Link
              to={`/products/${product.slug}`}
              key={product.slug}
              className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={product.productimage}
                alt={product.name}
                className="mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* SNACKS SECTION */}
      <div className="mt-32">
        <h1 className="mb-10 text-primary text-center">NUTZY SNACKS</h1>
        <span className="flex justify-center items-center mb-10">
          <img src="/Line2.png" alt="" />
        </span>
      </div>

      <div className="flex text-center mx-auto md:px-24 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {snacksProducts.map((product) => (
            <Link
              to={`/products/${product.slug}`}
              key={product.slug}
              className="text-center p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={product.productimage}
                alt={product.name}
                className="mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="flex flex-1 text-center justify-center bg-primary py-30 mt-20 rounded-3xl">
        <div className="mb-10 text-white w-1/2">
          <h2 className="mb-10 mt-20 text-3xl md:text-5xl lg:text-6xl font-bold">
            THE SPREAD THAT FITS
            <br />
            EVERY MOMENT
          </h2>
          <h3 className="mt-5 text-4xl font-extrabold">
            CRUNCHY PEANUT BUTTER
          </h3>
          <p className="text-3xl mb-10 mt-10 w-3/4 mx-auto">
            A hearty blend of creamy peanut butter and real nutty crunch,
            perfect for fueling busy days with texture and taste.
          </p>
          <a
            href="#order"
            className="button-hero-cta mb-5 bg-accent-red shadow-2xl hover:border-2 hover:border-white transition duration-300 ease-in-out hover:bg-red-700"
          >
            GRAB YOURS TODAY
          </a>
        </div>
        <div className="flex text-center items-center justify-center">
          <img
            className="lazyload"
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
