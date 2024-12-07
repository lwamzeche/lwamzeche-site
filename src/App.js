import React, { useState, useEffect } from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import About from "./About";
import Note from "./Note";
import "./App.css";
import LwamImage from "./images/Lwam7.jpeg";

function Sidebar({ activeSection }) {
  return (
    <div className="sidebar">
      <img src={LwamImage} alt="Lwam" className="profile-image" />
      <nav className="navigation">
        <Link
          to="/about#about-me"
          className={`nav-item ${activeSection === "about-me" ? "active" : ""}`}
        >
          About me
        </Link>
        <Link
          to="/about#projects"
          className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/note"
          className={`nav-item ${activeSection === "note" ? "active" : ""}`}
        >
          Note
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
  );
}

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  const [activeSection, setActiveSection] = useState("about-me");
  const location = useLocation();

  useEffect(() => {
    const updateActiveSectionBasedOnRoute = () => {
      if (location.pathname === "/note") {
        setActiveSection("note");
      } else if (location.pathname === "/about") {
        const hash = location.hash || "#about-me";
        setActiveSection(hash.substring(1));
      }
    };

    updateActiveSectionBasedOnRoute();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/about") {
        const aboutMe = document.getElementById("about-me");
        const projects = document.getElementById("projects");

        if (aboutMe && projects) {
          const aboutMeTop = aboutMe.getBoundingClientRect().top;
          const projectsTop = projects.getBoundingClientRect().top;

          if (projectsTop <= window.innerHeight / 2) {
            setActiveSection("projects");
          } else if (aboutMeTop <= window.innerHeight / 2) {
            setActiveSection("about-me");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <ScrollToSection />
      <Sidebar activeSection={activeSection} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/note" element={<Note />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
