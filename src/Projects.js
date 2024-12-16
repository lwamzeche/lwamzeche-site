// Projects.js
import React from "react";
import "./Projects.css";

// Import images for your projects
import steamDexImage from "./images/steam.png";
import Roomie from "./images/LOGO.png";
import PianoRing from "./images/PianoRing.png";
import EMS from "./images/EMS.jpeg";
import CoffeeBuddy from "./images/CoffeeBuddy.png";
import Pico from "./images/pico.jpeg";
import LwamTMS from "./images/LwamTMS.png";
import CancerCells from "./images/Cancer.png";

const projects = [
  {
    id: 1,
    title: "PianoRing",
    description:
      "A piano learning device that combines haptic feedback with key guidance projection to facilitate independent learning. It features gloves with vibratory motors and LED indicators that synchronize with corresponding piano keys, offering real-time tactile and visual guidance. Designed to enhance muscle memory and finger coordination.",
    imageUrl: PianoRing,
    projectUrl: "https://youtu.be/HajAyAW5QAY?si=LhELFyv5BmgTrqcb",
    keywords: ["HCI", "Wearable UI", "Haptics", "Music Education"],
  },
  {
    id: 2,
    title: "Roomie",
    description:
      "A Roommate Matching mobile application, developed using Flutter and Firebase. The app aims to connect individuals looking for roommates by matching profiles based on shared preferences and habits.",
    imageUrl: Roomie,
    projectUrl:
      "https://github.com/lwamzeche/Roommate_Matching?tab=readme-ov-file",
    keywords: ["Mobile App", "Flutter", "Firebase", "Social Connection"],
  },
  {
    id: 3,
    title: "EMS for Touchscreens in VR",
    description:
      "An individual research project aimed at overcoming the lack of haptic feedback in VR interactions using Electrical Muscle Stimulation (EMS). The work focuses on providing screen haptic feedback to improve the usability of virtual touchscreens in VR.",
    imageUrl: EMS,
    projectUrl:
      "https://drive.google.com/file/d/1duBV3BXTQirWYDLYiGaUR7t_sfzKKJJ3/view?usp=sharing",
    keywords: ["VR", "HCI", "Haptics", "Research", "EMS"],
  },
  {
    id: 4,
    title: "Virtual Sensor",
    description:
      "Currently developing a system aimed at enabling real-time control of physical resistance values through a web interface. The project uses a Raspberry Pi Pico to bridge a web server with variable resistance hardware, allowing users to input desired resistance values via a web interface.",
    imageUrl: Pico,
    keywords: ["IoT", "Hardware", "Web Interface", "Raspberry Pi Pico"],
  },
  {
    id: 5,
    title: "CoffeeBuddy",
    description:
      "A mobile app designed for tracking daily caffeine levels for individuals who depend on coffee for energy. The app calculates the amount of caffeine users should limit themselves to based on their weight, updating dynamically with user input and feedback.",
    imageUrl: CoffeeBuddy,
    projectUrl:
      "https://www.figma.com/proto/mQYCu43StvpWWiq25stbrn/Intro-to-HCI-Project?page-id=575%3A1174&node-id=1113-2561&viewport=101%2C115%2C0.04&t=eVlmdJYjOotpU24r-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1113%3A2561",
    keywords: ["Mobile App", "Health Tracking", "Personalized Feedback"],
  },
  {
    id: 6,
    title:
      "Rehabilitation Program Design Using TMS for Post-Stroke Hand Motor Recovery",
    description:
      "A 6-month program combining Transcranial Magnetic Stimulation (TMS) with task-oriented therapy to enhance hand motor function after stroke. My proposal is about a program that uses evidence-based rTMS protocols to promote neuroplasticity, paired with progressive rehabilitation exercises to restore dexterity and improve independence.",
    imageUrl: LwamTMS,
    projectUrl:
      "https://drive.google.com/file/d/1hilM2fDOnNbSjzWcTUm6b5HJ9cGK4tG0/view?usp=sharing",
    keywords: ["Neuroscience", "Rehabilitation", "Healthcare", "TMS"],
  },
  {
    id: 7,
    title: "Steam Dex",
    description:
      "A website that analyzes various indie games from Steam, providing details such as price, budget, revenue, review count, and tags. It enables users to search for games by name, price, revenue, and tags.",
    imageUrl: steamDexImage,
    projectUrl: "https://steam-dex.com/",
    keywords: ["Web App", "Data Analysis", "Gaming", "Search Functionality"],
  },
  {
    id: 8,
    title: "Breast Cancer Histology Image Classification",
    description:
      "My teammates and I improved the development of a two-step convolutional neural network (CNN) pipeline that integrated local and global image features to classify tissue samples into benign, in situ, and invasive carcinoma categories.",
    imageUrl: CancerCells,
    projectUrl:
      "https://github.com/lwamzeche/BreastCancerHistologyImageClassification",
    keywords: ["Machine Learning", "Medical Imaging", "CNN", "Healthcare"],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.projectUrl ? project.projectUrl : "#"}
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
              {project.keywords && project.keywords.length > 0 && (
                <ul className="project-keywords">
                  {project.keywords.map((keyword, index) => (
                    <li key={index} className="keyword-item">
                      {keyword}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
