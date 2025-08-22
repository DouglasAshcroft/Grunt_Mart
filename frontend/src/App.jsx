import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  return (
    <AppContext.Provider>
      <Header />

      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
export default App;
