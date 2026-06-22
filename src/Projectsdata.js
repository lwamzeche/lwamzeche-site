// projectsData.js
// Single source of truth for every project.
// Edit content here only — the list page and the per-project pages read from this.
//
// Fields per project:
//   slug            URL id, e.g. /projects/<slug>
//   title           project name
//   year            shown in the eyebrow on the detail page
//   category        short "Field · Field" label (eyebrow)
//   image           card cover image (null -> clean placeholder)
//   description     one-line summary used on the Projects list
//   tagline         one-line hook shown under the title on the detail page
//   longDescription array of paragraphs (the Overview)
//   highlights      array of bullet points (optional)
//   keywords        tag pills
//   links           [{ label, url }]
//   screenshots     array of imported images (optional)

// ---- Existing project images ----
import steamDexImage from "./images/steam.png";
import Roomie from "./images/LOGO.png";
import PianoRing from "./images/PianoRing.png";
import EMS from "./images/EMS.jpeg";
import Brainwriting from "./images/brainwriting.png";
import LwamTMS from "./images/LwamTMS.png";

// ---- New 2026 cover images: drop into src/images, import, then set `image:` ----
// import AHCD from "./images/ahcd.png";
// import FPGA from "./images/fpga.png";

const projects = [
  // ===================== 2026 (this year) =====================
  {
    slug: "algorithm-hardware-co-design",
    title: "Algorithm–Hardware Co-Design for LLM Inference",
    year: 2026,
    category: "Machine Learning · Hardware Co-Design",
    image: null,
    description:
      "An empirical study of algorithm–hardware co-design for LLM inference on commodity GPUs, looking at low-precision quantization and structured sparsity.",
    tagline:
      "How low-precision quantization and sparsity reshape the cost of running large language models on everyday GPUs.",
    longDescription: [
      "This project studies how algorithm-level and hardware-level choices interact when running large language model inference on commodity GPUs, where memory bandwidth and energy — not just raw compute — decide what is actually deployable.",
      "We benchmark low-precision quantization — FP16, INT8, and INT4 (BitsAndBytes and AWQ) — alongside structured sparsity on Llama 3.1 8B, then measure how each choice trades off accuracy against latency, throughput, and energy.",
      "The same configurations are evaluated across T4, L4, and A100 GPUs so the results capture how a given algorithmic choice behaves on very different hardware. The findings are written up as an IEEE-format conference paper focused on energy-efficient inference.",
    ],
    highlights: [
      "Benchmarked FP16, INT8, and INT4 (BitsAndBytes, AWQ) plus structured sparsity on Llama 3.1 8B.",
      "Measured accuracy, latency, throughput, and energy across T4, L4, and A100 GPUs.",
      "Written up as an IEEE-format conference paper on energy-efficient LLM inference.",
      "Course project for EEC 289Q — Deep Learning Hardware.",
    ],
    keywords: [
      "Machine Learning",
      "LLM",
      "Quantization",
      "GPU",
      "Hardware Co-Design",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/Algorithm-Hardware-Co-Design",
      },
    ],
    screenshots: [],
  },
  {
    slug: "newton-raphson-fpga",
    title: "FPGA Acceleration of Non-Linear Functions (Newton–Raphson)",
    year: 2026,
    category: "Digital Design · FPGA",
    image: null,
    description:
      "A sequential hardware unit that computes the reciprocal and square root of a bfloat16 input using the Newton–Raphson iterative method.",
    tagline:
      "A pipelined bfloat16 reciprocal and square-root unit, built to meet timing on the DE10-Lite FPGA.",
    longDescription: [
      "This project implements a sequential hardware unit that computes the reciprocal and square root of a bfloat16 input using the Newton–Raphson iterative method, targeting the DE10-Lite FPGA.",
      "Newton–Raphson converges quickly but leans on repeated multiplications, which makes timing the real engineering problem. The iterative datapath had to be pipelined carefully so the design met its clock constraints without losing numerical accuracy.",
    ],
    highlights: [
      "Computes reciprocal and square root of a bfloat16 input via Newton–Raphson iteration.",
      "Pipelined the iterative multiplications to reach timing closure on the DE10-Lite.",
      "Course project for EEC 180 — Digital Systems.",
    ],
    keywords: ["FPGA", "Verilog", "Digital Design", "bfloat16"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/FPGA-based-Acceleration-of-Non-Linear-Functions-Using-the-Newton-Raphson-Method",
      },
    ],
    screenshots: [],
  },
  {
    slug: "combinational-logic-verilog",
    title: "Combinational Logic Design Using Verilog",
    year: 2026,
    category: "Digital Design · Verilog",
    image: null,
    description:
      "Three combinational circuits built in Verilog, each paired with a self-checking testbench.",
    tagline:
      "Three combinational circuits, each verified automatically against expected outputs.",
    longDescription: [
      "Three combinational circuits implemented in Verilog from the ground up, with an emphasis on clean, readable RTL.",
      "Each design ships with a self-checking testbench that drives inputs and compares the circuit's output against expected values automatically, so a regression shows up immediately rather than during manual inspection.",
    ],
    highlights: [
      "Designed three combinational circuits in Verilog.",
      "Wrote self-checking testbenches that validate outputs automatically.",
    ],
    keywords: ["Verilog", "Digital Design", "Testbench"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/Combinational-Logic-Design-Using-Verilog",
      },
    ],
    screenshots: [],
  },
  {
    slug: "rotation-functions-riscv",
    title: "Rotation Functions Using RISC-V",
    year: 2026,
    category: "Computer Architecture · Assembly",
    image: null,
    description: "Rotation functions implemented directly in RISC-V assembly.",
    tagline:
      "Bit/array rotation routines written close to the metal in RISC-V assembly.",
    longDescription: [
      "Rotation functions implemented directly in RISC-V assembly, working at the register and instruction level.",
      // TODO: add 1–2 sentences on what the routines rotate (bits? array elements? an image?) and any constraints you handled.
    ],
    highlights: [
      "Implemented rotation routines in hand-written RISC-V assembly.",
      // TODO: add a highlight or two describing the approach.
    ],
    keywords: ["RISC-V", "Assembly", "Computer Architecture"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/ROTATION-FUNCTIONS-USING-RISC-V",
      },
    ],
    screenshots: [],
  },

  // ===================== Earlier work =====================
  {
    slug: "piano-ring",
    title: "PianoRing",
    year: 2024,
    category: "HCI · Wearables · Haptics",
    image: PianoRing,
    description:
      "A piano-learning wearable that pairs haptic feedback with key-guidance projection for independent practice.",
    tagline:
      "Learning piano by feel — haptic gloves and projected key guidance that build muscle memory.",
    longDescription: [
      "PianoRing is a piano-learning device that combines haptic feedback with key-guidance projection so a learner can practice without an instructor present.",
      "It uses gloves with vibratory motors and LED indicators that synchronize with the corresponding piano keys, giving real-time tactile and visual cues. The aim is to strengthen muscle memory and finger coordination during independent practice.",
    ],
    highlights: [
      "Gloves with vibratory motors and LEDs sync to the corresponding keys.",
      "Combines tactile and visual guidance to reinforce muscle memory.",
    ],
    keywords: ["HCI", "Wearable UI", "Haptics", "Music Education"],
    links: [
      {
        label: "Watch the demo",
        url: "https://youtu.be/HajAyAW5QAY?si=LhELFyv5BmgTrqcb",
      },
    ],
    screenshots: [],
  },
  {
    slug: "roomie",
    title: "Roomie",
    year: 2024,
    category: "Mobile · Flutter",
    image: Roomie,
    description:
      "A roommate-matching mobile app built with Flutter and Firebase that pairs people by shared preferences and habits.",
    tagline:
      "Finding a compatible roommate by matching on habits, not guesswork.",
    longDescription: [
      "Roomie is a roommate-matching mobile application built with Flutter and Firebase.",
      "It connects people looking for roommates by matching profiles on shared preferences and living habits, aiming to make finding a compatible roommate less of a gamble.",
    ],
    highlights: [
      "Built with Flutter and Firebase.",
      "Matches profiles on shared living preferences and habits.",
    ],
    keywords: ["Mobile App", "Flutter", "Firebase", "Social Connection"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/Roommate_Matching?tab=readme-ov-file",
      },
      {
        label: "Demo video 1",
        url: "https://youtu.be/OR6MOSfsgj0?si=0jfVfOA49nw5OpX3",
      },
      {
        label: "Demo video 2",
        url: "https://youtu.be/EaD66UYiSmk?si=zoaKcf6jgaeZ6IUz",
      },
    ],
    screenshots: [],
  },
  {
    slug: "ems-vr",
    title: "EMS for Touchscreens in VR",
    year: 2024,
    category: "VR · HCI · Research",
    image: EMS,
    description:
      "Research on using Electrical Muscle Stimulation to add screen-touch haptics to virtual touchscreens in VR.",
    tagline:
      "Making a virtual touchscreen feel real using electrical muscle stimulation.",
    longDescription: [
      "An individual research project addressing the missing sense of touch in VR interactions using Electrical Muscle Stimulation (EMS).",
      "The work focuses on delivering screen-touch haptic feedback so that virtual touchscreens in VR feel more usable and grounded, rather than buttons floating in empty space.",
    ],
    highlights: [
      "Uses EMS to recreate the sensation of touching a screen in VR.",
      "Aims to improve the usability of virtual touchscreens.",
    ],
    keywords: ["VR", "HCI", "Haptics", "Research", "EMS"],
    links: [
      {
        label: "Read the report",
        url: "https://drive.google.com/file/d/1duBV3BXTQirWYDLYiGaUR7t_sfzKKJJ3/view?usp=sharing",
      },
    ],
    screenshots: [],
  },
  {
    slug: "math-park",
    title: "Math Park",
    year: 2023,
    category: "Web App · Machine Learning",
    image: null,
    description:
      "A browser math game where you solve problems by handwriting the answer — a TensorFlow.js model recognizes your digits in real time.",
    tagline:
      "Solve the problem by drawing your answer — the browser reads your handwriting.",
    longDescription: [
      "Math Park turns arithmetic practice into a drawing exercise. The app shows a problem — like 3 + 2 — and instead of typing, you sketch the answer by hand on a canvas.",
      "A handwritten-digit recognition model runs entirely in the browser using TensorFlow.js: the drawing is captured from the canvas, preprocessed into the format the model expects, and classified on the fly, then checked against the correct answer. Because inference happens client-side, it responds instantly with no backend.",
      "The result is a small, self-contained machine-learning app — a friendly way to make practicing math feel more hands-on, and a compact demo of running computer-vision inference directly in the browser.",
    ],
    highlights: [
      "Solve arithmetic problems by handwriting the answer on a drawing canvas.",
      "In-browser handwritten-digit recognition with TensorFlow.js — no server required.",
      "Captures and preprocesses the drawing, classifies it, and checks the answer in real time.",
      "Built from scratch with vanilla JavaScript, HTML, and CSS.",
    ],
    keywords: [
      "Web App",
      "Machine Learning",
      "TensorFlow.js",
      "Computer Vision",
      "Education",
    ],
    links: [
      { label: "Visit the site", url: "https://lwamzeche.github.io/MathPark/" },
      { label: "GitHub", url: "https://github.com/lwamzeche/MathPark" },
    ],
    screenshots: [],
  },
  {
    slug: "brainwriting",
    title: "Brainwriting",
    year: 2024,
    category: "Web App · Collaboration",
    image: Brainwriting,
    description:
      "A web app that brings the brainwriting ideation method online, letting a team contribute ideas silently and simultaneously.",
    tagline: "Group ideation without the groupthink — everyone writes at once.",
    longDescription: [
      "Brainwriting is a collaborative ideation method where every participant contributes ideas at the same time and without interruption, which reduces groupthink and production blocking.",
      "Our web app brings the technique online with a clean, intuitive interface where users silently input, view, and build on one another's ideas in real time.",
    ],
    highlights: [
      "Participants contribute ideas silently and simultaneously.",
      "Real-time interface for viewing and building on others' ideas.",
    ],
    keywords: ["Website", "Online Brainstorming", "Teamwork"],
    links: [
      { label: "Try it live", url: "https://brainwriting-44355.web.app/" },
    ],
    screenshots: [],
  },
  {
    slug: "tms-stroke-rehab",
    title: "TMS Rehabilitation for Post-Stroke Hand Recovery",
    year: 2024,
    category: "Neuroscience · Rehabilitation",
    image: LwamTMS,
    description:
      "A 6-month program design combining Transcranial Magnetic Stimulation with task-oriented therapy for hand motor recovery after stroke.",
    tagline:
      "A 6-month rTMS-plus-therapy program to restore hand function after stroke.",
    longDescription: [
      "A 6-month program design that combines Transcranial Magnetic Stimulation (TMS) with task-oriented therapy to improve hand motor function after stroke.",
      "The proposal pairs evidence-based rTMS protocols, which promote neuroplasticity, with progressive rehabilitation exercises that restore dexterity and support independence.",
    ],
    highlights: [
      "Pairs evidence-based rTMS protocols with task-oriented therapy.",
      "Structured as a progressive, 6-month recovery program.",
    ],
    keywords: ["Neuroscience", "Rehabilitation", "Healthcare", "TMS"],
    links: [
      {
        label: "Read the proposal",
        url: "https://drive.google.com/file/d/1hilM2fDOnNbSjzWcTUm6b5HJ9cGK4tG0/view?usp=sharing",
      },
    ],
    screenshots: [],
  },

  {
    slug: "steam-dex",
    title: "Steam Dex",
    year: 2023,
    category: "Web App · Data Analysis",
    image: steamDexImage,
    description:
      "A site that analyzes indie games on Steam — price, budget, revenue, reviews, and tags — with flexible search.",
    tagline: "A searchable lens on the indie-game market on Steam.",
    longDescription: [
      "Steam Dex analyzes indie games from Steam, surfacing details like price, budget, revenue, review count, and tags.",
      "Users can search games by name, price, revenue, and tags to explore patterns across the indie market.",
    ],
    highlights: [
      "Aggregates price, budget, revenue, reviews, and tags for indie titles.",
      "Flexible search by name, price, revenue, and tag.",
    ],
    keywords: ["Web App", "Data Analysis", "Gaming", "Search"],
    links: [{ label: "Visit the site", url: "https://steam-dex.com/" }],
    screenshots: [],
  },
];

export default projects;
