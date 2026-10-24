/**
 * Fruit Stock List Printer
 * Moklet Canteen wants to display its fruit stock list, one item per line together with its position number, using a single array to store all the fruit names instead of a separate variable for each one.
 * 
 * Your Task:
 * Create a Flowgorithm program that stores 5 fruit names in an array, then uses a For loop to print each fruit together with its index (position number).
 */

const fruits: string[] = ["Apple", "Banana", "Orange", "Mango", "Grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i} : ${fruits[i]}`);
}