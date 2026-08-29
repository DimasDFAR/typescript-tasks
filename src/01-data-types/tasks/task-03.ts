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
    studentId: string,
    fullName: string,
    age: number,
    isActive: boolean,
}

const student1: Student = {
    studentId: "STD1",
    fullName: "Agus Setianto",
    age: 16,
    isActive: true
}

const student2: Student = {
    studentId: "STD2",
    fullName: "Rizky Aditya Pratama",
    age: 17,
    isActive: true
}

const student3: Student = {
    studentId: "STD3",
    fullName: "Salsabila Putri Maharani",
    age: 18,
    isActive: false
}

console.log({student1,student2,student3})