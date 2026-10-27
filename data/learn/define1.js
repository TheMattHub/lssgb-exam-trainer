// Pack "define1": learn pages for the topics whose pack is "define1" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. Conventions: docs/research/iassc-gb-bok.md.
LEARN.add([
  {
    topic: "ss-overview",
    summary: "Six Sigma is a data-driven, customer-focused method that reduces variation and defects using the DMAIC roadmap. Its core idea is Y = f(X): outputs are driven by inputs, so a project finds and controls the vital few Xs. The exam asks about its history, its meanings and who does what.",
    points: [
      "Four meanings: a statistic (σ, standard deviation), a metric (3.4 DPMO at 6σ), a methodology (DMAIC) and a management philosophy.",
      "History: Shewhart (control chart, 1924, Bell Labs; PDCA) → Deming (PDSA, 14 Points) and Juran (Quality Trilogy, Pareto 'vital few') → Motorola (Bill Smith and Mikel Harry, 1986; Baldrige award 1988) → GE under Jack Welch (1995).",
      "DMAIC: Define (charter, SIPOC, VOC/CTQs) → Measure (process map, MSA, baseline, capability) → Analyze (validated root causes) → Improve (solution, pilot, verified results) → Control (control plan, response plan, SPC, handoff).",
      "Y = f(X1, X2, …, Xn) + ε. Y = output, effect, KPOV, dependent variable. X = input, cause, KPIV, independent variable.",
      "To change or control Y, control the Xs. Inspecting or reporting Y alone does not change it.",
      "Champion/sponsor: senior manager who selects and owns projects, provides resources and removes barriers.",
      "Master Black Belt: expert coach and trainer of Belts; owns the methodology and programme.",
      "Black Belt: usually full-time; leads complex, cross-functional projects; mentors Green Belts.",
      "Green Belt: part-time; leads smaller projects in their own area or supports a Black Belt.",
      "Yellow Belt: team member with basic tools. Process owner: runs the process and receives the control plan at closure."
    ],
    formulas: [{ name: "Problem-solving equation", f: "Y = f(X₁, X₂, …, Xₙ) + ε" }],
    table: {
      title: "Six Sigma roles",
      head: ["Role", "Main job"],
      rows: [
        ["Executive leadership", "Vision, priorities, resources"],
        ["Champion / sponsor", "Selects and owns projects, removes barriers"],
        ["Master Black Belt", "Coaches and trains Belts, programme expert"],
        ["Black Belt", "Full-time project leader, mentors GBs"],
        ["Green Belt", "Part-time leader of smaller projects"],
        ["Yellow Belt", "Team member, basic tools"],
        ["Process owner", "Runs the process, owns the control plan"]
      ]
    },
    traps: [
      "Motorola originated Six Sigma (1986); GE (1995) popularised it. Toyota is Lean, not Six Sigma.",
      "Juran = Quality Trilogy and Pareto in quality; Deming = 14 Points and PDSA; Shewhart = control chart and PDCA.",
      "Champion vs process owner: the Champion sponsors the project; the process owner takes over the improved process.",
      "X is the cause and Y the effect. Answers that act on Y directly (more inspection, tighter targets) miss the point of Y = f(X)."
    ],
    terms: [
      { term: "KPIV", def: "Key process input variable: an X that strongly affects the output." },
      { term: "KPOV", def: "Key process output variable: a Y the customer or business cares about." },
      { term: "DMAIC", def: "Define, Measure, Analyze, Improve, Control: the Six Sigma roadmap for improving an existing process." }
    ]
  },
  {
    topic: "lean-basics",
    summary: "Lean comes from the Toyota Production System and aims to deliver customer value with the least waste and the fastest flow. A Green Belt must classify activities as value-added or not, name the seven wastes and know the 5S steps. Lean targets waste and speed; Six Sigma targets variation and defects.",
    points: [
      "History: Ford's flow line (1913) → Toyota Production System (Taiichi Ohno; Shigeo Shingo added SMED and poka-yoke) → the word 'Lean' (John Krafcik, 1988) → The Machine That Changed the World (Womack, Jones, Roos, 1990) → Lean Thinking (1996).",
      "Five Lean principles in order: value, value stream, flow, pull, perfection.",
      "Value-added: changes form, fit or function, the customer would pay for it, and it is done right first time.",
      "Non-value-added but required (business value-added): e.g. regulatory inspection. Minimise it; do not simply delete it.",
      "Seven wastes (IASSC names): Overproduction, Correction (defects), Inventory, Motion, Overprocessing, Conveyance (transport), Waiting.",
      "Overproduction is called the worst waste because it creates inventory, handling and waiting and hides problems.",
      "Eighth waste: non-utilised skills and talent (the S in DOWNTIME). It is a later addition; the IASSC BoK lists seven.",
      "Motion moves people (reaching, walking); conveyance moves material or products.",
      "3 Ms: muda (waste), mura (unevenness), muri (overburden).",
      "5S: Sort (red tags), Straighten / Set in order (a place for everything, shadow boards), Shine (clean and inspect), Standardize (rules, schedules), Self-Discipline / Sustain (habit, audits; the hardest step)."
    ],
    table: {
      title: "Seven wastes: IASSC name, other names, example",
      head: ["IASSC name", "Also called", "Example"],
      rows: [
        ["Overproduction", "Making too much / too early", "Building 1,000 units for an order of 600"],
        ["Correction", "Defects, rework, scrap", "Re-keying a wrong invoice"],
        ["Inventory", "Excess stock, WIP", "Pallets of parts between operations"],
        ["Motion", "Unnecessary movement of people", "Walking to a far cabinet for tools"],
        ["Overprocessing", "Excess processing", "Polishing a hidden surface"],
        ["Conveyance", "Transport", "Moving goods to a remote store and back"],
        ["Waiting", "Idle time, queues", "Forms waiting for a signature"]
      ]
    },
    traps: [
      "'Correction' (IASSC) = defects; 'Conveyance' (IASSC) = transport. Same wastes, different names.",
      "Motion is people moving; conveyance is things moving.",
      "Inspection is not value-added, even when required.",
      "5S step 5 is Self-Discipline (IASSC) or Sustain: same step. 'Safety' is a sixth S, not part of 5S.",
      "Sort comes before Straighten: remove what is not needed, then arrange what is left."
    ],
    terms: [
      { term: "TPS", def: "Toyota Production System: the origin of Lean (just-in-time and jidoka)." },
      { term: "Pull", def: "Producing only when the downstream customer signals demand." },
      { term: "Muda / Mura / Muri", def: "Waste / unevenness / overburden." }
    ]
  },
  {
    topic: "ss-metrics",
    summary: "Six Sigma metrics express how often a process fails and how much that costs. Expect short calculations of DPU, DPMO, FTY, RTY, takt time and process cycle efficiency, conversion of DPMO to a sigma level, and classification of quality costs. Pareto analysis picks which problem to attack first.",
    points: [
      "Defect = any nonconformity with a requirement. Defective = a unit with one or more defects. One unit can hold many defects but is one defective.",
      "Opportunity = a chance for a defect; count only the opportunities that matter to the customer and keep the definition fixed.",
      "DPMO lets you compare processes of different complexity; DPU does not account for opportunities.",
      "FTY counts only units that pass first time with no rework. Final (traditional) yield counts reworked units as good, so it hides the 'hidden factory'.",
      "RTY is the probability a unit passes all steps first time: multiply the step FTYs. It is always ≤ the lowest step FTY.",
      "Sigma table (with 1.5σ shift): 6σ = 3.4; 5σ = 233; 4σ = 6,210; 3σ = 66,807; 2σ = 308,538 DPMO. Z_LT = Z_ST − 1.5.",
      "Takt time = available time ÷ demand. Cycle time = time to complete one unit at a step. Lead time = total time a unit spends in the process. If a step's cycle time > takt, demand cannot be met.",
      "Cost of quality (ASQ): cost of good quality = prevention + appraisal; cost of poor quality (COPQ) = internal failure + external failure. External failure is the most expensive; investing in prevention lowers the total.",
      "Pareto chart: categories in descending order plus a cumulative % line; roughly 80% of effects come from 20% of causes. A flat Pareto means re-stratify (by cost, shift, product…)."
    ],
    formulas: [
      { name: "DPU", f: "DPU = defects ÷ units" },
      { name: "DPO", f: "DPO = defects ÷ (units × opportunities per unit)" },
      { name: "DPMO", f: "DPMO = DPO × 1,000,000" },
      { name: "First-time yield", f: "FTY = units passing first time ÷ units entering ≈ e^(−DPU)" },
      { name: "Rolled throughput yield", f: "RTY = FTY₁ × FTY₂ × … × FTYₙ" },
      { name: "Takt time", f: "Takt = available production time ÷ customer demand" },
      { name: "Little's Law", f: "Lead time = WIP ÷ throughput" },
      { name: "Process cycle efficiency", f: "PCE = value-added time ÷ total lead time" }
    ],
    table: {
      title: "Cost of quality categories",
      head: ["Category", "Group", "Examples"],
      rows: [
        ["Prevention", "Good quality", "Training, planning, poka-yoke, design reviews"],
        ["Appraisal", "Good quality", "Inspection, testing, audits, calibration"],
        ["Internal failure", "Poor quality", "Scrap, rework, re-inspection, downtime"],
        ["External failure", "Poor quality", "Warranty, returns, complaints, lost customers"]
      ]
    },
    traps: [
      "DPU uses defects; proportion defective uses defective units. Read which count the stem gives.",
      "DPMO must include opportunities per unit; DPU × 10⁶ is not DPMO.",
      "RTY multiplies yields; it does not average them, and adding the losses is only an approximation.",
      "Takt uses available time (minus breaks) and is set by demand; it is not a property of the process.",
      "Appraisal (inspection, calibration) is a cost of good quality in the ASQ model, not COPQ."
    ],
    terms: [
      { term: "Hidden factory", def: "Rework and repair loops that do not show in final yield." },
      { term: "Sigma level", def: "Z value of a process, read from a DPMO table that includes the 1.5σ shift." },
      { term: "Throughput yield", def: "Course term for the yield of one step, estimated as e^(−DPU)." }
    ]
  },
  {
    topic: "dfss",
    summary: "Design for Six Sigma (DFSS) builds quality into a new product, service or process instead of fixing an existing one. It is outside the IASSC Green Belt Body of Knowledge, so treat it as background: know the roadmaps and when to choose DFSS over DMAIC.",
    points: [
      "DMAIC improves an existing process; DFSS designs a new one or redesigns a process that cannot meet CTQs even when optimised.",
      "DMADV: Define, Measure, Analyze, Design, Verify. Design and Verify replace Improve and Control.",
      "IDOV: Identify, Design, Optimize, Validate (some texts: Verify). Common for new product design.",
      "Both DFSS and DMAIC aim for Six Sigma performance and share many tools.",
      "Typical DFSS tools: QFD / House of Quality (customer needs → technical requirements), design FMEA, simulation, tolerance design.",
      "DFSS projects usually take longer and address all customer needs; DMAIC projects focus on one or two CTQs."
    ],
    traps: [
      "DMAIC is not a DFSS roadmap.",
      "Optimize and Validate are IDOV phases; Design and Verify are DMADV phases.",
      "Choosing DFSS needs a reason: a new design, or a current design that limits capability, not just a hard problem."
    ],
    terms: [
      { term: "QFD", def: "Quality Function Deployment: a matrix method linking customer requirements to design characteristics." },
      { term: "House of Quality", def: "The first QFD matrix: customer needs, technical requirements, relationships, roof (correlations) and targets." }
    ]
  }
]);
