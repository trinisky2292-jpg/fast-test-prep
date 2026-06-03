# FAST Grade 6 ELA Reading — Research & App Build Plan

**Compiled:** 2026-06-02
**Purpose:** Define EXACTLY what Florida's FAST Grade 6 ELA (B.E.S.T.) Reading assessment tests, so the ELA section of the kids' test-prep app mirrors the real state test.

**Method:** Synthesized from three on-disk authoritative sources (already transcribed verbatim from state PDFs) + live web confirmation against fldoe.org / flfast.org. Note: fldoe.org and flfast.org actively block automated scrapers (HTTP 403), so the official PDFs were verified via the local transcriptions + web-search index snippets, not direct fetch. A human should click-through the live links once to re-confirm before launch.

**Authoritative source URLs:**
- FLDOE — *Test Design Summary and Blueprint: FAST ELA Reading and B.E.S.T. Writing* (June 2024): https://www.fldoe.org/file/20102/TDS-FAST-ELA.pdf
- FLDOE — *Reporting Category Statements, B.E.S.T. ELA* (May 2024): https://www.fldoe.org/core/fileparse.php/20102/urlt/best-ela-rcs.pdf
- FLDOE — *2025-26 FAST Grades 3-10 Fact Sheet*: https://www.fldoe.org/file/20102/2526FASTGrd310FS.pdf
- FLDOE FAST/B.E.S.T. hub: https://www.fldoe.org/accountability/assessments/k-12-student-assessment/best/
- flfast.org sample test materials: https://flfast.org/resources/sample-test-materials/fast-ela-reading-paper-based-sample-test-materials
- Grade 6 Reading Sample Answer Key (passages + items): https://flfast.org/content/contentresources/en/2022_FAST_6R_Answer-Key_PBT.pdf
- CPALMS M/J Language Arts 1 (course 1001010, full ELA.6 standards): https://www.cpalms.org/PreviewCourse/Preview/791

---

## 1. WHAT THE STATE TESTS

### Reporting categories + weights (Grade 6 — Grades 6-8 band)

Source: FLDOE *Test Design Summary and Blueprint: FAST ELA Reading* (June 2024). Confirmed via web search that these exact category names + ranges (25-35% / 25-35% / 35-50%) apply to the Grades 6-8 band.

| # | Reporting Category | Benchmarks assessed | % of test | Priority |
|---|---|---|---|---|
| 1 | **Reading Across Genres & Vocabulary** | Interpreting Figurative Language (ELA.6.R.3.1), Comparative Reading (R.3.3), Understanding Rhetoric (R.3.4), Morphology (V.1.2), Context & Connotation (V.1.3) | **35-50%** | **HIGHEST — drill first** |
| 2 | **Reading Prose and Poetry** (literary) | Literary Elements (R.1.1), Theme (R.1.2), Perspective & Point of View (R.1.3), Poetry (R.1.4) | **25-35%** | High |
| 3 | **Reading Informational Text** | Structure (R.2.1), Central Idea (R.2.2), Purpose & Perspective (R.2.3), Argument (R.2.4) | **25-35%** | High |

> **Single most important fact for the app:** "Reading Across Genres & Vocabulary" is the heaviest category at **35-50%** — and it bundles vocabulary (morphology + context/connotation) WITH figurative language, rhetoric, and cross-text comparison. Vocab-in-context is NOT a separate section; it lives inside reading passages. The app must over-index here.

### Test format & logistics

- **Computer-based** (all FAST + B.E.S.T. EOC).
- **Progress Monitoring 3×/year:** PM1, PM2, PM3 (PM3 = end-of-year accountability).
- **Test length (Grades 6-8):** **36-40 items** (+ ~5 field-test items on PM3).
- **Time:** up to 90 min (PM1/PM2), up to 120 min (PM3).
- **Genre balance (Grades 6-8): 50% fiction / 50% informational.**
- **Passages:** include a literary text (story/poem) plus paired informational texts (often a primary-source pair). Sample set shows one literary passage ("Sea Creature") and a paired informational set (two suffrage primary-source passages).

### Item types (from the official sample answer key + item-style doc)

| Type | Description | Grade 6 sample seen |
|---|---|---|
| **Multiple choice (MC)** | 1 correct, 4 options A-D | Reading items 1,2,3,8,9,10,11,12 |
| **Multiselect ("Select TWO/THREE")** | states exact number to pick, 5-6 options | Reading item 4 |
| **Two-part EBSR (Part A / Part B)** | Part A = analysis/inference (MC); Part B = cite the text evidence supporting Part A (MC, multiselect, or hot text). The signature FAST ELA move. | Reading items 6, 7 |
| **Selectable hot text** | click word/sentence inside passage; can stand alone or be Part B of EBSR | Reading item 11 (paper = MC of quoted sentences) |
| **Grid / table match** | fill one bubble per row to classify each detail into a column (e.g., Theme A / Theme B / Both; Passage 1 / Passage 2 / Both) | Reading items 5, 13 |
| **Multimedia** | charts/images/timelines embedded in stimuli, assessed by any type above | — |

> Any item types can combine into one multi-part item. On paper, CBT-only formats (hot text, drag-drop) render as bubbles, but the STEM wording is identical — mirror the wording.

### Writing at Grade 6

- Reading and Writing are **separate** assessments. FAST ELA **Reading** (the 36-40 item test above) does **not** include a written essay.
- Writing is assessed by **B.E.S.T. Writing** (one prompt — argumentative or expository — with a passage set; scored on Purpose/Structure, Development, and Conventions). Grade 6 is in the 6-8 Writing band.
- Note: ELA.6.R.3.2 (Paraphrasing/Summarizing) appears as a standard but is assessed inside B.E.S.T. Writing, not the Reading blueprint's third category.
- **App implication:** the core ELA module is reading comprehension. A writing module is optional/secondary (single-prompt practice), not the priority for Reading PM prep.

---

## 2. SKILLS EMPHASIZED (the reading skills FAST actually tests)

Tagged to benchmark, grouped by reporting category:

**Reading Across Genres & Vocabulary (35-50% — drill most):**
- **Vocabulary-in-context** (R.V.1.3 / context & connotation) — "What does the word _relishes_ mean as it is used in the sentence?" (denotative + connotative).
- **Morphology** (V.1.2) — Greek/Latin roots & affixes; stem gives the roots: "_unus_ (one) + _animus_ (mind) → what does _unanimity_ mean?"
- **Figurative language → tone/meaning** (R.3.1) — metaphor, simile, personification, hyperbole, idiom; "what tone is created by this sentence?"
- **Rhetorical appeals** (R.3.4) — identify logos / ethos / pathos; "select the detail where the author appeals to emotions."
- **Comparative / cross-text reading** (R.3.3) — "How does Passage 2 approach X differently than Passage 1?"; authors across time periods.

**Reading Prose and Poetry (25-35%):**
- **Character interaction → plot** (R.1.1).
- **Theme, stated or implied + its development** (R.1.2) — a full message, not a one-word topic; grid items classify details by which theme they support.
- **Point of view / multiple narrators / POV shifts** (R.1.3) — effect of a shift from 2nd to 1st person.
- **Poetic form** (R.1.4) — impact of sonnet/villanelle on meaning & style.

**Reading Informational Text (25-35%):**
- **Text structure / sections & features** (R.2.1) — how a section or feature conveys meaning; which feature, if added, would help.
- **Central idea, implied or explicit, + development** (R.2.2).
- **Author's purpose across multiple accounts** (R.2.3) — classify purpose by Passage 1 / Passage 2 / Both.
- **Argument + types of reasoning** (R.2.4), incl. informal fallacies.

**Cross-cutting (assessed everywhere):**
- **Text evidence / cite the support** (K12.EE.1.1) — the EBSR Part B engine.
- **Inference** (K12.EE.3.1) — almost every stem.
- Every stem anchors to the text and cites paragraph numbers; no question is answerable without the passage.

---

## 3. RECOMMENDATIONS FOR THE APP'S ELA SECTION

Mirror the real test, don't approximate it:

1. **Weight practice to the blueprint.** Allocate generated items ~**40% Reading Across Genres & Vocabulary, ~30% Prose & Poetry, ~30% Informational**. A full practice set = 36-40 items to match a real PM. Show a per-category score so kids see the same reporting categories the state reports.

2. **Organize content as PASSAGE SETS, not loose questions.** Each set = one passage (or a paired-passage pair) + 5-8 questions spanning the category's benchmarks. Match the 50/50 fiction/informational genre split. Always include at least one paired-informational set per practice test (primary-source style, like the suffrage pair) because cross-text comparison is its own tested skill.

3. **Make the two-part EBSR a first-class item type.** Every passage set should contain ≥1 Part A / Part B item where Part B demands the exact sentence(s) of evidence for Part A. Use the verbatim header "This question has two parts." Part B can be MC, multiselect, or hot text. This is the FAST signature and where kids lose the most points.

4. **Build the full item-type mix, not just MC.** Per set include: MC, one "Select TWO/THREE" multiselect, one EBSR, one grid/table-match (classify details by Theme A/B/Both or Passage 1/2/Both), and — in the digital app — selectable hot text inside the passage. State the exact number to select on multiselect.

5. **Bake vocabulary INTO passages.** No standalone word lists. Vocab items quote a sentence with paragraph number and ask meaning-in-context; morphology items hand the Greek/Latin roots in the stem. This matches V.1.2/V.1.3 exactly.

6. **Copy the state's stem + answer-key style.** Anchor every stem to the text ("In paragraph 2…", "Read this sentence from the passage… (paragraph 3)"), quote verbatim with paragraph numbers, never ask a passage-independent question. Explanations: 1-2 sentences, "Option C is correct. The passage describes…", quote the supporting evidence.

7. **Tag every item** to its B.E.S.T. benchmark (ELA.6.R.x / V.1.x) + difficulty, so progress reports roll up to the three reporting categories.

8. **Use the 13 released items as the golden style reference** (`data/grade6/official-samples.json`). Generated items should be indistinguishable in stem wording, distractor logic, and explanation format.

---

## 4. PROPOSED ELA BUILD PLAN (organized by real reporting categories)

**Phase 0 — Item generator spec.** Encode `STATE-ITEM-STYLE.md` rules into the generator: stem patterns per benchmark, item-type templates (MC / multiselect / EBSR / grid-match / hot-text), answer-key format. Output JSON shaped like `official-samples.json` (id, section, questionType, question, choices, correctAnswer, explanation, standard, difficulty, sourceUrl-or-"generated").

**Phase 1 — Reading Across Genres & Vocabulary (build first, ~40%).** Generate passage sets that load:
- Vocab-in-context (V.1.3) — meaning-in-context MC, ≥2 per set.
- Morphology (V.1.2) — roots-given stems.
- Figurative language → tone (R.3.1).
- Rhetorical appeals logos/ethos/pathos (R.3.4) — incl. a "select the detail where author appeals to emotions" hot-text/MC.
- Comparative reading (R.3.3) — paired passages + a "how does P2 differ from P1?" item and a Passage 1/2/Both grid.

**Phase 2 — Reading Prose & Poetry (~30%).** Literary passages (story + ≥1 poem incl. sonnet/villanelle):
- Character→plot (R.1.1), Theme + theme-classification grid (R.1.2), POV-shift effect (R.1.3), poetic-form impact (R.1.4).
- ≥1 EBSR per set (theme + supporting sentence).

**Phase 3 — Reading Informational Text (~30%).** Informational / primary-source passages:
- Structure & features (R.2.1), Central idea (R.2.2), Author's purpose across accounts + purpose grid (R.2.3), Argument & reasoning (R.2.4).
- ≥1 EBSR (rhetorical appeal + supporting sentence).

**Phase 4 — Full practice tests (PM simulation).** Assemble 36-40-item sets at the 40/30/30 weighting, 50/50 fiction/informational, ≥1 paired-passage set, mixed item types, 90-min timer. Report scores by the three reporting categories.

**Phase 5 (optional) — B.E.S.T. Writing module.** Single argumentative or expository prompt + passage set, rubric self-check. Secondary to Reading.

**Content volume target:** ~6-10 passage sets per reporting category (≈18-30 sets total) to support multiple non-repeating practice tests, then expand Category 1 first given its 35-50% weight.
