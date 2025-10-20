import React from "react";
import SlantedPeanutPuffs from "../assets/product-photos/peanut-puff-slanted.png";

function OurStoryContent() {
  return (
    <>
      {/* INTRO SECTION */}
      <div className="mx-auto px-5 md:px-20 mb-20 mt-5">
        <p className="paragraph text-center mx-auto mb-5">
          A story of passion, quality and people at heart.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:px-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-3/4 md:w-full"
              src={SlantedPeanutPuffs}
              alt="Nutzy Peanut Puff"
            />
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <p className="text-base md:text-lg text-justify p-5 md:p-10 text-primary">
              At Nutzy, food is more than a product, it’s a way to connect,
              care, and nourish. From the very beginning, we set out with a
              simple mission: to nourish lives with delicious peanut products
              that bring joy to everyday life while supporting healthier eating.
            </p>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="w-full">
        <h1 className="text-accent-red text-center mb-10 text-2xl md:text-7xl">
          WHO WE ARE
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              className="w-full"
              src="./imgs/peanut-butter-served.png"
              alt="Peanut Butter Served"
            />
          </div>
          <div className="bg-primary w-full md:w-1/2 flex items-center">
            <p className="paragraph text-white text-center mx-auto p-5 md:p-10">
              At Nutzy, we believe food should be simple, nourishing, and full
              of joy…
            </p>
          </div>
        </div>
      </div>

      {/* MISSION & VALUES */}
      <div className="w-full text-center my-20">
        <h1 className="text-accent-red mb-5 text-2xl md:text-7xl">
          OUR MISSION & VALUES
        </h1>
        <p className="paragraph px-5 md:px-20">
          At Nutzy, our mission is clear: to nourish lives with delicious peanut
          products.
        </p>
      </div>

      {/* VALUE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 px-5 md:px-20 mb-20">
        <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-3xl shadow-md">
          <h3 className="text-white text-2xl font-bold mb-2">NOURISHMENT</h3>
          <p className="text-white">
            Bringing health and energy to every bite.
          </p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-8 rounded-3xl shadow-md">
          <h3 className="text-white text-2xl font-bold mb-2">COMMUNITY</h3>
          <p className="text-white">Supporting farmers and families.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-800 p-8 rounded-3xl shadow-md">
          <h3 className="text-white text-2xl font-bold mb-2">QUALITY</h3>
          <p className="text-white">Carefully crafted with love and care.</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-800 p-8 rounded-3xl shadow-md">
          <h3 className="text-white text-2xl font-bold mb-2">SUSTAINABILITY</h3>
          <p className="text-white">
            Growing with respect for people and our planet.
          </p>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="w-full text-center p-5">
        <h1 className="text-accent-red mb-10 text-2xl md:text-7xl">
          OUR PHILOSOPHY
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-5 md:px-20 mb-20">
          {[
            { title: "QUALITY FIRST", img: "imgs/badge.png" },
            { title: "HEALTHY INDULGENCE", img: "imgs/running.png" },
            { title: "PEOPLE AT HEART", img: "imgs/users.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-primary p-8 rounded-3xl text-white items-center"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <img src={item.img} alt={item.title} className="mb-3" />
              <p>Snacks that taste great and fuel your day.</p>
            </div>
          ))}
        </div>
      </div>

      {/* PROMISE SECTION */}
      <div className="w-full">
        <h1 className="text-accent-red text-center mb-10 text-2xl md:text-7xl">
          OUR PROMISE
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="bg-primary w-full md:w-1/2 flex items-center">
            <p className="paragraph text-white text-center p-5 md:p-10">
              We promise to keep bringing you snacks and spreads that fit
              seamlessly into your life.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full"
              src="./imgs/family-rush-pb-min.png"
              alt="Peanut Butter Served"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStoryContent;
