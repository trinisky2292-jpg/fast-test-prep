# FAST Test Prep — Build Playbook (repeatable process for every grade & subject)

> Saved 2026-06-02 at Anthony's request. This is the EXACT order we follow so we never make a mistake when we add a new grade (or a new subject). Do the research FIRST, then build. DB-first — $0 AI tokens at runtime.

## The 4-step research-then-build order

### STEP 1 — Research what the STATE requires
For the grade + subject, pull the Florida **B.E.S.T. / FAST** facts:
- The **reporting categories** and their **% weight** on the test (most-weighted category = build first).
- The **item types** (multiple choice, multiselect "Select TWO", two-part evidence/EBSR, hot-text, grid-match, equation editor).
- **Format**: # of items, genre split, PM1/PM2/PM3 windows, time.
- The **standards** (e.g. MA.6.*, ELA.6.*, SC.6.*, SS.6.*).
- Sources: fldoe.org Test Design Summaries & blueprints, CPALMS, flfast.org. (These sites often 403 scrapers — use on-disk transcriptions + web-search snippets and label confirmed-vs-inferred.)
- **Output:** a `<SUBJECT>-GRADE<N>-RESEARCH.md` doc.

### STEP 2 — Get the REAL practice-test items
- Pull **officially-released state sample questions** + answer keys (flfast.org practice/training tests, CPALMS sample items).
- Use them as the **GOLD style reference** — copy how the state writes stems and the answer-then-"prove-it-with-the-text" pattern.
- NEVER fabricate official items; cite the exact source URL on each. Document item types in `STATE-ITEM-STYLE.md`.

### STEP 3 — Research the BOOKS the district uses
- Find the **district's adopted textbooks** (Broward County + cross-check Florida state adoption + Miami-Dade) for each subject, with **publisher + edition + Table of Contents** (chapters → lessons).
- Sources: district adoption PDFs, FLDOE state adoption list, publisher Florida program pages.
- **Output:** a `<COUNTY>-GRADE<N>-TEXTBOOKS.md` doc. (See `BROWARD-GRADE6-TEXTBOOKS.md` as the model.)
- Confirmed Grade 6 Broward books: enVision (Math, Savvas), Elevate Science Course 1 (Savvas), World History: Ancient Civilizations (NatGeo), myPerspectives (ELA, Savvas).

### STEP 4 — Build it out (per subject)
Structure each subject as **Book → Topics (the textbook chapters) → Sub-topics (lessons, e.g. 1-1, 1-2)** matching the book's TOC exactly so the kid follows along with class.

Every lesson gets all four:
- 📖 **Learn** — worked examples that show HOW to do it (in the DB).
- 📺 **Watch** — a REAL, **oEmbed-verified** video that **matches the exact lesson skill** (NO misguiding — verify the video's actual title/topic fits the lesson). Prefer Math with Mr. J / Khan Academy.
- ✏️ **Practice** — **10 verified multiple-choice questions in the DB** (NO AI, $0 tokens). Reuses the quiz engine (sounds/points/streaks/feedback).
- 🖨️ **Worksheet** — printable, 5 problems + answer key, keyed to the lesson.

**ELA is special:** organize by the **state READING categories (weighted)** as passage SETS — NOT the textbook's themes — because FAST tests reading skills. Include the two-part evidence format (answer Q, then "which detail proves it" Q). Grammar/conventions = a separate small book.

**Hard rules:**
- DB-first. AI practice = optional bonus only. App must cost the owner $0 to use (free models default).
- Every answer solved & double-checked (a wrong answer key harms the kid).
- Every video oEmbed-verified live AND topic-matched to its lesson.
- Files are namespaced so grades coexist (data/grade5, data/grade6, …; data/books/<subject>.json; data/books/<subject>-practice/tN.json; data/books/<subject>-worksheets.json; data/books/ela-reading/cN.json).

### STEP 5 — Verify + ship
- Playwright headless smoke test EVERY page: renders, no console errors, answers grade correctly, navigation works.
- Push to GitHub Pages (auto-deploys ~1-2 min). Verify the live URL (curl) — push ≠ live.
- Live app: https://trinisky2292-jpg.github.io/fast-test-prep/

## Orchestration pattern
Fan out one subagent **per topic/chapter** (or per subject) for content generation; each verifies its own answers; HENRY validates coverage + runs the Playwright gate centrally before pushing. This is how Grade 6 was built (8 math-topic agents → 580 questions; per-subject book + worksheet + video agents).

## For the NEXT grade (e.g. Grade 7)
Repeat Steps 1-5 with that grade's standards, sample items, and adopted books. The pipeline is identical — only the grade-specific content changes. Add `data/grade7/…` alongside the existing grades; the grade switcher already supports it.
