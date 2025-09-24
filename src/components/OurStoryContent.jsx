import React from "react";

function OurStoryContent() {
  return (
    <>
      <div className="mx-auto px-20 mb-40 mt-5">
        <p className="paragraph text-center mx-auto mb-5 lazyload">
          A story of passion, quality and people at heart.
        </p>
        <div className="flex justify-between text-center items-center mt-30 px-20">
          <div className="justify-center items-center">
            <img
              className="lazyload w-full max-h-max"
              src="./src/assets/product-photos/peanut-puff-slanted.png"
              alt="Nutzy Peanut Puff"
            />
          </div>
          <div>
            <p className="hero-subtitle text-justify mx-auto mb-5 lazyload p-20">
              At Nutzy, food is more than a product, it’s a way to connect,
              care, and nourish. From the very beginning, we set out with a
              simple mission: to nourish lives with delicious peanut products
              that bring joy to everyday life while supporting healthier eating.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center">
        <h1 className="mb-30 text-accent-red text-center justify-center">
          WHO WE ARE
        </h1>
        <div className="flex">
          <div className="w-1/2 flex justify-center items-center left-0">
            <img
              className="lazyload w-full max-h-max"
              src="./imgs/peanut-butter-served.png"
              alt="Peanut Butter Served"
            />
          </div>
          <div className="bg-primary flex justify-center items-center w-1/2 right-0">
            <p className="paragraph text-white text-center mx-auto mb-5 lazyload p-20">
              At Nutzy, we believe food should be simple, nourishing, and full
              of joy…
            </p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center">
        <h1 className="mt-30 text-accent-red text-center justify-center">
          OUR MISSION & VALUES
        </h1>

        <p className="paragraph text-center mx-auto mb-5 lazyload p-20">
          At Nutzy, our mission is clear: to nourish lives with delicious peanut
          products.
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center text-center items-center mx-30 gap-10 mb-40 md:px-50">
        <div className="bg-linear-to-r from-accent-red to-red-800  p-10 rounded-4xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mt-5 text-white text-4xl font-extrabold ">
            NOURISHMENT
          </h3>
          <p className="paragraph-footer text-white text-center justify-center lazyload">
            Bringing health and energy to every bite.
          </p>
        </div>
        <div className="bg-linear-to-r from-yellow-300 to-yellow-700  p-10 rounded-4xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mt-5 text-white text-4xl font-extrabold ">
            COMMUNITY
          </h3>
          <p className="paragraph-footer text-white text-center justify-center lazyload">
            Supporting farmers and families.
          </p>
        </div>
        <div className="bg-linear-to-r from-purple-400 to-purple-800  p-10 rounded-4xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mt-5 text-white text-4xl font-extrabold ">QUALITY</h3>
          <p className="paragraph-footer text-white text-center justify-center lazyload">
            Carefully crafted with love and care.
          </p>
        </div>
        <div className="bg-linear-to-r from-orange-400 to-orange-800  p-10 rounded-4xl hover:shadow-2xl transition-shadow duration-300">
          <h3 className="mt-5 text-white text-4xl font-extrabold ">
            SUSTAINBABILITY
          </h3>
          <p className="paragraph-footer text-white text-center justify-center lazyload">
            Growing with respect for people and our planet.
          </p>
        </div>
      </div>
      <div id="ourstory" className="mb-20">
        <div
          className="h-150 w-full bg-fixed bg-center bg-cover lazyload mb-20 text-center justify-center bg-transparent"
          style={{
            backgroundImage: "url('imgs/groundnut-shell-bg.png')", // replace with your Nutzy image path
          }}
        ></div>
        <p className="paragraph text-center items-center mx-auto mb-20 lazyload">
          What started as a passion for wholesome peanuts has grown into a
          movement.
        </p>
      </div>
      <div className="w-full justify-center items-center">
        <h1 className="mb-20 text-accent-red text-center justify-center">
          OUR PHILOSOPHY
        </h1>

        <div className="flex justify-center text-center gap-10 mb-40 md:px-50">
          <div className="flex flex-col bg-linear-to-br from-hover-primary to-primary  p-10 px- rounded-4xl text-center justify-center items-center max-w-3/4">
            <h3 className="mb-5 text-white text-2xl font-extrabold ">
              QUALITY FIRST
            </h3>
            <img src="imgs/badge.png" alt="" />
            <p className="paragraph-footer text-white text-center justify-center lazyload">
              Only the best peanuts and natural ingredients.
            </p>
          </div>
          <div className="flex flex-col bg-linear-to-br from-hover-primary to-primary  p-10 rounded-4xl text-center justify-center items-center max-w-3/4">
            <h3 className="mb-5 text-white text-2xl font-extrabold ">
              HEALTHY INDULGENCE
            </h3>
            <img src="imgs/running.png" alt="" />
            <p className="paragraph-footer text-white text-center justify-center lazyload">
              Snacks that taste great and fuel your day.
            </p>
          </div>
          <div className="flex flex-col bg-linear-to-br from-hover-primary to-primary  p-10 rounded-4xl text-center justify-center items-center max-w-3/4">
            <h3 className="mb-5 text-white text-2xl font-extrabold ">
              PEOPLE AT HEART
            </h3>
            <img src="imgs/users.png" alt="" />
            <p className="paragraph-footer text-white text-center justify-center lazyload">
              Snacks that taste great and fuel your day.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center">
        <h1 className="mb-30 text-accent-red text-center justify-center">
          OUR PROMISE
        </h1>
        <div className="flex">
          <div className="bg-primary flex justify-center items-center w-1/2 right-0">
            <p className="paragraph text-white text-center mx-auto mb-5 lazyload p-20">
              We promise to keep bringing you snacks and spreads that fit
              seamlessly into your life.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center left-0">
            <img
              className="lazyload w-full max-h-max"
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
