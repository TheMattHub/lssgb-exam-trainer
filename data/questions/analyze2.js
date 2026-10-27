// Pack "analyze2": second set of questions for the Analyze topics (pack "analyze" in data/topics.js).
// Format: docs/CONTENT_GUIDE.md. Conventions: docs/research/iassc-gb-bok.md §3 (analyze) and §4.
// Written to avoid repeating the facts, scenarios and numbers of data/questions/analyze.js.
QB.add([
  // ---------------- multivari ----------------
  {
    id: "A2-001", topic: "multivari", level: 3,
    q: "Pin diameters (mm), measured at both ends of three consecutive pins every four hours:\nTime   Pin 1        Pin 2        Pin 3\n08:00  10.01 10.02  10.09 10.10  10.03 10.02\n12:00  10.08 10.09  10.02 10.03  10.06 10.05\n16:00  10.03 10.03  10.07 10.08  10.04 10.05\nWhich family of variation dominates?",
    options: [
      { t: "Positional (end-to-end within a pin)", why: "Wrong: the two ends of each pin differ by 0.01 mm at most, the smallest spread in the table." },
      { t: "Temporal (between the 4-hour groups)", why: "Wrong: the group averages are 10.045, 10.055 and 10.050 mm, a spread of only 0.01 mm." },
      { t: "Cyclical (between consecutive pins)", why: "Correct: within each time group, consecutive pins differ by up to 0.08 mm (e.g. 10.015 vs 10.095 at 08:00), far more than end-to-end (≤ 0.01) or group-to-group (0.01)." },
      { t: "No family stands out; the pattern is random", why: "Wrong: one family is clearly larger than the other two; a multi-vari chart exists to make that contrast visible." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "A2-002", topic: "multivari", level: 2,
    q: "A team is planning a multi-vari study on the thickness of extruded sheet. Which sampling plan fits the method?",
    options: [
      { t: "Several consecutive sheets at set intervals over several days, each measured at several points", why: "Correct: positions within each unit, consecutive units and repeated time intervals give the three families; the study must run long enough to capture the normal range of variation." },
      { t: "One sheet per shift, measured once at its centre, chosen at random", why: "Wrong: one reading per sheet and no consecutive sheets give no positional or cyclical information, so the families cannot be separated." },
      { t: "Sheets made at deliberately changed line speeds and die temperatures", why: "Wrong: deliberately changing inputs is a designed experiment. A multi-vari study observes the process as it normally runs." },
      { t: "Thirty consecutive sheets from a single hour, each measured at five points across its width and along its length", why: "Wrong: one hour of production shows positional and cyclical variation but no temporal variation, which may be the largest family." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "A2-003", topic: "multivari", level: 2,
    q: "A shaft is measured at 0° and at 90° around the same cross-section. On almost every shaft the two readings differ much more than shafts differ from each other or from hour to hour. What does this show?",
    options: [
      { t: "Cyclical variation, because each shaft gives a different pattern", why: "Wrong: cyclical variation is between consecutive shafts; here the shafts are alike and the difference sits inside each one." },
      { t: "Temporal variation, caused by drift during the shift", why: "Wrong: temporal variation would show the hourly groups moving; they barely change." },
      { t: "That the process is out of statistical control", why: "Wrong: a multi-vari chart splits variation into families; it is not a control chart and does not test for special causes." },
      { t: "Positional variation: the shafts are out of round", why: "Correct: two angles on the same section of one shaft are two positions on the same unit, so this is within-piece (positional) variation, here out-of-roundness." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "A2-004", topic: "multivari", level: 2,
    q: "Before running a multi-vari study on within-part thickness differences of only a few microns, what should the team confirm first?",
    options: [
      { t: "That the process data follow a normal distribution", why: "Wrong: a multi-vari chart is graphical and makes no normality assumption." },
      { t: "That the measurement system can resolve differences that small", why: "Correct: if gage variation is as large as the within-part differences, the chart shows measurement noise. MSA (Gage R&R, resolution) comes first, in Measure." },
      { t: "That the process capability Cpk is at least 1.33", why: "Wrong: capability compares the process with the specification; it is not a prerequisite for studying where the variation comes from." },
      { t: "That a designed experiment has already identified the key X", why: "Wrong: multi-vari is a screening step that comes before experiments, to narrow down where to look." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "A2-005", topic: "multivari", level: 1,
    q: "Which statement describes a limitation of a multi-vari study?",
    options: [
      { t: "It cannot be used on data from a running production process", why: "Wrong: running production is exactly where multi-vari data come from; the study is passive." },
      { t: "It needs the Xs to be continuous, so categories cannot be shown", why: "Wrong: the Xs in a multi-vari chart are usually categories (position, unit, time period, machine)." },
      { t: "It can only reveal sources that varied during the study period", why: "Correct: an X that stayed constant while data were collected (one material lot, one season) cannot show its effect; the study also points to a family, not a proven root cause." },
      { t: "It requires at least two factors to be changed on purpose", why: "Wrong: changing factors on purpose is DOE; multi-vari changes nothing." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "A2-006", topic: "multivari", level: 2,
    q: "A multi-vari study shows that temporal (time-to-time) variation dominates. Which suspected X should the team investigate first?",
    options: [
      { t: "Coolant temperature, which rises during the shift", why: "Correct: a variable that changes over hours fits temporal variation; warm-up, tool wear, ambient temperature and shift changes are typical temporal causes." },
      { t: "A misaligned tool that cuts a taper on every part", why: "Wrong: a taper on every part is a within-piece difference, i.e. positional variation." },
      { t: "Clamping force that varies each time a part is loaded", why: "Wrong: a load-to-load difference changes consecutive parts, i.e. cyclical (piece-to-piece) variation." },
      { t: "One mould cavity that runs larger than the other three", why: "Wrong: cavities moulded in the same shot differ at the same time, which is positional variation." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },

  // ---------------- inferential ----------------
  {
    id: "A2-007", topic: "inferential", level: 1,
    q: "An analyst numbers 2,000 invoices from 1 to 2,000 and uses a random number generator to pick 100 of them. Which sampling technique is this?",
    options: [
      { t: "Stratified sampling", why: "Wrong: stratified sampling first splits the population into groups (e.g. by team) and samples within each; no groups are formed here." },
      { t: "Systematic sampling", why: "Wrong: systematic sampling takes every k-th unit (e.g. every 20th invoice) after a random start." },
      { t: "Cluster sampling", why: "Wrong: cluster sampling picks whole groups (e.g. whole days of invoices) and takes every unit in them." },
      { t: "Simple random sampling", why: "Correct: every invoice has the same chance of selection and the picks are made by a random mechanism." }
    ],
    answer: 3, ref: "Lesson 3.4"
  },
  {
    id: "A2-008", topic: "inferential", level: 2,
    q: "An inspector checks the cartons on the top layer of each pallet because they are easy to reach. He proposes to double the number of cartons checked to make the estimate of damage more reliable. What is the problem?",
    options: [
      { t: "The sample is too small to apply the Central Limit Theorem", why: "Wrong: the issue is not size; even thousands of top-layer cartons would not represent the whole pallet." },
      { t: "It is a convenience sample; more cartons will not remove the bias", why: "Correct: top-layer cartons may suffer different damage (e.g. less crushing) than lower layers. A larger n reduces random sampling error, not bias; the sample must be random across layers." },
      { t: "It is a cluster sample, which can never be used for inspection", why: "Wrong: cluster sampling (whole pallets chosen at random, all cartons checked) is a valid method; here the units are chosen for convenience, not at random." },
      { t: "Doubling the sample halves the sampling error, which is too costly", why: "Wrong: doubling n reduces the standard error by a factor √2, not 2; and the real problem is bias." }
    ],
    answer: 1, ref: "Web: en.wikipedia.org Stratified sampling"
  },
  {
    id: "A2-009", topic: "inferential", level: 3,
    q: "Daily output comes from three shifts: 2,400 units on day shift, 1,200 on evening shift and 400 on night shift. A stratified sample of 200 units with proportional allocation is planned. How many units come from each shift (day, evening, night)?",
    options: [
      { t: "67, 67 and 66", why: "Wrong: an equal split ignores shift volume; proportional allocation samples each stratum in line with its share." },
      { t: "240, 120 and 40", why: "Wrong: this takes 10% of each shift and gives 400 units; the sampling fraction is 200/4,000 = 5%." },
      { t: "120, 60 and 20", why: "Correct: the sampling fraction is 200/4,000 = 5%; 5% of 2,400 = 120, of 1,200 = 60, of 400 = 20 (total 200)." },
      { t: "100, 50 and 50", why: "Wrong: these counts are not in the 6 : 3 : 1 ratio of the shift volumes, so night shift would be over-represented." }
    ],
    answer: 2, ref: "Web: en.wikipedia.org Stratified sampling"
  },
  {
    id: "A2-010", topic: "inferential", level: 3,
    q: "Individual fill weights have μ = 50 g and σ = 8 g. Samples of n = 16 are taken. Using the Central Limit Theorem, about 95% of sample means fall between which limits (z = 1.96)?",
    options: [
      { t: "34.32 g and 65.68 g", why: "Wrong: 50 ± 1.96 × 8 uses σ of individual values; that is where about 95% of single fills fall, not sample means." },
      { t: "49.02 g and 50.98 g", why: "Wrong: this divides σ by n (8/16 = 0.5) instead of √n." },
      { t: "48.00 g and 52.00 g", why: "Wrong: 50 ± 2 is ±1 standard error, which covers only about 68% of sample means." },
      { t: "46.08 g and 53.92 g", why: "Correct: standard error = σ/√n = 8/4 = 2 g; 50 ± 1.96 × 2 = 46.08 to 53.92 g." }
    ],
    answer: 3, ref: "Lesson 3.4"
  },
  {
    id: "A2-011", topic: "inferential", level: 1,
    q: "Repair times are strongly right-skewed. Which statement about the distribution of sample means is true?",
    options: [
      { t: "Means of samples of 40 are approximately normal, centred on μ", why: "Correct: by the Central Limit Theorem the means of reasonably large samples (n ≥ 30 rule of thumb) are close to normal whatever the parent shape, with mean μ and spread σ/√n." },
      { t: "Means of samples of 40 are as skewed as the individual times", why: "Wrong: averaging pulls the distribution of means towards normal; the skew shrinks as n grows." },
      { t: "Means of samples of 3 are normal because the CLT holds for any n", why: "Wrong: with very small samples from a strongly skewed population, the means are still skewed; the CLT is an approximation that improves with n." },
      { t: "Individual times become normal once 40 or more are collected", why: "Wrong: the CLT is about the distribution of sample means; collecting more individual values does not change their shape." }
    ],
    answer: 0, ref: "Lesson 3.4"
  },
  {
    id: "A2-012", topic: "inferential", level: 3,
    q: "A 95% confidence interval for mean lead time has a half-width of ±5.0 days. The team recomputes it at 99% confidence with the same data (z = 1.96 for 95%, 2.576 for 99%). What is the new half-width?",
    options: [
      { t: "±3.80 days", why: "Wrong: 5.0 × 1.96/2.576 inverts the ratio; higher confidence needs a wider interval, not a narrower one." },
      { t: "±6.57 days", why: "Correct: the half-width is proportional to z, so 5.0 × 2.576/1.96 = 6.57 days." },
      { t: "±5.21 days", why: "Wrong: 5.0 × 0.99/0.95 scales by the confidence levels; the width scales with the z values, not the percentages." },
      { t: "±5.00 days", why: "Wrong: the data are unchanged but the confidence level is not; a higher level always widens the interval for the same n and σ." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "A2-013", topic: "inferential", level: 3,
    q: "A team wants to estimate the proportion of late orders within ±5 percentage points at 95% confidence (z = 1.96). No prior estimate exists, so it uses p = 0.5 in n = z² × p(1 − p) / E². How many orders must it sample?",
    options: [
      { t: "196", why: "Wrong: 1.96 × 0.25/0.05² leaves z unsquared." },
      { t: "20", why: "Wrong: 1.96² × 0.25/0.05 = 19.2 leaves E unsquared." },
      { t: "384", why: "Wrong: 384.16 is rounded down; sample sizes are always rounded up, or the margin would be slightly above ±5 points." },
      { t: "385", why: "Correct: 1.96² × 0.5 × 0.5 / 0.05² = 3.8416 × 0.25 / 0.0025 = 384.16, rounded up to 385. p = 0.5 gives the largest p(1 − p), so it is the safe choice when p is unknown." }
    ],
    answer: 3, ref: "Web: en.wikipedia.org Sample size determination"
  },
  {
    id: "A2-014", topic: "inferential", level: 1,
    q: "A confidence interval for the mean is built from n = 10 readings, and σ is estimated by the sample standard deviation s. Why does it use t rather than z?",
    options: [
      { t: "Because t gives a narrower interval when n is small", why: "Wrong: t critical values are larger than z, so the interval is wider, not narrower." },
      { t: "Because z can only be used for proportions", why: "Wrong: z is used for means too, when σ is known (or n is large)." },
      { t: "Because s adds uncertainty, which t covers with heavier tails", why: "Correct: estimating σ by s adds uncertainty; the t distribution with n − 1 = 9 df has heavier tails, giving a wider, honest interval. As n grows, t approaches z." },
      { t: "Because the data must be non-normal for z to apply", why: "Wrong: both intervals assume roughly normal data (or a large n); the choice depends on whether σ is known." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },

  // ---------------- hyp-concepts ----------------
  {
    id: "A2-015", topic: "hyp-concepts", level: 1,
    q: "Which order of steps for a hypothesis test is correct?",
    options: [
      { t: "Collect data, choose α, state H0 and Ha, compute the p-value", why: "Wrong: choosing α and the hypotheses after seeing the data lets the data shape the test, which inflates the false-alarm risk." },
      { t: "State H0 and Ha, compute the p-value, then choose α", why: "Wrong: α must be fixed before the result is known; picking it afterwards can turn any result into the one wanted." },
      { t: "Choose the test, compute the p-value, then state H0 and Ha", why: "Wrong: the hypotheses define which test and which tail to use, so they come first." },
      { t: "State H0 and Ha, choose α, collect data, compute the p-value, decide", why: "Correct: the hypotheses and α are fixed in advance; then the data give a test statistic and p-value, which is compared with α to reject or fail to reject H0, and the result is put in practical terms." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "A2-016", topic: "hyp-concepts", level: 1,
    q: "A supplier ships a good lot, but the customer's acceptance test wrongly rejects it. Which error is this and whose risk is it called?",
    options: [
      { t: "Type I error, the producer's risk", why: "Correct: rejecting something that is actually fine is rejecting a true H0 (Type I, α); the supplier bears the cost, so it is called the producer's risk." },
      { t: "Type II error, the producer's risk", why: "Wrong: a Type II error is accepting a bad lot (failing to reject a false H0), and that is the consumer's risk." },
      { t: "Type I error, the consumer's risk", why: "Wrong: the consumer's risk is receiving a bad lot that passed, which is a Type II error (β)." },
      { t: "Type II error, the consumer's risk", why: "Wrong: the lot was good, so nothing bad slipped through; the error was a false rejection (Type I)." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "A2-017", topic: "hyp-concepts", level: 2,
    q: "For a fixed sample size, missing a real shift in a safety-critical dimension would be very costly, while a false alarm only costs a quick re-check. How should the team set α?",
    options: [
      { t: "Lower α to 0.01, to be more certain of any change it reports", why: "Wrong: lowering α makes the test harder to reject, which raises β and makes a missed shift more likely, the costly error here." },
      { t: "Keep α at 0.05, because α and β do not affect each other", why: "Wrong: for a fixed n, α and β move in opposite directions." },
      { t: "Raise α (e.g. to 0.10), accepting more false alarms to lower β", why: "Correct: for a fixed n, a larger α makes rejection easier, which lowers β and raises power. When missed effects cost more than false alarms, that trade is worth it." },
      { t: "Set α equal to β, so that the two risks are balanced", why: "Wrong: α and β are chosen from the cost of each error, not set equal by rule; here β matters more." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "A2-018", topic: "hyp-concepts", level: 2,
    q: "A study had a power of only 0.55 to detect a 2-minute reduction in mean set-up time. The test gives p = 0.30. What is the best conclusion?",
    options: [
      { t: "The new method does not reduce set-up time", why: "Wrong: failing to reject H0 does not prove it; with power 0.55 the study had a 45% chance of missing a real 2-minute reduction." },
      { t: "Fail to reject H0; the study is inconclusive and needs more data", why: "Correct: p > 0.05 means no significant evidence, but low power (β = 0.45) means a real effect could easily be missed. Increase n before drawing a conclusion." },
      { t: "Reject H0, because the power is greater than the p-value", why: "Wrong: power and the p-value are never compared; the decision compares p with α." },
      { t: "The probability that the new method works is 0.30", why: "Wrong: the p-value is the chance of data this extreme if H0 were true, not the probability that a hypothesis is true." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "A2-019", topic: "hyp-concepts", level: 2,
    q: "Which change, with everything else unchanged, reduces the power of a test?",
    options: [
      { t: "Increasing the sample size from 20 to 40", why: "Wrong: a larger n shrinks the standard error, which increases power." },
      { t: "Raising α from 0.05 to 0.10", why: "Wrong: a larger α makes rejection easier, which increases power (at the cost of more false alarms)." },
      { t: "Planning to detect a larger difference between the two means", why: "Wrong: larger differences are easier to detect, so power goes up." },
      { t: "Using a gage that adds more measurement variation", why: "Correct: extra measurement noise inflates σ, so the same real difference is harder to separate from noise and power falls. A good MSA protects power." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "A2-020", topic: "hyp-concepts", level: 3,
    q: "Before collecting data, the team set Ha: μ > 40 (one-tailed). The software, run with its default two-tailed option, reports p = 0.08, and x̄ is above 40. The statistic is t. What is the one-tailed p-value and the conclusion at α = 0.05?",
    options: [
      { t: "p = 0.04; reject H0", why: "Correct: for a symmetric t (or z) statistic with x̄ on the side named in Ha, the one-tailed p is half the two-tailed p: 0.08/2 = 0.04 < 0.05. This is valid only because the direction was fixed before seeing the data." },
      { t: "p = 0.16; fail to reject H0", why: "Wrong: doubling goes from one-tailed to two-tailed; here the move is the other way, so the p-value halves." },
      { t: "p = 0.08; fail to reject H0", why: "Wrong: 0.08 is the two-tailed p, which splits α over both tails; the planned test is one-tailed." },
      { t: "p = 0.92; fail to reject H0", why: "Wrong: 1 − 0.08 is not a p-value for this test; 0.96 would be the one-tailed p only if x̄ were on the opposite side of 40." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "A2-021", topic: "hyp-concepts", level: 2,
    q: "A new routing raises mean first-pass yield. The 95% confidence interval for the improvement (new − old) is 0.1 to 0.3 percentage points. The business case needs at least 2 points to pay back. What should the team conclude?",
    options: [
      { t: "Not significant, because the interval is narrow", why: "Wrong: significance depends on whether the interval contains 0, not on its width; this one excludes 0." },
      { t: "Significant, and large enough to justify the change", why: "Wrong: even the top of the interval (0.3 points) is far below the 2 points the business case needs." },
      { t: "Significant, but too small to matter in practice", why: "Correct: the interval excludes 0, so the improvement is statistically significant; but the whole interval lies below 2 points, so it is not practically significant." },
      { t: "Not significant, because the interval lies below 2 points", why: "Wrong: statistical significance is judged against 0 (no difference); 2 points is the practical threshold." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "A2-022", topic: "hyp-concepts", level: 3,
    q: "An analyst runs 10 independent hypothesis tests, each at α = 0.05, on data where every H0 is true. What is the chance of at least one false alarm?",
    options: [
      { t: "0.05", why: "Wrong: 0.05 is the risk for each single test; the risks build up over many tests." },
      { t: "0.50", why: "Wrong: 10 × 0.05 adds the risks; that overstates it because outcomes can overlap. Use 1 − 0.95¹⁰." },
      { t: "0.60", why: "Wrong: 0.95¹⁰ = 0.60 is the chance of no false alarm at all; the question asks for the complement." },
      { t: "0.40", why: "Correct: P(no false alarm) = 0.95¹⁰ = 0.599, so P(at least one) = 1 − 0.599 = 0.40. This is why ANOVA, not many t-tests, is used to compare several means." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },

  // ---------------- hyp-normal ----------------
  {
    id: "A2-023", topic: "hyp-normal", level: 2,
    q: "Fifteen parts are measured with Gage A. A different set of fifteen parts is measured with Gage B. Both data sets are normal. Which test compares the mean readings?",
    options: [
      { t: "Paired t-test", why: "Wrong: a paired test needs both readings on the same unit; here each part is measured by only one gage." },
      { t: "2-sample t-test", why: "Correct: the two groups contain different parts, so they are independent samples; compare their means with a 2-sample t (check equal variances first)." },
      { t: "1-sample t-test", why: "Wrong: a 1-sample t compares one mean with a fixed target, not two groups." },
      { t: "F-test", why: "Wrong: the F-test compares two variances, not two means." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "A2-024", topic: "hyp-normal", level: 3,
    q: "Nine operators are timed before and after training. The differences (before − after) are normal with mean d̄ = 2.4 min and standard deviation s_d = 3.0 min. With t(0.025, 8) = 2.306, what are the paired t statistic and the two-tailed conclusion at α = 0.05?",
    options: [
      { t: "t = 0.80; fail to reject H0", why: "Wrong: 2.4/3.0 divides by s_d and forgets √n; the standard error of d̄ is s_d/√n." },
      { t: "t = 7.20; reject H0", why: "Wrong: 2.4/(3.0/9) divides s_d by n instead of √n." },
      { t: "t = 2.40; reject H0", why: "Correct: SE = s_d/√n = 3.0/3 = 1.0; t = 2.4/1.0 = 2.40 > 2.306, so reject H0: the mean time changed." },
      { t: "t = 2.40; fail to reject H0", why: "Wrong: the statistic is right, but 2.40 exceeds the critical value 2.306, so H0 is rejected." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "A2-025", topic: "hyp-normal", level: 2,
    q: "Before a one-way ANOVA on three machines, the team runs a test for equal variances. One machine's data are clearly skewed. Output:\nBartlett's test   p = 0.012\nLevene's test     p = 0.240\nWhat should the team conclude about the variances?",
    options: [
      { t: "Rely on Bartlett: the variances differ", why: "Wrong: Bartlett assumes normal data and is sensitive to non-normality, so with a skewed group its small p may reflect the shape, not the spread." },
      { t: "Rely on Levene: no evidence the variances differ", why: "Correct: Levene is robust to non-normal data. Its p = 0.240 > 0.05, so fail to reject equal variances." },
      { t: "Average the two p-values: 0.126, so the variances are equal", why: "Wrong: p-values from different tests are never averaged; choose the test whose assumptions the data meet. Also, failing to reject does not prove equality." },
      { t: "The results conflict, so the variances cannot be assessed", why: "Wrong: the conflict is explained by the skewed group; the test suited to these data (Levene) gives a usable answer." }
    ],
    answer: 1, ref: "Web: NIST e-Handbook (Levene test)"
  },
  {
    id: "A2-026", topic: "hyp-normal", level: 3,
    q: "Is Machine A more variable than Machine B? Ten normal readings from each give s_A = 4.0 and s_B = 2.5. With the one-tailed critical value F(0.05; 9, 9) = 3.18, what are the F statistic and the conclusion?",
    options: [
      { t: "F = 2.56; fail to reject H0", why: "Correct: F = s_A²/s_B² = 16/6.25 = 2.56 < 3.18, so there is not enough evidence that Machine A is more variable." },
      { t: "F = 1.60; fail to reject H0", why: "Wrong: 4.0/2.5 divides standard deviations; the F-test uses the ratio of variances." },
      { t: "F = 2.56; reject H0", why: "Wrong: the ratio is right, but 2.56 is below the critical value 3.18, so H0 is not rejected." },
      { t: "F = 6.40; reject H0", why: "Wrong: 16 × 2.5/6.25 mixes variance and standard deviation; F = 16/6.25." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "A2-027", topic: "hyp-normal", level: 2,
    q: "One-way ANOVA output:\nSource   DF   SS     MS     F     P\nMachine   4   48.0   12.0  4.00  0.012\nError    25   75.0    3.0\nTotal    29  123.0\nHow many machines were compared, and how many observations were there in total?",
    options: [
      { t: "4 machines, 29 observations", why: "Wrong: these are the degrees of freedom; machine DF = k − 1 and total DF = N − 1." },
      { t: "5 machines, 25 observations", why: "Wrong: 25 is the error DF (N − k), not the number of observations." },
      { t: "5 machines, 30 observations", why: "Correct: k − 1 = 4 gives k = 5 machines; N − 1 = 29 gives N = 30 (check: error DF = N − k = 25)." },
      { t: "4 machines, 30 observations", why: "Wrong: the factor DF is k − 1, so 4 means five machines." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "A2-028", topic: "hyp-normal", level: 2,
    q: "One-way ANOVA output for cycle time by shift:\nSource  DF  SS     MS    F     P\nShift    2   45.0  22.5  4.50  0.021\nError   27  135.0   5.0\nTotal   29  180.0\nWhich interpretation is correct (α = 0.05)?",
    options: [
      { t: "Shift means do not differ, because shift explains only 25% of the variation", why: "Wrong: significance comes from p = 0.021 < 0.05; a low R² does not cancel a significant F." },
      { t: "Shift explains 75% of the variation in cycle time", why: "Wrong: 135/180 = 75% is the error share, the variation left unexplained." },
      { t: "Every shift has a different mean cycle time", why: "Wrong: a significant F only says that not all means are equal; a post-hoc test shows which differ." },
      { t: "At least one shift mean differs, but shift explains only 25% of the variation", why: "Correct: p = 0.021 < 0.05 rejects equal means; R² = SS shift/SS total = 45/180 = 25%, so other Xs drive most of the variation." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "A2-029", topic: "hyp-normal", level: 2,
    q: "An ANOVA comparing three suppliers is significant. Tukey 95% simultaneous intervals for the differences in means:\nB − A: (−1.2, 2.0)\nC − A: ( 1.5, 4.7)\nC − B: ( 1.1, 4.3)\nWhich conclusion is correct?",
    options: [
      { t: "C differs from A and from B; A and B are not shown to differ", why: "Correct: an interval that excludes 0 marks a significant difference (C − A and C − B, both positive, so C is higher); B − A contains 0, so no significant difference." },
      { t: "All three suppliers differ from one another", why: "Wrong: the B − A interval contains 0, so that pair is not significantly different." },
      { t: "A differs from B, because the B − A interval is the widest", why: "Wrong: the width of an interval shows its precision; what matters is whether it contains 0." },
      { t: "No pair differs, because the ANOVA already answered the question", why: "Wrong: ANOVA only says at least one mean differs; Tukey's comparisons are run to find which ones." }
    ],
    answer: 0, ref: "Web: NIST e-Handbook (Tukey's method)"
  },
  {
    id: "A2-030", topic: "hyp-normal", level: 2,
    q: "Two independent groups of normal data are compared. A test for equal variances gives p = 0.003. How should the team compare the means?",
    options: [
      { t: "2-sample t-test with pooled variance", why: "Wrong: pooling assumes equal variances, which the test (p = 0.003) has just rejected." },
      { t: "Paired t-test on the two groups", why: "Wrong: pairing needs two measurements on the same units; these groups are independent." },
      { t: "Mann-Whitney test, since the variances differ", why: "Wrong: the data are normal; a t-test that allows unequal variances keeps the power of a parametric test. Mann-Whitney also assumes similar shapes." },
      { t: "2-sample t-test without assuming equal variances", why: "Correct: with unequal variances use the unpooled (Welch) 2-sample t, which adjusts the standard error and degrees of freedom." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },

  // ---------------- hyp-nonnormal ----------------
  {
    id: "A2-031", topic: "hyp-nonnormal", level: 2,
    q: "Mann-Whitney output for complaint resolution times (days) at two branches:\nBranch A  N = 18  median = 12.5\nBranch B  N = 20  median = 15.0\nPoint estimate for η_A − η_B = −2.4\n95% CI for η_A − η_B: (−4.1, −0.3)\nW = 280.0, p = 0.031\nWhat is the conclusion at α = 0.05?",
    options: [
      { t: "The mean resolution times differ significantly", why: "Wrong: Mann-Whitney works on ranks and compares medians (η), not means." },
      { t: "Branch A's median time is significantly lower than Branch B's", why: "Correct: p = 0.031 < 0.05 and the interval for η_A − η_B lies entirely below 0, so A's median is lower." },
      { t: "No significant difference, because the medians differ by only 2.5 days", why: "Wrong: significance comes from p versus α, not from the size of the gap; whether 2.5 days matters is a separate, practical question." },
      { t: "No conclusion is possible, because the group sizes differ", why: "Wrong: Mann-Whitney does not need equal group sizes." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "A2-032", topic: "hyp-nonnormal", level: 3,
    q: "Defective parts by shift:\n         Defective  Good  Total\nShift A     30      170    200\nShift B     50      150    200\nTotal       80      320    400\nUsing χ² = Σ (O − E)²/E and χ²(0.05, 1) = 3.84, what are the χ² statistic and the conclusion?",
    options: [
      { t: "χ² = 0.625; fail to reject H0", why: "Wrong: this sums |O − E|/E without squaring the differences." },
      { t: "χ² = 1.25; fail to reject H0", why: "Wrong: this sums only the two 'Good' cells (0.625 each) and leaves out the defective cells." },
      { t: "χ² = 5.00; reject H0", why: "Wrong: this sums only the two 'Defective' cells; all four cells contribute to χ²." },
      { t: "χ² = 6.25; reject H0", why: "Correct: E = 40 (defective) and 160 (good) for each shift. χ² = 100/40 + 100/160 + 100/40 + 100/160 = 2.5 + 0.625 + 2.5 + 0.625 = 6.25 > 3.84, so the defective rate is related to shift." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "A2-033", topic: "hyp-nonnormal", level: 3,
    q: "Line 1 has 40 defectives in 500 units; Line 2 has 24 in 500. With the pooled proportion, z = (p̂₁ − p̂₂)/√(p̄(1 − p̄)(1/n₁ + 1/n₂)). What is z?",
    options: [
      { t: "z = 2.07", why: "Correct: p̂₁ = 0.080, p̂₂ = 0.048, p̄ = 64/1000 = 0.064. SE = √(0.064 × 0.936 × (2/500)) = 0.01548; z = 0.032/0.01548 = 2.07, above 1.96 so the rates differ at α = 0.05 (two-tailed)." },
      { t: "z = 2.92", why: "Wrong: this uses 1/500 instead of 1/n₁ + 1/n₂ = 2/500, so the standard error is too small." },
      { t: "z = 4.13", why: "Wrong: this uses 1/1000 (one combined n) instead of 1/n₁ + 1/n₂, which halves the variance." },
      { t: "z = 0.50", why: "Wrong: 0.032/0.064 divides the difference by the pooled proportion instead of by its standard error." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "A2-034", topic: "hyp-nonnormal", level: 2,
    q: "A supplier claims a defective rate of no more than 1%. The team inspects 500 parts and finds 9 defectives. Which test and alternative hypothesis fit?",
    options: [
      { t: "2-proportion test; Ha: p₁ ≠ p₂", why: "Wrong: there is only one sample, compared with a claimed value, not two groups." },
      { t: "χ² contingency test; Ha: defects and supplier are related", why: "Wrong: a contingency table needs two categorical variables cross-classified; here there is one proportion against a target." },
      { t: "1-proportion test; Ha: p > 0.01", why: "Correct: one sample of pass/fail data compared with a target uses a 1-proportion test. The claim 'no more than 1%' sits in H0 (p ≤ 0.01); the team wants evidence that p > 0.01." },
      { t: "1-sample t-test; Ha: μ > 0.01", why: "Wrong: defective/good is attribute data; a t-test is for the mean of continuous data." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "A2-035", topic: "hyp-nonnormal", level: 2,
    q: "Chi-square test for association between product family and return reason:\nPearson χ² = 4.10, DF = 3, P-Value = 0.251\nAll expected counts ≥ 5.\nWhat is the conclusion at α = 0.05?",
    options: [
      { t: "Return reason depends on product family", why: "Wrong: that would need p ≤ 0.05; here p = 0.251." },
      { t: "The data prove that the two variables are independent", why: "Wrong: failing to reject H0 is not proof of independence; a real but weak association could be missed." },
      { t: "The test is invalid, because χ² is smaller than its DF + 2", why: "Wrong: there is no such rule; validity depends on expected counts (all ≥ 5 here)." },
      { t: "Fail to reject H0: no evidence of an association", why: "Correct: p = 0.251 > 0.05, so the data show no significant association between product family and return reason." }
    ],
    answer: 3, ref: "Lesson 4.1"
  },
  {
    id: "A2-036", topic: "hyp-nonnormal", level: 2,
    q: "Twelve operators are timed before and after a method change. The before − after differences are clearly non-normal but roughly symmetric. Which test fits?",
    options: [
      { t: "Mann-Whitney test on the before and after times", why: "Wrong: Mann-Whitney is for two independent groups; here the same operators are measured twice, so the data are paired." },
      { t: "1-sample Wilcoxon test on the differences, against 0", why: "Correct: paired non-normal data are analysed as one sample of differences; with a symmetric shape the Wilcoxon signed-rank test has more power than the sign test." },
      { t: "Paired t-test on the differences", why: "Wrong: the paired t assumes the differences are roughly normal; with clearly non-normal differences and small n use a non-parametric test." },
      { t: "Kruskal-Wallis test with before and after as two groups", why: "Wrong: Kruskal-Wallis is for independent groups and ignores the pairing by operator." }
    ],
    answer: 1, ref: "Lesson 4.1"
  },
  {
    id: "A2-037", topic: "hyp-nonnormal", level: 2,
    q: "Customers of two independent stores rate service on a 1-to-5 scale (very poor to very good). Which test compares the two stores?",
    options: [
      { t: "Mann-Whitney test", why: "Correct: ratings are ordinal (ranked categories, unequal steps), so a rank-based test for two independent groups fits." },
      { t: "2-sample t-test", why: "Wrong: the t-test treats the scale as continuous with equal steps and compares means, which ordinal ratings do not support well." },
      { t: "Paired t-test", why: "Wrong: different customers rate each store, so the samples are independent, not paired." },
      { t: "1-sample sign test", why: "Wrong: the sign test compares one median with a target, not two groups." }
    ],
    answer: 0, ref: "Lesson 4.1"
  },
  {
    id: "A2-038", topic: "hyp-nonnormal", level: 3,
    q: "In a χ² contingency table of 300 claims, the 'Region North' row total is 60 and the 'Rejected' column total is 80. The observed count in that cell is 25. What is this cell's contribution to χ²?",
    options: [
      { t: "3.24", why: "Wrong: (25 − 16)²/25 divides by the observed count; the contribution divides by the expected count." },
      { t: "0.56", why: "Wrong: (25 − 16)/16 forgets to square the difference." },
      { t: "5.06", why: "Correct: E = 60 × 80/300 = 16; contribution = (25 − 16)²/16 = 81/16 = 5.06." },
      { t: "81.0", why: "Wrong: (25 − 16)² = 81 is only the numerator; divide by E = 16." }
    ],
    answer: 2, ref: "Lesson 4.1"
  },
  {
    id: "A2-039", topic: "hyp-nonnormal", level: 1,
    q: "What does the 1-sample sign test use from the data?",
    options: [
      { t: "The ranks of the distances from the hypothesised median", why: "Wrong: ranking the distances is what the Wilcoxon signed-rank test does, which is why it needs symmetry." },
      { t: "The sample mean and standard deviation", why: "Wrong: those feed a 1-sample t-test, a parametric test." },
      { t: "The observed and expected counts in each category", why: "Wrong: observed vs expected counts are the basis of χ² tests." },
      { t: "How many values fall above and below the hypothesised median", why: "Correct: the sign test counts values above and below the target median and compares the split with a binomial (50/50) model, ignoring the size of each distance." }
    ],
    answer: 3, ref: "Lesson 4.1"
  }
]);
