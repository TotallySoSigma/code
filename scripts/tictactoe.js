
class TicTacToe {
    constructor(positions) {
        let z = 0;
        this.grid = [];
        for (let i = 0; i < 3; i++) {
            this.grid[i] = [];
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = positions[z];
                z++;
            }
        }
    }
    print() {
        console.log(this.grid[0]);
        console.log(this.grid[1]);
        console.log(this.grid[2]);
    }
    get(x, y) {
        return this.grid[x][y];
    }
    set(x, y, value) {
        this.grid[x][y] = value;
    }
    isGameWon() {
        return this.is3Horizontal() || this.is3Vertical() || this.is3Diagonal();
    }
    is3Horizontal() {
        if (this.grid[0][0] == this.grid[0][1] && this.grid[0][1] == this.grid[0][2]) {
            return true;
        }
        if (this.grid[1][0] == this.grid[1][1] && this.grid[1][1] == this.grid[1][2]) {
            return true;
        }
        if (this.grid[2][0] == this.grid[2][1] && this.grid[2][1] == this.grid[2][2]) {
            return true;
        }
        return false;
    }
    is3Vertical() {
        if (this.grid[0][0] == this.grid[1][0] && this.grid[1][0] == this.grid[2][0]) {
            return true;
        }
        if (this.grid[0][1] == this.grid[1][1] && this.grid[1][1] == this.grid[2][1]) {
            return true;
        }
        if (this.grid[0][2] == this.grid[1][2] && this.grid[1][2] == this.grid[2][2]) {
            return true;
        }
        return false;
    }
    is3Diagonal() {
        if (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0]) {
            return true;
        }
        if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2]) {
            return true;
        }
        return false;
    }
    //
}
let xTurn = true;
let tictactoe = new TicTacToe([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
function newGame() {
    //start game
}
function clicked(n) {
    if (xTurn) {
        document.getElementById("div" + n).innerHTML = "X";
    } else {
        document.getElementById("div" + n).innerHTML = "O";
    }
    xTurn = !xTurn;
}

tictactoe.print();
console.log("Is game won?" + tictactoe.isGameWon());
console.log("Get: " + tictactoe.get(1, 2));//should return "O"
tictactoe.set(1, 2, " ");
console.log("Get: " + tictactoe.get(1, 2));//should return " "