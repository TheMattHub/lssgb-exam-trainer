// Pack "analyze": questions for the topics whose pack is "analyze" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. Conventions: docs/research/iassc-gb-bok.md §3 (analyze) and §4.
QB.add([
  // ---------------- multivari ----------------
  {
    id: "AN-001", topic: "multivari", level: 1,
    q: "What is the main purpose of a multi-vari chart in the Analyze phase?",
    options: [
      { t: "To prove which input causes the defect by changing inputs on purpose", why: "Wrong: deliberately changing inputs is a designed experiment (DOE). A multi-vari study is passive: it observes the process as it runs and only points to where the variation lives." },
      { t: "To split variation into positional, cyclical and temporal families", why: "Correct: the multi-vari chart is a graphical screening tool that shows which family of variation (within-piece, piece-to-piece, time-to-time) is largest, so root-cause work can focus there." },
      { t: "To compare the spread of the process with the specification limits", why: "Wrong: comparing process spread with specification limits is capability analysis (Cp, Cpk), a Measure-phase tool." },
      { t: "To rank defect categories from the most to the least frequent", why: "Wrong: ranking categories by frequency is a Pareto chart." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "AN-002", topic: "multivari", level: 2,
    q: "A shaft diameter is measured at both ends of each shaft. Five consecutive shafts are taken every hour. The multi-vari chart shows large differences between the two ends of each shaft, small differences between consecutive shafts and almost no change from hour to hour. Which family of variation dominates?",
    options: [
      { t: "Temporal (time-to-time) variation", why: "Wrong: temporal variation would show the hourly group averages moving; here they barely change." },
      { t: "Cyclical (piece-to-piece) variation", why: "Wrong: cyclical variation is the difference between consecutive units, which is small here." },
      { t: "Positional (within-piece) variation", why: "Correct: the two ends of the same shaft differ most, which is within-piece positional variation (for example taper from tool or fixture alignment)." },
      { t: "Measurement system variation", why: "Wrong: a multi-vari chart does not isolate gage error; that is the job of MSA (Gage R&R), which should already be done in Measure." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "AN-003", topic: "multivari", level: 2,
    q: "Plates are measured at three points each, and four consecutive plates are sampled every two hours. Readings within each plate are close together, the averages of consecutive plates jump up and down a lot, and the averages of the 2-hour groups are almost the same. Which family of variation dominates?",
    options: [
      { t: "Cyclical (piece-to-piece) variation", why: "Correct: the largest differences are between consecutive plates made close in time, which is cyclical (piece-to-piece) variation." },
      { t: "Positional (within-piece) variation", why: "Wrong: the three readings on each plate are close together, so within-piece variation is small." },
      { t: "Temporal (time-to-time) variation", why: "Wrong: the 2-hour group averages are almost the same, so time-to-time variation is small." },
      { t: "Reproducibility (operator-to-operator) variation", why: "Wrong: reproducibility is an MSA term for differences between appraisers using the same gage, not a multi-vari family." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "AN-004", topic: "multivari", level: 2,
    q: "In a multi-vari study, readings within each part and between consecutive parts are tight. Every day, however, the group of parts taken at 06:00 sits clearly higher than the groups taken at 10:00 and 14:00. What does this show?",
    options: [
      { t: "Positional variation, so the fixture should be checked", why: "Wrong: positional variation would appear as differences within each part, which are tight here." },
      { t: "Cyclical variation between consecutive parts", why: "Wrong: consecutive parts in the same group are close together." },
      { t: "Random noise, so the study should be repeated", why: "Wrong: a shift that repeats at the same time every day is a pattern, not noise." },
      { t: "Temporal variation, e.g. warm-up at shift start", why: "Correct: the group averages change with time of day, which is temporal (time-to-time) variation; look at warm-up, ambient temperature or shift-start practices." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "AN-005", topic: "multivari", level: 2,
    q: "An injection mould has four cavities. A multi-vari study shows that parts from cavity 3 are always heavier than the parts from the other cavities in the same shot. Which family of variation is this?",
    options: [
      { t: "Cyclical, because the parts come from one machine cycle", why: "Wrong: cyclical variation compares consecutive shots or units over a short time, not cavities within the same shot." },
      { t: "Positional, because it varies by location within one cycle", why: "Correct: differences between cavities, spindles, nests or positions made at the same time are positional variation." },
      { t: "Temporal, because the shots are made over time", why: "Wrong: temporal variation appears as a change between time groups (hours, shifts, days), not between cavities in one shot." },
      { t: "Common cause variation, so no family of variation can be assigned", why: "Wrong: a cavity that is always heavier is a consistent, assignable pattern, and multi-vari exists to locate exactly this kind of family." }
    ],
    answer: 1, ref: "Lesson 4.3; Web: asq.org multi-vari chart"
  },
  {
    id: "AN-006", topic: "multivari", level: 1,
    q: "Which data situation suits a multi-vari study best?",
    options: [
      { t: "An attribute Y (pass/fail) with one continuous X", why: "Wrong: a pass/fail Y with a continuous X calls for a different analysis (for example logistic regression or a proportions test by X band)." },
      { t: "Two continuous variables, to fit a straight line", why: "Wrong: two continuous variables call for a scatter plot, correlation and regression (Improve phase)." },
      { t: "Data from a designed experiment with factor levels set on purpose by the team", why: "Wrong: designed-experiment data are analysed with DOE tools; multi-vari uses data collected passively as the process runs." },
      { t: "A continuous Y with discrete Xs such as shift, machine and operator", why: "Correct: multi-vari charts plot a continuous output against discrete sources (position, unit, time, machine, shift) collected without changing the process." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "AN-007", topic: "multivari", level: 2,
    q: "A multi-vari study shows that most of the variation is piece-to-piece, with little positional or temporal variation. What should the team do next?",
    options: [
      { t: "Look at what changes from piece to piece and verify suspect Xs", why: "Correct: multi-vari narrows the search to the dominant family; the team then lists Xs that differ between consecutive pieces and confirms them with hypothesis tests or regression." },
      { t: "Adjust the machine every hour to remove the time-to-time effect", why: "Wrong: time-to-time (temporal) variation is small here, and adjusting a process for common variation (tampering) adds variation." },
      { t: "Declare the root cause proven and move to the Control phase", why: "Wrong: multi-vari is a screening tool. It shows where variation is, not which X causes it; causes still need verification." },
      { t: "Study tool wear across the positions measured on each part", why: "Wrong: that targets positional (within-piece) variation, which the study found to be small." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "AN-008", topic: "multivari", level: 2,
    q: "Which statement about the 5 Whys technique is correct?",
    options: [
      { t: "Always stop at exactly five questions so analyses are comparable", why: "Wrong: five is a rule of thumb. Some problems reach a root cause in three whys, others need more." },
      { t: "It is a statistical test that confirms the root cause", why: "Wrong: 5 Whys is a qualitative questioning method. A suspected cause should still be checked with data." },
      { t: "The analysis ends when it reaches the person responsible", why: "Wrong: problems usually come from the process, not from a person; stopping at blame hides the process cause that can be fixed." },
      { t: "Keep asking why until a process cause you can act on appears", why: "Correct: each answer becomes the next question, moving from symptom to a root cause that, once removed, stops the problem recurring." }
    ],
    answer: 3, ref: "Lesson 4.2"
  },
  {
    id: "AN-009", topic: "multivari", level: 2,
    q: "A team has six months of complaint counts by category and wants to choose which category to attack first. Then it wants to organise the possible causes of that category. Which pair of tools fits these two tasks?",
    options: [
      { t: "Fishbone diagram to rank the categories, then Pareto chart for causes", why: "Wrong: the tools are swapped. A fishbone does not rank anything; a Pareto chart ranks categories by count." },
      { t: "Pareto chart to pick the category, then fishbone diagram for causes", why: "Correct: the Pareto chart shows the vital few categories; the fishbone (Ishikawa) diagram organises possible causes by category (6M). Neither proves a cause: data must verify it." },
      { t: "Multi-vari chart for the ranking and for the causes", why: "Wrong: a multi-vari chart needs a continuous Y measured by position and time; it neither ranks complaint categories nor lists causes." },
      { t: "Histogram to rank the categories, then scatter plot for causes", why: "Wrong: a histogram shows the shape of one continuous variable and a scatter plot the relation between two continuous variables." }
    ],
    answer: 1, ref: "Lesson 4.2"
  },
  {
    id: "AN-010", topic: "multivari", level: 2,
    q: "Which pairing of hypothesis test and the distribution its test statistic follows (under H0) is correct?",
    options: [
      { t: "One-way ANOVA and the t distribution", why: "Wrong: the ANOVA statistic is a ratio of two variance estimates and follows the F distribution." },
      { t: "Two-variance F-test and the normal distribution", why: "Wrong: a ratio of two sample variances follows the F distribution, not the normal." },
      { t: "1-sample variance test and the χ² distribution", why: "Correct: (n − 1)s²/σ₀² follows a χ² distribution with n − 1 degrees of freedom when the data are normal." },
      { t: "1-sample t-test and the F distribution", why: "Wrong: the 1-sample t statistic follows the t distribution with n − 1 degrees of freedom." }
    ],
    answer: 2, ref: "Lesson 3.4"
  },

  // ---------------- inferential ----------------
  {
    id: "AN-011", topic: "inferential", level: 1,
    q: "Which of these is a parameter rather than a statistic?",
    options: [
      { t: "The mean x̄ of 30 parts sampled today", why: "Wrong: x̄ is computed from a sample, so it is a statistic that estimates the population mean μ." },
      { t: "The standard deviation σ of all parts made", why: "Correct: a parameter describes the whole population (μ, σ, p). It is usually unknown and estimated from sample statistics." },
      { t: "The standard deviation s of a sample of 50 orders", why: "Wrong: s is a sample statistic that estimates σ." },
      { t: "The proportion p̂ of defectives in this week's sample", why: "Wrong: p̂ (p-hat) is a sample statistic that estimates the population proportion p." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },
  {
    id: "AN-012", topic: "inferential", level: 2,
    q: "Invoices are processed by three teams that are known to work differently. The analyst wants a sample of 150 invoices that represents each team in proportion to its volume. Which sampling technique fits best?",
    options: [
      { t: "Cluster sampling", why: "Wrong: cluster sampling picks whole groups at random and measures everything in them; it could miss a team completely." },
      { t: "Systematic sampling", why: "Wrong: taking every k-th invoice does not guarantee each team is represented in proportion." },
      { t: "Stratified sampling", why: "Correct: split the population into strata (the three teams) and sample randomly within each, in proportion to volume; use it when strata differ." },
      { t: "Convenience sampling", why: "Wrong: taking the invoices easiest to reach is a non-probability sample and is likely to be biased." }
    ],
    answer: 2, ref: "Web: iassc.org GB BoK 3.2.2"
  },
  {
    id: "AN-013", topic: "inferential", level: 2,
    q: "An inspector takes every 8th part from a line fed by an 8-spindle machine that releases parts in a fixed rotation. What is the main risk of this sampling plan?",
    options: [
      { t: "Every sampled part may come from the same spindle", why: "Correct: systematic sampling is biased when the process has a cycle with the same period as the sampling interval; here it may sample one spindle only." },
      { t: "The sample becomes too large to analyse", why: "Wrong: the interval sets which parts are taken, not an excessive sample size." },
      { t: "It turns into stratified sampling by spindle", why: "Wrong: stratified sampling would deliberately sample every spindle; this plan may sample just one." },
      { t: "Systematic samples can never be used for inference", why: "Wrong: systematic sampling is a valid technique when the order has no cycle matching the interval." }
    ],
    answer: 0, ref: "Web: iassc.org GB BoK 3.2.2"
  },
  {
    id: "AN-014", topic: "inferential", level: 1,
    q: "A warehouse randomly selects 5 of its 200 pallets and inspects every carton on those 5 pallets. Which sampling technique is this?",
    options: [
      { t: "Simple random sampling", why: "Wrong: in simple random sampling every carton would have an equal, independent chance of selection; here whole pallets are chosen." },
      { t: "Stratified sampling", why: "Wrong: stratified sampling would take a random sample from every pallet (stratum), not all cartons from a few pallets." },
      { t: "Systematic sampling", why: "Wrong: systematic sampling takes every k-th unit in a sequence." },
      { t: "Cluster sampling", why: "Correct: whole groups (clusters = pallets) are chosen at random and all units in them are measured. It is cheap but usually less precise." }
    ],
    answer: 3, ref: "Web: iassc.org GB BoK 3.2.2"
  },
  {
    id: "AN-015", topic: "inferential", level: 1,
    q: "What is sampling error?",
    options: [
      { t: "A mistake made when recording or measuring the data", why: "Wrong: recording and measurement mistakes are non-sampling errors; they occur even if the whole population is measured." },
      { t: "Bias from choosing only the units that are easy to reach", why: "Wrong: that is selection bias. It does not shrink with a larger sample; sampling error does." },
      { t: "The gap between a statistic and the parameter it estimates", why: "Correct: because only part of the population is measured, x̄ differs from μ by chance. This random error gets smaller as n grows." },
      { t: "The gap between the sample mean and the specification target", why: "Wrong: distance from target describes process centring, not error from sampling." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-016", topic: "inferential", level: 1,
    q: "Which statement best describes the Central Limit Theorem?",
    options: [
      { t: "Individual values become normal once at least 30 are collected", why: "Wrong: the CLT is about the distribution of sample means; individual values keep the shape of the population." },
      { t: "The sample standard deviation equals σ when n is 30 or more", why: "Wrong: s is an estimate of σ at any sample size; the CLT says nothing about them being equal." },
      { t: "Sample means approach a normal distribution as n grows", why: "Correct: whatever the shape of the population, the distribution of sample means approaches normal as n increases (n ≥ 30 as a rule of thumb), with mean μ and standard error σ/√n." },
      { t: "Sample means are normal only when the population is normal", why: "Wrong: that removes the point of the CLT; means approach normality even from skewed populations." }
    ],
    answer: 2, ref: "Lesson 3.4"
  },
  {
    id: "AN-017", topic: "inferential", level: 3,
    q: "A process has standard deviation σ = 12. What is the standard error of the mean for samples of n = 36?",
    options: [
      { t: "2.0", why: "Correct: SE = σ/√n = 12/√36 = 12/6 = 2.0." },
      { t: "0.33", why: "Wrong: 12/36 divides by n instead of √n." },
      { t: "6.0", why: "Wrong: 6 is √36, the divisor, not the standard error." },
      { t: "12.0", why: "Wrong: 12 is the standard deviation of individual values; means vary less than individuals." }
    ],
    answer: 0, ref: "Lesson 3.4"
  },
  {
    id: "AN-018", topic: "inferential", level: 3,
    q: "A sample of n = 16 gives x̄ = 50.0. The process σ is known to be 4. What is the 95% confidence interval for the mean (z = 1.96)?",
    options: [
      { t: "42.16 to 57.84", why: "Wrong: this uses σ = 4 instead of the standard error σ/√n = 1 (50 ± 1.96 × 4)." },
      { t: "49.51 to 50.49", why: "Wrong: this divides σ by n (4/16 = 0.25) instead of by √n." },
      { t: "48.36 to 51.64", why: "Wrong: this uses z = 1.645, which gives a 90% two-sided interval." },
      { t: "48.04 to 51.96", why: "Correct: SE = 4/√16 = 1; CI = 50.0 ± 1.96 × 1 = 48.04 to 51.96." }
    ],
    answer: 3, ref: "Lesson 3.4; Web: NIST e-Handbook"
  },
  {
    id: "AN-019", topic: "inferential", level: 2,
    q: "A 95% confidence interval for the mean cycle time is 12.1 to 13.5 minutes. Which interpretation is correct?",
    options: [
      { t: "95% of individual cycle times fall between 12.1 and 13.5 minutes", why: "Wrong: a CI for the mean describes where the mean is, not where individual values fall; individuals spread far wider." },
      { t: "We are 95% confident the interval contains the true process mean", why: "Correct: the method captures the true mean μ in about 95% of repeated samples, so we are 95% confident this interval contains it." },
      { t: "The sample mean has a 95% chance of lying in this range", why: "Wrong: the sample mean is known exactly; it is the centre of the interval. The uncertainty is about μ." },
      { t: "Any future sample mean will fall between 12.1 and 13.5", why: "Wrong: future sample means vary; a CI makes no promise about them." }
    ],
    answer: 1, ref: "Lesson 3.4; Web: NIST e-Handbook"
  },
  {
    id: "AN-020", topic: "inferential", level: 2,
    q: "With everything else unchanged, which change makes a confidence interval for the mean narrower?",
    options: [
      { t: "Raising the confidence level from 95% to 99%", why: "Wrong: a higher confidence level uses a larger z or t value, which widens the interval." },
      { t: "Using data from a process with a larger standard deviation", why: "Wrong: a larger σ (or s) increases the standard error and widens the interval." },
      { t: "Using t instead of z for the same data and sample size", why: "Wrong: t critical values are larger than z, so the interval gets wider, not narrower." },
      { t: "Increasing the sample size from 30 to 120", why: "Correct: the half-width is z × σ/√n, so a larger n gives a smaller standard error; four times the n halves the width." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-021", topic: "inferential", level: 3,
    q: "With n = 25, a 95% confidence interval for the mean has a half-width of ±4 units. About what sample size would give ±2 units at the same confidence and σ?",
    options: [
      { t: "50", why: "Wrong: doubling n only divides the width by √2 (≈ 1.41), giving about ±2.8." },
      { t: "625", why: "Wrong: 625 is 25 squared; that would shrink the width by a factor of 5, not 2." },
      { t: "100", why: "Correct: the half-width is proportional to 1/√n. Halving it needs √n to double, so n × 4 = 25 × 4 = 100." },
      { t: "13", why: "Wrong: a smaller sample makes the interval wider, not narrower." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-022", topic: "inferential", level: 3,
    q: "σ = 10 minutes. How many observations are needed to estimate the mean within ±2 minutes with 95% confidence (z = 1.96), using n = (zσ/E)²?",
    options: [
      { t: "96", why: "Wrong: (1.96 × 10 / 2)² = 96.04; sample sizes are always rounded up, so 96 falls just short." },
      { t: "97", why: "Correct: n = (1.96 × 10 / 2)² = 9.8² = 96.04, rounded up to 97." },
      { t: "10", why: "Wrong: 9.8 rounded up is 10, but the term must be squared." },
      { t: "25", why: "Wrong: (10/2)² = 25 leaves out z, so it has no confidence level built in." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-023", topic: "inferential", level: 3,
    q: "A sample of n = 9 gives x̄ = 20.0 and s = 3.0; σ is unknown. With t(0.025, 8) = 2.306, what is the 95% confidence interval for the mean?",
    options: [
      { t: "18.04 to 21.96", why: "Wrong: this uses z = 1.96, but σ is unknown and n is small, so the t value must be used." },
      { t: "13.08 to 26.92", why: "Wrong: this uses s = 3 instead of the standard error s/√n = 1." },
      { t: "19.23 to 20.77", why: "Wrong: this divides s by n (3/9) instead of by √n (3/3)." },
      { t: "17.69 to 22.31", why: "Correct: SE = 3/√9 = 1; CI = 20.0 ± 2.306 × 1 = 17.69 to 22.31." }
    ],
    answer: 3, ref: "Lesson 3.4; Web: NIST e-Handbook"
  },

  // ---------------- hyp-concepts ----------------
  {
    id: "AN-024", topic: "hyp-concepts", level: 1,
    q: "Which is a correctly written null hypothesis for comparing the mean cycle times of two lines?",
    options: [
      { t: "H0: μ1 = μ2", why: "Correct: the null hypothesis states no difference (equality) between the population means." },
      { t: "H0: μ1 ≠ μ2", why: "Wrong: 'not equal' is the alternative hypothesis Ha for a two-tailed test." },
      { t: "H0: x̄1 = x̄2", why: "Wrong: hypotheses are about population parameters (μ), not sample statistics, which are known exactly." },
      { t: "H0: μ1 > μ2", why: "Wrong: H0 always contains the equality; a directional claim such as μ1 > μ2 belongs in Ha." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-025", topic: "hyp-concepts", level: 2,
    q: "A team wants to show that a new fixture reduces the mean setup time below the current 30 minutes. Which alternative hypothesis and test direction fit?",
    options: [
      { t: "Ha: μ ≠ 30, two-tailed", why: "Wrong: '≠' tests for a change in either direction; the claim here is a reduction only." },
      { t: "Ha: μ > 30, right-tailed", why: "Wrong: this would test for an increase in setup time." },
      { t: "Ha: μ < 30, left-tailed", why: "Correct: the claim to prove (a reduction) goes in Ha, and its direction makes the test one-tailed (left tail)." },
      { t: "Ha: μ = 30, two-tailed", why: "Wrong: the equality belongs in the null hypothesis, not the alternative." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-026", topic: "hyp-concepts", level: 1,
    q: "A Type I error occurs when the team:",
    options: [
      { t: "Fails to reject H0 when H0 is actually false", why: "Wrong: missing a real effect is a Type II error (β risk)." },
      { t: "Uses a t-test on data that are not normal", why: "Wrong: that is a wrong choice of method, not one of the two decision errors." },
      { t: "Rejects H0 when Ha is actually true", why: "Wrong: rejecting H0 when Ha is true is a correct decision; its probability is the power (1 − β)." },
      { t: "Rejects H0 when H0 is actually true", why: "Correct: a Type I error is a false alarm; its probability is α (producer's risk), usually set at 0.05." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-027", topic: "hyp-concepts", level: 2,
    q: "A new coating really does extend tool life. The trial gives p = 0.20 and the team concludes that the coating makes no difference. What has happened?",
    options: [
      { t: "A Type I error", why: "Wrong: a Type I error is rejecting a true H0 (a false alarm); here H0 was not rejected." },
      { t: "A Type II error", why: "Correct: a real effect existed but H0 was not rejected, which is a missed effect (β risk, consumer's risk). Low power, often from too small a sample, is the usual reason." },
      { t: "A correct decision, because p is above α", why: "Wrong: following the decision rule does not make the conclusion right; the coating truly works, so the conclusion is an error." },
      { t: "An α risk that was set too high", why: "Wrong: a higher α makes rejecting H0 easier; it would reduce, not cause, this kind of miss." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-028", topic: "hyp-concepts", level: 1,
    q: "A test is planned with β = 0.15. What is its power, and what does it mean?",
    options: [
      { t: "0.85: the chance of detecting a real difference", why: "Correct: power = 1 − β = 1 − 0.15 = 0.85, the probability of rejecting H0 when the specified difference really exists." },
      { t: "0.95: the chance of not raising a false alarm", why: "Wrong: 0.95 is 1 − α (the confidence level) when α = 0.05, not the power." },
      { t: "0.15: the chance of detecting a real difference", why: "Wrong: 0.15 is β, the chance of missing a real difference." },
      { t: "0.85: the probability that H0 is true", why: "Wrong: the value 0.85 is right, but power is not a probability that H0 is true; it is the chance of detecting a real effect." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-029", topic: "hyp-concepts", level: 1,
    q: "A 2-sample t-test comparing two suppliers gives p = 0.03, with α = 0.05. What should the team conclude?",
    options: [
      { t: "Fail to reject H0, because p is below α", why: "Wrong: the rule is reversed. When p is below α, H0 is rejected ('if p is low, H0 must go')." },
      { t: "Reject H0: the means differ significantly", why: "Correct: p = 0.03 ≤ α = 0.05, so H0 is rejected; the difference is statistically significant." },
      { t: "Accept H0: the two supplier means are equal", why: "Wrong: p is below α, so H0 is rejected; and a test never proves H0 in any case." },
      { t: "No conclusion, because p is not below 0.01", why: "Wrong: α was set at 0.05 before the test; changing it after seeing the p-value is not valid." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-030", topic: "hyp-concepts", level: 2,
    q: "A test of whether new training lowers the error rate gives p = 0.12, with α = 0.05. Which conclusion is worded correctly?",
    options: [
      { t: "Accept H0: the training has no effect", why: "Wrong: a non-significant result does not prove H0; the test may lack power to detect a real but small effect." },
      { t: "Reject H0, because 0.12 is greater than 0.05", why: "Wrong: the rule is reversed. A p-value above α means H0 is not rejected." },
      { t: "Fail to reject H0: no significant difference", why: "Correct: p = 0.12 > α = 0.05, so the data do not provide enough evidence of a difference." },
      { t: "Reject H0 at 90% confidence, since p is near α", why: "Wrong: at 90% confidence α = 0.10, and p = 0.12 is still above it, so H0 is still not rejected." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-031", topic: "hyp-concepts", level: 2,
    q: "A team works at a 90% confidence level. A hypothesis test gives p = 0.07. What is the conclusion?",
    options: [
      { t: "Fail to reject H0, because p is above 0.05", why: "Wrong: 0.05 is the default α, but at 90% confidence α = 1 − 0.90 = 0.10." },
      { t: "Reject Ha, because p is above 0.05", why: "Wrong: the decision is always about H0 (reject or fail to reject), and the wrong α is used." },
      { t: "No decision without the test statistic", why: "Wrong: the p-value compared with α is enough to decide; the critical-value method gives the same answer." },
      { t: "Reject H0, because p is below α = 0.10", why: "Correct: α = 1 − confidence = 0.10, and p = 0.07 < 0.10, so H0 is rejected." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-032", topic: "hyp-concepts", level: 2,
    q: "A study of 20,000 calls finds that a new script cuts mean handling time from 300.0 s to 299.4 s, p = 0.001. Rolling the script out costs €80,000. What is the best interpretation?",
    options: [
      { t: "Significant, but a 0.6 s gain may not justify the cost", why: "Correct: very large samples make tiny differences significant. Practical significance asks whether a 0.6 s gain justifies €80,000." },
      { t: "The script must be rolled out, because p is below 0.05", why: "Wrong: p < α shows the difference is probably real, not that it is large enough to pay off." },
      { t: "The result is invalid because the sample is too large", why: "Wrong: a large sample is not invalid; it just detects very small effects, which is why practical significance must be judged too." },
      { t: "Not significant, because the difference is under 1 second", why: "Wrong: statistical significance comes from the p-value, not from the size of the difference; p = 0.001 is significant." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-033", topic: "hyp-concepts", level: 2,
    q: "The sample size is fixed. The team lowers α from 0.05 to 0.01. What happens to the test?",
    options: [
      { t: "α and β fall together", why: "Wrong: at a fixed n, reducing one risk raises the other; both fall only if n increases." },
      { t: "β rises and power falls", why: "Correct: a stricter α makes H0 harder to reject, so real effects are missed more often (higher β, lower power = 1 − β)." },
      { t: "Power rises, because the test is stricter", why: "Wrong: stricter means fewer rejections, which lowers power, not raises it." },
      { t: "β is unchanged, because α and β are independent", why: "Wrong: for a fixed sample size and effect, α and β trade off against each other." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-034", topic: "hyp-concepts", level: 2,
    q: "Which change reduces the sample size needed for a hypothesis test?",
    options: [
      { t: "Raising the desired power from 0.80 to 0.90", why: "Wrong: more power (lower β) needs more data." },
      { t: "Lowering α from 0.05 to 0.01", why: "Wrong: a smaller α needs a larger sample to keep the same power." },
      { t: "Accepting a larger minimum difference to detect", why: "Correct: large differences are easier to see, so fewer observations are needed. Sample size grows with σ, power and confidence, and falls as the difference grows." },
      { t: "Studying a process with a larger standard deviation", why: "Wrong: more noise hides differences, so a larger σ needs a larger sample." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-035", topic: "hyp-concepts", level: 2,
    q: "A test gives p = 0.02. What does this p-value mean?",
    options: [
      { t: "There is a 2% probability that H0 is true", why: "Wrong: the p-value is computed assuming H0 is true; it is not the probability that H0 is true." },
      { t: "There is a 98% probability that the alternative Ha is true", why: "Wrong: 1 − p is not the probability of the alternative hypothesis." },
      { t: "The observed difference is 2% of the mean", why: "Wrong: the p-value is a probability, not the size of the effect." },
      { t: "A 2% chance of a result this extreme if H0 is true", why: "Correct: the p-value is the probability, assuming H0 is true, of getting a result at least as extreme as the one observed. Small p = evidence against H0." }
    ],
    answer: 3, ref: "Lesson 4.1; Web: NIST e-Handbook"
  },
  {
    id: "AN-036", topic: "hyp-concepts", level: 1,
    q: "Which alternative hypothesis calls for a two-tailed test?",
    options: [
      { t: "Ha: μA > μB", why: "Wrong: '>' is directional, so the test is one-tailed (right tail)." },
      { t: "Ha: μ < 10", why: "Wrong: '<' is directional, so the test is one-tailed (left tail)." },
      { t: "Ha: μA ≠ μB", why: "Correct: '≠' looks for a difference in either direction, so α is split between both tails." },
      { t: "Ha: p_new < p_old", why: "Wrong: this claims a reduction only, which is a one-tailed (left-tailed) test." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },

  // ---------------- hyp-normal ----------------
  {
    id: "AN-037", topic: "hyp-normal", level: 2,
    q: "Bottles should contain 500 g. A sample of 15 bottles gives normal data; the population σ is unknown. Which test checks whether the mean fill differs from 500 g?",
    options: [
      { t: "1-sample Z test", why: "Wrong: the Z test needs a known population σ; here σ is unknown and n is small." },
      { t: "1-sample t-test", why: "Correct: one mean against a target, normal data, σ estimated by s: use the 1-sample t-test with n − 1 = 14 df." },
      { t: "Paired t-test", why: "Wrong: a paired t-test compares two measurements on the same units, such as before and after." },
      { t: "1-sample sign test", why: "Wrong: the sign test is the non-parametric option for non-normal data; it has less power when data are normal." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-038", topic: "hyp-normal", level: 2,
    q: "Twelve operators are timed on the same task before and after a new work instruction. The differences are roughly normal. Which test compares the before and after means?",
    options: [
      { t: "Paired t-test", why: "Correct: each operator gives a before and after value, so test the mean of the differences. Pairing removes operator-to-operator variation and gives more power." },
      { t: "2-sample t-test", why: "Wrong: it treats the two sets as independent groups and leaves operator-to-operator variation in the error, losing power." },
      { t: "One-way ANOVA", why: "Wrong: ANOVA compares the means of three or more independent groups." },
      { t: "F-test for two variances", why: "Wrong: the F-test compares spread, not means." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-039", topic: "hyp-normal", level: 2,
    q: "Coating thickness is measured on parts from Supplier A (n = 20) and Supplier B (n = 22). Both sets are normal and independent. Which test compares the mean thickness?",
    options: [
      { t: "Mann-Whitney test", why: "Wrong: Mann-Whitney is the non-parametric option for non-normal data; with normal data it has less power than the t-test." },
      { t: "F-test for two variances", why: "Wrong: the F-test compares variances; it is often run first to decide whether to pool variances in the t-test." },
      { t: "χ² test of independence", why: "Wrong: χ² contingency tests work on counts of categorical data, not continuous measurements." },
      { t: "2-sample t-test", why: "Correct: two independent groups, continuous normal data, compare means: use the 2-sample t-test (pooled if variances are equal)." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-040", topic: "hyp-normal", level: 1,
    q: "The team wants to know whether Machine A gives more variation in diameter than Machine B. Both data sets are normal. Which test fits?",
    options: [
      { t: "2-sample t-test", why: "Wrong: the 2-sample t-test compares means, not variation." },
      { t: "1-sample variance (χ²) test", why: "Wrong: that compares one variance with a target value, not two variances with each other." },
      { t: "Two-variance F-test", why: "Correct: F = s₁²/s₂² compares the variances of two normal populations." },
      { t: "Mood's median test", why: "Wrong: Mood's median compares medians of non-normal groups, not variation." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-041", topic: "hyp-normal", level: 2,
    q: "Fill weights from four filling heads are clearly skewed (Anderson-Darling p < 0.01). The team wants to test whether the four heads have equal variances. Which test fits best?",
    options: [
      { t: "Bartlett's test", why: "Wrong: Bartlett's test assumes normal data and is sensitive to departures from normality." },
      { t: "Levene's test", why: "Correct: Levene's test compares the variances of two or more groups and is robust when data are not normal." },
      { t: "F-test for two variances", why: "Wrong: the F-test compares only two groups and assumes normal data." },
      { t: "1-sample variance test", why: "Wrong: it compares one variance with a target, not several variances with each other." }
    ],
    answer: 1, ref: "Lesson 4.1; Web: Minitab support"
  },
  {
    id: "AN-042", topic: "hyp-normal", level: 2,
    q: "A team compares the mean delivery time of four carriers. Data are normal with similar variances. Which approach fits best?",
    options: [
      { t: "Six 2-sample t-tests, one for each pair", why: "Wrong: each test carries α = 0.05, so six tests raise the chance of at least one false alarm to about 1 − 0.95⁶ ≈ 26%." },
      { t: "Kruskal-Wallis test", why: "Wrong: Kruskal-Wallis is the non-parametric option; with normal data, ANOVA has more power." },
      { t: "One-way ANOVA", why: "Correct: one factor (carrier) with four levels and a continuous normal Y: one-way ANOVA tests all means at once with a single α." },
      { t: "χ² contingency table", why: "Wrong: χ² contingency tables test association between two categorical variables, not means." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-043", topic: "hyp-normal", level: 1,
    q: "Which set lists the assumptions of one-way ANOVA?",
    options: [
      { t: "Equal sample sizes in every group and no outliers in any group", why: "Wrong: equal group sizes help robustness but are not required." },
      { t: "Attribute data with expected counts of at least 5", why: "Wrong: that is the condition for a χ² test on counts." },
      { t: "Paired observations with symmetric differences", why: "Wrong: pairing applies to the paired t-test; symmetry is an assumption of the 1-sample Wilcoxon test." },
      { t: "Independent samples, normal residuals, equal variances", why: "Correct: ANOVA assumes independent observations, normally distributed residuals and roughly equal variances across groups (check with Bartlett or Levene)." }
    ],
    answer: 3, ref: "Lesson 4.1; Web: NIST e-Handbook"
  },
  {
    id: "AN-044", topic: "hyp-normal", level: 3,
    q: "A one-way ANOVA output reads:\nSource  DF  SS   MS\nFactor   3  60   ?\nError   20  100  ?\nTotal   23  160\nWhat is the F ratio?",
    options: [
      { t: "0.60", why: "Wrong: 60/100 divides the sums of squares; F uses mean squares (SS ÷ DF)." },
      { t: "4.00", why: "Correct: MS factor = 60/3 = 20; MS error = 100/20 = 5; F = 20/5 = 4.00." },
      { t: "0.25", why: "Wrong: 5/20 puts MS error on top; F = MS between ÷ MS within." },
      { t: "12.00", why: "Wrong: 60/5 uses SS factor instead of MS factor in the numerator." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-045", topic: "hyp-normal", level: 3,
    q: "A one-way ANOVA comparing the mean cycle time of three shifts gives F = 7.8, p = 0.002 (α = 0.05). What can the team conclude?",
    options: [
      { t: "At least one shift mean differs from the others", why: "Correct: p < α rejects H0 (all means equal). ANOVA does not say which means differ; a comparison such as Tukey's does." },
      { t: "All three shift means differ from one another", why: "Wrong: ANOVA only shows that not all means are equal; two shifts could still be alike." },
      { t: "The shift variances are unequal", why: "Wrong: ANOVA tests means. Equal variances are an assumption checked with Bartlett or Levene." },
      { t: "Shift explains 78% of the cycle-time variation", why: "Wrong: the F ratio is not a percentage; the share of variation explained is SS factor ÷ SS total (R²)." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-046", topic: "hyp-normal", level: 3,
    q: "Target = 100. A sample of n = 16 gives x̄ = 103 and s = 6. The two-tailed critical value is t(0.025, 15) = 2.131. What are the t statistic and the conclusion?",
    options: [
      { t: "t = 0.50; fail to reject H0", why: "Wrong: 3/6 divides by s instead of the standard error s/√n = 1.5." },
      { t: "t = 8.00; reject H0", why: "Wrong: 3/(6/16) divides s by n instead of √n." },
      { t: "t = 2.00; reject H0 since t > 1.96", why: "Wrong: 1.96 is the z critical value. With σ unknown and n = 16 the t critical value 2.131 applies." },
      { t: "t = 2.00; fail to reject H0", why: "Correct: t = (103 − 100)/(6/√16) = 3/1.5 = 2.00. Since 2.00 < 2.131, H0 is not rejected at α = 0.05." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-047", topic: "hyp-normal", level: 3,
    q: "The variance of a dimension must not exceed σ₀² = 8. A sample of n = 11 gives s² = 12. Using χ² = (n − 1)s²/σ₀² and the upper critical value χ²(0.05, 10) = 18.31, what is the result?",
    options: [
      { t: "χ² = 16.5; fail to reject H0", why: "Wrong: 11 × 12/8 uses n instead of n − 1 = 10 degrees of freedom." },
      { t: "χ² = 15.0; reject H0 because s² > 8", why: "Wrong: the statistic is right, but a sample variance above 8 is not enough; it must exceed the critical value 18.31." },
      { t: "χ² = 15.0; fail to reject H0", why: "Correct: χ² = 10 × 12/8 = 15.0 < 18.31, so the data do not show the variance exceeds 8 at α = 0.05." },
      { t: "χ² = 1.5; fail to reject H0", why: "Wrong: 12/8 leaves out the (n − 1) factor." }
    ],
    answer: 2, ref: "Lesson 4.1; Web: NIST e-Handbook"
  },
  {
    id: "AN-048", topic: "hyp-normal", level: 3,
    q: "A 2-sample t-test with pooled (equal) variances compares groups of n₁ = 10 and n₂ = 12. How many degrees of freedom does the test have?",
    options: [
      { t: "22", why: "Wrong: 22 is the total sample size; one degree of freedom is lost for each estimated mean." },
      { t: "21", why: "Wrong: 21 subtracts only one, as if there were a single sample." },
      { t: "9", why: "Wrong: the smaller n − 1 is a conservative shortcut sometimes used when variances are not pooled, not the pooled df." },
      { t: "20", why: "Correct: pooled df = n₁ + n₂ − 2 = 10 + 12 − 2 = 20." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-049", topic: "hyp-normal", level: 2,
    q: "A customer requires the standard deviation of fill weight to be no more than 0.5 g. The team has 25 normal readings. Which test fits?",
    options: [
      { t: "1-sample t-test", why: "Wrong: the 1-sample t-test compares a mean with a target, not a standard deviation." },
      { t: "F-test for two variances", why: "Wrong: the F-test compares two samples with each other; here there is one sample and a target." },
      { t: "1-sample variance test", why: "Correct: one standard deviation or variance against a target value uses the 1-sample variance test, based on χ² with n − 1 df." },
      { t: "Levene's test", why: "Wrong: Levene compares the variances of two or more groups, not one variance with a target." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-050", topic: "hyp-normal", level: 1,
    q: "In one-way ANOVA, how is the F ratio calculated?",
    options: [
      { t: "SS between ÷ SS total", why: "Wrong: that ratio is R² (share of variation explained), not the F statistic." },
      { t: "MS within ÷ MS between", why: "Wrong: this is upside down." },
      { t: "MS between ÷ MS within", why: "Correct: F compares variation between group means with variation within groups; a large F (small p) means the means differ." },
      { t: "Largest group variance ÷ smallest group variance", why: "Wrong: that ratio is used to compare variances (an F-test or Hartley's test), not the ANOVA F for means." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },

  // ---------------- hyp-nonnormal ----------------
  {
    id: "AN-051", topic: "hyp-nonnormal", level: 2,
    q: "Cycle times from two independent lines are strongly right-skewed, with 15 values each. Which test compares their central tendency?",
    options: [
      { t: "2-sample t-test", why: "Wrong: with small, strongly skewed samples the t-test's normality assumption is not met." },
      { t: "Mann-Whitney test", why: "Correct: Mann-Whitney is the non-parametric counterpart of the 2-sample t-test: two independent groups, compared on ranks (medians)." },
      { t: "Paired t-test", why: "Wrong: the lines are independent groups, not pairs of measurements on the same units." },
      { t: "1-sample sign test", why: "Wrong: the sign test compares one median with a target, not two groups." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-052", topic: "hyp-nonnormal", level: 2,
    q: "Call handling times from five call centres are non-normal and contain several extreme outliers. Which test is the most robust choice for comparing the medians?",
    options: [
      { t: "Mood's median test", why: "Correct: Mood's median counts values above and below the overall median, so outliers have little effect. It is less powerful than Kruskal-Wallis when there are no outliers." },
      { t: "Kruskal-Wallis test", why: "Wrong: Kruskal-Wallis also compares several medians but, using ranks of all values, is less robust to outliers than Mood's median." },
      { t: "One-way ANOVA", why: "Wrong: ANOVA compares means and assumes normal residuals; outliers distort it." },
      { t: "Friedman test", why: "Wrong: Friedman is for a randomized block design (each block sees every treatment), not independent groups." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-053", topic: "hyp-nonnormal", level: 2,
    q: "Data from three suppliers are continuous and skewed, with no outliers; the groups are independent. Which non-parametric test has the most power to compare their medians?",
    options: [
      { t: "Mood's median test", why: "Wrong: Mood's median is more robust to outliers but less powerful than Kruskal-Wallis when there are none." },
      { t: "Mann-Whitney U test", why: "Wrong: Mann-Whitney compares exactly two groups." },
      { t: "Friedman rank test", why: "Wrong: Friedman needs a blocked design in which each block receives every treatment." },
      { t: "Kruskal-Wallis test", why: "Correct: Kruskal-Wallis is the non-parametric counterpart of one-way ANOVA and, without outliers, is more powerful than Mood's median." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-054", topic: "hyp-nonnormal", level: 2,
    q: "Five tasters each score all four recipes once on a 1-10 scale. The team wants to know whether the recipes differ, treating tasters as blocks. Which test fits?",
    options: [
      { t: "Kruskal-Wallis test", why: "Wrong: Kruskal-Wallis assumes independent groups and ignores the fact that each taster scores every recipe." },
      { t: "Mann-Whitney test", why: "Wrong: Mann-Whitney compares two independent groups only." },
      { t: "Friedman test", why: "Correct: Friedman is the non-parametric test for a randomized block design (one treatment factor plus a block, one value per cell), like a two-way ANOVA without replication." },
      { t: "χ² goodness-of-fit test", why: "Wrong: goodness of fit compares observed category counts with an expected distribution." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-055", topic: "hyp-nonnormal", level: 2,
    q: "The team wants to compare the median repair time with a target of 4 hours. The data are strongly skewed, not symmetric. Which test fits best?",
    options: [
      { t: "1-sample sign test", why: "Correct: the sign test counts values above and below the target and makes no assumption about shape, so it suits skewed data." },
      { t: "1-sample Wilcoxon test", why: "Wrong: the Wilcoxon signed-rank test assumes a symmetric distribution, which these data do not have." },
      { t: "1-sample t-test", why: "Wrong: the t-test compares a mean and assumes normal data (or a large sample)." },
      { t: "Mann-Whitney test", why: "Wrong: Mann-Whitney compares two independent groups, not one group with a target." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-056", topic: "hyp-nonnormal", level: 1,
    q: "Compared with the 1-sample sign test, the 1-sample Wilcoxon signed-rank test:",
    options: [
      { t: "Is less powerful but makes no shape assumptions", why: "Wrong: that describes the sign test, which only uses whether values are above or below the target." },
      { t: "Is more powerful but assumes symmetric data", why: "Correct: Wilcoxon also uses the size of each deviation (ranks), giving more power, but it needs a symmetric distribution." },
      { t: "Compares two independent medians", why: "Wrong: two independent groups are compared with Mann-Whitney." },
      { t: "Requires normally distributed data", why: "Wrong: normality is an assumption of the 1-sample t-test; Wilcoxon is non-parametric." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-057", topic: "hyp-nonnormal", level: 2,
    q: "Line A produced 18 defectives in 600 units; Line B produced 35 defectives in 700 units. Which test checks whether the defective rates differ?",
    options: [
      { t: "2-sample t-test", why: "Wrong: the t-test compares means of continuous data; pass/fail counts are attribute data." },
      { t: "1-proportion test", why: "Wrong: a 1-proportion test compares one proportion with a target value." },
      { t: "2-proportion test", why: "Correct: two groups with a pass/fail (binomial) outcome: compare p̂A = 0.030 and p̂B = 0.050 with a 2-proportion test." },
      { t: "Mann-Whitney test", why: "Wrong: Mann-Whitney compares medians of continuous or ordinal data." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-058", topic: "hyp-nonnormal", level: 3,
    q: "The historical defective rate is p₀ = 0.10. A sample of n = 400 has 56 defectives. Using z = (p̂ − p₀)/√(p₀(1 − p₀)/n), what are z and the two-tailed conclusion at α = 0.05?",
    options: [
      { t: "z ≈ 2.67; fail to reject H0", why: "Wrong: z is right, but 2.67 > 1.96, so H0 is rejected." },
      { t: "z ≈ 2.67; reject H0", why: "Correct: p̂ = 56/400 = 0.14; SE = √(0.10 × 0.90/400) = 0.015; z = 0.04/0.015 ≈ 2.67 > 1.96, so the rate has changed." },
      { t: "z ≈ 2.31; reject H0", why: "Wrong: 2.31 uses p̂ = 0.14 in the standard error instead of p₀, which the stated formula requires." },
      { t: "z ≈ 0.13; fail to reject H0", why: "Wrong: 0.04/0.30 leaves n out of the standard error." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-059", topic: "hyp-nonnormal", level: 3,
    q: "A χ² contingency table cross-classifies 3 shifts against 4 defect types. How many degrees of freedom does the test have?",
    options: [
      { t: "12", why: "Wrong: 12 is the number of cells (3 × 4)." },
      { t: "11", why: "Wrong: cells − 1 is the df for a goodness-of-fit test with 12 categories, not for a contingency table." },
      { t: "5", why: "Wrong: (3 − 1) + (4 − 1) adds the terms; they must be multiplied." },
      { t: "6", why: "Correct: df = (rows − 1) × (columns − 1) = 2 × 3 = 6." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "AN-060", topic: "hyp-nonnormal", level: 3,
    q: "A contingency table holds 200 parts in total. The 'night shift' row total is 40 and the 'scratch' column total is 60. Under H0 (shift and defect type independent), what is the expected count for night shift × scratch?",
    options: [
      { t: "12", why: "Correct: E = row total × column total ÷ grand total = 40 × 60 / 200 = 12." },
      { t: "20", why: "Wrong: 40/2 splits the row total evenly, ignoring the column total." },
      { t: "30", why: "Wrong: 60/2 splits the column total evenly, ignoring the row total." },
      { t: "50", why: "Wrong: 50 is the average of the two totals, which has no meaning here." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-061", topic: "hyp-nonnormal", level: 2,
    q: "In a χ² contingency analysis, three cells have expected counts below 5, one of them 1.8. What should the analyst do?",
    options: [
      { t: "Ignore it, because the rule is about observed counts", why: "Wrong: the rule of thumb applies to expected counts, which drive the χ² approximation." },
      { t: "Delete the rows that contain the small cells", why: "Wrong: deleting data distorts the comparison; merge categories instead." },
      { t: "Combine sparse categories or collect more data", why: "Correct: χ² is unreliable when expected counts fall below 5; merging similar categories or adding data raises them." },
      { t: "Switch to a one-way ANOVA on the counts", why: "Wrong: ANOVA compares means of a continuous response, not frequencies in a table." }
    ],
    answer: 2, ref: "Lesson 4.1; Web: NIST e-Handbook"
  },
  {
    id: "AN-062", topic: "hyp-nonnormal", level: 3,
    q: "Defects by weekday: Mon 30, Tue 20, Wed 25, Thu 15, Fri 10 (total 100). A χ² goodness-of-fit test checks whether defects are spread evenly across the five days. What are the χ² statistic and the degrees of freedom?",
    options: [
      { t: "χ² = 12.5, df = 5", why: "Wrong: the statistic is right, but df = number of categories − 1 = 4." },
      { t: "χ² = 16.0, df = 4", why: "Wrong: 16.0 divides by the observed counts; χ² divides each squared difference by the expected count." },
      { t: "χ² = 12.5, df = 4", why: "Correct: E = 20 per day; χ² = (100 + 0 + 25 + 25 + 100)/20 = 250/20 = 12.5; df = 5 − 1 = 4. It exceeds the 0.05 critical value 9.49, so defects are not even." },
      { t: "χ² = 250, df = 4", why: "Wrong: 250 is Σ(O − E)² without dividing by the expected count of 20." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "AN-063", topic: "hyp-nonnormal", level: 2,
    q: "A χ² test of shift versus defect type gives p = 0.004 (α = 0.05). What can the team conclude?",
    options: [
      { t: "The night shift causes the defects", why: "Wrong: χ² shows association, not cause, and does not say which shift drives it; inspect the cell contributions." },
      { t: "Defect type and shift are associated", why: "Correct: p < α rejects H0 of independence, so the proportions of defect types are not the same on every shift." },
      { t: "All defect types occur equally often", why: "Wrong: that would be a goodness-of-fit question, and the test here is about association between two variables." },
      { t: "Shift and defect type are independent", why: "Wrong: independence is H0, and a p-value of 0.004 rejects it." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "AN-064", topic: "hyp-nonnormal", level: 1,
    q: "What is the main trade-off of using a non-parametric test instead of its parametric equivalent?",
    options: [
      { t: "Fewer assumptions, but less power", why: "Correct: non-parametric tests do not assume normality, but when data are normal they need more data to detect the same effect." },
      { t: "More power, but more assumptions about the data", why: "Wrong: it is the other way round; parametric tests have more power and more assumptions." },
      { t: "They work only with attribute (pass/fail) data", why: "Wrong: most of them work on continuous or ordinal data using ranks or medians." },
      { t: "They compare variances rather than location", why: "Wrong: tests such as Mann-Whitney, Kruskal-Wallis and Mood's median compare location (medians)." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "AN-065", topic: "hyp-nonnormal", level: 2,
    q: "For each loan application the team records whether it was approved (yes/no) at each of four branches. Which test checks whether the approval rate is related to branch?",
    options: [
      { t: "One-way ANOVA", why: "Wrong: ANOVA needs a continuous Y; approval is a yes/no attribute." },
      { t: "Kruskal-Wallis test", why: "Wrong: Kruskal-Wallis ranks continuous or ordinal values; a yes/no outcome gives only two ranks." },
      { t: "2-proportion test", why: "Wrong: a 2-proportion test compares only two groups; there are four branches." },
      { t: "χ² contingency test", why: "Correct: two categorical variables (branch × approved yes/no) in a 4 × 2 table: test association with χ², df = (4 − 1)(2 − 1) = 3." }
    ],
    answer: 3, ref: "Lesson 4.1"
  }
]);
