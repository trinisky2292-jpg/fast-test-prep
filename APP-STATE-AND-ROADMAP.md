# FAST Test Prep — App State & Roadmap (master reference)

The one place that captures WHAT this app is, HOW it was built, and WHAT to continue. Read this first when returning to the app. (Build mechanics for a new grade/subject live in the `fast-grade-builder` skill; the dated session details live in `BUILD-LOG-2026-06-02.md`.)

## What it is
Florida FAST / B.E.S.T. test-prep web app for Aleena (Grade 6, Apollo Middle, Hollywood, Broward). Personal side project — separate from the Air Duct Cleaning business (the main business). Static HTML/CSS/JS, no backend, DB-first so it costs $0 in AI tokens to use.
- Repo: `github.com/trinisky2292-jpg/fast-test-prep` · Host: **GitHub Pages** (auto-deploy ~1–2 min on push to main).
- Live: https://trinisky2292-jpg.github.io/fast-test-prep/ · Login: `aleena` / `1234`.

## How it's built (architecture)
- **Generic-by-subject engine:** `book.html`, `lesson.html`, `quiz.html`, `worksheet.html` all read `?subject=<x>` and fetch `data/books/<x>*.json`. A new book "just works" once its JSON + a home button exist.
- **Grade namespacing:** `js/grade.js` (`FastGrade`), `data/grade5/`, `data/grade6/`. Grade 5 preserved on branch `grade-5-final` + the grade switcher.
- **Per lesson:** 📖 Learn (worked examples) · 📺 Watch (oEmbed-verified, lesson-matched video) · ✏️ Practice (DB questions; quiz serves a RANDOM 10 from each lesson's bank) · 🖨️ Worksheet.
- **Fun:** `js/funfx.js` (sounds, points, streaks, confetti). Auth gate via localStorage.
- Data lives in `data/books/`: `<subject>.json`, `<subject>-practice/tN.json`, `<subject>-worksheets.json`, `ela-reading/cN.json`, `vocab.json`, `writing.json`.

## Current state (all LIVE, verified)
| Section | Lessons/Sets | Questions | Notes |
|---|---|---|---|
| 📘 Math | 58 | 2,320 | 40/lesson, random 10/replay, worksheets, videos |
| ✏️ Grammar | 35 | 1,400 | 40/lesson, worksheets, videos |
| 🔤 Vocabulary | 8 | 320 | 40/lesson, worksheets, videos |
| 🔬 Science | 32 | 320 | 10/lesson, worksheets, videos |
| 🌍 Social Studies | 45 | 450 | 10/lesson, worksheets, videos |
| 📖 ELA Reading | 26 sets | 205 | original passages, paired/poems/multiselect, weighted by state category |
| 📝 Writing | — | — | B.E.S.T. argumentative: 8 lessons + worked example + 6 source-based prompts + 0–12 Writing Coach |

~5,015 DB questions total. Every video oEmbed-verified + lesson-matched; answer keys spot-checked by hand each batch.

## QA / ops (how we keep it correct)
- Validator: `python3 ~/.claude/skills/fast-grade-builder/validate.py` (structure + writing/reading/letter-agnostic checks; 0 errors required before push).
- HARD: push each agent-built file only AFTER its completion notification (agents run post-write QA passes; pushing early once shipped a wrong IQR key). Re-validate + re-push if `git status` shows Modified after your push.
- Explanations must be LETTER-AGNOSTIC (quote the words) — a reshuffle can make "Choice B" stale/false.
- curl/oEmbed need `dangerouslyDisableSandbox:true`.

## What to continue (roadmap / open items)
1. **(Optional) Deepen Science + Social Studies to 40 Q/lesson** (currently 10) — same per-topic agent pattern as Math/Grammar. Biggest remaining content lift.
2. **(Optional) More reading + vocab** — reading is the heaviest FAST category; keep adding original passage sets and vocab depth.
3. **Writing:** more prompts; the Coach is rule-based (free). An AI essay scorer was deliberately skipped (needs an OpenRouter key = against the no-bring-your-own-key rule) — revisit only if a shared key is ever configured.
4. **Payments (DEFERRED by Anthony):** free 1-month trial → $10/mo, gate practice tests. Not now — app stays free + open for Aleena. No backend yet.
5. **Next grade (e.g. Grade 7):** invoke the **`fast-grade-builder`** skill and follow its 5-step pipeline; add `data/grade7/…`.
6. Nice-to-haves: progress-tracking polish, more videos, mobile QA pass.

## Pointers
- Skill: `~/.claude/skills/fast-grade-builder/` (SKILL.md + validate.py) — invoke for any build/expansion.
- Playbook: `BUILD-PLAYBOOK.md` · Session detail: `BUILD-LOG-2026-06-02.md` · Textbooks: `BROWARD-GRADE6-TEXTBOOKS.md` · Reading research: `ELA-GRADE6-RESEARCH.md`.
- Obsidian mirror: `~/Desktop/AirDuctMiami-Brain/Personal/Aleena-FAST-App/`.
- Memory: `project_aleena_6th_grade_gem.md`, `reference_aleena_broward_g6_textbooks.md`, `reference_fast_grade_builder_skill.md`.
