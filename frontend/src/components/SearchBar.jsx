// src/components/SearchBar.jsx
import { useState, useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { results, search } = useContext(SearchContext);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const navigate = useNavigate();

  // debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      search(query);
      const shouldOpen =
        isFocused && query.trim().length > 0 && results.length > 0;
      setOpen(shouldOpen);
    }, 300);
    return () => clearTimeout(t);
  }, [query, isFocused, results.length, search]);

  // close search bar when user clicks outside
  useEffect(() => {
    function onDoc(e) {
      if (!wrapRef.current?.contains(e.target)) setIsFocused(false);
      setOpen(false);
    }
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  // Allow clicks inside popup for navigation to product details
  const stopOutsideClose = (e) => {
    if (e.target.closest("a")) return;
    e.preventDefault();
  }

  return (
    <div className="search-wrap" ref={wrapRef}>
      <input
        className="search-input u-stencil-ring"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by product or NSN"
        onFocus={() => setIsFocused(true)}
      />

      {open && (
        <div
          className="search-popover"
          role="listbox"
          onMouseDown={stopOutsideClose}
        >
          {results.slice(0, 10).map((item) => (
            <div className="search-row" role="button" onClick={() => navigate(`details/${item.id}`)}>
              <div className="search-row-title">{item.name}</div>
              <div className="search-row-meta">
                {item.categoryName && `• ${item.categoryName}`}
                {item.nsn && ` • NSN ${item.nsn}`}
                {item.price != null && ` • $${item.price.toFixed(2)}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
