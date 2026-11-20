const employeeName: string = "Sample Employee";
const employeeId: number = 1;
const employeeEmail: string = "employee@example.com";
const employeeActive: boolean = true;
const basicSalary: number = "30000";
const houseRent: number = 10000;
const medicalAllowance: number = 2000;
const bonus: number = -5000;


function calculateTotalSalary(
    basicSalary: number,
    houseRent: number,
    medicalAllowance: number,
    bonus: number
): number {
    return basicSalary + houseRent + medicalAllowance + bonus;
}

const totalSalary = calculateTotalSalary(basicSalary, houseRent, medicalAllowance, bonus);

console.log("Employee Information");
console.log("Name:", employeeName);
console.log("ID:", employeeId);
console.log("Email:", employeeEmail);
console.log("Basic Salary:", basicSalary);
console.log("House Rent:", houseRent);
console.log("Medical Allowance:", medicalAllowance);
console.log("Bonus:", bonus);
console.log("Total Salary:", totalSalary);
console.log("Active:", employeeActive);
