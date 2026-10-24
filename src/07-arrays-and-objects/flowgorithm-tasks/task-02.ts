/**
 * Weekly Temperature Log
 * Moklet Weather Station records the daily temperature for one school week. The recorded values are stored in an array and must be looped through to calculate the total and the average temperature.
 * 
 * Your Task:
 * Create a Flowgorithm program that:
 *     • stores 7 daily temperatures in an array
 *     • uses a For loop to display each day's temperature while accumulating the total
 *     • calculates and displays the average temperature after the loop finishes
 */

const temperatures: number[] = [29, 31, 28, 30, 32, 27, 29];

let totalTemperature: number = 0;

for (let i = 0; i < temperatures.length; i++) {
    console.log(`Day ${i + 1} : ${temperatures[i]}°C`);
    totalTemperature += temperatures[i];
}

const averageTemperature: number = totalTemperature / temperatures.length;
console.log();
console.log(`Total Temperature: ${totalTemperature}°C`);
console.log(`Average Temperature: ${averageTemperature.toFixed(2)}°C`);