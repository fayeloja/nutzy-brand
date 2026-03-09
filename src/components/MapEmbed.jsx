import { STATE_COORDS } from "../data/distributors";

function MapEmbed({ state, distributors }) {
  const center = STATE_COORDS[state];
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${center.lng - 0.15}%2C${center.lat - 0.1}%2C${center.lng + 0.15}%2C${center.lat + 0.1}&layer=mapnik&marker=${center.lat}%2C${center.lng}`;

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <iframe
        title={`Map of ${state}`}
        src={osmUrl}
        className="w-full h-full border-none"
        loading="lazy"
      />
      {/* Legend overlay */}
      <div className="absolute bottom-3 left-3 bg-white/95 rounded-xl px-3 py-2 shadow-md max-w-[180px]">
        <p className="font-body font-bold text-gray-800 text-xs mb-1">
          📍 {distributors.length} Location{distributors.length > 1 ? "s" : ""}
        </p>
        {distributors.map((d, i) => (
          <p key={i} className="font-body text-gray-500 text-xs mt-0.5 leading-snug">
            <span className="text-accent-red font-bold">{i + 1}.</span>{" "}
            {d.name.split(" ").slice(-2).join(" ")}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MapEmbed;
