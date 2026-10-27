// Pack "improve2": second set of Improve questions (correlation and regression only, the IASSC GB
// Improve syllabus). Format: docs/CONTENT_GUIDE.md. Covers facts, scenarios and numbers not in
// improve.js. Software output in stems uses \n line breaks (the app renders them).
QB.add([
  // ---------- correlation and simple linear regression ----------
  {
    id: "I2-001", topic: "correlation", level: 3,
    q: "A simple regression ANOVA table shows SS Total = 500 and SS Error = 125. What is R²?",
    options: [
      { t: "25%", why: "Wrong: SSE / SST = 125 / 500 is the share of variation the model leaves unexplained, not the share it explains." },
      { t: "75%", why: "Correct: R² = 1 − SSE / SST = 1 − 125 / 500 = 0.75. Equivalently SSR = 500 − 125 = 375 and R² = SSR / SST = 375 / 500." },
      { t: "33%", why: "Wrong: 125 / 375 is SSE / SSR, a ratio of unexplained to explained variation; R² divides by the total, SST." },
      { t: "87%", why: "Wrong: √0.75 ≈ 0.87 is the size of r; R² is the square, 0.75." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "I2-002", topic: "correlation", level: 3,
    q: "Regression of scrap rate (%) on operator training hours:\nSource      DF   SS\nRegression   1   320\nError       20    80\nTotal       21   400\nCoef for Training = −2.1\nWhat is the correlation coefficient r?",
    options: [
      { t: "−0.89", why: "Correct: R² = SSR / SST = 320 / 400 = 0.80, so |r| = √0.80 ≈ 0.89; r takes the sign of the slope (−2.1), so r ≈ −0.89." },
      { t: "+0.89", why: "Wrong: the size is right, but r has the same sign as the slope, which is negative here." },
      { t: "−0.80", why: "Wrong: 0.80 is R² (320 / 400); r is its square root with the slope's sign." },
      { t: "−0.20", why: "Wrong: 80 / 400 = 0.20 is the unexplained share SSE / SST, not a correlation." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "I2-003", topic: "correlation", level: 3,
    q: "A simple linear regression on 20 observations has SS Error = 72. What is the standard error of the regression, S?",
    options: [
      { t: "4.0", why: "Wrong: 72 / 18 = 4 is the mean square error (a variance); S is its square root." },
      { t: "1.9", why: "Wrong: √(72 / 20) ≈ 1.90 divides by n; the error degrees of freedom in simple regression are n − 2 = 18." },
      { t: "3.6", why: "Wrong: 72 / 20 = 3.6 uses the wrong degrees of freedom and also skips the square root." },
      { t: "2.0", why: "Correct: S = √(SSE / (n − 2)) = √(72 / 18) = √4 = 2.0, in the units of Y." }
    ],
    answer: 3, ref: "Web: Minitab Support (model summary table)"
  },
  {
    id: "I2-004", topic: "correlation", level: 2,
    q: "A regression of tablet weight (mg) on press force reports S = 1.6 mg. What does S describe?",
    options: [
      { t: "The typical distance of observed weights from the fitted line", why: "Correct: S is the standard deviation of the residuals, in the units of Y; the lower it is, the closer the points sit to the line." },
      { t: "The standard deviation of all tablet weights, ignoring force", why: "Wrong: that is the plain standard deviation of Y; S is the spread left after the line is fitted, normally smaller." },
      { t: "The average change in weight per unit increase in press force", why: "Wrong: that is the slope b₁, not a measure of scatter." },
      { t: "The standard error of the slope, used to compute its t-value", why: "Wrong: the slope's standard error is SE Coef in the coefficients table; S is the residual standard deviation of the whole model." }
    ],
    answer: 0, ref: "Web: Minitab Support (model summary table)"
  },
  {
    id: "I2-005", topic: "correlation", level: 1,
    q: "In simple linear regression, which hypotheses does the t-test on the slope evaluate?",
    options: [
      { t: "H₀: β₁ ≠ 0 against H₁: β₁ = 0", why: "Wrong: the hypotheses are reversed; the null hypothesis always holds the equality (no effect)." },
      { t: "H₀: β₀ = 0 against H₁: β₀ ≠ 0", why: "Wrong: β₀ is the intercept; this is the test on the constant, which says nothing about whether X affects Y." },
      { t: "H₀: β₁ = 0 against H₁: β₁ ≠ 0", why: "Correct: the null is a zero slope (no linear relationship); a p-value below α rejects it, so X has a significant linear effect." },
      { t: "H₀: r = 1 against H₁: r < 1", why: "Wrong: the test asks whether there is any linear relationship, not whether it is perfect." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-006", topic: "correlation", level: 2,
    q: "In a regression of delivery time (min) on distance (km), one delivery has a residual of −4.2. What does this mean?",
    options: [
      { t: "It arrived 4.2 minutes later than the model had predicted", why: "Wrong: a late arrival means observed > fitted, which gives a positive residual." },
      { t: "It arrived 4.2 minutes sooner than the model predicted", why: "Correct: residual = observed − fitted, so −4.2 means the observed time is 4.2 min below the fitted value (the point lies below the line)." },
      { t: "The model explains 4.2% less variation at this point", why: "Wrong: a residual is in the units of Y (minutes), not a percentage of variation." },
      { t: "Its distance is 4.2 km below the average distance", why: "Wrong: a residual is a vertical (Y) gap from the line, not a deviation of X from its mean." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "I2-007", topic: "correlation", level: 3,
    q: "A least-squares line with an intercept is fitted to five points. Four of the residuals are 1.2, −0.8, 0.5 and −2.1. What is the fifth residual?",
    options: [
      { t: "−1.2", why: "Wrong: −1.2 is the sum of the four given residuals; the fifth must cancel it, not repeat it." },
      { t: "0", why: "Wrong: the residuals sum to zero as a set; a single residual need not be zero." },
      { t: "+1.2", why: "Correct: with an intercept, least-squares residuals sum to zero. 1.2 − 0.8 + 0.5 − 2.1 = −1.2, so the fifth is +1.2." },
      { t: "+4.6", why: "Wrong: 4.6 adds the absolute values (1.2 + 0.8 + 0.5 + 2.1); the zero-sum property applies to the signed residuals." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-008", topic: "correlation", level: 2,
    q: "A scatter plot of 30 points shows a clear upward trend. Which single added point would change the fitted slope the most?",
    options: [
      { t: "A point near the mean of X with a very large residual", why: "Wrong: a point near x̄ has little leverage; it mostly shifts the line up or down (the intercept) and barely tilts it." },
      { t: "A point far beyond the others in X that lies on the trend", why: "Wrong: it has high leverage but agrees with the line, so the slope hardly moves; it is not influential." },
      { t: "A point inside the main cluster that lies on the trend", why: "Wrong: it has neither leverage nor a large residual, so it changes almost nothing." },
      { t: "A point far beyond the others in X that lies well off the trend", why: "Correct: extreme X gives high leverage, and lying off the trend means it pulls the line towards itself: an influential point. Compare the fit with and without it." }
    ],
    answer: 3, ref: "Web: Minitab Support (unusual observations)"
  },
  {
    id: "I2-009", topic: "correlation", level: 2,
    q: "A regression has one outlier. Investigation shows it was measured while the gage was out of calibration. What should the analyst do?",
    options: [
      { t: "Keep it, since removing any data point biases the analysis", why: "Wrong: points are kept when there is no known cause; a proven measurement error is a valid reason to exclude one." },
      { t: "Replace it with the fitted value from the current line", why: "Wrong: inventing a value hides the problem and makes the fit look better than the data justify." },
      { t: "Exclude it, record the reason and refit the model", why: "Correct: a point with a known assignable cause (a measurement error) does not belong to the process being modelled; document the exclusion and refit." },
      { t: "Keep it, but apply a Box-Cox transformation to Y", why: "Wrong: a transformation fixes skew or non-constant variance; it does not repair a bad measurement." }
    ],
    answer: 2, ref: "Web: Minitab Support (unusual observations)"
  },
  {
    id: "I2-010", topic: "correlation", level: 2,
    q: "Across 15 plants, the number of maintenance technicians correlates with the number of machine breakdowns (r = 0.82). What is the most likely explanation?",
    options: [
      { t: "Technicians cause breakdowns, so headcount should be cut", why: "Wrong: correlation from observational data does not show causation." },
      { t: "Plant size: big plants have more machines and more technicians", why: "Correct: a lurking variable (plant size, number of machines) raises both counts and creates the correlation." },
      { t: "The correlation is too weak to support any conclusion", why: "Wrong: r = 0.82 is a strong positive linear association; the issue is its cause, not its strength." },
      { t: "Random counting errors in the breakdown data inflated the value of r", why: "Wrong: random measurement error weakens a correlation; it does not create a strong one." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "I2-011", topic: "correlation", level: 2,
    q: "In the normal operating window (180–185 °C), seal strength and temperature give r = 0.15. A trial from 160 to 200 °C on the same process gives r = 0.78. What best explains the difference?",
    options: [
      { t: "r depends on sample size, and the wider trial had more points", why: "Wrong: more points make r more precise and more likely significant, but do not systematically make it larger." },
      { t: "The 0.15 is the true value; the wider trial should be ignored", why: "Wrong: the narrow window had too little variation in X to show the trend; data spanning the range of X is what regression needs." },
      { t: "The narrow X range hid the relationship, which lowers r", why: "Correct: restricting the range of X shrinks r, because random scatter dominates when X barely changes." },
      { t: "The wider trial must contain an outlier that inflated r", why: "Wrong: nothing points to an outlier; a wider X range is the expected reason for a stronger r." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-012", topic: "correlation", level: 2,
    q: "Oven temperature is converted from °C to °F and the regression of hardness on temperature is refitted. What happens?",
    options: [
      { t: "r, R² and the slope all stay exactly the same", why: "Wrong: the slope is in Y units per X unit, so it changes when the X unit changes." },
      { t: "The slope stays the same; r and R² change", why: "Wrong: it is the other way round; r and R² are unit-free, the slope is not." },
      { t: "r and the slope each grow by a factor of 1.8", why: "Wrong: one °F is a smaller step than one °C, so the slope shrinks (÷ 1.8), and r does not change at all." },
      { t: "r and R² stay the same; the slope changes", why: "Correct: r is unit-free, so r and R² are unchanged; the slope per °F is the slope per °C divided by 1.8." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "I2-013", topic: "correlation", level: 1,
    q: "An analyst swaps the roles of X and Y and refits a simple regression. Which result does not change?",
    options: [
      { t: "The slope b₁", why: "Wrong: regressing X on Y gives a different line; its slope is r × s_x / s_y, not r × s_y / s_x." },
      { t: "The correlation r", why: "Correct: r is symmetric in X and Y, so it (and R²) is the same either way round." },
      { t: "The intercept b₀", why: "Wrong: the intercept depends on which variable is predicted, so it changes with the new line." },
      { t: "The residual standard error S", why: "Wrong: S is in the units of the response, which is now the old X." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "I2-014", topic: "correlation", level: 3,
    q: "Simple regression output:\nPredictor  Coef   SE Coef  T      P\nConstant   8.40   1.10     7.64   0.000\nPressure   0.62   0.25     ?      0.021\nWhat is the missing T-value for Pressure?",
    options: [
      { t: "0.40", why: "Wrong: 0.25 / 0.62 ≈ 0.40 inverts the ratio; T is the coefficient divided by its standard error." },
      { t: "0.16", why: "Wrong: 0.62 × 0.25 ≈ 0.16 multiplies instead of dividing." },
      { t: "0.37", why: "Wrong: 0.62 − 0.25 = 0.37 subtracts; T is a ratio, as the Constant row shows (8.40 / 1.10 = 7.64)." },
      { t: "2.48", why: "Correct: T = Coef / SE Coef = 0.62 / 0.25 = 2.48: the slope is about 2.5 standard errors from zero, which matches p = 0.021." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "I2-015", topic: "correlation", level: 1,
    q: "A simple linear regression is fitted to 26 observations. How many degrees of freedom does the error (residual) term have?",
    options: [
      { t: "25", why: "Wrong: n − 1 = 25 is the total degrees of freedom; the regression uses one of them." },
      { t: "24", why: "Correct: error DF = n − 2 = 24, because two parameters (b₀ and b₁) are estimated from the data." },
      { t: "26", why: "Wrong: n = 26 is the sample size; estimating parameters uses up degrees of freedom." },
      { t: "1", why: "Wrong: 1 is the regression DF (one predictor), not the error DF." }
    ],
    answer: 1, ref: "Web: Minitab Support (analysis of variance table)"
  },
  {
    id: "I2-016", topic: "correlation", level: 2,
    q: "With 400 observations, the slope of X has p = 0.000 but R² = 9%. What is the best conclusion?",
    options: [
      { t: "X is the main driver of Y, as its p-value is so small", why: "Wrong: the p-value measures evidence that the slope is not zero, not how much of Y it explains; with large n even small effects are significant." },
      { t: "X has no effect on Y, because R² is below 50%", why: "Wrong: there is no R² threshold for significance; the slope test shows a real, non-zero effect." },
      { t: "X has a real but weak effect; most variation is due to other causes", why: "Correct: the slope is significant, but X explains only 9% of the variation in Y, so other Xs must be found." },
      { t: "The output is contradictory, so the regression must be rerun", why: "Wrong: a low p-value with a low R² is common in large samples; the two numbers answer different questions." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-017", topic: "correlation", level: 2,
    q: "A simple regression has R² = 96%, but the residuals-versus-fits plot shows a clear curved pattern. What should the analyst conclude?",
    options: [
      { t: "The model is adequate, since an R² above 90% outweighs the plot", why: "Wrong: a high R² does not prove the model form is right; residual plots are the main check of fit." },
      { t: "The residuals are not normal, so the slope p-value is invalid", why: "Wrong: normality is judged on the normal probability plot; a curve against the fits points to the model form." },
      { t: "The straight-line form is not adequate despite the high R²", why: "Correct: systematic structure in the residuals means a missing term (e.g. X²) or a needed transformation, whatever R² says." },
      { t: "The curve shows non-constant variance, so weights are needed", why: "Wrong: non-constant variance shows as a funnel; a curve shows a missing higher-order term." }
    ],
    answer: 2, ref: "Web: NIST/SEMATECH e-Handbook (4.4.4)"
  },
  {
    id: "I2-018", topic: "correlation", level: 3,
    q: "A simple regression gives slope b₁ = 2.5, with s_x = 3 and s_y = 10. Using b₁ = r × s_y / s_x, what is r?",
    options: [
      { t: "0.75", why: "Correct: r = b₁ × s_x / s_y = 2.5 × 3 / 10 = 0.75." },
      { t: "0.56", why: "Wrong: 0.5625 is r² (0.75²), the R² of the model, not r." },
      { t: "0.12", why: "Wrong: 3 / (2.5 × 10) = 0.12 inverts the rearrangement; solve b₁ = r × s_y / s_x for r." },
      { t: "0.25", why: "Wrong: 2.5 / 10 = 0.25 leaves out s_x; r = b₁ × s_x / s_y." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },

  // ---------- multiple and non-linear regression ----------
  {
    id: "I2-019", topic: "regression", level: 3,
    q: "A regression with 3 predictors fitted to 25 observations gives R² = 80.0%. Using R²adj = 1 − (1 − R²)(n − 1) / (n − k − 1), what is R²-adj?",
    options: [
      { t: "78.2%", why: "Wrong: 1 − 0.20 × 24 / 22 = 78.2% uses n − k = 22 in the denominator; the formula needs n − k − 1 = 21." },
      { t: "77.1%", why: "Correct: 1 − 0.20 × 24 / 21 = 1 − 0.229 = 0.771, so R²-adj ≈ 77.1%." },
      { t: "76.2%", why: "Wrong: 1 − 0.20 × 25 / 21 = 76.2% uses n = 25 in the numerator instead of n − 1 = 24." },
      { t: "80.0%", why: "Wrong: R²-adj applies a penalty for the 3 terms, so it is below R² here." }
    ],
    answer: 1, ref: "Web: Minitab Support (model summary table)"
  },
  {
    id: "I2-020", topic: "regression", level: 2,
    q: "Model summary (n = 20, 3 predictors):\nS = 2.14   R-sq = 87.0%   R-sq(adj) = 84.6%   R-sq(pred) = 41.0%\nWhat does the gap between R-sq and R-sq(pred) suggest?",
    options: [
      { t: "The model predicts new data even better than it fits this sample", why: "Wrong: it is the reverse; R-sq(pred) far below R-sq means the model predicts new data much worse than it fits these." },
      { t: "The model is probably overfit and will predict new data poorly", why: "Correct: R-sq(pred) refits the model without each point in turn and predicts it; a large drop from R-sq is the classic sign of overfitting." },
      { t: "R-sq(pred) is the share explained by significant terms only", why: "Wrong: R-sq(pred) comes from predicting left-out observations (PRESS), not from a subset of terms." },
      { t: "The residuals are not normal, so R-sq cannot be trusted", why: "Wrong: the gap is about predictive ability; normality is checked on the residual plots." }
    ],
    answer: 1, ref: "Web: Minitab Support (model summary table)"
  },
  {
    id: "I2-021", topic: "regression", level: 2,
    q: "A team fits a regression with 9 predictors to 12 observations and gets R² = 99.2%. What is the main concern?",
    options: [
      { t: "R² is too high to be real, so the data must contain an error", why: "Wrong: with only 2 error degrees of freedom a near-perfect R² is the expected result, not evidence of bad data." },
      { t: "None: an R² this high confirms that all 9 predictors matter", why: "Wrong: R² never falls when terms are added; with 9 terms and 12 points almost any data fit closely." },
      { t: "The predictors must be multicollinear, as R² is near 100%", why: "Wrong: multicollinearity is correlation among the Xs, checked with VIF; a high R² does not show it." },
      { t: "Too many terms for the data: the model fits noise", why: "Correct: 12 − 9 − 1 = 2 error DF; the model is overfit and is likely to predict new data poorly. Use more data or fewer terms." }
    ],
    answer: 3, ref: "Web: Minitab Support (model summary table)"
  },
  {
    id: "I2-022", topic: "regression", level: 3,
    q: "Four models for the same 30 observations:\nModel  Terms         R-sq   R-sq(adj)  S\nA      X1            63.3%  62.0%      4.10\nB      X1 X2         76.3%  74.5%      3.36\nC      X1 X2 X3      76.9%  74.2%      3.38\nD      X1 X2 X3 X4   77.2%  73.6%      3.42\nIn B every term has p < 0.05; X3 and X4 have p > 0.40. Which model should the team carry forward?",
    options: [
      { t: "Model A, since the simplest model is always preferred", why: "Wrong: A leaves out X2, which is significant; its R-sq(adj) is far lower and its S higher than B's." },
      { t: "Model D, since it has the highest R-sq of the four", why: "Wrong: R-sq always rises when terms are added; D's R-sq(adj) is the lowest of the multi-term models." },
      { t: "Model C, since it adds a term with almost no change in S", why: "Wrong: X3 is not significant, and adding it lowers R-sq(adj) and raises S; it adds complexity, not information." },
      { t: "Model B: best R-sq(adj) and S, all terms significant", why: "Correct: B has the highest R-sq(adj) (74.5%), the lowest S (3.36) and only significant terms; the extra terms in C and D add nothing." }
    ],
    answer: 3, ref: "Web: Minitab Support (model summary table)"
  },
  {
    id: "I2-023", topic: "regression", level: 2,
    q: "A model for invoice processing time (min) is ŷ = 12.0 + 0.9·Lines + 3.2·Night, where Night = 1 for the night shift and 0 for the day shift. How should 3.2 be read?",
    options: [
      { t: "Night invoices take 3.2 min longer on average than day invoices with the same lines", why: "Correct: with 1, 0 coding the coefficient is the difference from the reference level (day), holding Lines constant." },
      { t: "Night invoices take 3.2 times as long as day invoices with the same lines", why: "Wrong: the term is added to the prediction, not multiplied; it is a difference in minutes, not a ratio." },
      { t: "Each extra line takes 3.2 min longer on nights than on days", why: "Wrong: a shift-dependent effect per line would need a Lines × Night interaction term." },
      { t: "Night invoices take 3.2 min on average, whatever the number of lines", why: "Wrong: 3.2 is a shift from the day-shift prediction, not the night-shift time itself." }
    ],
    answer: 0, ref: "Web: Minitab Support (coding schemes for categorical predictors)"
  },
  {
    id: "I2-024", topic: "regression", level: 1,
    q: "A regression must include supplier (A, B or C) as a predictor. With the usual 1, 0 coding, how is supplier entered?",
    options: [
      { t: "As three indicator variables, one per supplier", why: "Wrong: with a constant in the model, three indicators are perfectly collinear; one level must be left out as the reference." },
      { t: "As one variable coded 1, 2 and 3", why: "Wrong: numeric codes impose an order and equal spacing that the suppliers do not have." },
      { t: "As two indicator variables, with one supplier as reference", why: "Correct: a predictor with k levels needs k − 1 indicator columns; each coefficient is the difference from the reference supplier." },
      { t: "It cannot be entered: predictors must be continuous", why: "Wrong: categorical Xs enter through indicator variables; it is Y that must be continuous for linear regression." }
    ],
    answer: 2, ref: "Web: Minitab Support (coding schemes for categorical predictors)"
  },
  {
    id: "I2-025", topic: "regression", level: 2,
    q: "A regression model includes a Temp×Pressure term with p = 0.002. What does this tell the analyst?",
    options: [
      { t: "Temperature and pressure are strongly correlated with each other", why: "Wrong: correlation among Xs is multicollinearity, checked with VIF; an interaction term is about their joint effect on Y." },
      { t: "Temperature and pressure each have a significant effect alone", why: "Wrong: the interaction p-value says nothing directly about the main effects; check their own p-values." },
      { t: "The effect of temperature on Y depends on the pressure setting", why: "Correct: a significant interaction means the slope for one X changes with the level of the other." },
      { t: "Y changes by a fixed amount per degree at every pressure setting", why: "Wrong: a constant effect at every pressure describes no interaction (parallel lines)." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-026", topic: "regression", level: 3,
    q: "A model with an interaction term is ŷ = 20 + 2·X1 + 3·X2 + 0.5·X1·X2. What is the predicted Y at X1 = 4 and X2 = 6?",
    options: [
      { t: "46", why: "Wrong: 20 + 8 + 18 = 46 leaves out the interaction term." },
      { t: "51", why: "Wrong: 51 uses 0.5 × (4 + 6) = 5; the interaction term multiplies X1 by X2." },
      { t: "70", why: "Wrong: 70 adds 4 × 6 = 24 without applying the 0.5 coefficient." },
      { t: "58", why: "Correct: 20 + 2 × 4 + 3 × 6 + 0.5 × 4 × 6 = 20 + 8 + 18 + 12 = 58." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "I2-027", topic: "regression", level: 2,
    q: "In the model ŷ = b₀ + b₁X + b₂X², the X² term has p = 0.001 and the linear X term has p = 0.31. The team reduces models by the usual hierarchy rule. What should the analyst do?",
    options: [
      { t: "Keep X and X²: a significant X² term needs X in the model", why: "Correct: a hierarchical model keeps every lower-order term contained in a significant higher-order term, even when its own p-value is high." },
      { t: "Refit with X² only, as the X term has p above 0.05", why: "Wrong: removing X breaks the hierarchy and forces the curve's turning point to sit at X = 0." },
      { t: "Keep only X, since a straight line is easier to explain", why: "Wrong: X² is highly significant (p = 0.001); dropping it leaves the curvature unmodelled." },
      { t: "Drop X and X², then fit a straight line to a log of Y", why: "Wrong: the X² term is significant, so the curve is real; dropping the terms discards that evidence instead of modelling it." }
    ],
    answer: 0, ref: "Web: Minitab Support (model reduction)"
  },
  {
    id: "I2-028", topic: "regression", level: 3,
    q: "Two models for yield on temperature (n = 25):\nLinear:     S = 5.80   R-sq = 70.5%   R-sq(adj) = 69.2%\nQuadratic:  S = 2.61  R-sq = 94.3%   R-sq(adj) = 93.8%   p(Temp²) = 0.000\nThe linear model's residuals-versus-fits plot is U-shaped. Which model is better?",
    options: [
      { t: "Linear, because a straight line is easier to explain", why: "Wrong: the U-shaped residuals show the straight line misses the curvature; simplicity does not justify a wrong model form." },
      { t: "Quadratic: lower S, higher R-sq(adj), significant Temp²", why: "Correct: S drops from 5.80 to 2.61, R-sq(adj) rises from 69.2% to 93.8%, and the significant Temp² term models the curve seen in the residuals." },
      { t: "Linear, because an R-sq above 70% is already good enough", why: "Wrong: there is no fixed R-sq pass mark, and the residual pattern shows the linear form is inadequate." },
      { t: "Neither: the U shape calls for a Box-Cox transform first", why: "Wrong: a curve in residuals versus fits is a missing higher-order term, and the quadratic model already removes it." }
    ],
    answer: 1, ref: "Web: Minitab Support (residual plots)"
  },
  {
    id: "I2-029", topic: "regression", level: 2,
    q: "Waiting-time data include several values of 0 minutes. An analyst wants a Box-Cox transformation. What is the issue?",
    options: [
      { t: "Box-Cox needs at least 100 observations to work", why: "Wrong: there is no such sample-size rule; the problem here is the zero values." },
      { t: "Box-Cox only works on data that are close to normal", why: "Wrong: Box-Cox exists to make non-normal data closer to normal." },
      { t: "Box-Cox can be applied to X but not to Y", why: "Wrong: in regression it is usually applied to the response Y." },
      { t: "Box-Cox needs every value to be above zero", why: "Correct: logs and many powers of zero are undefined, so Box-Cox needs data > 0. Add a constant first, or use a Johnson transformation, which accepts zero and negative values." }
    ],
    answer: 3, ref: "Web: Minitab Support (data transformations for capability analysis)"
  },
  {
    id: "I2-030", topic: "regression", level: 3,
    q: "Cycle time was transformed as Y' = ln Y (natural log) before regression. At the chosen settings the model predicts Y' = 2.30. What cycle time is this in the original units?",
    options: [
      { t: "0.83", why: "Wrong: ln 2.30 ≈ 0.83 applies the log again instead of reversing it." },
      { t: "10.0", why: "Correct: reverse the natural log with the exponential: Y = e^2.30 ≈ 9.97 ≈ 10.0." },
      { t: "5.29", why: "Wrong: 2.30² = 5.29 reverses a square-root transformation (λ = 0.5), not a log." },
      { t: "199.5", why: "Wrong: 10^2.30 ≈ 199.5 reverses a base-10 log; the model used the natural log." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "I2-031", topic: "regression", level: 3,
    q: "Capability is assessed on Box-Cox transformed data with λ = 0.5. The specification is LSL = 16 and USL = 64. Which limits go with the transformed data?",
    options: [
      { t: "LSL = 16, USL = 64", why: "Wrong: untransformed limits cannot be compared with transformed data; they must be on the same scale." },
      { t: "LSL = 8, USL = 32", why: "Wrong: this multiplies by λ; λ is a power (Y^0.5 = √Y), not a factor." },
      { t: "LSL = 4, USL = 8", why: "Correct: transform the limits with the same λ: √16 = 4 and √64 = 8." },
      { t: "LSL = 256, USL = 4096", why: "Wrong: squaring is λ = 2; λ = 0.5 is the square root." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-032", topic: "regression", level: 2,
    q: "The histogram of residuals has two separate peaks. The data came from two filling machines, and machine is not in the model. What is the most likely fix?",
    options: [
      { t: "Add machine as a categorical predictor", why: "Correct: two peaks suggest two populations; adding the machine as an indicator variable lets the model separate them." },
      { t: "Apply a Box-Cox transformation to the response", why: "Wrong: a power transformation reshapes one distribution; it cannot merge two groups with different means." },
      { t: "Remove the smaller peak's points as outliers", why: "Wrong: a whole group of points is a missing variable, not a set of outliers." },
      { t: "Add a squared term to capture the curvature", why: "Wrong: two peaks in the histogram are not curvature; a missing X² term shows as a curve in residuals versus fits." }
    ],
    answer: 0, ref: "Web: Minitab Support (residual plots)"
  },
  {
    id: "I2-033", topic: "regression", level: 2,
    q: "Residuals from a model of coating thickness on line speed are plotted against ambient humidity, which is not in the model. They rise clearly with humidity. What does this suggest?",
    options: [
      { t: "The residuals are not normally distributed", why: "Wrong: normality is judged on the normal probability plot; a trend against another variable is a different problem." },
      { t: "Line speed should be removed from the model", why: "Wrong: the plot says nothing against line speed; it shows something is missing, not that a term is surplus." },
      { t: "The variance of the residuals is not constant", why: "Wrong: non-constant variance shows as a funnel; a steady trend shows a systematic effect." },
      { t: "Humidity affects thickness and should be tried as a predictor", why: "Correct: a pattern in residuals against a variable left out of the model means that variable explains part of the remaining variation." }
    ],
    answer: 3, ref: "Web: Minitab Support (residual plots)"
  },
  {
    id: "I2-034", topic: "regression", level: 2,
    q: "Minitab lists observation 14 under 'Fits and Diagnostics for Unusual Observations': Std Resid = 3.4, flagged R. What does the flag mean?",
    options: [
      { t: "Its X values are far from the rest: a high-leverage point", why: "Wrong: high leverage (unusual X) is flagged X, not R." },
      { t: "Its Y value is far from the fit: a large residual", why: "Correct: R marks a standardized residual beyond ±2. Check it for a data or measurement error, or a missing term; some R flags (about 5%) are expected." },
      { t: "It was removed from the model automatically by Minitab", why: "Wrong: Minitab flags unusual points but keeps them; the analyst decides what to do." },
      { t: "It is the setting where the model predicts Y most reliably", why: "Wrong: a large residual means the model fits that point badly." }
    ],
    answer: 1, ref: "Web: Minitab Support (unusual observations)"
  },
  {
    id: "I2-035", topic: "regression", level: 3,
    q: "Regression of yield on X1 and X2, n = 20:\nRegression  F = 38.7   P = 0.000\nX1          P = 0.31\nX2          P = 0.27\nS = 1.9   R-sq = 82.0%   R-sq(adj) = 79.9%\nIn separate simple regressions, X1 and X2 each have p = 0.000. What is the most likely explanation?",
    options: [
      { t: "X1 and X2 are strongly correlated with each other", why: "Correct: a significant overall model with no significant single term is the classic sign of multicollinearity; each X carries much the same information, which inflates the coefficient standard errors. Check the VIFs." },
      { t: "The model is overfit, with too many terms for the data", why: "Wrong: 2 terms on 20 observations leave 17 error degrees of freedom; overfitting would also not make each term non-significant." },
      { t: "Neither X affects yield; the overall F-test is a false alarm", why: "Wrong: F = 38.7 with p = 0.000 and R-sq = 82% show the Xs together explain most of the variation." },
      { t: "The residuals are not normal, so all p-values are invalid", why: "Wrong: nothing in the output points to non-normal residuals, and that would not explain why the terms are significant alone but not together." }
    ],
    answer: 0, ref: "Web: Minitab Support (multicollinearity in regression)"
  },
  {
    id: "I2-036", topic: "regression", level: 2,
    q: "Feed rate and spindle speed have VIFs of 14 and 15 and are correlated (r = 0.96), because the machine program links them. What is the most sensible action?",
    options: [
      { t: "Drop the two predictors, since neither coefficient can be trusted", why: "Wrong: together they carry real information; removing one is usually enough and costs little R², as they are largely redundant." },
      { t: "Add a Feed×Speed term to absorb the correlation", why: "Wrong: an interaction built from two correlated Xs is itself correlated with them and usually raises the VIFs further." },
      { t: "Keep the easier one to control, drop the other, refit", why: "Correct: removing one of two redundant predictors, chosen with process knowledge, is a standard remedy; the VIFs fall and the coefficients become stable." },
      { t: "Transform Y with Box-Cox to bring the VIFs down", why: "Wrong: VIFs come from regressing each X on the other Xs; Y plays no part." }
    ],
    answer: 2, ref: "Web: Minitab Support (multicollinearity in regression)"
  },
  {
    id: "I2-037", topic: "regression", level: 1,
    q: "How does backward elimination differ from forward selection?",
    options: [
      { t: "It starts with all candidate terms and removes the least significant at each step", why: "Correct: backward elimination drops the term with the largest p-value until all remaining terms meet alpha to remove; removed terms cannot return." },
      { t: "It starts with no terms and adds the most significant one at each step", why: "Wrong: that is forward selection." },
      { t: "It fits every possible combination of terms and lists the best ones", why: "Wrong: that is best subsets regression." },
      { t: "It adds and removes terms at each step until no change is needed", why: "Wrong: that is stepwise regression, which combines forward and backward steps." }
    ],
    answer: 0, ref: "Web: Minitab Support (stepwise methods and formulas)"
  },
  {
    id: "I2-038", topic: "regression", level: 3,
    q: "Multiple regression for bond strength (N), n = 30:\nTerm      Coef    P      VIF\nConstant  5.10    0.002\nTemp      0.42    0.000  1.1\nSpeed    −0.08    0.003  1.1\nHumidity  0.15    0.390  1.2\nS = 1.8   R-sq = 78.4%   R-sq(adj) = 75.9%\nWhich statement does the output support?",
    options: [
      { t: "Speed has no real effect, since its coefficient is so close to zero", why: "Wrong: Speed is significant (p = 0.003); a coefficient's size depends on the units of X." },
      { t: "Humidity's coefficient is unreliable because of multicollinearity", why: "Wrong: all VIFs are near 1; humidity is simply not significant (p = 0.390)." },
      { t: "Holding speed and humidity constant, each extra degree adds 0.42 N", why: "Correct: each coefficient is the change in Y per unit of that X with the other Xs held constant, and Temp is significant (p = 0.000)." },
      { t: "Temperature matters about three times as much as humidity", why: "Wrong: 0.42 vs 0.15 compares raw coefficients in different units; importance is judged by significance, and humidity is not significant." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-039", topic: "regression", level: 3,
    q: "A regression with 3 predictors on 24 observations has SS Regression = 600 and SS Error = 200. What is the F-value for the overall model?",
    options: [
      { t: "3.0", why: "Wrong: 600 / 200 divides the sums of squares; F divides the mean squares (SS / DF)." },
      { t: "60.0", why: "Wrong: 600 / 10 forgets to divide SS Regression by its 3 degrees of freedom." },
      { t: "20.0", why: "Correct: MS Regression = 600 / 3 = 200; MS Error = 200 / (24 − 3 − 1) = 10; F = 200 / 10 = 20.0." },
      { t: "21.0", why: "Wrong: 21.0 uses n − k = 21 as the error DF; it is n − k − 1 = 20." }
    ],
    answer: 2, ref: "Web: Minitab Support (analysis of variance table)"
  },
  {
    id: "I2-040", topic: "regression", level: 2,
    q: "A regression study is repeated with much larger samples from the same process. What happens to the 95% intervals at a fixed X inside the data range?",
    options: [
      { t: "The two intervals keep narrowing towards zero width", why: "Wrong: only the CI does; the PI must still cover the scatter of individual values." },
      { t: "The PI narrows towards zero width; the CI levels off", why: "Wrong: it is the other way round; the CI is for the mean, which more data pins down." },
      { t: "Neither interval changes, since each depends only on S", why: "Wrong: both depend on n through the uncertainty of the fitted line." },
      { t: "The CI narrows towards zero width; the PI levels off", why: "Correct: more data estimate the mean ever more precisely, but a single new value still scatters around that mean with standard deviation σ (estimated by S), so the 95% PI approaches about ±1.96σ, roughly ±2S, and stops shrinking." }
    ],
    answer: 3, ref: "Web: Minitab Support (confidence vs prediction intervals)"
  },
  {
    id: "I2-041", topic: "regression", level: 3,
    q: "Prediction at a new setting:\nFit = 49.0\n95% CI (47.2, 50.8)\n95% PI (43.0, 55.0)\nThe USL for each part is 53. What can the team conclude?",
    options: [
      { t: "All parts will meet the USL, as the CI ends at 50.8", why: "Wrong: the CI covers the mean, not single parts; individual parts scatter more widely." },
      { t: "The mean will exceed the USL, as the PI reaches 55.0", why: "Wrong: the PI is for single values; the CI for the mean (47.2 to 50.8) is below 53." },
      { t: "Some parts may exceed the USL, as the PI reaches 55.0", why: "Correct: the PI is the range for a single new part, and its upper end (55.0) is above the USL of 53." },
      { t: "No conclusion is possible, as the CI and the PI disagree", why: "Wrong: they do not disagree; they answer different questions (mean vs single value)." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "I2-042", topic: "regression", level: 2,
    q: "Which data set is best suited to ordinary least-squares linear regression?",
    options: [
      { t: "Pass/fail Y, with the X values spread across the range of interest", why: "Wrong: a pass/fail Y is attribute data; least-squares linear regression needs a continuous Y (a binary Y calls for logistic regression)." },
      { t: "Continuous Y, with X values spread across the range of interest", why: "Correct: a continuous response and X values that span the region to be predicted give a stable slope and avoid extrapolation." },
      { t: "Continuous Y, with every X held at a single setting", why: "Wrong: with no variation in X the slope cannot be estimated." },
      { t: "Continuous Y, with more predictors than observations", why: "Wrong: with more terms than observations the coefficients cannot be estimated uniquely and no error degrees of freedom remain." }
    ],
    answer: 1, ref: "Web: Minitab Support (binary logistic regression)"
  },
  {
    id: "I2-043", topic: "regression", level: 2,
    q: "A histogram of Y is clearly right-skewed, but the residuals of the regression of Y on X lie on a straight line in a normal probability plot. What should the analyst conclude?",
    options: [
      { t: "The regression is invalid, because Y is not normal", why: "Wrong: regression does not assume Y itself is normal; Y can be skewed simply because the X values are." },
      { t: "Y must be Box-Cox transformed before any regression", why: "Wrong: a transformation is a remedy for non-normal residuals or non-constant variance, neither of which is shown here." },
      { t: "X must also pass a normality test before use", why: "Wrong: there is no normality assumption on X." },
      { t: "Normality is met: it applies to residuals, not to Y", why: "Correct: the assumption is that the errors are normal; residuals on a straight line satisfy it." }
    ],
    answer: 3, ref: "Lesson 4.3"
  }
]);
