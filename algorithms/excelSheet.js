function convertToTitle(columnNumber) {
    let answer = [];
    let strAns = "";
    while (columnNumber > 0) {
        columnNumber--;
        answer.push(String.fromCharCode((columnNumber % 26) + 65));
        columnNumber = Math.floor(columnNumber / 26);
    }
    for (let i = answer.length - 1; i >= 0; i--) {
        strAns += answer[i];
    }
    return strAns;
}
console.log(convertToTitle(701))