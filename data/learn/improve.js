// Pack "improve": learn pages for the topics whose pack is "improve" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md.
LEARN.add([
  {
    topic: "correlation",
    summary: "Correlation measures how strongly two continuous variables move together in a straight line; simple linear regression fits that line so you can predict Y from X. On the IASSC Green Belt exam, correlation and regression make up the whole Improve phase (about 20 questions).",
    points: [
      "Pearson r runs from −1 to +1: the sign gives direction, |r| gives strength. A common rule of thumb calls |r| > 0.7 strong.",
      "r is unit-free and symmetric: it is the same whichever variable is called X, and it takes the sign of the regression slope.",
      "r measures linear association only: a clear curve (e.g. an inverted U) can give r ≈ 0. Always look at the scatter plot.",
      "Correlation is not causation: a lurking third variable can drive both X and Y.",
      "A single outlier can create or hide a correlation. Investigate it; delete it only with a known cause.",
      "In simple regression R² = r²: the share of the variation in Y explained by X. r = −0.8 gives R² = 0.64 (64%).",
      "Least squares chooses b₀ and b₁ to minimise the sum of squared residuals (SSE). The line passes through (x̄, ȳ).",
      "Slope b₁ = average change in Y per one-unit increase in X. Intercept b₀ = predicted Y at X = 0 (meaningful only if X = 0 is near the data).",
      "Residual = observed Y − fitted Ŷ. A positive residual means the point lies above the line.",
      "Slope p-value < α (usually 0.05): reject H₀ that the slope is 0, so X has a significant linear effect. p > α: no evidence, which is not proof of no relationship.",
      "Do not extrapolate: predict only within the range of X used to build the model.",
      "S = √(SSE / (n − 2)) is the typical residual size in Y units. An outlier has a large residual (Minitab flags |std resid| > 2 with R); a point with extreme X has high leverage (flag X) and is influential if it also lies off the trend. A narrow range of X weakens r."
    ],
    formulas: [
      { name: "Regression line", f: "ŷ = b₀ + b₁x" },
      { name: "Slope from summary data", f: "b₁ = r × s_y / s_x ;  b₀ = ȳ − b₁ × x̄" },
      { name: "Residual", f: "e = y − ŷ" },
      { name: "Coefficient of determination", f: "R² = SSR / SST = 1 − SSE / SST ;  in simple regression R² = r²" }
    ],
    table: {
      title: "Reading r",
      head: ["r", "Meaning", "R²"],
      rows: [
        ["+1", "Perfect positive line", "100%"],
        ["+0.9", "Strong positive", "81%"],
        ["0", "No linear relationship (a curve is still possible)", "0%"],
        ["−0.5", "Moderate negative", "25%"],
        ["−1", "Perfect negative line", "100%"]
      ]
    },
    traps: [
      "r vs R²: r = 0.9 explains 81% of the variation, not 90%. R² has no sign; r takes the sign of the slope.",
      "Strength is |r|: r = −0.85 is stronger than r = +0.60.",
      "A p-value is not a percentage of variation explained; that is R².",
      "A high R² inside the data range does not make a prediction outside it reliable.",
      "Slope vs intercept: the slope multiplies X; the intercept is the constant term."
    ],
    terms: [
      { term: "Pearson r", def: "Correlation coefficient: strength and direction of the linear relationship between two continuous variables." },
      { term: "Residual", def: "Observed value minus the value predicted by the model." },
      { term: "Extrapolation", def: "Predicting Y for X values outside the range used to fit the model." },
      { term: "Lurking variable", def: "A variable not in the analysis that affects both X and Y and creates a misleading correlation." }
    ]
  },
  {
    topic: "regression",
    summary: "Multiple regression models one continuous Y on several Xs, curved terms model non-linear behaviour, and residual analysis checks that the model can be trusted. Intervals around predictions and Box-Cox transformations complete the IASSC Green Belt Improve syllabus.",
    points: [
      "Multiple linear regression: ŷ = b₀ + b₁X₁ + b₂X₂ + … Each coefficient is the change in Y per unit of that X with the other Xs held constant.",
      "Coefficient sizes depend on units, so do not rank terms by raw coefficient size; judge significance by p-value (< 0.05). Drop non-significant terms one at a time (highest p first) and refit.",
      "R² never falls when a term is added. R²-adjusted penalises extra terms: compare models with different numbers of terms on R²-adj. S (standard error of the regression) should be low.",
      "Multicollinearity: correlated Xs give unstable coefficients with inflated standard errors. VIF = 1 none; above 5 a concern (some use 10).",
      "Residual assumptions: normal (normal probability plot), constant variance (residuals vs fits, no funnel), independent (residuals vs order, no trend or cycle), mean zero. X does not need to be normal.",
      "A curve in residuals vs fits means a missing term: add X² (quadratic) or X³ (cubic), or transform a variable.",
      "Confidence interval (CI) = range for the mean Y at a given X. Prediction interval (PI) = range for one new observation. The PI is always wider; both are narrowest at x̄.",
      "Box-Cox finds a power λ (Y' = Y^λ, ln Y when λ = 0) that makes data closer to normal or stabilises variance. Data must be positive, and normality is not guaranteed.",
      "If the confidence interval for λ includes 1, no transformation is needed. When transformed data are used for capability, transform the spec limits too.",
      "Stepwise and best subsets regression help choose which predictors to keep; the result still needs process knowledge.",
      "Overfitting: too many terms for the data. Warning sign: R-sq(pred) far below R-sq. Keep the model with the highest R²-adj, lowest S and only significant terms, but keep any lower-order term that is part of a significant X² or interaction term (hierarchy).",
      "A categorical X with k levels enters as k − 1 indicator (1, 0) variables; each coefficient is the difference from the reference level. An interaction term X1·X2 means the effect of X1 depends on the level of X2."
    ],
    formulas: [
      { name: "Multiple regression", f: "ŷ = b₀ + b₁X₁ + b₂X₂ + … + bₖXₖ" },
      { name: "Quadratic model", f: "ŷ = b₀ + b₁x + b₂x²" },
      { name: "Variance inflation factor", f: "VIF_j = 1 / (1 − R²_j), where R²_j comes from regressing X_j on the other Xs" },
      { name: "Box-Cox", f: "Y' = Y^λ (λ ≠ 0);  Y' = ln Y (λ = 0)" }
    ],
    table: {
      title: "Common Box-Cox λ values",
      head: ["λ", "Transformation"],
      rows: [
        ["2", "Y² (square)"],
        ["1", "Y (no change)"],
        ["0.5", "√Y (square root)"],
        ["0", "ln Y (natural log)"],
        ["−0.5", "1/√Y (reciprocal square root)"],
        ["−1", "1/Y (reciprocal)"]
      ]
    },
    traps: [
      "Choosing the model with the higher R² when a term was added: compare on R²-adj instead.",
      "CI vs PI: a single part or customer order needs the PI; the average needs the CI.",
      "Match the residual pattern to the assumption: funnel = non-constant variance; curve = missing term; trend over time = not independent.",
      "λ = 0 is the log, not 'no change' (that is λ = 1).",
      "VIF is about correlation among the Xs, not about whether a term is significant."
    ],
    terms: [
      { term: "R²-adjusted", def: "R² corrected for the number of terms; it falls when a term adds less than chance would." },
      { term: "Multicollinearity", def: "Strong correlation among predictors that makes individual coefficients unreliable." },
      { term: "Four-in-one plot", def: "Normal probability plot, histogram, residuals vs fits and residuals vs order shown together." },
      { term: "Prediction interval", def: "Range expected to contain a single new observation at a given X, at a stated confidence level." }
    ]
  },
  {
    topic: "doe",
    summary: "Design of Experiments changes several inputs on purpose, in a planned pattern, to find which ones drive the output and whether they interact. It is Black Belt scope in the IASSC Body of Knowledge, so treat it as background for the Green Belt exam.",
    points: [
      "Response = the output (Y) measured. Factors = inputs (Xs) changed on purpose. Levels = the settings of a factor, often coded − and +.",
      "Treatment = one combination of factor levels; a run (trial) is one execution of a treatment.",
      "Full factorial runs = levels^factors: 2³ = 8 and 2⁵ = 32. Multiply by the number of replicates.",
      "A half-fraction 2^(k−1) halves the runs but aliases (confounds) some effects. Resolution III aliases main effects with two-factor interactions; resolution IV aliases two-factor interactions with each other; resolution V aliases main effects and two-factor interactions only with higher-order interactions (2⁵⁻¹ with I = ABCDE is resolution V).",
      "Main effect = average response at the high level minus average at the low level.",
      "Interaction: the effect of one factor depends on the level of another; non-parallel lines on an interaction plot.",
      "Randomisation protects against unknown time-related noise; replication estimates experimental error; blocking removes a known nuisance variable (e.g. material batch or shift).",
      "DOE can show cause and effect because the Xs are set by the experimenter; regression on historical data shows association only."
    ],
    formulas: [
      { name: "Runs in a full factorial", f: "runs = levels^factors × replicates" },
      { name: "Main effect", f: "Effect A = ȳ(A high) − ȳ(A low)" }
    ],
    traps: [
      "Factor vs level vs response: temperature is a factor, 200 °C a level, hardness the response.",
      "Replication (repeat whole treatment combinations) is not the same as blocking (group runs by a nuisance variable).",
      "Effects are differences of averages, not of sums.",
      "Crossing or non-parallel lines mean interaction, not 'no effect'."
    ]
  },
  {
    topic: "solutions",
    summary: "Once root causes are verified, the team generates candidate solutions, selects the best with a structured method, and pilots it before full rollout. These tools come from the course and are not examined as a separate IASSC Green Belt section.",
    points: [
      "Brainstorming: defer judgement, aim for quantity, build on others' ideas; evaluate later. Negative brainstorming generates bad ideas and then reverses them.",
      "SCAMPER prompts ideas: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse.",
      "Pugh matrix: compare each option with a baseline per criterion (better +1, same 0, worse −1), multiply by criterion weight and sum; highest score wins, or combine the best features into a hybrid.",
      "Solution prioritisation matrix: rate each option on its own merits against weighted criteria, without a baseline.",
      "Force field analysis (Lewin): list driving and restraining forces for a change and plan to strengthen or weaken them.",
      "Cost-benefit: benefit-cost ratio = benefit ÷ cost (higher is better); NPV converts future benefits to today's money; IRR is the rate where NPV = 0.",
      "Pilot: test the solution at small scale, confirm the improvement with data (e.g. before/after test) and fix problems before full rollout.",
      "Kaizen: continuous, incremental improvement by everyone; a Kaizen event (blitz) is a short, focused workshop."
    ],
    formulas: [
      { name: "Benefit-cost ratio", f: "BCR = total benefit ÷ total cost" },
      { name: "Weighted Pugh score", f: "score = Σ (criterion weight × rating vs baseline)" }
    ],
    traps: [
      "A cause-and-effect (X-Y) matrix prioritises inputs in Measure; it is not a solution-selection tool.",
      "An unweighted Pugh count can rank options differently from the weighted score.",
      "The highest benefit-cost ratio is not always the highest net benefit; state which criterion is used.",
      "A pilot tests the solution; root causes are proven earlier, in Analyze."
    ]
  }
]);
