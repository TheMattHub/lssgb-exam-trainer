// Pack "control": learn pages for the topics whose pack is "control" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. Conventions from docs/research/iassc-gb-bok.md §4.
LEARN.add([
  {
    topic: "lean-control",
    summary: "Lean controls hold an improved process in place with simple, visible, low-cost means: 5S, visual management, kanban, poka-yoke, standard work and TPM. In Control they matter because they act at the point of work, without waiting for data analysis.",
    points: [
      "5S as a control: scored 5S audits on a schedule, shadow boards, floor marking, photo standards and management walk-throughs keep Sort, Set in order, Shine and Standardize from slipping. Step 5 is Self-discipline (Sustain).",
      "Visual management makes normal versus abnormal obvious at a glance (andon lights, WIP lanes with a maximum, status boards), so people react at once.",
      "Kanban is a visual pull signal: the downstream process authorises production or replenishment. No kanban, no production; never pass on defects. It caps WIP.",
      "Number of kanbans ≈ demand × lead time × (1 + safety factor) ÷ container size, rounded up.",
      "Poka-yoke (Shingo) sensing methods: contact (shape, size, position), fixed-value (a set count of parts or moves), motion-step (correct sequence).",
      "Poka-yoke reactions: control (shutdown) type stops the process; warning type alerts the operator. Prevention (error cannot happen) beats detection (error caught at once).",
      "Control hierarchy, strongest first: remove the cause by design, mistake-proofing, SPC, inspection, training and written instructions.",
      "Standard work records the current best method (sequence, takt time, standard WIP). It is the baseline for the next improvement, not a frozen rule.",
      "TPM keeps equipment able to run the improved process; autonomous maintenance gives operators daily cleaning, inspection and lubrication.",
      "The eight TPM pillars: autonomous maintenance, planned maintenance, focused improvement, quality maintenance, early equipment management, training and education, safety/health/environment, and TPM in administration (office TPM).",
      "SMED gains are held with a standard changeover sheet, pre-staged kits and changeover time tracked on a chart.",
      "OEE six big losses: breakdowns and setup/adjustment cut availability; idling/minor stops and reduced speed cut performance; process defects and start-up (reduced) yield cut quality."
    ],
    formulas: [
      { name: "OEE", f: "OEE = Availability × Performance × Quality" },
      { name: "Availability", f: "Run time ÷ Planned production time" },
      { name: "Performance", f: "(Ideal cycle time × Total count) ÷ Run time" },
      { name: "Quality", f: "Good count ÷ Total count" },
      { name: "Kanbans", f: "N = D × L × (1 + S) ÷ C, rounded up" }
    ],
    traps: [
      "OEE multiplies the factors; averaging them overstates it (90%, 95%, 98% gives 83.8%, not 94.3%).",
      "Fixed-value counts; motion-step checks order; contact checks a physical feature. Warning and control describe the reaction, not the sensing method.",
      "A device that stops the line after a defect is a detection poka-yoke with a control-type reaction; only making the error impossible is prevention.",
      "Kanban (pull signal) and a visual KPI board (information only) are both visual, but only kanban authorises work."
    ],
    terms: [
      { term: "Poka-yoke", def: "Mistake-proofing: a device or method that prevents an error or makes it obvious at once." },
      { term: "Andon", def: "A visual or audible signal that shows the status of a process and calls for help." },
      { term: "TPM", def: "Total productive maintenance: operators and maintenance together keep equipment in condition to maximise OEE." },
      { term: "SMED", def: "Single-minute exchange of die: cutting changeover time by moving internal steps to external and streamlining the rest." }
    ]
  },
  {
    topic: "spc",
    summary: "Statistical process control charts a process over time to separate common-cause variation (the system) from special causes (something changed). The chart type depends on the data type and the subgroup size; the limits come from the process, never from the specification.",
    points: [
      "Common cause: many small, always-present sources; predictable within limits; reduced only by changing the system. Special (assignable) cause: a specific event; act on it locally.",
      "Rational subgroups: units made under nearly the same conditions (e.g. consecutive parts from one stream), so variation within a subgroup is common cause only and shifts show between subgroups.",
      "Set initial limits from 20–25 subgroups (about 100 values) of stable data.",
      "Control limits = centre line ± 3σ of the plotted statistic. They are the voice of the process; specification limits are the voice of the customer and do not belong on an Xbar chart.",
      "Read the R, S or MR chart first: Xbar and I limits are computed from the average spread, so if spread is out of control those limits are unreliable.",
      "Defectives (unit is good or bad, binomial): p chart (proportion, n may vary) or np chart (count, n constant).",
      "Defects (several per unit possible, Poisson): c chart (count, constant area of opportunity) or u chart (defects per unit, area may vary).",
      "CUSUM plots the cumulative sum of deviations from target; EWMA weights recent points (λ often 0.2). Both catch small sustained shifts (< 1.5σ) faster; Shewhart charts are best for large, sudden shifts.",
      "Negative lower limits on p, np, c and u charts are set to 0 (the R chart LCL is D₃R̄, which is 0 for n ≤ 6).",
      "Constants for n = 5 (the most common subgroup): A₂ = 0.577, D₃ = 0, D₄ = 2.114, d₂ = 2.326. For n = 2 (moving range): d₂ = 1.128, so E₂ = 3/d₂ = 2.66 and D₄ = 3.267.",
      "Phase I is retrospective: chart past data, remove points with found assignable causes and recompute until stable. Phase II monitors new data against those fixed limits.",
      "False alarms: with 3σ limits and only the beyond-limits test, a stable process gives a point outside about once in 370 (P = 0.0027); each added run rule raises the false-alarm rate (about 1 in 92 with all Western Electric rules)."
    ],
    formulas: [
      { name: "Xbar chart (R)", f: "X̿ ± A₂R̄" },
      { name: "R chart", f: "UCL = D₄R̄, LCL = D₃R̄" },
      { name: "Xbar chart (S)", f: "X̿ ± A₃s̄; S chart UCL = B₄s̄, LCL = B₃s̄" },
      { name: "I chart", f: "x̄ ± 2.66 MR̄ (2.66 = 3/d₂, d₂ = 1.128)" },
      { name: "MR chart", f: "UCL = 3.267 MR̄, LCL = 0" },
      { name: "p chart", f: "p̄ ± 3√(p̄(1 − p̄)/n)" },
      { name: "np chart", f: "np̄ ± 3√(np̄(1 − p̄))" },
      { name: "c chart", f: "c̄ ± 3√c̄" },
      { name: "u chart", f: "ū ± 3√(ū/n)" }
    ],
    table: {
      title: "Which chart when",
      head: ["Data", "Subgroup / sample", "Chart"],
      rows: [
        ["Continuous", "n = 1", "I-MR"],
        ["Continuous", "n = 2–9 (typically 4–5)", "Xbar-R"],
        ["Continuous", "n = 10 or more", "Xbar-S"],
        ["Defectives (proportion)", "n may vary", "p"],
        ["Defectives (count)", "n constant", "np"],
        ["Defects (count)", "constant area of opportunity", "c"],
        ["Defects per unit", "area may vary", "u"],
        ["Any, small shifts < 1.5σ", "any", "CUSUM or EWMA"]
      ]
    },
    traps: [
      "Defect vs defective: a scratch is a defect (c or u); a rejected unit is a defective (p or np). One unit can have many defects.",
      "c and np both need a constant base; p and u allow it to vary.",
      "A2 belongs to the Xbar chart, D3/D4 to the R chart, 2.66 to the I chart, 3.267 to the MR chart: don't swap them.",
      "Points inside the spec limits can still be out of control, and an in-control process can still make defects."
    ],
    terms: [
      { term: "Rational subgroup", def: "A group of units made under essentially the same conditions, chosen so within-group variation is common cause only." },
      { term: "Area of opportunity", def: "The unit, length, area or time over which defects are counted." },
      { term: "EWMA", def: "Exponentially weighted moving average chart; each point blends the newest subgroup mean (weight λ) with the previous EWMA." }
    ]
  },
  {
    topic: "spc-rules",
    summary: "Run rules read patterns on a control chart that are unlikely under common-cause variation alone. A signal means a special cause to investigate, through the response plan, not an automatic adjustment.",
    points: [
      "Zones: A = 2σ to 3σ, B = 1σ to 2σ, C = within 1σ of the centre line (σ of the plotted statistic = (UCL − CL)/3).",
      "Signals under both Western Electric and Nelson/Minitab: 1 point beyond 3σ; 2 of 3 consecutive beyond 2σ on one side; 4 of 5 consecutive beyond 1σ on one side.",
      "Run on one side: Western Electric uses 8 in a row; Nelson/Minitab Test 2 uses 9 in a row. 9 or more signals under both.",
      "Nelson/Minitab also flag: 6 in a row steadily rising or falling (trend); 14 in a row alternating up and down; 15 in a row within 1σ (stratification); 8 in a row beyond 1σ on either side (mixture).",
      "Minitab runs only Test 1 by default; attribute charts support Tests 1–4.",
      "Reacting to a signal: follow the response plan, contain suspect output, find and remove the assignable cause, and log it.",
      "Tampering (adjusting a stable process for common-cause noise) increases variation, as Deming's funnel shows.",
      "Stable is not the same as capable: a process can be in control with Cpk below 1. Fix that by changing the system, not by chasing points.",
      "Recalculate limits only after a real, sustained and explained change, using data from after the change (about 20–25 subgroups)."
    ],
    table: {
      title: "Rule sets compared",
      head: ["Pattern", "Western Electric", "Nelson / Minitab"],
      rows: [
        ["Beyond 3σ", "1 point", "1 point (Test 1)"],
        ["Run on one side of CL", "8 in a row", "9 in a row (Test 2)"],
        ["Trend", "supplementary rules only", "6 rising or falling (Test 3)"],
        ["Alternating", "not used", "14 in a row (Test 4)"],
        ["Beyond 2σ, same side", "2 of 3", "2 of 3 (Test 5)"],
        ["Beyond 1σ, same side", "4 of 5", "4 of 5 (Test 6)"]
      ]
    },
    traps: [
      "A run is points on one side of the centre line (a shift); a trend is points steadily rising or falling (a drift). They point to different causes.",
      "No point outside the limits does not mean in control; zone and run rules can still signal.",
      "Never recalculate limits just to absorb a signal; that hides the special cause.",
      "Alternating points suggest over-adjustment or two mixed streams; a long run hugging the centre line suggests stratification or limits computed from mixed data."
    ],
    terms: [
      { term: "Special cause", def: "A specific, identifiable source of variation that is not part of the process as designed." },
      { term: "Tampering", def: "Adjusting a stable process in response to common-cause variation, which adds variation." },
      { term: "Stability", def: "Only common-cause variation present, so future output is predictable within the control limits." }
    ]
  },
  {
    topic: "control-plan",
    summary: "The control plan is the written system that holds the gain after the project: what is controlled, how it is measured, who acts and what they do when it goes wrong. Closure hands it to the process owner together with validated savings and lessons learned.",
    points: [
      "Typical row: process step, characteristic (KPIV or KPOV/CTQ), specification or target, measurement method (MSA-validated), sample size and frequency, control method (chart, poka-yoke, checklist), owner, reaction plan.",
      "A control plan controls the KPIVs and monitors the KPOVs. KPIVs come from FMEA, C&E matrix, multi-vari, regression and DOE.",
      "Response plan: trigger criteria, immediate containment (quarantine suspect product), responsible person, escalation, corrective action on the root cause, documentation, check that the fix worked.",
      "Containment is a short-term hold; corrective action removes the root cause; preventive action stops a potential problem before it occurs.",
      "Prefer the strongest affordable control: design out the cause > mistake-proofing > SPC > inspection > training and instructions.",
      "Cost-benefit: net benefit = benefits (loss avoided, from COPQ and FMEA severity) − costs (one-off plus running). Choose the cheapest control that reliably holds the gain.",
      "The control plan is a living document owned by the process owner, not the project team. Audit it on the floor regularly and track findings.",
      "Closure: update work instructions, training, FMEA and control plan; hand off to the process owner; have finance validate savings; record lessons learned; recognise the team.",
      "Hard savings show on the P&L (less scrap, material, overtime, headcount); soft savings are real but not on the books (freed capacity, cost avoidance). Freed time with no payroll change is soft.",
      "Replicate gains by piloting the proven solution with the receiving process owner, confirming it with data, then rolling it out with updated documents."
    ],
    formulas: [
      { name: "Net benefit", f: "Net benefit = Benefits − (One-off costs + Running costs)" }
    ],
    traps: [
      "The Green Belt does not own the control plan after closure; the process owner does.",
      "A response plan that says only \"fix it\" is incomplete: it needs a trigger, an owner, containment and escalation.",
      "Inspection is a valid control but a weak one (100% visual inspection is often cited as only about 80% effective); mistake-proofing acts at the source.",
      "A control plan is not static or one-off: it is revised when the process, risks or specs change."
    ],
    terms: [
      { term: "Process owner", def: "The manager responsible for the process day to day, who receives and maintains the control plan." },
      { term: "Reaction (response) plan", def: "The predefined steps taken when a control signals a problem." },
      { term: "Lessons learned", def: "A record of what worked and what did not, shared so later projects benefit." }
    ]
  }
]);
