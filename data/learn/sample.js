// SAMPLE DATA for testing the app shell. Delete this file and its <script> tag in index.html
// once the real packs are written.
LEARN.add([
  {
    topic: "msa",
    summary: "Measurement System Analysis checks how much of the variation you see comes from the gage and the people using it rather than from the process. A Green Belt runs it before trusting any process data.",
    points: [
      "Accuracy (location): bias, linearity and stability.",
      "Precision (spread): repeatability (equipment) and reproducibility (appraisers).",
      "%GRR below 10% is good, 10-30% marginal, above 30% unacceptable (AIAG).",
      "Number of distinct categories (ndc) should be 5 or more.",
      "Use attribute agreement analysis for pass/fail or categorical data.",
      "Run the MSA before the capability study, never after."
    ],
    formulas: [
      { name: "%GRR", f: "%GRR = σ_GRR / σ_total × 100" },
      { name: "Total variance", f: "σ²_total = σ²_process + σ²_GRR" }
    ],
    table: {
      title: "AIAG acceptance of %GRR",
      head: ["%GRR", "Verdict"],
      rows: [["< 10%", "Acceptable"], ["10-30%", "Marginal, depends on use and cost"], ["> 30%", "Unacceptable, fix the gage"]]
    },
    traps: [
      "Repeatability is the gage (same person, same part); reproducibility is between appraisers.",
      "Variances add, standard deviations do not: square before adding."
    ],
    terms: [
      { term: "Bias", def: "Difference between the average measured value and the reference value." },
      { term: "Linearity", def: "Change in bias across the operating range of the gage." },
      { term: "Stability", def: "Change in bias over time." }
    ]
  },
  {
    topic: "lean-basics",
    summary: "Lean removes activities that the customer does not pay for, so that value flows to the customer at the pull of demand.",
    points: [
      "Five principles: value, value stream, flow, pull, perfection.",
      "Seven wastes (TIMWOOD): transport, inventory, motion, waiting, over-production, over-processing, defects.",
      "The eighth waste is unused skills (non-utilised talent).",
      "Over-production is often called the worst waste because it hides the others.",
      "Activities are value-added, non-value-added but required, or pure waste."
    ],
    traps: [
      "Motion is movement of people; transport is movement of material.",
      "Over-production is making too much or too early; over-processing is doing more work than needed on each unit."
    ],
    terms: [
      { term: "Muda", def: "Waste: any activity that consumes resources without adding value." },
      { term: "Takt time", def: "Available time divided by customer demand." }
    ]
  }
]);
