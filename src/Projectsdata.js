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
    slug: "branch-prediction",
    title: "Last-Level Branch Prediction on ML-Style Workloads",
    year: 2026,
    category: "Computer Architecture · Research",
    image: null,
    description:
      "A hypothesis-driven study of why the Last-Level Branch Predictor (LLBP) regresses on ML-style workloads, and a lightweight per-PC gate that recovers most of the lost accuracy.",
    tagline:
      "Why a context-based branch predictor hurts on ML workloads, and the simple usefulness gate that fixes it.",
    sections: [
      {
        heading: "Main contribution",
        blocks: [
          {
            type: "p",
            text: "This project reproduces and extends experiments on the Last-Level Branch Predictor (LLBP), a context-based branch predictor built on top of a TAGE-SC-L baseline. The goal is to understand why LLBP improves accuracy on some server-style workloads but regresses on several compact ML-style workloads.",
          },
          {
            type: "quote",
            text: "LLBP is workload dependent. On compact ML-style traces the context signal can be weak or nearly constant. In those cases LLBP may still override TAGE frequently, but those overrides often add little new information. A lightweight per-PC usefulness gate makes LLBP selective and substantially reduces the regressions.",
          },
          {
            type: "p",
            text: "The project evaluates this through three hypotheses:",
          },
          {
            type: "list",
            items: [
              "H1: LLBP regresses because it creates too many bad overrides.",
              "H2: LLBP regresses because TAGE is denied training when LLBP provides the prediction.",
              "H3: LLBP regresses because it overrides even when its context signal is not useful for that branch.",
            ],
          },
        ],
      },
      {
        heading: "Baseline results",
        blocks: [
          {
            type: "p",
            text: "The baseline comparison is TAGE-SC-L versus the original LLBP. The original LLBP regresses on all four ML-style traces.",
          },
          {
            type: "table",
            headers: [
              "Workload",
              "TAGE Baseline MPKI",
              "Original LLBP MPKI",
              "Regression",
            ],
            rows: [
              ["matmul", "0.6958", "0.7565", "+8.7%"],
              ["decision_tree", "0.7331", "0.7772", "+6.0%"],
              ["transformer", "0.7075", "0.7315", "+3.4%"],
              ["diffusion", "0.7068", "0.7158", "+1.3%"],
            ],
          },
        ],
      },
      {
        heading: "Reading the override breakdown",
        blocks: [
          {
            type: "p",
            text: "When LLBP hits, its behavior falls into one of five categories:",
          },
          {
            type: "list",
            items: [
              "GoodOv: TAGE would be wrong and LLBP is correct.",
              "BadOv: TAGE would be correct and LLBP is wrong.",
              "SameCorr: TAGE and LLBP are both correct.",
              "SameWrong: TAGE and LLBP are both wrong.",
              "NoOv: LLBP hit but did not override.",
            ],
          },
        ],
      },
      {
        heading: "Hypothesis 1: bad overrides are not the main cause",
        blocks: [
          {
            type: "p",
            text: "Hypothesis. LLBP regresses because its override rule is too aggressive and creates too many bad overrides.",
          },
          {
            type: "p",
            text: "Result. This hypothesis is falsified. Bad override rates are very low across the ML-style workloads.",
          },
          {
            type: "table",
            headers: [
              "Workload",
              "GoodOv",
              "BadOv",
              "SameCorr",
              "SameWrong",
              "Total Overrides",
              "Bad Override Rate",
            ],
            rows: [
              [
                "decision_tree",
                "7,261",
                "233",
                "26,207",
                "128",
                "33,829",
                "0.69%",
              ],
              ["diffusion", "2,218", "135", "24,165", "30", "26,548", "0.51%"],
              ["matmul", "10,410", "499", "110,264", "155", "121,328", "0.41%"],
              [
                "transformer",
                "4,145",
                "189",
                "82,559",
                "41",
                "86,934",
                "0.22%",
              ],
            ],
          },
          {
            type: "p",
            text: "Interpretation. The key observation is that SameCorr dominates. LLBP participates heavily, but most of the time it agrees with TAGE instead of adding new useful information. On matmul, LLBP overrides 121,328 times, yet 110,264 of those are SameCorr, so it is very active but usually not providing unique predictive value. The deeper issue is that LLBP overrides in places where context is not informative enough.",
          },
        ],
      },
      {
        heading: "Hypothesis 2: TAGE training interference",
        blocks: [
          {
            type: "p",
            text: "Hypothesis. LLBP regresses because TAGE is denied training whenever LLBP provides the final prediction.",
          },
          {
            type: "p",
            text: "Code change. The TAGE update rule is changed so that TAGE keeps learning even when LLBP provides the final prediction.",
          },
          {
            type: "code",
            text: "// before\nbool updateTAGE = !llbp.isProvider;\n\n// after\nbool updateTAGE = true;",
          },
          {
            type: "p",
            text: "Result. Shadow updating TAGE does not fix the regressions.",
          },
          {
            type: "table",
            headers: [
              "Workload",
              "TAGE Baseline",
              "Original LLBP",
              "Shadow LLBP",
              "Effect",
            ],
            rows: [
              ["matmul", "0.6958", "0.7565", "0.7696", "Worse"],
              [
                "decision_tree",
                "0.7331",
                "0.7772",
                "0.7630",
                "Better, but still regresses",
              ],
              [
                "transformer",
                "0.7075",
                "0.7315",
                "0.7346",
                "About same or worse",
              ],
              ["diffusion", "0.7068", "0.7158", "0.7162", "About same"],
            ],
          },
          {
            type: "p",
            text: "The apparent good overrides collapse once TAGE keeps learning:",
          },
          {
            type: "table",
            headers: ["Workload", "Original GoodOv", "Shadow GoodOv"],
            rows: [
              ["matmul", "10,410", "46"],
              ["decision_tree", "7,261", "48"],
              ["transformer", "4,145", "29"],
              ["diffusion", "2,218", "42"],
            ],
          },
          {
            type: "p",
            text: "Interpretation. Training interference exists, but it is not the full explanation. The collapse in GoodOv shows that many original LLBP good overrides happened because TAGE had been denied training. Once TAGE keeps learning, those apparent wins disappear. MPKI still does not return to the TAGE baseline, so training interference alone is not the root cause.",
          },
        ],
      },
      {
        heading: "Hypothesis 3: gate LLBP when context is uninformative",
        blocks: [
          {
            type: "p",
            text: "Hypothesis. LLBP should be gated per branch PC. If LLBP has not historically helped a branch, it should stop overriding TAGE for that branch.",
          },
          {
            type: "p",
            text: "Mechanism. The design adds a per-PC signed meta-counter. It increments when LLBP would be correct and TAGE would be wrong, decrements when LLBP would be wrong and TAGE would be correct, allows LLBP to override only when the counter is nonnegative, and suppresses LLBP when the counter is negative.",
          },
          {
            type: "code",
            text: "if (llbp.hit) {\n    bool llbp_ok = (resolveDir == llbp.pred);\n    bool tage_ok = tageCorrect(resolveDir);\n    if (llbp_ok && !tage_ok) { auto& c = pcMetaCtr[pc]; if (c < 3)  c++; }\n    else if (!llbp_ok && tage_ok) { auto& c = pcMetaCtr[pc]; if (c > -4) c--; }\n}",
          },
          {
            type: "p",
            text: "Result. Gating alone gives a large improvement on every trace.",
          },
          {
            type: "table",
            headers: [
              "Workload",
              "TAGE Baseline",
              "Original LLBP",
              "H3 Meta MPKI",
              "Effect",
            ],
            rows: [
              ["matmul", "0.6958", "0.7565", "0.7025", "Large improvement"],
              [
                "decision_tree",
                "0.7331",
                "0.7772",
                "0.7421",
                "Large improvement",
              ],
              [
                "transformer",
                "0.7075",
                "0.7315",
                "0.7096",
                "Large improvement",
              ],
              ["diffusion", "0.7068", "0.7158", "0.7096", "Improvement"],
            ],
          },
          {
            type: "p",
            text: "It also suppresses unnecessary LLBP overrides dramatically:",
          },
          {
            type: "table",
            headers: [
              "Workload",
              "Original Overrides",
              "H3 Overrides",
              "Reduction",
            ],
            rows: [
              ["matmul", "121,328", "1,427", "98.8%"],
              ["decision_tree", "33,829", "401", "98.8%"],
              ["transformer", "86,934", "11,414", "86.9%"],
              ["diffusion", "26,548", "6,782", "74.5%"],
            ],
          },
          {
            type: "p",
            text: "Interpretation. The per-PC meta-counter works because it learns which branches benefit from LLBP and which are better left to TAGE. On ML-style workloads many branches are loop or structure dominated, so TAGE already handles them well, and the meta-counter prevents LLBP from overriding those branches unnecessarily.",
          },
        ],
      },
      {
        heading: "H3 plus shadow update ablation",
        blocks: [
          {
            type: "p",
            text: "A stronger ablation combines the per-PC meta-counter with the shadow TAGE update.",
          },
          {
            type: "table",
            headers: [
              "Workload",
              "TAGE Baseline",
              "Original LLBP",
              "H3 + Shadow",
              "Effect",
            ],
            rows: [
              [
                "matmul",
                "0.6958",
                "0.7565",
                "0.6963",
                "Nearly eliminates regression",
              ],
              [
                "decision_tree",
                "0.7331",
                "0.7772",
                "0.7445",
                "Removes most regression",
              ],
              [
                "transformer",
                "0.7075",
                "0.7315",
                "0.7168",
                "Removes most regression",
              ],
              [
                "diffusion",
                "0.7068",
                "0.7158",
                "0.7052",
                "Flips to slight improvement",
              ],
            ],
          },
          {
            type: "table",
            headers: [
              "Workload",
              "Original Overrides",
              "H3 + Shadow",
              "Reduction",
            ],
            rows: [
              ["matmul", "121,328", "2,437", "98.0%"],
              ["decision_tree", "33,829", "485", "98.6%"],
              ["transformer", "86,934", "34,908", "59.8%"],
              ["diffusion", "26,548", "11,561", "56.5%"],
            ],
          },
          {
            type: "p",
            text: "Interpretation. H3 plus shadow gives the strongest result. It keeps TAGE trained while suppressing LLBP when context is not useful. The strongest case is matmul, where MPKI improves from the original LLBP 0.7565 to 0.6963, nearly matching the TAGE baseline of 0.6958.",
          },
        ],
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "p",
            text: "LLBP regression on these ML-style workloads is not mainly caused by a high bad-override rate. The core issue is that LLBP often remains active when its context signal carries little additional information beyond TAGE.",
          },
          {
            type: "p",
            text: "The per-PC meta-counter makes LLBP selective. It allows LLBP to override when LLBP has historically helped that branch, suppresses LLBP when TAGE has historically been better, dramatically reduces unnecessary override volume, and recovers most of the lost accuracy on ML-style traces.",
          },
          {
            type: "p",
            text: "The broader lesson is that context-based last-level predictors need runtime usefulness gating. A fixed longest-history-wins or context-hit-based override policy is not robust across diverse workloads.",
          },
        ],
      },
    ],
    keywords: [
      "Computer Architecture",
      "Branch Prediction",
      "TAGE-SC-L",
      "LLBP",
      "C++",
      "Research",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/Branch-Prediction",
      },
    ],
    screenshots: [],
  },
  {
    slug: "newton-raphson-fpga",
    title: "FPGA Acceleration of Non-Linear Functions (Newton-Raphson)",
    year: 2026,
    category: "Digital Design · FPGA",
    image: null,
    description:
      "A sequential Verilog unit that computes the reciprocal, square root, and division of bfloat16 numbers with the Newton-Raphson method, verified against FP64 and demonstrated on the DE10-Lite FPGA.",
    tagline:
      "A pipelined bfloat16 reciprocal, square-root, and division unit that meets timing on the DE10-Lite FPGA.",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "p",
            text: "This is a sequential hardware unit that computes the reciprocal (1/x), the square root (sqrt of x), and, as an extension, division (a/b) of bfloat16 numbers using the Newton-Raphson iterative method. It is written in Verilog, verified in simulation against an FP64 reference, and demonstrated on the DE10-Lite FPGA (Intel MAX 10).",
          },
          {
            type: "p",
            text: "Reciprocal and square root show up everywhere in DSP, ML accelerators, and graphics pipelines, but unlike add or multiply they cannot be done in a single combinational pass, so this design computes them iteratively. Each bfloat16 input is processed in five steps:",
          },
          {
            type: "list",
            items: [
              "Unpack the input into sign, exponent, and mantissa.",
              "Seed an initial estimate (about 5 bits accurate) from a small ROM lookup table.",
              "Iterate two Newton-Raphson steps on the mantissa in Q16.16 fixed-point.",
              "Adjust the exponent for the selected operation.",
              "Repack the refined mantissa and exponent into bfloat16.",
            ],
          },
          {
            type: "p",
            text: "All floating-point handling is isolated to the I/O boundary, so the entire iteration runs in plain unsigned integer arithmetic and no floating-point multiplier is ever built.",
          },
        ],
      },
      {
        heading: "Theoretical background",
        blocks: [
          {
            type: "p",
            text: "Newton-Raphson finds the root of f(y) = 0 by iterating y_next = y minus f(y)/f'(y), and it converges quadratically, so the number of correct bits roughly doubles each iteration. Starting from an approximately 5-bit seed, only two iterations reach the 8 significant bits that bfloat16 needs.",
          },
          {
            type: "p",
            text: "For the reciprocal, choosing f(y) = 1/y minus d gives a division-free iteration. For the square root, the unit computes the reciprocal square root first and then multiplies by the input. Both use only multiplies, subtracts, and a fixed shift, with no division or square root inside the loop.",
          },
          {
            type: "code",
            text: "reciprocal:  y_next = y * (2 - d*y)\nrsqrt:       y_next = (y/2) * (3 - c*y*y)    then    sqrt(c) = c * y",
          },
          {
            type: "p",
            text: "bfloat16 packs 16 bits as 1 sign, 8 exponent (bias 127), and 7 fraction with an implicit leading 1. It keeps FP32's full 8-bit exponent, and therefore its wide dynamic range, while trading away mantissa precision, which deep-learning workloads tolerate.",
          },
          {
            type: "p",
            text: "The iterations run on the mantissa, which is always in the range 1 to 2 for a normalized input. It is held internally as Q16.16, a 32-bit unsigned integer interpreted as value / 2^16, so 1.0 is 65536 and 2.0 is 131072. A Q16.16 by Q16.16 product is a 32 by 32 integer multiply followed by a right shift of 16, nothing more exotic than an integer multiplier.",
          },
        ],
      },
      {
        heading: "Architecture",
        blocks: [
          {
            type: "p",
            text: "The controller is an eight-state FSM traversed in fixed order:",
          },
          {
            type: "code",
            text: "IDLE -> UNPACK -> PREP -> SEED -> ITER1 -> ITER2 -> FINAL -> DONE_S",
          },
          {
            type: "list",
            items: [
              "IDLE: wait for a start key, then latch the operand and operation.",
              "UNPACK: extract the unbiased exponent and build the Q16.16 mantissa.",
              "PREP: operation-specific setup. For a square root with an odd exponent, the mantissa is doubled and the working exponent decremented by one so the final halving stays integer.",
              "SEED: capture the ROM seed for the selected operation.",
              "ITER1 and ITER2: one Newton-Raphson iteration each.",
              "FINAL: produce the result mantissa (square root multiplies the argument by the rsqrt estimate, reciprocal conditionally renormalizes, division multiplies by the numerator mantissa).",
              "DONE_S: pulse done and return to IDLE.",
            ],
          },
          {
            type: "p",
            text: "The datapath is a 32-bit multiplier with rounding (qmul), a 32-bit subtractor for the (2 - d*y) and (3 - c*y*y) factors, and state-driven muxes. qmul computes (a*b + 2^15) >> 16 by taking the rounded high bits of the 64-bit product.",
          },
          {
            type: "p",
            text: "Each operation uses a 32-entry lookup table indexed purely by bit-slicing, with no arithmetic, where each entry stores the reciprocal or reciprocal square root of the bucket midpoint in Q16.16. The ROMs are written as combinational case statements, so Quartus maps them to LUT logic rather than M9K memory blocks, which avoids the extra cycle of latency a synchronous read would add.",
          },
          {
            type: "p",
            text: "The packing module normalizes the result, applies round-half-up, then clamps: a biased exponent at or below zero becomes 0x0000 and at or above 255 becomes 0x7F7F, so no subnormals or infinities are emitted.",
          },
        ],
      },
      {
        heading: "Simulation results",
        blocks: [
          {
            type: "p",
            text: "Every simulation case is checked bit for bit against an independent FP64 reference.",
          },
          {
            type: "table",
            headers: ["Stage", "Cases", "Outcome"],
            rows: [
              ["Reciprocal only", "6", "all correct"],
              ["Reciprocal + square root", "13", "all correct, 8 cycles each"],
              ["Division extension", "10", "all correct"],
            ],
          },
          {
            type: "p",
            text: "Cases span powers of two, values near 1.0 and 2.0, the smallest and largest representable bfloat16, and the odd-exponent square-root branch.",
          },
        ],
      },
      {
        heading: "Timing and resource utilization",
        blocks: [
          {
            type: "p",
            text: "The key optimization splits the multiply-heavy iteration states so that no clock cycle does more than one multiplication. This lets Quartus share a single multiplier across the iteration sub-states instead of inferring three parallel ones.",
          },
          {
            type: "table",
            headers: ["Metric", "Before", "After", "Change"],
            rows: [
              ["Fmax", "26.79 MHz", "64.15 MHz", "+139%"],
              ["Logic elements", "2,322 (5%)", "1,954 (4%)", "16% fewer"],
              ["Registers", "138", "195", "+41%"],
              ["9-bit multiplier elements", "48 (17%)", "24 (8%)", "50% fewer"],
            ],
          },
          {
            type: "p",
            text: "The pre-optimization design passed every simulation case but failed on hardware: three serial Q16.16 multiplies inside the rsqrt iteration pushed the critical path past the 20 ns (50 MHz) budget. Pipelining the iteration brought Fmax comfortably above 50 MHz, so the design meets timing and runs correctly on the board. The extra registers are the new pipeline stages, and the multiplier drop comes from sharing one multiplier across the sub-states.",
          },
        ],
      },
      {
        heading: "Hardware demonstration on the DE10-Lite",
        blocks: [
          {
            type: "table",
            headers: ["Operation", "Inputs", "HEX result", "Decodes to"],
            rows: [
              ["Reciprocal", "2.0", "0x3F00", "0.5"],
              ["Reciprocal", "4.0", "0x3E80", "0.25"],
              ["Square root", "2.0", "0x3FB5", "about 1.4141 (sqrt 2)"],
              ["Division", "4.0 / 2.0", "0x4000", "2.0"],
              ["Division", "1.5 / 0.5", "0x4040", "3.0"],
              ["Division", "1.0 / 1.0", "0x3F80", "1.0"],
            ],
          },
          {
            type: "p",
            text: "Underflow clamping was also confirmed live: the reciprocal of the largest bfloat16 correctly outputs 0x0000.",
          },
        ],
      },
      {
        heading: "Division extension",
        blocks: [
          {
            type: "p",
            text: "Division reuses the reciprocal pipeline through a/b = a * (1/b). The iteration computes 1/b, and the final stage multiplies by the latched numerator mantissa with the combined exponent. No new FSM states are added: SEED, ITER1, and ITER2 are reused unchanged, and only IDLE, UNPACK, and FINAL gain logic, so division keeps the same fixed latency as reciprocal and square root.",
          },
        ],
      },
      {
        heading: "Key takeaways",
        blocks: [
          {
            type: "list",
            items: [
              "Pick the right number format. Confining the iteration to unsigned Q16.16 and converting to and from bfloat16 only at the boundaries avoided building a full floating-point multiplier.",
              "Seeds matter. A 32-entry ROM (about 5 bits) plus two iterations clears bfloat16's 8-bit requirement, and bit-sliced indexing makes the table lookup essentially free.",
              "Meeting timing is correctness, not polish. The design passed every simulation but failed on silicon until the critical path was shortened. Static timing analysis on the netlist is the real test.",
              "FSM restructuring is a resource lever. Splitting one state into single-multiply sub-states let the synthesizer share one multiplier across three jobs: 139% higher Fmax, half the DSP blocks, and 16% less logic from a single structural change.",
              "Newton-Raphson is a framework. Once the infrastructure existed, division dropped in with no new states, and the same machinery extends to nth roots and logs.",
            ],
          },
        ],
      },
    ],
    keywords: [
      "FPGA",
      "Verilog",
      "Digital Design",
      "bfloat16",
      "Newton-Raphson",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/FPGA-based-Acceleration-of-Non-Linear-Functions-Using-the-Newton-Raphson-Method",
      },
    ],
    screenshots: [],
  },
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
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "p",
            text: "In a recent interview, NVIDIA CEO Jensen Huang observed that Moore's Law alone would have delivered roughly a 100x improvement in computing performance over the past decade, while NVIDIA achieved close to a million-fold increase through what he calls extreme co-design: joint optimization across the model, software stack, hardware architecture, memory hierarchy, and system infrastructure. That framing motivates this study, which treats algorithm and hardware co-design as a primary driver of performance and energy efficiency in modern AI systems.",
          },
          {
            type: "p",
            text: "This is an empirical study of algorithm and hardware co-design for large language model (LLM) inference on commodity GPUs. It evaluates how low-precision quantization and structured sparsity affect inference throughput, memory use, power draw, energy efficiency, and model quality.",
          },
          {
            type: "p",
            text: "Llama 3.1 8B is the primary evaluation model, with cross-model validation on Llama 3.2 1B and Qwen 1.5 1.8B. Quantization covers BitsAndBytes INT8 and INT4 as well as Activation-Aware Weight Quantization (AWQ), and sparsity compares naive 2:4 structured pruning against MaskLLM-generated 2:4 masks. Every configuration is measured across NVIDIA T4, L4, and A100 GPUs to see how hardware characteristics change which optimization wins.",
          },
        ],
      },
      {
        heading: "The contribution",
        blocks: [
          {
            type: "p",
            text: "This is a characterization study rather than a new method. The value is the empirical lesson it produces.",
          },
          {
            type: "quote",
            text: "The common intuition that quantization is a free speedup is wrong. Naive INT8 was the worst option on every axis. The win came from matching kernels to the hardware, not from using fewer bits. That is a co-design result.",
          },
        ],
      },
      {
        heading: "Why is INT8 slower than FP16?",
        blocks: [
          {
            type: "p",
            text: "Because the INT8 path uses a general-purpose mixed-precision kernel. It extracts outlier features into FP16, quantizes the rest, runs the matmul, then dequantizes, all at runtime. That overhead dominates, and the kernel is not tuned for small-batch autoregressive decode.",
          },
          {
            type: "p",
            text: "The format can be fast on A100 tensor cores in principle. The LLM.int8() library simply is not optimized for inference speed; it is built to fit large models in memory. AWQ, by contrast, ships fused kernels written for exactly this workload.",
          },
        ],
      },
      {
        heading:
          "Then why is AWQ-INT4 only about 5 to 7% faster than FP16, not 4x?",
        blocks: [
          {
            type: "p",
            text: "Because at these batch sizes decode is memory-bandwidth bound, not compute bound. You generate one token at a time, so the bottleneck is loading the weights, not the math. AWQ cuts weight memory traffic by roughly 4x, which is why it edges ahead.",
          },
          {
            type: "p",
            text: "Everything else (attention, the KV-cache, framework overhead) does not shrink, so the net speedup is modest. It is an Amdahl's-law ceiling: you only sped up the part that was the bottleneck.",
          },
        ],
      },
      {
        heading: "How power was measured, and what a dynamic watt means",
        blocks: [
          {
            type: "p",
            text: "Power was sampled from the GPU's onboard sensor through NVML, the same source that nvidia-smi exposes, read programmatically with pynvml. During each inference run a background sampler polls instantaneous board power at a fixed interval, and the readings are averaged over the run to give average power in watts.",
          },
          {
            type: "p",
            text: "A dynamic watt is the average power during inference minus the idle baseline, which is the power the GPU draws with the model resident but not actively computing. Subtracting it isolates the marginal power cost of the computation itself and removes the static overhead (leakage, memory refresh, idle clock domains) that every method pays equally.",
          },
        ],
      },
      {
        heading:
          "Why weight quantization helps but KV-cache quantization can hurt",
        blocks: [
          {
            type: "p",
            text: "Quantizing weights cuts the dominant cost, which is loading the weights on every step. Quantizing the KV-cache adds a per-step dequantization on a comparatively small structure, so at these context lengths the overhead outweighs the bandwidth it saves. It only pays off at very long contexts where the cache itself becomes the memory bottleneck.",
          },
        ],
      },
      {
        heading:
          "Why decode throughput stays flat, then falls off at long context",
        blocks: [
          {
            type: "p",
            text: "Decode throughput is not expected to scale linearly with prompt length. Per-token cost has two parts: a fixed cost from the forward pass through the weights, which is independent of sequence length, and an attention cost over the KV-cache, which grows with the number of cached tokens. Per-token latency is therefore about A + B*L, and throughput, being its inverse, scales as batch / (A + B*L), a reciprocal rather than a line.",
          },
          {
            type: "p",
            text: "This creates two regimes. At short context (roughly 512 to 2048 tokens) the B*L term is small, the forward pass dominates, and increasing prompt length barely changes per-token cost, so throughput is nearly flat and the workload is weight bound. At long context (roughly 4096 to 8192 tokens) B*L grows large enough to dominate and throughput falls off as 1/L; doubling the prompt from 4096 to 8192 tokens nearly halves throughput (for example, from 87.7 to 54.5 tok/s with the FP16 cache). In this regime the workload is attention bound.",
          },
        ],
      },
      {
        heading: "So which configuration should you deploy?",
        blocks: [
          {
            type: "p",
            text: "It depends on the card and the workload, but the rules of thumb are:",
          },
          {
            type: "list",
            items: [
              "On a modern GPU with AWQ kernel support (A100, L4), use AWQ INT4 and push batch size as high as memory allows. That is where both throughput and efficiency peak.",
              "On a memory-constrained or older card like the T4, INT8 may be the only way to fit the model, and you accept the throughput hit.",
              "For long contexts or large batches where the KV-cache dominates memory, add KV-cache quantization on top. It is complementary to weight quantization, not a substitute.",
            ],
          },
        ],
      },
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
    slug: "rotation-functions-riscv",
    title: "Rotation Functions Using RISC-V",
    year: 2025,
    category: "Computer Architecture · RISC-V",
    image: null,
    description:
      "Three matrix-rotation kernels written in RISC-V assembly (transpose, layer-by-layer, and divide-and-conquer), analyzed for locality, pipeline hazards, branch behavior, and cache design.",
    tagline:
      "How three ways of rotating a matrix in RISC-V stress the memory system differently, and which cache design fits them best.",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "p",
            text: "This project implements three ways of rotating a square matrix by 90 degrees in RISC-V assembly, then studies how each one behaves in the memory system and the pipeline. The three kernels are rotate_tr (transpose based), rotate_layer (layer by layer), and rotate_dc (divide and conquer).",
          },
          {
            type: "p",
            text: "Their instruction mixes already differ sharply. rotate_tr is memory heavy, with almost 60% of its instructions being loads and stores, while rotate_layer is dominated by arithmetic, roughly two-thirds ALU, and issues far fewer memory operations per instruction.",
          },
        ],
      },
      {
        heading: "Temporal locality",
        blocks: [
          {
            type: "p",
            text: "None of the three kernels shows strong temporal locality on the input array. Each matrix element is read, used in a swap or rotation, and then never touched again. Any reuse is immediate, meaning a load followed by a few instructions that use that value, rather than reuse of the same address after a long gap. From a cache-design point of view, none of the three kernels can rely on temporal reuse of input elements.",
          },
        ],
      },
      {
        heading: "Spatial locality",
        blocks: [
          {
            type: "p",
            text: "All three kernels show spatial locality, but to different degrees. rotate_tr and rotate_layer have good spatial locality when they walk across rows, where they touch consecutive addresses, but poor spatial locality when they walk down columns, where the strides are large. rotate_dc has the best spatial locality overall, because it works on smaller sub-blocks: once a block is brought into the cache, many nearby elements are used before moving on.",
          },
        ],
      },
      {
        heading: "Load-use hazards",
        blocks: [
          {
            type: "p",
            text: "On the 64 by 64 matrix, the kernels behave very differently at the pipeline level.",
          },
          {
            type: "table",
            headers: ["Kernel", "Dynamic loads", "Load-use hazards", "Rate"],
            rows: [
              ["rotate_tr", "32,515", "16,256", "about 50%"],
              ["rotate_layer", "4,099", "0", "0%"],
            ],
          },
          {
            type: "p",
            text: "rotate_tr often does a load immediately followed by an instruction that reads the loaded register, which is the classic load-use pipeline hazard. rotate_layer places address arithmetic or loop bookkeeping between each load and its use, so it avoids the hazard entirely even though it performs fewer loads overall.",
          },
        ],
      },
      {
        heading: "Branch prediction",
        blocks: [
          {
            type: "p",
            text: "Using the static rule that backward branches are predicted taken and forward branches predicted not taken:",
          },
          {
            type: "table",
            headers: ["Kernel", "Dynamic branches", "Correct", "Accuracy"],
            rows: [
              ["rotate_tr", "4,322", "4,192", "about 97.0%"],
              ["rotate_dc", "10,175", "8,501", "about 83.5%"],
            ],
          },
          {
            type: "p",
            text: "Static prediction is very accurate for the simple loop-style control flow of rotate_tr, and still reasonable but noticeably weaker for the more complex, recursive control flow of rotate_dc.",
          },
        ],
      },
      {
        heading: "Cache design sweep",
        blocks: [
          {
            type: "p",
            text: "Every data access from all three kernels on the 64 by 64 matrix was traced and run through a cache simulator. Total cache size was fixed at 64 words, and the sweep varied block size (1, 2, 4, 8, 16, 32, and 64 words) and every valid associativity. For each configuration the simulator counted misses per program, then compared the per-program best against the overall best.",
          },
          {
            type: "p",
            text: "Tuned individually, the kernels prefer different designs:",
          },
          {
            type: "table",
            headers: ["Kernel", "Best configuration", "Miss rate"],
            rows: [
              ["rotate_tr", "32-word blocks, 2-way", "about 3.45%"],
              ["rotate_layer", "16-word blocks, 4-way", "about 26.4%"],
              ["rotate_dc", "16-word blocks, 4-way", "about 7.37%"],
            ],
          },
          {
            type: "p",
            text: "Across all three kernels together, the clear winner is 16-word lines with 4-way associativity (64 words total). With that design rotate_tr stays very good at about 3.74%, while rotate_layer and rotate_dc stay at their optimal miss counts, giving 9,426 misses out of 138,768 accesses overall, about 6.8%.",
          },
        ],
      },
      {
        heading: "Recommendation",
        blocks: [
          {
            type: "quote",
            text: "A 64-word data cache with 16-word blocks and 4-way associativity balances the three rotation kernels best and minimizes total misses for the 64 by 64 workload.",
          },
        ],
      },
    ],
    keywords: [
      "Computer Architecture",
      "RISC-V",
      "Assembly",
      "Cache",
      "Memory Systems",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/ROTATION-FUNCTIONS-USING-RISC-V",
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
      "The EEC 180 Lab 2 combinational suite: a ripple-carry adder, a parameterized K-bit adder, and a leading-zero detector, each with self-checking testbenches.",
    tagline:
      "Three combinational circuits in Verilog, verified with exhaustive, directed, and random self-checking testbenches.",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "p",
            text: "This is the EEC 180 (Digital Systems II) Lab 2 at UC Davis. It implements three combinational circuits in Verilog, each paired with a self-checking testbench, targeting the Terasic DE10-Lite FPGA (Intel MAX 10).",
          },
        ],
      },
      {
        heading: "Part 1: 8-bit ripple-carry adder",
        blocks: [
          {
            type: "p",
            text: "A structural chain of eight behavioral 1-bit full adders, with signed two's complement overflow detection. It is verified exhaustively across all 65,536 input combinations.",
          },
        ],
      },
      {
        heading: "Part 2: parameterized K-bit adder",
        blocks: [
          {
            type: "p",
            text: "The same adder generalized to an arbitrary width using Verilog parameter and generate blocks. The testbench retargets automatically through a command-line parameter override, so the same file verifies the design at K = 3, 6, 7, 8, and 11 without any edits.",
          },
        ],
      },
      {
        heading: "Part 3: leading-zero detector",
        blocks: [
          {
            type: "p",
            text: "Step 1, LZD-4: a flat combinational implementation derived from K-map-minimized Boolean equations, tested exhaustively over all 16 cases.",
          },
          {
            type: "p",
            text: "Step 2, LZD-8: a hierarchical composition of two LZD-4 instances combined through a ternary mux, verified with 4 directed edge cases plus 200 random stimuli.",
          },
        ],
      },
      {
        heading: "Verification and concepts",
        blocks: [
          {
            type: "p",
            text: "Verification leans on self-checking testbenches in three styles: exhaustive, directed, and random. Each testbench uses a reference model written in an independent style from the design under test, so a bug in the design is unlikely to be mirrored by the checker.",
          },
          { type: "p", text: "Concepts practiced across the three parts:" },
          {
            type: "list",
            items: [
              "Structural versus behavioral RTL.",
              "Parameters and generate blocks for width-generic hardware.",
              "Hierarchical design by composing smaller verified modules.",
              "Two's complement overflow detection.",
            ],
          },
          {
            type: "p",
            text: "Tooling is Icarus Verilog with GTKWave for simulation, and Intel Quartus Prime for synthesis and programming to the DE10-Lite.",
          },
        ],
      },
    ],
    keywords: ["Verilog", "Digital Design", "FPGA", "Testbench"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/lwamzeche/Combinational-Logic-Design-Using-Verilog",
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
      "Learning piano by feel, with haptic gloves and projected key guidance that build muscle memory.",
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "p",
            text: "PianoRing is a piano-learning wearable that combines haptic feedback with key-guidance projection so a learner can practice on their own, without an instructor present.",
          },
        ],
      },
      {
        heading: "How it works",
        blocks: [
          {
            type: "p",
            text: "The learner wears a pair of gloves fitted with small vibratory motors and LED indicators. As a piece plays, the motors and LEDs fire in sync with the piano keys that should be pressed, so each finger gets a tactile cue to move and a matching visual cue on the key. Both gloves are driven by a single Arduino that sequences the motors and lights.",
          },
          {
            type: "p",
            text: "Pairing touch with sight is the point. The vibration tells a finger to move while the light shows where, which reinforces the mapping from note to finger more directly than watching a screen alone.",
          },
        ],
      },
      {
        heading: "Goal",
        blocks: [
          {
            type: "p",
            text: "The aim is to build muscle memory and finger coordination during independent practice, lowering the barrier for beginners who do not have constant access to a teacher.",
          },
        ],
      },
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
    sections: [
      {
        heading: "Overview",
        blocks: [
          {
            type: "p",
            text: "Roomie is a roommate-matching mobile app built with Flutter and Firebase. It connects people looking for roommates by matching profiles on shared preferences and living habits, so finding a compatible roommate is less of a gamble.",
          },
        ],
      },
      {
        heading: "How matching works",
        blocks: [
          {
            type: "p",
            text: "New users fill out short surveys that capture their preferences and daily habits, and that data becomes their profile. The matching logic compares profiles and surfaces the people who share the most preferences, presented through a swipeable card interface so browsing potential roommates feels quick and familiar.",
          },
        ],
      },
      {
        heading: "Chat",
        blocks: [
          {
            type: "p",
            text: "Once two people match, an in-app chat lets them talk directly inside the app, backed by Firebase's realtime database so messages arrive instantly.",
          },
        ],
      },
      {
        heading: "Architecture",
        blocks: [
          {
            type: "p",
            text: "The front end is Flutter, and Firebase provides the backend services:",
          },
          {
            type: "table",
            headers: ["Service", "Role"],
            rows: [
              [
                "Cloud Firestore",
                "Stores and retrieves user data and preferences",
              ],
              ["Firebase Auth", "Manages sign-up and authentication"],
              ["Realtime Database", "Powers the chat and live data handling"],
              ["Cloud Storage", "Stores uploaded profile images"],
            ],
          },
          {
            type: "p",
            text: "The app is organized around a main navigation page with tab views and the swipeable cards, dedicated screens for surveys and profiles, the matching logic, and the chat interface.",
          },
        ],
      },
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
        label: "Demo",
        url: "https://drive.google.com/file/d/1duBV3BXTQirWYDLYiGaUR7t_sfzKKJJ3/view?usp=sharing",
      },
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
];

export default projects;
