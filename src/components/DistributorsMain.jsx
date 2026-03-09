import { DISTRIBUTORS } from "../data/distributors";

function DistributorsMain({ searchTerm, setSearchTerm, filtered, selectedState, setSelectedState, setActiveCard }) {
    return (
        <div className="sidebar p-5 md:p-0">
          <div className="search-wrap">
            <div className="search-wrap-inner">
              <span className="search-icon">🔍</span>
              <input
                className="search-input"
                placeholder="Search state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="state-list">
            {filtered.length === 0 && (
              <div className="no-result">No states found</div>
            )}
            {filtered.map((state) => (
              <div
                key={state}
                className={`state-item ${selectedState === state ? "active" : ""}`}
                onClick={() => { setSelectedState(state); setActiveCard(null); }}
              >
                <span>{state}</span>
                <span className="state-count">{" "}{DISTRIBUTORS[state].length}</span>
              </div>
            ))}
          </div>
        </div>
        );
}

export default DistributorsMain;