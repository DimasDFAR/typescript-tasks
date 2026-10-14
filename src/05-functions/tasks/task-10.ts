/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(enrollments: any[]): number {
    return enrollments.length;
}

function countCompletedEnrollments(enrollments: any[]): number {
    let count = 0;
    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed) {
            count++;
        }
    }
    return count;
}

function countIncompleteEnrollments(enrollments: any[]): number {
    return countTotalEnrollments(enrollments) - countCompletedEnrollments(enrollments);
}

function calculateCompletionPercentage(enrollments: any[]): number {
    const total = countTotalEnrollments(enrollments);
    const completed = countCompletedEnrollments(enrollments);
    return (completed / total) * 100;
}

function findHighestScore(enrollments: any[]): number {
    let highest = enrollments[0].score;
    for (let i = 1; i < enrollments.length; i++) {
        if (enrollments[i].score > highest) {
            highest = enrollments[i].score;
        }
    }
    return highest;
}

function findLowestScore(enrollments: any[]): number {
    let lowest = enrollments[0].score;
    for (let i = 1; i < enrollments.length; i++) {
        if (enrollments[i].score < lowest) {
            lowest = enrollments[i].score;
        }
    }
    return lowest;
}

function calculateAverageScore(enrollments: any[]): number {
    let totalScore = 0;
    for (let i = 0; i < enrollments.length; i++) {
        totalScore += enrollments[i].score;
    }
    return totalScore / countTotalEnrollments(enrollments);
}

function countPassingStudents(enrollments: any[]): number {
    let count = 0;
    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsByCourse(enrollments: any[], course: string): number {
    let count = 0;
    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === course) {
            count++;
        }
    }
    return count;
}

function calculateAverageScoreByCourse(enrollments: any[], course: string): number {
    let totalScore = 0;
    let count = 0;
    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === course) {
            totalScore += enrollments[i].score;
            count++;
        }
    }
    return count > 0 ? totalScore / count : 0;
}

function calculateTotalLearningHours(enrollments: any[]): number {
    let totalHours = 0;
    for (let i = 0; i < enrollments.length; i++) {
        totalHours += enrollments[i].duration;
    }
    return totalHours;
}

function calculateAverageLearningDuration(enrollments: any[]): number {
    const totalHours = calculateTotalLearningHours(enrollments);
    return totalHours / countTotalEnrollments(enrollments);
}

function printCompletionStatistics(enrollments: any[]): void {
    console.log(`Total Enrollments: ${countTotalEnrollments(enrollments)}`);
    console.log(`Completed Enrollments: ${countCompletedEnrollments(enrollments)}`);
    console.log(`Incomplete Enrollments: ${countIncompleteEnrollments(enrollments)}`);
    console.log(`Completion Percentage: ${calculateCompletionPercentage(enrollments).toFixed(2)}%`);
}

function printAcademicStatistics(enrollments: any[]): void {
    console.log(`Highest Score: ${findHighestScore(enrollments)}`);
    console.log(`Lowest Score: ${findLowestScore(enrollments)}`);
    console.log(`Average Score: ${calculateAverageScore(enrollments).toFixed(2)}`);
    console.log(`Students with Passing Scores: ${countPassingStudents(enrollments)}`);
}

function printCourseStatistics(enrollments: any[]): void {
    const courses = ["TypeScript", "Database", "Backend"];
    for (const course of courses) {
        console.log(`Students Enrolled in ${course}: ${countStudentsByCourse(enrollments, course)}`);
        console.log(`Average Score for ${course}: ${calculateAverageScoreByCourse(enrollments, course).toFixed(2)}`);
    }
}

function printLearningStatistics(enrollments: any[]): void {
    console.log(`Total Learning Hours: ${calculateTotalLearningHours(enrollments)}`);
    console.log(`Average Learning Duration: ${calculateAverageLearningDuration(enrollments).toFixed(2)} hours`);
}

printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
printCourseStatistics(enrollments);
printLearningStatistics(enrollments);