//This is calculator code
function calculate() {
    let answer = 0;
    let n1 = document.getElementById('n1').value;
    let operation = document.getElementById('operation').value;
    let n2 = document.getElementById('n2').value;

    switch (operation) {
        case "1": answer = parseInt(n1) + parseInt(n2); break;
        case "2": answer = n1 - n2; break;
        case "3": answer = n1 * n2; break;
        case "4": answer = n1 / n2; break;
    }
    document.getElementById('answerVar').innerHTML = answer;
}

// This is calculator2 code



let numbers = [];
let operator;
let currentNumber = 0;
function reset() {
    numbers = ['', ''];
    operator;
    currentNumber = 0;
}
reset();
function clearDisplay() {
    display('0');
    reset();
}

function saveNumber(number) {
    console.log(numbers[currentNumber]);
    numbers[currentNumber] = numbers[currentNumber] + number;
    console.log(numbers[currentNumber]);
    display(numbers[currentNumber]);
}
function saveOperator(op) {
    operator = op;
    display(operator);
    currentNumber++;
}
function display(text) {
    document.getElementById('screen').value = text;
}
function solve() {
    let answer=0
    switch (operator) {
        case "+":
            answer=(parseInt(numbers[0]) + parseInt(numbers[1]));
            break;
        case "-":
            answer=(parseInt(numbers[0]) - parseInt(numbers[1]));
            break;
        case "*":
            answer=(parseInt(numbers[0]) * parseInt(numbers[1]));
            break;
        case "/":
            answer=(parseInt(numbers[0]) / parseInt(numbers[1]));
            break;
    }
    display(answer);
    reset();
    numbers[currentNumber] = answer;
}