/**
 * Passing Grade Counter
 * A teacher at SMK Telkom Malang wants to know how many students in the class passed the exam. The passing score is 75. All the students' scores are stored in an array.
 * 
 * Your Task:
 * Create a Flowgorithm program that stores 7 scores in an array, uses a loop combined with a condition to count how many scores are 75 or above, then displays the total number of students who passed.
 */


const examScores: number[] = [80, 65, 90, 72, 88, 55, 95];

let passingCount: number = 0;

for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] >= 75) {
        passingCount++;
    }
}

console.log({examScores});
console.log();
console.log(`Total number of students who passed: ${passingCount}`);