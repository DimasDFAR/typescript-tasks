/**
 * Exam Score Matrix
 * SMK Telkom Malang wants a complete exam report using a 2D array. Each row represents one student, and each column represents one of their three exam scores. The system must calculate every student's total and average score.
 * 
 * Your Task:
 * Create a Flowgorithm program that:
 *     • stores exam scores for 3 students x 3 exams in a 2D array
 *     • uses a nested loop (an outer loop for each student, and an inner loop for each exam score) to calculate the total score for each student
 *     • calculates each student's average score
 *     • displays a report showing each student's scores, total, and average
 */

const examScores: number[][] = [
    [85, 90, 88], // Student 1
    [70, 65, 72], // Student 2
    [95, 92, 98]  // Student 3
];

for (let studentIndex = 0; studentIndex < examScores.length; studentIndex++) {
    let totalScore: number = 0;
    console.log(`Student ${studentIndex + 1} Scores:`);
    for (let examIndex = 0; examIndex < examScores[studentIndex].length; examIndex++) {
        const score = examScores[studentIndex][examIndex];
        console.log(`  Exam ${examIndex + 1}: ${score}`);
        totalScore += score;
    }
    const averageScore: number = totalScore / examScores[studentIndex].length;
    console.log(`Total Score: ${totalScore}`);
    console.log(`Average Score: ${averageScore.toFixed(2)}`);
    console.log();
}