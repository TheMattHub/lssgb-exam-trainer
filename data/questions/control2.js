// Pack "control2": second wave of questions for the Control topics (lean-control, spc, spc-rules, control-plan).
// Format: docs/CONTENT_GUIDE.md. Run rules follow docs/research/iassc-gb-bok.md §4:
// stems either signal under both Western Electric and Nelson/Minitab rules, or name the rule set.
// Constants are the standard AIAG values (course "Control Chart Constants").
QB.add([
  // ---------- lean-control ----------
  {
    id: "C2-001", topic: "lean-control", level: 2,
    q: "Monthly 5S audit scores in an assembly cell fell from 85% to 60% in the three months after the project team left. What is the best first response?",
    options: [
      { t: "Have the project team repeat the original 5S event in the cell", why: "Wrong: a second one-off blitz restores the area for a while, but nothing in the sustain system has changed, so the score will slide again." },
      { t: "Pause the audits until the cell has time to recover its score", why: "Wrong: the audit is the feedback loop of Sustain; stopping it removes the signal exactly when it is needed." },
      { t: "Find the failing audit items and restore owners, schedules and checks", why: "Correct: the audit shows where the standard slipped; Sustain needs named owners, cleaning and audit schedules and regular leader walk-throughs, owned by the cell." },
      { t: "Replace the monthly audit with a yearly external 5S certification", why: "Wrong: a yearly external check is too infrequent to catch slippage and takes ownership away from the people in the cell." }
    ],
    answer: 2, ref: "Lesson 6.3"
  },
  {
    id: "C2-002", topic: "lean-control", level: 1,
    q: "What is the main purpose of an andon light at a workstation?",
    options: [
      { t: "To make a problem visible at once and call for help", why: "Correct: an andon is a real-time visual (often audible) signal of status; it makes a problem visible immediately so support arrives and the line can be stopped if needed." },
      { t: "To log machine downtime for the monthly OEE report", why: "Wrong: downtime may be recorded from andon calls, but the andon's purpose is immediate reaction, not after-the-fact reporting." },
      { t: "To authorise the upstream process to replenish parts", why: "Wrong: that is a kanban, the pull signal that authorises production or replenishment." },
      { t: "To display the standard sequence of steps for the task", why: "Wrong: that is a standard work instruction or job aid posted at the station." }
    ],
    answer: 0, ref: "Lesson 6.3"
  },
  {
    id: "C2-003", topic: "lean-control", level: 3,
    q: "A supermarket of parts feeds a line that uses 50 parts per hour. Replenishment lead time is 4 hours, the safety factor is 25% and each container holds 30 parts. How many kanbans are needed?",
    options: [
      { t: "6", why: "Wrong: 50 × 4 ÷ 30 = 6.67 leaves out the safety factor and then rounds down as well." },
      { t: "7", why: "Wrong: 6.67 rounded up to 7 still leaves out the 25% safety factor." },
      { t: "8", why: "Wrong: 8.33 was rounded down; rounding down leaves too few containers to cover demand over the lead time." },
      { t: "9", why: "Correct: N = demand × lead time × (1 + safety) ÷ container size = 50 × 4 × 1.25 ÷ 30 = 8.33, rounded up to 9." }
    ],
    answer: 3, ref: "Web: kanbanbox.com (number of kanban cards)"
  },
  {
    id: "C2-004", topic: "lean-control", level: 2,
    q: "A missing retaining clip on a car door is costly to fix once the door is trimmed. The cell runs fast and operators sometimes ignore buzzers. Which poka-yoke design fits best?",
    options: [
      { t: "A buzzer and light that alert the operator when the clip is missing", why: "Wrong: this is a warning-type reaction; the stem says warnings get ignored, so the defect can still pass." },
      { t: "A sensor that stops the cycle until the clip is detected in place", why: "Correct: a control (shutdown) type reaction does not rely on the operator noticing a signal; the door cannot move on without the clip." },
      { t: "An end-of-line audit that checks one door in twenty for the clip", why: "Wrong: sampling inspection is not mistake-proofing; it finds defects late and misses most of them." },
      { t: "An extra line in the work instruction reminding operators to fit the clip", why: "Wrong: instructions and training are the weakest controls because they depend entirely on attention." }
    ],
    answer: 1, ref: "Web: en.wikipedia.org (Poka-yoke)"
  },
  {
    id: "C2-005", topic: "lean-control", level: 2,
    q: "A maintenance app will not let a technician sign off step 4 until steps 1 to 3 have been recorded as done, in that order. Which poka-yoke method is this?",
    options: [
      { t: "Contact method", why: "Wrong: a contact method senses a physical attribute of the part such as shape, size or position." },
      { t: "Fixed-value method", why: "Wrong: a fixed-value method checks that a set number of parts or movements is reached, not their order." },
      { t: "Warning method", why: "Wrong: warning versus control describes how the device reacts to an error, not how it senses it." },
      { t: "Motion-step method", why: "Correct: a motion-step (sequence) method checks that the steps are done in the required order." }
    ],
    answer: 3, ref: "Web: en.wikipedia.org (Poka-yoke)"
  },
  {
    id: "C2-006", topic: "lean-control", level: 2,
    q: "A SMED team lists the steps of a die change on a press. Which step should be converted from internal to external?",
    options: [
      { t: "Unbolting the old die from the press bed", why: "Wrong: the old die can only be removed with the press stopped, so this stays internal (it can be shortened, e.g. with quick clamps)." },
      { t: "Preheating the next die to operating temperature", why: "Correct: preheating can be done while the press is still running the current job, so moving it outside the stop shortens the changeover." },
      { t: "Aligning the new die on the press bed", why: "Wrong: alignment needs the die on the machine, so it is internal; SMED reduces it with locators and standard heights." },
      { t: "Adjusting the stroke during the first trial hits", why: "Wrong: trial-and-error adjustment is internal; SMED aims to eliminate it with fixed settings, not to move it outside." }
    ],
    answer: 1, ref: "Lesson 5.2"
  },
  {
    id: "C2-007", topic: "lean-control", level: 1,
    q: "In SMED, what makes a setup activity internal?",
    options: [
      { t: "It is done by in-house staff rather than by a contractor", why: "Wrong: internal and external refer to the machine's state, not to who does the work." },
      { t: "It can be done while the machine is still running the previous job", why: "Wrong: that is an external activity, which SMED tries to maximise." },
      { t: "It can be done only while the machine is stopped", why: "Correct: internal setup needs the machine stopped; SMED moves as much as possible to external and shortens what remains." },
      { t: "It takes place inside the cell rather than in the tool store", why: "Wrong: location does not decide it; a step done next to the machine can still be external if the machine keeps running." }
    ],
    answer: 2, ref: "Lesson 5.2"
  },
  {
    id: "C2-008", topic: "lean-control", level: 1,
    q: "Which three elements make up standard work in lean?",
    options: [
      { t: "Takt time, work sequence and standard work-in-process", why: "Correct: standard work fixes the pace (takt time), the order of steps and the minimum WIP needed to run the sequence smoothly." },
      { t: "Cycle time, changeover time and the economic batch size", why: "Wrong: these are performance and planning measures; changeover and batch size belong to SMED and scheduling, not to standard work." },
      { t: "Takt time, OEE target and the 5S audit score", why: "Wrong: OEE and 5S scores are performance indicators, not parts of the standard method." },
      { t: "Work sequence, inspection plan and control chart", why: "Wrong: the inspection plan and control chart belong to the control plan; only the work sequence is an element of standard work." }
    ],
    answer: 0, ref: "Lesson 6.3"
  },
  {
    id: "C2-009", topic: "lean-control", level: 2,
    q: "A capping machine has frequent stops of 10 to 30 seconds when a cap jams; the operator clears each one without calling maintenance. The plant follows the common OEE convention that stops shorter than 5 minutes are not logged as downtime. Which OEE factor do these losses reduce?",
    options: [
      { t: "Availability, because the machine is not running", why: "Wrong: availability counts logged downtime (breakdowns, setups and adjustments); stops below the plant's 5-minute threshold are minor stops, a performance loss." },
      { t: "Quality, because jammed caps may be scrapped", why: "Wrong: quality loss counts parts made that are not good; the stop time itself is not a quality loss." },
      { t: "Performance, as idling and minor stops", why: "Correct: in the six big losses, idling and minor stops (with reduced speed) are performance losses: the machine makes fewer parts in its run time than the ideal cycle allows." },
      { t: "None, because planned stops are excluded from OEE", why: "Wrong: jams are unplanned; only planned downtime such as scheduled breaks is excluded from planned production time." }
    ],
    answer: 2, ref: "Web: oee.com (six big losses)"
  },
  {
    id: "C2-010", topic: "lean-control", level: 3,
    q: "A packing line shows availability 95%, performance 70% and quality 99%. The plant manager proposes a SMED project to cut changeovers. What is the best assessment?",
    options: [
      { t: "Sound, because changeovers are usually the biggest OEE loss", why: "Wrong: changeovers (setup and adjustment) reduce availability, and here availability is already 95%; no loss is the largest on every line." },
      { t: "Weak, because performance (70%) is the main loss, not availability", why: "Correct: OEE = 0.95 × 0.70 × 0.99 = 65.8%; the 30-point gap in performance (minor stops, reduced speed) dwarfs the 5-point availability gap that SMED would address." },
      { t: "Sound, because SMED raises performance by shortening the cycle time", why: "Wrong: SMED shortens changeovers, which are availability losses; it does not change the ideal cycle time." },
      { t: "Weak, because quality is the factor to improve first", why: "Wrong: at 99% quality has little room left; no factor has priority by rule; the largest gap does." }
    ],
    answer: 1, ref: "Web: oee.com (six big losses)"
  },

  // ---------- spc ----------
  {
    id: "C2-011", topic: "spc", level: 2,
    q: "Coating thickness drifts slowly during a shift as the bath ages. The team will run an Xbar-R chart with subgroups of 5. Which sampling plan gives rational subgroups?",
    options: [
      { t: "Five parts taken at random times across the whole shift", why: "Wrong: spreading a subgroup over the shift puts the drift inside the subgroup, inflating R̄ and widening the limits so the drift is hidden." },
      { t: "Five consecutive parts taken once every hour", why: "Correct: consecutive parts share nearly the same conditions, so within-subgroup variation is common cause only and the drift shows between subgroups." },
      { t: "One part per hour, grouped into five-hour subgroups", why: "Wrong: this also mixes five hours of drift inside each subgroup and gives very few subgroups." },
      { t: "Five parts chosen from the thickest ones seen that hour", why: "Wrong: picking extreme parts is biased sampling; the chart would not describe the process." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "C2-012", topic: "spc", level: 3,
    q: "Each subgroup of an Xbar-R chart holds one part from each of three machines, and the machines run at clearly different means. For 25 subgroups the Xbar points all sit close to the centre line. What is the most likely explanation?",
    options: [
      { t: "The process is highly stable, so the limits could now be tightened", why: "Wrong: limits are calculated, not chosen; the narrow scatter here comes from the subgroup design, not from a better process." },
      { t: "Mixed streams inflate R̄, so the Xbar limits are too wide", why: "Correct: the between-machine difference sits inside every subgroup, which inflates R̄ and widens the Xbar limits (stratification); chart each machine separately." },
      { t: "Measurement resolution is too coarse to see the variation", why: "Wrong: poor resolution shows as few distinct values and an R chart with many zero ranges, not as wide R̄ from mixed machines." },
      { t: "Subgroups are too small, and n should be raised to 10", why: "Wrong: larger subgroups from the same three machines would keep the same mixing; the fix is to subgroup by machine." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "C2-013", topic: "spc", level: 2,
    q: "Every day exactly 50 units are tested, and the team wants to plot the number of units that fail. Which chart plots this directly?",
    options: [
      { t: "c chart", why: "Wrong: a c chart counts defects (flaws) in a constant area of opportunity, where one unit can have several; here each unit simply passes or fails." },
      { t: "p chart", why: "Wrong: a p chart plots the proportion defective (failures ÷ 50), not the count; it is needed when the sample size varies." },
      { t: "np chart", why: "Correct: with a constant sample size, the np chart plots the number of defective units directly." },
      { t: "u chart", why: "Wrong: a u chart plots defects per unit when the area of opportunity varies." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },
  {
    id: "C2-014", topic: "spc", level: 2,
    q: "Rolls of fabric of different lengths are inspected and every weaving flaw is counted; a roll can have many flaws. Which chart fits?",
    options: [
      { t: "c chart of flaws per roll", why: "Wrong: a c chart needs a constant area of opportunity; longer rolls would show more flaws for no process reason." },
      { t: "u chart of flaws per 100 m", why: "Correct: flaws are defects (Poisson counts), and the u chart divides by the size of each roll so rolls of different length can be compared." },
      { t: "p chart of rolls with flaws", why: "Wrong: turning counts into good/bad rolls throws away information; flaws are defects, not defectives." },
      { t: "np chart of flawed rolls", why: "Wrong: np counts defective units with a constant sample size; here the data are defect counts over varying length." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "C2-015", topic: "spc", level: 3,
    q: "An Xbar-S chart uses subgroups of n = 10. From 25 subgroups, X̿ = 25.00 and s̄ = 0.40. For n = 10, A3 = 0.975, B3 = 0.284, B4 = 1.716 and A2 = 0.308. What are the Xbar chart limits?",
    options: [
      { t: "24.31 to 25.69", why: "Wrong: this applies B4 (an S chart factor) to the mean: 25.00 ± 1.716 × 0.40." },
      { t: "24.88 to 25.12", why: "Wrong: A2 is meant for R̄; applying it to s̄ (25.00 ± 0.308 × 0.40) gives limits that are far too narrow." },
      { t: "23.80 to 26.20", why: "Wrong: 25.00 ± 3 × 0.40 treats s̄ as the σ of subgroup means; averages of 10 vary less, which A3 accounts for." },
      { t: "24.61 to 25.39", why: "Correct: X̿ ± A3s̄ = 25.00 ± 0.975 × 0.40 = 25.00 ± 0.39." }
    ],
    answer: 3, ref: "Control Chart Constants (AIAG table)"
  },
  {
    id: "C2-016", topic: "spc", level: 3,
    q: "For the same Xbar-S chart (n = 10, s̄ = 0.40, B3 = 0.284, B4 = 1.716), what are the S chart limits?",
    options: [
      { t: "LCL = 0.114, UCL = 0.686", why: "Correct: LCL = B3s̄ = 0.284 × 0.40 = 0.114; UCL = B4s̄ = 1.716 × 0.40 = 0.686." },
      { t: "LCL = 0, UCL = 0.686", why: "Wrong: the LCL is 0 only when B3 = 0 (n ≤ 5); for n = 10 B3 = 0.284, so the S chart has a positive lower limit." },
      { t: "LCL = 0.089, UCL = 0.711", why: "Wrong: these use the R chart constants for n = 10 (D3 = 0.223, D4 = 1.777) on s̄." },
      { t: "LCL = 0.010, UCL = 0.790", why: "Wrong: this is s̄ ± A3s̄; A3 is the Xbar chart factor, not an S chart factor." }
    ],
    answer: 0, ref: "Control Chart Constants (AIAG table)"
  },
  {
    id: "C2-017", topic: "spc", level: 3,
    q: "As a short illustration (real limits need 20 or more points), five individual readings are 12, 15, 11, 14 and 13. Using E2 = 2.66, what is the UCL of the individuals chart?",
    options: [
      { t: "18.85", why: "Wrong: the four moving ranges (sum 11) were divided by 5 readings instead of 4 ranges: 13 + 2.66 × 2.2." },
      { t: "21.25", why: "Wrong: 13 + 3 × 2.75 treats MR̄ as σ; MR̄ must first be divided by d2 = 1.128, which 2.66 = 3/1.128 already does." },
      { t: "20.32", why: "Correct: moving ranges are 3, 4, 3, 1, so MR̄ = 11/4 = 2.75; x̄ = 65/5 = 13.0; UCL = 13.0 + 2.66 × 2.75 = 20.315." },
      { t: "21.98", why: "Wrong: 3.267 is the D4 factor for the MR chart (UCL of the moving range), not the I chart factor: 13 + 3.267 × 2.75." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },
  {
    id: "C2-018", topic: "spc", level: 3,
    q: "An np chart uses a constant sample of n = 100 units with p̄ = 0.08. What are its control limits?",
    options: [
      { t: "LCL = 0, UCL = 16.49", why: "Wrong: 8 ± 3√8 is the c chart (Poisson) formula; defectives follow the binomial, so the variance is np̄(1 − p̄)." },
      { t: "LCL = 0, UCL = 0.161", why: "Wrong: this is the p chart in proportions (0.08 ± 3√(0.08 × 0.92/100)); an np chart plots counts." },
      { t: "LCL = 5.29, UCL = 10.71", why: "Wrong: this is np̄ ± 1σ = 8 ± 2.71; control limits are set at ±3σ." },
      { t: "LCL = 0, UCL = 16.14", why: "Correct: np̄ = 8; σ = √(8 × 0.92) = 2.713; UCL = 8 + 3 × 2.713 = 16.14; 8 − 8.14 is negative, so LCL = 0." }
    ],
    answer: 3, ref: "Lesson 6.1"
  },
  {
    id: "C2-019", topic: "spc", level: 2,
    q: "On a p chart of daily late shipments, the limits are wider on some days and narrower on others. Why?",
    options: [
      { t: "The limits are recalculated each day from that day's proportion", why: "Wrong: the centre line p̄ stays fixed; only n changes from day to day." },
      { t: "More shipments give narrower limits, since σp = √(p̄(1 − p̄)/n)", why: "Correct: the standard error of a proportion shrinks as n grows, so each day's limits depend on that day's sample size." },
      { t: "The chart widens its limits on days with more special causes", why: "Wrong: limits never react to special causes; a special cause shows as a point outside or a pattern." },
      { t: "Days with more shipments give wider limits, since more can go wrong", why: "Wrong: the count of late shipments may rise with n, but the proportion is more precise, so limits get narrower, not wider." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "C2-020", topic: "spc", level: 2,
    q: "What distinguishes Phase I from Phase II in control charting?",
    options: [
      { t: "Phase I sets the limits from the specification; Phase II replaces them with process limits", why: "Wrong: control limits always come from process data, never from the specification, in either phase." },
      { t: "Phase I charts the Xs during Analyze; Phase II charts the Y during Control", why: "Wrong: the phases describe how limits are set and used, not which variable is charted or which DMAIC phase it is." },
      { t: "Phase I uses individuals data; Phase II switches to subgroups once volume grows", why: "Wrong: chart type depends on the data and subgroup size; both phases can use any chart type." },
      { t: "Phase I cleans past data and fixes limits; Phase II monitors new data", why: "Correct: Phase I is retrospective (find and remove special causes, recompute until stable); Phase II uses those fixed limits to monitor ongoing production." }
    ],
    answer: 3, ref: "Web: bookdown.org (Lawson, Acceptance Sampling and SPC with R)"
  },
  {
    id: "C2-021", topic: "spc", level: 2,
    q: "A stable process with normal data is charted with 3σ limits and only the \"one point beyond the limits\" test. About how often will a point fall outside the limits by chance alone?",
    options: [
      { t: "About 1 point in 22", why: "Wrong: about 4.55% of points (1 in 22) fall outside ±2σ; that would be the false-alarm rate of 2σ limits." },
      { t: "About 1 point in 370", why: "Correct: P(|Z| > 3) = 0.0027, so the in-control average run length is 1/0.0027 ≈ 370 points between false alarms." },
      { t: "About 1 point in 741", why: "Wrong: 0.00135 is the probability beyond one limit only; with both limits the chance doubles to 0.0027." },
      { t: "About 1 point in 294,000", why: "Wrong: this mixes in the 3.4 DPMO of the 6σ scale; 3σ control limits have a much higher false-alarm rate." }
    ],
    answer: 1, ref: "Web: itl.nist.gov (e-Handbook 6.3.2)"
  },
  {
    id: "C2-022", topic: "spc", level: 1,
    q: "What does a CUSUM chart plot?",
    options: [
      { t: "The running total of each subgroup mean's deviation from target", why: "Correct: a CUSUM accumulates deviations from the target, so a small sustained shift builds up into a clear slope; a V-mask or decision interval h flags it." },
      { t: "A weighted average that gives most weight to the newest subgroup", why: "Wrong: that is the EWMA chart, where each point blends the newest mean (weight λ) with the previous EWMA." },
      { t: "The absolute difference between each reading and the one before", why: "Wrong: that is the moving range plotted on the MR chart of an I-MR pair." },
      { t: "The count of points beyond 1σ in the most recent five subgroups", why: "Wrong: that describes a zone run rule applied to a Shewhart chart, not a separate chart." }
    ],
    answer: 0, ref: "Web: itl.nist.gov (e-Handbook 6.3.2.3)"
  },
  {
    id: "C2-023", topic: "spc", level: 2,
    q: "On an EWMA chart, what happens as the weighting factor λ is raised towards 1?",
    options: [
      { t: "The chart gives equal weight to all past subgroups, like a CUSUM", why: "Wrong: a small λ spreads weight over many past points; λ near 1 does the opposite and keeps almost no memory." },
      { t: "The chart becomes more sensitive to small sustained shifts", why: "Wrong: small shifts are caught best with a small λ (often 0.2–0.3), which averages over many subgroups." },
      { t: "The chart behaves more and more like a Shewhart chart", why: "Correct: with λ = 1 each point is just the latest observation, so the EWMA reduces to a Shewhart chart." },
      { t: "The control limits widen until no point can fall outside", why: "Wrong: the limits do widen with λ (σ_EWMA² = λ/(2 − λ) × σ²), but only up to ±3σ, the Shewhart limits at λ = 1." }
    ],
    answer: 2, ref: "Web: itl.nist.gov (e-Handbook 6.3.2.4)"
  },
  {
    id: "C2-024", topic: "spc", level: 1,
    q: "How much data is usually recommended before calculating initial control limits?",
    options: [
      { t: "5 subgroups, enough to estimate the centre line", why: "Wrong: 5 subgroups give unreliable estimates of both the centre line and the spread, so limits would be misleading." },
      { t: "One week of data, whatever the production volume", why: "Wrong: what matters is the number of subgroups and values, not calendar time." },
      { t: "20 to 25 subgroups, about 100 individual values", why: "Correct: 20–25 subgroups (about 100 values) of stable data give reasonably reliable limits; this is the AIAG SPC manual guidance." },
      { t: "30 subgroups taken after the specification is agreed", why: "Wrong: the specification plays no part in control limits; the issue is enough data from a stable process." }
    ],
    answer: 2, ref: "Web: AIAG SPC manual (25 subgroups, about 100 readings)"
  },

  // ---------- spc-rules ----------
  {
    id: "C2-025", topic: "spc-rules", level: 2,
    q: "A team adds the Western Electric zone rules to a chart that used only the 3σ test. What is the trade-off?",
    options: [
      { t: "Small shifts are caught sooner, but false alarms rise", why: "Correct: extra rules make the chart more sensitive to small shifts, but each adds false-alarm risk; NIST quotes an in-control ARL falling from about 371 to about 92 points." },
      { t: "False alarms fall, but large shifts are caught later", why: "Wrong: adding rules never lowers false alarms, and the 3σ test still catches large shifts at once." },
      { t: "Detection improves, and the false-alarm rate is unchanged", why: "Wrong: every added rule can fire by chance on a stable process, so the false-alarm rate goes up." },
      { t: "The control limits move closer to the centre line", why: "Wrong: the zone rules leave the 3σ limits where they are; they add pattern tests inside them." }
    ],
    answer: 0, ref: "Web: itl.nist.gov (e-Handbook 6.3.2)"
  },
  {
    id: "C2-026", topic: "spc-rules", level: 2,
    q: "On a p chart of defective units, one week's point falls below the LCL (far fewer defectives than usual). What should the team do?",
    options: [
      { t: "Ignore it, because fewer defectives is good news", why: "Wrong: a point beyond either limit is a special cause; ignoring it may miss a lesson or a broken inspection." },
      { t: "Investigate it as a special cause, including the inspection itself", why: "Correct: below the LCL is a signal; it may be a real improvement worth keeping or a measurement problem such as a missed inspection or a new inspector." },
      { t: "Recalculate the limits at once to include the new low level", why: "Wrong: limits are revised only after a confirmed, sustained and explained change, not after one point." },
      { t: "Set the LCL to zero so low points no longer signal", why: "Wrong: the LCL is set to zero only when the formula gives a negative value; changing it to hide signals defeats the chart." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "C2-027", topic: "spc-rules", level: 3,
    q: "Using the Minitab (Nelson) tests, an I chart shows 8 points in a row beyond 1σ on both sides of the centre line, with none in zone C. Two operators alternate batches. What does this suggest?",
    options: [
      { t: "Stratification: the limits were computed from mixed streams", why: "Wrong: stratification (Test 7) is 15 points in a row hugging the centre line within 1σ; here the points avoid the centre." },
      { t: "Over-adjustment, shown by points swinging between the zones", why: "Wrong: tampering usually shows as points alternating up and down (Test 4, 14 in a row), not as a gap around the centre line." },
      { t: "A mixture: the points come from two levels with different means", why: "Correct: Test 8 (8 in a row beyond 1σ either side) flags a mixture of two distributions, which fits two operators running at different levels; chart them separately." },
      { t: "A gradual drift in the mean from wear in the equipment", why: "Wrong: a drift shows as a trend (Test 3, 6 rising or falling points), not as points split on both sides." }
    ],
    answer: 2, ref: "Web: support.minitab.com (tests for special causes)"
  },
  {
    id: "C2-028", topic: "spc-rules", level: 2,
    q: "A chart shows exactly 8 consecutive points above the centre line; none is beyond the control limits. Which statement is correct?",
    options: [
      { t: "It signals under Western Electric and Nelson alike, as each uses 7 in a row", why: "Wrong: 7 in a row is the AIAG SPC manual rule; Western Electric uses 8 and Nelson/Minitab uses 9, so 8 points do not signal under both." },
      { t: "It is a signal under neither rule set, as no point is beyond 3σ", why: "Wrong: run rules can signal without any point beyond the limits; Western Electric flags this run." },
      { t: "It is a signal under Nelson/Minitab Test 2 but not under Western Electric", why: "Wrong: the thresholds are the other way round: Nelson/Minitab Test 2 needs 9 in a row, Western Electric 8." },
      { t: "It is a signal under Western Electric but not yet under Nelson/Minitab", why: "Correct: Western Electric flags 8 in a row on one side; Minitab Test 2 needs 9, so one more point above the line would make it a signal under both." }
    ],
    answer: 3, ref: "Web: support.minitab.com (tests for special causes)"
  },
  {
    id: "C2-029", topic: "spc-rules", level: 3,
    q: "A stable process has σ = 2.0 mm. After each part, the operator moves the setting from where it is by the last part's error, in the opposite direction (Deming's funnel rule 2). What is the long-run σ?",
    options: [
      { t: "About 2.0 mm, as adjustments average out", why: "Wrong: each adjustment adds the last part's random error back into the setting, so variation grows; it does not average out." },
      { t: "About 1.0 mm, as each correction halves the error", why: "Wrong: correcting for pure noise cannot reduce variation; the next error is independent of the last." },
      { t: "About 4.0 mm, as the spread doubles", why: "Wrong: rule 2 doubles the variance, not σ; σ grows by √2, not by 2." },
      { t: "About 2.8 mm, as the variance doubles", why: "Correct: funnel rule 2 doubles the variance: σ = 2.0 × √2 = 2.83 mm, a 41% rise caused by tampering." }
    ],
    answer: 3, ref: "Web: support.minitab.com (Deming funnel experiment macro)"
  },
  {
    id: "C2-030", topic: "spc-rules", level: 2,
    q: "From subgroup 31 on, a new supplier lot raised the process mean by about 1σ and kept it there. Which pattern is most likely on the Xbar chart?",
    options: [
      { t: "A long run of points above the centre line from subgroup 31", why: "Correct: a sustained step change shows as a run on one side of the centre line; a 1σ shift may produce few or no points beyond 3σ." },
      { t: "Six or more points in a row rising steadily from subgroup 31", why: "Wrong: a trend shows a gradual drift such as tool wear; a step change moves the level once and then stays." },
      { t: "Points alternating up and down around the centre line", why: "Wrong: alternation suggests over-adjustment or two streams sampled in turn, not a one-time shift." },
      { t: "One point beyond the UCL at subgroup 31, then a return", why: "Wrong: a single point outside describes a one-off event; the stem says the higher mean persisted." }
    ],
    answer: 0, ref: "Lesson 6.1"
  },
  {
    id: "C2-031", topic: "spc-rules", level: 2,
    q: "A chart has been in control for months with no rule violations. A manager asks the team to find the cause of last Tuesday's value, the highest of the month. What is the best reply?",
    options: [
      { t: "Investigate it as a special cause, since it was the month's highest", why: "Wrong: every month has a highest point; within the limits and with no pattern, it is common-cause variation." },
      { t: "Adjust the process down by the amount Tuesday was above the mean", why: "Wrong: adjusting for common-cause noise is tampering and increases variation." },
      { t: "Explain it is common-cause variation; reducing it needs a system change", why: "Correct: with no signal there is no assignable cause to find; lowering the spread requires changing the process itself, usually a management decision." },
      { t: "Narrow the limits to 2σ so that such values will signal next time", why: "Wrong: 2σ limits would raise false alarms to about 1 in 22 points and still not reveal a cause." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },
  {
    id: "C2-032", topic: "spc-rules", level: 1,
    q: "Which of these is most likely a special (assignable) cause of variation?",
    options: [
      { t: "Small differences in room temperature over a normal day", why: "Wrong: small, ever-present fluctuations are part of the system, so they are common cause." },
      { t: "A wrong grade of resin loaded for one shift", why: "Correct: a specific, identifiable event that is not part of the process as designed is a special cause; it can be found and removed locally." },
      { t: "Random scatter between filling heads within their usual range", why: "Wrong: routine scatter within the normal range is common-cause variation." },
      { t: "Normal variation in raw material properties within the specification", why: "Wrong: routine material variation that the process always sees is common cause." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },

  // ---------- control-plan ----------
  {
    id: "C2-033", topic: "control-plan", level: 1,
    q: "A control plan row reads \"5 parts every 2 hours\" for bore diameter. Which column holds this entry?",
    options: [
      { t: "Control method", why: "Wrong: the control method column names how the characteristic is controlled, e.g. an Xbar-R chart or a poka-yoke." },
      { t: "Reaction plan", why: "Wrong: the reaction plan says what to do when the control signals a problem." },
      { t: "Sample size and frequency", why: "Correct: it states how many units are checked and how often." },
      { t: "Measurement technique", why: "Wrong: this column names the gage or method used, e.g. a bore gauge validated by MSA." }
    ],
    answer: 2, ref: "Lesson 6.2"
  },
  {
    id: "C2-034", topic: "control-plan", level: 2,
    q: "How should a process owner set how often each line of the control plan is audited on the floor?",
    options: [
      { t: "By risk: more often for severe or changed items, less once proven stable", why: "Correct: audit effort should follow risk (FMEA severity, recent changes, past findings) and can be relaxed once the controls are proven to work; AIAG CQI-8 leaves frequency to the organisation, set by risk." },
      { t: "Once, at project closure, since later audits belong to the quality department", why: "Wrong: a one-time check cannot show that controls are still followed; the owner keeps auditing after handoff." },
      { t: "At the same fixed interval for every line, so the audit stays simple to schedule", why: "Wrong: a flat interval spends effort on low-risk items and too little on critical ones." },
      { t: "Only after a customer complaint, so audit time is spent where problems exist", why: "Wrong: this is reactive; the audit should find drift before it reaches the customer." }
    ],
    answer: 0, ref: "Lesson 6.2; Web: AIAG CQI-8 (layered process audits)"
  },
  {
    id: "C2-035", topic: "control-plan", level: 3,
    q: "A new setup method went live a week ago and the KPOV chart has 6 points, all better than before. The Green Belt wants to close the project now. What is the best advice?",
    options: [
      { t: "Close now, as six good points already prove the gain", why: "Wrong: six points cannot show the new level is stable; early results can reflect extra attention after go-live (a Hawthorne effect)." },
      { t: "Close now and let the process owner collect the data later", why: "Wrong: handing over an unproven change shifts the risk to the owner and leaves the savings unverified." },
      { t: "Keep monitoring until enough points (commonly 20–25) show a stable gain", why: "Correct: closure needs evidence that the gain holds: enough post-change data to set new limits and confirm stability, plus finance validation of savings." },
      { t: "Restart the Measure phase to set a new baseline first", why: "Wrong: the baseline already exists; the task is to confirm the new level, which is Control work, not a restart." }
    ],
    answer: 2, ref: "Lesson 6.4"
  },
  {
    id: "C2-036", topic: "control-plan", level: 1,
    q: "Before a project is closed, who should confirm the financial benefits it claims?",
    options: [
      { t: "The Green Belt who led the project", why: "Wrong: the project lead has an interest in the result; self-certified savings are not credible." },
      { t: "The plant's finance controller", why: "Correct: finance validates savings with the organisation's accounting rules, separating hard from soft savings." },
      { t: "The main customer of the process", why: "Wrong: customers judge quality and delivery, not the organisation's internal savings." },
      { t: "The team members who ran the pilot", why: "Wrong: team members share the project lead's stake in the result; validation needs an independent financial check." }
    ],
    answer: 1, ref: "Lesson 2.5"
  },
  {
    id: "C2-037", topic: "control-plan", level: 3,
    q: "A project cut scrap from 4% to 1.5% on 200,000 units a year, each with €12 of material. It also freed 0.3 FTE of time (worth €45,000 per FTE), but no one left the payroll. What annual hard savings should finance confirm?",
    options: [
      { t: "€36,000", why: "Wrong: 1.5% × 200,000 × €12 is the remaining scrap cost after the project, not the saving." },
      { t: "€60,000", why: "Correct: (4% − 1.5%) × 200,000 × €12 = 0.025 × 2,400,000 = €60,000; the freed time is a soft saving because no cost left the books." },
      { t: "€73,500", why: "Wrong: this adds 0.3 × €45,000 = €13,500 of freed time; capacity freed without a payroll reduction is a soft saving." },
      { t: "€96,000", why: "Wrong: 4% × 200,000 × €12 is the original scrap cost; the project did not eliminate all scrap." }
    ],
    answer: 1, ref: "Lesson 2.5"
  },
  {
    id: "C2-038", topic: "control-plan", level: 2,
    q: "An improved setup method works on line 1. Lines 2 and 3 run a similar process for other products. What is the best way to replicate the gain?",
    options: [
      { t: "Copy the line 1 control plan to lines 2 and 3 without change", why: "Wrong: the lines differ in products and conditions; an unchecked copy may miss their own critical Xs." },
      { t: "Wait for lines 2 and 3 to find the method by themselves", why: "Wrong: this wastes a proven solution; replication is an explicit closure step." },
      { t: "Pilot it on line 2 with its owner, verify, then roll out", why: "Correct: replication adapts the proven solution with the receiving owner, confirms it works there with data, then extends it with updated documents." },
      { t: "Keep the Green Belt running all three lines until results match", why: "Wrong: the process owners must own the change; the Green Belt cannot stay as the control." }
    ],
    answer: 2, ref: "BoK 5.3 (Six Sigma control plans)"
  },
  {
    id: "C2-039", topic: "control-plan", level: 2,
    q: "Two months after handoff, new operators are joining the cell. What best keeps the improved method in use as staff change?",
    options: [
      { t: "Ask experienced operators to show each newcomer how they do the job", why: "Wrong: informal shadowing passes on personal habits, including drift from the standard." },
      { t: "Build the new instruction into induction training, with sign-off", why: "Correct: the new method must be part of the standard training system, with competence checked, so it survives staff turnover." },
      { t: "Post the project storyboard at the cell entrance", why: "Wrong: a storyboard tells the project's story; it does not teach the method or check competence." },
      { t: "Have the Green Belt brief every new operator personally on the method", why: "Wrong: this depends on one person who has moved on; training must belong to the process owner's system." }
    ],
    answer: 1, ref: "Lesson 6.2"
  },
  {
    id: "C2-040", topic: "control-plan", level: 3,
    q: "Two controls would hold a gain equally well. An SPC chart costs €4,000 to set up and €6,000 a year to run; an automatic sensor costs €20,000 to install and €1,000 a year. After how many years does the sensor become the cheaper option?",
    options: [
      { t: "2.67 years", why: "Wrong: (20,000 − 4,000) ÷ 6,000 leaves out the sensor's own €1,000 running cost." },
      { t: "3.33 years", why: "Wrong: 20,000 ÷ 6,000 ignores both the SPC setup cost and the sensor's running cost." },
      { t: "4.00 years", why: "Wrong: 20,000 ÷ 5,000 leaves out the €4,000 SPC setup cost." },
      { t: "3.20 years", why: "Correct: break-even when 4,000 + 6,000t = 20,000 + 1,000t, so t = 16,000 ÷ 5,000 = 3.2 years; after that the sensor is cheaper." }
    ],
    answer: 3, ref: "Lesson 6.2"
  },
  {
    id: "C2-041", topic: "control-plan", level: 2,
    q: "Why does a control plan put most of its controls on the key inputs (Xs) rather than only on the output (Y)?",
    options: [
      { t: "Holding the Xs prevents defects; watching Y alone finds them late", why: "Correct: Y = f(X); holding the critical Xs in place keeps Y on target, while the Y is still monitored to confirm the gain." },
      { t: "Xs are easier to measure, so their charts need fewer samples", why: "Wrong: ease of measurement varies; the reason is prevention, not sample size." },
      { t: "Customer specifications apply to the Xs rather than to the Y", why: "Wrong: customer specifications normally apply to the output (CTQ/Y); the Xs get process settings." },
      { t: "Output monitoring stops once the project is formally closed", why: "Wrong: the KPOV is still monitored after closure to confirm the gain holds." }
    ],
    answer: 0, ref: "Lesson 6.2"
  },
  {
    id: "C2-042", topic: "control-plan", level: 2,
    q: "Six months after closure, the customer tightens the specification on the KPOV. What should happen to the control plan?",
    options: [
      { t: "Nothing, because the plan was frozen when the project closed", why: "Wrong: a control plan is a living document and must change when specs, risks or the process change." },
      { t: "Recalculate the control limits from the new specification", why: "Wrong: control limits come from process data, never from the specification." },
      { t: "Reopen the original project from Define with the old team", why: "Wrong: a new project may be needed if capability falls short, but the first step is the owner's update and capability check." },
      { t: "The owner updates it and rechecks capability against the new spec", why: "Correct: the process owner revises the spec column and reaction triggers and checks Cpk against the new limits; a shortfall may start a new project." }
    ],
    answer: 3, ref: "Lesson 6.2"
  }
]);
