/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */


type Student = {
    studentId: string
    fullName: string
    age: number
    isActive: boolean
}

const activeStudentA: Student = {
    studentId: "ST101",
    fullName: "Rafi Maulana",
    age: 15,
    isActive: true
}

const activeStudentB: Student = {
    studentId: "ST102",
    fullName: "Nabila Rahmawati",
    age: 16,
    isActive: true
}

const inactiveStudent: Student = {
    studentId: "ST103",
    fullName: "Kevin Wijaya",
    age: 17,
    isActive: false
}

console.log({
    activeStudentA,
    activeStudentB,
    inactiveStudent
})
