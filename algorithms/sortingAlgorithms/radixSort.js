function bucketSort(input) {
    let newArr = new Array(input.length);
    let buckets = new Array(10).fill(0);
    for (let i = 0; i < input.length; i++) {
        buckets[input[i]]++;
    }
    let counter = 0;
    for (let j = 0; j < buckets.length; j++) {
        if (buckets[j] != 0) {
            for (let k = 0; k < buckets[j]; k++) {
                newArr[counter] = j;
                counter++;
            }
        }
    }
    return newArr;
}
function radixSort(array) {
    let lessThan10 = [];
    let toBucketSort = [];
    let returnArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            toBucketSort.push(Number(String(array[i])[1]));//push to sort the 1s digit
        } else {
            lessThan10.push(array[i]);
        }
    }
    let sortLessThan10 = bucketSort(lessThan10);
    returnArr.push(...sortLessThan10);
    let rest = (bucketSort(toBucketSort).every(thing => thing * 10));
    let onesSorted = sortLessThan10.push(...rest);
    return onesSorted;
}
const array = [10, 3, 75, 57, 17, 25, 78, 53, 79, 12, 64, 2, 87];
console.log(radixSort(array));