// Pack "measure2": Measurement System Analysis (msa) and process capability (capability).
// Format: docs/CONTENT_GUIDE.md. Conventions: docs/research/iassc-gb-bok.md section 4
// (AIAG %GRR bands, ndc ≥ 5, kappa ≥ 0.75, Cpk with 3σ, 1.5σ shift stated where used,
// P/T multiplier always given in the stem).
QB.add([
  // ---------------- msa ----------------
  {
    id: "M2-001", topic: "msa", level: 1,
    q: "A technician measures a reference block many times and finds the average reading is 0.03 mm above the block's certified value. What is this 0.03 mm called?",
    options: [
      { t: "Linearity", why: "Wrong: linearity is how the bias changes across the operating range of the gage, which needs references at several sizes." },
      { t: "Bias", why: "Correct: bias is the average of the observed measurements minus the reference (true) value." },
      { t: "Repeatability", why: "Wrong: repeatability is the spread of repeated readings, not the offset of their average from the true value." },
      { t: "Stability", why: "Wrong: stability is how the bias changes over time; one study at one moment cannot show it." }
    ],
    answer: 1, ref: "Lesson 3.5"
  },
  {
    id: "M2-002", topic: "msa", level: 1,
    q: "A gage reads 0.01 mm high on small parts and 0.08 mm high on large parts. Which measurement system property is poor?",
    options: [
      { t: "Reproducibility", why: "Wrong: reproducibility is the difference between operators' averages, not a size-dependent offset." },
      { t: "Resolution", why: "Wrong: resolution is the smallest increment the gage can read; it does not cause an offset that grows with size." },
      { t: "Stability", why: "Wrong: stability is a change in bias over time, not across the range of part sizes." },
      { t: "Linearity", why: "Correct: linearity describes how the bias changes over the operating range of the gage; here bias grows with part size." }
    ],
    answer: 3, ref: "Lesson 3.5"
  },
  {
    id: "M2-003", topic: "msa", level: 1,
    q: "How is the stability of a measurement system usually assessed?",
    options: [
      { t: "By charting repeated readings of a master part over time", why: "Correct: stability is the change in bias over time, so a reference part is measured periodically and charted to detect drift." },
      { t: "By having three operators measure ten parts twice each in random order", why: "Wrong: that is a crossed Gage R&R design, which estimates repeatability and reproducibility at one point in time." },
      { t: "By measuring reference parts at the low, middle and high end of the gage range", why: "Wrong: that is a linearity study, which looks at bias across the range, not over time." },
      { t: "By comparing the gage resolution with one tenth of the tolerance", why: "Wrong: that is the discrimination (rule of ten) check, not a stability study." }
    ],
    answer: 0, ref: "Lesson 3.5"
  },
  {
    id: "M2-004", topic: "msa", level: 1,
    q: "One operator measures the same part five times with the same micrometer and gets slightly different readings. Which source of measurement variation does this show?",
    options: [
      { t: "Reproducibility (appraiser variation)", why: "Wrong: reproducibility is variation between different operators' averages; here only one operator is involved." },
      { t: "Part-to-part variation", why: "Wrong: the same part was measured each time, so the differences cannot come from the parts." },
      { t: "Repeatability (equipment variation)", why: "Correct: repeatability, or EV, is the variation when the same operator measures the same part with the same gage repeatedly." },
      { t: "Bias", why: "Wrong: bias is an offset of the average from the true value, not the scatter of repeated readings." }
    ],
    answer: 2, ref: "Lesson 3.5"
  },
  {
    id: "M2-005", topic: "msa", level: 1,
    q: "In a Gage R&R study, what does reproducibility measure?",
    options: [
      { t: "The scatter of repeated readings by one operator on one part", why: "Wrong: that is repeatability (equipment variation)." },
      { t: "The difference between the gage average and a reference value", why: "Wrong: that is bias, a property of accuracy, not of precision." },
      { t: "The true variation between the parts in the study", why: "Wrong: that is part-to-part variation, which the study separates from measurement error." },
      { t: "The variation between average readings of different operators on the same parts", why: "Correct: reproducibility, or appraiser variation (AV), is the spread of the averages obtained by different operators using the same gage." }
    ],
    answer: 3, ref: "Lesson 3.5"
  },
  {
    id: "M2-006", topic: "msa", level: 2,
    q: "A shaft has a certified diameter of 25.00 mm. Ten readings with a new gage range from 24.80 to 24.82 mm. How should the gage be described?",
    options: [
      { t: "Accurate but not precise", why: "Wrong: the readings are about 0.19 mm below the true value, so the gage is not accurate; their tight spread shows good precision." },
      { t: "Precise but not accurate", why: "Correct: the readings agree closely with each other (good precision) but their average is about 0.19 mm below the reference (bias, poor accuracy)." },
      { t: "Neither accurate nor precise", why: "Wrong: a 0.02 mm spread is tight, so precision is good; only accuracy is the problem." },
      { t: "Accurate and precise, as all readings are within 1%", why: "Wrong: being close in percentage terms does not remove a consistent offset; the bias is a real accuracy error to correct by calibration." }
    ],
    answer: 1, ref: "Lesson 3.5"
  },
  {
    id: "M2-007", topic: "msa", level: 2,
    q: "A diameter has the specification 10.00 ± 0.05 mm. Using the rule of ten, what is the coarsest gage resolution that is acceptable?",
    options: [
      { t: "0.05 mm", why: "Wrong: 0.05 mm is half the tolerance; the gage could not tell a centred part from one at the limit." },
      { t: "0.001 mm", why: "Wrong: this resolution is acceptable but finer than needed; the question asks for the coarsest acceptable one." },
      { t: "0.01 mm", why: "Correct: the tolerance is 0.10 mm (USL 10.05 − LSL 9.95), and one tenth of it is 0.01 mm." },
      { t: "0.005 mm", why: "Wrong: this is one tenth of the half-tolerance (0.05 mm); the rule of ten uses the full tolerance of 0.10 mm." }
    ],
    answer: 2, ref: "Lesson 3.5"
  },
  {
    id: "M2-008", topic: "msa", level: 2,
    q: "A tensile test destroys each sample, so a part can be tested only once and only by one operator. Which Gage R&R design fits?",
    options: [
      { t: "Nested Gage R&R with near-identical samples per operator", why: "Correct: when parts cannot be shared between operators (destructive tests), parts are nested within operators, usually using samples from one homogeneous batch." },
      { t: "Crossed Gage R&R, with every operator testing every part twice", why: "Wrong: crossed designs need each part measured by each operator several times, which is impossible when the test destroys the part." },
      { t: "Attribute agreement analysis with a known standard", why: "Wrong: tensile strength is continuous data; attribute agreement is for pass/fail or category judgements." },
      { t: "A linearity study across the range of tensile strengths", why: "Wrong: linearity checks bias across the range; it does not separate repeatability from reproducibility." }
    ],
    answer: 0, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-009", topic: "msa", level: 2,
    q: "Which statement about %Study Variation and %Contribution in a Gage R&R report is true?",
    options: [
      { t: "%Study Variation is based on variances, so its rows add up to 100%", why: "Wrong: %Study Variation is a ratio of standard deviations, and standard deviations do not add, so its rows do not sum to 100%." },
      { t: "%Contribution and %Study Variation always give the same number", why: "Wrong: %Contribution is the square of %Study Variation (as fractions); 20% Study Var equals 4% Contribution." },
      { t: "%Contribution compares the gage with the tolerance", why: "Wrong: comparing with the tolerance is %Tolerance (P/T); %Contribution compares with total observed variance." },
      { t: "%Contribution is based on variances, so its rows add up to 100%", why: "Correct: variances are additive (σ²_total = σ²_part + σ²_GRR), so the %Contribution rows sum to 100%." }
    ],
    answer: 3, ref: "Lesson 3.5"
  },
  {
    id: "M2-010", topic: "msa", level: 3,
    q: "A Gage R&R study estimates the variance of the measurement system as 4 and the part-to-part variance as 96. What is the %Study Variation of the gage and how is it rated under AIAG guidelines?",
    options: [
      { t: "4%, acceptable", why: "Wrong: 4% is the %Contribution (ratio of variances). The %Study Variation uses standard deviations: √4 / √100 = 20%." },
      { t: "20%, marginal", why: "Correct: σ_GRR = √4 = 2, σ_total = √(4 + 96) = 10, so %Study Var = 2 / 10 × 100 = 20%, inside the 10–30% marginal band." },
      { t: "20%, unacceptable", why: "Wrong: the value is right but only above 30% is a gage unacceptable under AIAG; 10–30% is marginal." },
      { t: "4.2%, acceptable", why: "Wrong: this divides by the part variance only (4 / 96); the reference is the total variance, and the metric asked for uses standard deviations." }
    ],
    answer: 1, ref: "Lesson 3.5"
  },
  {
    id: "M2-011", topic: "msa", level: 3,
    q: "A Gage R&R study gives σ_part = 0.50 and σ_GRR = 0.10. What is the number of distinct categories (ndc)?",
    options: [
      { t: "5", why: "Wrong: this is the ratio 0.50 / 0.10 without the 1.41 factor (√2) in the ndc formula." },
      { t: "35", why: "Wrong: this applies 1.41 to the ratio of variances (1.41 × 0.25 / 0.01 = 35.25); ndc uses the ratio of standard deviations." },
      { t: "3", why: "Wrong: this divides the ratio by 1.41 instead of multiplying (5 / 1.41 = 3.5)." },
      { t: "7", why: "Correct: ndc = 1.41 × σ_part / σ_GRR = 1.41 × 5 = 7.05, truncated to 7, which meets the ndc ≥ 5 guideline." }
    ],
    answer: 3, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-012", topic: "msa", level: 3,
    q: "The measurement system standard deviation is σ_GRR = 0.02 mm and the specification is 5.00 to 5.60 mm. Using a 6σ spread, what is the %Tolerance (P/T ratio)?",
    options: [
      { t: "20%", why: "Correct: P/T = 6 × σ_GRR / (USL − LSL) × 100 = 6 × 0.02 / 0.60 × 100 = 20%." },
      { t: "17.2%", why: "Wrong: this uses the older 5.15σ multiplier (5.15 × 0.02 / 0.60); the question specifies 6σ." },
      { t: "3.3%", why: "Wrong: this compares one standard deviation with the tolerance (0.02 / 0.60) and leaves out the 6σ spread." },
      { t: "10%", why: "Wrong: this uses a 3σ spread; the measurement spread in P/T is 6σ (or 5.15σ in older texts)." }
    ],
    answer: 0, ref: "Lesson 3.5"
  },
  {
    id: "M2-013", topic: "msa", level: 2,
    q: "A Gage R&R report gives %Contribution (of variance) for Total Gage R&R = 6%. Using AIAG guidance, how should the measurement system be rated?",
    options: [
      { t: "Acceptable, because 6% is below the 10% limit", why: "Wrong: 10% is the %Study Variation limit. For %Contribution the acceptable limit is 1%, because 10% of σ is 1% of σ²." },
      { t: "Unacceptable, because anything above 1% fails", why: "Wrong: 1–9% Contribution is the marginal band, not a failure; above 9% is unacceptable." },
      { t: "Marginal, because 6% sits in the 1–9% band", why: "Correct: %Contribution bands are below 1% good, 1–9% marginal, above 9% unacceptable; 6% equals about 24.5% Study Var (√0.06), also marginal." },
      { t: "It cannot be rated without the ndc", why: "Wrong: ndc is a useful extra check, but %Contribution can be rated on its own bands." }
    ],
    answer: 2, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-014", topic: "msa", level: 3,
    q: "Gage R&R (ANOVA) output:\nSource            %Contribution  %Study Var\nTotal Gage R&R         2.25        15.00\n  Repeatability        1.96        14.00\n  Reproducibility      0.29         5.39\nPart-To-Part          97.75        98.87\nNumber of Distinct Categories = 9\nWhich conclusion is best?",
    options: [
      { t: "Acceptable, as ndc is 9 and needs no further review", why: "Wrong: ndc ≥ 5 is good, but %Study Var of 15% is still in the marginal band, so the gage is not simply acceptable." },
      { t: "Marginal; repeatability dominates, so look at the gage", why: "Correct: 15% Study Var is in the 10–30% band, and repeatability (14%) is far larger than reproducibility (5.39%), pointing at the instrument, fixture or clamping rather than operators." },
      { t: "Marginal; reproducibility dominates, so train operators", why: "Wrong: reproducibility is the smaller component here (5.39% vs 14%), so operator training would address the minor source." },
      { t: "Unacceptable, as part-to-part is only 98.87%", why: "Wrong: a high part-to-part share is what you want; it means most of the observed variation comes from real part differences." }
    ],
    answer: 1, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-015", topic: "msa", level: 3,
    q: "Gage R&R variance components:\nSource            VarComp\nRepeatability     0.0011\nReproducibility   0.0025\nPart-To-Part      0.0064\nTotal Variation   0.0100\nWhat is the %Study Variation of Total Gage R&R, and where should improvement start?",
    options: [
      { t: "36%; start with gage maintenance and fixturing", why: "Wrong: 36% is the %Contribution (0.0036 / 0.0100), and the larger component is reproducibility, not repeatability." },
      { t: "60%; start with gage maintenance and fixturing", why: "Wrong: the value is right, but repeatability (0.0011) is the smaller component; the gage itself is not the main problem." },
      { t: "36%; marginal, so accept the gage with caution", why: "Wrong: 36% is the %Contribution, and 36% Contribution is far above the 9% limit; the gage is unacceptable." },
      { t: "60%; start with operator method and training", why: "Correct: σ²_GRR = 0.0011 + 0.0025 = 0.0036, σ_GRR = 0.06, σ_total = 0.10, so %Study Var = 60% (unacceptable). Reproducibility is the larger part, so standardise the method and train operators." }
    ],
    answer: 3, ref: "Lesson 3.5"
  },
  {
    id: "M2-016", topic: "msa", level: 2,
    q: "In an attribute agreement analysis, one inspector's kappa against the known standard is 0.55. What does this mean?",
    options: [
      { t: "Better than chance, but below the 0.75 guideline", why: "Correct: kappa 0 means chance-level agreement and 1 means perfect; AIAG treats κ ≥ 0.75 as acceptable, so 0.55 calls for clearer criteria, boundary samples or training." },
      { t: "The inspector agrees with the standard on 55% of the parts", why: "Wrong: kappa is not a percentage of matches; it corrects the observed agreement for the agreement expected by chance." },
      { t: "Agreement is acceptable, because any kappa above 0.5 passes", why: "Wrong: the usual guideline is κ ≥ 0.75 for acceptable agreement (≥ 0.9 excellent); 0.55 falls short." },
      { t: "The inspector disagrees with the standard more often than by chance", why: "Wrong: that would be a negative kappa; a positive kappa means agreement above chance." }
    ],
    answer: 0, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-017", topic: "msa", level: 1,
    q: "In attribute agreement analysis, what does a kappa value of 0 indicate?",
    options: [
      { t: "Perfect agreement between appraisers", why: "Wrong: perfect agreement gives kappa = 1." },
      { t: "Agreement no better than expected by chance", why: "Correct: kappa compares observed agreement with chance agreement; 0 means the ratings agree only as often as random guessing would." },
      { t: "Total disagreement on every part", why: "Wrong: systematic disagreement gives a negative kappa; 0 is the chance level, not the minimum." },
      { t: "Not enough parts were inspected", why: "Wrong: kappa is a measure of agreement, not of sample size; small samples give wide confidence intervals instead." }
    ],
    answer: 1, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-018", topic: "msa", level: 2,
    q: "A team plans an attribute agreement study for a visual pass/fail check. Which sample set is best?",
    options: [
      { t: "30 parts that are clearly good, so inspectors are not confused", why: "Wrong: with only good parts the study cannot show whether inspectors catch defects (miss rate)." },
      { t: "30 parts that are clearly good or clearly bad, with no borderline cases", why: "Wrong: obvious parts inflate agreement; the real risk of misclassification lies near the boundary." },
      { t: "30 good, bad and borderline parts with known standards", why: "Correct: a mix including borderline parts, each rated by an expert or reference, tests both agreement and correctness where it matters; parts are then presented blind and in random order." },
      { t: "Whatever 30 parts come off the line during one hour", why: "Wrong: a random hour may contain few or no defects and no borderline cases, so the study would not test the decision boundary." }
    ],
    answer: 2, ref: "Lesson 3.5"
  },
  {
    id: "M2-019", topic: "msa", level: 3,
    q: "An inspector rates 40 parts twice each. On 36 parts both ratings agree with each other; on 34 of those 36 they also match the known standard. What is the inspector's agreement with the standard (both trials matching the standard)?",
    options: [
      { t: "90%", why: "Wrong: 36 / 40 = 90% is the within-appraiser agreement (consistency with self), not agreement with the standard." },
      { t: "94.4%", why: "Wrong: 34 / 36 divides by the consistent parts only; the base is all 40 parts inspected." },
      { t: "85%", why: "Correct: a part counts only if both trials match the standard: 34 / 40 = 85%." },
      { t: "15%", why: "Wrong: 6 / 40 = 15% is the share of parts that fail (4 inconsistent + 2 consistently wrong), not the agreement rate." }
    ],
    answer: 2, ref: "Lesson 3.5"
  },
  {
    id: "M2-020", topic: "msa", level: 2,
    q: "A team collects three months of cycle time data and calculates Cpk before checking how the times are recorded. What is the main problem with this order?",
    options: [
      { t: "Cpk should only be calculated in the Control phase", why: "Wrong: baseline capability is a Measure-phase deliverable; the issue is the order, not the phase." },
      { t: "Three months is too long a period for capability data", why: "Wrong: long periods are fine (they give Ppk); the problem is that the data may not be trustworthy." },
      { t: "Cycle time data cannot be used for capability studies", why: "Wrong: continuous data such as time can be used, with a non-normal method if the data are skewed." },
      { t: "Without an MSA, the variation may come from measurement error", why: "Correct: the measurement system is validated first; otherwise the capability figures mix process variation with measurement error." }
    ],
    answer: 3, ref: "Lesson 3.5"
  },
  {
    id: "M2-021", topic: "msa", level: 2,
    q: "What is an advantage of the ANOVA method over the average and range (Xbar-R) method for a Gage R&R study?",
    options: [
      { t: "It can estimate the operator × part interaction", why: "Correct: ANOVA tests and estimates the operator-by-part interaction (an operator who measures some parts differently), which the average and range method cannot separate." },
      { t: "It needs no repeated trials per part", why: "Wrong: both methods need repeated trials to estimate repeatability." },
      { t: "It works with attribute (pass/fail) data", why: "Wrong: both are for continuous data; attribute data need attribute agreement analysis." },
      { t: "It removes the need for parts spanning the range", why: "Wrong: with any method, parts must represent the process range or the part-to-part variation is underestimated." }
    ],
    answer: 0, ref: "Lesson 3.5"
  },
  {
    id: "M2-022", topic: "msa", level: 2,
    q: "For a crossed Gage R&R study, the team picks 10 parts from a single batch that are almost identical. What is the likely effect on the results?",
    options: [
      { t: "%Study Var will be understated, so the gage looks better than it is", why: "Wrong: it is the reverse; small part-to-part variation makes the gage's share of the total look larger." },
      { t: "Repeatability will rise because the parts are alike", why: "Wrong: repeatability depends on the gage and method, not on how different the parts are." },
      { t: "%Study Var will be inflated and ndc will be low", why: "Correct: with little part-to-part variation, σ_GRR is a large share of σ_total and ndc = 1.41 × σ_part / σ_GRR falls; parts should span the process range." },
      { t: "The study becomes nested instead of crossed", why: "Wrong: crossed or nested depends on whether every operator measures every part, not on how similar the parts are." }
    ],
    answer: 2, ref: "Lesson 3.5"
  },
  {
    id: "M2-023", topic: "msa", level: 1,
    q: "Which pair of measurement system properties together describe precision (the spread of measurements)?",
    options: [
      { t: "Bias and linearity", why: "Wrong: these describe accuracy (location): the offset from the true value and how it changes over the range." },
      { t: "Stability and bias", why: "Wrong: both relate to accuracy; stability is the change of bias over time." },
      { t: "Resolution and linearity", why: "Wrong: resolution is a separate discrimination check and linearity is an accuracy property." },
      { t: "Repeatability and reproducibility", why: "Correct: precision is split into repeatability (equipment variation) and reproducibility (appraiser variation), the 'R&R' of Gage R&R." }
    ],
    answer: 3, ref: "Lesson 3.5"
  },

  // ---------------- capability ----------------
  {
    id: "M2-024", topic: "capability", level: 1,
    q: "Before a capability index is calculated, what must be confirmed about the process?",
    options: [
      { t: "That it is centred on the target value", why: "Wrong: an off-centre process can still be studied; Cpk will simply be lower than Cp." },
      { t: "That it is in statistical control (stable)", why: "Correct: capability predicts future output only if the process is stable; with special causes present the indices are meaningless." },
      { t: "That Cp is already above the 1.33 minimum", why: "Wrong: Cp is a result of the study, not a prerequisite." },
      { t: "That the specification is two-sided", why: "Wrong: one-sided specifications are handled with Cpu or Cpl." }
    ],
    answer: 1, ref: "Lesson 3.6"
  },
  {
    id: "M2-025", topic: "capability", level: 1,
    q: "What does the Cp index ignore that Cpk takes into account?",
    options: [
      { t: "The within-subgroup standard deviation", why: "Wrong: both Cp and Cpk use the within-subgroup (short-term) standard deviation." },
      { t: "The width of the specification", why: "Wrong: Cp is built from the specification width (USL − LSL)." },
      { t: "Where the process mean sits", why: "Correct: Cp compares spec width with 6σ only; Cpk uses the distance from the mean to the nearer limit, so it reflects centring." },
      { t: "The long-term shift between subgroups", why: "Wrong: neither index includes between-subgroup variation; that is what Pp and Ppk add." }
    ],
    answer: 2, ref: "Lesson 3.6"
  },
  {
    id: "M2-026", topic: "capability", level: 1,
    q: "How do Pp and Ppk differ from Cp and Cpk?",
    options: [
      { t: "They use the overall (long-term) standard deviation", why: "Correct: Pp and Ppk use the overall standard deviation of all data, which includes shifts between subgroups; Cp and Cpk use within-subgroup σ." },
      { t: "They use 6σ in the denominator instead of 3σ", why: "Wrong: Pp and Cp both use 6σ; Ppk and Cpk both use 3σ. Only the σ estimate differs." },
      { t: "They are used only for attribute data", why: "Wrong: all four are for continuous data; attribute capability uses DPU, DPMO or % defective." },
      { t: "They measure accuracy of the gage", why: "Wrong: they describe process performance; gage accuracy is an MSA topic." }
    ],
    answer: 0, ref: "Lesson 3.6"
  },
  {
    id: "M2-027", topic: "capability", level: 1,
    q: "Which Cpk value is most widely used as the minimum acceptable for an existing process?",
    options: [
      { t: "1.00", why: "Wrong: Cpk = 1 leaves the nearest spec limit only 3σ from the mean, with no margin for drift." },
      { t: "1.67", why: "Wrong: 1.67 is the usual target for new or safety-critical processes, stricter than the general minimum." },
      { t: "2.00", why: "Wrong: 2.0 corresponds to six sigma short-term capability, an aspiration rather than the common minimum." },
      { t: "1.33", why: "Correct: Cpk ≥ 1.33 (nearest limit 4σ away) is the common minimum; 1.67 is often required for new or critical processes." }
    ],
    answer: 3, ref: "Lesson 3.6"
  },
  {
    id: "M2-028", topic: "capability", level: 1,
    q: "A process has Cpk = 1.33. How far is the nearer specification limit from the process mean?",
    options: [
      { t: "1.33 standard deviations", why: "Wrong: Cpk divides the distance by 3σ, so the distance is 3 × Cpk standard deviations, not Cpk itself." },
      { t: "4 standard deviations", why: "Correct: Cpk = distance / 3σ, so distance = 3 × 1.33σ ≈ 4σ." },
      { t: "6 standard deviations", why: "Wrong: 6σ to the nearer limit would be Cpk = 2.0." },
      { t: "8 standard deviations", why: "Wrong: 8σ is roughly the full tolerance width of a centred process with Cp = 1.33 (6σ × 1.33), not the distance to one limit." }
    ],
    answer: 1, ref: "Lesson 3.6"
  },
  {
    id: "M2-029", topic: "capability", level: 2,
    q: "A stable process has Cp = 1.6 and Cpk = 0.8. What is the most appropriate improvement?",
    options: [
      { t: "Reduce common-cause variation", why: "Wrong: Cp = 1.6 shows the spread already fits the tolerance well; spread is not the main problem." },
      { t: "Widen the specification limits", why: "Wrong: specifications come from the customer; the process issue here is location." },
      { t: "Remove special causes first", why: "Wrong: the process is stated to be stable, so there are no special causes to remove." },
      { t: "Move the process mean towards the centre", why: "Correct: the large gap between Cp and Cpk means the process is off-centre; centring it would raise Cpk towards 1.6." }
    ],
    answer: 3, ref: "Lesson 3.6"
  },
  {
    id: "M2-030", topic: "capability", level: 2,
    q: "A capability report shows Cpk = 1.5 and Ppk = 0.9 from the same data. What does the gap most likely indicate?",
    options: [
      { t: "The data are from a perfectly stable process", why: "Wrong: in a stable process overall and within σ are similar, so Cpk and Ppk would be close." },
      { t: "Large shifts or drifts between subgroups", why: "Correct: Ppk uses overall σ, which includes between-subgroup variation; a much lower Ppk shows the mean moves over time, so look for special causes." },
      { t: "The measurement system has too much bias", why: "Wrong: a constant bias shifts all readings equally and would affect Cpk and Ppk alike." },
      { t: "The specification limits were entered wrongly", why: "Wrong: both indices use the same limits, so a wrong limit would not create a gap between them." }
    ],
    answer: 1, ref: "Lesson 3.6"
  },
  {
    id: "M2-031", topic: "capability", level: 2,
    q: "A chemical has only an upper specification for impurity (maximum 0.5%). Which index should be reported?",
    options: [
      { t: "Cp, with zero used as the lower limit", why: "Wrong: inventing a lower limit of zero gives a misleading Cp; with one limit, Cp is undefined." },
      { t: "Cpl", why: "Wrong: Cpl measures distance to the lower limit, which does not exist here." },
      { t: "Cpu", why: "Correct: with only a USL, capability is Cpu = (USL − μ) / 3σ, which is also the Cpk." },
      { t: "Cpm", why: "Wrong: Cpm needs a target value and penalises distance from it; it does not handle a single limit." }
    ],
    answer: 2, ref: "Lesson 3.6"
  },
  {
    id: "M2-032", topic: "capability", level: 2,
    q: "Order handling times are strongly right-skewed and fail a normality test. Which approach gives a valid capability estimate?",
    options: [
      { t: "Transform the data (Box-Cox, Johnson) or fit a non-normal model", why: "Correct: capability needs a known distribution; transform the data and the spec limits the same way, or fit a distribution such as Weibull or lognormal." },
      { t: "Remove the longest times until the data pass the normality test", why: "Wrong: deleting real data hides the tail where defects occur and overstates capability." },
      { t: "Use the normal formulas anyway, since Cpk does not depend on shape", why: "Wrong: Cpk assumes normality; with skewed data it misstates the defect rate in the long tail." },
      { t: "Report Cp only, as it needs no distribution", why: "Wrong: Cp also assumes normality (6σ covering 99.73%) and ignores centring." }
    ],
    answer: 0, ref: "Lesson 3.6"
  },
  {
    id: "M2-033", topic: "capability", level: 2,
    q: "Each invoice is checked and classed as correct or defective. Which capability analysis fits these data?",
    options: [
      { t: "Normal capability with Cp and Cpk", why: "Wrong: Cp and Cpk need continuous data with specification limits; pass/fail data have neither." },
      { t: "Binomial capability: % defective, PPM and process Z", why: "Correct: defectives (each unit good or bad) follow the binomial; capability is shown as % defective, PPM or Z." },
      { t: "Poisson capability: DPU and DPMO", why: "Wrong: Poisson suits counts of defects per unit, where a unit can have several defects; here each invoice is just good or bad." },
      { t: "Gage R&R with %Study Variation", why: "Wrong: Gage R&R assesses the measurement system, not the capability of the process." }
    ],
    answer: 1, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-034", topic: "capability", level: 2,
    q: "A Minitab capability report (within σ) shows Z.LSL = 3.03, Z.USL = 3.00 and Z.Bench = 2.80. Why is Z.Bench lower than both Z.LSL and Z.USL?",
    options: [
      { t: "Z.Bench subtracts the 1.5σ shift", why: "Wrong: 3.0 − 1.5 = 1.5, not 2.8; Z.Bench does not apply the shift." },
      { t: "Z.Bench uses the overall σ instead of within σ", why: "Wrong: all three values come from the same within-σ report; Minitab gives a separate overall Z.Bench. The difference is in how the tails are combined." },
      { t: "Z.Bench is the average of the two Z values", why: "Wrong: the average of 3.03 and 3.00 is about 3.02, above Z.USL, not below it." },
      { t: "Z.Bench converts the combined out-of-spec rate to one Z", why: "Correct: Z.Bench is the Z for the total probability outside both limits (0.00122 + 0.00135 ≈ 0.00257, Z ≈ 2.80); adding the far tail raises the defect rate, so Z.Bench is below the nearer-limit Z." }
    ],
    answer: 3, ref: "Web: support.minitab.com"
  },
  {
    id: "M2-035", topic: "capability", level: 2,
    q: "A stable process has Cp = 1.5 and Cpk = 1.0. If it is perfectly centred and its σ does not change, what will Cpk be?",
    options: [
      { t: "1.5", why: "Correct: when the mean is at the centre of the specification, Cpk equals Cp, the best value possible with the current spread." },
      { t: "1.0", why: "Wrong: Cpk rises as the mean moves to the centre, because the distance to the nearer limit grows." },
      { t: "2.0", why: "Wrong: Cpk cannot exceed Cp; reaching 2.0 needs less variation, not centring." },
      { t: "1.25", why: "Wrong: centring does not average Cp and Cpk; a centred process has Cpk = Cp." }
    ],
    answer: 0, ref: "Lesson 3.6"
  },
  {
    id: "M2-036", topic: "capability", level: 3,
    q: "A stable, normal process has mean 18, within-subgroup σ = 1.5, LSL = 10 and USL = 22. What is Cpk?",
    options: [
      { t: "1.33", why: "Wrong: this is Cp = (22 − 10) / (6 × 1.5) = 1.33, which ignores that the mean is off-centre." },
      { t: "0.89", why: "Correct: Cpu = (22 − 18) / 4.5 = 0.89 and Cpl = (18 − 10) / 4.5 = 1.78; Cpk is the smaller, 0.89." },
      { t: "1.78", why: "Wrong: this is Cpl; Cpk takes the smaller of Cpu and Cpl, the side nearer the mean." },
      { t: "0.44", why: "Wrong: this divides by 6σ (4 / 9); Cpk uses 3σ because it looks at one side only." }
    ],
    answer: 1, ref: "Lesson 3.6"
  },
  {
    id: "M2-037", topic: "capability", level: 3,
    q: "A process has USL = 105, LSL = 95 and within-subgroup σ = 1.25. What is Cp?",
    options: [
      { t: "2.67", why: "Wrong: this divides by 3σ (10 / 3.75); Cp uses the full 6σ spread." },
      { t: "0.67", why: "Wrong: this uses half the tolerance (5 / 7.5); Cp compares the full tolerance with 6σ." },
      { t: "1.33", why: "Correct: Cp = (USL − LSL) / 6σ = 10 / (6 × 1.25) = 10 / 7.5 = 1.33." },
      { t: "8.00", why: "Wrong: this is tolerance / σ (10 / 1.25) and leaves out the 6 in the denominator." }
    ],
    answer: 2, ref: "Lesson 3.6"
  },
  {
    id: "M2-038", topic: "capability", level: 3,
    q: "A process centred at 100 has specification 95.2 to 104.8. The within-subgroup σ is 0.8 and the overall σ is 1.0. What is Pp?",
    options: [
      { t: "2.0", why: "Wrong: this uses the within-subgroup σ (9.6 / 4.8), which gives Cp, not Pp." },
      { t: "3.2", why: "Wrong: this divides by 3σ (9.6 / 3); Pp uses 6σ." },
      { t: "1.8", why: "Wrong: this averages Cp (2.0) and Pp (1.6); Pp uses the overall σ only." },
      { t: "1.6", why: "Correct: Pp = (USL − LSL) / 6σ_overall = 9.6 / 6.0 = 1.6; Cp would be 9.6 / 4.8 = 2.0." }
    ],
    answer: 3, ref: "Lesson 3.6"
  },
  {
    id: "M2-039", topic: "capability", level: 3,
    q: "A process has USL = 30, LSL = 18, mean 26 and overall σ = 1.0. What is Ppk?",
    options: [
      { t: "1.33", why: "Correct: Ppu = (30 − 26) / 3 = 1.33 and Ppl = (26 − 18) / 3 = 2.67; Ppk is the smaller, 1.33." },
      { t: "2.00", why: "Wrong: this is Pp = 12 / 6, which ignores that the mean is closer to the USL." },
      { t: "2.67", why: "Wrong: this is Ppl; Ppk takes the smaller value, from the side nearer the mean." },
      { t: "0.67", why: "Wrong: this divides the distance to the USL by 6σ (4 / 6); Ppk uses 3σ." }
    ],
    answer: 0, ref: "Lesson 3.6"
  },
  {
    id: "M2-040", topic: "capability", level: 3,
    q: "Impurity has a maximum limit of 0.50%. The process is stable with mean 0.20% and σ = 0.05%. What is Cpu?",
    options: [
      { t: "1.00", why: "Wrong: this divides by 6σ (0.30 / 0.30); a one-sided index uses 3σ." },
      { t: "3.33", why: "Wrong: this uses the limit itself (0.50 / 0.15) instead of its distance from the mean." },
      { t: "2.00", why: "Correct: Cpu = (USL − μ) / 3σ = (0.50 − 0.20) / 0.15 = 2.00." },
      { t: "1.67", why: "Wrong: this divides the limit by 6σ (0.50 / 0.30); the numerator must be USL − mean." }
    ],
    answer: 2, ref: "Lesson 3.6"
  },
  {
    id: "M2-041", topic: "capability", level: 3,
    q: "A process has LSL = 20, USL = 30, mean 31 and σ = 1. What is Cpk?",
    options: [
      { t: "0.33", why: "Wrong: the mean is above the USL, so USL − μ is negative and the index has a minus sign." },
      { t: "3.67", why: "Wrong: this is Cpl = (31 − 20) / 3; Cpk is the smaller of Cpu and Cpl." },
      { t: "1.67", why: "Wrong: this is Cp = 10 / 6, which ignores where the mean is." },
      { t: "−0.33", why: "Correct: Cpu = (30 − 31) / 3 = −0.33 and Cpl = 3.67, so Cpk = −0.33. A negative Cpk means the mean lies outside a specification limit." }
    ],
    answer: 3, ref: "Lesson 3.6"
  },
  {
    id: "M2-042", topic: "capability", level: 3,
    q: "A process has short-term Cpk = 1.5. What is its short-term Z to the nearer limit and its long-term sigma, assuming the 1.5σ shift?",
    options: [
      { t: "Z_ST = 3.0, long-term 1.5", why: "Wrong: this takes Z_ST = 2 × Cpk; Z to the nearer limit is 3 × Cpk." },
      { t: "Z_ST = 4.5, long-term 3.0", why: "Correct: Z_ST = 3 × Cpk = 4.5, and Z_LT = Z_ST − 1.5 = 3.0." },
      { t: "Z_ST = 4.5, long-term 6.0", why: "Wrong: long-term performance is worse than short-term, so the 1.5σ shift is subtracted, not added." },
      { t: "Z_ST = 1.5, long-term 0.0", why: "Wrong: Cpk is not a Z value; Z is three times Cpk." }
    ],
    answer: 1, ref: "Lesson 3.6"
  },
  {
    id: "M2-043", topic: "capability", level: 3,
    q: "A process makes 2,000 units with 5 defect opportunities each, and 62 defects are found. Using the standard sigma table with the 1.5σ shift, what is the approximate sigma level?",
    options: [
      { t: "About 4.0σ", why: "Correct: DPMO = 62 / (2,000 × 5) × 10⁶ = 6,200, close to 6,210 DPMO, which is 4σ in the standard table." },
      { t: "About 3.4σ", why: "Wrong: this treats DPU (62 / 2,000 = 0.031, i.e. 31,000 per million units) as DPMO and ignores the 5 opportunities per unit." },
      { t: "About 3.0σ", why: "Wrong: 3σ corresponds to about 66,807 DPMO, ten times the defect rate here." },
      { t: "About 5.0σ", why: "Wrong: 5σ corresponds to about 233 DPMO, far fewer defects than 6,200 DPMO." }
    ],
    answer: 0, ref: "Lesson 3.6"
  },
  {
    id: "M2-044", topic: "capability", level: 3,
    q: "A customer requires Cp ≥ 2.0 for a dimension with tolerance 0.60 mm (USL − LSL). What is the largest within-subgroup σ the process can have?",
    options: [
      { t: "0.10 mm", why: "Wrong: this uses 3σ in the denominator (0.60 / (3 × 2)); Cp uses 6σ." },
      { t: "0.20 mm", why: "Wrong: this is 0.60 / 3, which ignores the required Cp of 2.0." },
      { t: "0.025 mm", why: "Wrong: this divides by 12 × 2 = 24; the correct divisor is 6 × Cp = 12." },
      { t: "0.05 mm", why: "Correct: Cp = tolerance / 6σ, so σ ≤ 0.60 / (6 × 2.0) = 0.05 mm." }
    ],
    answer: 3, ref: "Lesson 3.6"
  },
  {
    id: "M2-045", topic: "capability", level: 3,
    q: "An Xbar-R chart with subgroups of 5 shows R̄ = 4.652 (d₂ = 2.326 for n = 5). The specification is 108 to 120. What is Cp?",
    options: [
      { t: "0.43", why: "Wrong: this uses R̄ as if it were σ (12 / (6 × 4.652)); σ_within = R̄ / d₂." },
      { t: "1.00", why: "Correct: σ_within = R̄ / d₂ = 4.652 / 2.326 = 2.0, so Cp = (120 − 108) / (6 × 2.0) = 1.00." },
      { t: "2.00", why: "Wrong: this divides by 3σ (12 / 6); Cp uses 6σ." },
      { t: "0.86", why: "Wrong: this uses d₂ as if it were σ (12 / (6 × 2.326)); d₂ converts R̄ to σ, it is not σ itself." }
    ],
    answer: 1, ref: "Lesson 3.6"
  }
]);
