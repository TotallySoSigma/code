function sort(array) {
    let pivot = array.length - 1;
    for (let i = -1; i < array.length - 1; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] > array[pivot]) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            } else {
                j++;
            }
        }
        [array[i + 1], array[pivot]] = [array[pivot], array[i + 1]];
    }
    return array;
}
const array = [8, 3, 2, 9, 1, 7, 6, 10, 4, 5];
console.log(sort(array));