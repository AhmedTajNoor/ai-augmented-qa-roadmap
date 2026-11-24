import type {
    Employee,
    EmployeePayroll
} from "../types/employee.types.js";

export const employees: Employee[] = [
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

export const payrolls: EmployeePayroll[] = [
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