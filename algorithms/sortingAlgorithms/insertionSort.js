function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (j - 1 < 0) {
                i++;
                j = i;
            }
            if (array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
                j -= 2;
            } else {
                i++;
                j = i - 1;
            }
        }
    }
    return array;
}
const array = [4, 5, 3, 2, 0, 1, 6, 9, 8, 7];
console.log(insertionSort(array));