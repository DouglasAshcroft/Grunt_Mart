// src/components/CategoryDropdown.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemsByCategory } from "./utils/utils.js"

export default function CategoryDropdown(
  {
    label = "Shop by Category",
    items = [
      { label: "Holsters", id: 1 },
      { label: "Plate Carriers", id: 2 },
      { label: "Belts", id: 3 },
      { label: "Eye Protection", id: 4 },
      { label: "Headgear", id: 5 },
      { label: "Pouches", id: 6 },
      { label: "Footware", id: 7 },
      { label: "Accessories", id: 8 },
      { label: "Packs", id: 9 }
    ],
    onSelect, // optional: (item) => void
    align = "left", // "left" | "right"
  }
) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const toggle = () => setOpen((v) => !v);

  // close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!ref.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleClick = (item) => {
    setOpen(false);
    onSelect?.(item);
    // if using client routing, you might handle navigate here instead of <a>
  };

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className="dropdown-toggle"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggle}
      >
        {label} ▼
      </button>

      {open && (
        <ul
          className="dropdown-menu"
          role="menu"
          style={{
            left: align === "left" ? 0 : "auto",
            right: align === "right" ? 0 : "auto",
          }}
        >
          {items.map((item) => (
            <li key={item.id} role="none">
              {/* swap <a> for <Link> if using react-router */}
              <a
                role="menuitem"
                //href={item.id}
                onClick={(e) => {
                  // if using SPA navigation, prevent full reload:
                  // e.preventDefault(); navigate(item.href);
                  getItemsByCategory(item.id).then((category) => {
                    console.log(category);
                    navigate("/view", { state: { products: category } });
                  })
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
