var startQuizBtn = document.querySelector('.startBtn');
var timerInterval;
var secondsLeft = 100;
var quizSection = document.querySelector('.quiz-questions');

startQuizBtn.addEventListener('click', startTimer);

function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft --;
        timer.textContent = 'Time: ' + secondsLeft + ' seconds';
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quizSection.style.display = 'inline';
        }
    }, 1000);
    return timerInterval;
}
