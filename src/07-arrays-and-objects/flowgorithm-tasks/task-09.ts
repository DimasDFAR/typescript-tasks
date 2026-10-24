/**
 * Sales Leaderboard
 * Moklet Coffee wants to find both its best-performing and its least-performing staff member for the month, using two parallel arrays: one for the staff names and one for their total sales.
 * 
 * Your Task:
 * Create a Flowgorithm program that:
 *     • stores the staff names and sales amounts in two parallel arrays
 *     • uses a loop to find the index of the highest sales and the index of the lowest sales
 *     • displays the top performer and the staff member with the lowest sales, along with their sales amounts
 */

let staffNames: string[] = ["Dimas", "Aira", "Kake", "Fikri", "Eve"];
let salesAmounts: number[] = [1500, 2300, 1800, 1200, 2100];

let highestIndex = 0;
let lowestIndex = 0;

for (let i = 0; i < salesAmounts.length; i++) {
    console.log(`${staffNames[i]} : Rp${salesAmounts[i]}`);
    if (salesAmounts[i] > salesAmounts[highestIndex]) {
        highestIndex = i;
    }
    if (salesAmounts[i] < salesAmounts[lowestIndex]) {
        lowestIndex = i;
    }
}

console.log();
console.log(`Top Performer: ${staffNames[highestIndex]} (Rp${salesAmounts[highestIndex]})`);
console.log(`Lowest Sales: ${staffNames[lowestIndex]} (Rp${salesAmounts[lowestIndex]})`);