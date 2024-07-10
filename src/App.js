import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
// import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/" className="nav-logo">
            Lwam Zeche
          </Link>{" "}
          {/* Your name as part of the navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-item">
              About me
            </Link>
            <Link to="/projects" className="nav-item">
              Projects
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
