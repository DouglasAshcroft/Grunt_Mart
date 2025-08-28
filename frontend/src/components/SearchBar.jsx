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
      if (!wrapRef.current?.contains(e.target)) {
        setIsFocused(false);
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  const handleSelect = (p) => {
    const id = p.product_id ?? p.id;
    if (!id) return;
    setOpen(false);
    setIsFocused(false);
    setQuery("");
    navigate(`/details/${id}`);
  };

  // Allow clicks inside popup for navigation to product details
  const stopOutsideClose = (e) => {
    if (!e.target.closest(".search-row")) e.preventDefault();
  };

  const norm = (r) => ({
    id: r?.product_id ?? r?.id,
    name: r?.product_name ?? r?.name ?? "Unnamed",
    price: r?.price,
    nsn: r?.nsn ?? r?.NSN ?? null,
    categoryName:
      r?.categoryName ?? r?.category_name ?? r?.category?.name ?? null,
  });

  return (
    <div className="search-wrap" ref={wrapRef}>
      <input
        className="search-input u-stencil-ring"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by product or NSN"
        onFocus={() => setIsFocused(true)}
        role="combobox"
        aria-expanded={open}
      />

      {open && (
        <div
          className="search-popover"
          role="listbox"
          onMouseDown={stopOutsideClose}
        >
          {results.slice(0, 10).map((raw, idx) => {
            const p = norm(raw);
            return (
              <div
                key={p.id ?? idx} // ← safe key
                className="search-row"
                role="option"
                tabIndex={0}
                onMouseDown={(e) => {
                  e.preventDefault(); // fire before blur/unmount
                  handleSelect(p);
                }}
              >
                <div className="search-row-title">{p.name}</div>
                <div className="search-row-meta">
                  {p.categoryName && `• ${p.categoryName}`}
                  {p.nsn && ` • NSN ${p.nsn}`}
                  {p.price != null && ` • $${p.price.toFixed(2)}`}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
