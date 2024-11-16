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
            Hey there, my name is Lwam Zemikael Araya. I am an undergraduate
            student at KAIST, majoring in Computer Science with a minor in Brain
            and Cognitive Sciences.
          </p>
          <p>
            I have gained industry experience through internships in website
            development at{" "}
            <a
              href="https://www.sentience.rocks/#team"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sentience
            </a>{" "}
            and game development using Unity at{" "}
            <a
              href="https://www.bastionrobotics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bastion Robotics.
            </a>
          </p>
          <p>
            My research interests lie in Human-Computer Interaction (HCI),
            Wearable devices, Haptics, and Neuroscience (NeuroHCI). I conducted
            individual research aimed at overcoming the lack of haptic feedback
            in VR interactions using Electrical Muscle Stimulation (EMS) under
            the guidance of Professor{" "}
            <a
              href="https://cs.kaist.ac.kr/people/view?idx=372&kind=faculty&menu=172"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geehyuk Lee.
            </a>
          </p>
          <p>
            Recently, I am doing a research internship at{" "}
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
            . I am looking for PhD programs for Fall 2025.
          </p>
          <a
            href="https://drive.google.com/file/d/18KPimD9wZ1QCPlOfkYX5vV38qcx0e9Yu/view?usp=sharing"
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
        <h1 className="projects-title">Projects</h1> {/* Add the title */}
        <Projects />
      </div>
    </div>
  );
}

export default About;
