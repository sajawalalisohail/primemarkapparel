# Task Completion Checklist (DONE)

This document outlines the mandatory steps to verify task completion. Every step must be checked before a task is considered DONE.

## Phase 1: Automated Verification

You **MUST** run the following commands and ensure they pass without introducing new errors or critical warnings.

1.  **[ ] Run Linter**
    ```bash
    npm run lint
    ```
    *Assert: The command exits with code 0. No new linting errors are present.*

2.  **[ ] Run Type Check**
    ```bash
    npx tsc --noEmit
    ```
    *Assert: The command completes successfully. No new TypeScript errors are reported.*

3.  **[ ] Run Production Build**
    ```bash
    npm run build
    ```
    *Assert: The production build finishes successfully. Pay close attention to any new warnings related to bundle size, performance, or hydration mismatches.*

## Phase 2: Manual Quality Assurance

Perform these manual checks to ensure the user experience and visual integrity remain high.

1.  **[ ] Responsive Design Check**
    - [ ] Verify the layout and functionality at key breakpoints:
        - **Mobile:** 375px
        - **Tablet:** 768px
        - **Desktop:** 1280px
    - *Assert: The UI is usable, visually correct, and free of layout breaks at all sizes.*

2.  **[ ] Cross-functional Feature Testing**
    - [ ] If you modified a component, test its behavior in all contexts it's used.
    - [ ] Verify critical user flows related to your changes (e.g., if you touched a form, test submission, validation, and error handling).
    - *Assert: The feature works as expected and has not introduced regressions in other parts of the application.*

3.  **[ ] Theming and Style Verification**
    - [ ] If applicable, toggle between dark and light modes to ensure styles are applied correctly.
    - *Assert: All UI elements adapt correctly to the current theme, using the proper CSS variables.*

## Phase 3: Completion Protocol

After completing the steps above, finalize the task by providing the following summary:

1.  **Changed Files:**
    - List all files you created, modified, or deleted.

2.  **Verification Commands Run:**
    - Confirm that `npm run lint`, `npx tsc --noEmit`, and `npm run build` were executed and passed.

3.  **Manual Checks Performed:**
    - Briefly describe the manual checks you performed (e.g., "Verified mobile menu toggle in dark mode," "Confirmed RFQ form submission works on desktop and mobile").

Only after all three phases are successfully completed is the task considered **DONE**.
