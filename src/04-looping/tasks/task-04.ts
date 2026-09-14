/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
];

let totalRevenue = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let countHighValueTransactions = 0;

for (let saleCount = 0; saleCount < sales.length; saleCount++) {
    totalRevenue += sales[saleCount];

    if (sales[saleCount] > highestTransaction) {
        highestTransaction = sales[saleCount];
    }

    if (sales[saleCount] < lowestTransaction) {
        lowestTransaction = sales[saleCount];
    }

    if (sales[saleCount] >= 300000) {
        countHighValueTransactions++;
    }
}

console.log("Total sales revenue: Rp" + totalRevenue);
console.log("Highest transaction: Rp" + highestTransaction);
console.log("Lowest transaction: Rp" + lowestTransaction);
console.log("Number of transactions worth Rp300,000 or more: " + countHighValueTransactions);