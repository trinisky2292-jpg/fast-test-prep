# COMPETITOR STEAL LIST — Grade 6 FAST / B.E.S.T. Test Prep

Date: 2026-06-02 (Monday)
Our app: static HTML + JSON banks + Gemini/OpenRouter AI-practice mode. Sections = Reading, Grammar, Figurative, Science, Math (official + classic + full bank), Study Videos, Math Skills, Weak Areas, timed quizzes, results-with-celebration. Grade 5 + Grade 6. Has login (accounts exist).

Goal: learn from the best, BEAT them, keep it shippable on a static stack, and build toward a PAID product.

---

## TL;DR — TOP 5 TO STEAL FIRST (read this if nothing else)

1. **IXL "SmartScore 0-100 per skill" + Challenge Zone** — replace raw % with a per-skill mastery number that goes UP and DOWN, with a "Challenge Zone" at 90 you must hold to hit 100. Pure localStorage math. Highest engagement-per-effort win.
2. **Khan-style Mastery progress bars on a standards map** — every B.E.S.T. benchmark (MA.6.NSO.x, ELA.6.R.x) shown as Not Started → Familiar → Proficient → Mastered. Turns our JSON bank into a visible "fill the map" goal.
3. **Diagnostic test flow → auto-generated study plan** (Lumos/i-Ready core mechanic) — a short adaptive-ish placement quiz that writes a ranked weak-areas plan. We already have Weak Areas; make a diagnostic the front door that populates it.
4. **Streaks + daily goal + virtual award collection** (IXL/Khan/Duolingo) — daily streak counter, "answer 10 today" goal ring, and a treasure-hunt/sticker collection that unlocks as skills are mastered. Cheap, sticky, kid-proven.
5. **Real FAST item types in the bank** (Edulastic/CPALMS gap most free tools miss) — multiselect, drag-and-drop, hot-spot, editing-task dropdown, equation editor, table-match, evidence-based (Part A/Part B). Banks/free tools are weak here. Matching the actual test format is our credibility moat.

---

## WE ALREADY BEAT THEM ON

- **100% FREE, no paywall on core practice** — IXL caps free users at ~10 questions/day; i-Ready/Edulastic are district-sold (parents can't easily buy); TestPrep-Online and Lumos lock full tests behind paid packs. We give the full bank free.
- **Verified, FAST-specific item bank** — most free options are either generic Common Core (TestPrep-Online) or thin sample sets. Ours is curated to FAST/B.E.S.T.
- **In-app Study Videos** — Lumos buries videos in paid program; we have a free dedicated video section. Khan has video but no FAST-format practice tied to it.
- **AI practice mode (Gemini/OpenRouter)** — generates fresh, unlimited questions. Khan's "Khanmigo" AI is a paid monthly add-on; Lumos AI tutor is inside a paid program. Ours is free and built in.
- **Instant grade switch (5 ↔ 6)** — most competitors lock you to one grade per login/license. We toggle freely.
- **No data-harvesting / no manipulative monetization** — Prodigy got an FTC complaint for pressuring kids into memberships. Clean reputation is a sellable differentiator to parents.

---

## WHAT EACH COMPETITOR DOES (mined)

### IXL (paid, $9.95–$19.95/mo or $79–$159/yr; free = ~10 Q/day)
- **SmartScore 0-100 per skill**, dynamic — rises and FALLS with answers; harder questions worth more. This is their secret sauce; growth-mindset framing.
- **Challenge Zone at 90** — must answer rigorous items consistently to reach 100/mastery.
- Standards alignment to **Florida B.E.S.T. Grade 6** (math + ELA) with skill plans per textbook (Into Math, Math Nation).
- Gamification: **virtual awards as a treasure hunt** (math) and **sticker/stamp collections** (ELA); new challenges unlock over the year; always shows "how close to next prize."
- Analytics: per-standard mastery reports for teacher/parent.

### Khan Academy (FREE; Khanmigo AI = paid monthly)
- Dedicated **6th grade math (FL B.E.S.T.)** course, custom-curated to benchmarks (Ratios, Rates/%, NSO, Variables/Expressions, Data/Stats).
- **Mastery points** (per exercise/quiz/test, performance-based) + **Mastery levels** (Familiar→Proficient→Mastered) + **Energy points** (effort, not skill) + **Badges** + **Avatars**.
- **Course Challenge** = mixed test across the whole course (a built-in diagnostic).
- Funded by donations → fully free; recently testing AI subscription = signal that even Khan monetizes AI.

### Lumos Learning (FAST-specific; blended paid program + free samples)
- Two **full-length FAST simulators** per grade (format, rigor, pacing).
- **Diagnostic test → auto personalized study plan** (no manual grouping).
- Built-in **AI tutor**, performance dashboards, videos, **mind maps**, **flashcubes**.
- Computer-based UI mirrors the real FAST tools.
- Sells **workbook + online blended** bundles (print + digital) — a monetization angle.

### i-Ready (district-sold; the gold standard for diagnostics)
- **Adaptive diagnostic** — questions get easier/harder, can probe ±3 grade levels.
- **Personalized learning path** auto-built from diagnostic; lessons expand/contract by performance with just-in-time scaffolds.
- Embedded **fluency/number-sense games**.

### CPALMS / FloridaStudents.org (FREE, official state)
- **Original Student Tutorials** — interactive, standard-by-standard online lessons (1,300+).
- **Model Eliciting Activities (MEAs)** — real-world applied problem solving.
- Authoritative B.E.S.T. standards source — good to cite/align against.

### Edulastic / Pear Assessment (free tier + district premium)
- **40+ question types** incl. drag-drop, hot-spot, graphing, multipart (Part A/B). Closest to real FAST tech-enhanced items.
- Auto-grade + instant teacher data.

### Quizizz / Wayground (free + Super paid)
- Heavy **gamification: memes after each question, power-ups, real-time leaderboards, music/SFX**.
- 18+ question types; LMS integrations.

### Prodigy Math (free + Core/Plus/Ultra paid)
- **RPG game wrapper** — avatars, pets/monsters you catch and evolve, spells, quests, world exploration. 100M+ users.
- Math problems gate battle actions.
- **Monetization warning**: FTC complaint — energy-depletion stops progress unless premium, premium-only rewards shown to free kids = pay-to-win pressure. Effective at conversion, BAD for trust. Learn the engagement, reject the dark patterns.

### TestPrep-Online (paid packs / family membership)
- **Every question has a detailed explanation** (what's asked, how to solve, why correct).
- **Step-by-step mode** + **timed mode**; multiple difficulty levels; score reports.
- Sells per-test/family packs — parent-direct purchase model (relevant to us going paid).

### FAST official item types (the format we must match — FLDOE)
- **Math**: Editing Task Choice (dropdown), Selectable Text, Multiselect, Grid, **Equation Editor** (symbol toolbar), Matching Item.
- **ELA**: Selectable Text, Multiselect, **Evidence-Based Selected Response (Part A/Part B)**, Table Match.
- Multi-part items combine types in one question. Three progress-monitoring windows/year.

---

## "STEAL THIS" — PRIORITIZED BY IMPACT vs EFFORT (static HTML/JSON friendly)

| # | Feature | Steal from | Impact | Effort | Why it fits a static app |
|---|---------|-----------|--------|--------|--------------------------|
| 1 | Per-skill **SmartScore 0-100** (up/down) + Challenge Zone @90 | IXL | HIGH | LOW | Pure JS math on answer log in localStorage |
| 2 | **Daily streak + daily goal ring** | IXL/Khan/Duolingo | HIGH | LOW | Date math in localStorage |
| 3 | **Mastery map** of B.E.S.T. benchmarks (Familiar→Proficient→Mastered) | Khan | HIGH | MED | Tag each JSON item with a benchmark code; aggregate |
| 4 | **Diagnostic → auto study plan** front door | Lumos/i-Ready | HIGH | MED | Short mixed quiz writes ranked Weak Areas (we have the section) |
| 5 | **Award/sticker collection** (treasure hunt) unlocked by mastery | IXL | HIGH | MED | Static SVG/emoji badges, unlock flags in storage |
| 6 | **Real FAST item types** (multiselect, drag-drop, hot-spot, dropdown, equation editor, Part A/B) | Edulastic/FAST | HIGH | MED-HIGH | JSON "type" field + small JS renderers; biggest credibility win |
| 7 | **Per-question explanations** ("why correct / why wrong") | TestPrep-Online | HIGH | MED | Add `explanation` field to JSON; AI can backfill existing bank |
| 8 | **Badges + levels + XP** (effort vs mastery split) | Khan | MED | LOW | XP for effort, badges for milestones, all client-side |
| 9 | **Power-ups / leaderboard / SFX** on timed quizzes | Quizizz | MED | MED | Sound + a local/family leaderboard; full leaderboard needs backend |
| 10 | **Step-by-step vs Test mode** toggle | TestPrep-Online | MED | LOW | Two render paths over same items |
| 11 | **Avatar customization** unlocked by XP | Prodigy/Khan | MED | MED | Swappable SVG/emoji avatar, no full RPG needed |
| 12 | **Mixed "Course Challenge" full-length simulator** w/ FAST timing | Khan/Lumos | MED | MED | Reuse full bank, add timer + pacing |
| 13 | **3 progress-monitoring "windows"** (PM1/PM2/PM3) framing | FAST official | MED | LOW | Score history snapshots — mirrors real test cadence |
| 14 | **RPG quest skin** over math | Prodigy | HIGH | HIGH | Big build; defer — engagement gold but heavy for static |
| 15 | **Print workbook companion** (PDF) | Lumos | MED | MED | Sellable add-on; HTML→PDF export of bank |

---

## 8 CONCRETE RECOMMENDATIONS FOR OUR APP

1. **Ship a SmartScore engine (per skill, 0-100, up AND down).**
   - Start 0; correct +X (X bigger for harder items), wrong −Y. Past ~90 = "Challenge Zone": only consistent correct answers on hard items push to 100 = Mastered. Show a live colored bar (red→yellow→green). This single mechanic is IXL's whole moat and is trivial in JS.

2. **Build the Diagnostic front door.**
   - New user → "Take your 15-question FAST Check-Up." Pull a spread across Reading/Grammar/Figurative/Science/Math. On finish, auto-write the **Weak Areas** list ranked worst-first + a one-tap "Start my plan" that queues those skills. Re-offerable as PM1/PM2/PM3 to mirror the real 3-window test calendar.

3. **Tag every JSON item with a B.E.S.T. benchmark + render a Mastery Map.**
   - Add `"standard": "MA.6.NSO.1.1"` (or ELA code) to each question. New "My Map" screen groups skills by benchmark with Familiar→Proficient→Mastered states (driven by SmartScore). Goal becomes "light up the whole map." Doubles as parent-facing standards report — a paid-tier selling point.

4. **Add streak + daily goal + XP (split effort vs mastery, Khan-style).**
   - Top bar: 🔥 streak (consecutive days with ≥1 quiz), a daily goal ring ("10 questions today"), and an XP counter. XP = effort (every attempt). Mastery = SmartScore (skill). Don't conflate them — Khan's deliberate split keeps grinders motivated without faking mastery. NO energy/lives system (avoid Prodigy's FTC trap).

5. **Launch an Award collection / treasure hunt.**
   - 30-50 collectible badges (emoji/SVG) tied to milestones: "First skill mastered," "5-day streak," "Whole NSO map green," "Beat the timer." Always show "next prize: X% away" to create the IXL pull. Pure unlock flags in localStorage.

6. **Upgrade the bank to real FAST item types.**
   - Add a `"type"` field: `multiselect`, `dragdrop`, `hotspot`, `dropdown` (editing task), `equation` (symbol-pad input), `tablematch`, `evidence` (Part A→Part B). Write one small JS renderer per type. Use AI-practice mode to auto-generate these new types so the bank scales. This is the #1 thing that makes us look like the REAL test vs. generic multiple-choice quizzes.

7. **Add per-question explanations + a Step-by-Step vs Test mode toggle.**
   - Every item gets an `"explanation"` field (AI can backfill the existing bank in a batch). **Step-by-step mode** = instant feedback + explanation after each question (learning). **Test mode** = no feedback, timed, FAST pacing, explanations only on the results screen (assessment). TestPrep-Online charges for exactly this; we give both free.

8. **Avatar + local family leaderboard + sound, gated by XP.**
   - Unlock avatar pieces (hats/colors) with XP — low-cost Prodigy-style identity hook without building an RPG. Add a **family leaderboard** (sibling vs sibling on the same device) and quiz SFX/correct-answer chimes (Quizizz). Keep it opt-in/mutable. Full cross-device leaderboard would need a backend — defer until paid tier.

---

## MONETIZATION — WHAT ACTUALLY WORKS (owner wants paid)

**Models in the wild:**
- **IXL parent-direct subscription** — $9.95/mo single subject, $15.95 math+ELA, $19.95 four subjects; annual saves ~34% ($79–$159/yr). Free tier deliberately crippled to ~10 Q/day to force upgrade. **This is the most copyable model for a parent-paid web app.**
- **Khan = free + paid AI add-on (Khanmigo)** — proves the wedge: give core free, charge for the AI tutor. We already HAVE the AI — natural premium gate.
- **Lumos = blended print+digital bundles** — sells physical workbook + online access together. Higher price point, "tangible" value parents pay for.
- **TestPrep-Online = per-pack / family membership** — one-time pack purchases, good for parents who won't commit to a subscription.
- **Prodigy = freemium RPG with tiered premium (Core/Plus/Ultra)** — high conversion BUT FTC complaint for dark patterns. **Avoid the manipulation; the tiering structure itself is fine.**
- **i-Ready/Edulastic = B2B district sales** — biggest revenue but long sales cycle, not realistic short-term for an indie product.

**Recommended path for our app (ranked):**
1. **Freemium + parent subscription (IXL model, ethical version).** Free = generous (don't cap at 10/day — that's our differentiator). Paywall the **premium layer**: full progress/standards dashboard, unlimited AI-practice, full-length simulators, downloadable reports/workbook PDFs, ad-free. ~$7–10/mo or ~$59–79/yr (undercut IXL).
2. **AI-tutor as the premium wedge (Khan/Khanmigo).** We already have AI practice — make a deeper "AI tutor that explains, re-teaches, and builds a plan" the paid hook.
3. **One-time test-prep pack / family lifetime (TestPrep-Online).** For commitment-averse parents — e.g. "$39 FAST Grade 6 lifetime."
4. **Optional print workbook bundle (Lumos)** later — HTML→PDF export of the bank as an upsell.
   - **Hard rule: no energy/lives/pay-to-progress dark patterns.** "Free core, pay for power-ups + insights" — not "pay to keep playing." That's our brand and trust edge over Prodigy.

---

## SOURCES
- IXL: ixl.com/standards/florida/math/grade-6 · ixl.com/awards · ixl.com/help-center (SmartScore, Challenge Zone) · pricing (brighterly.com/blog/ixl-cost)
- Khan Academy: khanacademy.org/math/grade-6-fl-best · support.khanacademy.org (energy/mastery points, badges, avatars)
- Lumos: lumoslearning.com (FAST blended program, diagnostic→study plan, AI tutor)
- i-Ready: curriculumassociates.com/programs/i-ready (adaptive diagnostic, personalized path)
- CPALMS / FloridaStudents.org: cpalms.org · floridastudents.org (Original Student Tutorials, MEAs)
- Edulastic/Pear: edulastic.com · smekenseducation.com (40+ tech-enhanced item types)
- Quizizz: elearningsupporter.com / softwareadvice.com (memes, power-ups, leaderboards)
- Prodigy: trophy.so/blog/prodigy-math-game-gamification-case-study · en.wikipedia.org/wiki/Prodigy_Math_Game · fairplayforkids.org (FTC complaint)
- TestPrep-Online: testprep-online.com (explanations, step-by-step/timed, packs)
- FAST item types: fldoe.org Test Design Summary (FAST Math) · eduphoria/Edulastic item-type docs
