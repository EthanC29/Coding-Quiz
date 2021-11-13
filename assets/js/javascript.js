
let i = 0

let points = 0;

let timeLimit = 60;
let timer = document.querySelector("#timer")

let quizQuestion = document.querySelector("#quiz-question-text");

let quizAnswer1 = document.querySelector("#answer1");
let quizAnswer2 = document.querySelector("#answer2");
let quizAnswer3 = document.querySelector("#answer3");
let quizAnswer4 = document.querySelector("#answer4");

let startQuizBtn = document.querySelector("#start-quiz");

let submitInitialsButton = document.querySelector("#submit-initials");

let startQuizSection = document.querySelector(".start-quiz-section");
let answerSection = document.querySelector(".answer-section");
let scoreSection = document.querySelector(".score-section");
let resultSection = document.querySelector(".result-section");

let result = document.querySelector("#result");
let finalScore = document.querySelector("#final-score");

let scoreForm = document.querySelector("#score-form");

let playerInitials = document.querySelector("#initials");

var playerHighscore = [
    {
        name: "N/A",
        score: "N/A"
    },
    {
        name: "N/A",
        score: "N/A"
    },
    {
        name: "N/A",
        score: "N/A"
    },
    {
        name: "N/A",
        score: "N/A"
    },
    {
        name: "N/A",
        score: "N/A"
    },
    {
        name: "N/A",
        score: "N/A"
    }
]
  


// questions and answers
const questionArray = [
    "What is the process of finding errors and fixing them within a program?", 
    "Which of the following is not a required part of a for loop?", 
    "A loop that never ends is referred to as a(n)_________.", 
    "Which operator should be used for determining if a variable is equal to a value but not strictly equal?", 
    "What is always the first element in an html document?"
];

const answer1Array = [
    "Compiling", 
    "Initialization", 
    "While loop", 
    "=", 
    "html"
];

const answer2Array = [
    "Executing", 
    "Condition", 
    "Infinite loop", 
    "==", 
    "head"
];

const answer3Array = [
    "Debugging", 
    "Variable", 
    "Recursive loop", 
    "===", 
    "body"
];

const answer4Array = [
    "Scanning", 
    "Increment", 
    "For loop", 
    "!=", 
    "title"
];

const checkAnswerArray = [
    3, 
    3, 
    2, 
    2, 
    1
];

/*
let question1 = {
    q = "What is the process of finding errors and fixing them within a program?", 
    a1 = "Compiling", 
    a2 = "Executing", 
    a3 = "Debugging", 
    a4 = "Scanning", 
    aCheck = 3
}
*/


// 60 second timer
let countdown = function() {
    timeLimit = 60;

    let timeInterval = setInterval(function() {
        if (i <= 4 && timeLimit > 0) {
            timer.textContent = "Time: " + timeLimit + " seconds";
            timeLimit--;
        }
        else {
            clearInterval(timeInterval);
            timer.textContent = "Time: " + timeLimit + " seconds";
            answerSection.setAttribute("style", "display: none;");
            scoreSection.setAttribute("style", "display: block;");
            quizQuestion.textContent = "Quiz Complete";
            points = timeLimit;
            i = 0;
            finalScore.textContent = "Your final score is " + points;
        }
    }, 1000);
}

// loads the next question by replaceing values
let loadNextQuestion = function() {

    quizQuestion.textContent = questionArray[i];

    quizAnswer1.textContent = answer1Array[i];
    quizAnswer2.textContent = answer2Array[i];
    quizAnswer3.textContent = answer3Array[i];
    quizAnswer4.textContent = answer4Array[i];

}

// starts the quiz: hides start section, reveals answer & result sections
let startQuiz = function() {

    countdown();

    loadNextQuestion();

    startQuizSection.setAttribute("style", "display: none;");
    answerSection.setAttribute("style", "display: block;");
    resultSection.setAttribute("style", "display: block;");

}

// checks if answer is correct or incorrect
let checkAnswer1 = function() {

    if (checkAnswerArray[i] === 1) {
        result.textContent = "Correct";
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    if (i <= 4) {
        loadNextQuestion();
    }

}

let checkAnswer2 = function() {

    if (checkAnswerArray[i] === 2) {
        result.textContent = "Correct";
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    if (i <= 4) {
        loadNextQuestion();
    }

}

let checkAnswer3 = function() {

    if (checkAnswerArray[i] === 3) {
        result.textContent = "Correct";
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    if (i <= 4) {
        loadNextQuestion();
    }

}

let checkAnswer4 = function() {

    if (checkAnswerArray[i] === 4) {
        result.textContent = "Correct";
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    if (i <= 4) {
        loadNextQuestion();
    }

}


// submit initials and score and reorders scoreboard then replaces localStorage
let submitInitials = function(event) {

    // prevents the page from reloading
    event.preventDefault();

    // calls previous values for scoreboard from localStorage
    if (localStorage.getItem("player0.name") !== "N/A" && localStorage.getItem("player0.score") !== "N/A") {
        
        playerHighscore[0].name = localStorage.getItem("player0.name");
        playerHighscore[0].score = localStorage.getItem("player0.score");
    
    }
    else {
        localStorage.setItem("player0.name", "N/A");
        localStorage.setItem("player0.score", "N/A");
    };

    if (localStorage.getItem("player1.name") !== "N/A" && localStorage.getItem("player1.score") !== "N/A") {
        
        playerHighscore[1].name = localStorage.getItem("player1.name");
        playerHighscore[1].score = localStorage.getItem("player1.score");
    
    }
    else {
        localStorage.setItem("player1.name", "N/A");
        localStorage.setItem("player1.score", "N/A");
    };

    if (localStorage.getItem("player2.name") !== "N/A" && localStorage.getItem("player2.score") !== "N/A") {
        
        playerHighscore[2].name = localStorage.getItem("player2.name");
        playerHighscore[2].score = localStorage.getItem("player2.score");
    
    }
    else {
        localStorage.setItem("player2.name", "N/A");
        localStorage.setItem("player2.score", "N/A");
    };

    if (localStorage.getItem("player3.name") !== "N/A" && localStorage.getItem("player3.score") !== "N/A") {
        
        playerHighscore[3].name = localStorage.getItem("player3.name");
        playerHighscore[3].score = localStorage.getItem("player3.score");
    
    }
    else {
        localStorage.setItem("player3.name", "N/A");
        localStorage.setItem("player3.score", "N/A");
    };

    if (localStorage.getItem("player4.name") !== "N/A" && localStorage.getItem("player4.score") !== "N/A") {
        
        playerHighscore[4].name = localStorage.getItem("player4.name");
        playerHighscore[4].score = localStorage.getItem("player4.score");
    
    }
    else {
        localStorage.setItem("player4.name", "N/A");
        localStorage.setItem("player4.score", "N/A");
    };



    // inputs current score values
    playerHighscore[5].name = playerInitials;
    playerHighscore[5].score = points;

    // reorders scoreboard values from highest to lowest
    playerHighscore.sort(function(a, b) {
        return parseFloat(a.score) - parseFloat(b.score);
    });

    // returns reordered values to localStorage except last value
    localStorage.setItem("player0.name", playerHighscore[0].name);
    localStorage.setItem("player0.score", playerHighscore[0].score);
    localStorage.setItem("player1.name", playerHighscore[1].name);
    localStorage.setItem("player1.score", playerHighscore[1].score);
    localStorage.setItem("player2.name", playerHighscore[2].name);
    localStorage.setItem("player2.score", playerHighscore[2].score);
    localStorage.setItem("player3.name", playerHighscore[3].name);
    localStorage.setItem("player3.score", playerHighscore[3].score);
    localStorage.setItem("player4.name", playerHighscore[4].name);
    localStorage.setItem("player4.score", playerHighscore[4].score);

    location.href = "highscores.html";

}









startQuizBtn.addEventListener("click", startQuiz);

quizAnswer1.addEventListener("click", checkAnswer1);
quizAnswer2.addEventListener("click", checkAnswer2);
quizAnswer3.addEventListener("click", checkAnswer3);
quizAnswer4.addEventListener("click", checkAnswer4);

scoreForm.addEventListener("submit", submitInitials);