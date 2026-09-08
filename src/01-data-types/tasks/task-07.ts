/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type StudentCourse = {
    studentId: string
    fullName: string
    grade: number
    courseID: string
    courseTitle: string
    instructorName: string
}

const programmingStudent: StudentCourse = {
    studentId: "ST2045",
    fullName: "Raka Firmansyah",
    grade: 85,
    courseID: "PY101",
    courseTitle: "Python Fundamentals",
    instructorName: "Dian Prasetyo"
}

const webStudent: StudentCourse = {
    studentId: "ST3178",
    fullName: "Nadia Permata",
    grade: 91,
    courseID: "WD205",
    courseTitle: "Frontend Development",
    instructorName: "Rina Maharani"
}

const databaseStudent: StudentCourse = {
    studentId: "ST4296",
    fullName: "Dimas Kurniawan",
    grade: 76,
    courseID: "DB310",
    courseTitle: "Advanced Database Systems",
    instructorName: "Fajar Hidayat"
}

const registrations: StudentCourse[] = [
    programmingStudent,
    webStudent,
    databaseStudent
]

console.log(registrations)
