let words = ['apple', 'bannana', 'poop', 'meow', 'shut', 'hello', 'skibidi'];
//My array;
window.addEventListener('keydown', function (event) {
    document.getElementById("myText").focus();
});
//Event listener for key presses;
function startGame() {
    document.getElementById('myText').value = '';
    displayRandomWord();
    let timeLeft = 10;
    document.getElementById('timer');
    const countdownTimer = setInterval(() => {
        if (timeLeft <= 0) {
            timeLeft -= 1;
            clearInterval(countdownTimer);
            countdownElement.innerHTML = "byebye u died wompwomp";
        } else {
            alert(timeLeft);
            document.getElementById('timer').innerHTML = timeLeft;
        }
    }, 1000);
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