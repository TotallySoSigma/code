function formingMagicSquare(s) {
    //
}


function checkIfSolved(s) {//this function checks if the input is a magic square
    let firstRow = s[0];
    let secondRow = s[1];
    let thirdRow = s[2];
    if (firstRow[0] + firstRow[1] + firstRow[2] == 15) {//first row
        if (secondRow[0] + secondRow[1] + secondRow[2] == 15) {//second row
            if (thirdRow[0] + thirdRow[1] + thirdRow[2] == 15) {//third row
                if (firstRow[0] + secondRow[0] + thirdRow[0] == 15) {//first column
                    if (firstRow[1] + secondRow[1] + thirdRow[1] == 15) {//second column
                        if (firstRow[2] + secondRow[2] + thirdRow[2] == 15) {//third column
                            if (firstRow[0] + secondRow[1] + thirdRow[2] == 15) {//first diagonal
                                if (firstRow[2] + secondRow[1] + thirdRow[0] == 15) {//second diagonal
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
const array = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
];
console.log(checkIfSolved(array));