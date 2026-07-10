// The Master Ledger
let takenNames = new Set();

export class Robot {
    constructor() {
        this.reset();
    }

    // 1. Properly return the internal name variable
    get name() {
        return this._name;
    }

    reset() {
        let newName = generateName();
        while (takenNames.has(newName)) {
            newName = generateName();
            console.log('running');
        }
        takenNames.add(newName);

        // 2. Save it to the internal variable '_name' instead of 'name'
        this._name = newName;
    }
}

// 3. Removed the "generateRandomNumber" wrapper so these are globally accessible to the file
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomLetter() {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function generateName() {
    const letter1 = getRandomLetter();
    const letter2 = getRandomLetter();
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    return `${letter1}${letter2}${num1}${num2}${num3}`;
}

Robot.releaseNames = () => {
    takenNames.clear();
};