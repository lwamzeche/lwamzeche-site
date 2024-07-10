// Projects.js
import React from "react";
import "./Projects.css";
import steamDexImage from "./images/steam.png";
import Roomie from "./images/LOGO.png";
import MathPark from "./images/Math.png";
import TicketEase from "./images/TicketEase.png";
import TentuPlay from "./images/TentuPlay.png";
import PianoRing from "./images/PianoRing.png";
import EMS from "./images/EMS.jpeg";

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
    id: 1,
    title: "EMS for touchscreens in VR",
    description:
      "In this individual reaserch I am working on replication a work that has been done on providing haptics to walls & heavy objects in virtual reality by means of electrical muscle stimulation” then Working on utilizing EMS to provide screen haptic feedback to improve the usability of a virtual touchscreen in VR.",
    imageUrl: EMS,
    // projectUrl: "https://youtu.be/HajAyAW5QAY?si=LhELFyv5BmgTrqcb",
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
    id: 3,
    title: "Math Park",
    description:
      "A web application that utilized a machine learning model trained on TensorFlow.js to accurately classify handwritten digits",
    imageUrl: MathPark,
    projectUrl: "https://lwamzeche.github.io/MathPark/",
  },

  {
    id: 4,
    title: "TicketEase-NFT",
    description:
      "Me and my teammates developed a web3 app using solidity, Truffle, Vercel and Sepolia for our Blockchain class in KAIST",
    imageUrl: TicketEase,
    projectUrl: "https://ticket-ease.vercel.app/",
  },

  {
    id: 5,
    title: "TentuPlay JS SDK",
    description:
      "As a software engineer at Sentinece, I am developing API methods for the Tentuplay JS SDK",
    imageUrl: TentuPlay,
    projectUrl: "https://docs.tentuplay.io/js/en/latest/",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {/* <h1 className="projects-title">Projects</h1> */}
      {projects.map((project) => (
        // Wrap the contents of the project card in an anchor tag
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

export default Projects;
