function ProductHero() {
  return (
    <section
      id="ProductHero"
      className="relative flex items-center justify-center bg-center bg-cover mb-16 h-[70vh] md:h-screen"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/nutzy-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-8xl text-accent-red leading-tight mb-4 transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
          OUR PRODUCTS
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white max-w-lg md:max-w-2xl mx-auto">
          Discover our range of tasty, nutritious snacks, made for moms, kids,
          and hustling youths.
        </p>
      </div>
    </section>
  );
}

export default ProductHero;
