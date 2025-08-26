import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
// import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SearchProvider> */}
    <Router>
      <App />
    </Router>
    {/* </SearchProvider> */}
  </StrictMode>
);
