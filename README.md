# <JavaScript Quiz>
JAVASCRIPT TRIVIA QUIZ

## Description

This project was based around creating script for an interactive JavaScript trivia quiz that has leaderboard functionality through the use of localStorage.

This application uses cooresponding arrays of javascript trivia questions, potential answers to be shown in a multiple-choice format, and the correct answers for each question. The leaderboard functions through the use of local storage to record and save user scores and initials to be inserted into the DOM of the leaderboard page to encourage some healthy conpetition. Another note-worthy function is the accessibility added in that shows you if your answer is correct or incorrect upon answering. The scoring for this quiz operates on a 50 second time limit, where correct answers ADD 10 seconds, while an incorrect answers SUBTRACT 10 seconds. The remaining number of seconds upon quiz finish is then used as the user's final score.

My goal is for this project was to help increase my general knowledge of JavaScript in a more interactive and enjoyable way. I hope to pass this quiz along to anyone in my inner-circles who is interested in learning to code to expand their knowledge and skillset.

This project was a difficult, but ultimately very rewarding experience. I learned a lot about localStorage manipulation, as well as page interactivity when playing with time limits. My biggest struggle in this project was getting the data entered into localStorage to print onto the leaderboard card. My future goals for this project is to add more trivia questions and add in a question randomizer, as well as a more structured organization of the leaderboard.

GitHub Repo:
https://github.com/tjmomon92/Challenge-4-1-14-2022

Deployed Application:
https://tjmomon92.github.io/Challenge-4-1-14-2022/


## Installation

This application operates entirely in your browser; no installation required for use!

## Usage

To begin this quiz, simply load the page and hit the "Start Quiz":
  ![Screenshot-startQuiz](https://user-images.githubusercontent.com/118149929/216455726-def750fe-4930-4cad-b66c-6ce9e0db7e03.png)

To navigate through the quiz, click on your desired answer from the choices presented to move to the next question and to receive a "Correct" or "Incorrect" message at the bottom of the quiz:
  ![Screenshot-nextQuestion](https://user-images.githubusercontent.com/118149929/216455852-89051c17-836d-4c03-b383-ae925cd4b35c.png)

Once the quiz has finished, you can either try again for a better score via the 'try again' button, or enter your initials and hit the 'submit' button to save your score:
  ![Screenshot-submit](https://user-images.githubusercontent.com/118149929/216455950-44172d44-18f0-426e-9a67-238368698cc2.png)

In this application, localStorage is used to save user initials and their final score to the "leaderboard" DOM:
  ![Screenshot-localStorage](https://user-images.githubusercontent.com/118149929/216456010-e6e2dc7f-58c6-41a0-b7cd-37d6af878cba.png)

To navigate to the leaderboard, click the 'leaderboard' button, and you will see your saved scores displayed:
  ![Screenshot-leaderBoard](https://user-images.githubusercontent.com/118149929/216456065-5a5f9a5a-7eb1-4c14-bf19-6c5036d5f575.png)

If your refresh the page or navigate back to this page, your high score data will persist until the 'clear scores' button is clicked. To try the quiz again, hit the 'try again' button from the leaderboard or the quiz end.
