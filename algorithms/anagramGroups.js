function groupAnagrams(array) {
    let sortedAnagrams = [[array[0]]];
    for (let i = 1; i < array.length; i++) {
        const x = isAnagram(array[i], sortedAnagrams);
        if (x !== -1) {
            sortedAnagrams[x].push(array[i]);
        } else {
            sortedAnagrams.push([array[i]]);
        }
    }
    return sortedAnagrams;
}
function isAnagram(currWord, sortedAnagrams) {
    for (let i = 0; i < sortedAnagrams.length; i++) {
        if (areWordsAnagrams(sortedAnagrams[i][0], currWord)) {
            return i;
        }
    }
    return -1;
}

function areWordsAnagrams(input1, input2) {
    input1 = input1.split(" ").join("");
    input2 = input2.split(" ").join("");
    if (input1.length != input2.length) {
        return false;
    }
    for (let i = 0; i < input1.length + 1; i++) {
        for (let j = 0; j < input2.length + 1; j++) {
            if (input1[i] == input2[j] && input1[i] != "" && input2[j] != "" && input1[i] !== undefined) {
                input1 = input1.replace(input1[i], "");
                input2 = input2.replace(input2[j], "");
                i = 0;
                j = -1;
            }
        }
    }
    if (input1.length == 0 && input2.length == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));