/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice: number = 850000
const keyboardQuantity: number = 1

const mousePrice: number = 275000
const mouseQuantity: number = 2

const mousePadPrice: number = 120000
const mousePadQuantity: number = 1

const isPremium: boolean = true

const subtotal = (keyboardPrice * keyboardQuantity) +
                 (mousePrice * mouseQuantity) +
                 (mousePadPrice * mousePadQuantity)

let totalItems: number = 0

for (let i = 0; i < keyboardQuantity; i++) {
    totalItems++
}

for (let i = 0; i < mouseQuantity; i++) {
    totalItems++
}

for (let i = 0; i < mousePadQuantity; i++) {
    totalItems++
}

const discountApplied: boolean = subtotal > 1000000
const discount = discountApplied ? subtotal * 0.10 : 0
const shipping = isPremium ? 0 : 50000

const finalPayment = subtotal - discount + shipping

console.log("Subtotal:", subtotal)
console.log("Total items:", totalItems)
console.log("Discount applied:", discountApplied)
console.log("Discount:", discount)
console.log("Shipping:", shipping)
console.log("Final payment:", finalPayment)