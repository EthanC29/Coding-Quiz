
let i = 0

let points = 0;

let timeLimit = 60;
let timer = $("#timer")

let quizQuestion = $("#quiz-question-text");

let quizAnswer1 = $("#answer1");
let quizAnswer2 = $("#answer2");
let quizAnswer3 = $("#answer3");
let quizAnswer4 = $("#answer4");

let startQuizBtn = $("#start-quiz");

let submitInitials = $("#submit-initials");

let startQuizSection = $(".start-quiz-section");
let answerSection = $(".answer-section");
let scoreSection = $(".score-section");
let resultSection = $(".result-section");

let result = $("#result");



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



quizQuestion.textContent = "Ready to start the quiz?"

// 60 second timer
let countdown = function() {
    timeLimit = 60;

    let timeInterval = setInterval(function() {
        if (timeLimit >= 0) {
            if (i < 5) {
                timer.textContent = "Time: " + timeLimit;
                timeLimit--;
            }
            else {
                points = timeLimit;
                answerSection.setAttribute("style", "display: none;");
                scoreSection.setAttribute("style", "display: flex;");
                quizQuestion.textContent = "You completed all the questions";
                i = 0;
            }
        }
        else {
            answerSection.setAttribute("style", "display: none;");
            scoreSection.setAttribute("style", "display: flex;");
            quizQuestion.textContent = "You ran out of time";
            i = 0;
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

    loadNextQuestion();

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

    loadNextQuestion();

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

    loadNextQuestion();

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

    loadNextQuestion();

}



















startQuizBtn.addEventListener("click", startQuiz);

quizAnswer1.addEventListener("click", checkAnswer1);
quizAnswer2.addEventListener("click", checkAnswer2);
quizAnswer3.addEventListener("click", checkAnswer3);
quizAnswer4.addEventListener("click", checkAnswer4);

