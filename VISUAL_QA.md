# Visual QA

Use this manual smoke checklist after changing lesson layout, bilingual copy, tabs, quizzes, live examples, or visible progress-related UI.

## Route coverage

- [ ] Check key `/en` routes
  - `/en`
  - `/en/setup`
  - `/en/tooling`
  - `/en/js`
  - `/en/react`
  - `/en/effects`
  - `/en/project`
- [ ] Check key `/fa` routes
  - `/fa`
  - `/fa/setup`
  - `/fa/tooling`
  - `/fa/js`
  - `/fa/react`
  - `/fa/effects`
  - `/fa/project`

## Viewport smoke checks

- [ ] Desktop width looks correct
- [ ] Mobile width looks correct
- [ ] Long Persian text does not overflow, collide, or clip

## RTL / LTR checks

- [ ] `/fa` uses RTL correctly
- [ ] `/en` uses LTR correctly
- [ ] Direction-sensitive layout still feels intentional in both languages
- [ ] Mixed text, inline code, and buttons still read clearly in both directions

## Component-level checks

- [ ] Tabs switch correctly and labels fit
- [ ] Cards keep spacing, borders, and readable hierarchy
- [ ] Quizzes remain readable and answer states are visible
- [ ] Live examples render and remain usable
- [ ] Buttons are visible, clickable, and consistently aligned
- [ ] Focus states are visible for keyboard navigation

## Interaction smoke checks

- [ ] Language switching preserves route and layout correctly
- [ ] Lesson navigation still works after content or visual changes
- [ ] No obvious broken layout after expanding lesson depth

## Escalation

- [ ] If visual regressions appear only in one locale, review both content length and direction handling
- [ ] If layout breaks after long-text changes, involve `UX/UI` and `Frontend Engineer`
- [ ] If visible behavior also affects saved progress or quiz state, rerun [LESSON_AUDIT_CHECKLIST.md](/home/newuser/react/LESSON_AUDIT_CHECKLIST.md)
