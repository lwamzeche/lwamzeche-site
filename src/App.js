import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/" className="nav-logo">
            Lwam Zeche
          </Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/about" className="nav-item" onClick={toggleMenu}>
              About me
            </Link>
            <Link to="/projects" className="nav-item" onClick={toggleMenu}>
              Projects
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
