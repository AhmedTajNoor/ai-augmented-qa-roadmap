# Week 1: TypeScript Foundations

This week is a hands-on introduction to TypeScript. The current project is a salary calculator that uses typed employee and salary data.

## Project

- `src/index.ts` prints employee information and calculates total salary, including a negative bonus as a deduction.
- `npm run dev` runs the TypeScript file with `tsx`.
- `npm run type-check` checks the project with `tsc --noEmit`.

## Current learning notes

- Type annotations such as `: number` declare the expected type.
- `npm run dev` executes the program; `npm run type-check` checks types without running it.
- A numeric string is different from a number and can cause string concatenation or a TypeScript error.
- Negative salary components can represent deductions.
- Next: define an employee data shape with an interface and validate the calculator inputs.
