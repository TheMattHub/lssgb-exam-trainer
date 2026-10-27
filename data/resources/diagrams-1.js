// Resources: diagrams for Define and Measure. Format: docs/CONTENT_GUIDE.md ("Resource format").
// All figures are original drawings (assets/diagrams/dm-*.svg) with invented example content.
// Conventions follow docs/research/iassc-gb-bok.md §4 (e.g. AIAG Gage R&R bands, 6M fishbone in Measure).
RES.add([
  // ---------------------------------------------------------------- General
  {
    id: "dm-dmaic-roadmap",
    phase: "general",
    kind: "diagram",
    title: "DMAIC roadmap",
    topics: ["ss-overview"],
    summary: "The five DMAIC phases with the question each one answers and the tools most often used in it.",
    img: "assets/diagrams/dm-dmaic-roadmap.svg",
    alt: "Five stacked phases. Define: what is the problem and why does it matter; charter, SIPOC, VOC to CTQ tree, stakeholder map. Measure: how big is the problem today, baseline the Y; process map, fishbone, data plan, Gage R&R, capability. Analyze: which root causes (vital Xs) drive the Y; 5 Whys, multi-vari, hypothesis tests. Improve: find, test and implement the fix; solution matrix, DOE or regression, pilot, lean tools. Control: hold the gain and hand over; control plan, SPC charts, poka-yoke, standard work.",
    points: [
      "Exam questions often name a tool and ask for its phase: charter and SIPOC → Define; fishbone, MSA and capability → Measure (IASSC BoK); hypothesis tests → Analyze; DOE and pilots → Improve; SPC and control plan → Control.",
      "Measure establishes the baseline of Y; Analyze finds the vital Xs, so Y = f(X) is the thread through the roadmap.",
      "Each phase closes with a tollgate review where the sponsor decides to go on, rework or stop."
    ]
  },
  // ---------------------------------------------------------------- Define
  {
    id: "dm-ctq-tree",
    phase: "define",
    kind: "diagram",
    title: "CTQ tree",
    topics: ["voc-ctq"],
    summary: "How a vague customer need breaks down into drivers and then into measurable CTQs with specifications.",
    img: "assets/diagrams/dm-ctq-tree.svg",
    alt: "Tree from left to right. Need: reliable home grocery delivery. Drivers: on time, complete order, fresh goods. CTQs: arrival inside the booked 1-hour slot; delay notice sent at least 30 minutes before the slot; at most 1 missing item per 100 orders; substitutions only if the customer agreed; chilled temperature at most 5 °C at handover; at least 3 days of shelf life left on delivery.",
    points: [
      "Read left to right: general need → drivers → specific, measurable CTQs.",
      "A CTQ is only useful when it has a unit and a limit; \"on time\" is a driver, \"inside the booked 1-h slot\" is a CTQ.",
      "CTQs come from VOC (surveys, complaints, interviews) and become the Y the project measures."
    ]
  },
  {
    id: "dm-kano",
    phase: "define",
    kind: "diagram",
    title: "Kano model",
    topics: ["voc-ctq"],
    summary: "Kano's three main need types: how customer satisfaction responds as each kind of need is met more fully.",
    img: "assets/diagrams/dm-kano.svg",
    alt: "Chart with need fulfilment on the horizontal axis (not met to fully met) and satisfaction on the vertical axis (dissatisfied to delighted). A straight rising line is performance: more is better. A curve that stays below neutral and only approaches it when the need is fully met is basic or must-be. A curve that stays near neutral and rises steeply when the need is met is the delighter.",
    points: [
      "Basic (must-be): absence causes strong dissatisfaction, presence only removes it (e.g. a clean hotel room).",
      "Performance: satisfaction rises in proportion to fulfilment (e.g. faster delivery).",
      "Delighter: unexpected; its absence does not hurt, its presence delights. Delighters become basic needs over time."
    ]
  },
  // ---------------------------------------------------------------- Measure: process
  {
    id: "dm-sipoc",
    phase: "measure",
    kind: "diagram",
    title: "SIPOC example: invoice handling",
    topics: ["process-map"],
    summary: "A SIPOC for supplier invoice handling, showing the five columns and a high-level process of five steps.",
    img: "assets/diagrams/dm-sipoc.svg",
    alt: "Five columns. Suppliers: vendors, purchasing, receiving dock. Inputs: vendor invoice, purchase order, goods receipt. Process: receive invoice, scan and register, 3-way match, approve, pay vendor. Outputs: paid invoice, payment advice, ledger entry. Customers: vendors, controller, auditors.",
    points: [
      "SIPOC is a high-level map (4–7 steps) used in Define or early Measure to agree the scope: where the process starts and ends.",
      "Build it from the middle: process first, then outputs and customers, then inputs and suppliers.",
      "One party can be both supplier and customer (here the vendor)."
    ]
  },
  {
    id: "dm-process-map",
    phase: "measure",
    kind: "diagram",
    title: "Process map symbols and swim lanes",
    topics: ["process-map"],
    summary: "The basic flowchart symbols and a short swim-lane map where each lane is one role.",
    img: "assets/diagrams/dm-process-map.svg",
    alt: "Legend: oval for start or end, rectangle for a process step, diamond for a decision, wavy-bottom shape for a document, arrow for flow. Swim lanes for Customer, Service desk and Technician: the customer reports a fault, the desk logs a ticket and decides whether it can be fixed remotely; yes leads to a remote fix, no leads to a technician repair on site; both paths end with the customer confirming the fix.",
    points: [
      "A decision diamond has one input and at least two labelled exits (yes/no).",
      "Swim lanes show who does each step; every arrow that crosses a lane is a hand-off, a common source of delay and errors.",
      "Map the process as it really runs (current state) before drawing the future state."
    ]
  },
  {
    id: "dm-vsm-timeline",
    phase: "measure",
    kind: "diagram",
    title: "Value stream map with timeline",
    topics: ["process-map", "lean-basics"],
    summary: "A four-step value stream with inventory between steps and the timeline used to compute lead time and process cycle efficiency.",
    img: "assets/diagrams/dm-vsm-timeline.svg",
    alt: "Process boxes Cut, Weld, Paint, Pack with cycle times 4, 6, 10 and 2 minutes, and inventory triangles with waits of 4, 8 and 6 hours between them. The timeline ladder shows waiting time on the upper steps and processing time on the lower steps. VA time 22 minutes, lead time 18 hours plus 22 minutes = 1,102 minutes, PCE = 22 ÷ 1,102 ≈ 2%.",
    points: [
      "PCE = value-added time ÷ total lead time. Values below 10% are common in untreated processes.",
      "Most lead time sits in the inventory triangles (waiting), so cutting queues shortens lead time more than speeding up a step.",
      "Data boxes hold per-step facts such as C/T, changeover and uptime; the timeline sums them."
    ]
  },
  {
    id: "dm-fishbone",
    phase: "measure",
    kind: "diagram",
    title: "Fishbone diagram (6M)",
    topics: ["process-map", "multivari"],
    summary: "A cause-and-effect (Ishikawa) diagram with the six M categories and example causes for late invoice payment.",
    img: "assets/diagrams/dm-fishbone.svg",
    alt: "Effect box on the right: invoices paid late. Six bones join the spine. People: new clerks untrained, approver on leave. Method: no approval deadline, manual matching. Machine: scanner misreads, ERP slow at peaks. Material: PO number missing, wrong bank data. Measurement: no ageing report, due date not tracked. Mother Nature: month-end peak, holiday closures.",
    points: [
      "6M = Man (people), Machine, Method, Material, Measurement, Mother Nature (environment). Service processes may use other headings.",
      "The effect (Y) goes in the head; bones list potential causes (Xs).",
      "A fishbone produces hypotheses, not proof: prioritise the causes (e.g. X-Y matrix) and verify them with data.",
      "IASSC places the fishbone in Measure; the course teaches it again in Analyze."
    ]
  },
  // ---------------------------------------------------------------- Measure: statistics
  {
    id: "dm-normal-sigma",
    phase: "measure",
    kind: "diagram",
    title: "Normal curve: areas within ±1, ±2, ±3σ",
    topics: ["distributions", "basic-stats"],
    summary: "The empirical rule for the normal distribution: share of values within one, two and three standard deviations of the mean.",
    img: "assets/diagrams/dm-normal-sigma.svg",
    alt: "Bell curve centred on μ with ticks from −3σ to +3σ. Bands: 34.1% between μ and 1σ on each side, 13.6% between 1σ and 2σ, 2.1% between 2σ and 3σ. Brackets: μ ± 1σ covers 68.27%, μ ± 2σ covers 95.45%, μ ± 3σ covers 99.73%. Outside ±3σ is 0.27% in total.",
    points: [
      "Memorise 68.27 / 95.45 / 99.73%.",
      "Half of the outside share sits in each tail: e.g. 0.135% above +3σ.",
      "The same ±3σ idea gives control limits and the 6σ spread used in Cp."
    ]
  },
  {
    id: "dm-histogram-shapes",
    phase: "measure",
    kind: "diagram",
    title: "Histogram shapes and what they suggest",
    topics: ["basic-stats"],
    summary: "Four common histogram shapes with the usual reading of each.",
    img: "assets/diagrams/dm-histogram-shapes.svg",
    alt: "Four small histograms. Normal: symmetric bell, mean about equal to median and mode, expected for a stable process. Skewed right: long tail to the right, mean greater than median, typical of times bounded at zero. Skewed left: long tail to the left, mean less than median, typical near a maximum such as percent purity. Bimodal: two peaks, two sources mixed such as shifts or machines; stratify the data.",
    points: [
      "Skew is named after the tail, not the peak: tail to the right = right (positively) skewed, mean > median.",
      "For skewed data the median is the better measure of centre.",
      "Two peaks usually mean two populations; split the data by shift, machine or operator before further analysis."
    ]
  },
  {
    id: "dm-boxplot",
    phase: "measure",
    kind: "diagram",
    title: "Box plot anatomy",
    topics: ["basic-stats"],
    summary: "The parts of a box plot and the 1.5 × IQR rule that decides which points are outliers.",
    img: "assets/diagrams/dm-boxplot.svg",
    alt: "Horizontal box plot on a 0 to 45 scale. Box from Q1 = 18 to Q3 = 26 with the median line at 22; IQR = 8. Whiskers run to 12 and 34, the last data points inside the fences. Dashed fences at 6 (Q1 − 1.5 × IQR) and 38 (Q3 + 1.5 × IQR). A point at 42 lies beyond the upper fence and is plotted as an outlier.",
    points: [
      "The box holds the middle 50% of the data (IQR = Q3 − Q1); the line inside is the median, not the mean.",
      "Outlier rule: below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR.",
      "Whiskers end at the last real data point inside the fences, so they rarely reach the fence itself.",
      "Side-by-side box plots are a quick way to compare groups (e.g. operators or shifts)."
    ]
  },
  // ---------------------------------------------------------------- Measure: MSA and capability
  {
    id: "dm-gage-rr",
    phase: "measure",
    kind: "diagram",
    title: "Gage R&R: where the variation comes from",
    topics: ["msa"],
    summary: "How total observed variation splits into part-to-part and measurement variation, and the AIAG bands used to judge a Gage R&R study.",
    img: "assets/diagrams/dm-gage-rr.svg",
    alt: "Tree: total observed variation splits into part-to-part (real process variation) and Gage R&R (measurement system variation); Gage R&R splits into repeatability (same operator, equipment variation) and reproducibility (between operators, appraiser variation). Formulas: σ² total = σ² part + σ² R&R; σ² R&R = σ² repeatability + σ² reproducibility. Decision bands: %Study Var below 10% acceptable, 10 to 30% marginal, above 30% unacceptable; %Contribution below 1% acceptable, 1 to 9% marginal, above 9% unacceptable; ndc at least 5.",
    points: [
      "Variances add, standard deviations do not: %Contribution components sum to 100%, %Study Var components do not.",
      "%Study Var 10% corresponds to %Contribution 1%, and 30% to 9% (square the ratio).",
      "Repeatability (EV) large → fix or maintain the gage; reproducibility (AV) large → train operators and clarify the method.",
      "The course only states \"%GR&R < 30% acceptable\"; the three-band AIAG rule is the safer exam answer."
    ]
  },
  {
    id: "dm-capability",
    phase: "measure",
    kind: "diagram",
    title: "Capability: Cp vs Cpk",
    topics: ["capability"],
    summary: "Three processes against the same specification limits, showing why Cp measures potential and Cpk measures what the process actually delivers.",
    img: "assets/diagrams/dm-capability.svg",
    alt: "Three normal curves between the same LSL and USL. (a) Centred and narrow: Cp 1.67, Cpk 1.67, capable. (b) Same spread but shifted toward the USL: Cp 1.67, Cpk 0.67, a tail falls beyond the USL; shift the mean. (c) Centred but wide: Cp 0.67, Cpk 0.67, tails beyond both limits; reduce the variation.",
    points: [
      "Cp = (USL − LSL) ÷ 6σ ignores where the mean is; Cpk = min(USL − μ, μ − LSL) ÷ 3σ includes it.",
      "Cpk ≤ Cp always; Cpk = Cp only when the process is centred.",
      "High Cp with low Cpk → centring problem (move the mean). Low Cp → spread problem (reduce variation).",
      "Common minimum: Cpk ≥ 1.33."
    ]
  }
]);
