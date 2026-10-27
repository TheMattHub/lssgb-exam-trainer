// Pack "measure2": learn pages for msa and capability. Format: docs/CONTENT_GUIDE.md.
LEARN.add([
  {
    topic: "msa",
    summary: "Measurement System Analysis checks that the data you are about to collect show the process, not the gage. Every observed value mixes true part variation with measurement error, so in Measure the gage is validated (resolution, accuracy, precision) before baseline data and capability are trusted.",
    points: [
      "Order in Measure: validate the measurement system first, then collect baseline data, check stability, then capability.",
      "Accuracy (location) = bias, linearity, stability. Precision (spread) = repeatability and reproducibility.",
      "Bias = average reading − reference value. Linearity = how bias changes across the gage range. Stability = how bias changes over time (chart a master part).",
      "Repeatability (EV, equipment variation): same operator, same part, same gage, repeated readings. Reproducibility (AV, appraiser variation): difference between operators' averages.",
      "Resolution (discrimination): the gage should read to 1/10 of the tolerance or of the process spread (rule of ten). Check it first.",
      "Crossed study: every operator measures every part, typically 10 parts spanning the process range × 3 operators × 2–3 trials, random order, blind. Nested study: used for destructive tests, each operator gets their own (near-identical) parts.",
      "ANOVA method is preferred over average and range: it uses variances and also estimates the operator × part interaction.",
      "%Study Var uses standard deviations (rows do not add to 100%); %Contribution uses variances (rows add to 100%). 20% Study Var = 4% Contribution.",
      "%Tolerance (P/T) compares the gage spread with the specification width; it matters for accepting product. %Study Var compares with process variation; it matters for process improvement.",
      "ndc ≥ 5 means the gage can split the process spread into at least 5 groups.",
      "Repeatability dominant → fix the gage (maintenance, clamping, fixture, resolution). Reproducibility dominant → standardise the method, train operators, add fixtures or clearer SOPs.",
      "Attribute agreement analysis (pass/fail, categories): 20–50 parts with known standard, mixing good, bad and borderline; 2–3 appraisers × 2–3 trials. Reports within appraiser, each appraiser vs standard, between appraisers, all vs standard. Kappa ≥ 0.75 acceptable."
    ],
    formulas: [
      { name: "Observed variance", f: "σ²_total = σ²_part + σ²_GRR" },
      { name: "Gage R&R variance", f: "σ²_GRR = σ²_repeatability + σ²_reproducibility" },
      { name: "Bias", f: "Bias = x̄ of readings − reference value" },
      { name: "%Study Variation", f: "%SV = σ_GRR / σ_total × 100" },
      { name: "%Contribution", f: "%Contribution = σ²_GRR / σ²_total × 100 = (%SV / 100)² × 100" },
      { name: "%Tolerance (P/T)", f: "P/T = 6 × σ_GRR / (USL − LSL) × 100 (older texts and the course: 5.15 × σ_GRR)" },
      { name: "Number of distinct categories", f: "ndc = 1.41 × σ_part / σ_GRR, truncated to a whole number" },
      { name: "Rule of ten", f: "Resolution ≤ (USL − LSL) / 10" },
      { name: "Kappa", f: "κ = (P_observed − P_chance) / (1 − P_chance)" }
    ],
    table: {
      title: "MSA acceptance guidelines (AIAG; ndc bands and kappa ≥ 0.9 from Minitab)",
      head: ["Metric", "Acceptable", "Marginal", "Unacceptable"],
      rows: [
        ["%Study Var or %Tolerance", "< 10%", "10–30%", "> 30%"],
        ["%Contribution", "< 1%", "1–9%", "> 9%"],
        ["ndc", "≥ 5", "2–4 (limited)", "< 2"],
        ["Kappa (attribute)", "≥ 0.75 (≥ 0.9 excellent)", "0.40–0.75 (fair to good, improve)", "< 0.40 (poor)"]
      ]
    },
    traps: [
      "%Contribution is not %Study Var: 6% Contribution is marginal (about 24% Study Var), not 'acceptable because below 10%'.",
      "Repeatability is the gage (one operator, repeated readings); reproducibility is the people (differences between operators). Match the fix to the bigger one.",
      "Stability vs linearity: both are changes in bias, over time for stability, over the measuring range for linearity.",
      "Precise is not accurate: tight readings far from the reference value show good precision and a bias.",
      "Parts that are too alike inflate %Study Var and lower ndc; parts must span the process range. Kappa 0 means chance agreement, not total disagreement."
    ],
    terms: [
      { term: "MSA", def: "Measurement System Analysis: study of the error a measurement system adds, split into its sources." },
      { term: "Gage R&R", def: "Study estimating repeatability and reproducibility, compared with total variation or tolerance." },
      { term: "EV / AV", def: "Equipment variation (repeatability) and appraiser variation (reproducibility)." },
      { term: "Discrimination", def: "Resolution: the smallest change the gage can detect and show." },
      { term: "Kappa", def: "Agreement statistic for attribute ratings, corrected for chance: 1 perfect, 0 chance, negative worse than chance." }
    ]
  },
  {
    topic: "capability",
    summary: "Capability compares the voice of the process (its spread and location) with the voice of the customer (specification limits). It is the baseline the project will improve, so it must come from a validated measurement system and a stable process; indices from an unstable process do not predict anything.",
    points: [
      "Prerequisites: valid MSA, process in statistical control (stable), known distribution (normal, or transformed / fitted).",
      "Cp and Pp use the spec width over 6σ: they show potential, ignoring where the mean is. Cpk and Ppk use the distance from the mean to the nearer limit over 3σ: they include centring.",
      "Cp/Cpk use within-subgroup σ (short-term, e.g. R̄/d₂ or pooled s). Pp/Ppk use overall σ of all data (long-term, includes shifts between subgroups).",
      "Cpk ≤ Cp always; Cpk = Cp only when the process is centred; Cpk < 0 when the mean is outside a limit.",
      "Large Cp, small Cpk → re-centre the mean. Both small → reduce variation. Cpk much larger than Ppk → the process drifts between subgroups; look for special causes.",
      "Cp = 1 on a centred normal process: the ±3σ spread (99.73%) exactly fills the tolerance, about 2,700 PPM out of spec.",
      "Benchmarks: Cpk ≥ 1.33 common minimum (nearest limit 4σ away); 1.67 for new or critical processes; Cp = 2 means ±6σ fits the tolerance (six sigma short-term).",
      "One-sided specs: report Cpu (only USL) or Cpl (only LSL); Cp is undefined.",
      "Sigma level: Z_ST ≈ 3 × Cpk; Z_LT = Z_ST − 1.5 (1.5σ shift convention). Z.Bench combines the out-of-spec probability of both tails, so it is lower than the Z to the nearer limit.",
      "Non-normal data: Box-Cox (power) or Johnson transformation of data and spec limits, or fit a distribution such as Weibull or lognormal. Never delete data to pass a normality test.",
      "Attribute capability: defectives (unit good/bad) → binomial: % defective, PPM, process Z. Defects (counts per unit) → Poisson: DPU, DPMO, then sigma level from the table.",
      "Stable but incapable: the process needs a fundamental change (less common-cause variation, re-centring), not operator adjustment."
    ],
    formulas: [
      { name: "Cp", f: "Cp = (USL − LSL) / 6σ_within" },
      { name: "Cpu, Cpl", f: "Cpu = (USL − μ) / 3σ_within;  Cpl = (μ − LSL) / 3σ_within" },
      { name: "Cpk", f: "Cpk = min(Cpu, Cpl)" },
      { name: "Pp, Ppk", f: "Pp = (USL − LSL) / 6σ_overall;  Ppk = min(USL − μ, μ − LSL) / 3σ_overall" },
      { name: "Within σ from Xbar-R", f: "σ_within = R̄ / d₂ (d₂ = 2.326 for n = 5)" },
      { name: "Z to a limit", f: "Z_USL = (USL − μ) / σ;  Z_min = 3 × Cpk" },
      { name: "Sigma shift", f: "Z_LT = Z_ST − 1.5" },
      { name: "DPMO", f: "DPMO = defects / (units × opportunities) × 10⁶" },
      { name: "Required σ", f: "σ_max = (USL − LSL) / (6 × Cp_target)" }
    ],
    table: {
      title: "Capability, sigma level and DPMO (with 1.5σ shift)",
      head: ["Cpk (centred)", "Sigma level Z_ST", "DPMO (long-term)", "Verdict"],
      rows: [
        ["0.67", "2", "308,538", "Not capable"],
        ["1.00", "3", "66,807", "Not capable"],
        ["1.33", "4", "6,210", "Common minimum"],
        ["1.67", "5", "233", "New or critical processes"],
        ["2.00", "6", "3.4", "World class"]
      ]
    },
    traps: [
      "Capability before stability is the wrong order: an out-of-control process gives meaningless indices.",
      "Cpk vs Ppk: same formula, different σ. Cpk = within (short-term, potential); Ppk = overall (long-term, actual).",
      "Cp and Pp divide by 6σ; Cpk, Ppk, Cpu and Cpl divide by 3σ. Using the wrong divisor halves or doubles the answer.",
      "Long-term sigma is lower than short-term: subtract 1.5, never add it.",
      "Pass/fail data go to binomial capability; defect counts go to Poisson (DPU, DPMO). Cp and Cpk need continuous data."
    ],
    terms: [
      { term: "Voice of the process", def: "What the process delivers, shown by its control limits; compare with the specification limits (voice of the customer)." },
      { term: "Within-subgroup σ", def: "Short-term variation inside rational subgroups, estimated by R̄/d₂ or pooled s." },
      { term: "Overall σ", def: "Standard deviation of all data, including variation between subgroups." },
      { term: "Z.Bench", def: "Standard-normal Z equivalent to the total probability outside both specification limits." },
      { term: "Box-Cox", def: "Power transformation (λ; λ = 0 is the log) that makes skewed data closer to normal." }
    ]
  }
]);
