import { useState, useEffect } from "react";
import { DISTRIBUTORS } from "../data/distributors";
import DistributorsHero from "../components/DistributorsHero";
import DistributorsMain from "../components/DistributorsMain";
import DistributorsRightPanel from "../components/DistributorsRightPanel";


export default function DistributorLocation() {
  const [selectedState, setSelectedState] = useState("Lagos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const states = Object.keys(DISTRIBUTORS);
  const filtered = states.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentDistributors = DISTRIBUTORS[selectedState] || [];

  return (
    <div className="min-h-screen bg-gray-50 font-body text-gray-800">

      {/* Hero */}
      <DistributorsHero states={states} />

      {/* Main layout: sidebar + right panel */}
      <div
        className="grid"
        style={{ gridTemplateColumns: "300px 1fr", minHeight: "calc(100vh - 260px)" }}
      >
        <DistributorsMain
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filtered={filtered}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          setActiveCard={setActiveCard}
        />

        <DistributorsRightPanel
          selectedState={selectedState}
          currentDistributors={currentDistributors}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
    </div>
  );
}
