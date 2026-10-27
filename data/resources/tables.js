// Resources: reference tables, cheat sheets and worked examples. Format: docs/CONTENT_GUIDE.md ("Resource format").
// All tables and examples are original. Statistical values were generated with scipy (normal, t, χ²) and the
// control chart constants were computed from the range and c4 distributions, then checked against the
// published ASTM/NIST values. Conventions follow docs/research/iassc-gb-bok.md §4.
RES.add([
  // ---------------------------------------------------------------- General
  {
    id: "sigma-dpmo-yield",
    phase: "general",
    kind: "table",
    title: "Sigma level, DPMO and yield (with and without the 1.5σ shift)",
    topics: ["ss-metrics", "capability"],
    summary: "Converts between sigma level, defects per million opportunities and yield. The IASSC convention is the shifted column: 6σ = 3.4 DPMO.",
    table: {
      head: ["Sigma level (short-term Z)", "DPMO with 1.5σ shift", "Yield with shift", "DPMO without shift (centred, both tails)", "Yield without shift"],
      rows: [
        ["1.0", "691,462", "30.85%", "317,311", "68.27%"],
        ["1.5", "500,000", "50.00%", "133,614", "86.64%"],
        ["2.0", "308,538", "69.15%", "45,500", "95.45%"],
        ["2.5", "158,655", "84.13%", "12,419", "98.76%"],
        ["3.0", "66,807", "93.32%", "2,700", "99.73%"],
        ["3.5", "22,750", "97.73%", "465", "99.953%"],
        ["4.0", "6,210", "99.379%", "63", "99.9937%"],
        ["4.5", "1,350", "99.865%", "6.8", "99.99932%"],
        ["5.0", "233", "99.977%", "0.57", "99.999943%"],
        ["5.5", "32", "99.9968%", "0.038", "99.9999962%"],
        ["6.0", "3.4", "99.99966%", "0.002", "99.9999998%"]
      ],
      note: "With shift: DPMO = (1 − Φ(Z − 1.5)) × 1,000,000, one tail (the shifted mean puts almost all defects on one side). Without shift: DPMO = 2 × (1 − Φ(Z)) × 1,000,000. Yield = 1 − DPMO/1,000,000."
    },
    points: [
      "Memorise the shifted anchors: 3σ = 66,807; 4σ = 6,210; 5σ = 233; 6σ = 3.4 DPMO.",
      "The shift converts short-term (Z_ST) to long-term (Z_LT): Z_LT = Z_ST − 1.5. A 6σ process behaves like 4.5σ in the long run, and 4.5σ one-tailed is 3.4 ppm.",
      "From DPMO to sigma level: find Z_LT for the tail area DPMO/1,000,000, then add 1.5.",
      "Without the shift, ±3σ leaves 2,700 ppm out (99.73% inside): the same figure used for 3σ control limits."
    ]
  },
  {
    id: "dmaic-roadmap",
    phase: "general",
    kind: "cheatsheet",
    title: "DMAIC at a glance: purpose, tools, deliverables",
    topics: ["ss-overview", "project-select", "process-map", "msa", "capability", "multivari", "hyp-concepts", "regression", "control-plan", "spc"],
    summary: "One row per phase: the question it answers, the tools the IASSC Green Belt Body of Knowledge places there and what must exist at the tollgate.",
    table: {
      head: ["Phase", "Question it answers", "Key tools (IASSC GB placement)", "Tollgate deliverables"],
      rows: [
        ["Define", "What is the problem, for whom, and is it worth solving?", "Charter, VOC/VOB/VOE, CTQ tree, stakeholder analysis, COPQ, Pareto, 7 wastes and 5S concepts", "Signed charter (problem and goal statements, scope, team, metrics, savings estimate), SIPOC, CTQs"],
        ["Measure", "How big is the problem today, and can we trust the data?", "SIPOC, detailed process map, VSM, fishbone, X-Y matrix, FMEA, descriptive statistics, normality, MSA / Gage R&R, capability", "Validated measurement system, baseline performance and capability, list of potential Xs"],
        ["Analyze", "Which Xs really drive Y?", "Multi-vari, sampling, confidence intervals, hypothesis tests (t, ANOVA, non-parametric, proportion, χ²)", "Root causes (vital few Xs) confirmed with data"],
        ["Improve", "How does Y depend on the Xs, and what change fixes it?", "Correlation, simple and multiple regression, residual analysis, Box-Cox; (DOE is Black Belt scope); pilot", "Y = f(X) model, solution piloted, improvement verified with data"],
        ["Control", "How do we keep the gain?", "5S, Kanban, poka-yoke, SPC charts (I-MR, Xbar-R, Xbar-S, p, np, c, u, CUSUM, EWMA), control and response plans", "Control plan, response plan, SPC in place, handoff to process owner, verified savings, lessons learned"]
      ]
    },
    points: [
      "Order inside Measure: validate the gage, then collect baseline data, check stability, then capability.",
      "IASSC puts fishbone, X-Y matrix and FMEA in Measure (the course teaches fishbone in Analyze).",
      "Analyze proves causes; Improve quantifies Y = f(X) and changes the process. A solution chosen before root causes are proven skips Analyze.",
      "Control ends with the process owner owning the control plan, not the Green Belt."
    ]
  },
  // ---------------------------------------------------------------- Define
  {
    id: "formulas-define",
    phase: "define",
    kind: "cheatsheet",
    title: "Formula sheet: Define and lean metrics",
    topics: ["ss-metrics", "lean-basics", "project-select"],
    summary: "Every metric formula the Define phase and lean questions use, in one place.",
    table: {
      head: ["Metric", "Formula", "Remember"],
      rows: [
        ["DPU", "defects ÷ units", "Can exceed 1: one unit may carry several defects"],
        ["DPO", "defects ÷ (units × opportunities per unit)", "Opportunities must be defined before counting"],
        ["DPMO", "DPO × 1,000,000", "Convert to sigma level with the shifted table"],
        ["FTY (first-time yield)", "units right first time ÷ units entering a step; ≈ e^(−DPU)", "Reworked units count as failures"],
        ["RTY", "FTY₁ × FTY₂ × … × FTYₙ", "Always ≤ the lowest step FTY"],
        ["Final (traditional) yield", "units out ÷ units in", "Hides rework (the hidden factory), so it exceeds RTY"],
        ["Takt time", "available production time ÷ customer demand", "Time between units the customer requires; breaks excluded"],
        ["Little's law", "lead time = WIP ÷ throughput", "Cut WIP to cut lead time at the same throughput"],
        ["Process cycle efficiency", "value-added time ÷ total lead time", "Below 10% is common in unimproved processes"],
        ["OEE", "availability × performance × quality", "Check: good units × ideal cycle time ÷ planned time"],
        ["ROI", "net benefit ÷ cost", "Hard savings only, validated by finance"],
        ["Payback period", "investment ÷ annual saving", "Shorter is better"]
      ]
    },
    points: [
      "DPU uses units; DPO and DPMO use opportunities. Read the stem for 'per unit' or 'per opportunity'.",
      "Takt is set by demand; cycle time is set by the process. Cycle time > takt means the customer is not served.",
      "Some sources swap the FTY/FPY names; follow what the question says to count."
    ]
  },
  {
    id: "wastes-mapping",
    phase: "define",
    kind: "table",
    title: "Seven wastes: IASSC names vs TIMWOODS and DOWNTIME",
    topics: ["lean-basics"],
    summary: "Maps the seven IASSC waste names to the two common acronyms and gives the lean countermeasure most often paired with each.",
    table: {
      head: ["IASSC name", "TIMWOODS letter", "DOWNTIME letter", "Typical countermeasure"],
      rows: [
        ["Overproduction", "O (Overproduction)", "O (Overproduction)", "Pull system, Kanban, produce to takt"],
        ["Correction", "D (Defects)", "D (Defects)", "Poka-yoke, root cause analysis, standard work"],
        ["Inventory", "I (Inventory)", "I (Inventory)", "Pull, smaller batches, SMED"],
        ["Motion", "M (Motion)", "M (Motion)", "5S, workplace layout, point-of-use storage"],
        ["Overprocessing", "O (Over-processing)", "E (Extra-processing)", "Define value from VOC/CTQs; remove steps the customer does not need"],
        ["Conveyance", "T (Transport)", "T (Transportation)", "Cell layout, co-locate sequential steps"],
        ["Waiting", "W (Waiting)", "W (Waiting)", "Line balancing, SMED, TPM"],
        ["(not in the IASSC seven)", "S (Skills)", "N (Non-utilised talent)", "Involve operators in kaizen and suggestion schemes"]
      ],
      note: "TIMWOODS = Transport, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects, Skills. DOWNTIME = Defects, Overproduction, Waiting, Non-utilised talent, Transportation, Inventory, Motion, Extra-processing."
    },
    points: [
      "The IASSC BoK lists seven wastes; the eighth (unused talent) is a later addition.",
      "Overproduction is called the worst waste because it creates inventory, conveyance and waiting.",
      "Motion = people moving; conveyance = materials or information moving."
    ]
  },
  {
    id: "five-s-steps",
    phase: "define",
    kind: "table",
    title: "5S: steps, names and how each is controlled",
    topics: ["lean-basics", "lean-control"],
    summary: "The five steps in order with the Japanese term, the alternative English names, what is done and the control method used to hold it (BoK 5.1.1).",
    table: {
      head: ["Step (IASSC)", "Japanese", "Also called", "What you do", "Control method"],
      rows: [
        ["1 Sort", "Seiri", "Sift, clear out", "Remove everything not needed; red-tag doubtful items", "Red-tag holding area with a disposal deadline; periodic re-sort"],
        ["2 Straighten", "Seiton", "Set in order", "A place for everything, everything in its place", "Shadow boards, labels, floor marking, photos of the standard state"],
        ["3 Shine", "Seiso", "Sweep, scrub", "Clean and inspect; cleaning reveals leaks and wear", "Cleaning schedule and checklist with owners"],
        ["4 Standardize", "Seiketsu", "Standardise", "Turn steps 1–3 into routine standards", "Written standards, visual controls, colour coding"],
        ["5 Self-Discipline", "Shitsuke", "Sustain", "Make the standards a habit", "Scored 5S audits, management walk-throughs, audit trend charts"]
      ]
    },
    points: [
      "Order matters: you cannot set in order what you have not sorted.",
      "Sustain (Self-Discipline) is the hardest step.",
      "Seiton is Straighten / Set in order, not 'Stabilize' (a course slip).",
      "6S adds Safety; do not treat it as one of the IASSC five."
    ]
  },
  {
    id: "dpmo-sigma-worked",
    phase: "define",
    kind: "example",
    title: "Worked example: DPU, DPMO and sigma level",
    topics: ["ss-metrics", "capability"],
    summary: "From a defect count to DPU, DPMO and the sigma level with the 1.5σ shift.",
    steps: [
      { label: "Given", text: "A billing team checks 2,500 invoices. Each invoice has 5 fields that can be wrong (5 opportunities). The audit finds 150 errors." },
      { label: "DPU", text: "DPU = 150 ÷ 2,500 = 0.06 defects per invoice." },
      { label: "DPO and DPMO", text: "Opportunities = 2,500 × 5 = 12,500.\nDPO = 150 ÷ 12,500 = 0.012.\nDPMO = 0.012 × 1,000,000 = 12,000." },
      { label: "Long-term Z", text: "Tail area 0.012 → Z_LT = Φ⁻¹(1 − 0.012) = 2.26." },
      { label: "Sigma level", text: "Z_ST = Z_LT + 1.5 = 2.26 + 1.5 = 3.76." },
      { label: "Answer", text: "DPMO = 12,000, about 3.8σ. Check with the table: it lies between 3.5σ (22,750) and 4σ (6,210)." }
    ],
    points: [
      "Using units instead of opportunities would give 60,000 'DPMO' and about 3.1σ: a classic wrong option.",
      "On the exam you normally bracket the answer from the table rather than compute Φ⁻¹."
    ]
  },
  {
    id: "rty-worked",
    phase: "define",
    kind: "example",
    title: "Worked example: rolled throughput yield across three steps",
    topics: ["ss-metrics"],
    summary: "Shows why RTY is lower than the yield reported at the end of the line.",
    steps: [
      { label: "Given", text: "A three-step assembly line. First-time yields: step 1 = 95%, step 2 = 92%, step 3 = 97%. Failed units are reworked and almost all are eventually shipped; final yield is 99%." },
      { label: "RTY", text: "RTY = 0.95 × 0.92 × 0.97 = 0.8478 → 84.8%." },
      { label: "Hidden factory", text: "Final yield 99% − RTY 84.8%: about 14 units in every 100 need at least one rework loop that the final yield does not show." },
      { label: "Total DPU (Poisson)", text: "DPU ≈ −ln(RTY) = −ln(0.8478) = 0.165 defects per unit across the line." },
      { label: "Answer", text: "RTY = 84.8%. Only about 85 of 100 units pass all three steps right first time." }
    ],
    points: [
      "RTY is always below the worst step FTY (here 92%).",
      "Adding steps lowers RTY even if every step is good: 10 steps at 99% give 90.4%."
    ]
  },
  {
    id: "takt-pce-worked",
    phase: "define",
    kind: "example",
    title: "Worked example: takt time, Little's law and process cycle efficiency",
    topics: ["lean-basics", "ss-metrics"],
    summary: "Computes takt from demand, lead time from WIP and the share of lead time that adds value.",
    steps: [
      { label: "Given", text: "One 8-hour shift with two 15-minute breaks and a 30-minute team meeting. Customer demand: 420 units per shift. WIP in the process: 300 units. Value-added work per unit: 12 minutes." },
      { label: "Available time", text: "480 − 30 − 30 = 420 minutes = 25,200 seconds." },
      { label: "Takt time", text: "25,200 s ÷ 420 units = 60 s per unit." },
      { label: "Lead time (Little's law)", text: "If the line keeps pace with takt, throughput = 1 unit per 60 s.\nLead time = WIP ÷ throughput = 300 × 60 s = 18,000 s = 300 minutes." },
      { label: "PCE", text: "PCE = 12 min ÷ 300 min = 0.04 → 4%." },
      { label: "Answer", text: "Takt = 60 s. Lead time = 5 hours. Only 4% of that time adds value; the rest is mostly waiting in WIP." }
    ],
    points: [
      "Breaks and planned meetings are taken out of available time; demand is not adjusted.",
      "To shorten lead time without changing throughput, reduce WIP (pull, smaller batches)."
    ]
  },
  {
    id: "oee-worked",
    phase: "define",
    kind: "example",
    title: "Worked example: overall equipment effectiveness (OEE)",
    topics: ["lean-basics", "lean-control"],
    summary: "Splits equipment losses into availability, performance and quality.",
    steps: [
      { label: "Given", text: "Planned production time 480 min. Breakdowns and changeovers 48 min. Ideal cycle time 0.5 min per unit. Units produced 810, of which 770 good." },
      { label: "Availability", text: "Run time = 480 − 48 = 432 min. Availability = 432 ÷ 480 = 0.900." },
      { label: "Performance", text: "Performance = (810 × 0.5) ÷ 432 = 405 ÷ 432 = 0.9375." },
      { label: "Quality", text: "Quality = 770 ÷ 810 = 0.9506." },
      { label: "OEE", text: "OEE = 0.900 × 0.9375 × 0.9506 = 0.802 → 80.2%.\nCheck: 770 × 0.5 ÷ 480 = 0.802." },
      { label: "Answer", text: "OEE ≈ 80%. The biggest loss is availability (10%), so SMED and TPM come first." }
    ],
    points: [
      "Availability = downtime losses; performance = speed losses and minor stops; quality = scrap and rework.",
      "About 85% is an often-cited benchmark for good OEE, not a standard."
    ]
  },
  // ---------------------------------------------------------------- Measure
  {
    id: "z-table",
    phase: "measure",
    kind: "table",
    title: "Standard normal areas for common Z values",
    topics: ["distributions", "basic-stats", "capability", "inferential"],
    summary: "Areas under the standard normal curve for the Z values that appear in capability, confidence interval and hypothesis questions.",
    table: {
      head: ["Z", "Area left of Z", "Area right of Z (one tail)", "Area within ±Z", "Area outside ±Z (two tails)", "Where it is used"],
      rows: [
        ["0.50", "0.69146", "0.30854", "0.38292", "0.61708", "−"],
        ["1.00", "0.84134", "0.15866", "0.68269", "0.31731", "Empirical rule: 68%"],
        ["1.28", "0.89973", "0.10027", "0.79945", "0.20055", "One-tailed α = 0.10"],
        ["1.50", "0.93319", "0.06681", "0.86639", "0.13361", "Size of the long-term shift"],
        ["1.645", "0.95002", "0.04998", "0.90003", "0.09997", "One-tailed α = 0.05; 90% CI"],
        ["1.96", "0.97500", "0.02500", "0.95000", "0.05000", "95% CI; two-tailed α = 0.05"],
        ["2.00", "0.97725", "0.02275", "0.95450", "0.04550", "Empirical rule: 95%"],
        ["2.326", "0.98999", "0.01001", "0.97998", "0.02002", "One-tailed α = 0.01"],
        ["2.576", "0.99500", "0.00500", "0.99000", "0.01000", "99% CI; two-tailed α = 0.01"],
        ["3.00", "0.99865", "0.00135", "0.99730", "0.00270", "Control limits; empirical rule 99.7%"],
        ["3.50", "0.999767", "0.000233", "0.999535", "0.000465", "−"],
        ["4.00", "0.9999683", "0.0000317", "0.9999367", "0.0000633", "Cpk = 1.33"],
        ["4.50", "0.9999966", "0.0000034", "0.9999932", "0.0000068", "3.4 ppm: 6σ with shift"]
      ],
      note: "Z = (x − μ) ÷ σ. Right tail = 1 − left area. Two tails = 2 × right tail. Values generated with scipy.stats.norm."
    },
    points: [
      "Fraction above a limit: Z = (USL − μ) ÷ σ, then read the right tail.",
      "Know 1.645, 1.96 and 2.576 by heart: 90%, 95% and 99% two-sided confidence.",
      "A negative Z has left area = 1 − (left area of +Z)."
    ]
  },
  {
    id: "cpk-ppm-bands",
    phase: "measure",
    kind: "table",
    title: "Cpk bands: verdict and expected parts out of specification",
    topics: ["capability"],
    summary: "What a given Cpk means in words and in parts per million outside the specification, assuming normal data and a stable process (no shift).",
    table: {
      head: ["Cpk", "Z to nearest limit (3 × Cpk)", "PPM beyond nearest limit", "PPM total if centred (both limits)", "Usual verdict"],
      rows: [
        ["< 0", "< 0", "> 500,000", "−", "Mean outside the specification"],
        ["0.33", "1", "158,655", "317,311", "Not capable"],
        ["0.67", "2", "22,750", "45,500", "Not capable"],
        ["1.00", "3", "1,350", "2,700", "Barely capable: nearest limit exactly 3σ from the mean"],
        ["1.33", "4", "32", "63", "Common minimum for existing processes"],
        ["1.67", "5", "0.29", "0.57", "Target for new or critical / safety characteristics"],
        ["2.00", "6", "0.001", "0.002", "Six sigma short-term (with 1.5σ shift: 3.4 DPMO)"]
      ],
      note: "PPM computed as (1 − Φ(3 × Cpk)) × 10⁶ per tail; Cpk rounded (0.33 = 1/3 etc.). Use the same bands for Ppk with overall σ."
    },
    points: [
      "Cp − Cpk large → the process is off centre: re-centre the mean before cutting variation.",
      "Cp and Cpk both low → too much variation: reduce σ.",
      "Cpk much higher than Ppk → the process drifts between subgroups (special causes over time).",
      "Capability means nothing for an unstable process; check the control chart first."
    ]
  },
  {
    id: "formulas-measure",
    phase: "measure",
    kind: "cheatsheet",
    title: "Formula sheet: Measure phase",
    topics: ["basic-stats", "distributions", "msa", "capability", "process-map"],
    summary: "Descriptive statistics, distribution, MSA, capability and FMEA formulas for the Measure phase.",
    table: {
      head: ["Quantity", "Formula", "Remember"],
      rows: [
        ["Sample mean", "x̄ = Σx ÷ n", "Pulled by outliers; the median is not"],
        ["Sample standard deviation", "s = √(Σ(x − x̄)² ÷ (n − 1))", "n − 1 for a sample, N for a population"],
        ["Variance", "s²", "Variances add; standard deviations do not"],
        ["Z-score", "Z = (x − μ) ÷ σ", "Distance from the mean in σ units"],
        ["Binomial", "mean = np; variance = np(1 − p)", "Defectives: pass/fail in n trials"],
        ["Poisson", "mean = variance = λ", "Defects per unit, area or time"],
        ["Within (short-term) σ", "σ_within = R̄ ÷ d₂ (or MR̄ ÷ 1.128)", "From subgroups; used for Cp and Cpk"],
        ["Cp / Pp", "(USL − LSL) ÷ 6σ", "Within σ for Cp, overall s for Pp; ignores centring"],
        ["Cpk / Ppk", "min(USL − μ, μ − LSL) ÷ 3σ", "Within σ for Cpk, overall s for Ppk"],
        ["One-sided spec", "Cpu = (USL − μ) ÷ 3σ; Cpl = (μ − LSL) ÷ 3σ", "Cp is undefined with one limit"],
        ["Sigma level", "Z_ST ≈ 3 × Cpk; Z_LT = Z_ST − 1.5", "Subtract the shift for long-term"],
        ["Gage variance", "σ²_total = σ²_part + σ²_GRR; σ²_GRR = σ²_repeat + σ²_reprod", "Add variances, never σ"],
        ["%Study Var", "100 × σ_GRR ÷ σ_total", "Rows do not add to 100%"],
        ["%Contribution", "100 × σ²_GRR ÷ σ²_total", "Rows add to 100%"],
        ["%Tolerance (P/T)", "100 × 6σ_GRR ÷ (USL − LSL)", "Older texts: 5.15σ_GRR"],
        ["ndc", "1.41 × σ_part ÷ σ_GRR, truncated", "≥ 5 acceptable"],
        ["Kappa", "(P_observed − P_chance) ÷ (1 − P_chance)", "≥ 0.75 acceptable; 1 = perfect"],
        ["RPN", "Severity × Occurrence × Detection", "Each 1–10; Detection 10 = cannot detect"]
      ]
    },
    points: [
      "Cp/Pp divide by 6σ; Cpk/Ppk divide by 3σ.",
      "%Study Var 20% equals %Contribution 4%: square the ratio, don't copy the number."
    ]
  },
  {
    id: "graph-selector",
    phase: "measure",
    kind: "cheatsheet",
    title: "Which graph when",
    topics: ["basic-stats", "multivari", "ss-metrics", "correlation"],
    summary: "Pick the graph from the question you are asking and the type of data you have.",
    table: {
      head: ["Question you are asking", "Data", "Graph", "What to look for"],
      rows: [
        ["What shape, centre and spread does it have?", "One continuous variable, n ≥ about 30", "Histogram", "Skew, two peaks (mixed populations), values beyond specs"],
        ["How do groups compare? Any outliers?", "Continuous Y by category", "Box plot", "Median line, box = IQR, whiskers to 1.5 × IQR, dots = outliers"],
        ["Few values: where do they fall?", "Small continuous sample", "Dot plot", "Clusters and gaps"],
        ["Is it normal?", "One continuous variable", "Normal probability plot", "Points on a straight line; check the p-value"],
        ["Which category matters most?", "Counts or cost by category", "Pareto chart", "Tallest bars up to about 80% cumulative"],
        ["Does it change over time?", "Values in time order", "Run chart (time series)", "Trends, shifts, cycles; add limits to make a control chart"],
        ["Are two variables related?", "Two continuous variables", "Scatter plot", "Direction, strength, curvature, outliers"],
        ["Which family of variation is biggest?", "Continuous Y; positional, cyclical and time factors", "Multi-vari chart", "Largest spread within piece, piece-to-piece or time-to-time"],
        ["Is it stable and predictable?", "Values in time order with limits", "Control chart", "Points beyond limits and run-rule signals"]
      ]
    },
    points: [
      "Pareto needs categorical counts; a histogram needs continuous data. Confusing them is a common distractor.",
      "A scatter plot shows association, not cause.",
      "A flat Pareto (no dominant bar) means the data should be stratified another way."
    ]
  },
  {
    id: "fmea-worked",
    phase: "measure",
    kind: "example",
    title: "Worked example: ranking failure modes with RPN",
    topics: ["process-map"],
    summary: "Computes RPN for four failure modes and shows why a severity-10 mode is acted on first despite the lowest RPN.",
    steps: [
      { label: "Given", text: "Process FMEA for a filling line (S, O, D each 1–10).\nA: under-fill — S 6, O 5, D 5.\nB: label skewed — S 4, O 7, D 6.\nC: cap loose — S 7, O 4, D 3.\nD: glass fragment in product — S 10, O 2, D 3." },
      { label: "RPN", text: "A = 6 × 5 × 5 = 150.\nB = 4 × 7 × 6 = 168.\nC = 7 × 4 × 3 = 84.\nD = 10 × 2 × 3 = 60." },
      { label: "Rank by RPN", text: "B (168) > A (150) > C (84) > D (60)." },
      { label: "Apply the severity rule", text: "D has severity 10 (hazard to the customer). Severity 9–10 needs action whatever the RPN, so D is addressed first, then B and A." },
      { label: "Answer", text: "Action order: D, B, A, then C. After actions, re-score O and D and recompute RPN; S changes only with a design change." }
    ],
    points: [
      "Detection 10 means the failure is almost impossible to detect (high risk), not 'easy to detect'.",
      "Equal RPNs can hide very different risks: always look at S on its own."
    ]
  },
  {
    id: "grr-worked",
    phase: "measure",
    kind: "example",
    title: "Worked example: reading a Gage R&R study",
    topics: ["msa"],
    summary: "From ANOVA variance components to %Contribution, %Study Var, %Tolerance, ndc and a verdict.",
    steps: [
      { label: "Given", text: "Crossed study, 10 parts × 3 operators × 3 trials. Variance components (mm²): repeatability 0.0016, reproducibility 0.0009, part-to-part 0.0375. Tolerance = 1.5 mm." },
      { label: "Add variances", text: "σ²_GRR = 0.0016 + 0.0009 = 0.0025 → σ_GRR = 0.05.\nσ²_total = 0.0025 + 0.0375 = 0.0400 → σ_total = 0.20." },
      { label: "%Contribution", text: "0.0025 ÷ 0.0400 = 6.25% (repeatability 4.0%, reproducibility 2.25%, part 93.75%: these add to 100%)." },
      { label: "%Study Var", text: "0.05 ÷ 0.20 = 25% (repeatability 20%, reproducibility 15%, part 96.8%: these do not add to 100%)." },
      { label: "%Tolerance", text: "6 × 0.05 ÷ 1.5 = 20%." },
      { label: "ndc", text: "σ_part = √0.0375 = 0.1936. ndc = 1.41 × 0.1936 ÷ 0.05 = 5.46 → 5." },
      { label: "Answer", text: "Marginal: %Study Var 25% and %Tolerance 20% are in the 10–30% band, %Contribution 6.25% in the 1–9% band; ndc = 5 is just acceptable. Repeatability is 64% of the GRR variance, so improve the gage (fixture, maintenance) before trusting fine process studies." }
    ],
    points: [
      "Bands (AIAG): %Study Var or %Tolerance < 10% good, 10–30% marginal, > 30% unacceptable; %Contribution < 1% / 1–9% / > 9%.",
      "Repeatability dominant → the gage; reproducibility dominant → operators and method."
    ]
  },
  {
    id: "capability-worked",
    phase: "measure",
    kind: "example",
    title: "Worked example: Cp, Cpk, Pp and Ppk from the same data",
    topics: ["capability", "spc"],
    summary: "Uses within and overall standard deviations to compute all four indices and diagnose the process.",
    steps: [
      { label: "Given", text: "Shaft diameter, specification 20.0 ± 0.6 mm (LSL 19.4, USL 20.6). 25 subgroups of n = 5, process in control. Grand mean 20.15, R̄ = 0.2326, overall s = 0.125." },
      { label: "Within σ", text: "σ_within = R̄ ÷ d₂ = 0.2326 ÷ 2.326 = 0.100." },
      { label: "Cp and Cpk", text: "Cp = 1.2 ÷ (6 × 0.100) = 2.00.\nCpk = min(20.6 − 20.15, 20.15 − 19.4) ÷ (3 × 0.100) = min(0.45, 0.75) ÷ 0.30 = 1.50." },
      { label: "Pp and Ppk", text: "Pp = 1.2 ÷ (6 × 0.125) = 1.60.\nPpk = 0.45 ÷ (3 × 0.125) = 1.20." },
      { label: "Expected out of spec", text: "Long-term Z to USL = 0.45 ÷ 0.125 = 3.6 → about 159 ppm above USL; essentially none below LSL." },
      { label: "Answer", text: "Cp 2.00, Cpk 1.50, Pp 1.60, Ppk 1.20. Cp > Cpk: the mean sits 0.15 mm above nominal, so re-centre. Cpk > Ppk: some drift between subgroups adds variation over time." }
    ],
    points: [
      "Cp/Cpk use σ within subgroups (short-term, potential); Pp/Ppk use overall s (long-term, actual).",
      "Re-centring here would raise Cpk to 2.00 and Ppk to 1.60 without reducing any variation."
    ]
  },
  // ---------------------------------------------------------------- Analyze
  {
    id: "t-table",
    phase: "analyze",
    kind: "table",
    title: "Critical values of t",
    topics: ["inferential", "hyp-normal"],
    summary: "Upper-tail critical values of Student's t for common degrees of freedom and tail areas.",
    table: {
      head: ["df", "Tail 0.10", "Tail 0.05", "Tail 0.025", "Tail 0.01", "Tail 0.005"],
      rows: [
        ["1", "3.078", "6.314", "12.706", "31.821", "63.657"],
        ["2", "1.886", "2.920", "4.303", "6.965", "9.925"],
        ["3", "1.638", "2.353", "3.182", "4.541", "5.841"],
        ["4", "1.533", "2.132", "2.776", "3.747", "4.604"],
        ["5", "1.476", "2.015", "2.571", "3.365", "4.032"],
        ["6", "1.440", "1.943", "2.447", "3.143", "3.707"],
        ["7", "1.415", "1.895", "2.365", "2.998", "3.499"],
        ["8", "1.397", "1.860", "2.306", "2.896", "3.355"],
        ["9", "1.383", "1.833", "2.262", "2.821", "3.250"],
        ["10", "1.372", "1.812", "2.228", "2.764", "3.169"],
        ["12", "1.356", "1.782", "2.179", "2.681", "3.055"],
        ["15", "1.341", "1.753", "2.131", "2.602", "2.947"],
        ["20", "1.325", "1.725", "2.086", "2.528", "2.845"],
        ["25", "1.316", "1.708", "2.060", "2.485", "2.787"],
        ["30", "1.310", "1.697", "2.042", "2.457", "2.750"],
        ["40", "1.303", "1.684", "2.021", "2.423", "2.704"],
        ["60", "1.296", "1.671", "2.000", "2.390", "2.660"],
        ["120", "1.289", "1.658", "1.980", "2.358", "2.617"],
        ["∞ (= Z)", "1.282", "1.645", "1.960", "2.326", "2.576"]
      ],
      note: "Column = area in the upper tail. One-tailed test at α: use the α column. Two-tailed test at α or a (1 − α) confidence interval: use the α/2 column (95% CI → 0.025). Values from scipy.stats.t."
    },
    points: [
      "df = n − 1 for a 1-sample or paired t; n₁ + n₂ − 2 for a pooled 2-sample t.",
      "t is wider than Z for small samples; by df ≈ 30 it is close to Z.",
      "Reject H₀ when |t calculated| > t critical (equivalently p < α)."
    ]
  },
  {
    id: "chi2-table",
    phase: "analyze",
    kind: "table",
    title: "Critical values of χ² (df 1–10)",
    topics: ["hyp-nonnormal", "hyp-normal", "distributions"],
    summary: "Lower and upper percentage points of the chi-square distribution for contingency tables and variance tests.",
    table: {
      head: ["df", "Lower 2.5%", "Lower 5%", "Upper 10%", "Upper 5%", "Upper 2.5%", "Upper 1%"],
      rows: [
        ["1", "0.00098", "0.0039", "2.706", "3.841", "5.024", "6.635"],
        ["2", "0.051", "0.103", "4.605", "5.991", "7.378", "9.210"],
        ["3", "0.216", "0.352", "6.251", "7.815", "9.348", "11.345"],
        ["4", "0.484", "0.711", "7.779", "9.488", "11.143", "13.277"],
        ["5", "0.831", "1.145", "9.236", "11.070", "12.833", "15.086"],
        ["6", "1.237", "1.635", "10.645", "12.592", "14.449", "16.812"],
        ["7", "1.690", "2.167", "12.017", "14.067", "16.013", "18.475"],
        ["8", "2.180", "2.733", "13.362", "15.507", "17.535", "20.090"],
        ["9", "2.700", "3.325", "14.684", "16.919", "19.023", "21.666"],
        ["10", "3.247", "3.940", "15.987", "18.307", "20.483", "23.209"]
      ],
      note: "'Lower 2.5%' is the value with 2.5% of the area below it; 'Upper 5%' has 5% above it. Values from scipy.stats.chi2."
    },
    points: [
      "Contingency table: df = (rows − 1) × (columns − 1); reject H₀ (independence) when χ² > the upper α value.",
      "1-sample variance test: χ² = (n − 1)s² ÷ σ₀², df = n − 1; a two-sided test uses both the lower and upper α/2 points.",
      "χ² is never negative and is right-skewed; its mean equals df."
    ]
  },
  {
    id: "test-selector",
    phase: "analyze",
    kind: "cheatsheet",
    title: "Which hypothesis test when (one table)",
    topics: ["hyp-normal", "hyp-nonnormal", "hyp-concepts", "correlation"],
    summary: "Choose the test from what you compare (centre, spread, proportion, association) and the number of groups, with the normal-data test and its non-normal or attribute counterpart side by side.",
    table: {
      head: ["What you compare", "Groups", "Normal (parametric) test", "Non-normal or attribute alternative"],
      rows: [
        ["Centre vs a target", "1", "1-sample t (1-sample Z if σ known)", "1-sample sign (no assumption); 1-sample Wilcoxon (symmetric data)"],
        ["Centre, independent groups", "2", "2-sample t", "Mann-Whitney"],
        ["Centre, same units before/after", "2 paired", "Paired t", "Sign or Wilcoxon test on the differences"],
        ["Centre, independent groups", "3 or more", "One-way ANOVA (then Tukey)", "Kruskal-Wallis; Mood's median if outliers"],
        ["Centre, treatment plus a blocking factor", "3 or more", "Two-way (randomised block) ANOVA", "Friedman"],
        ["Spread vs a target", "1", "1-sample variance (χ²)", "Bonett method (Minitab option; does not assume normality)"],
        ["Spread", "2", "F test", "Levene"],
        ["Spread", "3 or more", "Bartlett", "Levene"],
        ["Proportion vs a target", "1", "−", "1-proportion test"],
        ["Proportions", "2", "−", "2-proportion test (or χ² on a 2 × 2 table)"],
        ["Proportions or category counts", "3 or more / two categorical variables", "−", "χ² contingency table"],
        ["Linear relationship, continuous X and Y", "−", "Correlation (Pearson r), regression", "Spearman rank correlation"],
        ["Are the data normal? (check first)", "1", "Anderson-Darling, Ryan-Joiner or Shapiro-Wilk (H₀: data are normal)", "p ≤ 0.05 → use this column or transform (Box-Cox)"]
      ]
    },
    points: [
      "First question: is Y continuous or attribute? Second: centre, spread or proportion? Third: how many groups, and paired?",
      "Non-parametric tests compare medians, assume less and have less power.",
      "Test equal variances before a 2-sample t or ANOVA; with unequal variances use the unpooled (Welch) t.",
      "χ² contingency needs expected counts of at least 5 per cell."
    ]
  },
  {
    id: "hypothesis-decision-matrix",
    phase: "analyze",
    kind: "cheatsheet",
    title: "Hypothesis decisions: α, β, power and the p-value",
    topics: ["hyp-concepts"],
    summary: "The four possible outcomes of a test and the rules for reading a p-value.",
    table: {
      head: ["Your decision", "H₀ actually true", "H₀ actually false"],
      rows: [
        ["Reject H₀ (p < α)", "Type I error, probability α: false alarm, producer's risk", "Correct decision, probability 1 − β = power"],
        ["Fail to reject H₀ (p ≥ α)", "Correct decision, probability 1 − α (confidence level)", "Type II error, probability β: missed effect, consumer's risk"]
      ],
      note: "H₀ always contains the equality (no difference, no effect, data normal). Hₐ is the claim you want evidence for: ≠ (two-tailed), < or > (one-tailed)."
    },
    points: [
      "'If p is low, H₀ must go': p < α → reject H₀. Say 'fail to reject', never 'accept H₀'.",
      "The p-value is the probability of data at least this extreme if H₀ were true; it is not the probability that H₀ is true.",
      "Lowering α (say 0.05 → 0.01) raises β for the same n. Raising n lowers β (raises power) without changing α.",
      "Power also rises with a bigger true difference and less noise (smaller σ). Typical target power: 0.80–0.90.",
      "Statistically significant is not the same as practically important: with a huge n a trivial difference gives p < 0.05."
    ]
  },
  {
    id: "formulas-analyze",
    phase: "analyze",
    kind: "cheatsheet",
    title: "Formula sheet: Analyze phase",
    topics: ["inferential", "hyp-normal", "hyp-nonnormal", "hyp-concepts"],
    summary: "Standard error, confidence intervals, sample size and test statistics used in Analyze questions.",
    table: {
      head: ["Quantity", "Formula", "Remember"],
      rows: [
        ["Standard error of the mean", "SE = σ ÷ √n (or s ÷ √n)", "Quadruple n to halve SE"],
        ["CI for a mean, σ known", "x̄ ± Z(α/2) × σ ÷ √n", "Z = 1.96 for 95%"],
        ["CI for a mean, σ unknown", "x̄ ± t(α/2, n − 1) × s ÷ √n", "Use t when σ is estimated"],
        ["CI for a proportion", "p̂ ± Z(α/2) × √(p̂(1 − p̂) ÷ n)", "Needs np̂ and n(1 − p̂) ≥ about 5"],
        ["Sample size, mean", "n = (Z × σ ÷ E)²", "E = margin of error; round up"],
        ["Sample size, proportion", "n = Z² × p(1 − p) ÷ E²", "p = 0.5 gives the largest n"],
        ["1-sample t", "t = (x̄ − μ₀) ÷ (s ÷ √n), df = n − 1", "Paired t: same formula on the differences"],
        ["2-proportion Z", "Z = (p̂₁ − p̂₂) ÷ √(p̄(1 − p̄)(1/n₁ + 1/n₂))", "p̄ = pooled proportion"],
        ["χ² statistic", "χ² = Σ (O − E)² ÷ E", "E = row total × column total ÷ grand total"],
        ["χ² df (contingency)", "(r − 1)(c − 1)", "A 3 × 2 table has 2 df"],
        ["1-sample variance", "χ² = (n − 1)s² ÷ σ₀², df = n − 1", "Sensitive to non-normal data"],
        ["F (two variances)", "F = s₁² ÷ s₂²", "Larger variance on top for a quick check"],
        ["One-way ANOVA", "F = MS_between ÷ MS_within; df = k − 1 and N − k", "MS = SS ÷ df; SS_total = SS_between + SS_within"],
        ["Power", "1 − β", "Probability of detecting a real effect"]
      ]
    },
    points: [
      "Higher confidence → wider interval; bigger n → narrower interval.",
      "A 95% CI for a difference that excludes 0 agrees with p < 0.05 for the two-sided test."
    ]
  },
  {
    id: "one-sample-t-worked",
    phase: "analyze",
    kind: "example",
    title: "Worked example: 1-sample t-test and confidence interval",
    topics: ["hyp-normal", "inferential", "hyp-concepts"],
    summary: "Tests a mean against a target by hand, with the matching confidence interval.",
    steps: [
      { label: "Given", text: "Bottles should hold 500 ml on average. A random sample of 16 bottles (normal data) gives x̄ = 502.4 ml and s = 4.0 ml. α = 0.05, two-sided." },
      { label: "Hypotheses", text: "H₀: μ = 500. Hₐ: μ ≠ 500." },
      { label: "Test statistic", text: "SE = 4.0 ÷ √16 = 1.0.\nt = (502.4 − 500) ÷ 1.0 = 2.40, df = 15." },
      { label: "Critical value", text: "t(0.025, 15) = 2.131. |2.40| > 2.131. Software gives p = 0.030." },
      { label: "Confidence interval", text: "95% CI = 502.4 ± 2.131 × 1.0 = 500.27 to 504.53 ml. It excludes 500." },
      { label: "Answer", text: "p = 0.030 < 0.05: reject H₀. The mean fill differs from 500 ml (it is about 2.4 ml high). Whether 2.4 ml matters is a business question (cost of give-away)." }
    ],
    points: [
      "With σ unknown and n = 16, use t, not Z: Z would give 1.96 and a slightly narrower interval.",
      "CI and test agree: a 95% CI that excludes the target ↔ two-sided p < 0.05."
    ]
  },
  {
    id: "chi2-contingency-worked",
    phase: "analyze",
    kind: "example",
    title: "Worked example: χ² test of independence (defectives by shift)",
    topics: ["hyp-nonnormal"],
    summary: "Tests whether the defective rate depends on the shift using a 3 × 2 contingency table.",
    steps: [
      { label: "Given", text: "200 units sampled from each shift.\nShift A: 190 good, 10 defective.\nShift B: 180 good, 20 defective.\nShift C: 170 good, 30 defective.\nα = 0.05." },
      { label: "Hypotheses", text: "H₀: defective rate is independent of shift. Hₐ: it depends on shift." },
      { label: "Expected counts", text: "Totals: 540 good, 60 defective, 600 units.\nE(defective) = 200 × 60 ÷ 600 = 20 per shift; E(good) = 200 × 540 ÷ 600 = 180 per shift. All ≥ 5." },
      { label: "χ² statistic", text: "Defective cells: (10 − 20)²/20 + 0 + (30 − 20)²/20 = 5 + 0 + 5 = 10.\nGood cells: (190 − 180)²/180 + 0 + (170 − 180)²/180 = 0.556 + 0 + 0.556 = 1.111.\nχ² = 11.11." },
      { label: "Decision", text: "df = (3 − 1)(2 − 1) = 2. Critical χ²(0.05, 2) = 5.991. 11.11 > 5.991; p = 0.004." },
      { label: "Answer", text: "Reject H₀: the defective rate depends on the shift (5%, 10%, 15%). Shift C is the place to look for root causes." }
    ],
    points: [
      "χ² shows association, not which shift differs or why; follow up with 2-proportion tests or process data.",
      "Use counts, never percentages, in the table."
    ]
  },
  // ---------------------------------------------------------------- Improve
  {
    id: "regression-output-reading",
    phase: "improve",
    kind: "cheatsheet",
    title: "Reading regression output and residual plots",
    topics: ["regression", "correlation"],
    summary: "What each number and plot in a regression output means and what to do about it.",
    table: {
      head: ["Output item", "Meaning", "Rule of thumb / action"],
      rows: [
        ["Coefficient b₁", "Change in Y for a one-unit increase in X (others held constant)", "Sign gives direction"],
        ["Coefficient p-value", "Tests H₀: coefficient = 0", "p < 0.05 → keep the term; otherwise consider removing it"],
        ["R²", "Share of the variation in Y explained by the model", "Never falls when a term is added"],
        ["R²-adjusted", "R² penalised for the number of terms", "Compare models with different numbers of Xs; a big gap to R² means useless terms"],
        ["S", "Standard deviation of the residuals, in Y units", "Smaller is better"],
        ["r (Pearson)", "Strength and direction of a linear relationship, −1 to +1", "Simple regression: R² = r²"],
        ["VIF", "Inflation of a coefficient's variance from correlated Xs", "1 = none; > 5 (some use 10) = multicollinearity"],
        ["Residuals vs fits: funnel", "Non-constant variance", "Transform Y (Box-Cox)"],
        ["Residuals vs fits: curve", "Relationship is not linear", "Add X² term or transform"],
        ["Residuals vs order: trend or cycle", "Residuals not independent", "Look for a time-related X"],
        ["Normal plot of residuals: bent", "Residuals not normal", "Transform; check outliers"],
        ["Confidence vs prediction interval", "CI: range for the mean Y at X. PI: range for one new value", "PI is always wider"]
      ]
    },
    points: [
      "Good residuals: normal, constant variance, independent, mean zero, no pattern.",
      "Regression shows association; causation needs a controlled change (pilot or DOE).",
      "Do not predict outside the range of X used to fit the model (extrapolation)."
    ]
  },
  {
    id: "regression-worked",
    phase: "improve",
    kind: "example",
    title: "Worked example: simple regression prediction and R²",
    topics: ["correlation", "regression"],
    summary: "Uses a fitted line to predict Y, converts r into R² and R²-adjusted and checks the prediction range.",
    steps: [
      { label: "Given", text: "Delivery time Y (min) against distance X (km) for n = 20 deliveries, X from 10 to 40 km. Fitted line: Ŷ = 4.2 + 1.35X. r = 0.92. Slope p-value < 0.001." },
      { label: "Slope", text: "Each extra km adds 1.35 min on average. p < 0.05, so distance is a significant predictor." },
      { label: "Prediction", text: "X = 25 km: Ŷ = 4.2 + 1.35 × 25 = 4.2 + 33.75 = 37.95 ≈ 38.0 min." },
      { label: "R² and R²-adj", text: "R² = 0.92² = 0.8464 → 84.6% of the variation in delivery time is explained by distance.\nR²-adj = 1 − (1 − 0.8464) × (20 − 1) ÷ (20 − 1 − 1) = 0.838." },
      { label: "Range check", text: "X = 60 km lies outside 10–40 km: the model should not be used there." },
      { label: "Answer", text: "Predicted mean time at 25 km ≈ 38 min. Distance explains about 85% of the variation; the other 15% comes from other Xs and noise." }
    ],
    points: [
      "R² = r² only in simple (one X) regression. A negative r gives the same R².",
      "b₀ = 4.2 is the predicted Y at X = 0, which may have no practical meaning when 0 is outside the data."
    ]
  },
  // ---------------------------------------------------------------- Control
  {
    id: "spc-constants",
    phase: "control",
    kind: "table",
    title: "Control chart constants for subgroup sizes 2–10",
    topics: ["spc"],
    summary: "The constants used to compute control limits and σ estimates for Xbar-R, Xbar-S and individuals charts.",
    table: {
      head: ["n", "A2", "D3", "D4", "d2", "E2", "A3", "B3", "B4", "c4"],
      rows: [
        ["2", "1.880", "0", "3.267", "1.128", "2.660", "2.659", "0", "3.267", "0.7979"],
        ["3", "1.023", "0", "2.574", "1.693", "1.772", "1.954", "0", "2.568", "0.8862"],
        ["4", "0.729", "0", "2.282", "2.059", "1.457", "1.628", "0", "2.266", "0.9213"],
        ["5", "0.577", "0", "2.114", "2.326", "1.290", "1.427", "0", "2.089", "0.9400"],
        ["6", "0.483", "0", "2.004", "2.534", "1.184", "1.287", "0.030", "1.970", "0.9515"],
        ["7", "0.419", "0.076", "1.924", "2.704", "1.109", "1.182", "0.118", "1.882", "0.9594"],
        ["8", "0.373", "0.136", "1.864", "2.847", "1.054", "1.099", "0.185", "1.815", "0.9650"],
        ["9", "0.337", "0.184", "1.816", "2.970", "1.010", "1.032", "0.239", "1.761", "0.9693"],
        ["10", "0.308", "0.223", "1.777", "3.078", "0.975", "0.975", "0.284", "1.716", "0.9727"]
      ],
      note: "A2 = 3 ÷ (d2√n). D3, D4 = 1 ∓ 3d3 ÷ d2, where d3 is the standard deviation of the range in σ units (D3 set to 0 when negative). E2 = 3 ÷ d2. A3 = 3 ÷ (c4√n). B3, B4 = 1 ∓ 3√(1 − c4²) ÷ c4 (B3 set to 0 when negative). Values as commonly published; exact computation gives D4 = 2.5746 for n = 3 (some tables print 2.575) and E2 = 2.6587 for n = 2 (2.660 comes from 3 ÷ 1.128; the I chart uses 2.66)."
    },
    points: [
      "Xbar-R: X̿ ± A2·R̄; R chart D3·R̄ to D4·R̄. Xbar-S: X̿ ± A3·s̄; S chart B3·s̄ to B4·s̄.",
      "Individuals chart uses the n = 2 row: x̄ ± 2.66·MR̄, MR chart UCL = 3.267·MR̄.",
      "σ_within = R̄ ÷ d2 or s̄ ÷ c4.",
      "D3 = 0 for n ≤ 6: the R chart has no lower limit for small subgroups."
    ]
  },
  {
    id: "spc-limits-formulas",
    phase: "control",
    kind: "cheatsheet",
    title: "Control limit formulas for every chart",
    topics: ["spc", "spc-rules"],
    summary: "Centre line and limits for each Shewhart chart and the data it needs. The BoK names I-MR, Xbar-R, Xbar-S, p, np and u; the c chart is added because it pairs with u.",
    table: {
      head: ["Chart", "Plots", "Centre line", "Control limits"],
      rows: [
        ["I (individuals)", "Each value", "x̄", "x̄ ± 2.66 MR̄"],
        ["MR (moving range)", "|xᵢ − xᵢ₋₁|", "MR̄", "LCL 0, UCL 3.267 MR̄"],
        ["Xbar (with R)", "Subgroup mean", "X̿", "X̿ ± A2 R̄"],
        ["R", "Subgroup range", "R̄", "D3 R̄ to D4 R̄"],
        ["Xbar (with S)", "Subgroup mean", "X̿", "X̿ ± A3 s̄"],
        ["S", "Subgroup standard deviation", "s̄", "B3 s̄ to B4 s̄"],
        ["p", "Proportion defective (n may vary)", "p̄ = total defectives ÷ total inspected", "p̄ ± 3√(p̄(1 − p̄) ÷ n)"],
        ["np", "Number defective (n constant)", "np̄", "np̄ ± 3√(np̄(1 − p̄))"],
        ["c", "Defects per sample (constant area)", "c̄", "c̄ ± 3√c̄"],
        ["u", "Defects per unit (area may vary)", "ū = total defects ÷ total units", "ū ± 3√(ū ÷ n)"]
      ],
      note: "All limits are centre ± 3 standard errors of the plotted statistic. A negative lower limit is set to 0 for R, S, MR, p, np, c and u charts."
    },
    points: [
      "Read the dispersion chart (R, S, MR) first: if it is out of control, the Xbar or I limits are not reliable.",
      "Control limits come from process data (voice of the process); specification limits come from the customer. Never draw specs on an Xbar chart.",
      "p and u charts with varying n have limits that change from point to point: larger n, tighter limits.",
      "Calculate limits from 20–25 subgroups of stable data; recalculate only after a deliberate process change."
    ]
  },
  {
    id: "xbar-r-worked",
    phase: "control",
    kind: "example",
    title: "Worked example: Xbar-R control limits",
    topics: ["spc"],
    summary: "Computes Xbar and R chart limits from subgroup summaries and estimates the within-subgroup σ.",
    steps: [
      { label: "Given", text: "25 subgroups of n = 4 consecutive parts. Grand mean X̿ = 12.00 mm, average range R̄ = 0.40 mm. From the constants table for n = 4: A2 = 0.729, D3 = 0, D4 = 2.282, d2 = 2.059." },
      { label: "R chart", text: "UCL = 2.282 × 0.40 = 0.913 mm. CL = 0.40. LCL = 0 × 0.40 = 0." },
      { label: "Xbar chart", text: "A2 × R̄ = 0.729 × 0.40 = 0.2916.\nUCL = 12.00 + 0.2916 = 12.292 mm. LCL = 12.00 − 0.2916 = 11.708 mm." },
      { label: "Within σ", text: "σ = R̄ ÷ d2 = 0.40 ÷ 2.059 = 0.194 mm. Check: 3σ ÷ √4 = 3 × 0.194 ÷ 2 = 0.291, the same half-width as A2·R̄." },
      { label: "Answer", text: "Xbar chart 11.708 to 12.292 (CL 12.00); R chart 0 to 0.913 (CL 0.40). A subgroup with range 0.95 would be a special-cause signal on the R chart." }
    ],
    points: [
      "Xbar limits are for subgroup means, so they are narrower than the spread of individual parts (by √n).",
      "Plotting single parts against these limits would raise false alarms."
    ]
  },
  {
    id: "p-chart-worked",
    phase: "control",
    kind: "example",
    title: "Worked example: p chart with varying sample size",
    topics: ["spc", "spc-rules"],
    summary: "Computes p chart limits for two different daily sample sizes and judges a point.",
    steps: [
      { label: "Given", text: "20 days of inspection: 4,000 units inspected, 200 defective. Today 250 units were inspected and 24 were defective. Yesterday 150 units were inspected." },
      { label: "Centre line", text: "p̄ = 200 ÷ 4,000 = 0.050." },
      { label: "Limits for n = 250", text: "σ_p = √(0.05 × 0.95 ÷ 250) = 0.01378.\nUCL = 0.050 + 3 × 0.01378 = 0.0914. LCL = 0.050 − 0.0414 = 0.0086." },
      { label: "Limits for n = 150", text: "σ_p = √(0.05 × 0.95 ÷ 150) = 0.01780.\nUCL = 0.050 + 0.0534 = 0.1034. LCL = 0.050 − 0.0534 < 0 → set to 0." },
      { label: "Today's point", text: "p = 24 ÷ 250 = 0.096 > UCL 0.0914." },
      { label: "Answer", text: "Today's point is above its limit: a special-cause signal. Start the response plan (contain product, find the cause). With n = 150 the same 0.096 would have been inside the limits." }
    ],
    points: [
      "p chart = defectives (whole units fail). Counting scratches or errors per unit needs a c or u chart.",
      "Some texts (e.g. AIAG) allow one set of limits from the average n when every n is within about ±25% of it. Limits per point are safer: a point near its limit must be judged with its own n."
    ]
  },
  {
    id: "lean-tools-glance",
    phase: "control",
    kind: "cheatsheet",
    title: "Lean tools at a glance",
    topics: ["lean-control", "solutions", "lean-basics"],
    summary: "What each lean tool does, which waste it attacks and the facts exam questions test.",
    table: {
      head: ["Tool", "What it does", "Key facts"],
      rows: [
        ["Kanban", "Visual pull signal that authorises production or replenishment", "Caps WIP. No kanban, no production; never pass on defects. Kanbans ≈ demand × lead time × (1 + safety) ÷ container size"],
        ["Poka-yoke", "Mistake-proofing so an error cannot happen or is caught at once", "Shingo. Prevention beats detection. Control type stops the process; warning type alerts. Methods: contact, fixed-value, motion-step"],
        ["SMED", "Single-Minute Exchange of Die: cuts changeover time", "Shingo. Separate internal (machine stopped) from external (machine running) work, convert internal to external, streamline both. Target < 10 min"],
        ["Standard work", "Documented best current method: takt, work sequence, standard WIP", "Baseline for kaizen and training; reduces variation between operators"],
        ["Visual management", "Make status and abnormalities visible at a glance", "Andon lights, boards, floor marking, shadow boards; supports 5S and SPC"],
        ["TPM", "Total Productive Maintenance: operators and maintenance keep equipment reliable", "Autonomous maintenance by operators plus planned maintenance; measured with OEE"],
        ["5S", "Workplace organisation", "Sort, Straighten, Shine, Standardize, Self-Discipline; held by audits"],
        ["Jidoka", "Automation with a human touch: stop at the first abnormality", "Andon cord; with JIT one of the two TPS pillars"],
        ["Heijunka", "Level the mix and volume of production", "Smooths demand on upstream steps; enables pull"],
        ["Kaizen event", "Short, focused team improvement (often 3–5 days)", "Small, quick improvements; differs from a full DMAIC project"]
      ]
    },
    points: [
      "Control strength, strongest first: remove the cause, mistake-proof, SPC, inspection, training and procedures.",
      "SMED and smaller batches lower inventory and lead time; Kanban stops overproduction."
    ]
  }
]);
