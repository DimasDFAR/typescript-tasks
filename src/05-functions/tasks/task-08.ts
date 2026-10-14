/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(submissions: any[]): number {
    return submissions.length;
}

function countSubmittedAssignments(submissions: any[]): number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted) {
            count++;
        }
    }
    return count;
}

function countMissingAssignments(submissions: any[]): number {
    return countTotalStudents(submissions) - countSubmittedAssignments(submissions);
}

function countPassedStudents(submissions: any[]): number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted && submissions[i].score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsRequiringRevision(submissions: any[]): number {
    let count = 0;
    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted && submissions[i].score < 75) {
            count++;
        }
    }
    return count;
}

function calculateAverageScore(submissions: any[]): number {
    const total = submissions.reduce((sum, submission) => sum + submission.score, 0);
    return total / countTotalStudents(submissions);
}

function findHighestScore(submissions: any[]): number {
    let highest = submissions[0].score;
    for (let i = 1; i < submissions.length; i++) {
        if (submissions[i].score > highest) {
            highest = submissions[i].score;
        }
    }
    return highest;
}

function findLowestScore(submissions: any[]): number {
    let lowest = submissions[0].score;
    for (let i = 1; i < submissions.length; i++) {
        if (submissions[i].score < lowest) {
            lowest = submissions[i].score;
        }
    }
    return lowest;
}

function printAssignmentReport(submissions: any[]) {
    console.log(`Total Students: ${countTotalStudents(submissions)}`);
    console.log(`Submitted Assignments: ${countSubmittedAssignments(submissions)}`);
    console.log(`Missing Assignments: ${countMissingAssignments(submissions)}`);
    console.log(`Passed Students: ${countPassedStudents(submissions)}`);
    console.log(`Students Requiring Revision: ${countStudentsRequiringRevision(submissions)}`);
    console.log(`Average Score: ${calculateAverageScore(submissions).toFixed(2)}`);
    console.log(`Highest Score: ${findHighestScore(submissions)}`);
    console.log(`Lowest Score: ${findLowestScore(submissions)}`);
}

printAssignmentReport(submissions);