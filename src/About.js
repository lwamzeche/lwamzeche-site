import React from "react";
import "./About.css";

// Teaching roles. To add another, copy a block.
// Use `desc` for a single sentence, or `bullets` for a list — not both.
const teaching = [
  {
    role: "Teaching Assistant — EEC 10: Introduction to Analog and Digital Circuits",
    org: "UC Davis · Prof. Hyoyoung Jeong ",
    dates: "Spring 2026",
    desc: "Ran lab sections and office hours, walking students through hands-on builds — voltage dividers, RC and RL circuits, op-amps, PWM, and an audio PCB — and graded their lab reports.",
  },
  {
    role: "Teaching Assistant — EEC 170: Introduction to Computer Architecture",
    org: "UC Davis · Prof. Anthony Thomas",
    dates: "Winter 2026",
    bullets: [
      "Built autograders for every course lab.",
      "Graded homeworks and exams, and wrote up the homework solutions.",
      "Held office hours and led the final-exam review session.",
    ],
  },
  {
    role: "Teaching Assistant — AddisCoder",
    org: "Addis Ababa, Ethiopia",
    dates: "Summer 2025",
    desc: "Taught data structures and algorithms in Python to high-school students in Ethiopia.",
  },
  {
    role: "Teaching Assistant — Introduction to Algorithms (CS300)",
    org: "KAIST School of Computing · Prof. Martin Ziegler",
    dates: "Fall 2022",
    bullets: [
      "Developed and graded assignments and exams throughout the semester.",
      "Held office hours, giving detailed explanations that strengthened students' grasp of algorithmic concepts.",
    ],
  },
  {
    role: "Teaching Assistant — Academic English Camp for Freshmen",
    org: "KAIST School of Digital Humanities & Computational Social Sciences",
    dates: "Winter 2022",
    bullets: [
      "Prepared engaging English activities and co-led class sessions.",
      "Graded exams, took attendance, and assisted with curriculum planning.",
    ],
  },
];

function About() {
  return (
    <div className="about-content">
      {/* ---- Intro ---- */}
      <h1 className="about-title">Lwam Zeche</h1>
      <div className="about-text">
        <p>
          Hii! I'm Lwam Zemikael Araya, a PhD student in Electrical and Computer
          Engineering at UC Davis under the guidance of Professor{" "}
          <a
            href="https://jeonggroup.ucdavis.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hyoyoung Jeong
          </a>
          .
        </p>
        <p>
          My work focuses on wearable bioelectronics and wireless health
          monitoring systems. I'm especially curious about the heart and
          cardiovascular disease.
        </p>
        <p>
          I graduated from KAIST in Computer Science with a minor in Brain and
          Cognitive Science. I did a research internship at{" "}
          <a
            href="https://make.kaist.ac.kr/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            KAIST Make Lab
          </a>{" "}
          under the guidance of Professor{" "}
          <a
            href="https://make.kaist.ac.kr/andrea"
            target="_blank"
            rel="noopener noreferrer"
          >
            Andrea Bianchi
          </a>
          .
        </p>
        <a
          href="https://drive.google.com/file/d/1IXE_iB0oEVu87kLhF1xtthXPGGKHKV4B/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          Please find my CV here
        </a>
      </div>

      {/* ---- Teaching ---- */}
      <h2 className="section-title">Teaching</h2>
      <div className="teaching-list">
        {teaching.map((t) => (
          <div className="teaching-entry" key={t.role}>
            <div className="teaching-header">
              <span className="teaching-role">{t.role}</span>
              <span className="teaching-dates">{t.dates}</span>
            </div>
            <div className="teaching-org">{t.org}</div>
            {t.desc && <p className="teaching-desc">{t.desc}</p>}
            {t.bullets && (
              <ul className="teaching-bullets">
                {t.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
