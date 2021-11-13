let clearHS = document.querySelector("#clear");




var body = document.body;
var olEl = document.querySelector("#ordered-scores");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");

li1Name = document.createElement("div");
li2Name = document.createElement("div");
li3Name = document.createElement("div");
li4Name = document.createElement("div");
li5Name = document.createElement("div");

li1Score = document.createElement("div");
li2Score = document.createElement("div");
li3Score = document.createElement("div");
li4Score = document.createElement("div");
li5Score = document.createElement("div");



// display scores from localStorage to scoreboard
let displayScores = function() {

    if (playerHighscore[0].name !== null) {

        olEl.appendChild(li1);
        li1.appendChild(li1Name);


    }
    
    


}