// Pack "measure1": learn pages for process-map, basic-stats, probability, distributions.
// Format: docs/CONTENT_GUIDE.md.
LEARN.add([
  {
    topic: "process-map",
    summary: "Measure starts by documenting the process and listing every input (X) that could drive the output (Y). Fishbone, process maps, SIPOC and VSM describe the process; the X-Y matrix and FMEA narrow the Xs to the few worth measuring. IASSC places all of these in the Measure phase.",
    points: [
      "Fishbone (Ishikawa) groups possible causes under the 6M: Man/People, Machine, Method, Material, Measurement, Mother Nature (environment). Its output is a list of potential Xs, not proven causes.",
      "SIPOC = Suppliers, Inputs, Process (4-7 high-level steps), Outputs, Customers. It sets scope and boundaries; teams often fill it in starting from P, then O, C, I, S.",
      "Detailed flowchart: every step, decision diamond and rework loop. Swim-lane map: the same steps placed in lanes by role or department, showing hand-offs.",
      "Value stream map: material and information flow, data boxes (cycle time, changeover, uptime), inventory, and a timeline of value-added vs non-value-added time. Draw the current state, then a future state.",
      "Takt time = available production time ÷ customer demand. A step whose cycle time is above takt cannot keep up with demand.",
      "Lead time = total time a unit spends in the process; on a VSM each inventory buffer adds inventory ÷ daily demand days (Little's law), summed over all buffers. Process cycle efficiency (PCE) = value-added time ÷ total lead time.",
      "X-Y (cause and effect) matrix: rows = Xs, columns = Ys with importance weights (1-10); score each X-Y link 0, 1, 3 or 9; weighted total per X = Σ(weight × score). Top Xs go to FMEA and data collection.",
      "FMEA rates each failure mode for Severity, Occurrence and Detection on 1-10 scales; RPN = S × O × D (1-1,000).",
      "Severity 9-10 (hazardous) needs action whatever the RPN. After actions, re-score and recompute the RPN.",
      "Prevention lowers Occurrence; added checks lower Detection; Severity changes only when a design change removes or softens the effect.",
      "AIAG-VDA (2019) replaced RPN with Action Priority (high/medium/low, S first, then O, then D). The IASSC exam uses RPN."
    ],
    formulas: [
      { name: "Takt time", f: "Takt = available time ÷ customer demand" },
      { name: "Process cycle efficiency", f: "PCE = value-added time ÷ total lead time" },
      { name: "X-Y matrix total", f: "Score(X) = Σ (weight of Yj × score of X against Yj)" },
      { name: "Risk priority number", f: "RPN = S × O × D" }
    ],
    table: {
      title: "Which map or tool for which job",
      head: ["Tool", "Shows", "Typical use"],
      rows: [
        ["SIPOC", "5 columns, 4-7 steps", "Scope and boundaries"],
        ["Flowchart / swim-lane", "Steps, decisions, roles", "Find rework loops and hand-offs"],
        ["VSM", "Flow, data boxes, VA/NVA timeline", "Find waste and lead time"],
        ["Fishbone", "Causes by 6M", "List potential Xs"],
        ["X-Y matrix", "Weighted X vs Y scores", "Prioritise Xs"],
        ["FMEA", "S, O, D, RPN", "Rank risks and actions"]
      ]
    },
    traps: [
      "Detection 10 means the failure will almost certainly NOT be detected; 1 is the best score.",
      "A fishbone or X-Y matrix gives hypotheses from team judgement; root causes are confirmed with data in Analyze.",
      "Takt time comes from customer demand, not from the process; you never 'raise takt' to match a slow step. Subtract breaks and planned stops from available time first.",
      "PCE divides value-added time by total lead time, not by non-value-added time; put both in the same units.",
      "There is no universal RPN cut-off (100 or 125 are local habits); very different risks can share the same RPN, so check severity too."
    ],
    terms: [
      { term: "KPIV / KPOV", def: "Key process input / output variable: the Xs and Ys of Y = f(X)." },
      { term: "Cycle time", def: "Time to complete one unit at a step." },
      { term: "PFMEA / DFMEA", def: "FMEA of a process / of a product design." }
    ]
  },
  {
    topic: "basic-stats",
    summary: "Descriptive statistics summarise the baseline data collected in Measure: what type of data you have, where it is centred, how widely it spreads and what shape it has. The data type decides which charts, capability methods and tests you can use later.",
    points: [
      "Continuous (variable) data are measured on a scale (time, weight, length). Discrete (attribute) data are counts or categories.",
      "Scales: nominal (named categories, no order), ordinal (ordered, unequal gaps, e.g. ratings), interval (equal gaps, arbitrary zero, e.g. °C), ratio (equal gaps and a true zero, e.g. time, weight, kelvin).",
      "Centre: mean (sensitive to outliers), median (middle ordered value; robust), mode (most frequent). In a symmetric distribution mean ≈ median.",
      "Spread: range = max − min; variance; standard deviation; IQR = Q3 − Q1.",
      "Sample variance divides by n − 1; population variance divides by N. Sample statistics x̄, s estimate population parameters μ, σ.",
      "Skewness: right (positive) skew → mean > median; left (negative) skew → mean < median. Times bounded at zero are often right-skewed.",
      "Kurtosis (Minitab reports excess kurtosis, normal = 0): positive = heavier tails (more extreme values, usually a sharper peak); negative = lighter tails, flatter shape.",
      "Anderson-Darling test: H₀ = data are normal. p ≤ 0.05 → reject, not normal; p > 0.05 → fail to reject, treat as normal. A normal probability plot with points on a straight line also suggests normality.",
      "Common reasons for non-normal data: mixed populations (bimodal histogram), outliers, natural bounds, poor gage resolution (rounded data stack up in ties and can fail Anderson-Darling on their own). Very large samples make the test flag trivial departures, so read the probability plot too. A histogram cut off sharply at the spec limits points to sorted parts or edited data.",
      "Histogram: shape, centre and spread of one variable. Box plot: median, Q1-Q3 box, whiskers to 1.5 × IQR, points beyond = outliers; good for comparing groups. Dot plot: small data sets. Run chart: behaviour over time. Scatter plot: two continuous variables.",
      "A sample must be random and representative; convenience samples (easy-to-reach units) are biased."
    ],
    formulas: [
      { name: "Mean", f: "x̄ = Σx ÷ n" },
      { name: "Sample variance", f: "s² = Σ(x − x̄)² ÷ (n − 1)" },
      { name: "Population variance", f: "σ² = Σ(x − μ)² ÷ N" },
      { name: "Box plot outlier fences", f: "Q1 − 1.5 × IQR and Q3 + 1.5 × IQR" }
    ],
    table: {
      title: "Measurement scales",
      head: ["Scale", "Order", "Equal gaps", "True zero", "Example"],
      rows: [
        ["Nominal", "No", "No", "No", "Defect type, colour"],
        ["Ordinal", "Yes", "No", "No", "Rating poor-excellent"],
        ["Interval", "Yes", "Yes", "No", "Temperature in °C"],
        ["Ratio", "Yes", "Yes", "Yes", "Time, weight, length"]
      ]
    },
    traps: [
      "In a normality test a LOW p-value means NOT normal, because H₀ is normality.",
      "Never 'accept H₀' or say the data are proven normal; you fail to reject.",
      "Standard deviation and variance differ by a square: s = √s².",
      "A rating scale of 1-5 is ordinal even though it uses numbers.",
      "A histogram loses time order; to see drift or trends use a run chart."
    ],
    terms: [
      { term: "IQR", def: "Interquartile range, Q3 − Q1: the spread of the middle 50% of the data." },
      { term: "Stratification", def: "Splitting data by source (machine, shift, supplier) to reveal differences hidden in the pooled data." }
    ]
  },
  {
    topic: "probability",
    summary: "Probability rules underpin the distributions, yield and sampling calculations used later. This is a course topic outside the IASSC GB BoK, so expect it only as support for other questions.",
    points: [
      "Probability runs from 0 (impossible) to 1 (certain); all outcomes in the sample space add up to 1.",
      "Mutually exclusive events cannot happen together: P(A and B) = 0.",
      "Independent events do not affect each other: P(A | B) = P(A), so P(A and B) = P(A) × P(B).",
      "Mutually exclusive is not the same as independent: if A excludes B, knowing B happened tells you A did not.",
      "Addition rule: P(A or B) = P(A) + P(B) − P(A and B); the last term is 0 for mutually exclusive events.",
      "Multiplication rule for independent steps: the chance all steps succeed is the product of their probabilities (the idea behind rolled throughput yield).",
      "Complement: P(not A) = 1 − P(A); 'at least one' = 1 − P(none).",
      "Permutations count ordered arrangements; combinations count unordered groups."
    ],
    formulas: [
      { name: "Addition rule", f: "P(A or B) = P(A) + P(B) − P(A and B)" },
      { name: "Multiplication rule (independent)", f: "P(A and B) = P(A) × P(B)" },
      { name: "Permutations", f: "nPr = n! ÷ (n − r)!" },
      { name: "Combinations", f: "nCr = n! ÷ (r! × (n − r)!)" }
    ],
    traps: [
      "Adding probabilities without subtracting the overlap double-counts outcomes where both events occur.",
      "If order does not matter, divide the permutation count by r!.",
      "Multiplying probabilities is valid only for independent events."
    ]
  },
  {
    topic: "distributions",
    summary: "A distribution describes how values of a variable are spread. Picking the right one (normal for measurements, binomial for defectives, Poisson for defect counts) lets a Green Belt turn data into probabilities, yields and test results; t, χ² and F underlie the hypothesis tests in Analyze.",
    points: [
      "Normal: continuous, symmetric bell curve, mean = median = mode, set by μ and σ; total area = 1.",
      "Empirical rule: ±1σ holds 68.27%, ±2σ 95.45%, ±3σ 99.73%. One tail beyond +1σ ≈ 15.87%, beyond +2σ ≈ 2.275%, beyond +3σ ≈ 0.135%.",
      "Z = (x − μ) ÷ σ: the number of standard deviations a value lies from the mean. A Z table gives the area to the left of Z; area to the right = 1 − table value.",
      "Binomial: number of defectives in n independent pass/fail trials with constant p. Mean np, variance np(1 − p).",
      "Poisson: number of defects (events) per unit, area or time; mean = variance = λ. Right-skewed for small λ.",
      "Exponential: time between Poisson events. Lognormal: right-skewed positive data (e.g. times). Weibull: time to failure, reliability. Hypergeometric: defectives drawn without replacement from a small lot.",
      "t: like the normal but with heavier tails; used for means when σ is unknown and estimated by s (small samples). It approaches the normal as degrees of freedom grow.",
      "χ² (chi-square): right-skewed, used for one variance vs a target, goodness of fit and contingency tables.",
      "F: ratio of two variances (s₁² ÷ s₂²); used to compare two variances and in ANOVA."
    ],
    formulas: [
      { name: "Z-score", f: "Z = (x − μ) ÷ σ" },
      { name: "Binomial", f: "P(x) = nCx × pˣ × (1 − p)ⁿ⁻ˣ; mean np; variance np(1 − p)" },
      { name: "Poisson", f: "P(x) = e⁻λ × λˣ ÷ x!; mean = variance = λ" },
      { name: "F statistic", f: "F = s₁² ÷ s₂²" }
    ],
    table: {
      title: "Which distribution when",
      head: ["Distribution", "Data", "Typical use"],
      rows: [
        ["Normal", "Continuous", "Measurements, Z-scores, capability"],
        ["Binomial", "Discrete: defectives", "Pass/fail units in a sample of n"],
        ["Poisson", "Discrete: defects", "Defects per unit, area or time"],
        ["t", "Continuous (means)", "Small samples, σ unknown"],
        ["χ²", "Variances, counts", "One variance, contingency tables"],
        ["F", "Variances", "Two variances, ANOVA"]
      ]
    },
    traps: [
      "Defectives (unit good/bad) → binomial; defects (several possible per unit) → Poisson.",
      "Mean = variance is Poisson; binomial variance np(1 − p) is smaller than its mean.",
      "Read the question: 'beyond ±2σ' is both tails (4.55%); 'above +2σ' is one tail (2.275%).",
      "A Z-score is a position in standard deviations, not a probability.",
      "Comparing two variances uses F, not χ²; χ² compares one variance with a target."
    ],
    terms: [
      { term: "Degrees of freedom", def: "Number of independent values left to estimate a quantity, e.g. n − 1 for a sample variance." },
      { term: "λ (lambda)", def: "Average number of events per interval in a Poisson distribution." }
    ]
  }
]);
