/**
 * Highest Exam Score Finder
 * SMK Telkom Malang's teacher wants to quickly find the highest score among a class's exam results, which are stored in an array, without sorting the whole list.
 * 
 * Your Task:
 * Create a Flowgorithm program that stores 5 exam scores in an array and uses a loop to find and display the highest score.
 */
const examScores: number[] = [78, 92, 85, 67, 90];

let highestScore: number = examScores[0];

for (let i = 1; i < examScores.length; i++) {
    if (examScores[i] > highestScore) {
        highestScore = examScores[i];
    }
}


console.log({examScores});
console.log(`The highest exam score is: ${highestScore}`);