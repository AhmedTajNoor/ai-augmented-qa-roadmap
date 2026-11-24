import type { EmployeePayroll } from "../types/employee.types.js";

export function validatePayroll(payroll: EmployeePayroll): void {
    const monetaryFields = {
        basicSalary: payroll.basicSalary,
        bonus: payroll.bonus ?? 0,
        deduction: payroll.deduction
    };
    for (const [field, value] of Object.entries(monetaryFields)) {

        if (!Number.isFinite(value)) {
            throw new Error(`${field} must be a finite number.`);
        }

        if (value < 0) {
            throw new Error(`${field} cannot be negative.`);
        }
    }
}