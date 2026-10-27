// Pack "analyze": learn pages for the topics whose pack is "analyze" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. Conventions: docs/research/iassc-gb-bok.md §3 (analyze) and §4.
LEARN.add([
  {
    topic: "multivari",
    summary: "A multi-vari chart is a passive, graphical study that splits the variation of a continuous Y into families: positional, cyclical and temporal. It shows where the variation lives so root-cause work can focus there. Fishbone and 5 Whys then generate and drill into possible causes, which data must verify.",
    points: [
      "Multi-vari uses data collected as the process runs, with no deliberate changes (unlike DOE).",
      "Best fit: continuous Y (length, thickness, time) and several discrete Xs (position, machine, shift, operator).",
      "Positional (within-piece): differences between locations on one unit, or between cavities, spindles or nests made at the same time.",
      "Cyclical (piece-to-piece): differences between consecutive units made close in time.",
      "Temporal (time-to-time): differences between groups taken at different hours, shifts or days.",
      "Find the largest family, then list the Xs that could drive it and test them (hypothesis tests, regression).",
      "Multi-vari is a screening tool: it does not prove a root cause.",
      "Pareto chart ranks categories by count or cost to pick what to attack first; fishbone (6M) organises possible causes; neither proves a cause.",
      "5 Whys: keep asking why until a process cause you can act on appears; five is a guideline, and the answer is a process, not a person.",
      "Phase placement: multi-vari is an Analyze tool; the IASSC BoK lists fishbone (with the X-Y matrix and FMEA) under Measure.",
      "Plan the study: several consecutive units at set intervals, several positions per unit, over long enough to see the usual range; confirm the gage (MSA) first. Xs that did not vary during the study cannot show up."
    ],
    table: {
      title: "Multi-vari families of variation",
      head: ["Family", "Compares", "Typical causes"],
      rows: [
        ["Positional (within-piece)", "Points on one unit; cavities, spindles, fixtures at the same time", "Tool alignment, taper, cavity or nest differences"],
        ["Cyclical (piece-to-piece)", "Consecutive units", "Loading, clamping, material lot, cycle-to-cycle setting"],
        ["Temporal (time-to-time)", "Groups at different hours, shifts, days", "Warm-up, tool wear, ambient temperature, shift change"]
      ]
    },
    traps: [
      "Cavities of one mould or heads of one filler differ at the same time: that is positional, not cyclical.",
      "A clear multi-vari pattern is not proof of cause; verify the suspect X with data.",
      "Pareto prioritises; it does not find causes. Fishbone lists causes; it does not rank them.",
      "Multi-vari (chart of variation families) is not multivariate statistics (many Ys modelled together)."
    ],
    terms: [
      { term: "Multi-vari chart", def: "Plot of a continuous Y by position, unit and time that shows which family of variation dominates." },
      { term: "Root cause", def: "The cause which, once removed, stops the problem from recurring." },
      { term: "Fishbone (Ishikawa)", def: "Cause-and-effect diagram grouping possible causes by category (Man, Machine, Method, Material, Measurement, Mother Nature)." }
    ]
  },
  {
    topic: "inferential",
    summary: "Inference draws conclusions about a population from a sample. Sampling must be random and representative. The Central Limit Theorem makes sample means approximately normal, which is the basis for confidence intervals and most hypothesis tests.",
    points: [
      "Parameters describe the population (μ, σ, p) and are usually unknown; statistics describe a sample (x̄, s, p̂) and estimate them.",
      "Simple random: every unit has an equal chance of selection.",
      "Stratified: split into strata (shift, line, supplier) and sample randomly within each. Use it when strata differ.",
      "Systematic: every k-th unit. Biased if the process has a cycle with the same period as k.",
      "Cluster: pick whole groups (pallets, boxes, days) at random and measure all units in them; cheap but less precise.",
      "Sampling error is the random gap between a statistic and its parameter; it shrinks as n grows. Bias (for example convenience sampling) does not.",
      "CLT: sample means approach a normal distribution as n grows (n ≥ 30 rule of thumb), whatever the population shape, with mean μ and standard error σ/√n.",
      "A 95% CI means the method captures μ in about 95% of repeated samples; it is not where 95% of individual values fall.",
      "Higher confidence → wider interval. Larger n → narrower interval. Four times the n halves the width.",
      "Use z when σ is known; use t with n − 1 df when σ is estimated by s (always wider than z).",
      "Proportional stratified allocation: sample every stratum at the same fraction n/N (200 of 4,000 → 5% of each shift)."
    ],
    formulas: [
      { name: "Standard error of the mean", f: "SE = σ / √n" },
      { name: "CI for the mean, σ known", f: "x̄ ± z(α/2) × σ / √n   (z = 1.645 for 90%, 1.96 for 95%, 2.576 for 99%)" },
      { name: "CI for the mean, σ unknown", f: "x̄ ± t(α/2, n − 1) × s / √n" },
      { name: "Sample size for a mean", f: "n = (z × σ / E)², round up" },
      { name: "Sample size for a proportion", f: "n = z² × p(1 − p) / E², round up; use p = 0.5 if no estimate (95%, ±5 points → 385)" }
    ],
    traps: [
      "Dividing σ by n instead of √n is the most common calculation slip.",
      "The CLT is about the distribution of means, not of individual values.",
      "Sample sizes are always rounded up (96.04 → 97).",
      "A CI for the mean is not a range for individual values or for future sample means."
    ],
    terms: [
      { term: "Population", def: "Every unit of interest; described by parameters." },
      { term: "Sample", def: "The units actually measured; described by statistics." },
      { term: "Margin of error (E)", def: "Half-width of a confidence interval." }
    ]
  },
  {
    topic: "hyp-concepts",
    summary: "A hypothesis test decides whether sample data give enough evidence against a null hypothesis of no difference. The team sets the risk of a false alarm (α) before testing and reads the p-value against it. A significant result still needs a practical check: is the difference big enough to matter?",
    points: [
      "H0 always contains the equality (no difference, no effect). Ha is the claim to show (≠, < or >).",
      "Ha with ≠ → two-tailed; Ha with < or > → one-tailed.",
      "Decision rule: p ≤ α → reject H0 ('if p is low, H0 must go'); p > α → fail to reject H0.",
      "Never 'accept H0': a non-significant result may come from too little data (low power).",
      "α default is 0.05 (95% confidence); at 90% confidence α = 0.10.",
      "Type I error (α): rejecting a true H0, a false alarm, producer's risk.",
      "Type II error (β): failing to reject a false H0, a missed effect, consumer's risk.",
      "Power = 1 − β, the chance of detecting a real difference of the planned size; 0.80 to 0.90 is common.",
      "For a fixed n, lowering α raises β. Only a larger n lowers both.",
      "Required n grows with σ, confidence and power, and falls when the difference to detect is larger.",
      "Statistical significance is not practical significance: with large samples tiny differences become significant.",
      "Running many tests inflates false alarms: P(at least one) = 1 − (1 − α)^k, e.g. 10 tests at 0.05 → 0.40."
    ],
    table: {
      title: "Decision outcomes",
      head: ["Decision", "H0 true", "H0 false"],
      rows: [
        ["Fail to reject H0", "Correct (confidence 1 − α)", "Type II error (β)"],
        ["Reject H0", "Type I error (α)", "Correct (power 1 − β)"]
      ]
    },
    traps: [
      "The p-value is not the probability that H0 is true; it is the chance of data this extreme if H0 were true.",
      "Check which α applies: 'confidence 90%' means compare p with 0.10.",
      "Type I = α = producer's risk; Type II = β = consumer's risk. Power is 1 − β, not 1 − α.",
      "Do not change α after seeing the p-value."
    ],
    terms: [
      { term: "p-value", def: "Probability, assuming H0 is true, of a result at least as extreme as the one observed." },
      { term: "Significance level (α)", def: "The accepted risk of a Type I error, set before the test." },
      { term: "Power", def: "1 − β: probability of rejecting H0 when a real difference of the planned size exists." }
    ]
  },
  {
    topic: "hyp-normal",
    summary: "Parametric tests compare means and variances of continuous, roughly normal data. Pick the test from what is compared (mean or variance), how many groups, and whether data are paired. Check normality first, and equal variances before a pooled t-test or ANOVA.",
    points: [
      "Check normality first: Anderson-Darling (or Ryan-Joiner) has H0 = data are normal. p > 0.05 → fail to reject, treat as normal; p ≤ 0.05 → not normal, consider a transformation or a non-parametric test.",
      "Test statistics follow known distributions: t (means, σ unknown), χ² (one variance), F (two variances, ANOVA).",
      "1-sample Z when σ is known; 1-sample t when σ is estimated by s (df = n − 1).",
      "2-sample t for two independent groups; pooled df = n₁ + n₂ − 2 when variances are equal; with unequal variances use the unpooled (Welch) t.",
      "Paired t for two measurements on the same units (before/after, two gages on the same parts); it tests the mean difference and removes unit-to-unit variation, so it has more power.",
      "1-sample variance test: χ² = (n − 1)s²/σ₀² with n − 1 df.",
      "F-test compares two variances of normal data; Bartlett compares two or more (normal data); Levene works for two or more and is robust to non-normal data.",
      "One-way ANOVA tests three or more means at once; running many t-tests inflates α (6 pairs at 0.05 → about 26% chance of a false alarm).",
      "ANOVA assumptions: independent samples, normal residuals, equal variances.",
      "F = MS between ÷ MS within; df = k − 1 and N − k. A significant F says at least one mean differs; Tukey or similar shows which.",
      "Reading a table: MS = SS ÷ DF, then F = MS factor ÷ MS error, then compare p with α.",
      "Unequal variances (Levene/F p ≤ α): use the unpooled (Welch) 2-sample t. Tukey intervals for differences that exclude 0 mark the pairs that differ."
    ],
    formulas: [
      { name: "1-sample t", f: "t = (x̄ − μ₀) / (s / √n), df = n − 1" },
      { name: "1-sample variance", f: "χ² = (n − 1)s² / σ₀², df = n − 1" },
      { name: "Two variances", f: "F = s₁² / s₂² (larger variance on top)" },
      { name: "One-way ANOVA", f: "F = MS between / MS within; MS = SS / DF" }
    ],
    table: {
      title: "Which test when (normal data)",
      head: ["Question", "Test"],
      rows: [
        ["One mean vs target, σ known", "1-sample Z"],
        ["One mean vs target, σ unknown", "1-sample t"],
        ["Two independent means", "2-sample t"],
        ["Before/after on the same units", "Paired t"],
        ["One variance vs target", "1-sample variance (χ²)"],
        ["Two variances", "F-test (Levene if non-normal)"],
        ["Three or more variances", "Bartlett (Levene if non-normal)"],
        ["Three or more means", "One-way ANOVA"]
      ]
    },
    traps: [
      "Using a 2-sample t on paired data throws away power; using a paired t on independent groups is invalid.",
      "ANOVA tests means, not variances; a significant F does not say which means differ.",
      "For small n with σ unknown, compare with the t critical value, not 1.96.",
      "Bartlett needs normal data; with skewed data use Levene.",
      "In a normality test, a high p-value is the 'good' result: H0 is normality, so p > α means no evidence against normal data."
    ],
    terms: [
      { term: "Degrees of freedom", def: "Number of values free to vary after estimating parameters, e.g. n − 1 for one sample." },
      { term: "Pooled variance", def: "Weighted average of two group variances, used when they are assumed equal." },
      { term: "Post-hoc test", def: "Pairwise comparison after a significant ANOVA (e.g. Tukey) to find which means differ." }
    ]
  },
  {
    topic: "hyp-nonnormal",
    summary: "When continuous data are clearly non-normal, non-parametric tests compare medians using ranks or counts. Attribute data use proportion tests and χ² tests. Pick the test by data type, number of groups, and whether the design is paired or blocked.",
    points: [
      "Non-parametric tests make fewer assumptions but have less power than their parametric equivalents on normal data.",
      "1-sample sign: median vs target, no shape assumption, least power.",
      "1-sample Wilcoxon: median vs target, assumes a symmetric distribution, more power than the sign test.",
      "Mann-Whitney: two independent groups (non-parametric 2-sample t).",
      "Kruskal-Wallis: three or more independent groups (non-parametric one-way ANOVA); more powerful than Mood's median when there are no outliers.",
      "Mood's median: two or more groups; robust to outliers.",
      "Friedman: randomized block design (treatment plus block, one value per cell).",
      "1-proportion test: one proportion vs target; 2-proportion test: two groups with a pass/fail outcome.",
      "χ² goodness of fit: observed counts vs an expected distribution, df = categories − 1.",
      "χ² contingency table: association between two categorical variables, df = (r − 1)(c − 1); E = row total × column total ÷ grand total.",
      "Every expected count should be at least 5; otherwise merge categories or collect more data.",
      "A significant χ² shows association, not cause."
    ],
    formulas: [
      { name: "1-proportion z", f: "z = (p̂ − p₀) / √(p₀(1 − p₀) / n)" },
      { name: "χ² statistic", f: "χ² = Σ (O − E)² / E" },
      { name: "Expected count", f: "E = row total × column total / grand total" },
      { name: "Contingency df", f: "df = (rows − 1) × (columns − 1)" }
    ],
    table: {
      title: "Which test when (non-normal and attribute data)",
      head: ["Question", "Test", "Parametric counterpart"],
      rows: [
        ["One median vs target, skewed", "1-sample sign", "1-sample t"],
        ["One median vs target, symmetric", "1-sample Wilcoxon", "1-sample t"],
        ["Two independent medians", "Mann-Whitney", "2-sample t"],
        ["3+ medians, no outliers", "Kruskal-Wallis", "One-way ANOVA"],
        ["3+ medians, outliers", "Mood's median", "One-way ANOVA"],
        ["Treatments in blocks", "Friedman", "Two-way ANOVA (no replication)"],
        ["One proportion vs target", "1-proportion test", "—"],
        ["Two proportions", "2-proportion test", "—"],
        ["Counts vs expected distribution", "χ² goodness of fit", "—"],
        ["Two categorical variables", "χ² contingency table", "—"]
      ]
    },
    traps: [
      "Wilcoxon needs symmetry; for skewed data use the sign test.",
      "Kruskal-Wallis vs Mood's median: outliers point to Mood's; otherwise Kruskal-Wallis has more power.",
      "Friedman is for blocked designs; independent groups use Kruskal-Wallis.",
      "Contingency df multiplies (r − 1)(c − 1); goodness-of-fit df is k − 1.",
      "The ≥ 5 rule applies to expected counts, not observed counts."
    ],
    terms: [
      { term: "Non-parametric test", def: "Test that does not assume a specific distribution; usually works on ranks or medians." },
      { term: "Contingency table", def: "Table of counts cross-classified by two categorical variables." },
      { term: "Randomized block", def: "Design in which each block (taster, day, operator) receives every treatment." }
    ]
  }
]);
