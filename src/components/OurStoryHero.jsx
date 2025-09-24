function OurStoryHero() {
  return (
    <section
      id="OurStoryHero"
      className="relative bg-fixed bg-center h-screen flex items-center lazyload mb-20"
      style={{
        backgroundImage: "url('./family-kitchen.png')", // replace with your Nutzy image path
      }}
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/farm-video.mp4" // 👈 Place your video inside /public/videos/
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-hover-primary opacity-50"></div>

      {/* Hero Content */}
      <div className="items-center justify-center text-center pt-50 h-screen w-full relative z-10">
        <div className="mb-10 w-full">
          <h1 className="hero-title text-accent-red transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ... ">
            OUR STORY
          </h1>
        </div>
        <p className="hero-subtitle text-white max-w-2xl mx-auto">
          Cultivating an environment where empathy and understanding thrive.
        </p>
      </div>
    </section>
  );
}

export default OurStoryHero;
