// Pack "define1": questions for the topics whose pack is "define1" in data/topics.js
// (ss-overview, lean-basics, ss-metrics, dfss). Format: docs/CONTENT_GUIDE.md.
// Conventions follow docs/research/iassc-gb-bok.md: seven wastes with IASSC names, 5S step 5 = Self-Discipline,
// 1.5σ shift (6σ = 3.4 DPMO), COPQ = internal + external failure (ASQ model).
QB.add([
  // ---------- ss-overview ----------
  {
    id: "D1-001", topic: "ss-overview", level: 1,
    q: "Which contribution to quality is credited to Walter Shewhart at Bell Laboratories in the 1920s?",
    options: [
      { t: "The Quality Trilogy of planning, control and improvement", why: "Wrong: the Quality Trilogy is Joseph Juran's framework." },
      { t: "The 14 Points for management", why: "Wrong: the 14 Points are W. Edwards Deming's management principles." },
      { t: "The control chart for process monitoring", why: "Correct: Shewhart invented the control chart (1924) and separated assignable (special) from chance (common) cause variation; the PDCA cycle also carries his name." },
      { t: "The DMAIC roadmap for process improvement", why: "Wrong: DMAIC came with Six Sigma, decades later (Motorola and GE era)." }
    ],
    answer: 2, ref: "Lesson 1.1"
  },
  {
    id: "D1-002", topic: "ss-overview", level: 1,
    q: "Six Sigma was first developed as a quality programme at which company in the mid-1980s?",
    options: [
      { t: "Motorola", why: "Correct: Bill Smith and Mikel Harry developed Six Sigma at Motorola around 1986; Motorola won the Baldrige award in 1988." },
      { t: "General Electric", why: "Wrong: GE adopted Six Sigma in 1995 under Jack Welch and made it famous, but did not originate it." },
      { t: "Toyota", why: "Wrong: Toyota originated the Toyota Production System, the basis of Lean, not Six Sigma." },
      { t: "Ford Motor Company", why: "Wrong: Ford is linked to the moving assembly line (1913), a forerunner of flow and Lean thinking." }
    ],
    answer: 0, ref: "Lesson 1.1"
  },
  {
    id: "D1-003", topic: "ss-overview", level: 1,
    q: "Which executive led the company-wide adoption of Six Sigma at General Electric in 1995?",
    options: [
      { t: "Bill Smith", why: "Wrong: Bill Smith was the Motorola engineer who originated Six Sigma." },
      { t: "Taiichi Ohno", why: "Wrong: Ohno was the Toyota engineer behind the Toyota Production System." },
      { t: "W. Edwards Deming", why: "Wrong: Deming was a quality consultant (14 Points, PDSA), not a GE executive." },
      { t: "Jack Welch", why: "Correct: Jack Welch, GE's CEO, launched Six Sigma across GE in 1995 and it spread widely from there." }
    ],
    answer: 3, ref: "Lesson 1.1"
  },
  {
    id: "D1-004", topic: "ss-overview", level: 1,
    q: "Joseph Juran's Quality Trilogy consists of which three processes?",
    options: [
      { t: "Plan, Do, Check", why: "Wrong: these are the first three steps of the Shewhart/Deming PDCA cycle." },
      { t: "Planning, control and improvement", why: "Correct: Juran's trilogy is planning, control and improvement; Juran also applied the Pareto principle to quality ('vital few, trivial many')." },
      { t: "Prevention, appraisal and failure", why: "Wrong: these are the cost-of-quality categories, not Juran's trilogy." },
      { t: "Define, measure and analyse", why: "Wrong: these are the first three DMAIC phases of Six Sigma." }
    ],
    answer: 1, ref: "Lesson 1.1"
  },
  {
    id: "D1-005", topic: "ss-overview", level: 2,
    q: "In the Six Sigma problem-solving equation Y = f(X), what does X represent?",
    options: [
      { t: "The output or effect the customer experiences", why: "Wrong: that is Y, the dependent variable or KPOV." },
      { t: "The specification limit set by the customer", why: "Wrong: specification limits describe what Y must meet, not what drives it." },
      { t: "An input or cause that drives the output", why: "Correct: X is the independent variable, input or cause (KPIV); Y depends on the Xs." },
      { t: "The random error left after the model is fitted", why: "Wrong: that is the error term ε in Y = f(X) + ε, not X." }
    ],
    answer: 2, ref: "Lesson 1.1"
  },
  {
    id: "D1-006", topic: "ss-overview", level: 2,
    q: "Which statement best reflects the Y = f(X) way of thinking?",
    options: [
      { t: "Inspecting Y more often is the surest way to improve it", why: "Wrong: inspecting the output only sorts results; it does not change the causes that produce them." },
      { t: "Y and X are equally important to monitor in Control", why: "Wrong: the point of the equation is that X drives Y, so the critical Xs deserve the control effort." },
      { t: "Setting tighter targets for Y will move Y", why: "Wrong: a target on an output does not change the process that generates it." },
      { t: "To control Y, find and control the vital few Xs", why: "Correct: Y is a result of the Xs, so a project narrows many possible Xs to the vital few and controls those." }
    ],
    answer: 3, ref: "Lesson 1.1"
  },
  {
    id: "D1-007", topic: "ss-overview", level: 2,
    q: "Six Sigma has several meanings. Which statement describes Six Sigma as a metric?",
    options: [
      { t: "A performance level of 3.4 defects per million opportunities", why: "Correct: as a metric, 6σ means 3.4 DPMO (with the 1.5σ long-term shift)." },
      { t: "A five-phase roadmap: Define, Measure, Analyze, Improve, Control", why: "Wrong: that is Six Sigma as a methodology (DMAIC)." },
      { t: "A data-driven, customer-focused way of running the business", why: "Wrong: that is Six Sigma as a management philosophy." },
      { t: "The Greek letter σ for the standard deviation of a population", why: "Wrong: that is the statistical meaning of sigma, not the Six Sigma performance metric." }
    ],
    answer: 0, ref: "Lesson 1.1"
  },
  {
    id: "D1-008", topic: "ss-overview", level: 2,
    q: "Which role typically selects Six Sigma projects, owns them on behalf of the business and removes organisational barriers for the team?",
    options: [
      { t: "Master Black Belt", why: "Wrong: the MBB coaches and trains Belts and owns the methodology, but does not usually own the business result." },
      { t: "Champion", why: "Correct: the Champion/sponsor is a senior manager who selects and sponsors projects, provides resources and removes barriers." },
      { t: "Green Belt", why: "Wrong: a Green Belt leads or supports a project part-time; it lacks the authority to remove organisational barriers." },
      { t: "Process owner", why: "Wrong: the process owner runs the process and takes over the improved process at closure." }
    ],
    answer: 1, ref: "Lesson 2.6"
  },
  {
    id: "D1-009", topic: "ss-overview", level: 2,
    q: "Which role is usually full-time, leads complex cross-functional projects and mentors Green Belts?",
    options: [
      { t: "Yellow Belt", why: "Wrong: a Yellow Belt is a team member with basic tool knowledge." },
      { t: "Champion", why: "Wrong: a Champion sponsors projects and removes barriers; it is a management role, not a full-time project leader." },
      { t: "Black Belt", why: "Correct: the Black Belt works full-time on improvement, leads larger projects and mentors Green Belts." },
      { t: "Process owner", why: "Wrong: the process owner manages day-to-day operations and owns the control plan after handoff." }
    ],
    answer: 2, ref: "Lesson 2.6"
  },
  {
    id: "D1-010", topic: "ss-overview", level: 2,
    q: "Which description best fits a Master Black Belt?",
    options: [
      { t: "A senior expert who trains and coaches the Belts", why: "Correct: the MBB is the programme's statistical and methodology expert, trainer and coach." },
      { t: "A part-time project leader working in their own area", why: "Wrong: that describes a Green Belt." },
      { t: "The manager who receives the improved process at closure", why: "Wrong: that is the process owner." },
      { t: "A team member who collects data and supports projects", why: "Wrong: that describes a Yellow Belt or team member." }
    ],
    answer: 0, ref: "Lesson 2.6"
  },
  {
    id: "D1-011", topic: "ss-overview", level: 2,
    q: "At the end of a DMAIC project, who should take ownership of the control plan and the improved process?",
    options: [
      { t: "The Black Belt who coached the project", why: "Wrong: the Belt moves on to new projects; keeping ownership with the Belt is a common reason gains fade." },
      { t: "The Master Black Belt", why: "Wrong: the MBB oversees the programme, not individual processes in daily operation." },
      { t: "The finance controller who validated the savings", why: "Wrong: finance validates benefits but does not run the process." },
      { t: "The process owner", why: "Correct: the process owner runs the process day to day, so the control and response plans are handed to them." }
    ],
    answer: 3, ref: "Lesson 2.6"
  },
  {
    id: "D1-012", topic: "ss-overview", level: 3,
    q: "Late deliveries (Y) are hurting a distributor. The manager proposes adding a daily report of late orders and a weekly review meeting, without changing anything else. What is the best Green Belt response?",
    options: [
      { t: "Agree: a daily report will make people try harder", why: "Wrong: pressure on an output does not change the causes; the system that produces lateness stays the same." },
      { t: "Measure Y and use data to find the vital Xs behind lateness", why: "Correct: Y = f(X) means lateness is driven by inputs (picking errors, carrier cut-offs, stock-outs, etc.); find and control those Xs." },
      { t: "Raise the delivery-time target so fewer orders count as late", why: "Wrong: moving the specification hides the problem from the metric but not from the customer." },
      { t: "Add a final inspection before each truck leaves", why: "Wrong: inspecting the output sorts problems but does not prevent them, and adds appraisal cost." }
    ],
    answer: 1, ref: "Lesson 1.1"
  },
  {
    id: "D1-013", topic: "ss-overview", level: 2,
    q: "A team has completed its charter, SIPOC and CTQs. Which set of deliverables belongs to the next DMAIC phase?",
    options: [
      { t: "Validated root causes and the list of vital Xs", why: "Wrong: these are Analyze deliverables, which come after Measure." },
      { t: "Control plan, response plan and handoff to the owner", why: "Wrong: these are Control deliverables at the end of the project." },
      { t: "Detailed process map, MSA and baseline performance", why: "Correct: after Define comes Measure, which maps the process, validates the measurement system and sets the baseline (including capability)." },
      { t: "Piloted solution with verified results", why: "Wrong: piloting solutions is an Improve deliverable." }
    ],
    answer: 2, ref: "Lesson 1.1"
  },

  // ---------- lean-basics ----------
  {
    id: "D1-014", topic: "lean-basics", level: 1,
    q: "Which Toyota engineer is most closely associated with developing the Toyota Production System, the basis of Lean?",
    options: [
      { t: "Kaoru Ishikawa", why: "Wrong: Ishikawa is known for the cause-and-effect (fishbone) diagram and quality circles." },
      { t: "Genichi Taguchi", why: "Wrong: Taguchi is known for the quality loss function and robust design." },
      { t: "Philip Crosby", why: "Wrong: Crosby is the American author of 'zero defects' and 'quality is free'." },
      { t: "Taiichi Ohno", why: "Correct: Taiichi Ohno built the Toyota Production System and defined the classic seven wastes; Shigeo Shingo added SMED and poka-yoke." }
    ],
    answer: 3, ref: "Web: asq.org"
  },
  {
    id: "D1-015", topic: "lean-basics", level: 1,
    q: "What is the correct order of the five Lean principles from Womack and Jones?",
    options: [
      { t: "Value, value stream, flow, pull, perfection", why: "Correct: first define value from the customer's view, map the value stream, make it flow, let the customer pull, then pursue perfection." },
      { t: "Value stream, value, pull, flow, perfection", why: "Wrong: value must be defined before you can map the stream that delivers it, and flow comes before pull." },
      { t: "Value, flow, value stream, perfection, pull", why: "Wrong: you map the value stream before creating flow, and perfection is the last, ongoing step." },
      { t: "Perfection, value, value stream, flow, pull", why: "Wrong: perfection is the continuing goal at the end, not the starting point." }
    ],
    answer: 0, ref: "Lesson 1.2"
  },
  {
    id: "D1-016", topic: "lean-basics", level: 1,
    q: "The term 'Lean production' was popularised by which book?",
    options: [
      { t: "Out of the Crisis", why: "Wrong: this is Deming's book on management and the 14 Points." },
      { t: "The Goal", why: "Wrong: Goldratt's novel introduced the Theory of Constraints, not the Lean label." },
      { t: "The Machine That Changed the World", why: "Correct: Womack, Jones and Roos (1990) studied Toyota and spread the word 'Lean' (coined by John Krafcik in 1988)." },
      { t: "The Toyota Way: 14 Management Principles", why: "Wrong: Liker's book (2004) describes Toyota's principles but came long after the word Lean was in use." }
    ],
    answer: 2, ref: "Web: asq.org"
  },
  {
    id: "D1-017", topic: "lean-basics", level: 2,
    q: "Which activity in an order-to-delivery process is value-added from the customer's point of view?",
    options: [
      { t: "Re-entering an order that was keyed incorrectly", why: "Wrong: fixing an error is correction (rework); the customer does not pay twice for the same step." },
      { t: "Assembling the product to the customer's order", why: "Correct: value-added work changes the form, fit or function the customer wants, is done right first time and the customer would pay for it." },
      { t: "Moving finished goods from the line to a warehouse", why: "Wrong: moving material does not change it; this is conveyance (transport) waste." },
      { t: "Holding the order until a manager signs it off", why: "Wrong: an approval queue is waiting; the product does not change while it waits." }
    ],
    answer: 1, ref: "Lesson 1.2"
  },
  {
    id: "D1-018", topic: "lean-basics", level: 2,
    q: "A final inspection step is required by a regulator. How is it best classified in value stream analysis?",
    options: [
      { t: "Value-added, because it protects the customer", why: "Wrong: inspection does not change the product's form, fit or function, so it is not value-added." },
      { t: "Pure waste, to be eliminated at once", why: "Wrong: it cannot simply be removed while the regulation requires it; it is necessary for now." },
      { t: "Overproduction, because it duplicates work", why: "Wrong: overproduction means making more, or earlier, than the customer needs." },
      { t: "Required non-value-added activity", why: "Correct: required inspection adds no customer value but must stay for now; minimise it and seek to make it unnecessary." }
    ],
    answer: 3, ref: "Lesson 1.2"
  },
  {
    id: "D1-019", topic: "lean-basics", level: 2,
    q: "Why is overproduction often called the worst of the seven wastes?",
    options: [
      { t: "It is the hardest waste for customers to notice", why: "Wrong: visibility to the customer is not the reason; overproduction is often very visible on the shop floor as stock." },
      { t: "It creates and hides other wastes", why: "Correct: making too much or too early generates inventory, handling, storage and waiting, and hides problems behind stock." },
      { t: "It always produces defective units", why: "Wrong: overproduced units can be perfectly good; the waste is that nobody needs them yet." },
      { t: "It is the only waste that involves machines", why: "Wrong: several wastes involve machines (waiting, overprocessing, defects)." }
    ],
    answer: 1, ref: "Lesson 1.2"
  },
  {
    id: "D1-020", topic: "lean-basics", level: 2,
    q: "In the IASSC list of seven wastes, what does 'Correction' refer to?",
    options: [
      { t: "Adjusting a stable process after each measurement", why: "Wrong: that is tampering, an SPC concept, not one of the seven wastes." },
      { t: "Updating procedures after a process change", why: "Wrong: updating documents is part of standard work, not a waste category." },
      { t: "Scrap and rework caused by defects", why: "Correct: Correction is IASSC's name for the waste of defects: making, finding and fixing errors." },
      { t: "Re-planning when customer orders change", why: "Wrong: schedule changes relate to demand variation (mura), not to the waste of correction." }
    ],
    answer: 2, ref: "Web: iassc.org"
  },
  {
    id: "D1-021", topic: "lean-basics", level: 2,
    q: "A forklift moves pallets from the paint shop to a remote store and back to assembly the next day. Which waste is this?",
    options: [
      { t: "Conveyance", why: "Correct: unnecessary movement of materials or products between places is conveyance (transport)." },
      { t: "Motion", why: "Wrong: motion is unnecessary movement of people at the workplace (reaching, bending, walking)." },
      { t: "Overprocessing", why: "Wrong: overprocessing is doing more work on the product than the customer needs." },
      { t: "Waiting", why: "Wrong: the pallets do wait in the store, but the activity described is the moving, which is conveyance." }
    ],
    answer: 0, ref: "Lesson 1.2"
  },
  {
    id: "D1-022", topic: "lean-basics", level: 1,
    q: "Many courses add an eighth waste to the seven from the Toyota Production System. What is it?",
    options: [
      { t: "Variation in customer demand", why: "Wrong: uneven demand is mura (unevenness), one of the 3 Ms, not the eighth waste." },
      { t: "Excess paperwork and forms", why: "Wrong: excess paperwork is usually classed as overprocessing or inventory." },
      { t: "Unplanned machine breakdowns", why: "Wrong: breakdowns cause waiting; they are not a separate waste category." },
      { t: "Unused employee talent", why: "Correct: unused people's skills and ideas is the later 'eighth waste' (the S in DOWNTIME); the IASSC BoK itself lists seven." }
    ],
    answer: 3, ref: "Lesson 1.2"
  },
  {
    id: "D1-023", topic: "lean-basics", level: 1,
    q: "Which is the correct sequence of 5S using the IASSC terms?",
    options: [
      { t: "Sort, Shine, Straighten, Standardize, Self-Discipline", why: "Wrong: Straighten (set in order) comes before Shine." },
      { t: "Sort, Straighten, Shine, Standardize, Self-Discipline", why: "Correct: Sort (seiri), Straighten (seiton), Shine (seiso), Standardize (seiketsu), Self-Discipline or Sustain (shitsuke)." },
      { t: "Straighten, Sort, Shine, Self-Discipline, Standardize", why: "Wrong: you sort out unneeded items before arranging what remains, and you standardise before sustaining." },
      { t: "Sort, Straighten, Standardize, Shine, Safety", why: "Wrong: Shine comes before Standardize, and Safety is a sixth S (6S), not part of 5S." }
    ],
    answer: 1, ref: "Lesson 6.3"
  },
  {
    id: "D1-024", topic: "lean-basics", level: 2,
    q: "A team attaches red tags to tools and materials whose need is unclear and moves them to a holding area. Which 5S step is this?",
    options: [
      { t: "Straighten", why: "Wrong: Straighten arranges the items that remain so each has a marked place." },
      { t: "Standardize", why: "Wrong: Standardize writes the rules and schedules so the first three Ss are done the same way every time." },
      { t: "Sort", why: "Correct: Sort separates needed from unneeded items; red tags flag doubtful items for a decision." },
      { t: "Shine", why: "Wrong: Shine is cleaning and inspecting the area and equipment." }
    ],
    answer: 2, ref: "Lesson 6.3"
  },
  {
    id: "D1-025", topic: "lean-basics", level: 2,
    q: "Shadow boards and floor markings giving 'a place for everything and everything in its place' belong to which 5S step?",
    options: [
      { t: "Straighten", why: "Correct: Straighten gives every needed item a labelled, logical location so it can be found and returned quickly." },
      { t: "Sort", why: "Wrong: Sort removes unneeded items; it comes before deciding where the needed ones go." },
      { t: "Self-Discipline", why: "Wrong: Self-Discipline (Sustain) is about keeping the habit through audits and leadership, not about laying out locations." },
      { t: "Shine", why: "Wrong: Shine is cleaning, which also reveals leaks and wear early." }
    ],
    answer: 0, ref: "Lesson 6.3"
  },
  {
    id: "D1-026", topic: "lean-basics", level: 2,
    q: "Which 5S step is generally the hardest to achieve and relies on audits, leadership attention and habit?",
    options: [
      { t: "Sort", why: "Wrong: Sort is a one-off clear-out that most teams complete quickly." },
      { t: "Shine", why: "Wrong: cleaning is easy to start; keeping it going is the problem addressed by the fifth S." },
      { t: "Straighten", why: "Wrong: laying out locations is a design task that is usually done once." },
      { t: "Self-Discipline (Sustain)", why: "Correct: making 5S a lasting habit is the hardest step; without it the workplace drifts back within weeks." }
    ],
    answer: 3, ref: "Lesson 6.3"
  },
  {
    id: "D1-027", topic: "lean-basics", level: 2,
    q: "Which statement best contrasts Lean with Six Sigma?",
    options: [
      { t: "Lean is for services and Six Sigma is for manufacturing", why: "Wrong: both are used in manufacturing and services alike." },
      { t: "Lean cuts waste and lead time; Six Sigma cuts variation", why: "Correct: Lean improves speed and flow by removing waste; Six Sigma reduces variation and defects with data; LSS combines them." },
      { t: "Lean relies on statistics; Six Sigma relies on visual tools", why: "Wrong: it is mostly the reverse; Six Sigma is the more statistical of the two." },
      { t: "Lean needs Black Belts; Six Sigma needs Kaizen events", why: "Wrong: belts belong to Six Sigma and Kaizen events to Lean." }
    ],
    answer: 1, ref: "Lesson 1.2"
  },
  {
    id: "D1-028", topic: "lean-basics", level: 3,
    q: "In a claims office, completed claims sit in a manager's in-tray for two days awaiting signature. They are then printed and carried to another building for filing. Which two wastes dominate?",
    options: [
      { t: "Overproduction and inventory", why: "Wrong: nothing is produced beyond demand; the claims are needed, they are just held up." },
      { t: "Motion and correction", why: "Wrong: no rework is described, and carrying documents between buildings moves the item, which is conveyance rather than motion." },
      { t: "Waiting and conveyance", why: "Correct: claims idle in the in-tray (waiting) and are then physically moved between buildings (conveyance or transport)." },
      { t: "Overprocessing and waiting", why: "Wrong: waiting is right, but printing for filing is a minor issue next to moving claims between buildings, which is conveyance." }
    ],
    answer: 2, ref: "Lesson 1.2"
  },

  // ---------- ss-metrics ----------
  {
    id: "D1-029", topic: "ss-metrics", level: 2,
    q: "A circuit board has three solder bridges and one missing component. How is it counted?",
    options: [
      { t: "Four defects and one defective unit", why: "Correct: each nonconformity is a defect (4), and a unit with one or more defects is one defective." },
      { t: "One defect and four defective units", why: "Wrong: this swaps the terms; there is only one unit, so it cannot be four defectives." },
      { t: "Four defects and four defective units", why: "Wrong: defectives count units, not nonconformities; one board is one defective however many defects it has." },
      { t: "One defect and one defective unit", why: "Wrong: each nonconformity is counted as a separate defect, giving four." }
    ],
    answer: 0, ref: "Lesson 1.1"
  },
  {
    id: "D1-030", topic: "ss-metrics", level: 3,
    q: "An inspection of 200 units finds 30 defects spread over 24 defective units. What is the DPU?",
    options: [
      { t: "0.12", why: "Wrong: 24 ÷ 200 = 0.12 is the proportion defective, which counts units, not defects." },
      { t: "1.25", why: "Wrong: 30 ÷ 24 = 1.25 is the average number of defects per defective unit, not per unit inspected." },
      { t: "0.80", why: "Wrong: 24 ÷ 30 = 0.80 divides defectives by defects, which has no meaning as a metric." },
      { t: "0.15", why: "Correct: DPU = defects ÷ units = 30 ÷ 200 = 0.15." }
    ],
    answer: 3, ref: "Lesson 2.5"
  },
  {
    id: "D1-031", topic: "ss-metrics", level: 3,
    q: "400 invoices are checked. Each has 12 fields that could be wrong, and 18 errors are found in total. What is the DPMO?",
    options: [
      { t: "45,000", why: "Wrong: 18 ÷ 400 = 0.045 is the DPU; multiplying it by 10⁶ ignores the 12 opportunities per invoice." },
      { t: "3,750", why: "Correct: opportunities = 400 × 12 = 4,800; DPO = 18 ÷ 4,800 = 0.00375; DPMO = 0.00375 × 1,000,000 = 3,750." },
      { t: "375", why: "Wrong: this is a factor-of-ten slip; 0.00375 × 10⁶ is 3,750, not 375." },
      { t: "0.00375", why: "Wrong: 0.00375 is the DPO (defects per opportunity); it must be multiplied by one million." }
    ],
    answer: 1, ref: "Lesson 2.5"
  },
  {
    id: "D1-032", topic: "ss-metrics", level: 3,
    q: "A process step receives 500 units. 440 pass inspection first time, 45 are reworked and then pass, and 15 are scrapped. What is the first-time yield (FTY) of the step?",
    options: [
      { t: "97.0%", why: "Wrong: (440 + 45) ÷ 500 = 97% is the final (traditional) yield, which counts reworked units as good and hides the rework." },
      { t: "90.7%", why: "Wrong: 440 ÷ 485 divides by the good output instead of the 500 units that entered the step." },
      { t: "88.0%", why: "Correct: FTY = units passing first time with no rework ÷ units entering = 440 ÷ 500 = 0.88 = 88%." },
      { t: "91.0%", why: "Wrong: 1 − 45 ÷ 500 = 91% counts only the rework as loss and forgets the 15 scrapped units." }
    ],
    answer: 2, ref: "Lesson 2.5"
  },
  {
    id: "D1-033", topic: "ss-metrics", level: 3,
    q: "A three-step process has first-time yields of 97%, 92% and 95%. What is the rolled throughput yield (RTY)?",
    options: [
      { t: "84.8%", why: "Correct: RTY = 0.97 × 0.92 × 0.95 = 0.8924 × 0.95 = 0.8478 ≈ 84.8%." },
      { t: "94.7%", why: "Wrong: this is the average of the three yields; RTY multiplies them because a unit must pass every step." },
      { t: "92.0%", why: "Wrong: this is only the worst step; the losses at the other steps also reduce RTY." },
      { t: "84.0%", why: "Wrong: 1 − (3% + 8% + 5%) adds the losses, which is only an approximation; the exact RTY is the product, 84.8%." }
    ],
    answer: 0, ref: "Lesson 2.5"
  },
  {
    id: "D1-034", topic: "ss-metrics", level: 2,
    q: "A line ships 98% of what it starts, yet its rolled throughput yield is only 70%. What best explains the gap?",
    options: [
      { t: "The RTY was calculated with the wrong formula", why: "Wrong: a large gap between final yield and RTY is normal when rework is common; it does not indicate a calculation error." },
      { t: "Most defects escape to the customer", why: "Wrong: escaped defects would lower customer quality, but final yield counts what ships, so it says nothing about escapes." },
      { t: "Scrap is high at the last step", why: "Wrong: high scrap would lower the 98% final yield too, so it cannot explain the gap." },
      { t: "Much of the output is reworked along the way", why: "Correct: final yield counts reworked units as good; RTY counts only first-pass units, so the gap reveals the hidden factory of rework." }
    ],
    answer: 3, ref: "Lesson 2.5"
  },
  {
    id: "D1-035", topic: "ss-metrics", level: 3,
    q: "A process has DPU = 0.2. Assuming defects follow a Poisson distribution, what is the expected first-time yield?",
    options: [
      { t: "80.0%", why: "Wrong: 1 − DPU is only an approximation for very small DPU; with Poisson, Y = e^(−DPU)." },
      { t: "18.1%", why: "Wrong: 1 − e^(−0.2) = 18.1% is the probability that a unit has at least one defect, the opposite of the yield." },
      { t: "81.9%", why: "Correct: Y = e^(−DPU) = e^(−0.2) = 0.8187 ≈ 81.9%, the probability of a unit having zero defects." },
      { t: "98.0%", why: "Wrong: this uses e^(−0.02), a decimal slip in the DPU." }
    ],
    answer: 2, ref: "Lesson 2.5"
  },
  {
    id: "D1-036", topic: "ss-metrics", level: 3,
    q: "10,000 units are inspected, each with 2 defect opportunities, and 124 defects are found. Using the standard conversion table with the 1.5σ shift, what is the approximate sigma level?",
    options: [
      { t: "3σ", why: "Wrong: 3σ corresponds to about 66,807 DPMO, roughly ten times worse than this process." },
      { t: "4σ", why: "Correct: DPMO = 124 ÷ (10,000 × 2) × 10⁶ = 6,200, very close to the 6,210 DPMO of 4σ in the shifted table." },
      { t: "5σ", why: "Wrong: 5σ corresponds to about 233 DPMO, far better than 6,200." },
      { t: "2.5σ", why: "Wrong: 2.5 is the long-term Z (4 − 1.5); the conventional sigma level reported with the table is the short-term 4σ." }
    ],
    answer: 1, ref: "Lesson 1.1"
  },
  {
    id: "D1-037", topic: "ss-metrics", level: 2,
    q: "Six Sigma quality is quoted as 3.4 DPMO. Which statement about this figure is correct?",
    options: [
      { t: "It is the defect rate of a process exactly ±6σ from the mean with no shift", why: "Wrong: without any shift ±6σ gives about 0.002 DPMO (two-sided), not 3.4." },
      { t: "It applies only to manufacturing processes", why: "Wrong: DPMO and sigma levels are used for any process with countable opportunities, including services." },
      { t: "It is the tail beyond 4.5σ, allowing a 1.5σ long-term mean shift", why: "Correct: 3.4 DPMO is the one-sided tail beyond 4.5σ, i.e. 6σ short-term minus the 1.5σ long-term shift." },
      { t: "It means 3.4 defective units per million produced", why: "Wrong: DPMO counts defects per million opportunities, not defective units per million units." }
    ],
    answer: 2, ref: "Lesson 1.1"
  },
  {
    id: "D1-038", topic: "ss-metrics", level: 1,
    q: "In the cost-of-quality model, the cost of inspecting, testing and auditing products is classified as:",
    options: [
      { t: "Prevention cost", why: "Wrong: prevention costs stop defects being made (training, planning, mistake-proofing)." },
      { t: "Appraisal cost", why: "Correct: appraisal costs measure conformance: inspection, testing, audits and gauge calibration." },
      { t: "Internal failure cost", why: "Wrong: internal failure costs are scrap, rework and re-inspection of defects found before shipment." },
      { t: "External failure cost", why: "Wrong: external failure costs arise after the customer receives the product (warranty, returns, complaints)." }
    ],
    answer: 1, ref: "Lesson 2.5"
  },
  {
    id: "D1-039", topic: "ss-metrics", level: 3,
    q: "Annual quality costs: operator training 20k, incoming and final inspection 50k, scrap 80k, rework 40k, warranty claims 110k. Using the ASQ split into cost of good quality and cost of poor quality, what is the cost of poor quality?",
    options: [
      { t: "300k", why: "Wrong: 300k is the total cost of quality; it includes prevention (20k) and appraisal (50k), which are costs of good quality." },
      { t: "190k", why: "Wrong: this adds only scrap and warranty and leaves out rework, which is also an internal failure cost." },
      { t: "120k", why: "Wrong: 120k is internal failure only (scrap + rework); warranty is an external failure cost and also counts." },
      { t: "230k", why: "Correct: COPQ = internal failure (80k + 40k) + external failure (110k) = 230k." }
    ],
    answer: 3, ref: "Web: asq.org"
  },
  {
    id: "D1-040", topic: "ss-metrics", level: 2,
    q: "A plant wants to lower its total cost of quality over the long run. Increasing spending in which category usually has the greatest effect?",
    options: [
      { t: "Prevention", why: "Correct: preventing defects (training, design, mistake-proofing) cuts failure costs, which are usually far larger, so total cost falls." },
      { t: "Appraisal", why: "Wrong: more inspection catches more defects internally but does not stop them being made, and adds cost." },
      { t: "Internal failure", why: "Wrong: internal failure is a result of defects, not something a plant would choose to spend more on." },
      { t: "External failure", why: "Wrong: external failure is the most expensive category; the aim is to shrink it, not to spend more on it." }
    ],
    answer: 0, ref: "Lesson 2.5"
  },
  {
    id: "D1-041", topic: "ss-metrics", level: 3,
    q: "A Pareto analysis of 250 complaints shows: wrong item 120, late delivery 60, damaged 40, missing paperwork 20, other 10. What cumulative percentage do the first two bars account for?",
    options: [
      { t: "48%", why: "Wrong: 120 ÷ 250 = 48% is the first bar only." },
      { t: "88%", why: "Wrong: (120 + 60 + 40) ÷ 250 = 88% is the cumulative percentage after three bars." },
      { t: "72%", why: "Correct: (120 + 60) ÷ 250 = 180 ÷ 250 = 0.72 = 72%." },
      { t: "80%", why: "Wrong: 80% is the rule-of-thumb share from the 80/20 principle, not the value in these data." }
    ],
    answer: 2, ref: "Lesson 2.3"
  },
  {
    id: "D1-042", topic: "ss-metrics", level: 2,
    q: "A Pareto chart of defect types shows all bars at roughly the same height. What should the team do next?",
    options: [
      { t: "Work on the tallest bar anyway, since it is still the largest", why: "Wrong: with no dominant category, the tallest bar offers little leverage; the chart is not separating vital few from trivial many." },
      { t: "Conclude the Pareto principle does not apply and abandon the analysis", why: "Wrong: a flat Pareto is a signal to look at the data another way, not to stop." },
      { t: "Combine all categories into one and track the total", why: "Wrong: merging categories loses the information needed to prioritise." },
      { t: "Re-stratify the data, e.g. by cost, shift, line or product", why: "Correct: a flat Pareto suggests the wrong stratification; slicing by another factor, or weighting by cost, often reveals the vital few." }
    ],
    answer: 3, ref: "Lesson 2.3"
  },
  {
    id: "D1-043", topic: "ss-metrics", level: 3,
    q: "A plant works two 8-hour shifts per day, each with 30 minutes of breaks. Customer demand is 1,200 units per day. What is the takt time?",
    options: [
      { t: "48 seconds", why: "Wrong: 57,600 s ÷ 1,200 = 48 s ignores the breaks; takt uses available time only." },
      { t: "45 seconds", why: "Correct: available time = 2 × (480 − 30) = 900 min = 54,000 s; takt = 54,000 ÷ 1,200 = 45 s per unit." },
      { t: "22.5 seconds", why: "Wrong: this uses only one shift's available time (27,000 s), while demand is per day." },
      { t: "1.33 seconds", why: "Wrong: 1,200 ÷ 900 = 1.33 is the required output rate in units per minute, the inverse of takt time." }
    ],
    answer: 1, ref: "Lesson 5.2"
  },
  {
    id: "D1-044", topic: "ss-metrics", level: 2,
    q: "The cycle time at the slowest step of a line is 55 seconds and the takt time is 45 seconds. What does this mean?",
    options: [
      { t: "Demand cannot be met at the current rate", why: "Correct: a step that needs longer per unit than takt cannot keep pace with demand; the bottleneck must be improved or capacity added." },
      { t: "The line will overproduce and build inventory", why: "Wrong: overproduction risk arises when cycle time is well below takt, not above it." },
      { t: "The line is balanced and needs no action", why: "Wrong: balance would mean every step's cycle time is close to, and not above, takt." },
      { t: "Takt time should be raised to 55 seconds", why: "Wrong: takt is set by customer demand and available time; it cannot be changed to suit the process." }
    ],
    answer: 0, ref: "Lesson 5.2"
  },
  {
    id: "D1-045", topic: "ss-metrics", level: 3,
    q: "A value stream map shows 45 minutes of value-added time in a total lead time of 15 hours. What is the process cycle efficiency?",
    options: [
      { t: "0.05%", why: "Wrong: 45 ÷ 15 ÷ 60 slips a unit conversion; 15 hours is 900 minutes, so the ratio is 45 ÷ 900." },
      { t: "95%", why: "Wrong: 95% is the share of time that is not value-added (855 ÷ 900)." },
      { t: "20%", why: "Wrong: 900 ÷ 45 = 20 inverts the ratio; it is not a percentage." },
      { t: "5%", why: "Correct: PCE = value-added time ÷ total lead time = 45 ÷ 900 = 0.05 = 5%." }
    ],
    answer: 3, ref: "Lesson 1.2"
  },

  // ---------- dfss ----------
  {
    id: "D1-046", topic: "dfss", level: 1,
    q: "What do the letters DMADV stand for?",
    options: [
      { t: "Define, Measure, Analyze, Develop, Validate", why: "Wrong: the fourth and fifth phases are Design and Verify." },
      { t: "Define, Measure, Analyze, Design, Verify", why: "Correct: DMADV is Define, Measure, Analyze, Design, Verify, a DFSS roadmap." },
      { t: "Design, Measure, Analyze, Deploy, Verify", why: "Wrong: DMADV starts with Define, like DMAIC, and has no Deploy phase." },
      { t: "Define, Model, Analyze, Design, Validate", why: "Wrong: the second phase is Measure and the last is Verify." }
    ],
    answer: 1, ref: "Lesson 1.3"
  },
  {
    id: "D1-047", topic: "dfss", level: 1,
    q: "Which of these is a DFSS roadmap rather than an improvement roadmap for an existing process?",
    options: [
      { t: "DMAIC", why: "Wrong: DMAIC improves an existing process; it is the core Six Sigma improvement method." },
      { t: "PDCA", why: "Wrong: PDCA is the Shewhart/Deming cycle for general continuous improvement." },
      { t: "IDOV", why: "Correct: IDOV (Identify, Design, Optimize, Validate) is a DFSS roadmap used to design new products." },
      { t: "SIPOC", why: "Wrong: SIPOC is a high-level process mapping tool, not a roadmap." }
    ],
    answer: 2, ref: "Lesson 1.3"
  },
  {
    id: "D1-048", topic: "dfss", level: 2,
    q: "When is a DFSS approach such as DMADV more appropriate than DMAIC?",
    options: [
      { t: "When an existing process has a few special causes to remove", why: "Wrong: removing causes in an existing process is classic DMAIC work." },
      { t: "When the team needs quick results within weeks", why: "Wrong: DFSS projects are usually longer, since they design something new." },
      { t: "When the root cause is already known", why: "Wrong: a known cause suggests a just-do-it fix or DMAIC, not a redesign." },
      { t: "For a new product or a full process redesign", why: "Correct: DFSS designs something new or redesigns a process whose current design limits capability." }
    ],
    answer: 3, ref: "Lesson 1.3"
  },
  {
    id: "D1-049", topic: "dfss", level: 2,
    q: "DMADV shares its first three phases with DMAIC. Which DMADV phases take the place of Improve and Control?",
    options: [
      { t: "Design and Verify", why: "Correct: DMADV designs the new process or product, then verifies with pilots and tests that it meets the CTQs." },
      { t: "Develop and Validate", why: "Wrong: these words are close in meaning but are not the DMADV phase names." },
      { t: "Optimize and Validate", why: "Wrong: these are the last two phases of IDOV." },
      { t: "Deploy and Monitor", why: "Wrong: these are not phases of any standard DFSS roadmap." }
    ],
    answer: 0, ref: "Lesson 1.3"
  },
  {
    id: "D1-050", topic: "dfss", level: 2,
    q: "Which tool is most used in DFSS to translate customer requirements into technical design requirements?",
    options: [
      { t: "Statistical process control chart", why: "Wrong: control charts monitor a running process for special causes." },
      { t: "Quality Function Deployment", why: "Correct: QFD's House of Quality links customer needs (whats) to technical requirements (hows) and sets design targets." },
      { t: "Pareto chart", why: "Wrong: a Pareto chart ranks problem categories by frequency or cost." },
      { t: "Multi-vari chart", why: "Wrong: multi-vari charts split variation in an existing process into families." }
    ],
    answer: 1, ref: "Lesson 1.3"
  }
]);
