/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

type ReservationInfo = {
    customerName: string
    premiumMember: boolean
    roomAvailable: boolean
}

const reservation: ReservationInfo = {
    customerName: "Nadia Putri",
    premiumMember: true,
    roomAvailable: false
}

if (reservation.roomAvailable) {
    if (reservation.premiumMember) {
        console.log("Free room upgrade for premium member.")
    } else {
        console.log("Reserved room only for regular customer.")
    }
} else {
    if (reservation.premiumMember) {
        console.log("Placed on priority waiting list for premium member.")
    } else {
        console.log("No rooms available for regular customer.")
    }
}