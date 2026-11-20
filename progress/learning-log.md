# Learning log

## Phase 1, Week 1

Practiced TypeScript primitive types and a salary calculation function. Compared running code with `tsx` against static type checking with `tsc --noEmit`. Identified that values typed as `number` must be numbers rather than quoted numeric strings.

## Phase 1, Week 1: Payroll interfaces and validation

Modeled payroll data with a `Payroll` interface and separated gross salary, deductions, and net salary calculations into functions. Practiced validating object values with `Object.entries` and `Number.isFinite`, rejecting negative inputs, and writing checks with Node's strict assertion library. The payroll sample produced 47,000 gross, 5,000 deductions, and 42,000 net. After correcting a no-deductions expectation, all nine recorded assertions passed.

The session also highlighted a modeling choice: the first calculator represented a deduction with a negative bonus, while the interface-based model uses separate nonnegative bonus and deduction fields. The interface quiz answers have been submitted and still need review.
