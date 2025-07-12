let words = ['apple', 'bannana', 'poop', 'meow', 'shut', 'hello', 'skibidi'];
//My array;
let score = 0;
window.addEventListener('keydown', function (event) {
    document.getElementById("myText").focus();
    let myText = document.getElementById("mytext").value;
    if (event.key == "Enter" && words[number] == myText) {
        displayRandomWord();
        score++;
    }
});

function countdown() {
    let timer = parseInt(document.getElementById('timer').innerHTML);
    const interval = setInterval(() => {
        document.getElementById('timer').innerHTML = timer;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = "Time's up!";
        }
    }, 1000);
} 


//Event listener for key presses;
function startGame() {
    document.getElementById('timer').innerHTML = 10;
    document.getElementById('myText').value = '';
    displayRandomWord();
    countdown();
}
//Starting game function;
function displayRandomWord() {
    let number = Math.floor(Math.random() * words.length);
    document.getElementById('word').innerHTML = words[number];
}
//Getting a random word from the array;

































/*


bro ur trash at life
go cry about it
wompwomp i dont care


*/