function run() {
    const array = [2, 4, 5, 6, 8, 9];
    for (let b = 0; b < array.length; b++) {
        for (let c = 0; c < array.length; c++) {
            for (let d = 0; d < array.length; d++) {
                for (let e = 0; e < array.length; e++) {
                    for (let f = 0; f < array.length; f++) {
                        for (let g = 0; g < array.length; g++) {
                            const arrOfLetters = [array[b], array[c], array[d], array[e], array[f], array[g]];
                            const isUnique = arrOfLetters => arrOfLetters.length === new Set(arrOfLetters).size;
                            if (isUnique(arrOfLetters)) {
                                if (array[b] === 8 && array[c] === 4 && array[d] === 9 && array[e] === 5 && array[f] === 6 && array[g] === 2) {
                                    if (check(10 + array[b], array[e] * 10 + array[f], array[c] * 10 + array[d], array[g] * 10 + 7)) {
                                        console.log(`${10 + array[b]}:${array[c] * 10 + array[d]} * 3 = ${array[e] * 10 + array[f]}:${array[g] * 10 + 7}`);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function check(oneb, ef, cd, g7) {
    if ((cd * 3) % 60 === g7) {
        if (oneb * 3 + Math.floor(cd * 3 / 60) === ef) {
            return true;
        }
    }
}
run();