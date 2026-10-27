# Content guide

The contract between the question/learn data files and the app. Writers, checkers and the app all follow it.

## Files

- `data/topics.js` defines phases and topics (ids used everywhere else). Topics with `bok: false` are course-only (not in the IASSC GB Body of Knowledge): keep them to ~5 questions, they are excluded from mock exams.
- `docs/research/iassc-gb-bok.md` has the syllabus mapping, gap notes and the conventions to use where sources disagree.
- `data/questions/<pack>.js` holds one pack of questions; `data/learn/<pack>.js` holds the learn pages for the same topics.
- Data files are plain scripts (not JSON) so the app also works when `index.html` is opened from disk, where `fetch` of local files is blocked.

## Question format

```js
QB.add([
  {
    id: "MSA-007",              // pack prefix + number, unique, never reused
    topic: "msa",               // a topic id from data/topics.js
    level: 2,                   // 1 recall, 2 understand/apply, 3 calculate or analyse a scenario
    q: "A gage R&R study shows 35% of total variation. What should the team do?",
    options: [
      { t: "Accept the gage; anything under 50% is fine.", why: "Wrong: above 30% the measurement system is unacceptable under AIAG guidelines." },
      { t: "Improve the measurement system before collecting process data.", why: "Correct: >30% %GRR is unacceptable; fix the gage first or you study measurement noise, not the process." },
      { t: "...", why: "Wrong: ..." },
      { t: "...", why: "Wrong: ..." }
    ],
    answer: 1,                  // index of the correct option (0-3)
    ref: "Lesson 3.5"           // course lesson, or "Web: <source>" for material found online
  }
]);
```

Rules:

1. Exactly 4 options, exactly 1 correct. No "all of the above", "none of the above" or "both A and B": the app shuffles options.
2. Every `why` starts with `Correct:` or `Wrong:` and explains the reason in 1-2 sentences. For a wrong option, say what concept it confuses or what it would be true for. That is the learning value.
3. Distractors are plausible (common confusions, swapped terms, calculation slips), similar length to the right answer. The correct answer must not be the longest option by habit.
4. Style matches the IASSC exam: plain English, one clear best answer, no trick wording. Mix: ~30% level 1, ~45% level 2, ~25% level 3 (numeric or scenario).
5. Calculations: work them out and state the working in the correct option's `why`. Numbers must be exact.
6. Original wording. Do not copy course text or published question banks verbatim.
7. Use standard IASSC/AIAG conventions (e.g. Cpk with 3σ, %GRR <10% good / 10-30% marginal / >30% bad, 1.5σ shift, 3.4 DPMO at 6σ).

## Learn page format

```js
LEARN.add([
  {
    topic: "msa",                         // same topic id
    summary: "Two or three sentences: what it is and why a Green Belt cares.",
    points: ["Key fact", "Key fact"],     // 5-12 bullets, exam-relevant facts
    formulas: [{ name: "%GRR", f: "%GRR = σ_GRR / σ_total × 100" }],   // optional
    table: { title: "...", head: ["..."], rows: [["..."]] },          // optional, one small table
    traps: ["Common exam confusion and how to tell them apart"],       // 2-5
    terms: [{ term: "Bias", def: "..." }]                              // optional glossary
  }
]);
```

All text is plain text (rendered with `textContent`, no HTML). Use Unicode for maths: σ, μ, ≤, ≥, ², √, ×, ±, x̄.
