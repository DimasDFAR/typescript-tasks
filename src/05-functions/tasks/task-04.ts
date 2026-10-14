/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

printAttendanceReport(attendances)

function printAttendanceReport(attendanceList: {name: string; present: boolean}[]) {
    let totalPresent: number = 0
    let totalAbsent: number = 0
    for (let i = 0; i < attendanceList.length; i++) {
        if (attendanceList[i].present == true) {
            totalPresent++
        } else {
            console.log(`${attendanceList[i].name} is absent`)
            totalAbsent++
        }
    }
    console.log(`Total Present: ${totalPresent}`)
    console.log(`Total Absent: ${totalAbsent}`)
}