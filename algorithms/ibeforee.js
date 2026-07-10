function iBeforeE(sentence) {
    let precededByC = false;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "c") {
            precededByC = true;
        }
        if (sentence[i] === " ") {
            precededByC = false;
        }
        if (sentence[i] === "e" && sentence[i + 1] === "i" && !precededByC) {
            sentence = swapChars(sentence, i, i + 1);
        }
        if (sentence[i] === "i" && sentence[i + 1] === "e" && precededByC) {
            sentence = swapChars(sentence, i, i + 1);
        }
    }
    return sentence;
}
function swapChars(str, index1, index2) {
    let arr = str.split('');
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr.join('');
}


console.log(iBeforeE("we recieved a breif"));