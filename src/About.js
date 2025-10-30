import React from "react";
import Projects from "./Projects"; // Import the Projects component
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* About Section */}
      <div id="about-me" className="about-content">
        <h1 className="about-title">Lwam Zeche</h1>
        <div className="about-text">
          <p>
            Hii! I'm Lwam Zemikael Araya, a PhD student in the Electrical and
            Computer Engineering at UC Davis under the guidance of Professor {}
            <a
              href="https://jeonggroup.ucdavis.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hyoyoung Jeong
            </a>
          </p>

          <p>
            My work spans on on wearable bioelectronics and wireless health
            monitoring systems, especially I am curious about the heart and
            cardiovascular diseases.
          </p>
          <p>
            I graduated from KAIST Computer Science with Minor on Brain and
            Cognitive Science. I did a research internship at{" "}
            <a
              href="https://make.kaist.ac.kr/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              KAIST Make Lab
            </a>
            , under the guidance of Professor{" "}
            <a
              href="https://make.kaist.ac.kr/andrea"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrea Bianchi
            </a>
          </p>
          <a
            href="https://drive.google.com/file/d/1IXE_iB0oEVu87kLhF1xtthXPGGKHKV4B/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Please find my CV here
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects-section">
        <h1 className="projects-title">My Projects</h1> {/* Add the title */}
        <Projects />
      </div>
    </div>
  );
}

export default About;
