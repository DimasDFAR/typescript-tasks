/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

let studentScores: { student: string; score: number }[] = [];
let studentCorrectAnswers: { student: string; correct: number; wrong: number }[] = [];
let categoryScores: { category: string; averageScore: number }[] = [];
let finalExamAnalytics: {
    totalStudents: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
    passedStudents: number;
    failedStudents: number;
    passRate: number;
} = {
    totalStudents: 0,
    averageScore: 0,
    highestScore: 0,
    lowestScore: Infinity,
    passedStudents: 0,
    failedStudents: 0,
    passRate: 0
};

for (const submission of submissions) {
    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    for (const answer of submission.answers) {
        const question = questions.find(q => q.id === answer.questionId);
        if (question) {
            if (answer.answer === question.correctAnswer) {
                score += 25;
                correctCount++;
                if (!categoryScores.find(c => c.category === question.category)) {
                    categoryScores.push({ category: question.category, averageScore: 0 });
                } else {
                    const category = categoryScores.find(c => c.category === question.category);
                    if (category) {
                        category.averageScore += 25;
                    }
                }
            } else {
                wrongCount++;
            }
        }
    }
    studentScores.push({ student: submission.student, score });
    studentCorrectAnswers.push({ student: submission.student, correct: correctCount, wrong: wrongCount });
    finalExamAnalytics.totalStudents++;
    finalExamAnalytics.averageScore += score;
    if (score > finalExamAnalytics.highestScore) {
        finalExamAnalytics.highestScore = score;
    }
    if (score < finalExamAnalytics.lowestScore) {
        finalExamAnalytics.lowestScore = score;
    }
    if (score >= 75) {
        finalExamAnalytics.passedStudents++;
    } else {
        finalExamAnalytics.failedStudents++;
    }
}
finalExamAnalytics.averageScore /= finalExamAnalytics.totalStudents;
finalExamAnalytics.passRate = (finalExamAnalytics.passedStudents / finalExamAnalytics.totalStudents) * 100;

console.log({ studentScores });
console.log({ studentCorrectAnswers });
console.log({ categoryScores });
console.log({ finalExamAnalytics });