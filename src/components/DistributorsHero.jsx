import { DISTRIBUTORS } from "../data/distributors";

function DistributorsHero({ states }) {
  return (
    <div className="relative overflow-hidden bg-primary px-10 py-16 md:px-16 md:pt-30 md:mb-10 md:mt-[70px] text-center items-center justify-center">
      {/* Background decorative circles */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-secondary opacity-10 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-52 h-52 rounded-full bg-accent-red opacity-5 pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-secondary rounded-full px-4 py-1.5 font-body text-sm font-semibold mb-5 tracking-wide">
        <span>🥜</span> Find Nutzy Near You
      </div>

      {/* Title */}
      <h1
        className="font-heading text-white font-extrabold leading-tight mb-4 text-center"
        style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
      >
        Our Distributors<br />
        Across <span className="text-secondary">Nigeria</span>
      </h1>

      {/* Subtitle */}
      <p className="font-body text-white/60 text-base leading-relaxed text-center">
        Find authorised Nutzy distributors in your state. Fresh peanut butter
        and crispy snacks — always within reach.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 mt-10 justify-center">
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-3xl text-secondary leading-none">
            {states.length}
          </span>
          <span className="font-body text-xs text-white/40 uppercase tracking-widest mt-1">
            States Covered
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-3xl text-secondary leading-none">
            {Object.values(DISTRIBUTORS).flat().length}+
          </span>
          <span className="font-body text-xs text-white/40 uppercase tracking-widest mt-1">
            Distribution Points
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-3xl text-secondary leading-none">
            100%
          </span>
          <span className="font-body text-xs text-white/40 uppercase tracking-widest mt-1">
            Authorised Partners
          </span>
        </div>
      </div>
    </div>
  );
}

export default DistributorsHero;
