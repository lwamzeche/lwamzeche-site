// App.js
import React from "react";
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
import LwamImage from "./images/Lwam7.jpeg";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Logo - Wrap it in a Link to make it clickable
          <Link to="/about" className="logo">
            <h1>Lwam Zeche</h1>
          </Link> */}
          {/* Profile Picture */}
          <img src={LwamImage} alt="Lwam" className="profile-image" />
          {/* Navigation Links */}
          <nav className="navigation">
            <Link to="/about" className="nav-item">
              About me
            </Link>
            <Link to="/projects" className="nav-item">
              Projects
            </Link>
            <a href="mailto:lwamzeche@kaist.ac.kr" className="nav-item">
              Email
            </a>
            <a
              href="https://drive.google.com/file/d/18KPimD9wZ1QCPlOfkYX5vV38qcx0e9Yu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              CV
            </a>
            <a
              href="https://x.com/lwam_zeche"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              Twitter
            </a>
            <a
              href="https://hci.social/@lwam"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              Mastodon
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
