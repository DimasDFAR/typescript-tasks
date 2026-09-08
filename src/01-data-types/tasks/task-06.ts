/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type productInfo = {
    productCode: string
    productName: string
    sellingPrice: number
    stockQuantity: number
    productWeight: number
    rating: number
    discounted: boolean
}

const electronicItem: productInfo = {
    productCode: "PR1024",
    productName: "Keyboard",
    sellingPrice: 475000,
    stockQuantity: 35,
    productWeight: 650,
    rating: 4,
    discounted: true
}

const kitchenItem: productInfo = {
    productCode: "PR2058",
    productName: "Rice Cooker",
    sellingPrice: 625000,
    stockQuantity: 18,
    productWeight: 2100,
    rating: 5,
    discounted: false
}

const computerItem: productInfo = {
    productCode: "PR3147",
    productName: "Monitor",
    sellingPrice: 1850000,
    stockQuantity: 12,
    productWeight: 3200,
    rating: 4,
    discounted: true
}

console.log({
    electronicItem,
    kitchenItem,
    computerItem
})
