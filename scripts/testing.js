

function assertArraysEqual(actual, expected, testName) {
    const areEqualLength = actual.length === expected.length;
    const areEqualItems = actual.every((item, i) => item === expected[i]);

    if (areEqualLength && areEqualItems) {
        return `${testName} passed.`;
    } else {
        console.error(`${testName} failed. Expected ${expected}, but got ${actual}`);
        return;
    }
}