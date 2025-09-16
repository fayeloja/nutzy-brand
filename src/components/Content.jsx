import React from "react";

function Content() {
  return (
    <>
      <div
        className="container text-center mx-auto px-30 justify-center"
        id="content"
      >
        <div className="mb-40 mt-20">
          <img
            src="\imgs\product-highlight.png"
            className="lazyload"
            alt="Product highlight"
          />
        </div>
        <div>
          <h1 className="mb-30 text-accent-red lazyload text-center justify-center">
            FOR MORNINGS THAT <br /> NEVER SLOW DOWN
          </h1>
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

export default Content;
