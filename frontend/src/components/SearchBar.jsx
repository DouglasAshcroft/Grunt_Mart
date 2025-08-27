// src/components/SearchBar.jsx
import { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
  const { results, search } = useContext(SearchContext);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      search(query);
      setOpen(Boolean(query.trim()));
    }, 250);
    return () => clearTimeout(t);
  }, [query, search]);

  // close search bar when user clicks outside
  useEffect(() => {
    function onDoc(e) {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="search-wrap" ref={wrapRef}>
      <input
        className="search-input u-stencil-ring"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by product or NSN"
        onFocus={() => results.length && setOpen(true)}
      />

      {open && results.length > 0 && (
        <div className="search-popover">
          {results.slice(0, 10).map((item) => (
            <button key={item.id} className="search-row" type="button">
              <div className="search-row-title">{item.name}</div>
              <div className="search-row-meta">
                {item.categoryName && `• ${item.categoryName}`}
                {item.nsn && ` • NSN ${item.nsn}`}
                {item.price != null && ` • $${item.price.toFixed(2)}`}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
