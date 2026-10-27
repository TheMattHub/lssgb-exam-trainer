# IASSC Green Belt: Body of Knowledge, gaps and conventions

Research notes for question and learn-page writers. Checked 2026-10-27.

## 1. Exam format

| Fact | Value | Source |
|---|---|---|
| Questions | 100 graded; some forms add up to 10 unscored questions | iassc.org GB certification page |
| Type | Multiple choice and **true/false** | same |
| Spread | About 20 questions per DMAIC phase | same |
| Time | 3 hours | same |
| Book | Closed book, proctored (test centre, PeopleCert online proctoring, Pearson VUE) | same |
| Pass mark | 70% | same |
| Prerequisites | None | same |
| Cognitive level | Up to "Evaluate" (Bloom's revised 2001) | GB BoK page |
| Validity | 3 years; recertification exam 50 questions, 90 min, 70%, closed book | iassc.org recertification page |

- https://www.iassc.org/six-sigma-certification/green-belt-certification/
- https://iassc.org/body-of-knowledge/green-belt-body-of-knowledge/
- https://iassc.org/six-sigma-certification/recertification/

The course (Lesson 6.5) gives the same IASSC facts. The course itself follows the **ASQ CSSGB** outline, which is wider than the IASSC BoK (DFSS, teams, PM tools, probability, DOE). Writers should weight questions to the IASSC BoK below.

## 2. Official GB BoK (headings) and topic mapping

Section numbers are IASSC's. "Topic" is the id in `data/topics.js`. Course column: ✓ covered, ~ weak, ✗ absent.

### 1.0 Define
| BoK item | Topic | Course |
|---|---|---|
| 1.1.1 Meanings of Six Sigma | ss-overview | ✓ 1.1 |
| 1.1.2 General history of Six Sigma & CI | ss-overview | ~ 1.1 (names only) |
| 1.1.3 Deliverables of a LSS project | ss-overview | ~ |
| 1.1.4 Problem-solving strategy Y = f(x) | ss-overview | ✓ 1.1 |
| 1.1.5 Voice of Customer, Business, Employee | voc-ctq | ~ (VOE absent) |
| 1.1.6 Six Sigma roles & responsibilities | ss-overview | ✓ |
| 1.2.1 Defining a process | ss-overview / process-map | ✓ |
| 1.2.2 CTQs | voc-ctq | ✓ 2.2 |
| 1.2.3 COPQ | ss-metrics | ~ |
| 1.2.4 Pareto analysis (80:20) | ss-metrics (**no explicit home**) | ✓ |
| 1.2.5 Basic metrics: DPU, DPMO, FTY, RTY, cycle time | ss-metrics | ✓ 2.5 |
| 1.3.1 Business case & charter | project-select | ✓ 2.1 |
| 1.3.2 Developing project metrics | project-select | ~ |
| 1.3.3 Financial evaluation & benefits capture | project-select | ~ 2.5 |
| 1.4.1–1.4.3 Lean, history of Lean, Lean & Six Sigma | lean-basics | ~ (history thin) |
| 1.4.4 Seven elements of waste | lean-basics | ✓ (as 8 wastes, DOWNTIME) |
| 1.4.5 5S | lean-basics (**not in topic name**) | ✓ |

### 2.0 Measure
| BoK item | Topic | Course |
|---|---|---|
| 2.1.1 Cause & effect / fishbone | process-map (**not in name**) | ✓ but taught in 4.2 (Analyze) |
| 2.1.2 Process mapping, SIPOC, VSM | process-map | ✓ 3.1 |
| 2.1.3 X-Y diagram | process-map | ✓ 3.1 |
| 2.1.4 FMEA | process-map | ✓ |
| 2.2.1–2.2.2 Basic & descriptive statistics | basic-stats | ✓ 3.2 |
| 2.2.3 Normal distributions & normality | distributions / basic-stats | ~ (AD test only in case study) |
| 2.2.4 Graphical analysis | basic-stats | ✓ |
| 2.3.1–2.3.2 Precision, accuracy, bias, linearity, stability | msa | ✓ 3.5 |
| 2.3.3 Gage R&R | msa | ✓ (only the 30% cut-off) |
| 2.3.4 Variable & attribute MSA | msa | ~ (attribute agreement / kappa weak) |
| 2.4.1 Capability analysis | capability | ✓ 3.6 |
| 2.4.2 Concept of stability | capability | ✓ |
| 2.4.3 Attribute & discrete capability | capability | ~ (DPMO table only) |
| 2.4.4 Monitoring techniques | capability / spc | ~ |

### 3.0 Analyze
| BoK item | Topic | Course |
|---|---|---|
| 3.1.1 Multi-vari analysis | multivari | ✓ 4.3 |
| 3.1.2 Classes of distributions | distributions (Measure pack) | ✓ 3.4 |
| 3.2.1 Understanding inference | inferential | ✓ |
| 3.2.2 Sampling techniques & uses | inferential (**not in name**) | ✗ (no random/stratified/systematic/cluster) |
| 3.2.3 Central Limit Theorem | inferential | ✓ 3.4 |
| 3.3.1–3.3.4 Hypothesis concepts, practical vs statistical significance, α/β, test types | hyp-concepts | ✓ 4.1 |
| 3.4.1 1- and 2-sample t | hyp-normal | ✓ |
| 3.4.2 1-sample variance | hyp-normal | ~ |
| 3.4.3 One-way ANOVA, equal-variance tests, normality tests, sample size | hyp-normal | ✓ |
| 3.5.1–3.5.6 Mann-Whitney, Kruskal-Wallis, Mood's median, Friedman, 1-sample sign, 1-sample Wilcoxon | hyp-nonnormal | ✓ (table level) |
| 3.5.7 One- and two-sample proportion | hyp-nonnormal | ~ |
| 3.5.8 Chi-square contingency tables | hyp-nonnormal | ✓ |

### 4.0 Improve
| BoK item | Topic | Course |
|---|---|---|
| 4.1.1–4.1.3 Correlation, regression equation, residuals | correlation | ✓ 4.3 / 5.1 |
| 4.2.1 Non-linear regression | regression | ~ |
| 4.2.2 Multiple linear regression | regression | ~ |
| 4.2.3 Confidence & prediction intervals | regression | ~ |
| 4.2.4 Residual analysis | regression | ✓ |
| 4.2.5 Data transformation, Box-Cox | regression (**not in name**) | ~ 4.3 |

**The GB Improve phase is regression only.** DOE (designed experiments, full and fractional factorials) is in the IASSC **Black Belt** BoK (sections 4.3–4.5), not the GB BoK. About 20 exam questions therefore come from correlation and regression.
Source: https://iassc.org/body-of-knowledge/black-belt-body-of-knowledge/

### 5.0 Control
| BoK item | Topic | Course |
|---|---|---|
| 5.1.1 Control methods for 5S | lean-control | ✓ 6.3 |
| 5.1.2 Kanban | lean-control | ✓ |
| 5.1.3 Poka-yoke | lean-control | ✓ |
| 5.2.1 Data collection for SPC | spc | ✓ (rational subgroups) |
| 5.2.2–5.2.7 I-MR, Xbar-R, U, P, NP, Xbar-S charts | spc | ✓ 6.1 |
| 5.2.8–5.2.9 CUSUM, EWMA | spc | ✓ (short) |
| 5.2.10 Control methods | spc-rules | ~ (rule set differs, see §4) |
| 5.3.1 Cost-benefit analysis | control-plan | ~ |
| 5.3.2–5.3.3 Control plan and response plan elements | control-plan | ✓ 6.2 |

### Topics outside the GB BoK
| Topic | Verdict |
|---|---|
| dfss (DMADV, IDOV) | Keep as a small bonus topic (~5 questions). Not examined by IASSC GB. |
| pm-tools (Gantt, PERT, 7 M&P tools) | Keep small. Charter, scope and milestones belong to project-select. |
| teams (Tuckman stages, dynamics) | Keep small; roles (1.1.6) are in the BoK and belong to ss-overview. |
| probability | Keep small; supports distributions and CLT. |
| doe | Keep for the course, but mark as Black Belt scope; ~5 questions, not 15+. |
| solutions (idea generation, selection, lean improvement tools) | Not in GB BoK. Keep small. |
| voc-ctq: Kano and QFD parts | Not in BoK; VOC and CTQ are. Weight to VOC/CTQ. |

## 3. Gap notes by pack

Facts below are standard; writers can rely on them. Sources at the end of each block.

### define1 (ss-overview, lean-basics, ss-metrics, dfss)

**Meanings of Six Sigma.** Four common senses: a statistic (σ, standard deviation), a metric (3.4 DPMO at 6σ with the 1.5σ shift), a methodology (DMAIC), and a management philosophy (data-driven, customer-focused).

**History (short, exam-level).**
- Shewhart: control chart, 1924, Bell Labs; PDCA (Shewhart cycle).
- Deming: PDSA, 14 Points, common vs special cause in management.
- Juran: Quality Trilogy (planning, control, improvement); applied Pareto to quality ("vital few, trivial many").
- Six Sigma: Motorola, Bill Smith (with Mikel Harry), 1986; Motorola won the Baldrige award 1988. GE under Jack Welch adopted it 1995.
- Lean: Henry Ford's flow line (1913) → Toyota Production System (Taiichi Ohno, Shigeo Shingo: SMED, poka-yoke). "Lean" was coined by John Krafcik (1988) and popularised by Womack, Jones and Roos, *The Machine That Changed the World* (1990). *Lean Thinking* (1996) gives the five principles: value, value stream, flow, pull, perfection.
- Lean vs Six Sigma: Lean targets waste, flow and speed; Six Sigma targets variation and defects. LSS combines both.

**Y = f(x).** Y = output, dependent variable, effect, symptom, KPOV. X = input, independent variable, cause, KPIV. The project narrows many Xs to the vital few that drive Y. Full form: Y = f(X1, X2, …, Xn) + ε. To control Y you control the Xs, not Y.

**Deliverables by phase** (for "which phase produces…" questions): Define = charter, SIPOC, VOC/CTQs, stakeholder analysis; Measure = process map, baseline data, MSA, baseline capability; Analyze = validated root causes (vital Xs); Improve = solution, pilot, verified results; Control = control plan, response plan, SPC, handoff to process owner, verified financial benefits.

**Roles.** Executive leadership (vision, resources); Champion/Sponsor (owns the project for the business, removes barriers, selects projects); Master Black Belt (coach, trainer, programme owner); Black Belt (full-time, leads complex projects, mentors GBs); Green Belt (part-time, leads smaller projects in own area or supports a BB); Yellow Belt (team member, basic tools); Process owner (receives the improved process and owns the control plan).

**COPQ / cost of quality (ASQ model).**
- Cost of good quality: prevention (training, planning, poka-yoke) and appraisal (inspection, testing, audits, calibration).
- Cost of poor quality: internal failure (scrap, rework, re-inspection; found before the customer) and external failure (warranty, returns, complaints, lost customers; found by the customer).
- External failure is the most expensive; spending on prevention reduces total cost. "Hidden factory" = rework loops not visible in the official yield.
- Source: https://asq.org/quality-resources/cost-of-quality

**Pareto.** Bar chart of categories in descending order plus a cumulative-percentage line. About 80% of effects come from about 20% of causes. Use it to pick which defect type or cause to attack first. Data must be categorical counts (or cost). A flat Pareto (no dominant bar) suggests re-stratifying the data.

**Metrics (worked forms).**
- DPU = defects ÷ units. DPO = defects ÷ (units × opportunities per unit). DPMO = DPO × 1,000,000.
- FTY (first-time yield) = units passing a step first time with no rework ÷ units entering. Using Poisson, FTY ≈ e^(−DPU).
- RTY = FTY₁ × FTY₂ × … × FTYₙ. Example: 0.95 × 0.90 × 0.98 = 0.8379 → 83.8%.
- Final (traditional) yield = units out ÷ units in; it hides rework, so it is higher than RTY.
- Takt time = available production time ÷ customer demand. Cycle time = time to complete one unit at a step. Lead time = total time a unit spends in the process.
- Little's Law: lead time = WIP ÷ throughput (exit rate).
- Process cycle efficiency = value-added time ÷ total lead time.

**Seven elements of waste (IASSC wording).** Overproduction, Correction (defects/rework), Inventory, Motion, Overprocessing, Conveyance (transport), Waiting. Overproduction is often called the worst waste because it causes the others. The 8th waste, non-utilised skills/talent, is a later addition (course uses DOWNTIME). See §4.

**5S (IASSC wording).** Sort (seiri), Straighten / Set in order (seiton), Shine (seiso), Standardize (seiketsu), Self-Discipline / Sustain (shitsuke). Sort uses red tags; Straighten = "a place for everything"; Sustain is the hardest step.

Sources: https://iassc.org/body-of-knowledge/green-belt-body-of-knowledge/ ; https://asq.org/quality-resources/lean ; https://asq.org/quality-resources/five-s-tutorial

### define2 (voc-ctq, project-select, pm-tools, teams)

**Voices.** VOC = customer needs and requirements (surveys, interviews, complaints, focus groups, Gemba). VOB = needs of the business (profit, cost, growth, compliance, ROI). VOE = needs and knowledge of employees (engagement, safety, ideas from people doing the work). VOP (voice of the process) = what the process actually delivers, shown by its control limits; compare VOP with VOC (specification limits).

**CTQ.** A measurable characteristic, with a target and specification, that the customer considers critical. CTQ tree: need → driver → CTQ (measurable). Vague VOC ("fast service") becomes a CTQ ("answer within 30 s, 95% of calls").

**Charter elements.** Business case (why now, link to strategy), problem statement, goal statement, scope (in/out of scope), team and roles, milestones, metrics, estimated benefits, sponsor sign-off.
- Problem statement: what, where, when, how big (baseline). No cause, no solution, no blame.
- Goal statement: SMART; usually "reduce Y from baseline to target by date".

**Project metrics.**
- Primary metric: the Y the project is chartered to improve (with baseline, target, units).
- Secondary (consequential) metric: watched to make sure improving the primary does not harm something else (e.g. cut cycle time without raising defects).
- Good metrics are tied to CTQs, measurable with a validated system, and tracked over time.

**Financial evaluation and benefits capture.**
- Hard savings: visible on the P&L (lower labour, scrap, material, overtime; extra revenue).
- Soft savings: real but not directly on the P&L (cost avoidance, freed capacity, customer satisfaction).
- Tools: ROI = net benefit ÷ cost; payback period = investment ÷ annual saving; NPV discounts future cash flows (accept if NPV > 0); IRR = rate where NPV = 0.
- Finance validates baseline and savings; benefits are tracked after closure (often 12 months).

Sources: https://iassc.org/body-of-knowledge/green-belt-body-of-knowledge/ ; https://asq.org/quality-resources/cost-of-quality

### measure1 (process-map, basic-stats, probability, distributions)

**Fishbone (IASSC places it in Measure).** Categories 6M: Man/People, Machine, Method, Material, Measurement, Mother Nature (environment). Service version: Policies, Procedures, People, Plant/Place. Output is a list of potential Xs to prioritise (X-Y matrix) and verify with data; it does not prove a cause.

**X-Y diagram (cause & effect matrix).** Rows = inputs (Xs), columns = outputs (Ys). Each Y gets a customer-importance weight (1–10). Each X–Y cell gets a correlation score, commonly 0, 1, 3, 9. Weighted total per X = Σ(weight × score); the highest totals go to FMEA and data collection.

**FMEA.**
- RPN = Severity × Occurrence × Detection, each 1–10, range 1–1000.
- Severity 10 = hazardous; Occurrence 10 = very frequent; **Detection 10 = almost impossible to detect** (a common trap).
- High severity (9–10) needs action whatever the RPN. After actions, re-score and recompute RPN. Usually actions lower O or D; S changes only with a design change.
- Process FMEA (PFMEA) vs design FMEA (DFMEA). AIAG-VDA (2019) replaced RPN with Action Priority; the IASSC exam still uses RPN.
- Source: https://asq.org/quality-resources/fmea

**Process maps.** SIPOC = high-level (Suppliers, Inputs, Process 4–7 steps, Outputs, Customers), done in Define/early Measure to set scope. Detailed flowchart / swim-lane = steps by role and decision points. VSM = material and information flow with data boxes (C/T, C/O, uptime, inventory) and a timeline of value-added vs non-value-added time; current state → future state.

**Descriptive statistics.**
- Data types: continuous (variable) vs discrete (attribute: count or category). Scales: nominal, ordinal, interval, ratio.
- Centre: mean, median, mode. Spread: range, variance, standard deviation (sample s divides by n − 1), IQR.
- Skew: right (positive) skew → mean > median; left skew → mean < median.

**Normality.**
- Anderson-Darling (also Ryan-Joiner, Shapiro-Wilk): H₀ = data are normal. p > 0.05 → fail to reject, treat as normal; p ≤ 0.05 → not normal.
- Normal probability plot: points on a straight line → normal.
- Empirical rule: ±1σ 68.27%, ±2σ 95.45%, ±3σ 99.73%.
- Non-normal causes: mixed populations, outliers, natural bounds (e.g. cycle time ≥ 0), insufficient resolution.
- Source: https://www.itl.nist.gov/div898/handbook/eda/section3/eda35e.htm

**Graphical analysis: which chart for what.** Histogram = shape, centre, spread of one continuous variable. Box plot = median, Q1–Q3 box (IQR), whiskers to 1.5 × IQR, points beyond = outliers; good to compare groups. Dot plot = small data sets. Run chart / time series = behaviour over time. Scatter plot = relationship between two continuous variables. Pareto = categories.
- Source: https://www.itl.nist.gov/div898/handbook/eda/section3/eda33.htm

**Classes of distributions (BoK 3.1.2, owned by measure1).**
- Continuous: normal, t (small samples, σ unknown), χ² (variances), F (ratio of two variances, ANOVA), exponential (time between events), lognormal, Weibull (reliability).
- Discrete: binomial (number of defectives in n trials, two outcomes; mean np, variance np(1 − p)); Poisson (defects per unit/area/time; mean = variance = λ).
- Hypergeometric: sampling without replacement from a small finite lot.

### measure2 (msa, capability)

**MSA vocabulary.**
- Accuracy (location): bias = average measurement − reference value; linearity = how bias changes across the operating range; stability = how bias changes over time (track a master part on a control chart).
- Precision (spread): repeatability = equipment variation (EV), same operator, same part, same gage; reproducibility = appraiser variation (AV), different operators.
- Resolution/discrimination: the gage should read to at least 1/10 of the tolerance or process spread ("rule of ten").
- Large repeatability → fix the gage (maintenance, fixture, clamping). Large reproducibility → train operators, clarify the procedure, add fixtures.

**Gage R&R (variable).**
- Typical crossed study: 10 parts spanning the process range, 3 operators, 2–3 trials each, random order, blind.
- σ²_total = σ²_part + σ²_GRR; σ²_GRR = σ²_repeatability + σ²_reproducibility.
- %Study Var = 100 × σ_GRR ÷ σ_total (ratio of standard deviations; components do not add to 100%).
- %Contribution = 100 × σ²_GRR ÷ σ²_total (ratio of variances; adds to 100%).
- %Tolerance (P/T) = 100 × 6σ_GRR ÷ (USL − LSL). Older texts and the course use 5.15σ (99% spread).
- ndc = 1.41 × σ_part ÷ σ_GRR (truncate). ndc ≥ 5 acceptable.
- ANOVA method also tests the operator × part interaction; preferred over average-and-range.
- Sources: https://support.minitab.com/en-us/minitab/help-and-how-to/quality-and-process-improvement/measurement-system-analysis/supporting-topics/gage-r-r-and-wheeler-s-emp-studies/is-my-measurement-system-acceptable/ ; https://blog.minitab.com/en/quality-data-analysis-and-statistics/how-to-interpret-gage-output-part-2

**Attribute MSA (attribute agreement analysis).**
- Used for pass/fail or category judgements. Typical: 20–50 parts (mix of clearly good, clearly bad and borderline, known reference), 2–3 appraisers, 2–3 trials.
- Report: within-appraiser agreement (repeatability), each appraiser vs standard, between appraisers (reproducibility), all appraisers vs standard (overall effectiveness).
- Kappa: 1 = perfect agreement, 0 = chance agreement. AIAG: κ ≥ 0.75 good, ≥ 0.90 preferred; < 0.40 poor.
- Source: https://support.minitab.com/en-us/minitab/help-and-how-to/quality-and-process-improvement/measurement-system-analysis/how-to/attribute-agreement-analysis/attribute-agreement-analysis/interpret-the-results/key-results/

**Capability.**
- Prerequisites: stable process (in statistical control), validated measurement system, normal data (or transformed / fitted distribution).
- Cp = (USL − LSL) ÷ 6σ_within; Cpk = min(USL − μ, μ − LSL) ÷ 3σ_within.
- Pp, Ppk: same formulas with overall (long-term) standard deviation.
- Cpk ≤ Cp; Cpk = Cp only when centred; Cpk < 0 when the mean is outside a spec limit. Cp ignores centring.
- Benchmarks: ≥ 1.33 common minimum; 1.67 for new or critical processes; Cp = 2 ↔ six sigma short-term.
- Short-term sigma level Z_ST = 3 × Cpk (approx.); Z_LT = Z_ST − 1.5.
- One-sided spec: use Cpu = (USL − μ) ÷ 3σ or Cpl only; Cp is undefined.

**Attribute and discrete capability (2.4.3).**
- Defectives (pass/fail) → binomial capability: % defective, PPM, process Z.
- Defects (counts) → Poisson capability: DPU, DPMO.
- Convert DPMO to sigma level with the standard table (includes 1.5σ shift): 690,000 ≈ 1σ; 308,538 = 2σ; 66,807 = 3σ; 6,210 = 4σ; 233 = 5σ; 3.4 = 6σ.
- Source: https://support.minitab.com/en-us/minitab/help-and-how-to/quality-and-process-improvement/capability-analysis/how-to/capability-analysis/binomial-capability-analysis/before-you-start/overview/

**Stability and monitoring (2.4.2, 2.4.4).** Stable = only common-cause variation, predictable within control limits. Capability of an unstable process is meaningless, because it does not predict future output. Monitor with control charts and periodic capability re-studies; a stable but incapable process needs a fundamental change (reduce variation or re-centre), not adjustment.

### analyze (multivari, inferential, hyp-concepts, hyp-normal, hyp-nonnormal)

**Multi-vari.** Graphical, passive study (no process changes) that splits variation into families:
- positional (within piece or across machines/cavities);
- cyclical (piece-to-piece, consecutive units);
- temporal (time-to-time, shift-to-shift).
Find the largest family, then focus root-cause work there. It is a screening tool before hypothesis tests.
Source: https://asq.org/quality-resources/multi-vari-chart

**Sampling techniques (course gap).**
- Simple random: every unit has an equal chance.
- Stratified: split the population into strata (shift, line, supplier) and sample randomly within each. Use it when strata differ.
- Systematic: every k-th unit. Risk: bias if the process has a cycle of the same period.
- Cluster: randomly pick whole groups (boxes, days) and measure all units in them; cheap but less precise.
- Rational subgroup (SPC): consecutive units taken close in time, so within-subgroup variation is common cause only.
- Non-probability (convenience, judgement) samples can be biased. Sampling must be representative, random and of adequate size.

**Inference and CLT.**
- Statistic (x̄, s) estimates parameter (μ, σ).
- CLT: the distribution of sample means approaches normal as n grows (n ≥ 30 rule of thumb) whatever the parent shape. Standard error = σ ÷ √n. Means vary less than individuals.
- CI for the mean: x̄ ± z(α/2) × σ/√n (σ known) or x̄ ± t(α/2, n−1) × s/√n. A wider confidence level gives a wider interval; a larger n gives a narrower one.
- Sample size for a mean: n = (z × σ ÷ E)². For a proportion: n = z² × p(1 − p) ÷ E².

**Hypothesis concepts.**
- H₀ = no difference / no effect / equality; Hₐ = what you want to show. Reject H₀ when p < α (usually 0.05). Wording on the exam: "reject" or "fail to reject" H₀, never "accept H₀".
- Type I error α: rejecting a true H₀ (false alarm, producer's risk). Type II error β: failing to reject a false H₀ (missed effect, consumer's risk). Power = 1 − β (commonly 0.8–0.9).
- Raising n raises power; lowering α (for fixed n) raises β.
- Practical vs statistical significance: with big samples, tiny differences become statistically significant. Always ask whether the difference matters in business terms. A non-significant result with low power may still hide a real effect.

**Test selection (normal data).**
| Question | Test |
|---|---|
| One mean vs target | 1-sample t (Z if σ known) |
| Two independent means | 2-sample t (check equal variances) |
| Before/after on the same units | Paired t |
| One variance vs target | 1-sample variance (χ² test) |
| Two variances | F test (normal); Levene (any continuous) |
| 3+ variances | Bartlett (normal); Levene (non-normal) |
| 3+ means | One-way ANOVA |

- ANOVA: F = MS_between ÷ MS_within; df = k − 1 and N − k. Assumptions: independent samples, normal residuals, equal variances. A significant F says at least one mean differs; a post-hoc test (Tukey) says which.

**Test selection (non-normal data).**
| Question | Test | Note |
|---|---|---|
| One median vs target | 1-sample sign | No symmetry assumption; least power |
| One median vs target | 1-sample Wilcoxon | Assumes symmetric distribution; more power than sign |
| Two medians | Mann-Whitney | Non-parametric 2-sample t |
| 3+ medians | Kruskal-Wallis | More powerful than Mood's for continuous data without outliers |
| 3+ medians | Mood's median | Robust to outliers |
| Randomized block (treatment + block, no replication) | Friedman | Non-parametric two-way ANOVA |
| One proportion vs target | 1-proportion test | Binomial |
| Two proportions | 2-proportion test | |
| Association between two categorical variables | χ² contingency table | df = (r − 1)(c − 1); expected count ≥ 5 per cell |

- χ² statistic = Σ (O − E)² ÷ E, where E = row total × column total ÷ grand total.
- Non-parametric tests make fewer assumptions but have less power than their parametric equivalents.
- Source: https://support.minitab.com/en-us/minitab/help-and-how-to/statistics/nonparametrics/supporting-topics/which-test-should-i-use/ ; https://www.itl.nist.gov/div898/handbook/prc/section4/prc41.htm

### improve (correlation, regression, doe, solutions)

**Correlation.**
- Pearson r from −1 to +1; it measures linear association only. |r| near 1 = strong. r = 0 can still hide a curve.
- In simple regression R² = r². Example: r = −0.9 → R² = 0.81: 81% of the variation in Y is explained by X.
- Correlation ≠ causation (lurking variables).

**Simple linear regression.**
- Ŷ = b₀ + b₁X; least squares minimises the sum of squared residuals. b₁ = change in Y per unit X; b₀ = Y when X = 0.
- Coefficient p-value < 0.05 → the term is significant.
- Do not extrapolate beyond the range of X in the data.
- Residual = observed − fitted.

**Residual analysis (4.1.3, 4.2.4).** Residuals should be:
- normal (normal probability plot straight);
- constant variance (residuals vs fits: no funnel);
- independent (residuals vs order: no trend or cycle);
- mean zero with no pattern.
A curved pattern in residuals vs fits means a missing quadratic term or a needed transformation.

**Multiple and non-linear regression.**
- Ŷ = b₀ + b₁X₁ + b₂X₂ + …
- R²-adjusted penalises extra terms; compare models with different numbers of predictors on R²-adj (R² never falls when a term is added). S = standard error of the regression (lower is better).
- Multicollinearity: correlated Xs inflate coefficient variance and make coefficients unstable. VIF = 1 none; > 5 (some use 10) a concern.
- Non-linear (curvilinear): add X² (quadratic) or X³ (cubic) terms, or transform X or Y (log).
- Source: https://support.minitab.com/en-us/minitab/help-and-how-to/statistical-modeling/regression/supporting-topics/model-assumptions/multicollinearity-in-regression/

**Confidence vs prediction interval.** CI = range for the **mean** Y at a given X. PI = range for a **single new observation** at that X. PI is always wider than CI; both are narrowest at x̄.
Source: https://support.minitab.com/en-us/minitab/help-and-how-to/statistical-modeling/regression/supporting-topics/regression-models/what-is-the-difference-between-confidence-intervals-and-prediction-intervals/

**Box-Cox transformation.**
- Y' = Y^λ (λ ≠ 0); Y' = ln Y when λ = 0. Data must be positive.
- λ = 2 square; 1 no change; 0.5 square root; 0 natural log; −0.5 1/√Y; −1 reciprocal.
- Used to make non-normal data (or non-constant residual variance) fit normal-based methods. For capability, transform the spec limits too.
- Alternative for capability: fit a non-normal distribution (Weibull, lognormal). Johnson transformation is a more flexible option.
- Source: https://www.itl.nist.gov/div898/handbook/eda/section3/eda336.htm

**DOE.** Not in the GB BoK (Black Belt only). Keep course coverage light: factors, levels, 2^k runs, main effects, interactions, randomisation, replication, blocking, resolution.

### control (lean-control, spc, spc-rules, control-plan)

**Lean controls.**
- 5S control methods: audits with scored checklists, visual standards (photos, floor marking, shadow boards), red-tag area, schedules for Shine, management walk-throughs.
- Kanban: a visual pull signal that authorises production or replenishment; it caps WIP. Rules: no kanban, no production; never pass defects. Number of kanbans ≈ (demand × lead time × (1 + safety)) ÷ container quantity.
- Poka-yoke (Shingo): prevention (the error cannot happen) beats detection (the error is caught at once). Control/regulatory type stops the process; warning type alerts the operator. Methods: contact, fixed-value (count), motion-step (sequence). In the control hierarchy, eliminating the cause is strongest, then mistake-proofing, then SPC, then inspection and training.
- Source: https://asq.org/quality-resources/mistake-proofing

**SPC data collection and chart selection.**
| Data | Subgroup | Chart |
|---|---|---|
| Continuous | n = 1 | I-MR |
| Continuous | n = 2–9 (typically 4–5) | Xbar-R |
| Continuous | n ≥ 10 (some say > 8) | Xbar-S |
| Defectives, proportion | variable n | p |
| Defectives, count | constant n | np |
| Defects, count | constant area of opportunity | c |
| Defects per unit | variable area | u |
| Small shifts (< 1.5σ) | any | CUSUM or EWMA |

- Rational subgroups: minimise within-subgroup variation and maximise the chance of seeing between-subgroup shifts.
- Set limits from 20–25 subgroups (about 100 values) of stable data. Control limits = centre ± 3σ of the plotted statistic. They are the voice of the process, never spec limits.
- Formulas: Xbar chart UCL/LCL = X̿ ± A₂R̄; R chart UCL = D₄R̄, LCL = D₃R̄. I chart = x̄ ± 2.66 MR̄; MR chart UCL = 3.267 MR̄. p chart = p̄ ± 3√(p̄(1 − p̄)/n). c chart = c̄ ± 3√c̄.
- Look at the range/MR/S chart first: if variation is out of control, the Xbar limits are unreliable.
- CUSUM plots cumulative deviations from target and uses a V-mask or decision interval (h). EWMA weights recent points with λ (often 0.2); it is robust to non-normal data. Both detect small sustained shifts faster than Shewhart charts; Shewhart charts are better for large, sudden shifts.
- Sources: https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc32.htm ; https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc323.htm ; https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc324.htm

**Control methods (5.2.10).** See §4 for rule sets. Common cause = inherent, many small sources, needs process change by management. Special (assignable) cause = specific, detectable, act on it locally. Tampering (adjusting a stable process for common-cause variation) increases variation (Deming's funnel).

**Control plan elements.** Process step; output (KPOV/CTQ) and input (KPIV) characteristics; specification/target; measurement method (validated by MSA); sample size and frequency; control method (chart type, poka-yoke, checklist); owner; reaction/response plan reference. It is a living document owned by the process owner.

**Response plan elements.** Trigger (what out-of-control or out-of-spec signal); immediate containment (quarantine product); who acts and who is told (escalation); corrective action and root cause; documentation and log; verification that the fix worked.

**Cost-benefit analysis (5.3.1).** Compare the cost of each control (equipment, inspection time, training) with the risk or loss it prevents (from FMEA severity and COPQ). Choose the cheapest control that reliably holds the gain. Confirm project savings with finance before closure.

**Closure.** Hand off to the process owner, document lessons learned, update procedures and training, celebrate, and track benefits.
Source: https://asq.org/quality-resources/control-plan

## 4. Conventions where sources disagree

| Item | Variants | Use in questions |
|---|---|---|
| 1.5σ shift | Some statisticians reject it; tables exist with and without it | IASSC uses it: 6σ = 3.4 DPMO; Z_LT = Z_ST − 1.5. State "with the 1.5σ shift" if a question depends on it. |
| %GRR (%Study Var) | Course: < 30% acceptable only. AIAG: < 10% / 10–30% / > 30% | Use AIAG three bands (CONTENT_GUIDE agrees). %Contribution bands: < 1% / 1–9% / > 9%. |
| P/T multiplier | 5.15σ (course, AIAG 3rd ed. and older) vs 6σ (AIAG 4th ed., Minitab default) | Give the multiplier in the stem, or avoid computing it. |
| ndc | Minitab: < 2 useless, 2–4 limited; AIAG: ≥ 5 acceptable | ≥ 5 acceptable. |
| Kappa | ≥ 0.75 good (AIAG), > 0.9 excellent; Landis-Koch scale differs | ≥ 0.75 acceptable. |
| Wastes | 7 (TPS, IASSC BoK) vs 8 with skills (course DOWNTIME) | IASSC BoK lists seven. Never make "unused skills" the keyed answer to "which is NOT a waste". Accept "defects" = "correction", "transport" = "conveyance". |
| 5S step 5 | Sustain vs Self-Discipline | Same thing; IASSC wording is Self-Discipline. Avoid "Safety" (6S) as a correct option. |
| Run rules | Western Electric (1956): beyond 3σ; 2 of 3 beyond 2σ; 4 of 5 beyond 1σ; **8** in a row one side. Nelson/Minitab 8 tests: beyond 3σ; **9** in a row one side; **6** in a row trending; 14 alternating; 2 of 3 beyond 2σ; 4 of 5 beyond 1σ; 15 in a row within 1σ; 8 in a row beyond 1σ either side. Course: 8 in a row one side; 6–8 trending | IASSC-aligned training uses Minitab tests. Write stems that are signals under both sets (e.g. 10 in a row on one side, 7 rising points, a point beyond 3σ), or name the rule set. Minitab runs only Test 1 by default; attribute charts support tests 1–4. |
| Cpk vs Ppk | Cpk uses within-subgroup σ (R̄/d₂ or pooled s): short-term, potential. Ppk uses overall s: long-term, actual | Both use 3σ in the denominator. Ppk ≤ Cpk normally; a large gap shows between-subgroup shifts. Some texts call Cp/Cpk "long-term"; don't. |
| Xbar-S subgroup size | > 8 or ≥ 10 | Say "subgroup size 10 or more". |
| CLT n | 25 or 30 | Use n ≥ 30. |
| FMEA | RPN vs AIAG-VDA Action Priority | RPN only. |
| Fishbone / FMEA phase | Course teaches fishbone in Analyze (4.2) | IASSC BoK puts fishbone, X-Y and FMEA in **Measure**. For "which phase" questions follow the BoK, or avoid such stems. |
| α default | 0.05 vs 0.10 | 0.05 unless stated. |

Source for the run rules: https://support.minitab.com/minitab/help-and-how-to/quality-and-process-improvement/control-charts/supporting-topics/basics/using-tests-for-special-causes/ ; Western Electric via NIST: https://www.itl.nist.gov/div898/handbook/pmc/section3/pmc32.htm

## 5. IASSC question styles and themes

Based on the BoK structure, its Bloom target ("up to Evaluate") and public descriptions of the exam. These are patterns, not copied questions.

- **True/false items.** Expect some. The app is 4-option only, so convert them to "Which statement is true?" with four statements.
- **Minitab output reading.** This is the most typical style. The stem shows a short session-window extract (p-value, ANOVA table, regression coefficients with R-sq/R-sq(adj), Gage R&R table with %Study Var and ndc, capability report with Cp/Cpk/Pp/Ppk, chi-square table) and asks for the conclusion. Writers can show such output as plain text in the question.
- **Test selection.** "Data are X, question is Y: which test?" (normal/non-normal, 1/2/3+ groups, paired, proportions, categorical).
- **Short calculations.** DPU, DPMO, RTY, RPN, Cp/Cpk, %GRR from variances, ndc, takt time, Little's law, correlation → R², CI half-width, χ² expected count.
- **Phase placement.** "In which phase is the X-Y matrix used?" (Measure); multi-vari (Analyze); regression (Improve); 5S appears in Define (concept) and Control (control methods).
- **Definitions and vocabulary.** Type I/II error, repeatability vs reproducibility, common vs special cause, hard vs soft savings, primary vs secondary metric, CTQ.
- **Interpretation of decisions.** "p = 0.03, α = 0.05: what do you conclude?"; "%GRR = 22%: next step?"; "Cpk 0.8, Cp 1.6: what's wrong?" (off-centre).
- **Evaluate level.** Choose the best next step in a scenario, e.g. capability before MSA is wrong order; an unstable process should not get a capability study; a significant but tiny difference is not worth the cost.
- **Weighting.** Because Improve is regression-only in the GB BoK, the improve pack should give most of its questions to correlation and regression (CI/PI, residuals, R²-adj, Box-Cox, multicollinearity). DOE and solution selection should be a small minority.
