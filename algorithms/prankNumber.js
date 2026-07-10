function fixPrankNumber(arr) {
    let difference = 0;
    if (arr.length > 3) {
        let firstDifference = arr[0] - arr[1];
        let secondDifference = arr[1] - arr[2];
        let thirdDifference = arr[2] - arr[3];
        let fourthDifference = arr[3] - arr[4];
        if (firstDifference === secondDifference || firstDifference === thirdDifference || firstDifference === fourthDifference) {
            difference = firstDifference;
        } else if (secondDifference === thirdDifference || secondDifference === fourthDifference) {
            difference = secondDifference;
        } else if (thirdDifference === fourthDifference) {
            difference = thirdDifference;
        }
        for (let i = 0; i < arr.length - 2; i++) {
            if (arr[i] - arr[i + 1] !== difference) {
                if (i != 0) {
                    arr[i + 1] = arr[i] - difference;
                } else {
                    arr[i] = arr[i + 1] + difference;
                }
                break;
            }
        }
    } else {
        return "Your job is safe I guess. After all, AI can only replace intelligence.";
    }
    return arr;
}
const array = [11, 24, 36, 48, 60, 72, 84, 96];
console.log(fixPrankNumber(array));