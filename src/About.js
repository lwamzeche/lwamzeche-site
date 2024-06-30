import React from "react";
import "./About.css";
import "./Projects.css";

import LwamImage from "./images/Lwam.png";
import steamDexImage from "./images/steam.png";
import Roomie from "./images/LOGO.png";
import MathPark from "./images/Math.png";
import TicketEase from "./images/TicketEase.png";
import TentuPlay from "./images/TentuPlay.png";
import PianoRing from "./images/PianoRing.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="about-image-wrapper">
          <img src={LwamImage} alt="Lwam" className="about-image" />
          <h1 className="about-title">I'm Lwam</h1>
          <p className="about-subheader">Passionate about HCI</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <h2 class="about-section-title">Education</h2>
            <p>Undergraduate: KAIST (until February 2025)</p>

            <h2 class="about-section-title">About Me</h2>
            <p>
              Hi, my name is Lwam Zemikael Araya. I am an undergraduate student
              at KAIST, majoring in Computer Science with a minor in Brain and
              Cognitive Sciences.
            </p>
            <p>
              I have been interning in website development and recently in game
              development using Unity. I am also conducting individual research
              aimed at overcoming the lack of haptic feedback in VR
              interactions. Typically, a virtual screen is not touchable, which
              prevents users from interacting with it as they would with a
              physical touchscreen. In this study, I am exploring the use of
              electrical muscle stimulation (EMS) to provide haptic feedback,
              thereby enhancing the usability of virtual touchscreens.
            </p>
            <p>
              My research interests lie in Human-Computer Interaction (HCI),
              Wearable devices, Haptics and Neuroscience. I am seeking PhD
              programs in HCI starting in Fall 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "PianoRing",
    description:
      "A piano learning device that combines haptic feedback with key guidance projection to facilitate independent learning. It features gloves with vibratory motors and LED indicators that synchronize with corresponding piano keys, offering real-time tactile and visual guidance. Designed to enhance muscle memory and finger coordination.",
    imageUrl: PianoRing,
    projectUrl: "https://youtu.be/HajAyAW5QAY?si=LhELFyv5BmgTrqcb",
  },
  {
    id: 2,
    title: "Roomie",
    description:
      "A Roommate Matching mobile application, developed using Flutter and Firebase. The app aims to connect individuals looking for roommates by matching profiles based on shared preferences and habits. ",
    imageUrl: Roomie,
    projectUrl:
      "https://github.com/lwamzeche/Roommate_Matching?tab=readme-ov-file",
  },
  {
    id: 3,
    title: "Steam Dex",
    description:
      "A website that analyzes various indie games from Steam, providing details such as price, budget, revenue, review count, and tags. It enables users to search for games by name, price, revenue, and tags.",
    imageUrl: steamDexImage,
    projectUrl: "https://steam-dex.com/",
  },

  {
    id: 4,
    title: "Math Park",
    description:
      "A web application that utilized a machine learning model trained on TensorFlow.js to accurately classify handwritten digits",
    imageUrl: MathPark,
    projectUrl: "https://lwamzeche.github.io/MathPark/",
  },
  {
    id: 5,
    title: "TicketEase-NFT",
    description:
      "Me and my teammates developed a web3 app using solidity, Truffle, Vercel and Sepolia for our Blockchain class in KAIST",
    imageUrl: TicketEase,
    projectUrl: "https://ticket-ease.vercel.app/",
  },
  {
    id: 6,
    title: "TentuPlay JS SDK",
    description:
      "As a software engineer at Sentinece, I am developing API methods for the Tentuplay JS SDK",
    imageUrl: TentuPlay,
    projectUrl: "https://docs.tentuplay.io/js/en/latest/",
  },
];

function Projects() {
  // <div className="about-text">
  //   <h2 className="about-section-title">Education</h2>
  // </div>;
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-links">
        <h3>If you’d like to have a chat with me feel free to do so !! </h3>

        <a
          href="CV_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Get a copy of my CV
        </a>
        <a href="mailto:lwamzeche@kaist.ac.kr" className="contact-link">
          lwamzeche@kaist.ac.kr
        </a>
        <a href="https://hci.social/@lwam" className="contact-link">
          Mastodon
        </a>
        <a href="https://github.com/lwamzeche" className="contact-link">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/lwam-zemikael-araya-3568531b4"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>

      <footer className="contact-footer">
        <p>Made by Lwam</p>
        <p>2024.01.28</p>
      </footer>
    </div>
  );
}

function MainComponent() {
  return (
    <div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainComponent;
