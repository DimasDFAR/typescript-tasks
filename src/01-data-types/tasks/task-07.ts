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
    studentId: string,
    fullName: string,
    grade: number,
    courseID: string,
    courseTitle: string,
    instructorName: string,
}

const course1: StudentCourse = {
    studentId: "987ASDA089",
    fullName: "Agus Prakoso",
    grade: 88,
    courseID: "CS101",
    courseTitle: "Introduction to Programming",
    instructorName: "Budi Santoso",
}

const course2: StudentCourse = {
    studentId: "456QWER123",
    fullName: "Ayu Lestari",
    grade: 92,
    courseID: "WD202",
    courseTitle: "Web Development",
    instructorName: "Siti Rahmawati",
}

const course3: StudentCourse = {
    studentId: "321ZXCV567",
    fullName: "Bagas Saputra",
    grade: 79,
    courseID: "DB303",
    courseTitle: "Database Management",
    instructorName: "Andi Wijaya",
}

console.log(course1, course2, course3)