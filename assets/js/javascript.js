
var i = 0

var points = 0;

var timeLimit = 60;
var timer = document.querySelector("#timer")

var quizQuestion = document.querySelector("#quiz-question-text");

var quizAnswer1 = document.querySelector("#answer1");
var quizAnswer2 = document.querySelector("#answer2");
var quizAnswer3 = document.querySelector("#answer3");
var quizAnswer4 = document.querySelector("#answer4");

var startQuizBtn = document.querySelector("#start-quiz");

var submitInitials = document.querySelector("#submit-initials");

var startQuizSection = document.querySelector(".start-quiz-section");
var answerSection = document.querySelector(".answer-section");
var scoreSection = document.querySelector(".score-section");
var resultSection = document.querySelector(".result-section");

var result = document.querySelector("#result");



// questions and answers
var questionArray = [
    "What is the process of finding errors and fixing them within a program?", 
    "2 + 2 =", 

];

var answer1Array = [
    "Compiling", 
    "1", 

];

var answer2Array = [
    "Executing", 
    "2", 

];

var answer3Array = [
    "Debugging", 
    "3", 

];

var answer4Array = [
    "Scanning", 
    "4", 

];

var checkAnswerArray = [
    3, 
    4, 

];



quizQuestion.textContent = "Ready to start the quiz?"

// 60 second timer
var timeInterval = setInterval(function() {
    if (timeLimit >= 0) {
        if (i <= 10) {
            timer.textContent = "Time: " + timeLimit;
            timeLimit--;
        }
        else {
            points = timeLimit;
            timeLimit = 60;
            answerSection.setAttribute("style", "display: none;");
            resultSection.setAttribute("style", "display: none;");
            scoreSection.setAttribute("style", "display: block;");
            quizQuestion.textContent = "You completed all the questions";
            i = 0;
        }
    }
    else {
        answerSection.setAttribute("style", "display: none;");
        resultSection.setAttribute("style", "display: none;");
        scoreSection.setAttribute("style", "display: block;");
        quizQuestion.textContent = "You ran out of time";
        i = 0;
    }
  }, 1000);

// loads the next question by replaceing values
var loadNextQuestion = function() {

    quizQuestion.textContent = questionArray[i];

    quizAnswer1.textContent = answer1Array[i];
    quizAnswer2.textContent = answer2Array[i];
    quizAnswer3.textContent = answer3Array[i];
    quizAnswer4.textContent = answer4Array[i];

}

// starts the quiz: hides start section, reveals answer & result sections
var startQuiz = function() {

    loadNextQuestion();

    startQuizSection.setAttribute("style", "display: none;");
    answerSection.setAttribute("style", "display: block;");
    resultSection.setAttribute("style", "display: block;");

}

// checks if answer is correct or incorrect
var checkAnswer1 = function() {

    if (checkAnswerArray[i] === 1) {
        result.textContent = "Correct";
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    loadNextQuestion();

}

var checkAnswer2 = function() {

    if (checkAnswerArray[i] === 2) {
        result.textContent = "Correct";
        pointsScore++;
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    loadNextQuestion();

}

var checkAnswer3 = function() {

    if (checkAnswerArray[i] === 3) {
        result.textContent = "Correct";
        pointsScore++;
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    loadNextQuestion();

}

var checkAnswer4 = function() {

    if (checkAnswerArray[i] === 4) {
        result.textContent = "Correct";
        pointsScore++;
    }
    else {
        result.textContent = "Incorrect";
        timeLimit = timeLimit - 10;
    }

    i++;

    loadNextQuestion();

}



















startQuizBtn.addEventListener("click", startQuiz);

quizAnswer1.addEventListener("click", checkAnswer1);
quizAnswer2.addEventListener("click", checkAnswer2);
quizAnswer3.addEventListener("click", checkAnswer3);
quizAnswer4.addEventListener("click", checkAnswer4);

