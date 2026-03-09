import React from "react";

function Content() {
  return (
    <>
      {/* Section 1 - Product Highlight */}
      <section
        className="container text-center mx-auto px-6 md:px-24 justify-center"
        id="product-highlight"
      >
        <div className="mb-10 md:my-30">
          <img
            src="/imgs/product-highlight.png"
            className="mx-auto w-full max-w-md object-contain md:max-w-4xl"
            alt="Product highlight"
          />
        </div>
        <div>
          <h1 className="mb-10 md:mb-30 text-accent-red text-3xl md:text-7xl font-bold">
            FOR MORNINGS THAT <br /> NEVER SLOW DOWN
          </h1>
        </div>
      </section>

      {/* Section 2 - Family Breakfast */}
      <section id="family-breakfast" className="md:mb-20">
        <div
          className="w-full h-[60svh] md:h-screen bg-center bg-cover bg-no-repeat mb-10 md:bg-fixed"
          style={{
            backgroundImage: "url('/imgs/family-break-fast.png')",
            backgroundAttachment: "local", 
          }}
          role="img"
          aria-label="Family breakfast"
        ></div>
        <p className="paragraph text-center mx-auto px-6 max-w-xl">
          Nutzy gives moms and kids quick, tasty, and nourishing energy to power
          through the day.
        </p>
      </section>

      {/* Section 3 - Hustle & Vision */}
      <section className="container text-center mx-auto px-6 md:px-30" id="hustle-vision">
        <div
          className="h-[40svh] md:h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('/imgs/groundnut-bg.png')",
          }}
          role="img"
          aria-label="Groundnut background"
        >
          <h1 className="text-accent-red text-3xl md:text-7xl font-bold">
            FUEL THE HUSTLE,
            <br /> CHASE THE VISION
          </h1>
        </div>
      </section>

      {/* Section 4 - Naija Youth Hustle */}
      <section id="naija-youth-hustle" className="mb-20">
        <div
          className="w-full h-[60vh] md:h-screen bg-center bg-cover mb-10"
          style={{
            backgroundImage: "url('/imgs/naija-youth-hustle.png')",
          }}
          role="img"
          aria-label="Naija youth hustle"
        ></div>
        <p className="paragraph text-center mx-auto px-6 mb-10 max-w-xl">
          From study nights to big city dreams, Nutzy keeps you sharp, full, and
          moving.
        </p>
      </section>

      {/* Section 5 - Closing Tagline */}
      <section className="text-center px-6">
        <h1 className="text-accent-red text-3xl md:text-7xl font-bold mb-6">
          DELICIOUS <br />
          NUTRITIOUS <br />
          ALWAYS WITHIN REACH
        </h1>
        <p className="paragraph text-center mx-auto mb-20 max-w-xl">
          The perfect blend of taste, energy, nutrition, and convenience.
        </p>
      </section>
    </>
  );
}

export default Content;
