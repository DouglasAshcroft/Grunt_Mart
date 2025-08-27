// src/components/CategoryDropdown.jsx
import { useEffect, useRef, useState } from "react";

export default function CategoryDropdown({
  label = "Shop by Category",
  items = [
    { label: "Clothing", href: "/category/clothing" },
    { label: "Gear", href: "/category/gear" },
    { label: "Accessories", href: "/category/accessories" },
    { label: "Clearance", href: "/category/clearance" },
  ],
  onSelect, // optional: (item) => void
  align = "left", // "left" | "right"
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

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
            <li key={item.href} role="none">
              {/* swap <a> for <Link> if using react-router */}
              <a
                role="menuitem"
                href={item.href}
                onClick={(e) => {
                  // if using SPA navigation, prevent full reload:
                  // e.preventDefault(); navigate(item.href);
                  handleClick(item);
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
