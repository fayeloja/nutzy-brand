import MapEmbed from "./MapEmbed";

function DistributorsRightPanel({
  selectedState,
  currentDistributors,
  activeCard,
  setActiveCard,
}) {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Panel header */}
      <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100 bg-white">
        <div>
          <h3 className="font-heading font-bold text-xl text-primary">
            <span className="text-secondary">{selectedState}</span> State Distributors
          </h3>
          <p className="font-body text-xs text-gray-400 mt-0.5">
            {currentDistributors.length} authorised location
            {currentDistributors.length !== 1 ? "s" : ""} available
          </p>
        </div>
        <span className="text-3xl">🗺️</span>
      </div>

      {/* Map + Cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-7 flex-1">

        {/* Map */}
        <div
          key={selectedState + "_map"}
          className="h-[420px] rounded-xl overflow-hidden shadow-md border border-gray-100"
        >
          <MapEmbed state={selectedState} distributors={currentDistributors} />
        </div>

        {/* Distributor cards */}
        <div
          className="flex flex-col gap-3 overflow-y-auto max-h-[420px] pr-1"
          style={{ scrollbarWidth: "thin" }}
        >
          {currentDistributors.map((d, i) => (
            <div
              key={i}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              style={{ animationDelay: `${i * 0.06}s` }}
              className={`relative bg-white rounded-xl p-4 border cursor-pointer transition-all duration-200 overflow-hidden
                ${activeCard === i
                  ? "border-secondary shadow-md bg-blue-50/40"
                  : "border-gray-100 hover:border-secondary hover:shadow-md hover:-translate-y-px"
                }`}
            >
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-colors duration-200
                  ${activeCard === i ? "bg-secondary" : "bg-gray-100 group-hover:bg-secondary"}`}
              />

              <div className="flex items-start gap-3">
                {/* Number badge */}
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-xs">{i + 1}</span>
                </div>

                <div className="flex-1">
                  <p className="font-heading font-bold text-sm text-primary mb-1.5 leading-snug">
                    {d.name}
                  </p>
                  <div className="flex items-start gap-1.5 font-body text-xs text-gray-500 leading-relaxed mb-1">
                    <span className="flex-shrink-0 mt-0.5">📍</span>
                    <span>{d.address}</span>
                  </div>
                  <a
                    href={`tel:${d.phone}`}
                    className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-accent-red mt-2 no-underline hover:underline"
                  >
                    <span>📞</span> {d.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DistributorsRightPanel;
