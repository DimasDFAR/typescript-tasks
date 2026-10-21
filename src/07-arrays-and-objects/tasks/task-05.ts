/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

let studentScores = []

for (let i = 0; i < students.length; i++) {
    let score = 0;
    let studentScore = { id: students[i].id, name: students[i].name, score: 0 }
    for (let j = 0; j < students[i].answers.length; j++) {
        if (students[i].answers[j] === correctAnswers[j]) {
            score += 20;
        }
    }
    studentScore.score = score;
    studentScores.push(studentScore);
}

let passingStudents = []
let highestScoreStudent = studentScores[0]
let totalScore = 0
let averageScore = 0

for (let i = 0; i < studentScores.length; i++) {
    totalScore += studentScores[i].score;

    if (studentScores[i].score > 70) {
        passingStudents.push(studentScores[i].name);
    }

    if (studentScores[i].score > highestScoreStudent.score) {
        highestScoreStudent = studentScores[i];
    }
}

averageScore = totalScore / studentScores.length;

console.log({ passingStudents });
console.log({ highestScoreStudent });
console.log({ averageScore });