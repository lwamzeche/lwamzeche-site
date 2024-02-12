import React from "react";
import LwamImage from "./images/Lwam.png"; // Make sure the path is correct
import "./About.css"; // Make sure this path is correct

function About() {
  return (
    <div className="about-container">
      {/* <nav className="navigation">
        <a href="#about" className="nav-item">
          About me
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#contact" className="nav-item">
          Contact & CV
        </a>
      </nav> */}
      <div className="about-main">
        <div className="about-image-wrapper">
          <img src={LwamImage} alt="Lwam" className="about-image" />
          <h1 className="about-title">I'm Lwam</h1>{" "}
          {/* Change class name to about-title */}
          <p className="about-subheader">Passionate about HCI</p>{" "}
          {/* Change class name to about-subheader */}
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-section-title">Education</h2>
            <p>
              My name is Lwam Zemikael Araya. KAIST Undergraduate Majoring in
              Computer Science and Minor in Brain and Cognitive Science from
              2020 Sep - 2025 Feb
            </p>
            {/* <p>Major: School of Computing</p>
            <p>Minor: Brain and Cognitive science</p> */}
            <h2 className="about-section-title">Experience</h2>
            <p>
              I know how to create various websites, mobile applications, and
              games in Unity, making them accessible across devices with the
              latest technologies available.
            </p>
            <p>
              I am a software engineer at Sentience, currently working on game
              development and the development of the TentuPlay JS SDK.
            </p>
            <p>
              I am interested in conducting research in Human-Computer
              Interaction (HCI), with a specific focus on interactions using
              Virtual Reality (VR) and Augmented Reality (AR), as well as the
              applications of HCI in medicine. Additionally, I am seeking PhD
              programs in Human-Computer Interaction (HCI).{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
