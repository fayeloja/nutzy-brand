function Hero() {
  return (
    <section
      id="home"
      className="relative bg-fixed bg-center h-screen flex items-center lazyload mb-20"
      style={{
        backgroundImage: "url('./bg-img.png')", // replace with your Nutzy image path
      }}
    >
      {/* Hero Content */}
      <div className="items-center justify-center text-center pt-50 h-screen w-full ">
        <div className="mb-10 w-full">
          <h1 className="hero-title text-primary animate-pulse ease-in duration-700">
            REAL NOURISHMENT, <br />{" "}
            <span className="text-accent-red">ZERO FUSS!</span>
          </h1>
        </div>
        <button className="button-hero-cta mt-5 mb-5 shadow-2xl">
          FIND LOCATION
        </button>
      </div>
    </section>
  );
}

export default Hero;
