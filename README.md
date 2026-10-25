# Cardiac Critical Care Suite

The suite is **`index.html`** — one self-contained file. The flashcards are now a **separate** self-contained file, **`flashcards.html`** (77 cards, SM-2 spaced repetition), reachable at `/flashcards.html` once published. No build step, no
dependencies, no internet connection needed.

## Publish on GitHub Pages

1. Upload `index.html` to a **public** repository (drag the *file*, not a folder or a zip).
2. **Settings → Pages → Source → Deploy from a branch**
3. Branch: `main` (or `master`) · Folder: **`/ (root)`** → **Save**
4. Wait ~1 minute, then open `https://<username>.github.io/<repo>/`

There is deliberately **no GitHub Actions workflow** in this repository. A workflow publishing
its own output is what overrides a correct root `index.html` and serves a blank page instead —
with no workflow present, Pages can only serve this file.

If the page is blank, check that `index.html` shows as ~267 KB in the repo file list. Anything
under 1 KB is the wrong file.

## Without GitHub

Open `index.html` in any browser — double-click it, or save it to a phone or tablet. It works
fully offline. Flashcard progress is stored in that browser's local storage.

## Modules

1. LCOS Tool — interactive phenotype and escalation engine (VIS/NEE, SCAI, dose-aware ladder)
2. Algorithm — post-cardiotomy low output pathway
3. Haemodynamics — pressures, waveforms, PA catheter, shock states, acid–base, SvO₂
4. Ventricular Failure — LV, RV, biventricular, LVOT/RVOT obstruction
5. VA-ECMO — 18 sections incl. circuit + configuration schematics, cannula-escalation pathway, oxygenator health, circuit-change decision aid
6. Pacing — epicardial pacing, modes (when to use / when to avoid), thresholds, troubleshooting
7. LVOTO / SAM — guided management of dynamic outflow obstruction
8. ABG / Acid–Base — interactive interpreter plus interpretation and correction guide
9. Dose Converter — rate ⇄ dose, noradrenaline equivalents, VIS
10. Derived Values — SVR/SVRI, PVR, indices, stroke work, oxygen delivery


## Disclaimer

A decision-support and education aid for qualified clinicians. It does not replace clinical
judgement, local protocol, or independent verification of drug doses. MIT licensed.
