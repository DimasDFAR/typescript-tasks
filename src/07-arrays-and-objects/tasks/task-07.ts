/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

let completedOrders: {id: number}[] = [];

let totalValueOrder: {id: number, total: number}[] = [];

let customerMostSpent: string = ""

let totalRevenue: number = 0

let productPurchased: {product: string, quantity: number}[] = []


for (let order of orders) {
    let totalValueItem: number = 0
    if (order.status === "completed") {
        completedOrders.push({id: order.id})
        for (let item of order.items) {
            totalRevenue += item.price * item.quantity
            const existing = productPurchased.find(p => p.product === item.product);
            if (existing) {
                existing.quantity += item.quantity;
            } else {
                productPurchased.push({ product: item.product, quantity: item.quantity });
            }
        }
    }
    for (let item of order.items) {
        totalValueItem += item.price * item.quantity
    }
    totalValueOrder.push({id: order.id, total: totalValueItem})
    for (let totalIndex of totalValueOrder) {
        if (totalValueItem > totalIndex.total) {
            customerMostSpent = order.customer
        }
    }
}



console.log({completedOrders})
console.log({totalValueOrder})
console.log(`Most spending customer: ${customerMostSpent}`)
console.log({totalRevenue})
console.log({productPurchased})