let clearHS = document.querySelector("#clear");

let goBack = document.querySelector("#go-back");

// DOM Elements
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

li1NameText = document.createElement("span");
li2NameText = document.createElement("span");
li3NameText = document.createElement("span");
li4NameText = document.createElement("span");
li5NameText = document.createElement("span");

li1Score = document.createElement("div");
li2Score = document.createElement("div");
li3Score = document.createElement("div");
li4Score = document.createElement("div");
li5Score = document.createElement("div");

li1ScoreText = document.createElement("span");
li2ScoreText = document.createElement("span");
li3ScoreText = document.createElement("span");
li4ScoreText = document.createElement("span");
li5ScoreText = document.createElement("span");



// display scores from localStorage to scoreboard
var loadScoreboard = function() {

    if (localStorage.getItem("player0.name") !== "0" && localStorage.getItem("player0.score") !== "0") {

        olEl.appendChild(li1);
        li1.appendChild(li1Name);
        li1Name.textContent = localStorage.getItem("player0.name");
        li1.appendChild(li1Score);
        li1Score.textContent = localStorage.getItem("player0.score");

        li1.setAttribute("style", "display: flex; background-color: rgb(170, 215, 255); font-weight: normal;");

    };

    if (localStorage.getItem("player1.name") !== "0" && localStorage.getItem("player1.score") !== "0") {

        olEl.appendChild(li2);
        li2.appendChild(li2Name);
        li2Name.textContent = localStorage.getItem("player1.name");
        li2.appendChild(li2Score);
        li2Score.textContent = localStorage.getItem("player1.score");

        li2.setAttribute("style", "display: flex; background-color: rgb(170, 215, 255); font-weight: normal;");

    };

    if (localStorage.getItem("player2.name") !== "0" && localStorage.getItem("player2.score") !== "0") {

        olEl.appendChild(li3);
        li3.appendChild(li3Name);
        li3Name.textContent = localStorage.getItem("player2.name");
        li3.appendChild(li3Score);
        li3Score.textContent = localStorage.getItem("player2.score");

        li3.setAttribute("style", "display: flex; background-color: rgb(170, 215, 255); font-weight: normal;");

    };

    if (localStorage.getItem("player3.name") !== "0" && localStorage.getItem("player3.score") !== "0") {

        olEl.appendChild(li4);
        li4.appendChild(li4Name);
        li4Name.textContent = localStorage.getItem("player3.name");
        li4.appendChild(li4Score);
        li4Score.textContent = localStorage.getItem("player3.score");

        li4.setAttribute("style", "display: flex; background-color: rgb(170, 215, 255); font-weight: normal;");

    };

    if (localStorage.getItem("player4.name") !== "0" && localStorage.getItem("player4.score") !== "0") {

        olEl.appendChild(li5);
        li5.appendChild(li5Name);
        li5Name.textContent = localStorage.getItem("player4.name");
        li5.appendChild(li5Score);
        li5Score.textContent = localStorage.getItem("player4.score");

        li5.setAttribute("style", "display: flex; background-color: rgb(170, 215, 255); font-weight: normal;");

    };

};

loadScoreboard();

// clear scoreboard when button clicked
var clearScoreboard = function() {

    localStorage.setItem("player0.name", "0");
    localStorage.setItem("player0.score", "0");
    localStorage.setItem("player1.name", "0");
    localStorage.setItem("player1.score", "0");
    localStorage.setItem("player2.name", "0");
    localStorage.setItem("player2.score", "0");
    localStorage.setItem("player3.name", "0");
    localStorage.setItem("player3.score", "0");
    localStorage.setItem("player4.name", "0");
    localStorage.setItem("player4.score", "0");

    li1.setAttribute("style", "display: none;");
    li2.setAttribute("style", "display: none;");
    li3.setAttribute("style", "display: none;");
    li4.setAttribute("style", "display: none;");
    li5.setAttribute("style", "display: none;");

};

// back to main page when button clicked
var backMainPage = function() {
    location.href = "index.html";
};

// button click event listeners
clearHS.addEventListener("click", clearScoreboard);
goBack.addEventListener("click", backMainPage);