/**
 * Moklet Library's kiosk lets a staff member check whether a student's name is already registered in the member array before issuing a new library card.
 * 
 * Your Task:
 * Create a Flowgorithm program that stores 5 member names in an array, uses a loop combined with a condition to search for a name typed by the user, and displays whether the name was FOUND (with its index) or NOT FOUND.
 */

import readline = require("readline");

const memberNames: string[] = ["Dimas", "Aira", "Kake", "Fikri", "Eve"];

function searchMember(name: string): void {
    let foundIndex: number = -1;

    for (let i = 0; i < memberNames.length; i++) {
        if (memberNames[i] === name) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        console.log(`Member FOUND at index ${foundIndex}`);
    } else {
        console.log("Member NOT FOUND");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter member name to search: ", (answer: string) => {
    searchMember(answer.trim());
    rl.close();
});
