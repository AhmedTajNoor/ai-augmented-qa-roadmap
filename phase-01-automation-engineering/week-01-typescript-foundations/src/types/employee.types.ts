export interface Person {
    readonly id: string;
    fullName: string;
    email: string;
    phone?: string;
}

export interface Employee extends Person {
    department: string;
    designation: string;
    officeLocation: string;
    isActive: boolean;
}

export interface EmployeePayroll {
    employeeId: string;
    basicSalary: number;
    bonus?: number;
    deduction: number;
}