import { useEffect, useState } from "react";

const THEME_ATTR = "data-theme";
const STORAGE_KEY = "theme";

export default function ThemeToggle({ className = "theme-toggle" }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const currentAttr = document.documentElement.getAttribute(THEME_ATTR);

    let initial = stored || currentAttr;

    if (!initial) {
      const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
      ).matches;
      initial = prefersDark ? "dark" : "light";
    }

    applyTheme(initial);
    setTheme(initial);
  }, []);

  const applyTheme = (next) => {
    document.documentElement.setAttribute(THEME_ATTR, next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const toggle = () => {
    const current =
      document.documentElement.getAttribute(THEME_ATTR) || theme || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={className}
      title="Toggle theme"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={toggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="theme-toggle__half-sun"
        height="1em"
        width="1em"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M27.5 11.5v-7h-7L16 0l-4.5 4.5h-7v7L0 16l4.5 4.5v7h7L16 32l4.5-4.5h7v-7L32 16l-4.5-4.5zM16 25.4V6.6c5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4z" />
      </svg>
    </button>
  );
}

//  <button
//           onClick={() => {
//             const current = document.documentElement.getAttribute("data-theme");
//             const next = current === "dark" ? "light" : "dark";
//             document.documentElement.setAttribute("data-theme", next);
//           }}
//         >
//           Dark Mode
//         </button>

// theme set to system settings on load
// useEffect(() => {
//   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
// }, []);
