// Pack "control": questions for the topics whose pack is "control" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. Run rules follow docs/research/iassc-gb-bok.md §4:
// stems either signal under both Western Electric and Nelson/Minitab rules, or name the rule set.
QB.add([
  // ---------- lean-control ----------
  {
    id: "CT-001", topic: "lean-control", level: 1,
    q: "Screws for one assembly are dispensed into a tray with exactly six pockets; the operator cannot release the unit while any pocket is still full. Which poka-yoke method is this?",
    options: [
      { t: "Contact method", why: "Wrong: a contact method checks a physical attribute (shape, size, position) of the part, for example a guide pin that rejects a wrongly shaped part." },
      { t: "Motion-step method", why: "Wrong: a motion-step (sequence) method checks that steps are done in the right order, not that a fixed count is reached." },
      { t: "Fixed-value method", why: "Correct: a fixed-value (constant number) method verifies that a set number of parts or movements has been completed, here six screws." },
      { t: "Warning method", why: "Wrong: warning versus control (shutdown) describes how a poka-yoke reacts, not how it senses the error; a warning only alerts the operator." }
    ],
    answer: 2, ref: "Web: en.wikipedia.org (Poka-yoke)"
  },
  {
    id: "CT-002", topic: "lean-control", level: 2,
    q: "Which of these is a prevention-type poka-yoke rather than a detection-type one?",
    options: [
      { t: "A buzzer that sounds when a box leaves the line underweight", why: "Wrong: this is detection; the error has already happened and is caught immediately afterwards." },
      { t: "A connector shaped so it can only be plugged in one way", why: "Correct: the asymmetric shape makes the wrong assembly physically impossible, so the error cannot occur. Prevention is stronger than detection." },
      { t: "A final inspector checking every connector by eye", why: "Wrong: human inspection is not mistake-proofing at all; it is detection with typically far below 100% effectiveness." },
      { t: "A camera that stops the conveyor after a missing label", why: "Wrong: stopping the line is a control-type reaction, but the label is already missing, so the device detects rather than prevents." }
    ],
    answer: 1, ref: "Web: en.wikipedia.org (Poka-yoke)"
  },
  {
    id: "CT-003", topic: "lean-control", level: 2,
    q: "A team ranks possible controls for a new failure mode. Which control gives the strongest, least operator-dependent protection?",
    options: [
      { t: "Retraining operators and updating the work instruction", why: "Wrong: training and instructions are the weakest controls; they rely on memory and attention." },
      { t: "Adding an SPC chart on the key output", why: "Wrong: SPC detects that the process has changed; it still needs people to react and does not stop the cause." },
      { t: "Adding a 100% final inspection step", why: "Wrong: inspection finds defects after they are made, adds cost and is rarely 100% effective." },
      { t: "Changing the design so the failure mode cannot occur", why: "Correct: eliminating the cause by design sits at the top of the control hierarchy, above mistake-proofing, SPC, inspection and training." }
    ],
    answer: 3, ref: "Lesson 6.2"
  },
  {
    id: "CT-004", topic: "lean-control", level: 1,
    q: "What is the role of a kanban in a pull system?",
    options: [
      { t: "A downstream signal that authorises making or moving parts", why: "Correct: a kanban is a visual pull signal; with no kanban nothing is made, which caps work in progress." },
      { t: "A forecast-based schedule released to every work centre", why: "Wrong: forecast schedules pushed to each station describe a push (MRP) system, the opposite of pull." },
      { t: "A board that displays daily KPIs for the team", why: "Wrong: that is a visual management board; it informs but does not authorise production." },
      { t: "A method for cutting changeover time on a machine", why: "Wrong: cutting changeover time is SMED, not kanban." }
    ],
    answer: 0, ref: "Lesson 6.3"
  },
  {
    id: "CT-005", topic: "lean-control", level: 3,
    q: "Daily demand is 400 parts, replenishment lead time is 0.5 day, the safety factor is 20% and each container holds 25 parts. How many kanbans are needed?",
    options: [
      { t: "8", why: "Wrong: 400 × 0.5 ÷ 25 = 8 leaves out the 20% safety factor." },
      { t: "9", why: "Wrong: 9.6 was rounded down; rounding down leaves too few containers to cover demand during the lead time." },
      { t: "10", why: "Correct: N = demand × lead time × (1 + safety) ÷ container size = 400 × 0.5 × 1.2 ÷ 25 = 9.6, rounded up to 10." },
      { t: "20", why: "Wrong: 400 × 1.2 ÷ 25 = 19.2, rounded to 20, treats the lead time as a full day instead of 0.5 day, doubling the count." }
    ],
    answer: 2, ref: "Web: kanbanbox.com (number of kanban cards)"
  },
  {
    id: "CT-006", topic: "lean-control", level: 1,
    q: "How is overall equipment effectiveness (OEE) calculated?",
    options: [
      { t: "Availability + Performance + Quality, divided by 3", why: "Wrong: OEE multiplies the three factors; an average hides how losses compound." },
      { t: "Availability × Performance × Quality", why: "Correct: OEE is the product of the three loss factors, as used in TPM." },
      { t: "Uptime ÷ (Uptime + Downtime)", why: "Wrong: that is availability alone; it ignores speed losses and defects." },
      { t: "Good units ÷ Total units produced", why: "Wrong: that is the quality rate (first-pass yield) alone." }
    ],
    answer: 1, ref: "Lesson 6.3"
  },
  {
    id: "CT-007", topic: "lean-control", level: 3,
    q: "A machine runs at 90% availability, 95% performance and 98% quality. What is its OEE?",
    options: [
      { t: "94.3%", why: "Wrong: this is the average of the three factors; OEE multiplies them." },
      { t: "85.5%", why: "Wrong: 0.90 × 0.95 = 85.5% leaves out the quality factor." },
      { t: "88.2%", why: "Wrong: 0.90 × 0.98 = 88.2% leaves out the performance factor." },
      { t: "83.8%", why: "Correct: OEE = 0.90 × 0.95 × 0.98 = 0.838, about 83.8%." }
    ],
    answer: 3, ref: "Lesson 6.3"
  },
  {
    id: "CT-008", topic: "lean-control", level: 3,
    q: "A shift has 480 min of planned production time with 60 min of unplanned stops. The ideal cycle time is 1.0 min per part. The machine made 378 parts, 360 of them good. What is the OEE?",
    options: [
      { t: "75.0%", why: "Correct: availability 420/480 = 87.5%, performance 378 × 1.0/420 = 90%, quality 360/378 = 95.2%; 0.875 × 0.90 × 0.952 = 75.0% (check: 360 good × 1.0 min ÷ 480 min)." },
      { t: "78.8%", why: "Wrong: 0.875 × 0.90 = 78.8% leaves out the quality loss of 18 bad parts." },
      { t: "85.7%", why: "Wrong: 0.90 × 0.952 = 85.7% leaves out the 60 min of stops (availability)." },
      { t: "90.0%", why: "Wrong: 90% is the performance factor only." }
    ],
    answer: 0, ref: "Lesson 6.3"
  },
  {
    id: "CT-009", topic: "lean-control", level: 1,
    q: "Which practice is a control method for the fifth S (Self-discipline / Sustain)?",
    options: [
      { t: "Red-tagging items that are not needed in the area", why: "Wrong: red-tagging belongs to Sort, the first S." },
      { t: "Outlining each tool's place on a shadow board", why: "Wrong: shadow boards belong to Set in order (Straighten)." },
      { t: "Scheduled 5S audits with scores posted and tracked", why: "Correct: regular scored audits and management walk-throughs keep the standard alive, which is the aim of Sustain." },
      { t: "Wiping down machines at the end of each shift", why: "Wrong: routine cleaning is Shine, the third S." }
    ],
    answer: 2, ref: "Lesson 6.3"
  },
  {
    id: "CT-010", topic: "lean-control", level: 2,
    q: "Why does a Green Belt document standard work at the end of a project?",
    options: [
      { t: "To fix the method permanently so it is never changed again", why: "Wrong: standard work is the current best method and the baseline for the next improvement, not a frozen rule." },
      { t: "To make everyone use the improved method the same way", why: "Correct: standard work (sequence, takt time, standard WIP) removes person-to-person variation and makes deviations visible." },
      { t: "To replace on-the-job training of new operators", why: "Wrong: standard work is the content that training teaches; it does not replace the training." },
      { t: "To set the specification limits for the process output", why: "Wrong: specification limits come from the customer, not from the work method." }
    ],
    answer: 1, ref: "Lesson 6.3"
  },
  {
    id: "CT-011", topic: "lean-control", level: 2,
    q: "In a visual factory, WIP lanes are painted on the floor with a maximum of three pallets. What is the main control purpose of this marking?",
    options: [
      { t: "It makes an overfull lane obvious so people react", why: "Correct: visual controls show normal versus abnormal instantly; a full lane also signals upstream to stop, capping WIP." },
      { t: "It records each pallet's arrival time for later analysis", why: "Wrong: floor marking records nothing; data collection would need a log or system." },
      { t: "It replaces the need for a control plan on that step", why: "Wrong: visual controls are listed in the control plan as one control method; they do not replace it." },
      { t: "It measures cycle time so takt time can be set", why: "Wrong: takt time comes from available time ÷ customer demand, not from floor markings." }
    ],
    answer: 0, ref: "Lesson 6.3"
  },
  {
    id: "CT-012", topic: "lean-control", level: 2,
    q: "In TPM, operators take over daily cleaning, inspection and lubrication of their own machines. Which TPM pillar is this?",
    options: [
      { t: "Planned maintenance", why: "Wrong: planned maintenance is scheduled work by the maintenance team based on failure and wear data." },
      { t: "Focused improvement", why: "Wrong: focused improvement (kobetsu kaizen) is team-based work on specific chronic losses." },
      { t: "Quality maintenance", why: "Wrong: quality maintenance sets equipment conditions that prevent defects." },
      { t: "Autonomous maintenance", why: "Correct: autonomous maintenance (jishu hozen) gives operators basic care of their equipment, catching deterioration early." }
    ],
    answer: 3, ref: "Lesson 6.3"
  },
  {
    id: "CT-013", topic: "lean-control", level: 2,
    q: "A SMED project cut a changeover from 90 to 20 minutes. Which measure best sustains the gain?",
    options: [
      { t: "Increase batch sizes so changeovers happen less often", why: "Wrong: larger batches add inventory and undo the reason for shorter changeovers." },
      { t: "Hold a one-time training session for all operators on the new method", why: "Wrong: one-off training fades; without a standard and follow-up the old method returns." },
      { t: "A standard changeover sheet, with changeover time charted", why: "Correct: standardising the external steps and monitoring the time makes any slide back visible and holds the 20 minutes." },
      { t: "Buy a faster machine for the bottleneck", why: "Wrong: buying equipment is a different improvement; it does not hold the changeover gain." }
    ],
    answer: 2, ref: "Lesson 5.2"
  },

  // ---------- spc ----------
  {
    id: "CT-014", topic: "spc", level: 1,
    q: "What is the main purpose of statistical process control?",
    options: [
      { t: "To sort conforming from nonconforming product", why: "Wrong: sorting product against specifications is inspection, not SPC." },
      { t: "To compute Cp and Cpk for the customer", why: "Wrong: capability compares the process with specifications; SPC asks whether the process is stable." },
      { t: "To find the root causes of chronic defects", why: "Wrong: root-cause tools belong to Analyze; SPC flags when to look, not why." },
      { t: "To tell special-cause from common-cause variation over time", why: "Correct: SPC monitors the process so that a special cause is detected early, before many defects are made." }
    ],
    answer: 3, ref: "Lesson 6.1"
  },
  {
    id: "CT-015", topic: "spc", level: 2,
    q: "A bottle filler has four heads. The team will run an Xbar-R chart on fill volume, sampling once an hour. Which plan gives rational subgroups?",
    options: [
      { t: "Five consecutive bottles from the same head each hour", why: "Correct: consecutive units from one stream contain only short-term common-cause variation, so shifts between hours show up on the Xbar chart." },
      { t: "One bottle from each of the four heads each hour", why: "Wrong: mixing heads puts head-to-head differences inside the subgroup, inflating R̄ and widening the limits." },
      { t: "Five bottles taken at random over the shift and pooled at shift end", why: "Wrong: spreading the subgroup over hours puts time-to-time shifts inside the subgroup, so the chart cannot see them." },
      { t: "The first five bottles after each product changeover", why: "Wrong: start-up bottles do not represent normal running, and the timing is irregular." }
    ],
    answer: 0, ref: "Lesson 6.1"
  },
  {
    id: "CT-016", topic: "spc", level: 2,
    q: "Each batch of resin gives one viscosity reading, and a batch is made every two hours. Which control chart fits?",
    options: [
      { t: "Xbar-R chart", why: "Wrong: Xbar-R needs subgroups of 2 or more readings taken together; here there is one reading per batch." },
      { t: "I-MR chart", why: "Correct: continuous data with a subgroup size of one calls for an individuals and moving range chart." },
      { t: "c chart", why: "Wrong: a c chart counts defects; viscosity is a continuous measurement." },
      { t: "p chart", why: "Wrong: a p chart plots the proportion of defective units, which is attribute data." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "CT-017", topic: "spc", level: 2,
    q: "Twelve shafts are measured for diameter from every production lot. Which chart is preferred?",
    options: [
      { t: "Xbar-R chart", why: "Wrong: the range uses only the two extreme values and becomes inefficient for subgroups of 10 or more." },
      { t: "I-MR chart", why: "Wrong: I-MR is for single readings; it would discard the subgroup structure." },
      { t: "np chart", why: "Wrong: np charts count defective units; diameter is continuous." },
      { t: "Xbar-S chart", why: "Correct: with continuous data and subgroups of 10 or more, the standard deviation estimates within-subgroup spread better than the range." }
    ],
    answer: 3, ref: "Lesson 6.1"
  },
  {
    id: "CT-018", topic: "spc", level: 2,
    q: "An accounts team records each day how many invoices were paid late out of all invoices processed; the daily total varies from 150 to 320. Which chart fits?",
    options: [
      { t: "np chart", why: "Wrong: an np chart plots a count of defectives and needs a constant sample size." },
      { t: "u chart", why: "Wrong: a u chart is for defects per unit (several possible per item); each invoice is either late or not, so it is a defective item with one possible failure." },
      { t: "p chart", why: "Correct: pass/fail (defective) data with a varying sample size calls for a p chart of the proportion late." },
      { t: "c chart", why: "Wrong: a c chart counts defects in a constant area of opportunity." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },
  {
    id: "CT-019", topic: "spc", level: 2,
    q: "Painted panels of identical size are inspected and every scratch is counted; one panel can have several scratches. Which chart fits?",
    options: [
      { t: "c chart", why: "Correct: counts of defects (Poisson) in a constant area of opportunity are plotted on a c chart." },
      { t: "np chart", why: "Wrong: np counts defective units out of a constant sample; here the count is of defects, and one panel can have many." },
      { t: "p chart", why: "Wrong: a p chart plots the proportion of defective units." },
      { t: "Xbar-R chart", why: "Wrong: Xbar-R is for continuous measurements in subgroups." }
    ],
    answer: 0, ref: "Lesson 6.1"
  },
  {
    id: "CT-020", topic: "spc", level: 1,
    q: "When should a team choose a CUSUM or EWMA chart instead of a Shewhart chart?",
    options: [
      { t: "When the data are attribute counts", why: "Wrong: attribute data go on p, np, c or u charts; CUSUM and EWMA are chosen for sensitivity, not data type." },
      { t: "When large, sudden shifts must be caught", why: "Wrong: Shewhart charts already catch large shifts quickly; that is their strength." },
      { t: "When small, sustained shifts (under about 1.5σ) must be caught quickly", why: "Correct: CUSUM and EWMA accumulate information over past points, so they flag small drifts sooner than a Shewhart chart." },
      { t: "When there are fewer than 20 subgroups of data", why: "Wrong: any chart needs enough stable data to set its parameters; small data sets are no reason to pick CUSUM or EWMA." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },
  {
    id: "CT-021", topic: "spc", level: 1,
    q: "Which statement about control limits and specification limits is true?",
    options: [
      { t: "Control limits should be set just inside the specification limits", why: "Wrong: control limits are never chosen; they are calculated from process data." },
      { t: "A point inside the specification limits is always in statistical control", why: "Wrong: stability and conformance are different; a point can be in spec and still signal a special cause." },
      { t: "Specification limits belong on an Xbar chart next to the control limits", why: "Wrong: specs apply to individual units, while an Xbar chart plots averages; mixing them misleads." },
      { t: "Control limits come from process data; specification limits come from the customer", why: "Correct: control limits are the voice of the process (±3σ of the plotted statistic), specs are the voice of the customer." }
    ],
    answer: 3, ref: "Lesson 6.1"
  },
  {
    id: "CT-022", topic: "spc", level: 3,
    q: "An Xbar-R chart uses subgroups of n = 5. From 25 subgroups, X̿ = 50.0 and R̄ = 4.0. With A2 = 0.577, what are the Xbar chart control limits?",
    options: [
      { t: "41.544 to 58.456", why: "Wrong: this uses D4 = 2.114 (an R chart constant): 50 ± 2.114 × 4." },
      { t: "47.692 to 52.308", why: "Correct: X̿ ± A2R̄ = 50.0 ± 0.577 × 4.0 = 50.0 ± 2.308." },
      { t: "44.841 to 55.159", why: "Wrong: 50 ± 3R̄/d2 = 50 ± 5.159 gives limits for individuals; averages of 5 need a further ÷√5." },
      { t: "39.360 to 60.640", why: "Wrong: 2.66 is the I-chart factor applied to MR̄, not to the range of a subgroup of 5." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "CT-023", topic: "spc", level: 3,
    q: "For the same chart (n = 5, R̄ = 4.0), D3 = 0 and D4 = 2.114. What are the R chart limits?",
    options: [
      { t: "LCL = 1.692, UCL = 6.308", why: "Wrong: this applies A2 to the range (4.0 ± 2.308); A2 is for the Xbar chart." },
      { t: "LCL = 0, UCL = 12.000", why: "Wrong: 3 × R̄ is not the R chart formula; the upper limit is D4 × R̄." },
      { t: "LCL = 0, UCL = 8.456", why: "Correct: UCL = D4R̄ = 2.114 × 4.0 = 8.456; LCL = D3R̄ = 0 × 4.0 = 0." },
      { t: "LCL = −0.456, UCL = 8.456", why: "Wrong: a range cannot be negative; for n ≤ 6 D3 = 0, so the LCL is 0." }
    ],
    answer: 2, ref: "Control Chart Constants (AIAG table)"
  },
  {
    id: "CT-024", topic: "spc", level: 3,
    q: "An I-MR chart has an average of 20.0 and an average moving range MR̄ = 1.5. Using E2 = 2.66, what are the individuals chart limits?",
    options: [
      { t: "16.01 to 23.99", why: "Correct: x̄ ± 2.66 × MR̄ = 20.0 ± 3.99. (2.66 = 3/d2 with d2 = 1.128 for n = 2.)" },
      { t: "15.50 to 24.50", why: "Wrong: 20 ± 3 × MR̄ treats the moving range as σ; σ is estimated as MR̄/1.128." },
      { t: "15.10 to 24.90", why: "Wrong: 3.267 × MR̄ = 4.90 is the MR chart UCL, not the half-width of the I chart." },
      { t: "17.18 to 22.82", why: "Wrong: A2 = 1.880 for n = 2 is an Xbar-R constant; it is not used for individuals." }
    ],
    answer: 0, ref: "Lesson 6.1"
  },
  {
    id: "CT-025", topic: "spc", level: 3,
    q: "A p chart has p̄ = 0.04 and a constant sample of n = 200 units. What are the control limits?",
    options: [
      { t: "LCL = 0.026, UCL = 0.054", why: "Wrong: this is ±1 standard error (0.0139); control limits are ±3." },
      { t: "LCL = 0, UCL = 0.082", why: "Correct: σp = √(0.04 × 0.96 / 200) = 0.01386; UCL = 0.04 + 3 × 0.01386 = 0.0816; 0.04 − 0.0416 < 0, so LCL = 0." },
      { t: "LCL = −0.002, UCL = 0.082", why: "Wrong: a proportion cannot be negative; a negative LCL is set to 0." },
      { t: "LCL = 0, UCL = 0.628", why: "Wrong: this leaves n out of the formula: 0.04 + 3√(0.04 × 0.96)." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "CT-026", topic: "spc", level: 3,
    q: "A u chart tracks defects per unit with subgroups of 8 units. The average is ū = 2.0 defects per unit. What are the limits for a subgroup of 8?",
    options: [
      { t: "LCL = 1.25, UCL = 2.75", why: "Wrong: this uses ū/n = 0.25 without the square root; the standard error is √(ū/n) = 0.5." },
      { t: "LCL = 0, UCL = 6.24", why: "Wrong: 2 ± 3√2 is the c chart formula; it ignores that each point averages 8 units." },
      { t: "LCL = 4, UCL = 28", why: "Wrong: these are c chart limits for the total count per subgroup (16 ± 3 × 4), not for defects per unit." },
      { t: "LCL = 0.5, UCL = 3.5", why: "Correct: ū ± 3√(ū/n) = 2.0 ± 3√(2.0/8) = 2.0 ± 1.5." }
    ],
    answer: 3, ref: "Lesson 6.1"
  },
  {
    id: "CT-027", topic: "spc", level: 2,
    q: "On a new Xbar-R chart the R chart has two points above its UCL, while every Xbar point lies inside its limits. What should the analyst do first?",
    options: [
      { t: "Investigate the R chart signals before trusting the Xbar chart", why: "Correct: Xbar limits are computed from R̄, so special causes in the range make them unreliable. Read the variation chart first." },
      { t: "Conclude the process is stable because the averages are in control", why: "Wrong: the R chart signals are special causes in the within-subgroup variation; the process is not stable." },
      { t: "Delete the two range values and rerun the chart without a look at them", why: "Wrong: points are removed only after an assignable cause is found and fixed." },
      { t: "Widen the R chart limits to 4σ to reduce false alarms", why: "Wrong: changing the sigma level hides real signals; limits stay at ±3σ." }
    ],
    answer: 0, ref: "Lesson 6.1"
  },

  // ---------- spc-rules ----------
  {
    id: "CT-028", topic: "spc-rules", level: 1,
    q: "Which pattern is an out-of-control signal under every common rule set (Western Electric, Nelson, Minitab)?",
    options: [
      { t: "Three points in a row on the same side of the centre line", why: "Wrong: three points on one side happen often by chance; run rules need 8 (Western Electric) or 9 (Nelson)." },
      { t: "One point beyond a 3σ control limit", why: "Correct: a single point outside the control limits is rule 1 (Test 1) in all sets; by chance it happens only about 0.27% of the time." },
      { t: "One point between 1σ and 2σ from the centre line", why: "Wrong: about 27% of points fall in that zone by chance; it is normal variation." },
      { t: "Two points in a row exactly on the centre line", why: "Wrong: points on the centre line are not a signal under any standard rule." }
    ],
    answer: 1, ref: "Lesson 6.1"
  },
  {
    id: "CT-029", topic: "spc-rules", level: 2,
    q: "On an I chart, the last 10 points all lie above the centre line, yet every point is inside the control limits. What does this show?",
    options: [
      { t: "The process is in control because no point is outside the limits", why: "Wrong: run rules detect shifts that never cross the limits; staying inside them is not enough." },
      { t: "A trend caused by gradual drift, such as tool wear", why: "Wrong: a trend rule needs points steadily rising or falling; points above the centre line are a run (shift)." },
      { t: "A likely shift in the process mean due to a special cause", why: "Correct: 10 in a row on one side exceeds both the Western Electric (8) and Nelson/Minitab (9) run rules, so the mean has probably moved." },
      { t: "Over-adjustment by the operator after each reading", why: "Wrong: over-adjustment typically shows as points alternating up and down, not a run on one side." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },
  {
    id: "CT-030", topic: "spc-rules", level: 2,
    q: "Using the Minitab tests for special causes, an Xbar chart shows 7 consecutive points each higher than the one before, all inside the limits. What is the correct reading?",
    options: [
      { t: "No signal until one of the points crosses the UCL", why: "Wrong: pattern tests exist to catch changes before a point crosses a limit." },
      { t: "A trend signal; look for a gradual cause such as wear or temperature drift", why: "Correct: Test 3 flags 6 points in a row all increasing or all decreasing; 7 rising points meets it." },
      { t: "A run signal, because the points are on one side of the centre line", why: "Wrong: the stem says nothing about the centre line; the pattern is a steady rise, which is a trend." },
      { t: "A stratification signal caused by mixing two process streams", why: "Wrong: stratification shows as many points hugging the centre line (15 within 1σ), not a steady rise." }
    ],
    answer: 1, ref: "Web: support.minitab.com (tests for special causes)"
  },
  {
    id: "CT-031", topic: "spc-rules", level: 3,
    q: "An Xbar chart has centre line 100, UCL 106 and LCL 94. The last four subgroup means are 102.0, 104.5, 103.0 and 104.8. What do the rules show?",
    options: [
      { t: "No signal, because every point lies inside the control limits", why: "Wrong: zone rules flag shifts before any point reaches a 3σ limit." },
      { t: "A trend signal, because the values are rising", why: "Wrong: the values do not rise steadily (104.5 is followed by 103.0), and four points are too few for a trend rule." },
      { t: "No signal yet; a fifth point above 104 is needed", why: "Wrong: the 2-of-3 rule is already met by the last three points." },
      { t: "A signal: 2 of 3 consecutive points beyond 2σ on the same side", why: "Correct: σ of the means = (106 − 100)/3 = 2, so 2σ = 104. Of the last three (104.5, 103.0, 104.8), two exceed 104: a signal under Western Electric and Nelson/Minitab Test 5." }
    ],
    answer: 3, ref: "Web: itl.nist.gov (Western Electric rules)"
  },
  {
    id: "CT-032", topic: "spc-rules", level: 3,
    q: "An I chart has centre line 20 and UCL 26. The last five points are 22.5, 23.1, 21.4, 22.8 and 23.6. Which rule, if any, is broken?",
    options: [
      { t: "4 of 5 consecutive points beyond 1σ on the same side", why: "Correct: σ = (26 − 20)/3 = 2, so 1σ = 22. Four of the five points (22.5, 23.1, 22.8, 23.6) exceed 22; this is a signal under Western Electric and Nelson/Minitab Test 6." },
      { t: "2 of 3 consecutive points beyond 2σ on the same side", why: "Wrong: 2σ = 24 and no point exceeds 24." },
      { t: "6 points in a row steadily increasing", why: "Wrong: only five points are given and 21.4 breaks the rise." },
      { t: "No rule is broken; the points are inside the limits", why: "Wrong: zone rules can signal with every point inside the 3σ limits." }
    ],
    answer: 0, ref: "Web: itl.nist.gov (Western Electric rules)"
  },
  {
    id: "CT-033", topic: "spc-rules", level: 2,
    q: "Under the Nelson (Minitab Test 4) rules, an I chart shows 14 points in a row alternating up and down. What is the most likely cause?",
    options: [
      { t: "A sustained shift in the process mean", why: "Wrong: a shift shows as a run of points on one side of the centre line." },
      { t: "Gradual tool wear", why: "Wrong: wear produces a trend (steady rise or fall), not a saw-tooth." },
      { t: "Over-adjustment, or two streams sampled in turn", why: "Correct: a regular saw-tooth points to a systematic cause: tampering, or data alternating between two streams." },
      { t: "Normal common-cause variation that needs no action", why: "Wrong: 14 strict alternations in a row are very unlikely by chance, so Test 4 treats them as a special cause." }
    ],
    answer: 2, ref: "Web: support.minitab.com (tests for special causes)"
  },
  {
    id: "CT-034", topic: "spc-rules", level: 2,
    q: "An operator sees a point above the UCL on a chart covered by the control plan. What should happen first?",
    options: [
      { t: "Recalculate the control limits including the new point", why: "Wrong: limits are not recalculated to absorb a signal; that hides the special cause." },
      { t: "Ignore it if the part is still within specification", why: "Wrong: an out-of-control point means the process changed; being in spec now does not mean it will stay so." },
      { t: "Adjust the setting by the size of the deviation and carry on", why: "Wrong: adjusting without finding the cause is tampering and can add variation." },
      { t: "Follow the response plan: contain, investigate, log", why: "Correct: a signal triggers the reaction plan written for that characteristic: containment, investigation, correction and a record." }
    ],
    answer: 3, ref: "Lesson 6.2"
  },
  {
    id: "CT-035", topic: "spc-rules", level: 2,
    q: "A stable process is adjusted after every reading to bring it back to target. What does Deming's funnel experiment show will happen?",
    options: [
      { t: "Variation increases, because the adjustments react to common-cause noise", why: "Correct: this is tampering; compensating for random variation adds the adjustment error to the process noise; adjusting by the last error (funnel rule 2) doubles the variance." },
      { t: "Variation decreases, because each error is corrected straight away", why: "Wrong: correcting random noise does not remove it; it adds a second source of variation." },
      { t: "The mean shifts but the spread stays the same", why: "Wrong: the main effect of tampering is extra spread, not a stable shift of the mean." },
      { t: "Nothing changes, because the process was already stable", why: "Wrong: the adjustments themselves change the process, making it worse." }
    ],
    answer: 0, ref: "Web: qualityamerica.com (tampering effects)"
  },
  {
    id: "CT-036", topic: "spc-rules", level: 2,
    q: "An I-MR chart has been in control for 30 days with no rule violations, but Cpk = 0.7. What is the best description and next step?",
    options: [
      { t: "Out of control; hunt for special causes on the chart", why: "Wrong: no rule is broken, so there is no special cause to find; the problem is the common-cause variation." },
      { t: "Stable but not capable; change the process itself", why: "Correct: stability (control) and capability (fit to specs) are separate. A stable process with Cpk 0.7 makes defects predictably; only a system change fixes it." },
      { t: "Capable, because a stable process always meets specifications", why: "Wrong: stability says nothing about the specs; Cpk below 1 means output falls outside them." },
      { t: "Tighten the control limits to match the specification limits", why: "Wrong: control limits come from data; redrawing them does not change what the process produces." }
    ],
    answer: 1, ref: "Lesson 3.6"
  },
  {
    id: "CT-037", topic: "spc-rules", level: 3,
    q: "A change to the set-up method went live on day 40. Since then, the last 25 subgroup means of cycle time all fall below the old centre line, and the team has confirmed the change caused it. What should they do with the control limits?",
    options: [
      { t: "Keep the old limits, since they are the project baseline", why: "Wrong: old limits describe a process that no longer exists; the chart would keep signalling and lose its use." },
      { t: "Recalculate using all data, before and after the change", why: "Wrong: mixing two different processes gives limits that fit neither." },
      { t: "Recalculate using only the data after the change", why: "Correct: the shift is real, sustained and explained, so new limits from the post-change period (about 20–25 subgroups) describe the improved process." },
      { t: "Leave the centre line and narrow the limits by a third", why: "Wrong: limits are calculated from data, never adjusted by judgement." }
    ],
    answer: 2, ref: "Lesson 6.1"
  },

  // ---------- control-plan ----------
  {
    id: "CT-038", topic: "control-plan", level: 1,
    q: "What is a control plan?",
    options: [
      { t: "The Gantt chart for the remaining project tasks", why: "Wrong: a Gantt chart schedules project work; the control plan governs the process after the project." },
      { t: "The list of solutions chosen and piloted in the Improve phase", why: "Wrong: solution selection is an Improve output; the control plan says how the improved process is monitored." },
      { t: "A written summary of how the process is monitored and controlled", why: "Correct: it lists what is controlled, how and how often it is measured, who does it and the reaction plan." },
      { t: "The project charter amended with the final validated savings figure", why: "Wrong: the charter defines the project; it is not a process control document." }
    ],
    answer: 2, ref: "Lesson 6.2"
  },
  {
    id: "CT-039", topic: "control-plan", level: 1,
    q: "Which set of entries belongs in a control plan row for a key characteristic?",
    options: [
      { t: "Spec, measurement method, sample plan, owner, reaction plan", why: "Correct: these columns say what is checked, how, how often, by whom and what to do when it goes wrong." },
      { t: "Brainstormed causes, fishbone category, vote count", why: "Wrong: these are Analyze-phase cause-finding outputs, not process controls." },
      { t: "Hypothesis tested, p-value, decision and sample size used", why: "Wrong: statistical test results support analysis; they are not ongoing controls." },
      { t: "Team members, their DMAIC role and the hours each one spent", why: "Wrong: these are project-management data, not how the process is controlled." }
    ],
    answer: 0, ref: "Lesson 6.2"
  },
  {
    id: "CT-040", topic: "control-plan", level: 2,
    q: "A draft response plan reads only: \"If the process goes out of control, fix it.\" What is it missing?",
    options: [
      { t: "A new capability study to repeat each week", why: "Wrong: capability studies may be part of monitoring but do not tell people how to respond to a signal." },
      { t: "Approval from the project Champion before each fix is made", why: "Wrong: routing every reaction through the Champion slows containment; the process owner and operators act." },
      { t: "Trigger, owner, containment, escalation and records", why: "Correct: a usable response plan defines the signal, the responsible person, immediate containment, escalation, corrective action and documentation." },
      { t: "The names of the original project team members", why: "Wrong: the team disbands at closure; the plan must name process roles, not project roles." }
    ],
    answer: 2, ref: "Lesson 6.2"
  },
  {
    id: "CT-041", topic: "control-plan", level: 2,
    q: "After an out-of-control signal, the reaction plan says to quarantine all parts made since the last good check. What type of action is this?",
    options: [
      { t: "Preventive action", why: "Wrong: preventive action stops a potential problem from ever occurring." },
      { t: "Corrective action", why: "Wrong: corrective action removes the root cause so the problem does not recur." },
      { t: "Mistake-proofing", why: "Wrong: mistake-proofing builds the error out of the process; quarantine only holds suspect parts." },
      { t: "Containment", why: "Correct: containment is the short-term step that stops suspect product reaching the customer until the root cause is fixed." }
    ],
    answer: 3, ref: "Lesson 6.2"
  },
  {
    id: "CT-042", topic: "control-plan", level: 1,
    q: "At project closure, who should own the control plan and its reaction plan?",
    options: [
      { t: "The process owner", why: "Correct: the person who runs the process day to day keeps the plan up to date and acts on signals." },
      { t: "The Green Belt who led the project", why: "Wrong: the Green Belt moves to the next project; ownership passes to the process owner." },
      { t: "The Master Black Belt", why: "Wrong: an MBB coaches and reviews but does not run the process." },
      { t: "The finance analyst who validated savings", why: "Wrong: finance confirms benefits but has no role in operating the process." }
    ],
    answer: 0, ref: "Lesson 6.2"
  },
  {
    id: "CT-043", topic: "control-plan", level: 3,
    q: "An uncontrolled defect costs €50,000 a year. Option A: 100% visual inspection at €30,000 a year, catching 80% of defects. Option B: a poka-yoke fixture costing €15,000 once plus €1,000 a year upkeep, preventing the defect. Which option has the higher first-year net benefit, and how much is it?",
    options: [
      { t: "Option A, €40,000", why: "Wrong: 80% of €50,000 = €40,000 is the gross saving; the €30,000 inspection cost must be subtracted, leaving €10,000." },
      { t: "Option B, €34,000", why: "Correct: A = 0.8 × 50,000 − 30,000 = €10,000; B = 50,000 − (15,000 + 1,000) = €34,000. B also prevents rather than detects." },
      { t: "Option B, €35,000", why: "Wrong: 50,000 − 15,000 leaves out the €1,000 annual upkeep." },
      { t: "Option A, €10,000", why: "Wrong: €10,000 is A's net benefit, but B's €34,000 is higher." }
    ],
    answer: 1, ref: "Lesson 6.2"
  },
  {
    id: "CT-044", topic: "control-plan", level: 2,
    q: "Why does a control plan prefer mistake-proofing to inspection where both are feasible?",
    options: [
      { t: "Inspection cannot be listed in a control plan", why: "Wrong: inspection is a valid control method in a control plan; it is just weaker." },
      { t: "Mistake-proofing removes the need for any response or reaction plan", why: "Wrong: every control, including a poka-yoke, needs a check that it works and a reaction if it fails." },
      { t: "Mistake-proofing is always cheaper to install", why: "Wrong: a fixture may cost more up front; the case rests on effectiveness and running cost." },
      { t: "It acts at the source; inspection acts later and misses some", why: "Correct: 100% human inspection is often cited as only about 80% effective and adds cost per unit; a poka-yoke prevents or catches the error where it starts." }
    ],
    answer: 3, ref: "Lesson 6.2"
  },
  {
    id: "CT-045", topic: "control-plan", level: 2,
    q: "After handoff, how does the process owner best confirm that the control plan is still being followed?",
    options: [
      { t: "Wait for customer complaints before checking anything", why: "Wrong: complaints are a lagging signal; by then the gain is already lost." },
      { t: "Scheduled audits of the plan on the floor, with findings tracked to closure", why: "Correct: regular (often layered) audits check that measurements, frequencies and reactions happen as written." },
      { t: "Ask the former Green Belt to reread the plan each quarter", why: "Wrong: reading the document does not check practice on the floor, and the Green Belt no longer owns it." },
      { t: "Re-run the full DMAIC project every year", why: "Wrong: a new project is needed only when the process needs further improvement, not to check compliance." }
    ],
    answer: 1, ref: "Lesson 6.2"
  },
  {
    id: "CT-046", topic: "control-plan", level: 1,
    q: "Which activity belongs to project closure?",
    options: [
      { t: "Collecting baseline data on the current process", why: "Wrong: baseline data are gathered in Measure." },
      { t: "Writing the problem statement and goal", why: "Wrong: these are charter items in Define." },
      { t: "Running a hypothesis test on the suspected root causes", why: "Wrong: testing suspected causes belongs to Analyze." },
      { t: "Recording lessons learned and validated savings", why: "Correct: closure validates benefits, hands off to the process owner, records lessons learned and recognises the team." }
    ],
    answer: 3, ref: "Lesson 6.2"
  },
  {
    id: "CT-047", topic: "control-plan", level: 1,
    q: "Which documents should be updated before a project is closed?",
    options: [
      { t: "Work instructions, training material, FMEA and control plan", why: "Correct: these hold the new method in the organisation; the FMEA is updated to show the new controls and revised RPNs." },
      { t: "The project charter and its milestone dates", why: "Wrong: the charter is a project document; the process documents are what hold the gain." },
      { t: "The final presentation to the Champion", why: "Wrong: a presentation reports results; it does not tell operators how to run the process." },
      { t: "The supplier contracts for all inputs", why: "Wrong: contracts change only if the solution involves a supplier; they are not a standard closure item." }
    ],
    answer: 0, ref: "Lesson 6.2"
  },
  {
    id: "CT-048", topic: "control-plan", level: 3,
    q: "Three months after handoff, the KPOV chart shows a run of points drifting back toward the old level. An audit finds operators stopped using the new set-up checklist because it takes too long. What is the best action?",
    options: [
      { t: "Recalculate the control limits to match the new level", why: "Wrong: that would accept the loss of the gain and hide the signal." },
      { t: "Launch a new full DMAIC project on the same problem", why: "Wrong: the cause is already known; this is a control failure handled by the response plan, not a new project." },
      { t: "Discipline the operators and reissue the same checklist", why: "Wrong: blaming people leaves the real cause (a slow checklist) in place, so it will happen again." },
      { t: "Owner runs the response plan and fixes the checklist", why: "Correct: treat the drift as a special cause, contain it, remove the reason the standard was dropped and strengthen the control." }
    ],
    answer: 3, ref: "Lesson 6.2"
  }
]);
