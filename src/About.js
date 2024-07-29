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
              I have gained industry experience through internships in website
              development at at{" "}
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
              Wearable devices, Haptics, and Neuroscience (NeuroHCI). I am
              currently conducting individual research aimed at overcoming the
              lack of haptic feedback in VR interactions using Electrical Muscle
              Stimulation (EMS) under the guidance of Professor{" "}
              <a
                href="https://cs.kaist.ac.kr/people/view?idx=372&kind=faculty&menu=172"
                target="_blank"
                rel="noopener noreferrer"
              >
                Geehyuk Lee.
              </a>
            </p>

            <p>
              Recently, in the summer of 2024, I also started a research
              internship at{" "}
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
                Andrea Bianchi.
              </a>
            </p>
            <p>
              I am seeking PhD programs in HCI starting in Fall 2025, with the
              goal of contributing to the development of more intuitive and
              immersive human-computer interfaces. I'm particularly excited
              about the potential of combining neuroscience insights with HCI to
              create more natural and effective interaction paradigms.
            </p>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img src={LwamImage} alt="Lwam" className="about-image" />
          <div className="about-links">
            {/* Links for CV and contact */}
            <a
              href="https://drive.google.com/file/d/18KPimD9wZ1QCPlOfkYX5vV38qcx0e9Yu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a copy of my CV
            </a>
            <a href="mailto:lwamzeche@kaist.ac.kr">
              Email: lwamzeche@kaist.ac.kr
            </a>
          </div>
          <div className="link-row">
            <a href="https://github.com/lwamzeche">GitHub</a>
            <a href="https://hci.social/@lwam">Mastodon</a>
            <a href="https://x.com/lwam_zeche">X(Twitter)</a>
            <a href=" https://www.linkedin.com/in/lwam-zemikael-araya-3568531b4/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
