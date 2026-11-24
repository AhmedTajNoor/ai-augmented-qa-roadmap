import type { EmployeePayroll } from "../types/employee.types.js";
import { validatePayroll } from "../utils/payroll-validator.js";

export function calculateGrossSalary(payroll: EmployeePayroll): number {
    validatePayroll(payroll);

    return getGrossSalary(payroll);
}

export function calculateTotalDeductions(payroll: EmployeePayroll): number {
    validatePayroll(payroll);
    return getTotalDeductions(payroll);
}
function getGrossSalary(payroll: EmployeePayroll): number {
    const bonus = payroll.bonus ?? 0;
    return payroll.basicSalary + bonus;
}

function getTotalDeductions(payroll: EmployeePayroll): number {
    return payroll.deduction;
}



export function calculateNetSalary(payroll: EmployeePayroll): number {
    validatePayroll(payroll);
    return getGrossSalary(payroll) - getTotalDeductions(payroll);
}