# Weekly progress

## Phase 1, Week 1: TypeScript Foundations

**Status:** In progress

- Initialized a TypeScript project with `typescript`, `tsx`, and `@types/node`.
- Built a salary calculator and practiced string, number, and boolean types.
- Practiced running the app with `npm run dev` and checking it with `npm run type-check`.
- Learned how negative values can represent deductions and how passing a string where a number is expected can cause a type issue.
- Added a `Payroll` interface, separate gross/deduction/net calculation functions, and validation for finite nonnegative numeric values.
- Added payroll assertions covering normal, zero, invalid, and deduction cases; latest recorded result: **9 passed, 0 failed**.
- The project-level `npx tsc --noEmit` check completed without errors during the session. A direct single-file `tsc` invocation raised TS5112 because the project uses `tsconfig.json`.
- Submitted interface quiz answers (`A, A, A`); evaluation is pending.
- Next: review the quiz and model employee details with an interface linked to payroll.

See [week-01-session-2-payroll-interfaces.md](week-01-session-2-payroll-interfaces.md) for the session notes.
