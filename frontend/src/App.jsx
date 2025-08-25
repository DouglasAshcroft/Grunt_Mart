import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
