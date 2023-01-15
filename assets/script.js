// Global var
var startQuizBtn = document.querySelector(".startBtn");
var timer = document.querySelector("#timer");
var timerInterval;
var secondsLeft = 50;
var quizSection = document.querySelector(".quiz-questions");
var correctIndex = 0;
var validate = document.querySelector("#validateAnswer");
var submitButton = document.querySelector(".submit-btn");
var userScores = document.querySelector("#highscore");
var highScorePage = document.querySelector(".highscores-card");
var nameEntry = document.querySelector(".high-score");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");   
var question = document.querySelector(".question");

// Questions Array
var question1 = "What is JavaScript?"
var question2 = "What is the main difference between Java and JavScript?"
var question3 = "What are the JavaScript data types?"
var question4 = "What company developed JavaScript?"
var question5 = "What is a prompt box?"
var question6 = "What is the 'This' keyword in javaScript?"
var question7 = "Which syntax is used for single-line comments in JavaScript?"
var question8 = "What is the difference between ViewState and SessionState?"
var question9 = "What does the '===' operator do?"
var question10 = "What are all of the looping structures in JavaScript?"
var questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

// Answer Array
var quizChoice1 = {
    choice1: "Nothing but dark magic from the devil box",
    choice2: "JavaScript is a compiled language used to make the website interactive",
    choice3: "JavaScript is a powerful client-side scripting language used mainly for enhancing the interaction of a user with the webpage",
    choice4: "None of the above",
};
var quizChoice2 = {
    choice1: "JavaScript is a complete programming language, while Java is a coded program that can be introduced to HTML pages",
    choice2: "Java is a complete programming language, while javaScript is a coded program that can be introduced to HTML pages",
    choice3: "Java is what I get from Starbucks, and javaScript is what happens when I drink coffee while coding",
    choice4: "Java and javaScript are the same thing",
};
var quizChoice3 = {
    choice1: "Number, String, Boolean, Object, Undefined",
    choice2: "String, DIV, Null, Boolean, Integer",
    choice3: "Unknown, 404, localStorage, CSS, .png",
    choice4: "None of the above",
};
var quizChoice4 = {
    choice1: "NetGear",
    choice2: "NetScape",
    choice3: "NetFlix",
    choice4: "Net-Fishing",
};
var quizChoice5 = {
    choice1: "A box that allows the user to diagnose potential issues in their code",
    choice2: "An annoying pop-up trying to sell you something",
    choice3: "A box that allows the user to enter input by providing a textbox",
    choice4: "All of the above",
};
var quizChoice6 = {
    choice1: "'This' refers to the fact that 'This' is confusing",
    choice2: "'This' keyword refers to the object from a different div",
    choice3: "'This' refers to the specific function that you are working in",
    choice4: "'This' keyword refers to the object from where it is called",
};
var quizChoice7 = {
    choice1: "-/",
    choice2: "//",
    choice3: "/*",
    choice4: "comment();",
};
var quizChoice8 = {
    choice1: "'ViewState' is specific to a page in session, while 'SessionState' is specific to user-specific data that can be accessed accross all web application pages",
    choice2: "'ViewState is the current part of the web application that you are viewing, while 'SessionState' is the current state of your web page",
    choice3: "'ViewState' is what I did in 5th grade Geography, and 'SessionState' is what happens every election year",
    choice4: "None of the above",
};
var quizChoice9 = {
    choice1: "Relatively compares two operands that must have the same value with conversion",
    choice2: "Creates Train Tracks",
    choice3: "Strictly compares three operands that must have the same value without conversion",
    choice4: "Strictly compares two operands that must have the same value without conversion",
};
var quizChoice10 = {
    choice1: "'For', 'While', 'Do-While'",
    choice2: "'Fruit', 'hula', 'basketball'",
    choice3: "'else', 'else if', 'function'",
    choice4: "None of the above",
};
var answersArray = [quizChoice1, quizChoice2, quizChoice3, quizChoice4, quizChoice5, quizChoice6, quizChoice7, quizChoice8, quizChoice9, quizChoice10]

// Correct Answer Array
var correct1 = quizChoice1.choice3;
var correct2 = quizChoice2.choice2;
var correct3 = quizChoice3.choice1;
var correct4 = quizChoice4.choice2;
var correct5 = quizChoice5.choice3;
var correct6 = quizChoice6.choice4;
var correct7 = quizChoice7.choice2;
var correct8 = quizChoice8.choice1;
var correct9 = quizChoice9.choice3;
var correct10 = quizChoice10.choice1;
var correctArray = [correct1, correct2, correct3, correct4, correct5, correct6, correct7, correct8, correct9, correct10]

// Starts the quiz
startQuizBtn.addEventListener("click", startTimer);
startQuizBtn.addEventListener("click", hideIntro);

// function to start timer on quiz start
function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft --;
        timer.textContent = "Time: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizSection.style.display = "inline";
        }
    }, 1000);
    return timerInterval;
};

// Function to move to next card on quiz start
function hideIntro() {
    document.querySelector(".card-main").style.display = "none";
    quizSection.style.display = "block";
    nextQuestion();
};

// Function to populate next question
function nextQuestion(){
    if(correctIndex === questionsArray.length) {
        setTimeout (function() {quizSection.style.display = "none";
        nameEntry.style.display = "inline";
    },1000);
        setTimeout(function(){clearInterval(timerInterval)},1000);
    } else {
        question.textContent = questionsArray[correctIndex];
        answer1.textContent = answersArray[correctIndex].choice1;
        answer2.textContent = answersArray[correctIndex].choice2;
        answer3.textContent = answersArray[correctIndex].choice3;
        answer4.textContent = answersArray[correctIndex].choice4;
    }
};

// Validates user answer, then adds or subtracts time based on validation
quizSection.addEventListener("click", answer);

function answer(event) {
    if(event.target.matches(".btn-question")){
        var chosenAnswer = event.target.textContent;
        validate.textContent = "";
        validate.style.display = "block";
            if(chosenAnswer === correctArray[correctIndex]) {
                validate.textContent = "Correct";
                setTimeout(function() {validate.style.display = "none"}, 1000);
                secondsLeft += 10;
                timer.textContent = "Time: " + secondsLeft + " seconds";
            } else {
                validate.textContent = "Incorrect";
                setTimeout(function() {validate.style.display = "none"}, 1000);
                secondsLeft -= 10;
                timer.textContent = "Time: " + secondsLeft + " seconds";
            }
            correctIndex++;
    }
    return secondsLeft;
};

// Calls next question in array
quizSection.addEventListener("click", function(event){
    if (event.target.matches(".btn-question")) {
        nextQuestion();
    }
});

// Function to set user input to local storage
function newUser() {
    var userInitial = document.querySelector("#initials").value;
    if (userInitial === "") {
        userInitial = "anonymous";
    }
    localStorage.setItem(userInitial, secondsLeft);
    document.querySelector(".user-scores").textContent = " ";
    var p = document.createElement("p");
    a.textContent = userInitial + ": " + secondsLeft;
    document.querySelector(".user-scores").appendChild(p);
};

// eventListener on 'Submit' button to save user score to localStorage
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    newUser();
});

// Calls leaderboard card and populates scores from localStorage
userScores.addEventListener("click", function() {
    clearInterval(timerInterval);
    document.querySelector(".card-main").style.display = "none";
    quizSection.style.display = "none";
    nameEntry.style.display = "none";
    highScorePage.style.display = "block";
    document.querySelector(".user-scores").textContent = " ";
    for (let i = 0; i< localStorage.length; i++) {
        var p = document.createElement("p");
        var user = localStorage.key(i);
        var scores = localStorage.getItem(localStorage.key(i));
        p.textContent = user + ": " + scores;
        document.querySelector(".user-scores").appendChild(p);
    }
});

// Clears High Score data from local storage
document.querySelector(".clear-highscores").addEventListener("click", function() {
    localStorage.clear();
    document.querySelector(".user-scores").textContent = " ";
    document.querySelector(".user-scores").display = "none";
});

// Re-Starts the Quiz
document.querySelector(".try-again").addEventListener ("click", function() {
    correctIndex = 0;
    secondsLeft = 50;
    timer.textContent = "Time: 50 Seconds"
    document.querySelector(".card-main").style.display = "block";
    highScorePage.style.display = "none";
});