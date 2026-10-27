// Phases and topics, following the IASSC Green Belt Body of Knowledge (ILSSBOK).
// `bok: false` marks course-only topics outside the IASSC GB BoK: practised and in Learn, left out of mock exams.
// `pack` names the data file (data/questions/<pack>.js, data/learn/<pack>.js) that owns the topic.
const TOPICS = {
  phases: [
    { id: "define",  name: "Define",  examShare: 20 },
    { id: "measure", name: "Measure", examShare: 20 },
    { id: "analyze", name: "Analyze", examShare: 20 },
    { id: "improve", name: "Improve", examShare: 20 },
    { id: "control", name: "Control", examShare: 20 }
  ],
  topics: [
    // Define
    { id: "ss-overview",   phase: "define",  pack: "define1",  name: "Six Sigma overview, history and roles" },
    { id: "lean-basics",   phase: "define",  pack: "define1",  name: "Lean history and principles, 7 wastes and 5S" },
    { id: "ss-metrics",    phase: "define",  pack: "define1",  name: "Six Sigma metrics: DPU, DPMO, FTY, RTY, cycle time, COPQ and Pareto" },
    { id: "dfss",          phase: "define",  pack: "define1",  name: "DFSS: DMADV and IDOV", bok: false },
    { id: "voc-ctq",       phase: "define",  pack: "define2",  name: "VOC, Kano, CTQ trees and QFD" },
    { id: "project-select",phase: "define",  pack: "define2",  name: "Project selection, charter and business case" },
    { id: "pm-tools",      phase: "define",  pack: "define2",  name: "Project management and planning tools", bok: false },
    { id: "teams",         phase: "define",  pack: "define2",  name: "Team stages, roles and dynamics", bok: false },
    // Measure
    { id: "process-map",   phase: "measure", pack: "measure1", name: "Fishbone, process mapping, SIPOC, VSM, X-Y matrix and FMEA" },
    { id: "basic-stats",   phase: "measure", pack: "measure1", name: "Data types, descriptive statistics, normality and graphical analysis" },
    { id: "probability",   phase: "measure", pack: "measure1", name: "Probability basics", bok: false },
    { id: "distributions", phase: "measure", pack: "measure1", name: "Classes of distributions: normal, binomial, Poisson, t, χ², F" },
    { id: "msa",           phase: "measure", pack: "measure2", name: "Measurement System Analysis and Gage R&R" },
    { id: "capability",    phase: "measure", pack: "measure2", name: "Process capability and stability: Cp, Cpk, Pp, Ppk, attribute capability" },
    // Analyze
    { id: "multivari",     phase: "analyze", pack: "analyze",  name: "Multi-vari analysis and root cause tools" },
    { id: "inferential",   phase: "analyze", pack: "analyze",  name: "Inference, sampling techniques, CLT and confidence intervals" },
    { id: "hyp-concepts",  phase: "analyze", pack: "analyze",  name: "Hypothesis testing concepts, α, β, power, p-value" },
    { id: "hyp-normal",    phase: "analyze", pack: "analyze",  name: "Tests for normal data: t-tests, 1-sample variance, equal variance, ANOVA" },
    { id: "hyp-nonnormal", phase: "analyze", pack: "analyze",  name: "Non-parametric, proportion and χ² tests" },
    // Improve
    { id: "correlation",   phase: "improve", pack: "improve",  name: "Correlation and simple linear regression" },
    { id: "regression",    phase: "improve", pack: "improve",  name: "Multiple and non-linear regression, CI/PI, residuals, Box-Cox" },
    { id: "doe",           phase: "improve", pack: "improve",  name: "Design of Experiments (Black Belt scope, bonus)", bok: false },
    { id: "solutions",     phase: "improve", pack: "improve",  name: "Generating and selecting solutions, lean improvement tools", bok: false },
    // Control
    { id: "lean-control",  phase: "control", pack: "control",  name: "Lean controls: 5S, Kanban, Poka-yoke, standard work" },
    { id: "spc",           phase: "control", pack: "control",  name: "SPC data collection and charts: I-MR, Xbar-R, Xbar-S, p, np, u, c, CUSUM, EWMA" },
    { id: "spc-rules",     phase: "control", pack: "control",  name: "Control limits, rules and out-of-control signals" },
    { id: "control-plan",  phase: "control", pack: "control",  name: "Control plan, response plan and project closure" }
  ]
};
