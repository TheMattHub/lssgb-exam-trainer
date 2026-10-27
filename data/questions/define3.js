// Pack "define3": extra Define questions (wave 2). Topics live in define1/define2 (data/topics.js).
// Format: docs/CONTENT_GUIDE.md. Topics: lean-basics, ss-metrics, voc-ctq, project-select.
QB.add([
  // ---------- lean-basics ----------
  {
    id: "D3-001", topic: "lean-basics", level: 1,
    q: "Which Toyota Production System pioneer is best known for SMED (single-minute exchange of die) and poka-yoke?",
    options: [
      { t: "Taiichi Ohno", why: "Wrong: Ohno led the development of the Toyota Production System as a whole (kanban, just-in-time, the seven wastes); SMED and poka-yoke are credited to Shingo." },
      { t: "Kaoru Ishikawa", why: "Wrong: Ishikawa is known for the cause-and-effect (fishbone) diagram and quality circles, not for changeover reduction." },
      { t: "Shigeo Shingo", why: "Correct: Shingo developed SMED to cut changeover times and popularised poka-yoke (mistake-proofing) within the Toyota Production System." },
      { t: "Walter Shewhart", why: "Wrong: Shewhart invented the control chart (Bell Labs, 1924) and the PDCA cycle; he was not part of the Toyota system." }
    ],
    answer: 2, ref: "Web: iassc.org GB BoK 1.4.2"
  },
  {
    id: "D3-002", topic: "lean-basics", level: 2,
    q: "On every cycle, an assembler turns round and bends down to a low bin for screws, and once an hour walks 5 m to a shared torque wrench. Which waste is this?",
    options: [
      { t: "Conveyance", why: "Wrong: conveyance (transport) is moving materials or products between places; here it is the person who moves." },
      { t: "Motion", why: "Correct: motion is unnecessary movement of people (reaching, bending, walking) within the work; better workplace layout removes it." },
      { t: "Waiting", why: "Wrong: waiting is idle time for people or material while nothing is happening; the assembler is busy moving, not idle." },
      { t: "Overprocessing", why: "Wrong: overprocessing is doing more work on the product than the customer needs (extra polishing, extra approvals), not extra movement to do the work." }
    ],
    answer: 1, ref: "Lesson 1.2; Web: iassc.org GB BoK 1.4.4"
  },
  {
    id: "D3-003", topic: "lean-basics", level: 2,
    q: "Because a changeover takes 3 hours, a press runs 500 brackets per setup, although the next process uses only 100 a week. Which waste does running this large batch represent at the press?",
    options: [
      { t: "Inventory", why: "Wrong: the 400 surplus brackets sitting in the store are inventory, but that is the result. The press's act of making parts before they are needed is overproduction, which creates the inventory." },
      { t: "Overprocessing", why: "Wrong: overprocessing is extra work on each unit beyond what the customer needs; here each bracket gets normal work, there are just too many too early." },
      { t: "Waiting", why: "Wrong: the long setup causes downtime, but running the big batch is not idle time; it is production ahead of demand." },
      { t: "Overproduction", why: "Correct: producing more, or earlier, than the next process needs is overproduction, the waste that creates inventory, handling and waiting. Shorter changeovers (SMED) allow smaller batches." }
    ],
    answer: 3, ref: "Lesson 1.2; Web: iassc.org GB BoK 1.4.4"
  },

  // ---------- ss-metrics ----------
  {
    id: "D3-004", topic: "ss-metrics", level: 3,
    q: "2,500 order forms are audited. Each form has 8 fields that can be wrong. 150 forms contain at least one error, and 200 errors are found in total. What is the DPMO?",
    options: [
      { t: "7,500", why: "Wrong: this uses the 150 defective forms instead of the 200 defects: 150 ÷ 20,000 × 10⁶. DPMO counts defects, not defective units." },
      { t: "10,000", why: "Correct: DPMO = defects ÷ (units × opportunities) × 10⁶ = 200 ÷ (2,500 × 8) × 10⁶ = 200 ÷ 20,000 × 10⁶ = 10,000." },
      { t: "80,000", why: "Wrong: this is DPU × 10⁶ (200 ÷ 2,500 = 0.08); it leaves out the 8 opportunities per form." },
      { t: "60,000", why: "Wrong: this is the proportion of defective forms in parts per million (150 ÷ 2,500 × 10⁶); it ignores opportunities and counts defectives, not defects." }
    ],
    answer: 1, ref: "Lesson 2.5; Web: iassc.org GB BoK 1.2.5"
  },
  {
    id: "D3-005", topic: "ss-metrics", level: 3,
    q: "A three-step process has DPU values of 0.05, 0.10 and 0.08. Assuming defects follow a Poisson distribution, what is the rolled throughput yield?",
    options: [
      { t: "77.0%", why: "Wrong: this is 1 − total DPU (1 − 0.23), a linear shortcut that understates the yield; under Poisson the yield is e^(−DPU)." },
      { t: "92.3%", why: "Wrong: this is 1 − the average DPU (0.0767); RTY must combine all steps, not average them." },
      { t: "78.7%", why: "Wrong: this multiplies (1 − DPU) for each step (0.95 × 0.90 × 0.92). That treats DPU as a defective rate; under the Poisson model each step's yield is e^(−DPU)." },
      { t: "79.5%", why: "Correct: RTY = e^(−0.05) × e^(−0.10) × e^(−0.08) = e^(−0.23) = 0.7945, about 79.5%." }
    ],
    answer: 3, ref: "Lesson 2.5; Web: iassc.org GB BoK 1.2.5"
  },
  {
    id: "D3-006", topic: "ss-metrics", level: 3,
    q: "1,000 units enter step 1: 900 pass first time, 80 are reworked and then pass, 20 are scrapped. All 980 good units go to step 2: 931 pass first time and 49 are reworked and pass, none scrapped. What are the rolled throughput yield (RTY) and the traditional final yield?",
    options: [
      { t: "RTY 85.5%; final yield 98.0%", why: "Correct: FTY₁ = 900 ÷ 1,000 = 0.90; FTY₂ = 931 ÷ 980 = 0.95; RTY = 0.90 × 0.95 = 0.855. Final yield = units out ÷ units in = 980 ÷ 1,000 = 98.0%, because reworked units count as good." },
      { t: "RTY 93.1%; final yield 98.0%", why: "Wrong: this counts the 80 reworked units as first-time passes at step 1 (980 ÷ 1,000 × 0.95). RTY excludes anything that needed rework." },
      { t: "RTY 85.5%; final yield 93.1%", why: "Wrong: 931 ÷ 1,000 counts only first-time passes at step 2. Traditional final yield counts every good unit out, reworked or not: 980 ÷ 1,000." },
      { t: "RTY 92.5%; final yield 98.0%", why: "Wrong: 92.5% is the average of the step yields (0.90 and 0.95). RTY multiplies step yields; it never averages them." }
    ],
    answer: 0, ref: "Lesson 2.5; Web: iassc.org GB BoK 1.2.5"
  },
  {
    id: "D3-007", topic: "ss-metrics", level: 3,
    q: "A claims office holds on average 240 claims in process and completes 30 claims per day. The team caps work in process at 120 claims while completions stay at 30 per day. According to Little's Law, what is the new average lead time?",
    options: [
      { t: "8 days", why: "Wrong: 8 days (240 ÷ 30) is the old lead time. Lead time depends on WIP as well as throughput, so halving WIP changes it." },
      { t: "4 days", why: "Correct: Little's Law: lead time = WIP ÷ throughput = 120 ÷ 30 = 4 days, half the previous 240 ÷ 30 = 8 days." },
      { t: "16 days", why: "Wrong: this assumes lead time moves opposite to WIP. With throughput fixed, lead time is proportional to WIP, so halving WIP halves lead time." },
      { t: "0.25 days", why: "Wrong: this inverts the formula (30 ÷ 120). Lead time = WIP ÷ throughput, not throughput ÷ WIP." }
    ],
    answer: 1, ref: "Web: iassc.org GB BoK 1.2.5"
  },

  // ---------- voc-ctq ----------
  {
    id: "D3-008", topic: "voc-ctq", level: 1,
    q: "Which VOC method usually reaches the largest number of customers at the lowest cost per response, but allows no follow-up questions?",
    options: [
      { t: "Written or online survey", why: "Correct: surveys are cheap per response and can reach a large, representative sample, but they cannot probe answers and often have low response rates." },
      { t: "One-to-one interview", why: "Wrong: interviews allow probing and follow-up, but each one takes time and a skilled interviewer, so the cost per response is high and samples are small." },
      { t: "Focus group", why: "Wrong: a focus group gathers a small group for a moderated discussion; it allows follow-up but reaches few customers and costs more per participant." },
      { t: "Gemba observation", why: "Wrong: watching customers use the product (going to the Gemba) gives rich insight into unspoken needs, but covers only a few customers." }
    ],
    answer: 0, ref: "Lesson 2.2"
  },
  {
    id: "D3-009", topic: "voc-ctq", level: 2,
    q: "In a Kano survey, most respondents answer 'I like it' if a feature is present and 'I am neutral' if it is absent. How should the feature be classified?",
    options: [
      { t: "Must-be (basic)", why: "Wrong: for a must-be feature customers expect it when present and dislike its absence; here absence is acceptable." },
      { t: "One-dimensional (performance)", why: "Wrong: one-dimensional features are liked when present and disliked when absent; here absence causes no dissatisfaction." },
      { t: "Indifferent", why: "Wrong: indifferent features leave customers neutral either way; here presence is clearly liked." },
      { t: "Attractive (delighter)", why: "Correct: liked when present, accepted when absent: the feature delights without being expected. In the Kano evaluation table, 'like' (present) + 'neutral' (absent) = attractive." }
    ],
    answer: 3, ref: "Web: en.wikipedia.org Kano model"
  },
  {
    id: "D3-010", topic: "voc-ctq", level: 2,
    q: "A team has sorted customer needs into Kano categories and must decide where to spend its limited effort. What does the Kano model suggest?",
    options: [
      { t: "Invest first in delighters, as they differentiate the product", why: "Wrong: delighters add little if basic needs are unmet; a missing must-be causes strong dissatisfaction that no delighter makes up for." },
      { t: "Spread effort evenly across every Kano category", why: "Wrong: the categories affect satisfaction differently, so equal effort wastes resources on features that change little." },
      { t: "Meet all must-be needs, then compete on performance needs", why: "Correct: must-be needs must be fully met first (their absence angers customers); then improve one-dimensional needs, and add a few delighters to stand out." },
      { t: "Focus on performance needs, since basics are rarely voiced", why: "Wrong: must-be needs are rarely voiced because customers take them for granted, not because they matter less; failing them still causes strong dissatisfaction." }
    ],
    answer: 2, ref: "Lesson 2.2"
  },

  // ---------- project-select ----------
  {
    id: "D3-011", topic: "project-select", level: 1,
    q: "Which charter element sets the start and end points of the process under study and lists what the team will not address?",
    options: [
      { t: "Business case", why: "Wrong: the business case explains why the project matters now (link to strategy, financial impact), not its boundaries." },
      { t: "Problem statement", why: "Wrong: the problem statement describes what is wrong, where, when and how big against a baseline; it does not set boundaries." },
      { t: "Goal statement", why: "Wrong: the goal statement gives the SMART target for the primary metric and the date, not the in/out boundaries." },
      { t: "Project scope", why: "Correct: the scope fixes the process boundaries (first and last step) and the in-scope and out-of-scope items, which guards against scope creep." }
    ],
    answer: 3, ref: "Lesson 2.1; Web: iassc.org GB BoK 1.3.1"
  },
  {
    id: "D3-012", topic: "project-select", level: 2,
    q: "Customers complain that orders from a regional warehouse arrive late. Which is the best primary metric for the Green Belt project?",
    options: [
      { t: "Number of trucks dispatched from the warehouse per day", why: "Wrong: this is an activity or input measure; more trucks do not show whether orders arrive on time." },
      { t: "Weekly % of orders delivered after the promised date", why: "Correct: the primary metric is the Y the customer feels: late deliveries, as a rate with an operational definition, tracked often enough to show a baseline and change." },
      { t: "Annual customer satisfaction score for the whole firm", why: "Wrong: it is measured once a year and driven by many other factors, so it cannot show the effect of this project; at best it is a supporting measure." },
      { t: "Monthly overtime hours worked in the warehouse", why: "Wrong: overtime is a sensible secondary (consequential) metric to make sure faster deliveries are not bought with extra cost, but it is not the problem's Y." }
    ],
    answer: 1, ref: "Lesson 2.1; Web: iassc.org GB BoK 1.3.2"
  },
  {
    id: "D3-013", topic: "project-select", level: 3,
    q: "A solution costs €90,000 up front and saves €30,000 in year 1, €40,000 in year 2 and €50,000 in year 3. Assuming savings arrive evenly within each year, what is the simple payback period?",
    options: [
      { t: "2.25 years", why: "Wrong: this divides the investment by the average annual saving (90,000 ÷ 40,000). With uneven savings, accumulate them year by year instead." },
      { t: "3 years", why: "Wrong: this counts whole years only. The investment is recovered part-way through year 3, so interpolate within that year." },
      { t: "2.4 years", why: "Correct: after 2 years €70,000 is recovered, leaving €20,000. Year 3 brings €50,000, so 20,000 ÷ 50,000 = 0.4 of a year: payback = 2.4 years." },
      { t: "1.8 years", why: "Wrong: this divides the investment by the year-3 saving (90,000 ÷ 50,000), as if every year saved €50,000." }
    ],
    answer: 2, ref: "Lesson 2.5; Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D3-014", topic: "project-select", level: 2,
    q: "On a stakeholder power/interest grid, the finance director has high power over the project but little interest in its day-to-day progress. What is the usual strategy for this stakeholder?",
    options: [
      { t: "Manage closely with frequent involvement", why: "Wrong: close management fits stakeholders with high power and high interest, such as the process owner." },
      { t: "Keep informed with frequent updates", why: "Wrong: keeping informed fits low-power, high-interest stakeholders, such as operators affected by the change." },
      { t: "Monitor with minimal effort", why: "Wrong: minimal monitoring fits low-power, low-interest stakeholders; ignoring a powerful one risks a late veto." },
      { t: "Keep satisfied with short, regular updates", why: "Correct: high power, low interest → keep satisfied: meet their needs (e.g. a credible business case) with concise communication, so they do not block the project." }
    ],
    answer: 3, ref: "Web: mutomorro.com Mendelow power-interest matrix"
  }
]);
