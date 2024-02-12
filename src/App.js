import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects"; // Make sure you import the Projects component
import Contact from "./Contact";

import "./App.css";
// Import any other components you need

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/" className="nav-item">
            About me
          </Link>
          <Link to="/projects" className="nav-item">
            Projects
          </Link>
          <Link to="/contact" className="nav-item">
            Contact & CV
          </Link>
        </nav>

        {/* Replace <Switch> with <Routes> */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
