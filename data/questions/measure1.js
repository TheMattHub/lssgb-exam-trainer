// Pack "measure1": questions for the topics whose pack is "measure1" in data/topics.js
// (process-map, basic-stats, probability, distributions). Format: docs/CONTENT_GUIDE.md.
QB.add([
  // ---------- process-map ----------
  {
    id: "M1-001", topic: "process-map", level: 1,
    q: "A team builds a fishbone diagram with the 6M categories for paint defects. Under which category does \"high humidity in the paint booth\" belong?",
    options: [
      { t: "Material", why: "Wrong: Material covers the inputs consumed by the process, such as paint batches or primer, not ambient conditions." },
      { t: "Method", why: "Wrong: Method covers procedures and work instructions, such as spray sequence or drying time." },
      { t: "Mother Nature (environment)", why: "Correct: humidity, temperature, dust and other surrounding conditions belong to Mother Nature, the environment category." },
      { t: "Machine (equipment and tools)", why: "Wrong: Machine covers equipment and tools, such as spray guns or the booth's extraction fan." }
    ],
    answer: 2, ref: "Lesson 4.2"
  },
  {
    id: "M1-002", topic: "process-map", level: 2,
    q: "A team has finished a fishbone diagram listing 30 possible causes of late deliveries. What has the diagram given them?",
    options: [
      { t: "Potential Xs to prioritise and verify with data", why: "Correct: a fishbone organises the team's ideas about causes; it proves nothing. Next, prioritise the Xs (e.g. X-Y matrix) and test them with data." },
      { t: "The confirmed root cause of the late deliveries", why: "Wrong: brainstormed causes are hypotheses. Root causes are confirmed in Analyze with data, e.g. hypothesis tests or regression." },
      { t: "A ranking of the causes by their risk priority number", why: "Wrong: RPN ranking comes from an FMEA, which scores severity, occurrence and detection; a fishbone has no scores." },
      { t: "The share of delay explained by each category", why: "Wrong: quantifying each cause's contribution needs data, for example a Pareto chart or regression; the fishbone is qualitative." }
    ],
    answer: 0, ref: "Lesson 4.2"
  },
  {
    id: "M1-003", topic: "process-map", level: 1,
    q: "What is the main purpose of a SIPOC diagram in a Lean Six Sigma project?",
    options: [
      { t: "To show each detailed step, decision point and rework loop", why: "Wrong: that is a detailed flowchart or swim-lane map. A SIPOC deliberately stays at 4-7 high-level steps." },
      { t: "To give a high-level view of the process and its scope", why: "Correct: Suppliers, Inputs, Process, Outputs, Customers give a one-page view that fixes the start and end of the process and who is involved." },
      { t: "To show value-added versus non-value-added time on a timeline", why: "Wrong: the VA/NVA timeline belongs to a value stream map, not a SIPOC." },
      { t: "To score which inputs most affect the key outputs", why: "Wrong: scoring inputs against outputs is the job of the X-Y (cause and effect) matrix." }
    ],
    answer: 1, ref: "Lesson 2.1"
  },
  {
    id: "M1-004", topic: "process-map", level: 1,
    q: "What does a swim-lane (cross-functional) process map show that a basic flowchart does not?",
    options: [
      { t: "The statistical capability of each process step", why: "Wrong: no process map shows capability; that needs data and a capability study." },
      { t: "Inventory levels and cycle times in data boxes", why: "Wrong: data boxes with C/T, changeover and inventory are features of a value stream map." },
      { t: "The weighted score of each input against each output", why: "Wrong: weighted input-output scores come from an X-Y (cause and effect) matrix." },
      { t: "Who performs each step and where work is handed off", why: "Correct: each lane is a role or function, so the map shows who does what and where work crosses between groups, a common source of delay and errors." }
    ],
    answer: 3, ref: "Web: 6sigma.us (swimlane diagram)"
  },
  {
    id: "M1-005", topic: "process-map", level: 3,
    q: "A cell works 2 shifts of 8 hours a day. Each shift has a 30-minute break during which the cell stops. Customer demand is 600 units a day. What is the takt time?",
    options: [
      { t: "96 seconds per unit", why: "Wrong: this uses 16 full hours (57,600 s ÷ 600) and forgets to subtract the breaks from available time." },
      { t: "45 seconds per unit", why: "Wrong: this uses only one shift of available time (27,000 s ÷ 600)." },
      { t: "90 seconds per unit", why: "Correct: available time = 2 × (480 − 30) = 900 min = 54,000 s; takt = 54,000 ÷ 600 = 90 s per unit." },
      { t: "48 seconds per unit", why: "Wrong: this uses one shift without removing the break (28,800 s ÷ 600)." }
    ],
    answer: 2, ref: "Lesson 1.2"
  },
  {
    id: "M1-006", topic: "process-map", level: 2,
    q: "Takt time for a line is 60 s. The slowest station has a cycle time of 72 s; all others are under 55 s. What does this tell the team?",
    options: [
      { t: "The line has spare capacity because most stations beat takt", why: "Wrong: output is limited by the slowest station; one station above takt caps the whole line below demand." },
      { t: "The line cannot meet demand until the 72 s station is improved", why: "Correct: a station whose cycle time exceeds takt cannot keep pace with demand, so it is the bottleneck to attack (balance work, add capacity, cut waste)." },
      { t: "Takt time should be raised to 72 s to match the line", why: "Wrong: takt is set by customer demand and available time, not by the process; changing it does not change what customers need." },
      { t: "Cycle time and takt time are unrelated, so no conclusion is possible", why: "Wrong: comparing cycle time with takt is exactly how you check whether a process can meet demand." }
    ],
    answer: 1, ref: "Lesson 1.2"
  },
  {
    id: "M1-007", topic: "process-map", level: 3,
    q: "A value stream map shows 45 minutes of value-added time and a total lead time of 15 hours. What is the process cycle efficiency?",
    options: [
      { t: "5.3%", why: "Wrong: this divides value-added time by non-value-added time only (45 ÷ 855); PCE divides by the total lead time." },
      { t: "20%", why: "Wrong: this inverts the ratio (900 ÷ 45 = 20) and reads it as a percentage." },
      { t: "0.05%", why: "Wrong: 0.05 is the ratio as a decimal; as a percentage it is 5%, not 0.05%." },
      { t: "5%", why: "Correct: PCE = value-added time ÷ total lead time = 45 min ÷ (15 × 60 = 900 min) = 0.05 = 5%." }
    ],
    answer: 3, ref: "Lesson 1.2"
  },
  {
    id: "M1-008", topic: "process-map", level: 2,
    q: "What does a value stream map show that a SIPOC does not?",
    options: [
      { t: "Material and information flow with a VA/NVA timeline", why: "Correct: a VSM adds data boxes (cycle time, changeover, uptime), inventory triangles, information flow and a lead-time ladder." },
      { t: "The list of suppliers and customers of the process", why: "Wrong: suppliers and customers are exactly what the S and C columns of a SIPOC record." },
      { t: "A ranking of failure modes by risk", why: "Wrong: failure modes are ranked in an FMEA." },
      { t: "A list of possible causes grouped into the 6M categories", why: "Wrong: grouping causes into 6M categories is the fishbone diagram." }
    ],
    answer: 0, ref: "Lesson 1.2"
  },
  {
    id: "M1-009", topic: "process-map", level: 3,
    q: "In an X-Y (cause and effect) matrix, output Y1 has importance 10 and output Y2 has importance 5. Input \"oven temperature\" is scored 9 against Y1 and 3 against Y2. What is its weighted total?",
    options: [
      { t: "12", why: "Wrong: this adds the raw scores (9 + 3) and ignores the output importance weights." },
      { t: "105", why: "Correct: weighted total = Σ(weight × score) = 10 × 9 + 5 × 3 = 90 + 15 = 105." },
      { t: "75", why: "Wrong: this swaps the weights (5 × 9 + 10 × 3); each score must be multiplied by the weight of its own output." },
      { t: "1,350", why: "Wrong: this multiplies all four numbers together; the matrix sums the weight × score products." }
    ],
    answer: 1, ref: "Lesson 3.1"
  },
  {
    id: "M1-010", topic: "process-map", level: 2,
    q: "A team has completed an X-Y matrix for 25 process inputs. What is the usual next use of the results?",
    options: [
      { t: "Drop every input that scored less than the top one", why: "Wrong: the matrix ranks inputs; it does not justify discarding all but one. Low scorers are deprioritised, not proven irrelevant." },
      { t: "Report the top-scoring inputs as validated root causes", why: "Wrong: the scores are team judgement. Causes are validated with data in Analyze." },
      { t: "Feed the top-scoring inputs into the FMEA and data plan", why: "Correct: the X-Y matrix narrows many Xs to a shortlist that the team studies further in the FMEA and measures in data collection." },
      { t: "Use the totals as the process capability index of each input", why: "Wrong: X-Y totals are relative priority scores with no link to capability, which compares process spread with specification limits." }
    ],
    answer: 2, ref: "Lesson 3.1"
  },
  {
    id: "M1-011", topic: "process-map", level: 3,
    q: "In a process FMEA a failure mode is rated Severity 8, Occurrence 4 and Detection 3. What is its risk priority number (RPN)?",
    options: [
      { t: "15", why: "Wrong: this adds the three ratings (8 + 4 + 3); RPN multiplies them." },
      { t: "32", why: "Wrong: this is Severity × Occurrence only (8 × 4) and leaves out Detection." },
      { t: "12", why: "Wrong: this is Occurrence × Detection only (4 × 3) and leaves out Severity." },
      { t: "96", why: "Correct: RPN = S × O × D = 8 × 4 × 3 = 96, on a scale of 1 to 1,000." }
    ],
    answer: 3, ref: "Lesson 1.3"
  },
  {
    id: "M1-012", topic: "process-map", level: 3,
    q: "An FMEA lists three failure modes. A: S 10, O 2, D 3 (RPN 60). B: S 4, O 6, D 5 (RPN 120). C: S 6, O 5, D 2 (RPN 60). Which conclusion is sound?",
    options: [
      { t: "Only B needs action, because it has the highest RPN", why: "Wrong: RPN is a guide, not the only rule. A severity of 9-10 (hazardous) calls for action whatever the RPN, so A cannot be ignored." },
      { t: "A needs action despite its lower RPN, because its severity is 10", why: "Correct: a hazardous effect (S 9-10) is addressed even when O and D are low; B is also a candidate because of its high RPN." },
      { t: "No action is needed, because no RPN is above 125", why: "Wrong: A's severity of 10 already calls for action, and cut-offs such as 100 or 125 are local habits, not a universal rule; very different risks can share an RPN." },
      { t: "C is the priority, because its detection rating of 2 is the worst", why: "Wrong: on the detection scale a low number means the failure is easy to detect; 10 is the worst." }
    ],
    answer: 1, ref: "Web: reliamag.com (How to perform FMEA)"
  },
  {
    id: "M1-013", topic: "process-map", level: 1,
    q: "On the standard FMEA detection scale, what does a rating of 10 mean?",
    options: [
      { t: "The failure is almost certain to be detected", why: "Wrong: this is the opposite; certain detection is rated 1, the best score." },
      { t: "The failure happens very frequently in use", why: "Wrong: frequency is the Occurrence rating, not Detection." },
      { t: "The failure is almost certain to go undetected", why: "Correct: detection is scored so that worse is higher; 10 means current controls will almost certainly not catch the failure." },
      { t: "The failure's effect is hazardous to the user", why: "Wrong: how serious the effect is belongs to the Severity rating." }
    ],
    answer: 2, ref: "Lesson 1.3"
  },
  {
    id: "M1-014", topic: "process-map", level: 2,
    q: "After an FMEA, a team adds an automated vision check that catches a mislabelled pack before it leaves the line. When the team re-scores the failure mode, which rating should fall?",
    options: [
      { t: "Detection", why: "Correct: a new check makes the failure more likely to be caught, so the Detection rating drops. The failure still happens as often and is just as serious if it escapes." },
      { t: "Severity", why: "Wrong: severity is the seriousness of the effect on the customer; it normally changes only with a design change that removes or softens the effect." },
      { t: "Occurrence", why: "Wrong: a check does not stop labels being wrong; preventing the cause (e.g. a poka-yoke at labelling) would reduce Occurrence." },
      { t: "Occurrence and Severity together", why: "Wrong: an inspection changes neither how often the failure occurs nor how serious its effect is." }
    ],
    answer: 0, ref: "Web: reliamag.com (How to perform FMEA)"
  },
  {
    id: "M1-015", topic: "process-map", level: 1,
    q: "The 2019 AIAG-VDA FMEA handbook replaced the RPN for prioritising actions. What did it introduce instead?",
    options: [
      { t: "A fixed RPN threshold of 100 above which action is required", why: "Wrong: the handbook moved away from RPN altogether, partly because fixed RPN thresholds treat very different risks alike." },
      { t: "Ranking by the Detection rating alone", why: "Wrong: detection carries the least weight in the new logic; severity is considered first." },
      { t: "A criticality number equal to Severity × Occurrence", why: "Wrong: the AIAG-VDA handbook does not multiply ratings at all; Action Priority is read from look-up tables." },
      { t: "Action Priority: high, medium or low, from S, O and D", why: "Correct: Action Priority uses look-up tables that weight Severity first, then Occurrence, then Detection. The IASSC exam still uses RPN." }
    ],
    answer: 3, ref: "Web: reliamag.com; pharmaceuticalonline.com (AIAG-VDA Action Priority)"
  },

  // ---------- basic-stats ----------
  {
    id: "M1-020", topic: "basic-stats", level: 1,
    q: "Which of these is continuous data?",
    options: [
      { t: "Number of calls dropped per day", why: "Wrong: a count of events is discrete data; it takes only whole numbers." },
      { t: "Time to answer a call, in seconds", why: "Correct: time is measured on a continuous scale and can be subdivided as finely as the gage allows." },
      { t: "Customer rating from 1 (poor) to 5 (excellent)", why: "Wrong: a rating scale is ordinal (discrete) data; the values are ordered categories." },
      { t: "Call category: billing, technical or sales", why: "Wrong: named categories are nominal (attribute) data." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },
  {
    id: "M1-021", topic: "basic-stats", level: 2,
    q: "A survey asks customers to rate delivery as poor, fair, good or excellent. Which measurement scale is this?",
    options: [
      { t: "Nominal", why: "Wrong: nominal categories have no order (e.g. colour); here \"excellent\" is clearly better than \"good\"." },
      { t: "Interval", why: "Wrong: interval data need equal distances between values; the gap from poor to fair is not known to equal the gap from good to excellent." },
      { t: "Ordinal", why: "Correct: the categories have a meaningful order but unknown, unequal spacing, so they are ordinal." },
      { t: "Ratio", why: "Wrong: ratio data need equal intervals and a true zero, like weight or time." }
    ],
    answer: 2, ref: "Web: graphpad.com (ordinal, interval, ratio)"
  },
  {
    id: "M1-022", topic: "basic-stats", level: 2,
    q: "Oven temperature is recorded in degrees Celsius. Which scale is it, and why?",
    options: [
      { t: "Ratio, because temperature is a continuous measurement", why: "Wrong: being continuous is not enough. Ratio needs a true zero; 0 °C is not \"no temperature\", so 40 °C is not twice as hot as 20 °C." },
      { t: "Ordinal, because higher temperatures rank above lower ones", why: "Wrong: ordinal data have order but unequal spacing; one degree Celsius is the same size everywhere on the scale." },
      { t: "Nominal, because each reading is just a label", why: "Wrong: temperatures are numbers with order and equal spacing, not labels." },
      { t: "Interval, because it has equal units but an arbitrary zero", why: "Correct: Celsius has equal units, so differences make sense, but its zero is a convention, so ratios do not. Kelvin would be ratio." }
    ],
    answer: 3, ref: "Web: graphpad.com (ordinal, interval, ratio)"
  },
  {
    id: "M1-023", topic: "basic-stats", level: 2,
    q: "Seven cycle times (minutes) are: 3, 5, 5, 6, 8, 9, 13. What is the median?",
    options: [
      { t: "6", why: "Correct: with the values in order and n = 7 odd, the median is the 4th value, 6." },
      { t: "7", why: "Wrong: 7 is the mean (49 ÷ 7). The median is the middle value of the ordered data." },
      { t: "5", why: "Wrong: 5 is the mode, the value that occurs most often." },
      { t: "8", why: "Wrong: 8 is the midpoint of the range ((3 + 13) ÷ 2), not the middle observation." }
    ],
    answer: 0, ref: "Web: NIST/SEMATECH e-Handbook"
  },
  {
    id: "M1-024", topic: "basic-stats", level: 3,
    q: "A sample of five parts has lengths 4, 6, 8, 10 and 12 mm. What is the sample variance?",
    options: [
      { t: "8 mm²", why: "Wrong: this divides the sum of squares by n (40 ÷ 5), which is the population formula; a sample uses n − 1." },
      { t: "10 mm²", why: "Correct: mean = 8; squared deviations 16 + 4 + 0 + 4 + 16 = 40; s² = 40 ÷ (5 − 1) = 10." },
      { t: "3.16 mm", why: "Wrong: 3.16 is the sample standard deviation, √10, not the variance." },
      { t: "40 mm²", why: "Wrong: 40 is the sum of squared deviations before dividing by n − 1." }
    ],
    answer: 1, ref: "Web: NIST/SEMATECH e-Handbook"
  },
  {
    id: "M1-025", topic: "basic-stats", level: 1,
    q: "Which symbols are normally used for the population mean and population standard deviation?",
    options: [
      { t: "x̄ and s", why: "Wrong: x̄ and s are the sample statistics that estimate the population values." },
      { t: "μ and s", why: "Wrong: μ is the population mean, but s is the sample standard deviation." },
      { t: "μ and σ", why: "Correct: Greek letters denote population parameters: μ for the mean and σ for the standard deviation." },
      { t: "x̄ and σ", why: "Wrong: x̄ is the sample mean; the pair mixes a sample statistic with a population parameter." }
    ],
    answer: 2, ref: "Lesson 3.4"
  },
  {
    id: "M1-026", topic: "basic-stats", level: 2,
    q: "Invoice processing times have a mean of 12 days and a median of 9 days. What is the most likely shape of the distribution?",
    options: [
      { t: "Symmetric, close to normal", why: "Wrong: in a symmetric distribution the mean and median are about equal; a 3-day gap shows asymmetry." },
      { t: "Skewed left (negative skew)", why: "Wrong: left skew has a long tail of low values, which pulls the mean below the median." },
      { t: "Bimodal with two equal peaks", why: "Wrong: mean and median alone cannot show two peaks; a symmetric bimodal shape would even have mean ≈ median." },
      { t: "Skewed right (positive skew)", why: "Correct: a long tail of slow invoices pulls the mean above the median, typical of times bounded at zero." }
    ],
    answer: 3, ref: "Lesson 3.7"
  },
  {
    id: "M1-027", topic: "basic-stats", level: 2,
    q: "Minitab reports a kurtosis of +2.1 for a data set (Minitab shows excess kurtosis, so a normal distribution gives 0). What does this suggest?",
    options: [
      { t: "Heavier tails than a normal distribution, so more extreme values", why: "Correct: positive excess kurtosis means heavier tails than a normal curve (usually with a sharper peak), so extreme values and outliers are more likely." },
      { t: "A long tail to the right", why: "Wrong: asymmetry is measured by skewness, not kurtosis." },
      { t: "A flatter shape with lighter tails than a normal distribution", why: "Wrong: that describes negative kurtosis, such as a uniform-looking distribution." },
      { t: "A mean that is 2.1 standard deviations above the median", why: "Wrong: kurtosis measures tail weight and peakedness, not the distance between mean and median." }
    ],
    answer: 0, ref: "Lesson 3.7"
  },
  {
    id: "M1-028", topic: "basic-stats", level: 1,
    q: "What is the null hypothesis of the Anderson-Darling normality test?",
    options: [
      { t: "The data do not follow a normal distribution", why: "Wrong: this is the alternative hypothesis; the test looks for evidence against normality." },
      { t: "The data follow a normal distribution", why: "Correct: H₀ is normality, so a small p-value (≤ 0.05) is evidence that the data are not normal." },
      { t: "The mean equals the median", why: "Wrong: that is a feature of symmetric data, not the hypothesis a normality test checks." },
      { t: "The data contain no outliers", why: "Wrong: outliers can cause a normality test to fail, but the test's hypothesis is about the whole distribution." }
    ],
    answer: 1, ref: "Lesson 3.7"
  },
  {
    id: "M1-029", topic: "basic-stats", level: 2,
    q: "An Anderson-Darling test on 80 fill weights gives p = 0.012 (α = 0.05). What should the team conclude?",
    options: [
      { t: "Fail to reject H₀; the data can be treated as normal", why: "Wrong: fail to reject applies when p > α. Here p = 0.012 is below 0.05." },
      { t: "Accept H₀; the data are proven normal", why: "Wrong: the p-value is below α, and in any case a test never proves H₀; we only fail to reject it." },
      { t: "Reject H₀; the data are not normal", why: "Correct: p < 0.05 rejects normality. Look for mixed populations or outliers, transform the data, or use non-parametric methods." },
      { t: "The test is invalid because the sample is too large", why: "Wrong: 80 values is a normal sample size for this test. Very large samples make small departures significant, but 80 is not that." }
    ],
    answer: 2, ref: "Lesson 3.7"
  },
  {
    id: "M1-030", topic: "basic-stats", level: 3,
    q: "A box plot of waiting times has Q1 = 20 min and Q3 = 30 min. Using the usual 1.5 × IQR rule, which observation would be plotted as an outlier?",
    options: [
      { t: "44 min", why: "Wrong: the upper fence is 30 + 1.5 × 10 = 45, so 44 is inside the whisker range." },
      { t: "38 min", why: "Wrong: 38 is above Q3 but well below the upper fence of 45." },
      { t: "6 min", why: "Wrong: the lower fence is 20 − 15 = 5, so 6 is inside the whisker range." },
      { t: "48 min", why: "Correct: IQR = 30 − 20 = 10; upper fence = 30 + 1.5 × 10 = 45. 48 lies beyond it, so it is shown as an outlier point." }
    ],
    answer: 3, ref: "Web: NIST/SEMATECH e-Handbook"
  },
  {
    id: "M1-031", topic: "basic-stats", level: 1,
    q: "A team wants to see whether call-handling time has drifted over the last 40 working days. Which graph suits this best?",
    options: [
      { t: "Run chart", why: "Correct: a run chart plots values in time order, so trends, shifts and cycles become visible." },
      { t: "Histogram", why: "Wrong: a histogram shows shape, centre and spread but loses the time order, so it cannot show drift." },
      { t: "Pareto chart", why: "Wrong: a Pareto chart ranks categories by count or cost; it does not track a measure over time." },
      { t: "Scatter plot", why: "Wrong: a scatter plot shows the relationship between two variables, not one variable's behaviour over time." }
    ],
    answer: 0, ref: "Lesson 3.6"
  },
  {
    id: "M1-032", topic: "basic-stats", level: 2,
    q: "A team wants to compare the centre and spread of cycle times across four shifts, about 30 values per shift. Which graph is the best choice?",
    options: [
      { t: "A Pareto chart of the four shifts", why: "Wrong: a Pareto ranks category totals; it hides the spread within each shift." },
      { t: "A single histogram of all 120 values", why: "Wrong: pooling the shifts hides the differences between them; you would need one histogram per shift." },
      { t: "Side-by-side box plots, one per shift", why: "Correct: box plots on one axis show each group's median, IQR, range and outliers, which makes group comparison easy." },
      { t: "A scatter plot of cycle time against shift number", why: "Wrong: shift is a category, not a continuous variable; a scatter plot is for two continuous variables." }
    ],
    answer: 2, ref: "Lesson 3.6"
  },
  {
    id: "M1-033", topic: "basic-stats", level: 2,
    q: "A histogram of shaft diameters shows two distinct peaks. What is the most likely explanation and next step?",
    options: [
      { t: "The process is normal; two peaks are random noise", why: "Wrong: a clear second peak is a strong sign of two sources, not chance variation around one mean." },
      { t: "The gage is out of calibration, so stop measuring", why: "Wrong: a calibration bias shifts all readings; it does not usually create two peaks. Calibration may be checked, but stratifying the data comes first." },
      { t: "The data are skewed, so apply a log transformation to fix it", why: "Wrong: a transformation cannot fix a bimodal shape caused by mixed populations; it only hides it." },
      { t: "Mixed populations (e.g. two machines); stratify by source", why: "Correct: bimodal data usually come from mixed sources such as machines, shifts or suppliers. Split the data by source and study each." }
    ],
    answer: 3, ref: "Web: NIST/SEMATECH e-Handbook"
  },
  {
    id: "M1-034", topic: "basic-stats", level: 2,
    q: "To estimate average delivery time, a supervisor measures only the orders he personally handles on quiet mornings. What is the main weakness of this sample?",
    options: [
      { t: "It is too large to analyse", why: "Wrong: size is not the problem here; a large sample that is biased is still biased." },
      { t: "It is unlikely to be representative of all orders", why: "Correct: a convenience sample of quiet mornings excludes busy periods; samples should be random and representative of the whole population." },
      { t: "Delivery time is discrete, so it cannot be averaged", why: "Wrong: delivery time is continuous data and can be averaged." },
      { t: "Samples must always include every order to be valid", why: "Wrong: that would be a census. A well-designed random sample is valid and much cheaper." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },

  // ---------- probability ----------
  {
    id: "M1-040", topic: "probability", level: 2,
    q: "Events A (a part is defective) and B (the part came from supplier 1) satisfy P(A | B) = P(A). How are A and B related?",
    options: [
      { t: "They are mutually exclusive", why: "Wrong: mutually exclusive means A and B cannot happen together, so P(A | B) would be 0, not P(A)." },
      { t: "They are complementary", why: "Wrong: complementary events are mutually exclusive and cover every outcome (P(A) + P(B) = 1)." },
      { t: "They are independent", why: "Correct: knowing the part is from supplier 1 does not change the chance it is defective, which is the definition of independence: P(A and B) = P(A) × P(B)." },
      { t: "They are dependent", why: "Wrong: dependence means P(A | B) differs from P(A); here the two are equal." }
    ],
    answer: 2, ref: "Lesson 3.2"
  },
  {
    id: "M1-041", topic: "probability", level: 3,
    q: "For a panel, P(scratch) = 0.10, P(dent) = 0.05 and P(scratch and dent) = 0.02. What is the probability that a panel has a scratch or a dent?",
    options: [
      { t: "0.13", why: "Correct: for events that can occur together, P(A or B) = P(A) + P(B) − P(A and B) = 0.10 + 0.05 − 0.02 = 0.13." },
      { t: "0.15", why: "Wrong: adding without subtracting the overlap applies only to mutually exclusive events; it double-counts panels with both." },
      { t: "0.005", why: "Wrong: 0.10 × 0.05 is the multiplication rule, which gives P(A and B) for independent events, not P(A or B)." },
      { t: "0.17", why: "Wrong: the overlap must be subtracted, not added." }
    ],
    answer: 0, ref: "Lesson 3.2"
  },
  {
    id: "M1-042", topic: "probability", level: 3,
    q: "A product passes through three independent steps, each with a 0.95 probability of being done right. What is the probability that a unit gets through all three right?",
    options: [
      { t: "0.950", why: "Wrong: this is the chance for one step only; each extra step adds another chance of failure." },
      { t: "0.850", why: "Wrong: this subtracts the three failure probabilities (1 − 3 × 0.05), which is only an approximation and ignores overlap." },
      { t: "0.143", why: "Wrong: this is the chance that at least one step goes wrong (1 − 0.857)." },
      { t: "0.857", why: "Correct: for independent events P(A and B and C) = 0.95 × 0.95 × 0.95 = 0.857." }
    ],
    answer: 3, ref: "Lesson 3.2"
  },
  {
    id: "M1-043", topic: "probability", level: 3,
    q: "In how many ways can a team of 3 auditors be chosen from 8 people, if the order of selection does not matter?",
    options: [
      { t: "336", why: "Wrong: 8 × 7 × 6 = 336 is the number of permutations, where order matters; divide by 3! = 6 for a combination." },
      { t: "56", why: "Correct: C(8,3) = 8! ÷ (3! × 5!) = 336 ÷ 6 = 56." },
      { t: "512", why: "Wrong: 8³ counts ordered selections with repetition, as if the same person could be picked three times." },
      { t: "24", why: "Wrong: 8 × 3 has no meaning here; combinations use factorials." }
    ],
    answer: 1, ref: "Lesson 3.2"
  },
  {
    id: "M1-044", topic: "probability", level: 1,
    q: "When should you count permutations rather than combinations?",
    options: [
      { t: "When the items are selected with replacement", why: "Wrong: replacement is a separate question; both permutations and combinations are usually counted without replacement." },
      { t: "When the sample is larger than 30", why: "Wrong: sample size has nothing to do with the choice; the question is whether order matters." },
      { t: "When the order of the selected items matters", why: "Correct: permutations count ordered arrangements (e.g. 1st, 2nd and 3rd place); combinations count unordered groups." },
      { t: "When the events are mutually exclusive", why: "Wrong: mutual exclusivity is about events occurring together, not about counting arrangements." }
    ],
    answer: 2, ref: "Lesson 3.2"
  },

  // ---------- distributions ----------
  {
    id: "M1-050", topic: "distributions", level: 1,
    q: "For a normal distribution, about what percentage of values lie within ±2 standard deviations of the mean?",
    options: [
      { t: "68.27%", why: "Wrong: 68.27% is the share within ±1σ." },
      { t: "99.73%", why: "Wrong: 99.73% is the share within ±3σ." },
      { t: "90.00%", why: "Wrong: ±1.645σ covers 90%; ±2σ covers more." },
      { t: "95.45%", why: "Correct: by the empirical rule about 95.45% of a normal distribution lies within ±2σ (often rounded to 95%)." }
    ],
    answer: 3, ref: "Lesson 3.4"
  },
  {
    id: "M1-051", topic: "distributions", level: 3,
    q: "Response time is normal with mean 250 ms and standard deviation 20 ms. About what share of responses take longer than 290 ms?",
    options: [
      { t: "2.3%", why: "Correct: Z = (290 − 250) ÷ 20 = 2. Within ±2σ lies 95.45%, so each tail holds (100 − 95.45) ÷ 2 ≈ 2.3%." },
      { t: "4.6%", why: "Wrong: 4.55% is the area in both tails beyond ±2σ; only the upper tail is asked for." },
      { t: "47.7%", why: "Wrong: 47.7% is the area between the mean and +2σ, not beyond it." },
      { t: "15.9%", why: "Wrong: 15.9% is the tail beyond +1σ; 290 ms is 2σ above the mean." }
    ],
    answer: 0, ref: "Lesson 3.4"
  },
  {
    id: "M1-052", topic: "distributions", level: 2,
    q: "A measurement has a Z-score of −1.5. What does this mean?",
    options: [
      { t: "It is 1.5 units below the mean", why: "Wrong: a Z-score counts standard deviations, not raw units of measurement." },
      { t: "It is 1.5σ below the mean", why: "Correct: Z = (x − μ) ÷ σ, so Z = −1.5 means the value is 1.5σ below the mean." },
      { t: "Its probability of occurring is 1.5%", why: "Wrong: a Z-score is a position, not a probability; you read the probability from a Z table." },
      { t: "It is an outlier and should be removed", why: "Wrong: about 6.7% of normal data lie more than 1.5σ below the mean, so this value is not unusual." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },
  {
    id: "M1-053", topic: "distributions", level: 3,
    q: "Fill weight is normal with mean 50 g and σ = 5 g; USL = 56.4 g. Given P(Z ≤ 1.28) = 0.8997, what share of output is above the USL?",
    options: [
      { t: "89.97%", why: "Wrong: this is the share below the USL, read straight from the table; the question asks for the area above it." },
      { t: "20.06%", why: "Wrong: this doubles the tail as if there were two spec limits at ±1.28σ; only the upper limit is given." },
      { t: "10.03%", why: "Correct: Z = (56.4 − 50) ÷ 5 = 1.28; area above = 1 − 0.8997 = 0.1003 ≈ 10.03%." },
      { t: "1.28%", why: "Wrong: 1.28 is the Z-score, not a probability." }
    ],
    answer: 2, ref: "Lesson 3.4"
  },
  {
    id: "M1-054", topic: "distributions", level: 2,
    q: "Which situation is best modelled by a Poisson distribution?",
    options: [
      { t: "Number of defective bottles in a sample of 20, each bottle good or bad", why: "Wrong: a fixed number of trials with a pass/fail result per item is binomial." },
      { t: "Diameter of machined shafts", why: "Wrong: diameter is continuous data, typically modelled by a normal distribution." },
      { t: "Time between machine breakdowns", why: "Wrong: time between events is continuous and modelled by the exponential distribution (the Poisson counts the events)." },
      { t: "Number of paint blemishes per car door", why: "Correct: Poisson models counts of defects per unit of area, time or product when a unit can have several defects." }
    ],
    answer: 3, ref: "Lesson 3.4"
  },
  {
    id: "M1-055", topic: "distributions", level: 3,
    q: "A supplier's parts are 10% defective. You inspect a random sample of 4 parts. What is the probability of finding exactly one defective?",
    options: [
      { t: "0.656", why: "Wrong: 0.9⁴ = 0.656 is the probability of finding no defectives." },
      { t: "0.292", why: "Correct: binomial P(1) = C(4,1) × 0.1¹ × 0.9³ = 4 × 0.1 × 0.729 = 0.2916." },
      { t: "0.344", why: "Wrong: 1 − 0.9⁴ = 0.344 is the probability of at least one defective, not exactly one." },
      { t: "0.073", why: "Wrong: 0.1 × 0.9³ = 0.073 is one specific order (e.g. first part defective); it misses the C(4,1) = 4 possible positions." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },
  {
    id: "M1-056", topic: "distributions", level: 3,
    q: "Defects on a circuit board follow a Poisson distribution with a mean of 2 per board. Given e⁻² ≈ 0.1353, what is the probability that a board has at most one defect?",
    options: [
      { t: "0.406", why: "Correct: P(0) + P(1) = e⁻² × (2⁰/0! + 2¹/1!) = 0.1353 × (1 + 2) = 0.406." },
      { t: "0.135", why: "Wrong: this is P(0) only; \"at most one\" also includes exactly one defect." },
      { t: "0.271", why: "Wrong: this is P(1) only (0.1353 × 2); add P(0)." },
      { t: "0.594", why: "Wrong: this is the probability of two or more defects (1 − 0.406)." }
    ],
    answer: 0, ref: "Lesson 3.4"
  },
  {
    id: "M1-057", topic: "distributions", level: 2,
    q: "A binomial process has n = 200 and p = 0.05. What are the mean and variance of the number of defectives?",
    options: [
      { t: "Mean 10, variance 10", why: "Wrong: mean = variance is a property of the Poisson distribution; binomial variance is np(1 − p)." },
      { t: "Mean 9.5, variance 10", why: "Wrong: the values are swapped; the mean is np = 10." },
      { t: "Mean 10, variance 9.5", why: "Correct: mean = np = 200 × 0.05 = 10; variance = np(1 − p) = 10 × 0.95 = 9.5." },
      { t: "Mean 10, variance 3.08", why: "Wrong: 3.08 = √9.5 is the standard deviation, not the variance." }
    ],
    answer: 2, ref: "Lesson 3.4"
  },
  {
    id: "M1-058", topic: "distributions", level: 1,
    q: "Which statement about the Poisson distribution is true?",
    options: [
      { t: "Its mean equals its variance, λ", why: "Correct: for a Poisson distribution mean = variance = λ, so σ = √λ." },
      { t: "It is a continuous distribution", why: "Wrong: Poisson is discrete; it counts whole numbers of events." },
      { t: "It needs a fixed number of trials n", why: "Wrong: a fixed n of pass/fail trials describes the binomial; Poisson counts events in an interval with no fixed n." },
      { t: "It is always symmetric", why: "Wrong: it is right-skewed, especially for small λ; it becomes nearly symmetric only as λ grows." }
    ],
    answer: 0, ref: "Lesson 3.4"
  },
  {
    id: "M1-059", topic: "distributions", level: 2,
    q: "Why is the t distribution used instead of the normal (Z) distribution when estimating a mean from a sample of 12 parts?",
    options: [
      { t: "The data are discrete counts", why: "Wrong: the t distribution is for means of continuous, roughly normal data; counts use binomial or Poisson." },
      { t: "σ is unknown and estimated by s from a small sample", why: "Correct: with σ estimated from a small sample, t has heavier tails than Z; it approaches the normal as degrees of freedom grow." },
      { t: "The t distribution is narrower than the normal", why: "Wrong: t is wider (heavier tails) than the normal, giving wider intervals for small samples." },
      { t: "It is the distribution used to compare two variances", why: "Wrong: comparing two variances uses the F distribution." }
    ],
    answer: 1, ref: "Lesson 3.4"
  },
  {
    id: "M1-060", topic: "distributions", level: 2,
    q: "A team wants to test whether two filling machines have the same variance in fill weight (data normal). Which distribution underlies the test?",
    options: [
      { t: "t distribution", why: "Wrong: t is used to compare means, not variances." },
      { t: "Binomial distribution", why: "Wrong: binomial models counts of defectives, not the spread of a continuous measurement." },
      { t: "Chi-square distribution", why: "Wrong: χ² is used to compare one variance with a target, or for contingency tables, not to compare two variances." },
      { t: "F distribution", why: "Correct: F = s₁² ÷ s₂² is the ratio of two sample variances; the F distribution is also the basis of ANOVA." }
    ],
    answer: 3, ref: "Lesson 3.4"
  },
  {
    id: "M1-061", topic: "distributions", level: 2,
    q: "For which of these tasks is the chi-square (χ²) distribution used?",
    options: [
      { t: "Testing whether defect type is linked to shift", why: "Correct: the χ² distribution is used for contingency tables (association between categorical variables), goodness of fit and testing one variance against a target." },
      { t: "Comparing the means of three suppliers", why: "Wrong: comparing three or more means is one-way ANOVA, based on the F distribution." },
      { t: "Comparing one sample mean with a target when σ is unknown", why: "Wrong: that is a 1-sample t test." },
      { t: "Finding the probability of exactly 2 defectives in 10 units", why: "Wrong: that is a binomial probability." }
    ],
    answer: 0, ref: "Lesson 3.4"
  }
]);
