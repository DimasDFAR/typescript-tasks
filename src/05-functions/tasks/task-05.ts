/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];



function findHighestScore(scores: number[]): number {
  let highestScore: number = scores[0]
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i]
    }
  }
  return highestScore
}

function findLowestScore(scores: number[]): number {
  let lowestScore: number = scores[0]
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < lowestScore) {
      lowestScore = scores[i]
    }
  }
  return lowestScore
}

function calculateAverage(scores: number[]): number {
  let totalScore: number = 0
  let averageScore: number
  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i]
  }
  averageScore = totalScore / scores.length
  return averageScore
}

function countPassedStudents(scores: number[]): number {
  let passingStudents: number = 0
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      passingStudents++
    }
  }
  return passingStudents
}


console.log(`Highest Score: ${findHighestScore(scores)}`)
console.log(`Lowest Score: ${findLowestScore(scores)}`)
console.log(`Average Score: ${calculateAverage(scores)}`)
console.log(`Passing Students: ${countPassedStudents(scores)}`)