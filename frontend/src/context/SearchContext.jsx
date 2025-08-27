// src/context/SearchContext.jsx
import { createContext, useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";
import { getAllItems } from "../components/utils/utils";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let APIrunning = true;
    (async () => {
      try {
        const rows = await getAllItems(); // expects array
        if (APIrunning) setProducts(rows || []);
      } catch (e) {
        console.error("SearchProvider: failed to load products", e);
      }
    })();
    return () => {
      APIrunning = false;
    };
  }, []);

  const searchableData = useMemo(() => {
    return products.map((p) => ({
      id: p.product_id,
      name: p.product_name,
      categoryId: p.category,
      categoryName: String(p.category ?? ""),
      role: "",
      nsn: p.nsn ?? "",
      price: p.price ? Number(p.price) : null,
      imageUrl: p.picture ?? "",
    }));
  }, [products]);

  const fuse = useMemo(() => {
    return new Fuse(searchableData, {
      includeScore: true,
      threshold: 0.3, // lower = stricter match
      keys: [
        { name: "name", weight: 0.7 },
        { name: "categoryName", weight: 0.2 },
        { name: "nsn", weight: 0.1 },
      ],
    });
  }, [searchableData]);

  const search = (query) => {
    const q = (query || "").trim();
    if (!q) return setResults([]);
    const matches = fuse.search(q).map((r) => r.item);
    setResults(matches);
  };

  return (
    <SearchContext.Provider value={{ results, search }}>
      {children}
    </SearchContext.Provider>
  );
}
