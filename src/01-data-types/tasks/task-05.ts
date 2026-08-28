/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type employeeAttendance = {
    ID: String,
    name: String
    date: String,
    checkInTime: String,
    checkOutTime: String,
    totalWorkingHours: number,
    wasPresent: boolean,
}

const employee1: employeeAttendance = {
    ID: "87D9FD",
    name: "Alexander Hugo",
    date: "3 February 2026",
    checkInTime: "4:30 am",
    checkOutTime: "6:30 pm",
    totalWorkingHours: 14,
    wasPresent: true,
}

const employee2: employeeAttendance = {
    ID: "49D9SD",
    name: "Robert Posh",
    date: "4 February 2026",
    checkInTime: "4:30 am",
    checkOutTime: "6:30 pm",
    totalWorkingHours: 14,
    wasPresent: true,
}

const employee3: employeeAttendance = {
    ID: "59D9SD",
    name: "Timmy Josh",
    date: "4 February 2026",
    checkInTime: "4:30 am",
    checkOutTime: "6:30 pm",
    totalWorkingHours: 14,
    wasPresent: true,
}

console.log({employee1, employee2, employee3})