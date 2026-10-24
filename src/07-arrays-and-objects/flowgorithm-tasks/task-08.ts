/**
 * Score Ranking
 * Math Club wants to rank a set of quiz scores from lowest to highest to prepare a ranking board, using a sorting algorithm instead of manually rearranging the numbers by hand.
 * 
 * Your Task:
 * Create a Flowgorithm program that stores 5 scores in an array and uses a Bubble Sort algorithm (a loop inside another loop that compares and swaps neighboring elements) to sort the scores from lowest to highest, then displays the sorted array.
 */

const originalScores: number[] = [88, 72, 95, 60, 81];

let sortedScores: number[] = [];

for (let i = 0; i < originalScores.length; i++) {
    sortedScores[i] = originalScores[i];
}

// Bubble Sort Algorithm
for (let i = 0; i < sortedScores.length - 1; i++) {
    for (let j = 0; j < sortedScores.length - 1 - i; j++) {
        if (sortedScores[j] > sortedScores[j + 1]) {
            // Swap elements
            let temp = sortedScores[j];
            sortedScores[j] = sortedScores[j + 1];
            sortedScores[j + 1] = temp;
        }
    }
}

console.log("Original Scores:", originalScores);
console.log("Sorted Scores:", sortedScores);