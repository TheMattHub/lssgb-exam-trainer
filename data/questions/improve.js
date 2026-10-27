// Pack "improve": questions for the topics whose pack is "improve" in data/topics.js.
// Format: docs/CONTENT_GUIDE.md. On the IASSC GB exam the Improve phase is correlation and
// regression only, so most items are there; doe and solutions are small bonus sets (bok: false).
// Software output is written inline (the app does not keep line breaks).
QB.add([
  // ---------- correlation ----------
  {
    id: "IM-001", topic: "correlation", level: 1,
    q: "What is the possible range of the Pearson correlation coefficient r?",
    options: [
      { t: "0 to 1", why: "Wrong: 0 to 1 is the range of R² (the coefficient of determination), which cannot be negative." },
      { t: "−∞ to +∞", why: "Wrong: a regression slope can take any value, but r is bounded because it is a standardised measure." },
      { t: "−1 to +1", why: "Correct: −1 is a perfect negative linear relationship, +1 a perfect positive one and 0 no linear relationship." },
      { t: "0 to 100", why: "Wrong: 0-100% is how R² is often reported in software output, not r." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-002", topic: "correlation", level: 2,
    q: "A study finds r = −0.92 between oven temperature and baking time. What does this indicate?",
    options: [
      { t: "A strong negative linear association between the two", why: "Correct: |r| is close to 1, so the linear relationship is strong; the minus sign means baking time falls as temperature rises." },
      { t: "A weak relationship, because the coefficient is negative", why: "Wrong: the sign shows only direction; strength comes from the absolute value, and 0.92 is strong (above the usual 0.7 rule of thumb)." },
      { t: "Proof that higher temperature causes shorter baking time", why: "Wrong: correlation does not prove causation; a designed experiment or process knowledge is needed for that." },
      { t: "92% of the variation in baking time is explained by temperature", why: "Wrong: the share explained is R² = 0.92² ≈ 0.846, about 85%, not r expressed as a percentage." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "IM-003", topic: "correlation", level: 3,
    q: "The correlation between machine speed and defect rate is r = −0.8. What percentage of the variation in defect rate is explained by a straight-line model on speed?",
    options: [
      { t: "80%", why: "Wrong: this reads r as a percentage; the share of variation explained is r², not r." },
      { t: "−64%", why: "Wrong: R² is a squared quantity and can never be negative; the sign of r only shows direction." },
      { t: "36%", why: "Wrong: 36% is 1 − R², the share of variation left unexplained (residual variation)." },
      { t: "64%", why: "Correct: in simple linear regression R² = r² = (−0.8)² = 0.64, so 64% of the variation is explained." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "IM-004", topic: "correlation", level: 2,
    q: "Over a year of monthly data, ice-cream sales and sunburn cases treated at clinics in a coastal town have r = 0.88. What is the best conclusion?",
    options: [
      { t: "Eating ice cream increases the risk of sunburn", why: "Wrong: this claims causation from correlation alone, which correlation cannot establish." },
      { t: "Sunny weather probably drives sales and sunburn alike", why: "Correct: a lurking variable (hot, sunny months) can drive both, creating a strong correlation without any causal link between them." },
      { t: "The correlation is too weak to draw any conclusion", why: "Wrong: 0.88 is a strong positive correlation; the issue is interpretation, not strength." },
      { t: "Sunburn makes people buy more ice cream", why: "Wrong: correlation says nothing about the direction of cause; reversing it is the same mistake." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-005", topic: "correlation", level: 2,
    q: "A scatter plot of yield against reactor temperature shows a clear inverted U: yield rises, peaks, then falls. Pearson r is 0.05. What should the analyst conclude?",
    options: [
      { t: "Temperature has no effect on yield, since r is near zero", why: "Wrong: r measures only linear association; a curved relationship can be strong while r is close to zero." },
      { t: "The data contain an error, because r and the plot disagree", why: "Wrong: there is no contradiction; a symmetric curve gives r ≈ 0 by construction." },
      { t: "There is a strong relationship that is not linear", why: "Correct: r only captures straight-line association; always plot the data and model a curve (e.g. add an X² term) when one is visible." },
      { t: "The relationship is weak and positive, so fit a straight line", why: "Wrong: a straight line would miss the peak; the plot shows a curved relationship that needs a curved model." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-006", topic: "correlation", level: 2,
    q: "A scatter plot of 20 points shows no trend, except one point far above and to the right of the rest. With that point r = 0.71; without it r = 0.12. What does this show?",
    options: [
      { t: "One point can create the correlation; investigate it before trusting r", why: "Correct: r is sensitive to outliers; find out whether the point is an error or a real but unusual condition before drawing conclusions." },
      { t: "The value 0.71 is valid, since all collected data must be kept", why: "Wrong: keeping the point without question lets a single value drive the conclusion; it must be investigated first." },
      { t: "The point must be deleted automatically because it is an outlier", why: "Wrong: remove a point only when there is a known cause (e.g. a recording error); otherwise it may carry real information." },
      { t: "Outliers shift the mean but leave the correlation coefficient unchanged", why: "Wrong: r is built from deviations from the means, so one extreme point can change it a lot, as the two values show." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "IM-007", topic: "correlation", level: 1,
    q: "What does the least-squares method minimise when it fits a regression line?",
    options: [
      { t: "The sum of the residuals", why: "Wrong: for a least-squares line with an intercept the residuals always sum to zero, because positive and negative residuals cancel." },
      { t: "The largest single residual", why: "Wrong: minimising the worst-case residual is a different (minimax) criterion, not least squares." },
      { t: "The number of points off the line", why: "Wrong: least squares does not count points; almost every point lies off the line." },
      { t: "The sum of the squared residuals", why: "Correct: least squares chooses b₀ and b₁ to make SSE = Σ(y − ŷ)² as small as possible." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "IM-008", topic: "correlation", level: 2,
    q: "A regression of weekly output (units) on hours of operator training gives ŷ = 120 + 3.5x. How should the slope be read?",
    options: [
      { t: "Output is 3.5 units per week when no training is given", why: "Wrong: the predicted output at x = 0 is the intercept, 120, not the slope." },
      { t: "Output rises 3.5 units on average per extra training hour", why: "Correct: the slope b₁ is the average change in Y for a one-unit increase in X." },
      { t: "Training explains 3.5% of the variation in weekly output", why: "Wrong: the share of variation explained is R², which is not shown in the equation." },
      { t: "Each extra unit of output needs 3.5 more hours of training", why: "Wrong: this reverses X and Y; the model predicts output from training, not the other way round." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-009", topic: "correlation", level: 3,
    q: "A model built from data with X between 10 and 30 is ŷ = 4.2 + 0.85x. What is the predicted Y at x = 20?",
    options: [
      { t: "17.0", why: "Wrong: 0.85 × 20 = 17 leaves out the intercept 4.2." },
      { t: "84.85", why: "Wrong: this swaps the coefficients (0.85 + 4.2 × 20); the intercept is the constant term and the slope multiplies x." },
      { t: "21.2", why: "Correct: ŷ = 4.2 + 0.85 × 20 = 4.2 + 17 = 21.2, and x = 20 lies inside the data range, so the prediction is not an extrapolation." },
      { t: "5.05", why: "Wrong: 4.2 + 0.85 adds the coefficients and ignores the value of x." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-010", topic: "correlation", level: 3,
    q: "The fitted line is ŷ = 2 + 1.5x. At x = 14 the observed Y is 25. What is the residual for this point?",
    options: [
      { t: "+2", why: "Correct: ŷ = 2 + 1.5 × 14 = 23; residual = observed − fitted = 25 − 23 = +2 (the point lies above the line)." },
      { t: "−2", why: "Wrong: this is fitted − observed; the residual is defined as observed minus fitted." },
      { t: "23", why: "Wrong: 23 is the fitted value ŷ, not the residual." },
      { t: "+4", why: "Wrong: 25 − 21 forgets to add the intercept 2 to 1.5 × 14." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "IM-011", topic: "correlation", level: 2,
    q: "Energy use was regressed on line speed using speeds from 50 to 150 m/min (R² = 92%). The manager wants to predict energy use at 400 m/min. What is the best advice?",
    options: [
      { t: "Use the model, since an R² of 92% guarantees accuracy", why: "Wrong: R² describes the fit inside the data range; it says nothing about how the process behaves far outside it." },
      { t: "Use the model, but widen the confidence interval by 10%", why: "Wrong: there is no such correction; intervals computed from the model assume the same relationship holds, which is the doubtful part." },
      { t: "Use the model, since a linear relationship holds at any speed", why: "Wrong: a relationship that looks linear over 50-150 m/min can bend or change completely at higher speeds." },
      { t: "Avoid it: 400 lies outside the range used to build the model", why: "Correct: this is extrapolation; collect data near 400 m/min or test it before relying on a prediction there." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "IM-012", topic: "correlation", level: 3,
    q: "Simple regression output for hardness on quench temperature: Constant Coef = 15.20, P = 0.000; Temp Coef = 0.48, P = 0.000; S = 1.9, R-Sq = 72.4%, R-Sq(adj) = 71.3%. What is the correlation coefficient r?",
    options: [
      { t: "0.72", why: "Wrong: 0.724 is R², the square of r, not r itself." },
      { t: "0.85", why: "Correct: r = √R² = √0.724 ≈ 0.85, and it is positive because the slope (0.48) is positive." },
      { t: "−0.85", why: "Wrong: the size is right, but r takes the sign of the slope, which is positive here." },
      { t: "0.48", why: "Wrong: 0.48 is the slope b₁ in hardness units per degree; r is unit-free." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-013", topic: "correlation", level: 2,
    q: "In a simple linear regression the p-value for the slope of X is 0.27 (α = 0.05). What is the correct conclusion?",
    options: [
      { t: "X explains 27% of the variation in Y, so it matters", why: "Wrong: a p-value is not R²; it is the probability of a slope this large if the true slope were zero." },
      { t: "X has a significant effect, because p is above α", why: "Wrong: the rule is reversed; a term is significant only when p < α." },
      { t: "Do not reject H₀: no significant linear effect of X", why: "Correct: p = 0.27 > 0.05, so the data do not show a significant linear effect of X on Y." },
      { t: "Y is proven to be unrelated to X", why: "Wrong: failing to reject H₀ is not proof of no relationship; the effect may be small, non-linear or hidden by a small sample." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-014", topic: "correlation", level: 1,
    q: "On a scatter plot, the points form a narrow band that falls from the upper left to the lower right. Which value of r fits this pattern best?",
    options: [
      { t: "+0.9", why: "Wrong: a positive r means Y rises as X rises; this band falls." },
      { t: "−0.9", why: "Correct: a falling pattern means a negative r, and a narrow band means a strong linear relationship (|r| near 1)." },
      { t: "−0.2", why: "Wrong: the sign is right, but r = −0.2 would show as a wide, loose cloud, not a narrow band." },
      { t: "0.0", why: "Wrong: r near 0 means no linear trend; here there is a clear one." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-015", topic: "correlation", level: 1,
    q: "In the regression line ŷ = b₀ + b₁x, what does b₀ represent?",
    options: [
      { t: "The change in Y for each one-unit increase in X", why: "Wrong: that is the slope b₁." },
      { t: "The share of the variation in Y explained by X", why: "Wrong: that is R², the coefficient of determination." },
      { t: "The random error in each observation", why: "Wrong: the error (residual) term is separate from the fitted line; b₀ is a fixed coefficient." },
      { t: "The predicted value of Y when X equals zero", why: "Correct: b₀ is the intercept. It has a practical meaning only if X = 0 is inside or near the data range." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "IM-016", topic: "correlation", level: 3,
    q: "Summary statistics: x̄ = 20, s_x = 4, ȳ = 50, s_y = 10, r = 0.6. Using b₁ = r × s_y / s_x and the fact that the line passes through (x̄, ȳ), what is the least-squares line?",
    options: [
      { t: "ŷ = 20 + 1.5x", why: "Correct: b₁ = 0.6 × 10 / 4 = 1.5; b₀ = ȳ − b₁x̄ = 50 − 1.5 × 20 = 20." },
      { t: "ŷ = 50 + 1.5x", why: "Wrong: the slope is right, but ȳ is not the intercept; the line must pass through (20, 50), and this one gives 80 at x = 20." },
      { t: "ŷ = 38 + 0.6x", why: "Wrong: this uses r as the slope; the slope must be rescaled by s_y / s_x." },
      { t: "ŷ = 45.2 + 0.24x", why: "Wrong: this inverts the ratio (r × s_x / s_y = 0.24), which is the slope for predicting X from Y." }
    ],
    answer: 0, ref: "Web: NIST/SEMATECH e-Handbook of Statistical Methods"
  },
  {
    id: "IM-017", topic: "correlation", level: 2,
    q: "Which statement about r and R² in simple linear regression is true?",
    options: [
      { t: "R² becomes negative whenever the slope is negative", why: "Wrong: R² is a square (and a share of variation), so it lies between 0 and 1." },
      { t: "r and R² always have the same value", why: "Wrong: they are equal only when r is 0 or 1; otherwise R² = r² is smaller than |r|." },
      { t: "R² equals r², so it shows strength but not direction", why: "Correct: squaring removes the sign; check r or the slope to see whether the relationship is positive or negative." },
      { t: "A high R² proves that X causes Y", why: "Wrong: R² measures fit; causation needs a designed experiment or a known mechanism." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-018", topic: "correlation", level: 2,
    q: "Two candidate Xs are screened against cycle time: X1 has r = +0.60 and X2 has r = −0.85. Which X has the stronger linear relationship with cycle time?",
    options: [
      { t: "X1, because its correlation is positive", why: "Wrong: the sign only gives direction; strength depends on |r|." },
      { t: "Neither, because a negative r means no relationship", why: "Wrong: a negative r is an inverse relationship; no linear relationship is r near 0." },
      { t: "They are equally strong, as each |r| exceeds 0.5", why: "Wrong: 0.85 is clearly stronger; R² is 0.72 for X2 against 0.36 for X1." },
      { t: "X2, because its |r| is larger", why: "Correct: |−0.85| > |0.60|. X2 explains about 72% of the variation (0.85²) versus 36% for X1." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },

  // ---------- regression ----------
  {
    id: "IM-019", topic: "regression", level: 1,
    q: "What defines multiple linear regression?",
    options: [
      { t: "One continuous Y modelled on two or more Xs", why: "Correct: ŷ = b₀ + b₁X₁ + b₂X₂ + … estimates the effect of each X on one response." },
      { t: "Two or more Ys modelled on a single X", why: "Wrong: several responses at once is multivariate analysis, not multiple regression." },
      { t: "One Y modelled on each X in turn, in separate fits", why: "Wrong: separate simple regressions ignore how the Xs act together; multiple regression fits them in one model." },
      { t: "A pass/fail Y modelled on several Xs", why: "Wrong: a binary response needs (binary) logistic regression, not linear regression." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "IM-020", topic: "regression", level: 2,
    q: "A model for delivery time (min) is ŷ = 50 + 2.4·Distance(km) − 1.1·Drivers. How should the coefficient −1.1 be read?",
    options: [
      { t: "Drivers matter less than distance, since 1.1 is below 2.4", why: "Wrong: coefficient sizes depend on the units of each X, so they cannot be compared directly; use p-values or standardised coefficients." },
      { t: "A negative coefficient means the term is not significant", why: "Wrong: the sign gives the direction of the effect; significance comes from the term's p-value." },
      { t: "Holding distance fixed, each extra driver cuts ŷ by 1.1 min", why: "Correct: a multiple regression coefficient is the change in Y per unit of that X with the other Xs held constant." },
      { t: "Each extra driver reduces delivery time by 1.1%", why: "Wrong: the coefficient is in the units of Y (minutes) per driver, not a percentage." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-021", topic: "regression", level: 3,
    q: "A multiple regression gives ŷ = 12.5 + 0.8·X1 + 3.2·X2 − 0.05·X3. What is the predicted Y for X1 = 40, X2 = 5 and X3 = 200?",
    options: [
      { t: "70.5", why: "Wrong: this adds the X3 term instead of subtracting it (12.5 + 32 + 16 + 10)." },
      { t: "50.5", why: "Correct: 12.5 + 0.8 × 40 + 3.2 × 5 − 0.05 × 200 = 12.5 + 32 + 16 − 10 = 50.5." },
      { t: "38.0", why: "Wrong: 32 + 16 − 10 leaves out the constant 12.5." },
      { t: "59.5", why: "Wrong: 0.05 × 200 is 10, not 1; this slip gives 12.5 + 32 + 16 − 1." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-022", topic: "regression", level: 3,
    q: "Model A (X1, X2): R-Sq = 81.0%, R-Sq(adj) = 79.8%. Model B (X1, X2, X3): R-Sq = 81.3%, R-Sq(adj) = 78.9%. Which conclusion is best?",
    options: [
      { t: "Choose model B, because its R-Sq is higher", why: "Wrong: R² never decreases when a term is added, even a useless one, so it cannot be used to compare models with different numbers of terms." },
      { t: "Choose model B, because it uses more information", why: "Wrong: extra terms that do not explain variation make the model more complex and less reliable, not better." },
      { t: "Reject the two models, since R-Sq(adj) is below R-Sq", why: "Wrong: R²-adj is always at or below R²; the gap alone is not a reason to reject a model." },
      { t: "Choose model A, because adding X3 lowers R-Sq(adj)", why: "Correct: R²-adj penalises extra terms; it fell from 79.8% to 78.9%, so X3 adds no real explanatory value." }
    ],
    answer: 3, ref: "Web: Minitab Support (R-sq and R-sq adjusted)"
  },
  {
    id: "IM-023", topic: "regression", level: 3,
    q: "Multiple regression output (α = 0.05): Constant P = 0.003; X1 P = 0.000; X2 P = 0.412; X3 P = 0.021. What should the analyst do next?",
    options: [
      { t: "Remove X1, which has the smallest p-value", why: "Wrong: the smallest p-value marks the most significant term, the one most worth keeping." },
      { t: "Remove X2 and X3 together, then refit", why: "Wrong: X3 is significant (0.021 < 0.05); also remove terms one at a time, since p-values change when the model changes." },
      { t: "Remove X2 and refit with X1 and X3", why: "Correct: X2 is the only term with p > 0.05; drop it and refit, then recheck the remaining p-values and residuals." },
      { t: "Remove the constant, as its p-value is above zero", why: "Wrong: the constant is normally kept whatever its p-value, and 0.003 is significant anyway." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-024", topic: "regression", level: 2,
    q: "Two predictors in a regression, oven temperature and heater power, are strongly correlated with each other. What is the main consequence?",
    options: [
      { t: "Coefficients become unstable, with inflated standard errors", why: "Correct: multicollinearity makes it hard to separate the effects of the two Xs, so coefficients swing (even change sign) and their p-values rise." },
      { t: "R² falls sharply and the model can no longer predict Y", why: "Wrong: R² and predictions inside the data range are often fine; it is the individual coefficients that become unreliable." },
      { t: "The residuals stop following a normal distribution", why: "Wrong: multicollinearity concerns the relationship among the Xs, not the distribution of the residuals." },
      { t: "The model can no longer be fitted by least squares", why: "Wrong: only perfect collinearity (one X an exact function of another) stops the fit; strong correlation still fits." }
    ],
    answer: 0, ref: "Web: Minitab Support (multicollinearity in regression)"
  },
  {
    id: "IM-025", topic: "regression", level: 3,
    q: "Regressing predictor X2 on the other predictors gives R² = 0.92. What is the variance inflation factor (VIF) of X2, and what does it suggest?",
    options: [
      { t: "0.08; no multicollinearity", why: "Wrong: 1 − R² = 0.08 is the tolerance; VIF is its reciprocal." },
      { t: "12.5; severe multicollinearity", why: "Correct: VIF = 1 / (1 − R²) = 1 / 0.08 = 12.5, above both common thresholds (5 and 10)." },
      { t: "1.09; no concern", why: "Wrong: 1 / 0.92 divides by R² instead of by 1 − R²." },
      { t: "11.5; borderline", why: "Wrong: 0.92 / 0.08 = 11.5 is R² / (1 − R²), not the VIF formula." }
    ],
    answer: 1, ref: "Web: Minitab Support (multicollinearity in regression)"
  },
  {
    id: "IM-026", topic: "regression", level: 2,
    q: "A regression reports VIF values X1 = 1.2, X2 = 7.9, X3 = 8.3. Using the common threshold of 5, what is the best interpretation?",
    options: [
      { t: "All predictors are fine, since every VIF is below 10", why: "Wrong: 10 is the looser convention; against the stated threshold of 5, X2 and X3 are a concern." },
      { t: "X1 is the problem, since its VIF is closest to 1", why: "Wrong: VIF = 1 means the predictor is not correlated with the others, which is the ideal." },
      { t: "VIFs above 5 mean those terms are not significant", why: "Wrong: VIF measures correlation among predictors, not significance; check p-values for that." },
      { t: "X2 and X3 are likely correlated; drop or combine one", why: "Correct: both exceed 5, which suggests they carry overlapping information; removing or combining one usually stabilises the coefficients." }
    ],
    answer: 3, ref: "Web: Minitab Support (multicollinearity in regression)"
  },
  {
    id: "IM-027", topic: "regression", level: 1,
    q: "In the four-in-one residual plots, which plot checks whether the residuals are normally distributed?",
    options: [
      { t: "Residuals versus fits", why: "Wrong: this plot checks constant variance and missing curvature." },
      { t: "Residuals versus observation order", why: "Wrong: this plot checks independence (no trend or cycle over time)." },
      { t: "Normal probability plot", why: "Correct: normal residuals fall close to a straight line; the histogram is a rougher second check." },
      { t: "Main effects plot", why: "Wrong: a main effects plot shows factor effects in DOE and is not a residual plot." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-028", topic: "regression", level: 2,
    q: "The residuals-versus-fits plot shows a funnel: the spread grows as the fitted values increase. Which assumption is violated, and what is a common remedy?",
    options: [
      { t: "Constant variance; transform Y, for example with Box-Cox", why: "Correct: a funnel shows non-constant variance; a transformation of Y such as log or Box-Cox often stabilises it." },
      { t: "Normality; delete the largest residuals", why: "Wrong: the funnel is about spread, and deleting data without a known cause is not a valid remedy." },
      { t: "Independence; collect the data in random order", why: "Wrong: independence is checked on the residuals-versus-order plot, not versus fits." },
      { t: "Linearity; add more X variables", why: "Wrong: missing linearity shows as a curve, not a funnel; adding Xs does not fix unequal variance." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "IM-029", topic: "regression", level: 2,
    q: "The residuals-versus-fits plot shows a clear U-shaped curve. What is the most likely cause?",
    options: [
      { t: "The residuals are not independent over time", why: "Wrong: dependence over time shows on the residuals-versus-order plot." },
      { t: "The model is missing a curved term, such as X²", why: "Correct: a systematic curve means the straight-line model misses curvature; add a quadratic term or transform a variable." },
      { t: "The measurement system has too much variation", why: "Wrong: gage noise adds random scatter, not a systematic U shape." },
      { t: "The predictors are strongly correlated with each other", why: "Wrong: multicollinearity inflates coefficient errors; it does not bend the residual pattern." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-030", topic: "regression", level: 2,
    q: "Residuals plotted in time order drift steadily upward over the study. Which assumption is in doubt?",
    options: [
      { t: "Normality of the residuals", why: "Wrong: normality is judged from the normal probability plot or histogram, not from a trend over time." },
      { t: "Constant variance across the fitted values", why: "Wrong: that is judged from the spread on the residuals-versus-fits plot." },
      { t: "A straight-line link between X and Y", why: "Wrong: missing curvature shows as a curve against the fitted values, not as a drift against time." },
      { t: "Independence of the residuals", why: "Correct: a trend or cycle in time order means the errors are not independent; look for a time-related variable such as tool wear or temperature." }
    ],
    answer: 3, ref: "Lesson 4.3"
  },
  {
    id: "IM-031", topic: "regression", level: 1,
    q: "Which of these is NOT an assumption about linear regression?",
    options: [
      { t: "The residuals are normally distributed", why: "Wrong: this is an assumption, checked with the normal probability plot." },
      { t: "The X values are normally distributed", why: "Correct: regression makes no assumption about the distribution of X; the assumptions concern the residuals." },
      { t: "The residuals have constant variance", why: "Wrong: this is an assumption, checked with the residuals-versus-fits plot." },
      { t: "The residuals are independent of each other", why: "Wrong: this is an assumption, checked with the residuals-versus-order plot." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-032", topic: "regression", level: 2,
    q: "Why is a 95% prediction interval at a given X always wider than the 95% confidence interval at the same X?",
    options: [
      { t: "It uses a higher confidence level", why: "Wrong: both are 95% intervals here; the difference is what they cover." },
      { t: "It ignores the uncertainty in the fitted line", why: "Wrong: it includes that uncertainty and adds more on top." },
      { t: "It also covers the scatter of single values", why: "Correct: the CI covers the mean Y at that X; the PI covers one new observation, so it adds the residual scatter (σ²) to the uncertainty of the line." },
      { t: "It is computed only for X values outside the data", why: "Wrong: both intervals are computed at any X, and both should be used inside the data range." }
    ],
    answer: 2, ref: "Web: Minitab Support (confidence vs prediction intervals)"
  },
  {
    id: "IM-033", topic: "regression", level: 3,
    q: "Regression prediction at X = 30: Fit = 42.0; 95% CI (40.1, 43.9); 95% PI (36.5, 47.5). A customer asks for the range likely to contain the value of the next single part. Which range should you quote?",
    options: [
      { t: "36.5 to 47.5", why: "Correct: a single future part needs the prediction interval, which covers individual values, not just the mean." },
      { t: "40.1 to 43.9", why: "Wrong: the confidence interval covers the mean response at X = 30; individual parts scatter more widely." },
      { t: "Exactly 42.0", why: "Wrong: the fit is a point estimate; any single part will differ from it by random variation." },
      { t: "40.1 to 47.5", why: "Wrong: this mixes the lower CI limit with the upper PI limit and has no defined coverage." }
    ],
    answer: 0, ref: "Web: Minitab Support (confidence vs prediction intervals)"
  },
  {
    id: "IM-034", topic: "regression", level: 1,
    q: "Where are the confidence and prediction bands around a regression line narrowest?",
    options: [
      { t: "At X = 0, the intercept", why: "Wrong: X = 0 is often far from the data, where the bands are wide." },
      { t: "At the mean of the X values", why: "Correct: uncertainty in the fitted line is smallest at x̄ and grows with distance from it, so both bands are narrowest there." },
      { t: "At the smallest X in the data", why: "Wrong: the ends of the data range are furthest from x̄, so the bands are widest there." },
      { t: "At the largest X in the data", why: "Wrong: like the smallest X, this is far from x̄, where the bands flare out." }
    ],
    answer: 1, ref: "Web: Minitab Support (confidence vs prediction intervals)"
  },
  {
    id: "IM-035", topic: "regression", level: 1,
    q: "In a Box-Cox transformation, what does λ = 0 mean?",
    options: [
      { t: "Use Y as it is", why: "Wrong: no transformation corresponds to λ = 1 (Y¹ = Y)." },
      { t: "Take the square root of Y", why: "Wrong: the square root corresponds to λ = 0.5." },
      { t: "Take the natural log of Y", why: "Correct: Y⁰ would be 1 for every value, so by definition λ = 0 means ln Y. Y must be positive." },
      { t: "Take the reciprocal 1/Y", why: "Wrong: the reciprocal corresponds to λ = −1." }
    ],
    answer: 2, ref: "Lesson 4.3"
  },
  {
    id: "IM-036", topic: "regression", level: 3,
    q: "A Box-Cox analysis gives a rounded λ = −0.5, applied as Y' = Y^λ. What is the transformed value of an observation Y = 25?",
    options: [
      { t: "5", why: "Wrong: 25^0.5 = 5 uses λ = +0.5 (square root) instead of −0.5." },
      { t: "0.04", why: "Wrong: 1/25 = 0.04 is the reciprocal, λ = −1." },
      { t: "−12.5", why: "Wrong: this multiplies Y by λ; Box-Cox raises Y to the power λ." },
      { t: "0.2", why: "Correct: 25^−0.5 = 1/√25 = 1/5 = 0.2 (λ = −0.5 is the reciprocal square root)." }
    ],
    answer: 3, ref: "Web: NIST/SEMATECH e-Handbook of Statistical Methods"
  },
  {
    id: "IM-037", topic: "regression", level: 2,
    q: "A Box-Cox analysis of cycle-time data gives an estimated λ = 0.94, with a 95% confidence interval for λ from 0.61 to 1.30. What does this suggest?",
    options: [
      { t: "No transformation is needed: the interval contains 1", why: "Correct: λ = 1 means Y unchanged, and it lies inside the interval, so a transformation would bring no real gain." },
      { t: "Use a log transformation, because λ is below 1", why: "Wrong: the log corresponds to λ = 0, which is well outside the interval." },
      { t: "Use a square root, since 0.61 is close to 0.5", why: "Wrong: λ = 0.5 is outside the interval, and the point estimate is near 1." },
      { t: "Square the data, since the upper limit exceeds 1", why: "Wrong: squaring is λ = 2, outside the interval; the interval covering 1 is what matters." }
    ],
    answer: 0, ref: "Lesson 4.3"
  },
  {
    id: "IM-038", topic: "regression", level: 3,
    q: "A quadratic regression gives ŷ = 10 + 4x − 0.5x². What is the predicted Y at x = 4?",
    options: [
      { t: "24", why: "Wrong: this uses −0.5 × 4 = −2 and forgets to square x (10 + 16 − 2)." },
      { t: "18", why: "Correct: 10 + 4 × 4 − 0.5 × 4² = 10 + 16 − 8 = 18." },
      { t: "34", why: "Wrong: this adds the quadratic term instead of subtracting it (10 + 16 + 8)." },
      { t: "8", why: "Wrong: 16 − 8 leaves out the constant 10." }
    ],
    answer: 1, ref: "Lesson 4.3"
  },
  {
    id: "IM-039", topic: "regression", level: 1,
    q: "What do stepwise regression and best subsets regression help an analyst do?",
    options: [
      { t: "Transform a non-normal Y into a normal one", why: "Wrong: that is what Box-Cox and other transformations do." },
      { t: "Check the residuals for constant variance", why: "Wrong: that is done with the residuals-versus-fits plot." },
      { t: "Measure the strength of one X-Y relationship", why: "Wrong: that is the correlation coefficient r." },
      { t: "Choose which predictors to keep", why: "Correct: stepwise adds or removes terms by significance; best subsets compares all combinations on criteria such as R²-adj and S. Results still need process judgement." }
    ],
    answer: 3, ref: "Web: Minitab Support (stepwise and best subsets regression)"
  },

  // ---------- doe (Black Belt scope, bonus) ----------
  {
    id: "IM-040", topic: "doe", level: 1,
    q: "A baker tests two oven temperatures and two baking times to see their effect on a crust colour score. What are the factors?",
    options: [
      { t: "Oven temperature and baking time", why: "Correct: factors are the inputs (Xs) deliberately changed in the experiment." },
      { t: "The crust colour score", why: "Wrong: the measured outcome is the response (Y)." },
      { t: "The two settings of each input", why: "Wrong: the settings of a factor are its levels." },
      { t: "Each temperature-time combination", why: "Wrong: a combination of factor levels is a treatment (one run of it is a trial)." }
    ],
    answer: 0, ref: "Lesson 5.1"
  },
  {
    id: "IM-041", topic: "doe", level: 3,
    q: "A full factorial experiment has 4 factors at 2 levels, and every treatment combination is run twice in total (2 replicates). How many runs are needed?",
    options: [
      { t: "8", why: "Wrong: 2 × 4 multiplies levels by factors; the number of combinations is levels raised to the power of factors." },
      { t: "16", why: "Wrong: 2⁴ = 16 is one replicate only; each combination is run twice." },
      { t: "32", why: "Correct: 2⁴ = 16 combinations × 2 replicates = 32 runs." },
      { t: "48", why: "Wrong: 16 × 3 would be three runs of each combination, one more than stated." }
    ],
    answer: 2, ref: "Lesson 5.1"
  },
  {
    id: "IM-042", topic: "doe", level: 2,
    q: "On an interaction plot for factors A and B, the two lines clearly cross. What does this indicate?",
    options: [
      { t: "Neither factor affects the response", why: "Wrong: crossing lines show the response changing with the factors; no effect would give flat lines." },
      { t: "The effect of A depends on the level of B", why: "Correct: non-parallel lines mean an A×B interaction; parallel lines would mean no interaction." },
      { t: "Factors A and B are correlated inputs", why: "Wrong: in a balanced factorial design the factors are set independently; interaction concerns their joint effect on Y." },
      { t: "The runs were not carried out in random order", why: "Wrong: the plot shows effects, not the run order; randomisation is checked from the plan." }
    ],
    answer: 1, ref: "Lesson 5.1"
  },
  {
    id: "IM-043", topic: "doe", level: 3,
    q: "A 2² experiment gives these average responses: A low/B low = 20; A high/B low = 30; A low/B high = 22; A high/B high = 40. What is the main effect of A?",
    options: [
      { t: "4", why: "Wrong: 4 is the A×B interaction effect: ((20 + 40) − (30 + 22)) / 2." },
      { t: "6", why: "Wrong: 6 is the main effect of B: (22 + 40)/2 − (20 + 30)/2 = 31 − 25." },
      { t: "28", why: "Wrong: (30 + 40) − (20 + 22) = 28 compares sums; an effect compares averages." },
      { t: "14", why: "Correct: average at A high = (30 + 40)/2 = 35; at A low = (20 + 22)/2 = 21; effect = 35 − 21 = 14." }
    ],
    answer: 3, ref: "Lesson 5.1"
  },
  {
    id: "IM-044", topic: "doe", level: 2,
    q: "Why are the runs of a designed experiment carried out in random order?",
    options: [
      { t: "To spread unknown time-related noise across all treatments", why: "Correct: randomisation stops drifts such as tool wear or warm-up from lining up with one factor level and biasing its effect." },
      { t: "To reduce the total number of runs needed", why: "Wrong: run count is cut by a fractional factorial design, not by run order." },
      { t: "To estimate pure error from repeated runs", why: "Wrong: repeating treatment combinations (replication) is what estimates experimental error." },
      { t: "To remove a known nuisance such as material batch", why: "Wrong: a known, controllable nuisance variable is handled by blocking." }
    ],
    answer: 0, ref: "Lesson 5.1"
  },
  {
    id: "IM-045", topic: "doe", level: 2,
    q: "A team replaces a 2⁵ full factorial (32 runs) with a half fraction, 2⁵⁻¹. What is the main trade-off?",
    options: [
      { t: "It needs 64 runs instead of 32", why: "Wrong: a half fraction halves the runs; 64 would be the full design run twice." },
      { t: "It can no longer estimate any main effects", why: "Wrong: main effects are still estimated; what is lost is the ability to separate some effects from others." },
      { t: "It halves the runs, but some effects become aliased", why: "Correct: 2⁴ = 16 runs; each estimate is confounded with another effect. This design is resolution V, so main effects and two-factor interactions are aliased only with higher-order ones." },
      { t: "It requires each factor to have three levels", why: "Wrong: it is still a two-level design; three-level designs are a different family." }
    ],
    answer: 2, ref: "Lesson 5.1"
  },

  // ---------- solutions (course-only, bonus) ----------
  {
    id: "IM-046", topic: "solutions", level: 2,
    q: "Which rule best supports the idea-generation stage of brainstorming?",
    options: [
      { t: "Evaluate each idea as soon as it is proposed", why: "Wrong: early criticism makes people hold back; evaluation comes after ideas are collected." },
      { t: "Defer judgement and aim for many ideas", why: "Correct: quantity first, no criticism, and building on others' ideas; screening comes later." },
      { t: "Let the most senior person speak first", why: "Wrong: this anchors the group on one view and discourages other ideas." },
      { t: "Accept only practical, low-cost ideas", why: "Wrong: filtering belongs to the selection step (e.g. Pugh matrix, cost-benefit), not to idea generation." }
    ],
    answer: 1, ref: "Lesson 5.3"
  },
  {
    id: "IM-047", topic: "solutions", level: 3,
    q: "A weighted Pugh matrix compares three options with the current process (baseline = 0). Weights: Cost 3, Speed 5, Quality 4. Scores (Cost, Speed, Quality): A = (+1, 0, −1); B = (−1, +1, +1); C = (+1, +1, −1). Which option scores highest?",
    options: [
      { t: "Option B, with a score of 6", why: "Correct: A = 3 + 0 − 4 = −1; B = −3 + 5 + 4 = 6; C = 3 + 5 − 4 = 4. B has the highest weighted score." },
      { t: "Option C, with a score of 4", why: "Wrong: C's score is right, but it loses on Quality (weight 4) where B gains, so B is higher." },
      { t: "Options B and C tie at +1 each", why: "Wrong: +1 is the unweighted count of pluses minus minuses; the matrix must apply the weights." },
      { t: "Option A, as the cheapest option", why: "Wrong: A gains on Cost but loses more on Quality, scoring −1, worse than the baseline." }
    ],
    answer: 0, ref: "Lesson 5.3"
  },
  {
    id: "IM-048", topic: "solutions", level: 2,
    q: "What is the main purpose of a pilot before full implementation of a solution?",
    options: [
      { t: "To replace the need for a control plan", why: "Wrong: a control plan is still needed to sustain the gains after full rollout." },
      { t: "To collect baseline data on the current process", why: "Wrong: baseline data are collected in Measure, before solutions exist." },
      { t: "To prove the root cause for the first time", why: "Wrong: root causes are verified in Analyze; the pilot tests the solution." },
      { t: "To test the solution on a small scale first", why: "Correct: a pilot confirms the solution works and surfaces issues at low risk and cost before the full rollout." }
    ],
    answer: 3, ref: "Lesson 5.3"
  },
  {
    id: "IM-049", topic: "solutions", level: 1,
    q: "What does Kaizen mean in Lean?",
    options: [
      { t: "A card system that signals replenishment", why: "Wrong: that is Kanban." },
      { t: "A device that makes errors impossible", why: "Wrong: that is Poka-yoke (mistake-proofing)." },
      { t: "Continuous improvement in small steps", why: "Correct: Kaizen is ongoing, incremental improvement involving everyone; a Kaizen event (blitz) is a short, focused workshop applying it." },
      { t: "Levelling production volume and mix", why: "Wrong: that is Heijunka." }
    ],
    answer: 2, ref: "Lesson 5.2"
  },
  {
    id: "IM-050", topic: "solutions", level: 3,
    q: "Using benefit-cost ratio = benefit ÷ cost, which solution has the highest ratio? A: cost $10,000, benefit $25,000. B: cost $40,000, benefit $80,000. C: cost $8,000, benefit $28,000. D: cost $30,000, benefit $45,000.",
    options: [
      { t: "A, ratio 2.5", why: "Wrong: 25,000 / 10,000 = 2.5, lower than C." },
      { t: "C, ratio 3.5", why: "Correct: ratios are A 2.5, B 2.0, C 3.5, D 1.5. Note that B gives the largest net benefit ($40,000), so the ratio is one criterion among several." },
      { t: "B, ratio 2.0", why: "Wrong: B has the largest net benefit, but its ratio (80,000 / 40,000 = 2.0) is lower than C's." },
      { t: "D, ratio 1.5", why: "Wrong: 45,000 / 30,000 = 1.5, the lowest of the four." }
    ],
    answer: 1, ref: "Lesson 5.3"
  }
]);
