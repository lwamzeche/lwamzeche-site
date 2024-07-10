import React from "react";
import "./About.css";
import LwamImage from "./images/Lwam.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-content">
          <h1 className="about-title">Hello, 안녕하세요 !</h1>
          {/* <p className="about-subheader">Passionate about HCI</p> */}
          <div className="about-text">
            <p>
              My name is Lwam Zemikael Araya. I am an undergraduate student at
              KAIST, majoring in Computer Science with a minor in Brain and
              Cognitive Sciences.
            </p>
            <p>
              I have been interning in website development at{" "}
              <a
                href="https://www.sentience.rocks/#team"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sentience
              </a>{" "}
              and recently in game development using Unity at{" "}
              <a
                href="https://www.bastionrobotics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bastion Robotics
              </a>
              . I am also conducting individual research aimed at overcoming the
              lack of haptic feedback in VR interactions using Electrical Muscle
              Stimulation (EMS) under the guidance of Professor{" "}
              <a
                href="https://cs.kaist.ac.kr/people/view?idx=372&kind=faculty&menu=172"
                target="_blank"
                rel="noopener noreferrer"
              >
                Geehyuk Lee
              </a>
              .
            </p>
            <p>
              My research interests lie in Human-Computer Interaction (HCI),
              Wearable devices, Haptics, and Neuroscience (NeuroHCI). I am
              seeking PhD programs in HCI starting in Fall 2025.
            </p>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img src={LwamImage} alt="Lwam" className="about-image" />
        </div>
      </div>
      <div className="about-links">
        {/* Links for CV and contact */}
        <a
          href="https://drive.google.com/file/d/18KPimD9wZ1QCPlOfkYX5vV38qcx0e9Yu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a copy of my CV
        </a>
        <a href="mailto:lwamzeche@kaist.ac.kr">lwamzeche@kaist.ac.kr</a>
        <a href="https://hci.social/@lwam">Mastodon</a>
        <a href="https://github.com/lwamzeche">GitHub</a>
        <a href="https://x.com/lwam_zeche">X(Twitter) </a>
      </div>
    </div>
  );
}

export default About;
