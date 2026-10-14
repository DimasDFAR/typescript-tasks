/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patients: any[]): number {
    return patients.length;
}

function countAdmittedPatients(patients: any[]): number {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            count++;
        }
    }
    return count;
}

function countDischargedPatients(patients: any[]): number {
    return countTotalPatients(patients) - countAdmittedPatients(patients);
}

function countPatientsByDepartment(patients: any[], department: string): number {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].department === department) {
            count++;
        }
    }
    return count;
}

function findHighestBill(patients: any[]): number {
    let highest = patients[0].bill;
    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill > highest) {
            highest = patients[i].bill;
        }
    }
    return highest;
}

function findLowestBill(patients: any[]): number {
    let lowest = patients[0].bill;
    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill < lowest) {
            lowest = patients[i].bill;
        }
    }
    return lowest;
}

function calculateAverageBill(patients: any[]): number {
    let total = 0;
    for (let i = 0; i < patients.length; i++) {
        total += patients[i].bill;
    }
    return total / countTotalPatients(patients);
}

function calculateTotalRevenue(patients: any[]): number {
    let total = 0;
    for (let i = 0; i < patients.length; i++) {
        total += patients[i].bill;
    }
    return total;
}

function getAdmittedPatientNames(patients: any[]): string[] {
    let admittedPatients: string[] = [];
    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            admittedPatients.push(patients[i].name);
        }
    }
    return admittedPatients;
}

function printHospitalReport(patients: any[]): void {
    console.log(`Total Patients: ${countTotalPatients(patients)}`);
    console.log(`Total Admitted Patients: ${countAdmittedPatients(patients)}`);
    console.log(`Total Discharged Patients: ${countDischargedPatients(patients)}`);
    console.log(`Pediatrics Patients: ${countPatientsByDepartment(patients, "Pediatrics")}`);
    console.log(`Cardiology Patients: ${countPatientsByDepartment(patients, "Cardiology")}`);
    console.log(`Orthopedics Patients: ${countPatientsByDepartment(patients, "Orthopedics")}`);
    console.log(`Highest Hospital Bill: ${findHighestBill(patients)}`);
    console.log(`Lowest Hospital Bill: ${findLowestBill(patients)}`);
    console.log(`Average Hospital Bill: ${calculateAverageBill(patients)}`);
    console.log(`Total Hospital Revenue: ${calculateTotalRevenue(patients)}`);
    const admittedPatients = getAdmittedPatientNames(patients);
    console.log(`Admitted Patients: ${admittedPatients.join(", ")}`);
}

printHospitalReport(patients);