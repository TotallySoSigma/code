function transpose(matrix) {
    let oldRows = matrix.length;
    let oldColumns = matrix[0].length;
    let newMatrix = [];
    //Write your code here
    for (let i = 0; i < oldRows; i++) {
        for (let j = 0; j < oldColumns; j++) {
            newMatrix.push([]);
            newMatrix[j][i] = matrix[i][j];
        }
    }
    return newMatrix;
}
console.log(transpose([[1, 2], [3, 4], [5, 6]]));
