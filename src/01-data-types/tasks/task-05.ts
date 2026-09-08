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
    ID: string
    name: string
    date: string
    checkInTime: string
    checkOutTime: string
    totalWorkingHours: number
    wasPresent: boolean
}

const morningEmployee: employeeAttendance = {
    ID: "EMP102",
    name: "Daniel Anderson",
    date: "10 March 2026",
    checkInTime: "7:00 am",
    checkOutTime: "3:00 pm",
    totalWorkingHours: 8,
    wasPresent: true
}

const afternoonEmployee: employeeAttendance = {
    ID: "EMP205",
    name: "Michael Carter",
    date: "11 March 2026",
    checkInTime: "8:30 am",
    checkOutTime: "4:30 pm",
    totalWorkingHours: 8,
    wasPresent: true
}

const absentEmployee: employeeAttendance = {
    ID: "EMP318",
    name: "Sophia Williams",
    date: "11 March 2026",
    checkInTime: "N/A",
    checkOutTime: "N/A",
    totalWorkingHours: 0,
    wasPresent: false
}

console.log({
    morningEmployee,
    afternoonEmployee,
    absentEmployee
})