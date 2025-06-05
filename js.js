let autoclickercost = 10;
let score = 0;
let autoclickers = 0;


const scoreDisplay = document.getElementById("score");
const cookie = document.getElementById("cookie");
const upgradeButton = document.getElementById("upgrade");



cookie.addEventListener("click", function(){
    score++;
    scoreDisplay.textContent = score;
});

upgradeButton.addEventListener("click", function(){
    if (score>=autoclickercost){
        score -= autoclickercost;
        autoclickers++;
        autoclickercost= Math.floor(autoclickercost * 1.5);
        upgradeButton.textContent= "Buy Auto - Clicker (Cost:"+autoclickercost+")"
        scoreDisplay.textContent= score;
    }
});