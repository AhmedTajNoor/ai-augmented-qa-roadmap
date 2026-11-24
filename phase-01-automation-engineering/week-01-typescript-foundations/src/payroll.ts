import assert from "node:assert/strict";
interface Payroll {
  basicSalary: number;
  houseRent: number;
  medicalAllowance: number;
  bonus: number;
  absenceDeduction: number;
  loanDeduction: number;
}

function calculateGrossSalary(payroll: Payroll): number {
  validatePayroll(payroll);
  return getGrossSalary(payroll);
}

function calculateTotalDeductions(payroll: Payroll): number {
  validatePayroll(payroll);
  return getTotalDeductions(payroll);
}


// Internal calculation functions: no repeated validation
function getGrossSalary(payroll: Payroll): number {
  const { basicSalary, houseRent, medicalAllowance, bonus } = payroll;
  return basicSalary + houseRent + medicalAllowance + bonus;
}

function getTotalDeductions(payroll: Payroll): number {
  const { absenceDeduction, loanDeduction } = payroll;
  return absenceDeduction + loanDeduction;
}
function validatePayroll(payroll: Payroll): void {
  const values = Object.entries(payroll);

  for (const [field, value] of values) {
    if (!Number.isFinite(value)) {
      throw new Error(`${field} must be a finite number.`);
    }

    if (value < 0) {
      throw new Error(`${field} cannot be negative.`);
    }
  }
}
function calculateNetSalary(payroll: Payroll): number {
  validatePayroll(payroll);

  return getGrossSalary(payroll) -
         getTotalDeductions(payroll);
}
interface PayrollTestCase {
  name: string;
  input: Payroll;
  expectedNetSalary?: number;
  shouldThrowError: boolean;
}

const testCases: PayrollTestCase[] = [
  {
    name: "Valid payroll",
    input: {
      basicSalary: 30000,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: 5000,
      absenceDeduction: 2000,
      loanDeduction: 3000
    },
    expectedNetSalary: 42000,
    shouldThrowError: false
  },
  {
    name: "Zero basic salary",
    input: {
      basicSalary: 0,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: 0,
      absenceDeduction: 0,
      loanDeduction: 0
    },
    expectedNetSalary: 12000,
    shouldThrowError: false
  },
  {
    name: "Negative basic salary",
    input: {
      basicSalary: -30000,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: 5000,
      absenceDeduction: 2000,
      loanDeduction: 3000
    },
    shouldThrowError: true
  },
  {
    name: "Negative bonus",
    input: {
      basicSalary: 30000,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: -5000,
      absenceDeduction: 2000,
      loanDeduction: 3000
    },
    shouldThrowError: true
  },
  {
    name: "Negative loan deduction",
    input: {
      basicSalary: 30000,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: 5000,
      absenceDeduction: 2000,
      loanDeduction: -3000
    },
    shouldThrowError: true
  },
  {
    name: "NaN in house rent",
    input: {
      basicSalary: 30000,
      houseRent: NaN,
      medicalAllowance: 2000,
      bonus: 5000,
      absenceDeduction: 2000,
      loanDeduction: 3000
    },
    shouldThrowError: true
  },
  {
    name: "Infinity in basic salary",
    input: {
      basicSalary: Infinity,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: 5000,
      absenceDeduction: 2000,
      loanDeduction: 3000
    },
    shouldThrowError:   true
  },
  {
    name: "Zero deductions",
    input: {
      basicSalary: 30000,
      houseRent: 10000,
      medicalAllowance: 2000,
      bonus: 5000,
      absenceDeduction: 0,
      loanDeduction: 0
    },
    expectedNetSalary: 47000,
    shouldThrowError: false
  },
  {
    name: "All fields zero",
    input: {
      basicSalary: 0,
      houseRent: 0,
      medicalAllowance: 0,
      bonus: 0,
      absenceDeduction: 0,
      loanDeduction: 0
    },
    expectedNetSalary: 0,
    shouldThrowError: false
  }
];

let passed = 0;
let failed = 0;

for (const testCase of testCases) {
  try {
    const actual = calculateNetSalary(testCase.input);

    if (testCase.shouldThrowError) {
      console.log("Test Failed: Expected error but none was thrown.");
      failed++;
    } else {
      if (actual === testCase.expectedNetSalary) {
        console.log("Test Passed:", testCase.name);
        passed++;
      } else {
        console.log(
  `FAIL: ${testCase.name} | Expected: ${testCase.expectedNetSalary} | Actual: ${actual}`
);
        failed++;
      }
    }

  } catch (error) {
    if (testCase.shouldThrowError) {
      console.log("Test Passed (Error Thrown):", testCase.name);
      passed++;
    } else {
      console.log("Test Failed: Unexpected error thrown.");
      failed++;
    }
  }
}
const validPayroll: Payroll = {
  basicSalary: 30000,
  houseRent: 10000,
  medicalAllowance: 2000,
  bonus: 5000,
  absenceDeduction: 2000,
  loanDeduction: 3000
};

// Verify expected salary
assert.equal(calculateNetSalary(validPayroll), 42000);

// Verify invalid payroll throws an error
assert.throws(
  () => calculateNetSalary({
    ...validPayroll,
    basicSalary: -30000
  }),
  /cannot be negative/
);
// Verify gross salary
assert.equal(calculateGrossSalary(validPayroll), 47000);

// Verify total deductions
assert.equal(calculateTotalDeductions(validPayroll), 5000);

// Verify standalone gross salary rejects invalid input
assert.throws(
  () => calculateGrossSalary({
    ...validPayroll,
    basicSalary: -1000
  }),
  /cannot be negative/
);

// Verify standalone deductions reject invalid input
assert.throws(
  () => calculateTotalDeductions({
    ...validPayroll,
    loanDeduction: -1000
  }),
  /cannot be negative/
);

console.log("All assertions passed!");
console.log("Passed:", passed);
console.log("Failed:", failed);