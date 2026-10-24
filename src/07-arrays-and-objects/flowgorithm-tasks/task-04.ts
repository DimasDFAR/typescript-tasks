/**
 * Cheapest Item Finder
 * Moklet Online Store wants to find the cheapest item among several products. Two parallel arrays are used: one array stores the product names, and another array stores their prices at the same index position.
 * 
 * Your Task:
 * Create a Flowgorithm program that:
 *     • stores the product names and prices in two parallel arrays
 *     • uses a loop to find the index of the lowest price
 *     • displays the cheapest product's name together with its price
 */
const productNames: string[] = ["Notebook", "Pen", "Eraser", "Ruler", "Pencil"];
const productPrices: number[] = [8000, 3000, 2500, 5000, 2000];

let lowestPriceIndex: number = 0;

for (let i = 1; i < productPrices.length; i++) {
    if (productPrices[i] < productPrices[lowestPriceIndex]) {
        lowestPriceIndex = i;
    }
    console.log(`${productNames[i]} : Rp${productPrices[i]}`);
}

console.log(`Cheapest Item : ${productNames[lowestPriceIndex]}  (Rp${productPrices[lowestPriceIndex]})`);