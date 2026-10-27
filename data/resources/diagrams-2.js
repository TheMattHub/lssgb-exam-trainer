// Resources: diagrams for Analyze, Improve and Control. Format: docs/CONTENT_GUIDE.md ("Resource format").
// All figures are original drawings (assets/diagrams/aic-*.svg) with invented example data; the chart data and
// statistics (r values, regression fit, CI/PI bands) were computed by the script that drew them.
// Conventions follow docs/research/iassc-gb-bok.md §4 (run rules: signals valid under both Western Electric and
// Nelson/Minitab unless named; Xbar-S for subgroups of 10 or more).
RES.add([
  // ---------------------------------------------------------------- Analyze
  {
    id: "aic-multivari",
    phase: "analyze",
    kind: "diagram",
    title: "Multi-vari chart",
    topics: ["multivari"],
    summary: "A multi-vari chart splits variation into positional (within a piece), cyclical (piece to piece) and temporal (time to time) families so you know where to dig.",
    img: "assets/diagrams/aic-multivari.svg",
    alt: "Shaft diameter in mm, measured at 3 positions on 3 consecutive pieces at 08:00, 10:00 and 12:00. Each piece shows a short vertical bar of about 0.03 to 0.04 mm (positional). Piece means, joined by a green line, differ by about 0.02 mm (cyclical). Time means, shown as blue lines, rise from about 10.01 to 10.07 to 10.12 mm (temporal), the largest family.",
    points: [
      "Positional = spread inside one piece (or across cavities/machines); cyclical = between consecutive pieces; temporal = between times or shifts.",
      "Find the largest family first, then aim root-cause work and hypothesis tests at it.",
      "It is a passive study: you sample the process as it runs, without changing any settings."
    ]
  },
  {
    id: "aic-test-selection",
    phase: "analyze",
    kind: "diagram",
    title: "Choosing a hypothesis test",
    topics: ["hyp-normal", "hyp-nonnormal", "hyp-concepts"],
    summary: "Pick the test from the type of Y, a normality check and the question (one sample vs target, two samples, three or more, or variances).",
    img: "assets/diagrams/aic-test-selection.svg",
    alt: "Decision grid. Continuous Y goes through a normality test: p ≥ 0.05 gives normal data, p < 0.05 non-normal data; attribute Y goes straight to attribute data. Normal: 1 sample 1-sample t; 2 samples 2-sample t (paired t for the same units before and after); 3 or more one-way ANOVA; variances: 1 chi-square variance test, 2 F test, 3+ Bartlett. Non-normal: 1-sample sign or 1-sample Wilcoxon; Mann-Whitney; Kruskal-Wallis or Mood's median; Levene for variances. Attribute: 1-proportion test; 2-proportion test; chi-square test, which also tests two categorical variables.",
    points: [
      "In a normality test H₀ is 'the data are normal', so p ≥ 0.05 means you may use the normal-data tests.",
      "Same units measured before and after → paired t, not 2-sample t.",
      "Mood's median is robust to outliers; Kruskal-Wallis has more power when there are no outliers.",
      "Levene works for any continuous data; Bartlett and the F test need normal data."
    ]
  },
  {
    id: "aic-type-errors",
    phase: "analyze",
    kind: "diagram",
    title: "Type I and Type II errors",
    topics: ["hyp-concepts"],
    summary: "The four outcomes of a hypothesis test: two correct decisions, a false alarm (α) and a missed effect (β); power is 1 − β.",
    img: "assets/diagrams/aic-type-errors.svg",
    alt: "Two by two matrix. Columns: H₀ true (no real effect) and H₀ false (a real effect exists). Rows: fail to reject H₀ and reject H₀. Fail to reject when H₀ is true: correct, probability 1 − α. Fail to reject when H₀ is false: Type II error β, missed effect, consumer's risk. Reject when H₀ is true: Type I error α, false alarm, producer's risk. Reject when H₀ is false: correct, probability 1 − β, the power.",
    points: [
      "Type I (α) = rejecting a true H₀: a false alarm, the producer's risk.",
      "Type II (β) = not rejecting a false H₀: a missed effect, the consumer's risk.",
      "A bigger sample raises power; with n fixed, lowering α raises β.",
      "Say 'fail to reject H₀', never 'accept H₀'."
    ]
  },
  {
    id: "aic-p-value-tails",
    phase: "analyze",
    kind: "diagram",
    title: "Rejection regions and the p-value",
    topics: ["hyp-concepts", "inferential"],
    summary: "Where α sits in one- and two-tailed tests, and how the p-value compares with it.",
    img: "assets/diagrams/aic-p-value-tails.svg",
    alt: "Top: two-tailed test with α = 0.05 split into two red tails of 0.025 beyond −1.96 and +1.96; the middle is the fail-to-reject region. Bottom: one-tailed test (Hₐ: μ > μ₀) with α = 0.05 as the whole tail beyond 1.645; a test statistic z = 2.20 cuts off a smaller blue tail, the p-value 0.014, which is less than α, so H₀ is rejected.",
    points: [
      "Two-tailed (≠) splits α in two: critical z = ±1.96 at α = 0.05. One-tailed (> or <) puts all of α in one tail: z = 1.645.",
      "The p-value is the area beyond the test statistic: the chance of a result this extreme if H₀ were true.",
      "p < α → reject H₀. 'If p is low, H₀ must go.'"
    ]
  },
  // ---------------------------------------------------------------- Improve
  {
    id: "aic-scatter-patterns",
    phase: "improve",
    kind: "diagram",
    title: "Scatter plot patterns and r",
    topics: ["correlation"],
    summary: "What strong, weak, zero and negative correlation look like, and why r near 0 does not mean 'no relationship'.",
    img: "assets/diagrams/aic-scatter-patterns.svg",
    alt: "Six scatter plots: strong positive r ≈ 0.9; weak positive r ≈ 0.4; no correlation r ≈ 0; weak negative r ≈ −0.4; strong negative r ≈ −0.9; and a U-shaped curve with r ≈ 0 although y clearly depends on x.",
    points: [
      "The sign of r gives the direction; |r| gives the strength of the straight-line link.",
      "r only measures linear association: a curve can give r ≈ 0. Always plot the data.",
      "In simple regression R² = r², e.g. r = −0.9 → R² = 0.81.",
      "Correlation is not causation: a lurking variable can drive both."
    ]
  },
  {
    id: "aic-regression-line",
    phase: "improve",
    kind: "diagram",
    title: "Regression line anatomy",
    topics: ["regression"],
    summary: "Intercept, slope, fitted value and residual on a simple least-squares line.",
    img: "assets/diagrams/aic-regression-line.svg",
    alt: "Scatter of 12 points with fitted line ŷ = 2.5 + 0.79x. The line meets x = 0 at the intercept b₀ = 2.5, drawn dashed because it lies outside the data. A slope triangle shows run 2 and rise 1.58, so b₁ = 0.79. One point at x = 5.7 lies above the line; the vertical gap between the observed y and the fitted value ŷ on the line is the residual e = y − ŷ. Least squares minimises the sum of squared residuals.",
    points: [
      "b₁ = change in ŷ for a one-unit increase in x; b₀ = ŷ when x = 0.",
      "Residual = observed − fitted; least squares picks the line with the smallest Σe².",
      "Do not predict outside the range of x in the data (the dashed part)."
    ]
  },
  {
    id: "aic-residual-patterns",
    phase: "improve",
    kind: "diagram",
    title: "Residual plot patterns",
    topics: ["regression"],
    summary: "Four residual plots: the random band you want and three patterns that break a regression assumption.",
    img: "assets/diagrams/aic-residual-patterns.svg",
    alt: "Four panels. Residuals versus fitted value as a random band around zero: assumptions OK. Residuals that fan out as the fitted value grows: a funnel, non-constant variance. Residuals in a U shape: a curve, missing X² term. Residuals versus observation order rising steadily: a trend, residuals not independent.",
    points: [
      "Good residuals: centred on zero, constant spread, no pattern, roughly normal.",
      "Funnel → unequal variance: try a transformation (e.g. Box-Cox or log of Y).",
      "Curve → add a squared term or transform X.",
      "Pattern against time order → something drifting that the model does not include."
    ]
  },
  {
    id: "aic-ci-vs-pi",
    phase: "improve",
    kind: "diagram",
    title: "Confidence vs prediction interval",
    topics: ["regression"],
    summary: "The 95% confidence band (where the mean y lies) is narrower than the 95% prediction band (where one new y will fall).",
    img: "assets/diagrams/aic-ci-vs-pi.svg",
    alt: "Fitted regression line through 14 points. A dark band around the line is the 95% confidence interval for the mean y; a wider light band with dashed edges is the 95% prediction interval for a single new y. Both bands pinch to their narrowest at the mean of x and widen towards the ends.",
    points: [
      "CI = range for the average y at a given x; PI = range for one new observation at that x.",
      "PI is always wider than CI because it adds the scatter of single values.",
      "Both are narrowest at x̄ and widen as x moves away from it."
    ]
  },
  // ---------------------------------------------------------------- Control
  {
    id: "aic-poka-yoke",
    phase: "control",
    kind: "diagram",
    title: "Control hierarchy and poka-yoke",
    topics: ["lean-control", "control-plan"],
    summary: "Controls ranked from strongest to weakest, and the three poka-yoke methods with an example each.",
    img: "assets/diagrams/aic-poka-yoke.svg",
    alt: "Ladder from strongest to weakest: 1 eliminate the cause (design it out); 2 poka-yoke that prevents the error; 3 poka-yoke that detects it at once; 4 SPC chart with response plan; 5 inspection, training and procedures. Below, three cards. Contact: senses shape, size, position or colour, e.g. an offset pin lets a bracket fit one way only. Fixed-value: checks a set number of parts or moves, e.g. an empty pocket in a 6-screw kit tray shows a miss. Motion-step: checks the steps run in order, e.g. the press will not cycle until steps 1 and 2 are sensed.",
    points: [
      "Prevention (the error cannot happen) beats detection (the error is caught at once).",
      "Inspection and training are the weakest controls: they rely on people noticing.",
      "Contact = physical feature; fixed-value = count; motion-step = sequence."
    ]
  },
  {
    id: "aic-chart-selection",
    phase: "control",
    kind: "diagram",
    title: "Choosing a control chart",
    topics: ["spc"],
    summary: "Pick the chart from the data type, then the subgroup size (continuous) or defectives vs defects and constant vs varying sample (attribute).",
    img: "assets/diagrams/aic-chart-selection.svg",
    alt: "Flowchart. Continuous data: subgroup size 1 → I-MR chart; 2 to 9 → Xbar-R; 10 or more → Xbar-S. Attribute data splits into defectives (bad units) and defects (flaws counted). Defectives: constant n → np chart; varying n → p chart. Defects: constant area of opportunity → c chart; varying area → u chart. Notes: p and u charts also work with constant n; CUSUM or EWMA for small shifts under 1.5σ; read the R, S or MR chart first.",
    points: [
      "Defective = the whole unit is bad (p, np). Defect = a flaw; one unit can have several (c, u).",
      "np and c charts need a constant sample size or area; p and u charts handle varying sizes.",
      "Check the range, S or MR chart first: if spread is out of control, the limits of the mean chart are not reliable."
    ]
  },
  {
    id: "aic-control-chart-signals",
    phase: "control",
    kind: "diagram",
    title: "Control chart zones and signals",
    topics: ["spc-rules", "spc"],
    summary: "Centre line, 3σ control limits and zones A, B, C, with four common out-of-control patterns marked.",
    img: "assets/diagrams/aic-control-chart-signals.svg",
    alt: "Control chart with CL, UCL and LCL at ±3σ and dashed lines at ±1σ and ±2σ; zone C lies within 1σ, B between 1σ and 2σ, A between 2σ and 3σ. Marked signals: 1, a point above the UCL; 2, two of three points in the lower zone A; 3, nine points in a row above the centre line; 4, seven points in a row rising. A note says signals 1 to 3 hold under both Western Electric and Nelson/Minitab rules, and the trend is Nelson/Minitab test 3.",
    points: [
      "Run on one side: Western Electric uses 8 in a row, Nelson/Minitab 9; 9 or more is a signal under both.",
      "Trend: Nelson/Minitab flags 6 points in a row steadily rising or falling.",
      "2 of 3 beyond 2σ and 4 of 5 beyond 1σ count only when the points are on the same side.",
      "A signal means a special cause: investigate it; do not adjust a stable process for common-cause noise (tampering)."
    ]
  },
  {
    id: "aic-control-vs-spec",
    phase: "control",
    kind: "diagram",
    title: "Control limits vs specification limits",
    topics: ["spc", "capability"],
    summary: "Control limits come from the process (voice of the process); specification limits come from the customer (voice of the customer).",
    img: "assets/diagrams/aic-control-vs-spec.svg",
    alt: "A process distribution with control limits LCL and UCL at x̄ ± 3σ, labelled voice of the process, and wider spec limits LSL and USL, labelled voice of the customer. Table: control limits are set by process data, answer 'is it stable?' and are used on control charts; spec limits are set by the customer or design, answer 'is it acceptable?' and are used for capability (Cp, Cpk).",
    points: [
      "Control limits are calculated from the data; spec limits are given by the customer.",
      "A process can be in control yet make out-of-spec parts, and vice versa.",
      "Never draw spec limits as control limits, and never set control limits from the specs."
    ]
  }
]);
