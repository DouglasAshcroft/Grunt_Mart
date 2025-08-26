// src/context/SearchContext.jsx
import { createContext, useState, useMemo, useContext } from "react";
import Fuse from "fuse.js";
// import { APIContext } from "../components/ApiFetch"; Create the DB fetch to search

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const { products } = useContext(/*APIContext*/);

  // Later: merge with venues & artists arrays
  const searchableData = useMemo(() => {
    return products.map((product) => ({
      id: "item",
      name: product.name,
      category: product.category?.name,
      role: product.role,
      // slug: event.venue ? event.venue.name : event.title,
    }));
  }, [products]);

  const fuse = useMemo(() => {
    return new Fuse(searchableData, {
      keys: ["name", "category", "role"],
      threshold: 0.3, // lower = stricter match
    });
  }, [searchableData]);

  const [results, setResults] = useState([]);

  const search = (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const matches = fuse.search(query).map((res) => res.item);
    setResults(matches);
  };

  return (
    <SearchContext.Provider value={{ results, search }}>
      {children}
    </SearchContext.Provider>
  );
}
