# Definition of Done (DoD)

Before marking any task as complete, every autonomous agent **MUST** satisfy the following criteria.

## 1. Required Checks
- [ ] **Linting Passes:** `npm run lint` returns no errors.
- [ ] **Build Succeeds:** `npm run build` completes successfully. (Crucial for Next.js static generation).
- [ ] **Typecheck Passes:** `npx tsc --noEmit` returns no errors.
- [ ] **No Next.js warnings:** Build output contains no new critical warnings.

## 2. Frontend Quality Gates
- [ ] **Responsiveness:** UI looks correct on Mobile (375px), Tablet (768px), and Desktop (1280px+).
- [ ] **Theming:** Components function correctly in both **Light** and **Dark** modes. (Check text contrast and background visibility).
- [ ] **Layout Stability:** No janky layout shifts (CLS) during loading.
- [ ] **Console:** No new errors or warnings in the browser console.
- [ ] **Accessibility:** Interactive elements have `aria-label` or visible text. Images have `alt` text.

## 3. Code Quality Rules
- [ ] **Minimal Diff:** Only change what is necessary. Revert accidental formatting changes to untouched code.
- [ ] **Patterns:** Follow existing component patterns (e.g., `premiumEase`, `Section` wrapper).
- [ ] **No Secrets:** Ensure no API keys or credentials are hardcoded.
- [ ] **Cleanliness:** Remove `console.log` debugging statements before finishing.

## 4. Agent Completion Protocol
When declaring a task finished, output the following summary:

1.  **Changed Files:** List of files modified.
2.  **Verification Steps:** What commands were run to verify (e.g., `npm run build`).
3.  **Manual Tests:** Description of manual checks performed (e.g., "Verified mobile menu toggle in light mode").
