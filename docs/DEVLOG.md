# DEVLOG

## Current status

Wave 0 research done. App shell running; wave 1 (seven packs) running.

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

## Log

- 2026-10-27: repo created; content guide and topic list written.
- 2026-10-27: research done (docs/research/iassc-gb-bok.md). IASSC GB BoK has no DOE: Improve = correlation + regression. Course-only topics flagged `bok: false` (dfss, pm-tools, teams, probability, doe, solutions): ~5 questions each, excluded from mocks. Topic names renamed to show every BoK item.
