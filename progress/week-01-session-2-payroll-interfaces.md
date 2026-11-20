# Week 1 Session: Payroll Interfaces, Validation, and Test Cases

**Date:** 2026-11-21  
**Phase:** 1 — Automation Engineering  
**Week:** 1 — TypeScript Foundations  
**Status:** In progress

## What I practiced

- Defined a `Payroll` interface with numeric fields for basic salary, house rent, medical allowance, bonus, absence deduction, and loan deduction.
- Split payroll calculations into functions for gross salary, total deductions, and net salary.
- Added input validation with `Object.entries` and `Number.isFinite`, and rejected negative payroll values.
- Wrote executable checks with `node:assert/strict`, including `assert.equal` and `assert.throws`.

## Results

- Sample payroll: gross salary **47,000**, deductions **5,000**, net salary **42,000**.
- The payroll script reported **9 passed, 0 failed** after correcting the expected result for the no-deductions case.
- The earlier calculator printed a total salary of **37,000** for its sample, which included a negative bonus value.
- `npx tsc --noEmit` completed without errors during the session. Running `npx tsc src/payroll.ts` directly produced TS5112 because the project has a `tsconfig.json`; use the project-level check.

## Notes and follow-up

- The current payroll validation treats every field, including bonus and deduction amounts, as a nonnegative amount. The earlier calculator instead used a negative bonus to represent a deduction. Keep this policy difference in mind when choosing a payroll model.
- The latest interface quiz answers submitted were `A, A, A`; evaluation is still pending.
- Next: review the quiz answers, then extend the payroll model with an employee interface and connect employee details to a payroll record.
