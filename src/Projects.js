// Projects.js — the Projects tab (clean typographic index)
import React from "react";
import { Link } from "react-router-dom";
import projects from "./Projectsdata";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-intro">
        Research and engineering projects, most recent first.
      </p>

      <ul className="project-list">
        {projects.map((project) => {
          const eyebrow = [project.year, project.category]
            .filter(Boolean)
            .join("  ·  ");
          return (
            <li key={project.slug} className="project-row">
              <Link to={`/projects/${project.slug}`} className="project-link">
                {eyebrow && <p className="project-eyebrow">{eyebrow}</p>}
                <h2 className="project-name">{project.title}</h2>
                <p className="project-summary">{project.description}</p>
                {project.keywords?.length > 0 && (
                  <ul className="project-tags">
                    {project.keywords.map((k) => (
                      <li key={k}>{k}</li>
                    ))}
                  </ul>
                )}
                <span className="project-cue">View project →</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
