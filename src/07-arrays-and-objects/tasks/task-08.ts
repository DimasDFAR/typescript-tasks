/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

let averageScores: {name: string, averageScore: number}[] = []

let passingEmployees: {name: string}[] = []

let lowScoredEmployees: {name: string}[] = []

for (const employee of employees) {
    averageScores.push({name: employee.name, averageScore: employee.projects.reduce((sum, project) => sum + project.score, 0) / employee.projects.length})
    for (const project of employee.projects) {
        if (project.score > 85) {
            passingEmployees.push({name: employee.name})
        } else if (project.score < 80) {
            lowScoredEmployees.push({name: employee.name})
        }
    }
}

console.log({averageScores})
console.log({passingEmployees})
console.log({lowScoredEmployees})