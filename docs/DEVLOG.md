# DEVLOG

## Current status

348 questions and 27 learn pages, all fact-checked. Modes: Random round, By topic/phase round, Exam (IASSC rules), Review mistakes (Leitner), Learn. 502 questions, 27 learn pages, 54 resources (30 tables/examples/cheat sheets, 24 diagrams), all fact-checked. Phase and mode colours. Public docs and licenses (MIT code, CC BY 4.0 content). Published to GitHub Pages.

## Plan

- Wave 0: research (IASSC GB BoK vs course coverage) + app shell (static HTML/CSS/JS, no build, GitHub Pages).
- Wave 1: seven question/learn packs written in parallel (define1, define2, measure1, measure2, analyze, improve, control), one file pair per agent.
- Wave 2: independent fact-check of every pack; validator script; browser pass (both themes, 360 px).
- Publish: public GitHub repo + GitHub Pages.

## Decisions

- Plain static site, no framework or build step: light, works from disk and on Pages.
- Data as `.js` scripts, not JSON, so `file://` works (see docs/CONTENT_GUIDE.md).
- Progress lives in each viewer's browser (localStorage); a colleague gets their own progress.
- Public repo: GitHub Pages on a free account needs a public repo. Content is original wording, no course text copied.

## Bug register

| ID | Status | Description |
|---|---|---|
| C-1 | fixed | IM-011, CT-010, D1-048: correct option was the odd one out by wording (coordinator browser pass). |

## Log

- 2026-10-27: repo created; content guide and topic list written.
- 2026-10-27: research done (docs/research/iassc-gb-bok.md). IASSC GB BoK has no DOE: Improve = correlation + regression. Course-only topics flagged `bok: false` (dfss, pm-tools, teams, probability, doe, solutions): ~5 questions each, excluded from mocks. Topic names renamed to show every BoK item.
- 2026-10-27: wave 1: seven packs written, each fact-checked by an independent agent (fixes in each pack's commit). User asked for explicit modes: Random and Topic rounds with a Confirm step, Exam per IASSC rules; shell reworked.
- 2026-10-27: network drop stopped four agents mid-task; resumed, no work lost.
- 2026-10-27: wave-end review fixed 6 bugs (DST streak, midnight due dates, double-counted review card, round scope, key repeat, timeout submit). User approved public repo + Pages; publish blocked once by the permission check, now approved.
- 2026-10-27: wave 2 started: UI/UX + Resources section (1 agent); resource tables/examples (1); diagrams Define/Measure and Analyze/Improve/Control (2); +152 questions in packs define3, measure3, analyze2, improve2, control2 (5), each to be fact-checked. Then publication skill, short docs, publish.
- 2026-10-27: wave 2 done. Five new packs (+154 questions) and all resources fact-checked (diagram fixes: fishbone placed in Measure on the roadmap, p-value area label, slope triangle). Wave-end review: double-click Confirm guard, per-card streak, stricter SVG inertness check. Question id now shown under explanations. Open-source audit clean (no secrets/PII, noreply identity, history never pushed). Docs, licenses, issue forms and a path-filtered validate workflow added.

## Course material errors found (not used in questions)

- 1.1: sigma table misaligned (3σ paired with 6,210 DPMO); first-call success called "RTY" (it is FTY); "Champions coach MBBs".
- 2.5: TPY/FPY definitions confused.
- 3.4: Poisson example switches λ = 15 and λ = 3; χ² sum of k standard normals has k df, not k−1.
- 3.5/3.6: appraiser technique listed as a repeatability cause; Cp called "long-term"; Pp/Ppk "only when control cannot be evaluated".
- 4.1: p-value read as "probability the difference is due to chance"; non-rejection treated as proof of H0; Mann-Whitney "compares means".
- 4.3: regression "implies causation"; log/Box-Cox called linear transformations.
- 5.1: blocking "reduces experiment size"; replication "alters conditions".
- 6.1: c chart "for defectives"; u chart "measures defectives". 6.3: Seiton called "Stabilize".
