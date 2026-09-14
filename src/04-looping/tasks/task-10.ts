/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let revisionCount = 0;
let notSubmittedStudents: string[] = [];
let revisionStudents: string[] = [];
let totalScore = 0;
let averageScore = 0;

for (let i = 0; i < submissions.length; i++) {
    const submission = submissions[i];
    totalScore += submission.score;

    if (submission.submitted) {
        submittedCount++;
        if (submission.score >= 75) {
            passedCount++;
        } else {
            revisionCount++;
            revisionStudents.push(submission.student);
        }
    } else {
        notSubmittedCount++;
        notSubmittedStudents.push(submission.student);
    }
}

averageScore = totalScore / submissions.length;
console.log("Class average score: " + averageScore.toFixed(2));
console.log("Number of students who submitted: " + submittedCount);
console.log("Number of students who did not submit: " + notSubmittedCount);
console.log("Number of students who passed: " + passedCount);
console.log("Number of students who must revise: " + revisionCount);
console.log("Names of students who did not submit: " + notSubmittedStudents.join(", "));
console.log("Names of students who must revise: " + revisionStudents.join(", "));