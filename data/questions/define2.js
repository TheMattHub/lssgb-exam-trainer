// Pack "define2": questions for the topics whose pack is "define2" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. Topics: voc-ctq, project-select, pm-tools (bonus), teams (bonus).
QB.add([
  // ---------- voc-ctq ----------
  {
    id: "D2-001", topic: "voc-ctq", level: 1,
    q: "Which 'voice' captures the organisation's own needs, such as profit, cost, growth and compliance?",
    options: [
      { t: "Voice of the Customer (VOC)", why: "Wrong: VOC is what customers need and expect from the product or service." },
      { t: "Voice of the Business (VOB)", why: "Correct: VOB expresses the needs of the business itself: profitability, cost, growth, regulatory compliance and return on investment." },
      { t: "Voice of the Employee (VOE)", why: "Wrong: VOE is the needs and knowledge of the people who work in the process (engagement, safety, ideas)." },
      { t: "Voice of the Process (VOP)", why: "Wrong: VOP is what the process actually delivers, shown by its natural variation and control limits." }
    ],
    answer: 1, ref: "Lesson 2.2; Web: iassc.org GB BoK 1.1.5"
  },
  {
    id: "D2-002", topic: "voc-ctq", level: 1,
    q: "When a team compares the voice of the process with the voice of the customer, which pairing is correct?",
    options: [
      { t: "VOP = specification limits; VOC = control limits", why: "Wrong: this swaps them. Specification limits come from the customer; control limits come from the process data." },
      { t: "VOP = the project goal; VOC = the baseline", why: "Wrong: goal and baseline are charter metrics, not the two voices being compared." },
      { t: "VOP = control limits; VOC = specification limits", why: "Correct: control limits describe what the process actually does, specification limits describe what the customer requires. Capability compares the two." },
      { t: "VOP = complaint data; VOC = survey data", why: "Wrong: complaints and surveys are both sources of VOC; neither is the voice of the process." }
    ],
    answer: 2, ref: "Web: iassc.org GB BoK 1.1.5"
  },
  {
    id: "D2-003", topic: "voc-ctq", level: 2,
    q: "Customers of an IT help desk say 'you take forever to answer'. Which is the best CTQ derived from this comment?",
    options: [
      { t: "95% of calls answered within 30 seconds", why: "Correct: a CTQ is measurable, with a metric (answer time), a target and a limit, so it can be tracked and tested." },
      { t: "Improve the speed of the help desk", why: "Wrong: this restates the need. It has no metric, target or limit, so it is not yet a CTQ." },
      { t: "Hire two more help-desk agents", why: "Wrong: this is a solution. A CTQ states the customer requirement, not how to meet it." },
      { t: "Customers want a responsive service", why: "Wrong: this is the customer need (the top of the CTQ tree), still too vague to measure." }
    ],
    answer: 0, ref: "Lesson 2.2"
  },
  {
    id: "D2-004", topic: "voc-ctq", level: 1,
    q: "A CTQ tree breaks a customer statement down from general to specific. What is the usual order of its levels?",
    options: [
      { t: "CTQ → driver → need", why: "Wrong: this runs from specific to general, the reverse of how the tree is built." },
      { t: "Driver → need → CTQ", why: "Wrong: drivers are derived from the need, so the need comes first." },
      { t: "Need → CTQ → driver", why: "Wrong: the measurable CTQ is the last, most specific level, not the middle one." },
      { t: "Need → driver → CTQ", why: "Correct: start from the broad customer need, split it into quality drivers, then turn each driver into a measurable CTQ (performance requirement)." }
    ],
    answer: 3, ref: "Lesson 2.2"
  },
  {
    id: "D2-005", topic: "voc-ctq", level: 2,
    q: "Which of the following is NOT part of a fully developed CTQ?",
    options: [
      { t: "The output characteristic and its metric", why: "Wrong: a CTQ needs a defined characteristic and how it is measured (the Y metric)." },
      { t: "The suspected root cause of poor performance", why: "Correct: root causes are found in Analyze. A CTQ states the requirement (characteristic, metric, target, limits), not why it is missed." },
      { t: "A target value", why: "Wrong: a CTQ includes the target the customer wants." },
      { t: "Specification or tolerance limits", why: "Wrong: a CTQ includes the limits beyond which the output is a defect." }
    ],
    answer: 1, ref: "Lesson 2.2"
  },
  {
    id: "D2-006", topic: "voc-ctq", level: 1,
    q: "In the Kano model, which category describes a feature customers take for granted: its absence causes strong dissatisfaction, but its presence adds little satisfaction?",
    options: [
      { t: "Attractive (delighter)", why: "Wrong: delighters are unexpected; their presence pleases, their absence does not disappoint." },
      { t: "One-dimensional (performance)", why: "Wrong: for performance features satisfaction rises steadily the more of them you deliver." },
      { t: "Must-be (basic)", why: "Correct: basic needs are expected and rarely voiced. Meeting them only avoids dissatisfaction, e.g. clean sheets in a hotel room." },
      { t: "Indifferent", why: "Wrong: indifferent features make no difference to satisfaction either way." }
    ],
    answer: 2, ref: "Web: asq.org (Kano model)"
  },
  {
    id: "D2-007", topic: "voc-ctq", level: 2,
    q: "Free Wi-Fi in hotel rooms once surprised guests; today guests complain if it is missing. What does the Kano model say about this change?",
    options: [
      { t: "Delighters become expected basic needs over time", why: "Correct: Kano categories are not fixed. Yesterday's attractive feature becomes today's must-be as competitors copy it." },
      { t: "The feature was misclassified, because Kano categories never change", why: "Wrong: Kano categories do drift over time; this migration is one of the model's main lessons." },
      { t: "It has become a reverse feature that guests would rather not have", why: "Wrong: a reverse feature lowers satisfaction when present; guests here want Wi-Fi." },
      { t: "It has become indifferent, so the hotel can safely remove it", why: "Wrong: guests complain when it is missing, which is the mark of a must-be need, not an indifferent one." }
    ],
    answer: 0, ref: "Web: asq.org (Kano model)"
  },
  {
    id: "D2-008", topic: "voc-ctq", level: 2,
    q: "For car buyers, satisfaction rises steadily the better the fuel economy, and falls steadily the worse it is. Which Kano category fits?",
    options: [
      { t: "Must-be (basic)", why: "Wrong: improving a basic need beyond 'present' adds little satisfaction; here every extra unit adds satisfaction." },
      { t: "Attractive (delighter)", why: "Wrong: buyers expect and ask for good fuel economy, so it is not an unexpected delighter." },
      { t: "Indifferent", why: "Wrong: an indifferent feature does not change satisfaction at all." },
      { t: "One-dimensional (performance)", why: "Correct: performance needs are spoken and linear: more is better, less is worse." }
    ],
    answer: 3, ref: "Web: asq.org (Kano model)"
  },
  {
    id: "D2-009", topic: "voc-ctq", level: 2,
    q: "Which of these is a reactive source of Voice of the Customer data?",
    options: [
      { t: "A focus group run for the project", why: "Wrong: focus groups are proactive; the team initiates contact to gather information." },
      { t: "Warranty claims and product returns", why: "Correct: reactive sources arrive whether or not the team asks, such as complaints, returns and warranty claims." },
      { t: "A web survey sent to recent buyers", why: "Wrong: a survey is proactive; the team designs it and reaches out to customers." },
      { t: "One-to-one customer interviews", why: "Wrong: interviews are proactive, targeted contact initiated by the team." }
    ],
    answer: 1, ref: "Lesson 2.2"
  },
  {
    id: "D2-010", topic: "voc-ctq", level: 2,
    q: "A team has 150 free-text comments from a customer survey and wants to sort them into a few natural themes. Which tool fits best?",
    options: [
      { t: "Pareto chart", why: "Wrong: a Pareto chart ranks categories that already exist by count; it does not create the categories from text." },
      { t: "CTQ tree", why: "Wrong: a CTQ tree turns one need into measurable requirements; it is used after the themes are known." },
      { t: "Affinity diagram", why: "Correct: an affinity diagram groups a large amount of verbal data (ideas, comments) into related categories with header cards." },
      { t: "Scatter plot", why: "Wrong: a scatter plot shows the relation between two continuous variables, not text comments." }
    ],
    answer: 2, ref: "Lesson 2.4"
  },
  {
    id: "D2-011", topic: "voc-ctq", level: 1,
    q: "In a Quality Function Deployment House of Quality, what does the triangular 'roof' show?",
    options: [
      { t: "The importance weight of each customer requirement", why: "Wrong: importance weights sit with the customer requirements on the left side (or in the planning matrix)." },
      { t: "The relationships between customer requirements and technical requirements", why: "Wrong: that is the central relationship matrix, the body of the house." },
      { t: "Competitor ratings for each customer requirement", why: "Wrong: competitive benchmarking appears in the planning matrix on the right." },
      { t: "Correlations among the technical requirements themselves", why: "Correct: the roof shows where improving one technical requirement helps or hurts another, revealing trade-offs." }
    ],
    answer: 3, ref: "Lesson 2.2"
  },
  {
    id: "D2-012", topic: "voc-ctq", level: 3,
    q: "A team needs VOC from 8 key business accounts. The issues are complex and commercially sensitive, accounts are competitors of each other, and the team must ask follow-up questions. Which method is most suitable?",
    options: [
      { t: "One-to-one interviews", why: "Correct: interviews handle complex questions, allow probing and clarification, and keep sensitive answers private. The small number of accounts keeps the cost manageable." },
      { t: "A web survey", why: "Wrong: a web survey is cheap and wide-reaching but cannot clarify or probe answers, which this case needs." },
      { t: "A focus group of all 8 accounts", why: "Wrong: putting competitors in one room inhibits open discussion of sensitive issues." },
      { t: "Analysis of complaint records", why: "Wrong: complaints are reactive data; they cannot answer new questions or explore needs that were never raised." }
    ],
    answer: 0, ref: "Lesson 2.2"
  },
  {
    id: "D2-013", topic: "voc-ctq", level: 2,
    q: "Which is the best example of Voice of the Employee (VOE) data?",
    options: [
      { t: "Monthly profit margin of the product line", why: "Wrong: margin is a business need, so it belongs to the Voice of the Business." },
      { t: "Operators' safety concerns from a shop-floor survey", why: "Correct: VOE captures the needs and know-how of the people doing the work, such as safety, engagement and ideas." },
      { t: "Control chart of cycle time at the packing step", why: "Wrong: a control chart shows what the process delivers, which is the Voice of the Process." },
      { t: "Customer ratings collected after delivery", why: "Wrong: ratings from customers are Voice of the Customer data." }
    ],
    answer: 1, ref: "Web: iassc.org GB BoK 1.1.5"
  },
  {
    id: "D2-014", topic: "voc-ctq", level: 3,
    q: "In a House of Quality, customer requirements have importance weights A = 5, B = 3, C = 2. The technical requirement 'film thickness' has relationship scores of 1 with A, 9 with B and 3 with C. What is its technical importance score?",
    options: [
      { t: "13", why: "Wrong: 1 + 9 + 3 = 13 adds the relationship scores without weighting them by customer importance." },
      { t: "32", why: "Wrong: 5 × 1 + 3 × 9 = 32 leaves out requirement C (2 × 3 = 6)." },
      { t: "38", why: "Correct: Σ(weight × relationship) = 5 × 1 + 3 × 9 + 2 × 3 = 5 + 27 + 6 = 38." },
      { t: "27", why: "Wrong: 3 × 9 = 27 counts only the strongest relationship (with B); every requirement's weight × score must be summed." }
    ],
    answer: 2, ref: "Lesson 2.2"
  },

  // ---------- project-select ----------
  {
    id: "D2-015", topic: "project-select", level: 1,
    q: "Which item belongs in a good problem statement?",
    options: [
      { t: "The suspected cause of the problem", why: "Wrong: a problem statement must not assume a cause; finding causes is the job of Analyze." },
      { t: "The solution the team plans to implement", why: "Wrong: naming a solution in Define jumps to conclusions and closes off the analysis." },
      { t: "The person or department responsible", why: "Wrong: a problem statement attaches no blame; it describes the process gap." },
      { t: "The size of the gap against a baseline", why: "Correct: a problem statement says what, where, when and how big, quantified with baseline data." }
    ],
    answer: 3, ref: "Lesson 2.3"
  },
  {
    id: "D2-016", topic: "project-select", level: 2,
    q: "Which is the best problem statement for a Six Sigma charter?",
    options: [
      { t: "Since January, 12% of Milan invoices had pricing errors (target 2%), costing €180k a year.", why: "Correct: it states what, where, since when and how big, against a target, with no cause or solution." },
      { t: "Invoice errors at Milan are high because new staff have not been trained on the pricing rules.", why: "Wrong: it assumes a cause before any data analysis, and does not quantify the gap." },
      { t: "Milan needs a new ERP pricing module so that invoices stop going out with wrong prices.", why: "Wrong: it proposes a solution. A problem statement describes the gap, not the fix." },
      { t: "Invoicing quality at the Milan site is poor, and customers are unhappy with how it is done.", why: "Wrong: it is vague, with no metric, baseline, time frame or cost." }
    ],
    answer: 0, ref: "Lesson 2.3"
  },
  {
    id: "D2-017", topic: "project-select", level: 2,
    q: "Which goal statement best meets the SMART criteria?",
    options: [
      { t: "Eliminate every invoice error as soon as possible.", why: "Wrong: zero errors is rarely attainable, and 'as soon as possible' is not time-bound." },
      { t: "Reduce Milan invoice pricing errors from 12% to 3% by 30 June.", why: "Correct: specific (pricing errors, Milan), measurable (12% → 3%), realistic, relevant to the problem and time-bound." },
      { t: "Significantly improve invoice accuracy during this year.", why: "Wrong: 'significantly' is not measurable and there is no baseline or target." },
      { t: "Install automatic price checks in the ERP by June.", why: "Wrong: this is a solution or task, not a goal for the output Y." }
    ],
    answer: 1, ref: "Lesson 2.3"
  },
  {
    id: "D2-018", topic: "project-select", level: 1,
    q: "Which of these is NOT normally part of a Define-phase project charter?",
    options: [
      { t: "Business case", why: "Wrong: the business case (why this project, why now) is a core charter element." },
      { t: "Scope with in-scope and out-of-scope items", why: "Wrong: scope boundaries are a core charter element." },
      { t: "Validated root causes", why: "Correct: root causes are validated in Analyze. At charter time they are unknown; if they were known, a DMAIC project would not be needed." },
      { t: "Milestones and team members", why: "Wrong: the charter lists the team, roles and key milestones (tollgate dates)." }
    ],
    answer: 2, ref: "Lesson 2.3"
  },
  {
    id: "D2-019", topic: "project-select", level: 3,
    q: "A Green Belt's draft charter covers 'all order-to-cash processes in all 14 countries', with a six-month deadline and one part-time team. What should the champion advise?",
    options: [
      { t: "Keep the scope as it is; a broad scope makes the savings larger.", why: "Wrong: an over-broad scope ('boiling the ocean') is a classic reason projects stall and miss their deadline." },
      { t: "Narrow it to one process and region; list the rest out of scope.", why: "Correct: a manageable scope fits the team and time frame. The out-of-scope list sets boundaries and guards against scope creep; other areas can become later projects." },
      { t: "Drop the deadline so the team can cover everything.", why: "Wrong: a charter goal must be time-bound; removing the deadline hides the scoping problem." },
      { t: "Leave the scope open and set it after the Analyze phase.", why: "Wrong: scope is set in Define. Without it, data collection in Measure has no boundaries." }
    ],
    answer: 1, ref: "Lesson 2.3"
  },
  {
    id: "D2-020", topic: "project-select", level: 1,
    q: "What is a project's primary metric?",
    options: [
      { t: "The output (Y) the project must improve, with baseline and target", why: "Correct: the primary metric is the Y in the goal statement; success is judged on it." },
      { t: "A measure watched to make sure the improvement does not harm another result", why: "Wrong: that is a secondary (consequential) metric." },
      { t: "The total cost of running the project team", why: "Wrong: project cost is part of the financial evaluation, not the primary performance metric." },
      { t: "The input variable (X) that the team believes drives the problem", why: "Wrong: Xs are identified and verified later; the primary metric is an output Y." }
    ],
    answer: 0, ref: "Lesson 2.3; Web: iassc.org GB BoK 1.3.2"
  },
  {
    id: "D2-021", topic: "project-select", level: 2,
    q: "A call-centre project aims to cut average call handling time. Which is the most useful secondary (consequential) metric to track?",
    options: [
      { t: "Average call handling time per agent", why: "Wrong: this is the primary metric itself, just split by agent." },
      { t: "Number of agents trained in Six Sigma", why: "Wrong: it measures project activity, not a possible side effect on the process." },
      { t: "Number of calls received per day", why: "Wrong: incoming volume is demand, not a result the project might harm." },
      { t: "First-call resolution rate (repeat calls)", why: "Correct: rushing calls could leave issues unsolved and drive repeat calls. The secondary metric guards against improving the primary at another result's expense." }
    ],
    answer: 3, ref: "Lesson 2.3"
  },
  {
    id: "D2-022", topic: "project-select", level: 1,
    q: "Which of these is a hard saving?",
    options: [
      { t: "Higher customer satisfaction scores", why: "Wrong: real, but not directly visible on the P&L, so it is a soft benefit." },
      { t: "Avoiding a cost that was planned but not yet spent", why: "Wrong: cost avoidance is normally classed as a soft saving; no existing cost goes down." },
      { t: "Lower scrap cost on the profit and loss statement", why: "Correct: hard savings show up on the P&L as lower cost or higher revenue, e.g. less scrap, material, labour or overtime." },
      { t: "Engineer hours freed up and moved to other work", why: "Wrong: freed capacity without a cost reduction is a soft saving." }
    ],
    answer: 2, ref: "Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D2-023", topic: "project-select", level: 3,
    q: "A project reports these yearly results: scrap cost down €50,000; overtime pay down €20,000; a planned €100,000 machine purchase no longer needed; 300 engineer hours freed and redeployed (no headcount change). What are the hard savings?",
    options: [
      { t: "€70,000", why: "Correct: only scrap (€50,000) and overtime (€20,000) reduce actual spending on the P&L. The avoided purchase is cost avoidance and the freed hours are capacity, both soft." },
      { t: "€170,000", why: "Wrong: this counts the avoided machine purchase, which is cost avoidance (soft): no existing budget line goes down." },
      { t: "€50,000", why: "Wrong: lower overtime pay is also a real P&L reduction, so it is a hard saving too." },
      { t: "€120,000", why: "Wrong: this adds the scrap saving to the avoided purchase and leaves out overtime; the avoided purchase is soft." }
    ],
    answer: 0, ref: "Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D2-024", topic: "project-select", level: 3,
    q: "A project costs €40,000 and delivers €100,000 of savings in its first year. Using ROI = (savings − cost) ÷ cost, what is the first-year ROI?",
    options: [
      { t: "40%", why: "Wrong: this is cost ÷ savings (40,000 ÷ 100,000), the formula turned upside down." },
      { t: "250%", why: "Wrong: this is savings ÷ cost (100,000 ÷ 40,000); it forgets to subtract the cost first." },
      { t: "60%", why: "Wrong: this is the net benefit divided by the savings (60,000 ÷ 100,000), not by the cost." },
      { t: "150%", why: "Correct: (100,000 − 40,000) ÷ 40,000 = 60,000 ÷ 40,000 = 1.5 = 150%." }
    ],
    answer: 3, ref: "Lesson 2.1; Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D2-025", topic: "project-select", level: 3,
    q: "A solution needs a one-off investment of €75,000. It saves €50,000 a year but adds €10,000 a year of running cost. What is the simple payback period?",
    options: [
      { t: "1.5 years", why: "Wrong: 75,000 ÷ 50,000 ignores the €10,000 yearly running cost." },
      { t: "1.25 years", why: "Wrong: 75,000 ÷ 60,000 adds the running cost to the savings instead of subtracting it." },
      { t: "1.875 years", why: "Correct: net annual saving = 50,000 − 10,000 = 40,000; payback = 75,000 ÷ 40,000 = 1.875 years (22.5 months)." },
      { t: "0.53 years", why: "Wrong: 40,000 ÷ 75,000 divides the saving by the investment, the inverse of payback." }
    ],
    answer: 2, ref: "Lesson 2.1; Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D2-026", topic: "project-select", level: 3,
    q: "A project costs €100,000 now and saves €60,000 at the end of year 1 and €60,000 at the end of year 2. At a 10% discount rate, what is the NPV and the decision?",
    options: [
      { t: "+€20,000; accept", why: "Wrong: 120,000 − 100,000 ignores the time value of money; future savings must be discounted." },
      { t: "+€4,132; accept", why: "Correct: 60,000 ÷ 1.1 = 54,545; 60,000 ÷ 1.1² = 49,587; 54,545 + 49,587 − 100,000 = +4,132. NPV > 0, so accept." },
      { t: "−€4,132; reject", why: "Wrong: the sign is reversed. Discounted savings (104,132) exceed the cost, so NPV is positive." },
      { t: "+€9,091; accept", why: "Wrong: this discounts both savings by one year only (2 × 54,545 − 100,000); year 2 must be divided by 1.1² = 1.21." }
    ],
    answer: 1, ref: "Lesson 2.1; Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D2-027", topic: "project-select", level: 2,
    q: "Which statement about financial evaluation methods is true?",
    options: [
      { t: "Simple payback period accounts for the time value of money", why: "Wrong: simple payback uses undiscounted cash flows, and also ignores cash flows after the payback point." },
      { t: "A project with negative NPV should be accepted if its payback is short", why: "Wrong: negative NPV means the project destroys value at the required rate of return; a quick payback does not change that." },
      { t: "IRR is the discount rate at which the NPV equals zero", why: "Correct: by definition, IRR makes discounted inflows equal to the investment. Accept if IRR exceeds the required rate (hurdle rate)." },
      { t: "NPV ignores all cash flows that arrive after the payback point", why: "Wrong: that is a weakness of payback. NPV discounts and includes every cash flow over the project's life." }
    ],
    answer: 2, ref: "Lesson 2.1; Web: iassc.org GB BoK 1.3.3"
  },
  {
    id: "D2-028", topic: "project-select", level: 3,
    q: "Stakeholder analysis shows the warehouse manager has high influence over the process and is strongly against the project. What should the Green Belt do?",
    options: [
      { t: "Leave the manager off the communication plan to avoid conflict.", why: "Wrong: ignoring a high-influence opponent lets resistance grow and can block the project later." },
      { t: "Ask the champion to replace the manager before the project starts.", why: "Wrong: this is heavy-handed and damages trust. The champion helps remove barriers, but engagement comes first." },
      { t: "Meet the manager early, learn the concerns and plan how to win support.", why: "Correct: stakeholder analysis compares current and required support; high-influence resisters need early, targeted engagement and communication." },
      { t: "Proceed as planned and share the results once the project is closed.", why: "Wrong: telling a key stakeholder only at the end invites rejection of the solution and failure to sustain it." }
    ],
    answer: 2, ref: "Lesson 2.1"
  },
  {
    id: "D2-029", topic: "project-select", level: 2,
    q: "Which candidate is best suited to a DMAIC Green Belt project?",
    options: [
      { t: "Install a software patch that IT has already tested and approved", why: "Wrong: the solution is known, so it is a 'just do it' task, not a DMAIC project." },
      { t: "Late shipments at an existing warehouse, measured daily, cause unknown", why: "Correct: an existing process with a measurable problem and an unknown root cause and solution is the classic DMAIC case." },
      { t: "Design a new product line for a market the company has never served", why: "Wrong: there is no existing process to improve; new designs suit DFSS (DMADV)." },
      { t: "Decide whether to open a sales office in a new country", why: "Wrong: this is a strategic business decision, not the improvement of a repeatable process." }
    ],
    answer: 1, ref: "Lesson 2.1"
  },
  {
    id: "D2-030", topic: "project-select", level: 1,
    q: "Who normally approves (signs off) a Six Sigma project charter?",
    options: [
      { t: "The champion or sponsor", why: "Correct: the champion or sponsor owns the project for the business, approves the charter and provides resources." },
      { t: "The Green Belt who drafted it", why: "Wrong: the Green Belt usually writes the charter but does not approve it." },
      { t: "A Yellow Belt team member", why: "Wrong: team members contribute to the project; they do not authorise it." },
      { t: "The external customer", why: "Wrong: the customer's needs shape the charter through VOC, but approval is an internal management decision." }
    ],
    answer: 0, ref: "Lesson 2.3"
  },
  {
    id: "D2-031", topic: "project-select", level: 2,
    q: "A project closed claiming €200,000 a year of savings. What is the best way to capture and confirm these benefits?",
    options: [
      { t: "Accept the Green Belt's savings estimate made in the Define phase", why: "Wrong: the Define estimate is a forecast; benefits must be confirmed with actual results." },
      { t: "Survey the team on how much they think was saved", why: "Wrong: opinions are not evidence; savings must be based on measured data." },
      { t: "Report the first good week's result multiplied by 52", why: "Wrong: one week may be unrepresentative; benefits must be tracked over a longer period." },
      { t: "Track results against the validated baseline, with finance sign-off", why: "Correct: finance validates the baseline and the savings, and results are tracked after closure (often for 12 months) to confirm the gain is real and sustained." }
    ],
    answer: 3, ref: "Web: iassc.org GB BoK 1.3.3"
  },

  // ---------- pm-tools (bonus) ----------
  {
    id: "D2-032", topic: "pm-tools", level: 3,
    q: "For a task, the optimistic estimate is 4 days, the most likely 7 days and the pessimistic 16 days. What is the PERT expected duration?",
    options: [
      { t: "9 days", why: "Wrong: (4 + 7 + 16) ÷ 3 = 9 is the simple average; PERT weights the most likely value by 4." },
      { t: "7 days", why: "Wrong: 7 is the most likely estimate alone; PERT also uses the optimistic and pessimistic values." },
      { t: "2 days", why: "Wrong: (16 − 4) ÷ 6 = 2 is the PERT standard deviation, not the expected time." },
      { t: "8 days", why: "Correct: tₑ = (O + 4M + P) ÷ 6 = (4 + 28 + 16) ÷ 6 = 48 ÷ 6 = 8 days." }
    ],
    answer: 3, ref: "Lesson 2.3"
  },
  {
    id: "D2-033", topic: "pm-tools", level: 3,
    q: "Activities (days): A = 3, start. B = 5, after A. C = 2, after A. D = 4, after C. E = 3, after both B and D. What is the project duration, and how much slack does B have?",
    options: [
      { t: "11 days; B has no slack", why: "Wrong: A-B-E = 11 is the shorter path. The longer path A-C-D-E = 12 sets the duration." },
      { t: "12 days; B has 1 day of slack", why: "Correct: A-B-E = 3 + 5 + 3 = 11; A-C-D-E = 3 + 2 + 4 + 3 = 12. The critical path is A-C-D-E (12 days), so B can slip 12 − 11 = 1 day." },
      { t: "17 days; B has 1 day of slack", why: "Wrong: 17 adds every activity, but B runs in parallel with C and D." },
      { t: "12 days; B has no slack", why: "Wrong: the duration is right, but B is not on the critical path, so it has 1 day of slack." }
    ],
    answer: 1, ref: "Lesson 2.3"
  },
  {
    id: "D2-034", topic: "pm-tools", level: 1,
    q: "Which statement about the critical path is true?",
    options: [
      { t: "The longest path in the network; its activities have zero slack", why: "Correct: the longest path sets the project duration; any delay on it delays the whole project." },
      { t: "It is the shortest path, showing the fastest way to finish", why: "Wrong: the project cannot finish before its longest path does." },
      { t: "It contains the activities the sponsor rates most important", why: "Wrong: 'critical' refers to timing (zero slack), not to business importance." },
      { t: "Its activities can be delayed freely if resources are short", why: "Wrong: activities off the critical path have slack; those on it have none." }
    ],
    answer: 0, ref: "Lesson 2.3"
  },
  {
    id: "D2-035", topic: "pm-tools", level: 2,
    q: "Which of these is NOT one of the seven management and planning tools?",
    options: [
      { t: "Affinity diagram", why: "Wrong: the affinity diagram is one of the seven management and planning tools." },
      { t: "Process decision program chart (PDPC)", why: "Wrong: PDPC is one of the seven management and planning tools." },
      { t: "Interrelationship digraph", why: "Wrong: the interrelationship diagram is one of the seven management and planning tools." },
      { t: "Cause-and-effect (fishbone) diagram", why: "Correct: the fishbone is one of the seven basic quality tools. The seven M&P tools are affinity, interrelationship digraph, tree, matrix, prioritisation matrix, PDPC and activity network diagram." }
    ],
    answer: 3, ref: "Lesson 2.4"
  },
  {
    id: "D2-036", topic: "pm-tools", level: 2,
    q: "Before rolling out a new process, the team wants to map what could go wrong at each step of the plan and prepare a countermeasure for each. Which tool fits?",
    options: [
      { t: "Affinity diagram", why: "Wrong: an affinity diagram groups ideas into themes; it does not chart a plan and its contingencies." },
      { t: "Matrix diagram", why: "Wrong: a matrix diagram shows the strength of relationships between two or more lists." },
      { t: "Process decision program chart (PDPC)", why: "Correct: PDPC breaks a plan into steps, lists what could go wrong at each, and attaches contingency actions." },
      { t: "Interrelationship digraph", why: "Wrong: it maps cause-and-effect links among issues to find key drivers, not contingencies for a plan." }
    ],
    answer: 2, ref: "Lesson 2.4"
  },
  {
    id: "D2-037", topic: "pm-tools", level: 1,
    q: "In a RACI chart, how many people should be 'Accountable' for each task?",
    options: [
      { t: "At least two, so there is a back-up", why: "Wrong: shared accountability blurs ownership; back-ups are handled through Responsible roles." },
      { t: "Exactly one", why: "Correct: one person owns the outcome and signs off. Several people can be Responsible (do the work), Consulted or Informed." },
      { t: "Everyone who is Responsible for it", why: "Wrong: Responsible (does the work) and Accountable (owns the result) are separate roles." },
      { t: "None, if the task is low risk", why: "Wrong: every task needs an owner, whatever its risk." }
    ],
    answer: 1, ref: "Web: pmi.org (responsibility assignment matrix)"
  },

  // ---------- teams (bonus) ----------
  {
    id: "D2-038", topic: "teams", level: 1,
    q: "What is the correct order of Tuckman's stages of team development?",
    options: [
      { t: "Forming, norming, storming, performing, adjourning", why: "Wrong: conflict (storming) comes before the team agrees its norms (norming)." },
      { t: "Storming, forming, norming, performing, adjourning", why: "Wrong: a team must form before it can storm." },
      { t: "Forming, storming, norming, performing, adjourning", why: "Correct: Tuckman's model runs forming → storming → norming → performing, with adjourning added later for when the team disbands." },
      { t: "Forming, storming, performing, norming, adjourning", why: "Wrong: a team agrees its norms before it reaches high performance." }
    ],
    answer: 2, ref: "Lesson 2.6"
  },
  {
    id: "D2-039", topic: "teams", level: 2,
    q: "Three weeks in, team members argue about the approach, resist tasks and question the team leader's authority. Which stage is the team in?",
    options: [
      { t: "Storming", why: "Correct: conflict, power struggles and challenges to authority mark storming." },
      { t: "Forming", why: "Wrong: forming is polite and uncertain, with members relying on the leader rather than challenging them." },
      { t: "Norming", why: "Wrong: in norming the team agrees on roles and ground rules and cooperation grows." },
      { t: "Adjourning", why: "Wrong: adjourning happens when the work is finished and the team disbands." }
    ],
    answer: 0, ref: "Lesson 2.6"
  },
  {
    id: "D2-040", topic: "teams", level: 2,
    q: "After early disagreements, a team agrees on ground rules and roles, and members start to support each other. Which stage is this?",
    options: [
      { t: "Performing", why: "Wrong: performing is high, self-directed productivity; this team is still settling how it works." },
      { t: "Storming", why: "Wrong: storming is the conflict phase this team has just left." },
      { t: "Forming", why: "Wrong: forming comes before the disagreements, when members are still getting to know each other." },
      { t: "Norming", why: "Correct: agreeing norms, roles and expectations, with growing cooperation and group identity, is norming." }
    ],
    answer: 3, ref: "Lesson 2.6"
  },
  {
    id: "D2-041", topic: "teams", level: 3,
    q: "A team agrees quickly with every proposal from its senior member. Nobody raises doubts, and data that contradict the plan are brushed aside. What should the Green Belt do?",
    options: [
      { t: "Let the senior member decide alone to save meeting time.", why: "Wrong: this deepens the problem by removing the little challenge left." },
      { t: "Name a devil's advocate and collect ideas anonymously first.", why: "Correct: these are signs of groupthink. A devil's advocate and anonymous or silent idea generation bring dissent and data back into decisions." },
      { t: "Hold more meetings until everyone feels comfortable.", why: "Wrong: more meetings do not help if the same pressure to agree remains." },
      { t: "Treat the fast agreement as proof the team is performing.", why: "Wrong: performing teams debate on data; agreement without challenge is a warning sign." }
    ],
    answer: 1, ref: "Lesson 2.6"
  },
  {
    id: "D2-042", topic: "teams", level: 2,
    q: "Members first write ideas silently and alone, then share them one at a time in turn, discuss them, and finally rank them individually. Which technique is this?",
    options: [
      { t: "Brainstorming", why: "Wrong: classic brainstorming has members call out ideas freely in the group, without the silent individual step and ranking." },
      { t: "Multivoting", why: "Wrong: multivoting narrows an existing list by repeated voting; it does not include silent idea generation." },
      { t: "Nominal group technique", why: "Correct: NGT combines silent individual generation, round-robin sharing, discussion and individual ranking, which limits domination by strong voices." },
      { t: "Affinity diagram", why: "Wrong: an affinity diagram groups ideas into themes; it does not rank them." }
    ],
    answer: 2, ref: "Lesson 2.6"
  },
  {
    id: "D2-043", topic: "teams", level: 1,
    q: "What is multivoting mainly used for?",
    options: [
      { t: "Narrowing a long list to a few top priorities", why: "Correct: members vote several times (each with a set number of votes) to narrow a long list to a manageable few." },
      { t: "Generating as many new ideas as possible", why: "Wrong: idea generation is brainstorming; multivoting starts from an existing list." },
      { t: "Settling conflicts between two team members", why: "Wrong: multivoting is a prioritisation tool, not a conflict-resolution method." },
      { t: "Assigning responsibilities to team members", why: "Wrong: role assignment uses tools such as a RACI chart." }
    ],
    answer: 0, ref: "Lesson 2.6"
  }
]);
