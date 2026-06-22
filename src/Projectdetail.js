// ProjectDetail.js — one page per project (/projects/:slug)
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "./Projectsdata";
import "./Projectdetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="detail-page">
        <Link to="/projects" className="back-link">
          ← Back to projects
        </Link>
        <p className="detail-missing">That project doesn't exist.</p>
      </div>
    );
  }

  const eyebrow = [project.year, project.category]
    .filter(Boolean)
    .join("  ·  ");

  return (
    <div className="detail-page">
      <Link to="/projects" className="back-link">
        ← Back to projects
      </Link>

      {/* ---- Header ---- */}
      <header className="detail-header">
        {eyebrow && <p className="detail-eyebrow">{eyebrow}</p>}
        <h1 className="detail-title">{project.title}</h1>
        {project.tagline && <p className="detail-tagline">{project.tagline}</p>}

        {project.keywords?.length > 0 && (
          <ul className="detail-keywords">
            {project.keywords.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        )}
      </header>

      {/* Hero image (cover image, if the project has one) */}
      {project.image && (
        <div className="detail-hero">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <hr className="detail-divider" />

      {/* ---- Overview ---- */}
      <section className="detail-section">
        <h2 className="detail-label">Overview</h2>
        <div className="detail-body">
          {project.longDescription.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ---- Highlights ---- */}
      {project.highlights?.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-label">Highlights</h2>
          <ul className="detail-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ---- Links ---- */}
      {project.links?.length > 0 && (
        <div className="detail-links">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-link-btn"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}

      {/* ---- Screenshots (only renders once you add some) ---- */}
      {project.screenshots?.length > 0 && (
        <section className="detail-section">
          <h2 className="detail-label">Screenshots</h2>
          <div className="detail-screenshots">
            {project.screenshots.map((shot, i) => (
              <img
                key={i}
                src={shot}
                alt={`${project.title} screenshot ${i + 1}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;
