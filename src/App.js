import React, { useEffect } from "react";
import {
  Link,
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import ProjectDetail from "./Projectdetail";
import Note from "./Note";
import "./App.css";
import LwamImage from "./images/Lwam1.jpeg";

function Sidebar() {
  const { pathname } = useLocation();
  // A nav item is active if the current path starts with its route.
  const isActive = (route) =>
    pathname === route || pathname.startsWith(route + "/");

  return (
    <div className="sidebar">
      <img src={LwamImage} alt="Lwam" className="profile-image" />
      <nav className="navigation">
        <Link
          to="/about"
          className={`nav-item ${isActive("/about") ? "active" : ""}`}
        >
          About me
        </Link>
        <Link
          to="/projects"
          className={`nav-item ${isActive("/projects") ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/note"
          className={`nav-item ${isActive("/note") ? "active" : ""}`}
        >
          Note
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a href="mailto:lwamzeche93@gmail.com" className="nav">
            Email
          </a>
          <a
            href="https://x.com/lwam_zeche"
            target="_blank"
            rel="noopener noreferrer"
            className="nav"
          >
            Twitter
          </a>
          <a
            href="https://medium.com/@lwzaraya"
            target="_blank"
            rel="noopener noreferrer"
            className="nav"
          >
            Medium
          </a>
          <a
            href="https://substack.com/@lwamz?"
            target="_blank"
            rel="noopener noreferrer"
            className="nav"
          >
            Substack
          </a>
        </div>
        <p className="last-updated">Last updated June 2026</p>
      </div>
    </div>
  );
}

// Scroll back to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
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
