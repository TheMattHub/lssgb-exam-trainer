// SAMPLE DATA for testing the app shell. Delete this file and its <script> tag in index.html
// once the real packs are written.
QB.add([
  {
    id: "SMP-001", topic: "ss-metrics", level: 3,
    q: "A process makes 500 units with 10 defect opportunities each and 25 defects are found. What is the DPMO?",
    options: [
      { t: "5,000", why: "Correct: DPMO = defects / (units × opportunities) × 10⁶ = 25 / 5,000 × 10⁶ = 5,000." },
      { t: "50,000", why: "Wrong: this is DPU × 10⁶ (25 / 500 = 0.05), which ignores the 10 opportunities per unit." },
      { t: "500", why: "Wrong: this divides by 50,000 opportunities, an extra factor of 10 in the denominator." },
      { t: "0.05", why: "Wrong: 0.05 is the DPU (defects per unit), not defects per million opportunities." }
    ],
    answer: 0, ref: "Sample"
  },
  {
    id: "SMP-002", topic: "lean-basics", level: 1,
    q: "Which of the following is an example of the waste of over-processing?",
    options: [
      { t: "Parts waiting in a queue before the next operation", why: "Wrong: that is the waste of waiting (or inventory), not over-processing." },
      { t: "Polishing an internal surface the customer never sees", why: "Correct: over-processing is doing more work than the customer values or requires." },
      { t: "Producing 200 units when only 150 were ordered", why: "Wrong: making more than demanded is over-production." },
      { t: "Walking to a distant cabinet to fetch a tool", why: "Wrong: unnecessary movement of people is the waste of motion." }
    ],
    answer: 1, ref: "Sample"
  },
  {
    id: "SMP-003", topic: "msa", level: 2,
    q: "A Gage R&R study gives %GRR = 35% of total variation. What should the team do next?",
    options: [
      { t: "Accept the gage, since anything under 50% is fine", why: "Wrong: under AIAG guidelines a %GRR above 30% is unacceptable, not fine." },
      { t: "Collect process data and correct for the gage later", why: "Wrong: with 35% measurement error the data mostly show gage noise, which cannot be removed afterwards." },
      { t: "Improve the measurement system before collecting data", why: "Correct: %GRR above 30% means the measurement system is unacceptable; fix it first." },
      { t: "Increase the sample size of the capability study", why: "Wrong: more samples do not reduce measurement error; they only measure the same noise more often." }
    ],
    answer: 2, ref: "Sample"
  },
  {
    id: "SMP-004", topic: "capability", level: 3,
    q: "A process has mean 52, standard deviation 2, LSL 46 and USL 58. What is Cpk?",
    options: [
      { t: "0.67", why: "Wrong: 0.67 would need the mean only 4 units (2σ) from the nearer limit; here it is 6 units away." },
      { t: "1.50", why: "Wrong: 1.50 would need the mean 9 units from the nearer limit." },
      { t: "1.33", why: "Wrong: 1.33 needs the mean 8 units (4σ) from the nearer limit; here it is 6 units away." },
      { t: "1.00", why: "Correct: Cpk = min(58 − 52, 52 − 46) / (3 × 2) = 6 / 6 = 1.00. The process is centred, so Cpk = Cp." }
    ],
    answer: 3, ref: "Sample"
  },
  {
    id: "SMP-005", topic: "hyp-concepts", level: 2,
    q: "A test returns a p-value of 0.03 with α = 0.05. What is the correct conclusion?",
    options: [
      { t: "Reject the null hypothesis", why: "Correct: the p-value is below α, so the result is statistically significant and H₀ is rejected." },
      { t: "Fail to reject the null hypothesis", why: "Wrong: you fail to reject H₀ only when the p-value is greater than or equal to α." },
      { t: "Accept the null hypothesis as proven true", why: "Wrong: a test never proves H₀; at most you fail to reject it, and here you reject it." },
      { t: "Increase α until the result is clear", why: "Wrong: α is fixed before the test; changing it after seeing the data is a statistical error." }
    ],
    answer: 0, ref: "Sample"
  },
  {
    id: "SMP-006", topic: "doe", level: 2,
    q: "How many runs does a full factorial design with 3 factors at 2 levels need, without replicates?",
    options: [
      { t: "6", why: "Wrong: 6 is 3 × 2; the run count is levels raised to the number of factors." },
      { t: "8", why: "Correct: a 2-level full factorial needs 2ᵏ runs; 2³ = 8." },
      { t: "9", why: "Wrong: 9 is 3², the count for 2 factors at 3 levels." },
      { t: "4", why: "Wrong: 4 runs is a 2³⁻¹ half fraction, not the full factorial." }
    ],
    answer: 1, ref: "Sample"
  },
  {
    id: "SMP-007", topic: "spc", level: 2,
    q: "Which control chart suits the number of defects per unit when the inspected unit size varies?",
    options: [
      { t: "c chart", why: "Wrong: the c chart counts defects with a constant area of opportunity." },
      { t: "p chart", why: "Wrong: the p chart tracks the proportion of defective units, not counts of defects." },
      { t: "u chart", why: "Correct: the u chart plots defects per unit and handles a varying sample size." },
      { t: "X̄-R chart", why: "Wrong: X̄-R charts are for continuous measurements, not defect counts." }
    ],
    answer: 2, ref: "Sample"
  },
  {
    id: "SMP-008", topic: "lean-control", level: 1,
    q: "What is the main purpose of a poka-yoke device?",
    options: [
      { t: "To shorten changeover time between products", why: "Wrong: shortening changeovers is the aim of SMED." },
      { t: "To signal when to replenish material", why: "Wrong: replenishment signals are the job of a kanban." },
      { t: "To sort and label tools at the workstation", why: "Wrong: sorting and labelling are steps of 5S." },
      { t: "To prevent or immediately detect a mistake", why: "Correct: poka-yoke (mistake-proofing) stops an error from happening or makes it visible at once." }
    ],
    answer: 3, ref: "Sample"
  }
]);
