# Contributing

Thanks for helping. Most contributions fix a question, add questions or improve a learn page. You need a browser, a text editor and Node.js 20 or later for the validator; there is no build step and nothing to install.

## Report a question error

Open a [Question error issue](https://github.com/TheMattHub/lssgb-exam-trainer/issues/new?template=question-error.yml). Give:

1. The question id, shown under the explanation after you confirm (for example `M2-007`).
2. What is wrong: the keyed answer, an explanation, a number or the wording.
3. Your evidence: a page of the IASSC Body of Knowledge, a textbook or a public web source.
4. The fix you suggest, if you have one.

Check the source line first. "Lesson x.y" points to the lesson numbering of the Green Belt course the author took; "Web:" names a public source; "BoK" points to the IASSC Body of Knowledge.

## Add or fix content

All content lives in plain JavaScript files under `data/`, so the app also runs when you open `index.html` from disk. [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) defines every field.

| What | File | Registry |
| --- | --- | --- |
| Phases and topics | `data/topics.js` | `TOPICS` |
| Questions | `data/questions/<pack>.js` | `QB.add([...])` |
| Learn pages | `data/learn/<pack>.js` | `LEARN.add([...])` |
| Resources | `data/resources/<file>.js` | `RES.add([...])` |
| Diagrams | `assets/diagrams/<name>.svg` | referenced from a resource's `img` |

To make a change:

1. Edit the pack file, or add a new one.
2. If you added a new data file, add a `<script>` tag for it in `index.html`, next to the others of its kind. The app loads only the files listed there.
3. Give each new question the next free id of its pack. Never reuse an id, even of a deleted question: learners' saved progress refers to questions by id.
4. Run the validator from the repo folder:

   ```sh
   node tools/validate.mjs
   ```

   It ends with a line such as `OK: 502 questions, 27 learn pages, 54 resources, no errors.` and exits with code 1 on any error.
5. Open the app (see [Preview locally](#preview-locally)) and answer your new questions once.

## Content rules

- **Original wording.** Do not copy real exam questions, course material or published question banks.
- **One best answer.** Exactly four options and one correct answer. No "all of the above" or "both A and B": the app shuffles the options.
- **An explanation per option.** Each `why` starts with `Correct:` or `Wrong:` and says in one or two sentences what the option confuses or when it would be true.
- **Plausible distractors** of similar length to the correct answer.
- **Exact numbers.** Work out every calculation and show the working in the correct option's `why`.
- **A source** in `ref` for every question.
- **Standard conventions** from IASSC and AIAG (for example Cpk with 3σ, %GRR bands of 10% and 30%).

Diagrams are hand-written SVG in the palette and style that the content guide describes.

## Code layout

Plain HTML, CSS and JavaScript, with no framework and no network requests. A Content Security Policy in `index.html` allows scripts, styles and images from the site itself only, and the app renders all data as text.

- `index.html`: page frame and the ordered list of scripts.
- `css/app.css`: all styles, with light and dark tokens.
- `js/registry.js`: the `QB`, `LEARN` and `RES` registries that the data files fill.
- `js/store.js`: progress in localStorage and the Leitner schedule.
- `js/quiz.js`: Random, By topic and Review modes.
- `js/mock.js`: Exam mode.
- `js/learn.js`: Learn pages and search.
- `js/resources.js`: the Resources index and pages.
- `js/app.js`: router, Home and Settings.
- `js/dom.js`: small DOM helpers.
- `js/theme-init.js`: sets the theme before the first paint.
- `tools/validate.mjs`: checks the data files.

## Preview locally

Double-click `index.html`, or serve the folder so the address bar shows a normal URL:

```sh
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Pull requests

Keep one topic or fix per pull request. The pull request template lists the checks. A GitHub Action runs the validator when a pull request changes the data, assets or code.

By contributing you agree that your code is licensed under MIT and your content under CC BY 4.0, as described in [LICENSE](LICENSE) and [LICENSE-CONTENT.md](LICENSE-CONTENT.md). Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).
