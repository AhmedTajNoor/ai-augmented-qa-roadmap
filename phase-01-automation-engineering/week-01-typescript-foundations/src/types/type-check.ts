import type { Employee, EmployeePayroll } from "./employee.types.js";

const employee: Employee = {
    id: "EMP-001",
    fullName: "Rahim Ahmed",
    email: "rahim@example.com",
    department: "Engineering",
    designation: "Software Engineer",
    officeLocation: "Dhaka",
    isActive: true
};

const payroll: EmployeePayroll = {
    employeeId: employee.id,
    basicSalary: 50000,
    deduction: 2000
};

console.log(employee);
console.log(payroll);