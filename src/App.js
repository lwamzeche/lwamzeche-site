import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "./About";
import "./App.css";
import LwamImage from "./images/Lwam7.jpeg";

function Sidebar({ activeSection }) {
  return (
    <div className="sidebar">
      {/* Profile Picture */}
      <img src={LwamImage} alt="Lwam" className="profile-image" />

      {/* Navigation Links */}
      <nav className="navigation">
        <a
          href="#about-me"
          className={`nav-item ${activeSection === "about-me" ? "active" : ""}`}
        >
          About me
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
        >
          Projects
        </a>
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
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("about-me");

  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = document.getElementById("about-me");
      const projects = document.getElementById("projects");

      if (aboutMe && projects) {
        const aboutMeTop = aboutMe.getBoundingClientRect().top;
        const projectsTop = projects.getBoundingClientRect().top;

        // Update the active section based on scroll position
        if (projectsTop <= window.innerHeight / 2) {
          setActiveSection("projects");
        } else if (aboutMeTop <= window.innerHeight / 2) {
          setActiveSection("about-me");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Sidebar activeSection={activeSection} />
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/about#about-me" replace />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={<Navigate to="/about#about-me" replace />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
