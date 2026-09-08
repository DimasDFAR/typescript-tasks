/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */

type Temperature = {
    time: string
    temperature: number
}

const morningReading: Temperature = {
    time: "08:00",
    temperature: 24.5
}

const secondReading: Temperature = {
    time: "09:00",
    temperature: 25.1
}

const lateMorning: Temperature = {
    time: "10:00",
    temperature: 26.8
}

const noonApproach: Temperature = {
    time: "11:00",
    temperature: 28.4
}

const noonReading: Temperature = {
    time: "12:00",
    temperature: 30.2
}

const afternoonStart: Temperature = {
    time: "13:00",
    temperature: 31.1
}

const afternoonReading: Temperature = {
    time: "14:00",
    temperature: 30.7
}

const finalReading: Temperature = {
    time: "15:00",
    temperature: 29.3
}

const temperatureRecords: Temperature[] = [
    morningReading,
    secondReading,
    lateMorning,
    noonApproach,
    noonReading,
    afternoonStart,
    afternoonReading,
    finalReading
]

console.log(temperatureRecords)
