import React from "react";

function ProductContent() {
  return (
    <>
      <div
        className="container text-center mx-auto md:px-24 justify-center"
        id="content"
      >
        <div className="mb-40 mt-20">
          <h1 className="mb-10 text-primary lazyload text-center justify-center">
            PEANUT BUTTER
          </h1>
          <span className="flex justify-center items-center mb-20 lazyload">
            <img src="/Line2.png" alt="" />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-20 mb-10 items justify-center ">
            <div className="text-center border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/creamy.png"
                className="w-full max-h-50"
                alt="Creamy Peanut Butter"
              />
              <h3>CREAMY</h3>
            </div>
            <div className="productcard text-center border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/crunchy.png"
                alt="Creamy Peanut Butter"
              />
              <h3>CRUNCHY</h3>
            </div>
            <div className="productcard text-center border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/honey.png"
                alt="Creamy Peanut Butter"
              />
              <h3>HONEY</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20 mb-10 items justify-center ">
            <div className="text-center border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/chocolate.png"
                className="w-full max-h-50"
                alt="Creamy Peanut Butter"
              />
              <h3>CHOCOLATE</h3>
            </div>
            <div className="text-center border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/coconut.png"
                className="w-full max-h-50"
                alt="Creamy Peanut Butter"
              />
              <h3>COCONUT</h3>
            </div>
            <div className="text-center border-2 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="./src/assets/product-photos/chilli.png"
                className="w-full max-h-50"
                alt="Creamy Peanut Butter"
              />
              <h3>CHILLI DIP</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="ourstory" className="mb-20">
        <div
          className="h-screen w-full bg-fixed bg-center bg-cover lazyload mb-20 text-center justify-center"
          style={{
            backgroundImage: "url('imgs/family-break-fast.png')", // replace with your Nutzy image path
          }}
        ></div>
        <p className="paragraph text-center mx-auto mb-5 lazyload">
          Nutzy gives moms and kids quick, tasty, and nourishing energy to power
          through the day.
        </p>
      </div>
      <div
        className="container text-center mx-auto px-30 justify-center"
        id="content"
      >
        <div
          className="lazyload h-80 bg-center bg-cover text-center justify-center"
          style={{
            backgroundImage: "url('imgs/groundnut-bg.png')", // replace with your Nutzy image path
          }}
        >
          <h1 className="mb-30 text-accent-red lazyload text-center justify-center">
            FUEL THE HUSTLE,
            <br /> CHASE THE VISION
          </h1>
        </div>
      </div>
      <div id="ourstory" className="mb-20">
        <div
          className="h-screen w-full bg-fixed bg-center bg-cover lazyload mb-20 text-center justify-center "
          style={{
            backgroundImage: "url('imgs/naija-youth-hustle.png')", // replace with your Nutzy image path
          }}
        ></div>
        <p className="paragraph text-center items-center mx-auto mb-20 lazyload">
          From study nights to big city dreams Nutzy keeps you sharp, full and
          moving.
        </p>
      </div>
      <div className="text-center justify-center">
        <h1 className="mb-30 text-accent-red text-center justify-center">
          DELICIOUS
          <br />
          NUTRITIOUS <br />
          ALWAYS WITHIN REACH <br />
        </h1>
        <p className="paragraph text-center items-center mx-auto mb-20 lazyload">
          The perfect blend of taste, energy, nutrition and convenience.
        </p>
      </div>
    </>
  );
}

export default ProductContent;
