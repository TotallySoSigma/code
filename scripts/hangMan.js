const words = ["apple", "banana", "cherry", "date", "elderberry",
    "pneumonoultramicroscopicsilicovolcanoconiosis", "euouae"];
let incorrectAttempts = 0;
//////////////////////////////////////////////////////////////
function start(arr) {
    const index = Math.floor(Math.random() * arr.length);
    document.getElementById("hangman").src = "images/Hangman/none.png";
    return arr[index];
}
//////////////////////////////////////////////////////////////
const randomWord = start(words);
let dashes = "";
for (let i = 0; i < randomWord.length; i++) {
    dashes += "_ ";
}
document.getElementById("theWord").innerHTML = dashes;

//event listener
function handleKeyDown(event) {
    const keyPressed = event.key;
    if (randomWord.includes(keyPressed)) {
        replaceDashes(keyPressed);
    }
    else {
        incorrectAttempts += 1
        if (incorrectAttempts > 6) {
            incorrectAttempts = 0
            start(words);
        } else {
            document.getElementById("hangman").src = `images/Hangman/${incorrectAttempts}.png`;
        }
    }
}
document.addEventListener('keydown', handleKeyDown);
//////////////////////////////////////////////////////////////
function replaceDashes(char) {
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === char) {
            let currentWord = document.getElementById("theWord").innerHTML;
            let strArray = currentWord.split(' ');
            strArray[i] = char;
            let newWord = strArray.join(' ');
            document.getElementById("theWord").innerHTML = newWord;
        }
    }
}

