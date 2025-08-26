// src/components/SearchBar.jsx
import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
  const { results, search } = useContext(SearchContext);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    search(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input u-stencil-ring"
        // className="search-input"
        type="search"
        // type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by product or role"
      />

      {results.length > 0 && (
        <div className="search-results">
          {results.map((item, idx) => (
            <div key={idx} className="search-result">
              {item.type === "event" && (
                <>
                  <strong>{item.title}</strong>
                  <span> @ {item.venue}</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
