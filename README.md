# LSSGB Exam Trainer

A small static web app for practising IASSC Lean Six Sigma Green Belt multiple-choice questions and learning from mistakes. Every option comes with the reason it is right or wrong; questions you miss come back for review on a spaced schedule; timed mock exams score you against the 70% pass mark.

Online: _GitHub Pages URL to be added_

## Use it

- **Online:** open the Pages link above.
- **From disk:** download or clone the repo and double-click `index.html`. No install, no server, no internet needed.
- **Local server (optional):** `python -m http.server 8000` in the repo folder, then open http://localhost:8000.

Progress stays in your browser (localStorage). To move it to another device or browser, use Settings → Export progress, then Import progress on the other side. Each person who opens the link has their own progress.

## What it does

- **Practice:** pick phases or topics and a length (10, 20, all). Mistakes due for review come first, then unseen questions, then your weakest topics. Keys: 1-4 or A-D to answer, Enter for the next question.
- **Review mistakes:** questions you got wrong come back the same day. Each right answer moves a question up one box (Leitner): due again after 1, 3, 7, 14 and 30 days. A question counts as mastered from box 3.
- **Mock exam:** quick (25 questions, 45 minutes) or full (100 questions, 3 hours), 20% per DMAIC phase. No feedback until you submit; flag questions and jump with the grid. A refresh resumes the exam with the same clock. Topics marked as bonus (not on the IASSC exam) are left out.
- **Learn:** notes, formulas, exam traps and terms per topic, with a search across notes and question stems.

## Add questions

Questions and learn pages are plain JavaScript files, so the app also works from `file://`:

- `data/topics.js`: phases and topics (ids used everywhere).
- `data/questions/<pack>.js`: `QB.add([ ... ]);`
- `data/learn/<pack>.js`: `LEARN.add([ ... ]);`

The format and writing rules are in [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md). A new pack file also needs a `<script>` tag in `index.html`. Check the data before committing:

```
node tools/validate.mjs
```

It needs only Node (no packages). It prints counts per pack and topic, the spread of correct-answer positions and how often the correct option is the longest, and exits with code 1 on any contract error. The app itself skips items that break the format, so one bad question never blanks the page.

`data/questions/sample.js` and `data/learn/sample.js` are test data; delete them and their two marked `<script>` tags in `index.html` once the real packs are in.

## Code layout

- `index.html`: page frame and the ordered list of scripts.
- `css/app.css`: all styles, light and dark tokens.
- `js/registry.js` (QB, LEARN), `js/store.js` (progress and Leitner), `js/quiz.js` (practice and review), `js/mock.js`, `js/learn.js`, `js/app.js` (router, Home, Settings), `js/dom.js` (helpers), `js/theme-init.js` (theme before first paint).

Plain HTML, CSS and JavaScript: no framework, no build step, no network requests. A Content Security Policy allows scripts and styles from the site itself only, and all data is rendered as text.
