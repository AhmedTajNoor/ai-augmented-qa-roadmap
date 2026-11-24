import assert from "node:assert/strict";
interface Person {
  readonly id: string;
  fullName: string;
  email: string;
  phone?: string;
}

interface Employee extends Person {
    department: string;
    designation: string;
    officeLocation: string;
    isActive: boolean;
}
interface EmployeePayroll {
    employeeId: string;
    basicSalary: number;
    bonus?: number;
    deduction: number;
}

const employees: Employee[] = [
    {
        id: "EMP-001",
        fullName: "Rahim Ahmed",
        email: "rahim@example.com",
        phone: "01712345678",
        department: "Engineering",
        designation: "Software Engineer",
        officeLocation: "Dhaka",
        isActive: true
    },
    {
        id: "EMP-002",
        fullName: "Karim Hasan",
        email: "karim@example.com",
        department: "HR",
        designation: "HR Executive",
        officeLocation: "Chattogram",
        isActive: false
    }
];
// Print all employees
console.log("All Employees:", employees);

// Find active employees
const activeEmployees = employees.filter(
    employee => employee.isActive
);

console.log("Active Employees:", activeEmployees);

// Find Engineering employees
const engineeringEmployees = employees.filter(
    employee => employee.department === "Engineering"
);

console.log("Engineering Employees:", engineeringEmployees);

// Find employee by ID
const employee = employees.find(
    employee => employee.id === "EMP-002"
);

console.log("Found Employee:", employee);

const payrolls: EmployeePayroll[] = [
    {
        employeeId: "EMP-001",
        basicSalary: 50000,
        bonus: 5000,
        deduction: 2000
    },
    {
        employeeId: "EMP-002", 
        basicSalary: 35000,   
        deduction: 1000
    }
];  


    function validatePayroll(payroll: EmployeePayroll): void {
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

function calculateNetSalary(payroll: EmployeePayroll): number {
    validatePayroll(payroll);

    const bonus = payroll.bonus ?? 0;
    const grossSalary = payroll.basicSalary + bonus;

    return grossSalary - payroll.deduction;
}

const salaryResults = payrolls.map(payroll => ({
    employeeId: payroll.employeeId,
    netSalary: calculateNetSalary(payroll)
}));

console.log("Salary Results:", salaryResults);


const firstPayroll = payrolls[0];
const secondPayroll = payrolls[1];

assert.ok(firstPayroll, "First payroll record must exist");
assert.ok(secondPayroll, "Second payroll record must exist");

assert.equal(calculateNetSalary(firstPayroll), 53000);
assert.equal(calculateNetSalary(secondPayroll), 34000);

console.log("All payroll assertions passed!");
// Test: Negative basic salary
assert.throws(
    () => calculateNetSalary({
        employeeId: "EMP-003",
        basicSalary: -5000,
        bonus: 0,
        deduction: 1000
    }),
    /cannot be negative/
);

// Test: Negative bonus
assert.throws(
    () => calculateNetSalary({
        employeeId: "EMP-004",
        basicSalary: 30000,
        bonus: -1000,
        deduction: 1000
    }),
    /cannot be negative/
);

// Test: Negative deduction
assert.throws(
    () => calculateNetSalary({
        employeeId: "EMP-005",
        basicSalary: 30000,
        bonus: 0,
        deduction: -500
    }),
    /cannot be negative/
);

console.log("All negative payroll tests passed!");
// Test: NaN basic salary
assert.throws(
    () => calculateNetSalary({
        employeeId: "EMP-006",
        basicSalary: NaN,
        bonus: 0,
        deduction: 1000
    }),
    /must be a finite number/
);

// Test: Infinity basic salary
assert.throws(
    () => calculateNetSalary({
        employeeId: "EMP-007",
        basicSalary: Infinity,
        bonus: 0,
        deduction: 1000
    }),
    /must be a finite number/
);

console.log("All boundary validation tests passed!");

// Test: Zero salary
assert.equal(
    calculateNetSalary({
        employeeId: "EMP-008",
        basicSalary: 0,
        bonus: 0,
        deduction: 0
    }),
    0
);

// Test: Zero bonus
assert.equal(
    calculateNetSalary({
        employeeId: "EMP-009",
        basicSalary: 30000,
        bonus: 0,
        deduction: 1000
    }),
    29000
);