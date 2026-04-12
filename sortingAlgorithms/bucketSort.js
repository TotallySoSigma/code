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
const array = [3, 2, 2];
console.log(bucketSort(array));