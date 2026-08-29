/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardPrice: number = 850000
const keyboardQuantity: number = 1

const mousePrice: number = 275000
const mouseQuantity: number = 2

const monitorStandPrice: number = 420000
const monitorStandQuantity: number = 1

const voucherValue: number = 100000
const isPremium: boolean = true
const rewardPointRate: number = 50000
const vatRate: number = 0.11

const productSubtotal: number =
    (keyboardPrice * keyboardQuantity) +
    (mousePrice * mouseQuantity) +
    (monitorStandPrice * monitorStandQuantity)

const membershipDiscount: number = isPremium ? productSubtotal * 0.10 : 0

const voucherDeduction: number = voucherValue

const paymentBeforeTax: number =
    productSubtotal - membershipDiscount - voucherDeduction

const vat: number = paymentBeforeTax * vatRate

const finalPayment: number = paymentBeforeTax + vat

const rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate)

const freeShipping: boolean =
    isPremium || paymentBeforeTax > 1500000

console.log("Product subtotal:", productSubtotal)
console.log("Membership discount:", membershipDiscount)
console.log("Voucher deduction:", voucherDeduction)
console.log("Payment before tax:", paymentBeforeTax)
console.log("VAT:", vat)
console.log("Final payment:", finalPayment)
console.log("Reward points:", rewardPoints)
console.log("Free shipping:", freeShipping)