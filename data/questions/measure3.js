// Pack "measure3": second round of Measure questions (process-map, basic-stats, distributions,
// msa, capability). Format: docs/CONTENT_GUIDE.md. Conventions: docs/research/iassc-gb-bok.md
// section 4 (kappa ≥ 0.75 acceptable, Cpk with 3σ, 1.5σ shift stated where used).
// Topics stay owned by measure1/measure2 (learn pages live there); this file only adds questions.
QB.add([
  // ---------------- process-map ----------------
  {
    id: "M3-001", topic: "process-map", level: 3,
    q: "A current-state value stream map shows three inventory triangles before three process steps: 400 units, 1,200 units and 800 units. Customer demand is 400 units a day. Using Little's law, how many days of lead time does this inventory add?",
    options: [
      { t: "3 days", why: "Wrong: 3 days is only the largest buffer (1,200 ÷ 400); every queue adds to the lead time, so all three must be summed." },
      { t: "6 days", why: "Correct: each buffer is converted to days by dividing by daily demand: 400 ÷ 400 + 1,200 ÷ 400 + 800 ÷ 400 = 1 + 3 + 2 = 6 days." },
      { t: "2 days", why: "Wrong: 2 days is the average buffer (800 units) divided by demand; a unit waits in every buffer in turn, so the days add up rather than average." },
      { t: "1 day", why: "Wrong: 1 day is only the first buffer (400 ÷ 400); the units also queue at the second and third steps." }
    ],
    answer: 1, ref: "Web: industryweek.com (Little's law on a VSM)"
  },
  {
    id: "M3-002", topic: "process-map", level: 1,
    q: "A data box on a value stream map shows a press with C/T = 45 s, C/O = 30 min and Uptime = 85%. What does the uptime figure mean?",
    options: [
      { t: "85% of the parts it makes pass inspection right first time", why: "Wrong: that describes first-time yield (or %C&A on an office map), a quality measure, not machine availability." },
      { t: "85% of the total lead time at the press is value-added", why: "Wrong: that is process cycle efficiency, which comes from the VSM timeline, not from a machine's data box." },
      { t: "The press runs at 85% of the takt time", why: "Wrong: comparing cycle time with takt time is a separate check; uptime says nothing about speed against demand." },
      { t: "The press is available for 85% of the time it is needed", why: "Correct: uptime is the percentage of time a machine is available for production; the rest is lost to stoppages." }
    ],
    answer: 3, ref: "Web: lean.org (value-stream mapping lexicon)"
  },
  {
    id: "M3-003", topic: "process-map", level: 1,
    q: "A process FMEA row for a bottling line holds these four entries. Which one is the failure mode?",
    options: [
      { t: "Filler nozzle partly blocked by residue", why: "Wrong: this is the cause, the reason the failure mode happens; it drives the Occurrence rating." },
      { t: "Customer receives a short measure; regulator may fine", why: "Wrong: this is the effect, the consequence of the failure as felt downstream; it drives the Severity rating." },
      { t: "Bottle filled below the declared volume", why: "Correct: the failure mode is the way the step fails to meet its intent, here an underfilled bottle." },
      { t: "Checkweigher rejects light bottles at line end", why: "Wrong: this is a current control; how well it catches the failure drives the Detection rating." }
    ],
    answer: 2, ref: "Lesson 3.1"
  },
  {
    id: "M3-004", topic: "process-map", level: 3,
    q: "An X-Y matrix scores four inputs against three outputs (scores 0, 1, 3, 9).\nOutput weights: Y1 = 8, Y2 = 6, Y3 = 3\nInput A: 9, 0, 0\nInput B: 3, 9, 1\nInput C: 3, 3, 9\nInput D: 1, 9, 0\nWhich input ranks first?",
    options: [
      { t: "Input A", why: "Wrong: A has the top score on the most important output, but its weighted total is only 8 × 9 = 72." },
      { t: "Input C", why: "Wrong: C has the highest unweighted sum (15), but its weighted total is 8 × 3 + 6 × 3 + 3 × 9 = 69; the weights must be applied." },
      { t: "Input D", why: "Wrong: D's weighted total is 8 × 1 + 6 × 9 + 3 × 0 = 62, the lowest of the four." },
      { t: "Input B", why: "Correct: B = 8 × 3 + 6 × 9 + 3 × 1 = 24 + 54 + 3 = 81, ahead of A (72), C (69) and D (62)." }
    ],
    answer: 3, ref: "Lesson 3.1"
  },

  // ---------------- basic-stats ----------------
  {
    id: "M3-005", topic: "basic-stats", level: 2,
    q: "Box plots of fill weight (g) for two lines:\nLine A: whiskers 495–505, Q1 498, median 500, Q3 502\nLine B: whiskers 486–514, Q1 494, median 500, Q3 506\nNo points are plotted beyond the whiskers. Which conclusion is supported?",
    options: [
      { t: "The medians match, so the two lines perform the same", why: "Wrong: equal centres say nothing about spread; Line B's box is three times wider, so it performs worse." },
      { t: "Line B has outliers, because its whiskers are much longer", why: "Wrong: outliers are shown as separate points beyond 1.5 × IQR; B's fences are 476 and 524, and no points lie outside them." },
      { t: "Same median, but Line B has three times the IQR of Line A", why: "Correct: IQR A = 502 − 498 = 4 g and IQR B = 506 − 494 = 12 g, so B is far more variable around the same centre." },
      { t: "Line B has a higher typical weight, because its box reaches higher", why: "Wrong: a box that reaches higher but also lower shows more spread; the median line, 500 g for both, shows the centre." }
    ],
    answer: 2, ref: "Lesson 3.2"
  },
  {
    id: "M3-006", topic: "basic-stats", level: 2,
    q: "A supplier sends 300 shaft diameters as evidence of capability. The histogram is bell-shaped in the middle but stops abruptly at both specification limits, with tall bars right at the edges and no values outside. What is the most likely explanation?",
    options: [
      { t: "The process is highly capable, because no part is outside the limits", why: "Wrong: a natural process tails off gradually; a sharp cut at both limits means the out-of-spec tail was removed, not that it never existed." },
      { t: "Out-of-spec parts were sorted out or the data edited before reporting", why: "Correct: a truncated (cliff-edged) histogram at the limits points to 100% inspection or edited data, so it does not show the true process." },
      { t: "Two populations are mixed, for example two machines or two shifts", why: "Wrong: mixed populations give two peaks (bimodal), not a bell shape cut off at the spec limits." },
      { t: "Diameters have a natural bound at zero, which skews the distribution", why: "Wrong: a natural bound gives a pile-up on one side and a long tail on the other, not a sharp cut at both limits." }
    ],
    answer: 1, ref: "Lesson 3.2"
  },
  {
    id: "M3-007", topic: "basic-stats", level: 2,
    q: "An Anderson-Darling test on 5,000 oven temperature readings gives p = 0.008. The histogram is bell-shaped and the normal probability plot is almost straight, with slight bending only in the far tails. Why might the test reject normality here?",
    options: [
      { t: "A very large sample makes the test detect departures too small to matter", why: "Correct: formally the data still fail the test (p ≤ 0.05, not normal), but with n = 5,000 the test has so much power that trivial departures become significant; use the plot to judge whether normal-based methods remain practical." },
      { t: "The Anderson-Darling test is only valid for samples of 30 or fewer", why: "Wrong: the test has no such upper limit; the issue is that its power keeps rising with n, not that it becomes invalid." },
      { t: "A p-value below 0.05 means the data fit the normal distribution well", why: "Wrong: H₀ of the test is normality, so a small p-value is evidence against normality, not for it." },
      { t: "The histogram uses too few bars, which distorts the test result", why: "Wrong: the test works on the ordered data values, not on the histogram; bar width changes the picture, not the p-value." }
    ],
    answer: 0, ref: "Web: support.minitab.com (normality test data considerations)"
  },
  {
    id: "M3-008", topic: "basic-stats", level: 2,
    q: "Bag fill weights are recorded to the nearest gram; nearly all bags weigh 498 to 502 g. An Anderson-Darling test gives p < 0.005, and the normal probability plot shows the points in horizontal stacks, many at each value, lying along a straight line. What is the best next step?",
    options: [
      { t: "Treat the data as bimodal and stratify the bags by shift", why: "Wrong: stacks at every recorded value come from rounding, not from two separate groups; a mixed population shows two peaks or a kink in the plot." },
      { t: "Delete the lightest and heaviest bags as outliers and retest", why: "Wrong: nothing points to outliers; removing valid data biases the baseline and does not remove the ties." },
      { t: "Apply a Box-Cox transformation and carry on with normal methods", why: "Wrong: transforming rounded data keeps the same ties, so the test can still reject; the root cause is the coarse recording." },
      { t: "Re-weigh to 0.1 g, since coarse rounding alone can fail the test", why: "Correct: coarse resolution creates many tied values, which can make the Anderson-Darling test reject even when the process is normal." }
    ],
    answer: 3, ref: "Web: blog.minitab.com (normality tests and rounding)"
  },

  // ---------------- distributions ----------------
  {
    id: "M3-009", topic: "distributions", level: 3,
    q: "Part length is normal with mean 100 mm and σ = 4 mm. The specification is 94 to 108 mm. Given Φ(2.0) = 0.9772 and Φ(1.5) = 0.9332, what share of parts is within specification?",
    options: [
      { t: "97.7%", why: "Wrong: this is only P(X ≤ 108); it ignores the 6.7% of parts below the LSL of 94 mm." },
      { t: "93.3%", why: "Wrong: this is only P(X ≥ 94); it ignores the 2.3% of parts above the USL of 108 mm." },
      { t: "91.0%", why: "Correct: Z_USL = (108 − 100) ÷ 4 = 2.0 and Z_LSL = (94 − 100) ÷ 4 = −1.5, so the share is 0.9772 − (1 − 0.9332) = 0.9104, about 91.0%." },
      { t: "86.6%", why: "Wrong: this uses Z = 1.5 on both sides (2 × 0.9332 − 1); the USL is 2σ from the mean, not 1.5σ." }
    ],
    answer: 2, ref: "Lesson 3.4"
  },
  {
    id: "M3-010", topic: "distributions", level: 2,
    q: "Calls reach a help desk at random, at a constant average rate of 12 an hour. Which distribution models the time between calls, and what is its mean?",
    options: [
      { t: "Poisson, with a mean of 12 minutes", why: "Wrong: the Poisson counts calls per hour (mean 12 an hour); the time between calls is continuous and exponential, with mean 60 ÷ 12 = 5 minutes." },
      { t: "Exponential, with a mean of 5 minutes", why: "Correct: with events at a constant rate the time between them is exponential, with mean 1 ÷ rate = 1 ÷ 12 hour = 5 minutes." },
      { t: "Exponential, with a mean of 12 minutes", why: "Wrong: right distribution, but the rate was used as the mean; the mean time between events is 1 ÷ rate = 60 ÷ 12 = 5 minutes." },
      { t: "Poisson, with a mean of 5 minutes", why: "Wrong: the mean is right, but the Poisson is discrete and counts calls in a period; a waiting time between calls is continuous and exponential." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },
  {
    id: "M3-011", topic: "distributions", level: 2,
    q: "A lot of 20 castings contains 3 defectives. An inspector draws 5 castings without replacement. Which distribution gives the exact probability of finding one defective?",
    options: [
      { t: "Binomial", why: "Wrong: the binomial assumes a constant p on every draw; drawing without replacement from only 20 units changes p after each draw." },
      { t: "Poisson", why: "Wrong: the Poisson counts defects per unit of area or time with no fixed upper limit, not defectives drawn from a small lot." },
      { t: "Exponential", why: "Wrong: the exponential is continuous and models the time between events, not a count of defectives in a sample." },
      { t: "Hypergeometric", why: "Correct: sampling without replacement from a small finite lot, with a known number of defectives, is the hypergeometric case." }
    ],
    answer: 3, ref: "Lesson 3.4"
  },

  // ---------------- msa ----------------
  {
    id: "M3-012", topic: "msa", level: 3,
    q: "Gage linearity and bias study, reference parts 5 to 25 mm:\nLinearity: slope = −0.008, p = 0.000\nAverage bias = 0.000, p = 0.95\nBias at 5 mm = +0.08 (p = 0.000); bias at 25 mm = −0.08 (p = 0.000)\nWhich conclusion is best?",
    options: [
      { t: "There is no bias problem, because the average bias is zero", why: "Wrong: the average hides opposite biases at the two ends; the significant slope shows the bias changes with size." },
      { t: "The gage reads high on small parts and low on large ones", why: "Correct: the slope is significant (p = 0.000), so bias depends on size, from +0.08 at 5 mm to −0.08 at 25 mm; the gage needs correcting across its range." },
      { t: "The gage drifts over time, so a stability chart is needed", why: "Wrong: drift over time is stability; this study measures bias across the range at one time, which is linearity." },
      { t: "Repeatability is poor, so the gage needs mechanical repair", why: "Wrong: a linearity study looks at the average offset at each size, not the spread of repeated readings." }
    ],
    answer: 1, ref: "Lesson 3.5"
  },
  {
    id: "M3-013", topic: "msa", level: 3,
    q: "In an attribute agreement analysis, an inspector's ratings match the known standard on 90% of the parts. Agreement expected by chance alone is 50%. What is the inspector's kappa, and how is it rated using the AIAG guideline?",
    options: [
      { t: "0.90, acceptable", why: "Wrong: 0.90 is the raw agreement; kappa removes the agreement expected by chance." },
      { t: "0.40, not acceptable", why: "Wrong: 0.90 − 0.50 = 0.40 is only the numerator; it must be divided by 1 − 0.50." },
      { t: "0.80, acceptable", why: "Correct: κ = (P_observed − P_chance) ÷ (1 − P_chance) = (0.90 − 0.50) ÷ 0.50 = 0.80, above the 0.75 guideline." },
      { t: "0.44, not acceptable", why: "Wrong: this divides by the observed agreement, 0.40 ÷ 0.90; the denominator is 1 − P_chance (0.44 would also fall short of 0.75)." }
    ],
    answer: 2, ref: "Web: support.minitab.com (attribute agreement key results)"
  },

  // ---------------- capability ----------------
  {
    id: "M3-014", topic: "capability", level: 3,
    q: "A team checks 1,200 invoices and classes 18 as defective. Minitab binomial capability reports process Z as the standard normal value with the defective rate in the upper tail, with no 1.5σ shift added (P(Z > 2.17) ≈ 0.015). Which pair of results is correct?",
    options: [
      { t: "15,000 PPM defective; process Z ≈ 2.17", why: "Correct: 18 ÷ 1,200 = 0.015 = 1.5% = 15,000 PPM, and the Z with 1.5% in the upper tail is about 2.17." },
      { t: "1,500 PPM defective; process Z ≈ 2.97", why: "Wrong: this reads 1.5% as 0.15%; 0.015 × 1,000,000 = 15,000 PPM, and 2.97 is the Z for 0.15%." },
      { t: "15,000 PPM defective; process Z ≈ 3.67", why: "Wrong: this adds the 1.5σ shift, as a sigma table does; binomial process Z is read straight from the defective rate, with no shift added." },
      { t: "15,000 PPM defective; process Z ≈ 6.51", why: "Wrong: this treats 2.17 as a Cpk and multiplies it by 3 (Z = 3 × Cpk); 2.17 is already the Z value." }
    ],
    answer: 0, ref: "Web: support.minitab.com (binomial capability key results)"
  },
  {
    id: "M3-015", topic: "capability", level: 2,
    q: "Repair turnaround times are right-skewed, with a single upper limit of 20 minutes. The team applies a natural-log (Box-Cox λ = 0) transformation, and the transformed data pass a normality test. What must they do before calculating capability?",
    options: [
      { t: "Keep the limit at 20 minutes, since customers set it in minutes", why: "Wrong: comparing log-scale data with a limit in minutes mixes units; the index would be meaningless." },
      { t: "Transform the limit the same way, to ln 20 ≈ 3.00", why: "Correct: the specification limit must go through the same transformation as the data, so the index compares like with like." },
      { t: "Drop the longest turnaround times until the raw data look normal", why: "Wrong: deleting valid data biases the result and hides exactly the long times that fail the customer." },
      { t: "Report Cp only, because Cpk is undefined for transformed data", why: "Wrong: Cpk (here Cpu) is calculated on the transformed scale; Cp needs two limits and is undefined for a one-sided spec." }
    ],
    answer: 1, ref: "Web: help.sigmazone.com (Box-Cox transformation)"
  },
  {
    id: "M3-016", topic: "capability", level: 2,
    q: "An I-MR chart of 60 days of data shows no out-of-control signals. Cp = 0.72 and Cpk = 0.70. An operator proposes re-adjusting the machine after every out-of-spec part. What should the Green Belt advise?",
    options: [
      { t: "Accept, since adjusting after each defect pulls the process back to target", why: "Wrong: adjusting a stable process for common-cause results is tampering; it adds variation instead of removing it." },
      { t: "Re-centre the mean, which will lift Cpk above the 1.33 minimum", why: "Wrong: centring can raise Cpk only up to Cp = 0.72; the spread itself is too wide for the tolerance." },
      { t: "Find the special cause behind each out-of-spec part and remove it", why: "Wrong: the chart shows no special causes; the out-of-spec parts are part of the stable process's common-cause spread." },
      { t: "Decline, and change the process itself to reduce its common-cause σ", why: "Correct: the process is stable but incapable (Cp 0.72); adjusting for common-cause results is tampering, and the lasting fix is a process change that reduces σ." }
    ],
    answer: 3, ref: "Lesson 3.6"
  }
]);
