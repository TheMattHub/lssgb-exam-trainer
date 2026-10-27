// Pack "define2": learn pages for the topics whose pack is "define2" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md.
LEARN.add([
  {
    topic: "voc-ctq",
    summary: "Voice of the Customer (VOC) captures what customers need; a CTQ tree turns vague statements into measurable requirements the project can improve and test. VOC and CTQs are in the IASSC BoK; Kano and QFD are useful context but not BoK items.",
    points: [
      "Four voices: VOC = customer needs; VOB = business needs (profit, cost, growth, compliance); VOE = employees' needs and know-how; VOP = what the process actually delivers.",
      "Compare VOP (control limits, from process data) with VOC (specification limits, from the customer): that comparison is process capability.",
      "Reactive VOC sources arrive unasked: complaints, returns, warranty claims. Proactive sources are initiated by the team: surveys, interviews, focus groups, Gemba visits.",
      "Surveys: cheap and wide, but no probing. Interviews: in-depth, can clarify, but slow and need skilled interviewers. Focus groups: group interaction, qualitative, can be dominated or inhibited.",
      "A CTQ is a measurable characteristic the customer considers critical, with a metric, a target and specification limits. It states the requirement, not the cause or the solution.",
      "CTQ tree: need → driver → CTQ (general to specific). Example: 'fast service' → answer speed → 95% of calls answered within 30 s.",
      "Affinity diagram: groups a large amount of verbal data (survey comments, brainstormed ideas) into natural themes under header cards.",
      "Kano: must-be (expected; absence angers), one-dimensional (more is better), attractive (unexpected delighter), indifferent, reverse. Delighters drift to must-be over time.",
      "QFD translates customer needs into technical requirements in four linked phases (product planning, design, process planning, process control). The first matrix is the House of Quality.",
      "House of Quality: customer requirements and weights (left), technical requirements (ceiling), relationship matrix (body, often scored 9/3/1), roof (correlations among technical requirements), targets and technical importance (basement)."
    ],
    formulas: [
      { name: "Technical importance (HOQ)", f: "Score of a technical requirement = Σ (customer weight × relationship score)" }
    ],
    table: {
      title: "Kano categories",
      head: ["Category", "If present", "If absent", "Example"],
      rows: [
        ["Must-be (basic)", "Neutral", "Strong dissatisfaction", "Clean sheets in a hotel"],
        ["One-dimensional (performance)", "Satisfaction rises with more", "Dissatisfaction", "Fuel economy"],
        ["Attractive (delighter)", "Delight", "Neutral", "Free upgrade on arrival"],
        ["Indifferent", "No effect", "No effect", "Brand of the hotel's light bulbs"]
      ]
    },
    traps: [
      "Control limits are the voice of the process; specification limits are the voice of the customer. Never swap them.",
      "A CTQ that contains a solution ('hire more staff') or a cause is not a CTQ.",
      "Must-be needs are rarely spoken in surveys because customers take them for granted; asking only 'what would you like?' misses them.",
      "An affinity diagram creates categories from text; a Pareto chart ranks categories that already exist."
    ],
    terms: [
      { term: "VOC", def: "Voice of the Customer: the customer's stated and unstated needs and expectations." },
      { term: "CTQ", def: "Critical to Quality: a measurable output characteristic with a target and limits, derived from a customer need." },
      { term: "CTC / CTD", def: "Critical to Cost / Critical to Delivery: the same idea applied to cost and delivery requirements." },
      { term: "QFD", def: "Quality Function Deployment: a matrix method that carries customer requirements through design and process planning." }
    ]
  },
  {
    topic: "project-select",
    summary: "A Green Belt project starts from a well-chosen problem and a charter signed by the champion. The charter fixes the problem, goal, scope, metrics and business case; the financial evaluation shows whether the project is worth doing and how benefits will be confirmed.",
    points: [
      "Good DMAIC candidates: an existing process, a measurable problem that matters to customers or the business, an unknown root cause and an unknown solution. Known solution = 'just do it'; new product = DFSS.",
      "Charter elements: business case, problem statement, goal statement, scope (in and out), team and roles, milestones, metrics, estimated benefits, champion sign-off. The Green Belt drafts it; the champion or sponsor approves it.",
      "Problem statement: what, where, when, how big (against a baseline). No cause, no solution, no blame.",
      "Goal statement: SMART (specific, measurable, attainable, relevant, time-bound), usually 'reduce Y from baseline to target by date'.",
      "Scope: list in-scope and out-of-scope items. Too broad a scope ('boiling the ocean') is a common reason projects stall; the out-of-scope list guards against scope creep.",
      "Primary metric: the Y the project is chartered to improve, with baseline, target and units. Secondary (consequential) metric: watched so that improving the primary does not harm something else.",
      "Hard savings: visible on the P&L (less scrap, labour, overtime, material; more revenue). Soft savings: real but not on the P&L (cost avoidance, freed capacity, satisfaction).",
      "Finance validates the baseline and the savings; benefits are tracked after closure, often for 12 months.",
      "Stakeholder analysis: list who is affected, their current and required support and their influence. Engage high-influence resisters early."
    ],
    formulas: [
      { name: "ROI", f: "ROI = (benefit − cost) ÷ cost × 100%" },
      { name: "Simple payback", f: "Payback = investment ÷ net annual saving" },
      { name: "NPV", f: "NPV = Σ CFₜ ÷ (1 + r)ᵗ − initial investment; accept if NPV > 0" },
      { name: "IRR", f: "IRR = the discount rate r at which NPV = 0; accept if IRR > hurdle rate" }
    ],
    table: {
      title: "Hard or soft saving?",
      head: ["Result", "Type", "Why"],
      rows: [
        ["Scrap cost down", "Hard", "Lower spend on the P&L"],
        ["Overtime pay cut", "Hard", "Lower spend on the P&L"],
        ["Planned purchase no longer needed", "Soft", "Cost avoidance: no existing cost falls"],
        ["Staff hours freed, no headcount change", "Soft", "Capacity, not cash"],
        ["Higher customer satisfaction", "Soft", "Real value, not directly on the P&L"]
      ]
    },
    traps: [
      "A problem statement that names a cause or a solution is wrong, even if the numbers are good.",
      "ROI divides the net benefit (benefit − cost) by the cost; benefit ÷ cost is the benefit-cost ratio.",
      "Simple payback ignores the time value of money and any cash after payback; NPV includes both.",
      "Cost avoidance counts as a soft saving, even when the avoided amount is large.",
      "Validated root causes are an Analyze output; they are never in the Define charter."
    ],
    terms: [
      { term: "Business case", def: "Why the project matters now: link to strategy and the expected financial or customer impact." },
      { term: "Scope creep", def: "Uncontrolled growth of the project's boundaries after the charter is approved." },
      { term: "Champion / sponsor", def: "Manager who owns the project for the business, approves the charter and removes barriers." }
    ]
  },
  {
    topic: "pm-tools",
    summary: "Bonus topic (course content, not in the IASSC GB BoK). Scheduling tools such as Gantt charts, the critical path and PERT help a Green Belt plan the project; the seven management and planning tools organise ideas, links and risks.",
    points: [
      "Gantt chart: bar chart of tasks against time, showing planned versus actual progress.",
      "Network (activity) diagram: shows task order and dependencies. The critical path is the longest path through it; its tasks have zero slack (float).",
      "Slack of a path = critical path length − that path's length. A delay on a critical task delays the whole project.",
      "PERT uses three estimates per task: optimistic (O), most likely (M), pessimistic (P).",
      "Seven management and planning tools: affinity diagram, interrelationship digraph, tree diagram, matrix diagram, prioritisation matrix, process decision program chart (PDPC), activity network diagram.",
      "Interrelationship digraph: maps cause-and-effect links among issues; many outgoing arrows = key driver.",
      "PDPC: lists what could go wrong at each step of a plan and the contingency for each.",
      "RACI: Responsible (does the work), Accountable (owns the result, exactly one per task), Consulted, Informed.",
      "Risk analysis: identify, evaluate (probability and impact), prioritise, act (avoid, mitigate, transfer, accept), monitor."
    ],
    formulas: [
      { name: "PERT expected time", f: "tₑ = (O + 4M + P) ÷ 6" },
      { name: "PERT standard deviation", f: "σ = (P − O) ÷ 6" }
    ],
    traps: [
      "The critical path is the longest path, not the shortest, and 'critical' means zero slack, not 'most important'.",
      "The fishbone diagram is one of the seven basic quality tools, not one of the seven management and planning tools.",
      "PERT is not the simple average of O, M and P: the most likely value has weight 4."
    ]
  },
  {
    topic: "teams",
    summary: "Bonus topic (course content, not in the IASSC GB BoK; Six Sigma roles are covered under ss-overview). Teams pass through predictable stages, and a few simple techniques keep decisions open and data-driven.",
    points: [
      "Tuckman stages: forming → storming → norming → performing → adjourning.",
      "Forming: polite, uncertain, members depend on the leader. Storming: conflict, power struggles, resistance, challenges to authority.",
      "Norming: agreement on roles, rules and expectations; cooperation and group identity grow. Performing: high, self-directed productivity.",
      "Adjourning: work is complete; the team reflects, celebrates and disbands.",
      "Groupthink: pressure to agree suppresses doubts and contrary data. Counter it with a devil's advocate, anonymous or silent idea generation, and decisions based on data.",
      "Other team problems: floundering (cannot decide), rush to accomplish (skips analysis), dominant or reluctant members, discounting others' ideas.",
      "Brainstorming generates many ideas without criticism.",
      "Nominal group technique (NGT): silent individual idea writing, round-robin sharing, discussion, individual ranking. It stops strong voices dominating.",
      "Multivoting: repeated voting to narrow a long list to a few priorities."
    ],
    table: {
      title: "Tuckman stages",
      head: ["Stage", "Typical signs", "Leader focus"],
      rows: [
        ["Forming", "Politeness, uncertainty", "Direct: set purpose and roles"],
        ["Storming", "Conflict, resistance", "Coach: surface and resolve conflict"],
        ["Norming", "Agreed rules, cooperation", "Support: reinforce norms"],
        ["Performing", "High output, autonomy", "Delegate"],
        ["Adjourning", "Wrap-up, reflection", "Recognise and close"]
      ]
    },
    traps: [
      "Storming comes before norming. A team can fall back to storming when members or goals change.",
      "Quick agreement with no debate is a groupthink warning sign, not proof of a performing team.",
      "NGT starts with silent individual idea writing; multivoting starts from an existing list."
    ]
  }
]);
