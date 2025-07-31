

function assertArraysEqual(actual, expected, testName) {
    const areEqualLength = actual.length === expected.length;
    const areEqualItems = actual.every((item, i) => item === expected[i]);

    if (areEqualLength && areEqualItems) {
        return `Passed: ${testName}`;
    } else {
        console.error(`Failed: ${testName}. Expected ${expected}, but got ${actual}`);
        return;
    }
}