/**
 * Reverse Order Printer
 * Moklet Coding Club wants to display its member registration queue in reverse order (the most-recently registered member shown first), without changing the order of the original array.
 * 
 * Your Task:
 * Create a Flowgorithm program that stores 4 names in an array, then uses a loop that starts from the last index down to the first index to print the names in reverse order.
 */

const originalOrder: string[] = ["Dinda", "Arka", "Bella", "Farrel"];

console.log(`Original Order: ${originalOrder.join(", ")}`);
console.log()
console.log('Reverse Order:');
for (let i = originalOrder.length - 1; i >= 0; i--) {
    console.log(originalOrder[i]);
}