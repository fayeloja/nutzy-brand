function OurStoryHero() {
  return (
    <section
      id="OurStoryHero"
      className="relative bg-center h-[80vh] md:h-screen flex items-center justify-center mb-20"
      style={{
        backgroundImage: "url('./family-kitchen.png')",
      }}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/farm-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hover-primary opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-5">
        <h1 className="text-accent-red font-bold text-5xl md:text-7xl transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
          OUR STORY
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-xl mx-auto mt-4">
          Cultivating an environment where empathy and understanding thrive.
        </p>
      </div>
    </section>
  );
}

export default OurStoryHero;
