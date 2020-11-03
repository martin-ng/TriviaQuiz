# TriviaQuiz

## Introduction

Trivia Quiz is a web application designed to test users on their knowledge in Trivia. 

Please visit the following link:
https://trivia-quizapp.netlify.app/

## Dev Initial Gatherings

1. Trivia Quiz is built entirely on the front-end with the assumption that a back-end server is unnecessary. There is currently no security concerns while 
   trivia questions are hard-coded within a JSON file.
2. Trivia Quiz is developed using TypeScript, a superset of JavaScript for its static type checking and self-documenting code.
3. Fisher-Yates shuffle algorithm is implemented to ensure replayability and uniqueness. Each round's questions and multiple choices will be in random order.
4. Jest and Enzyme was utilized to build Trivia Quiz's automated test suite to test React components and other functions.
5. Trivia Quiz's front-end is built with React for performance and its ability to create reusable and extensible components.

## User Story

1. As a user, I can view the questions, answer choices, and correct answer upon submission.
2. Each game in Trivia Quiz will have 10 questions and 4 answers to choose from.
   - During each round, the questions will not repeat and the answers will be in random order.
   - The player can only select one answer.
   - The correct answer will be displayed regardless of the player's selection.
   - The correct answer will be displayed in green.
   - The incorrect answer will be displayed in red.
3. At the end of the quiz, I can view my total score and have the option to play again or quit.

## Tech Stack

1. TypeScript
2. React

## Setup

Step by step guide to download repo and start the app.

Clone the project to your selected directory:

> git clone https://github.com/martin-ng/TriviaQuiz.git

CD into TriviaQuiz's root folder

> cd TriviaQuiz/

Install the NPM modules

> npm install

Start the application

> npm start

## Testing

Tests are written with Jest and Enzyme.
Please see the **__test__** folder in src to see all available tests.

To run the automated test suite:

> npm test

## Future Updates

1. Leverage local storage to cache the user's scores.
1. Implement a high-score system where the user can view his/her best scores.
2. Refine the user experience further by improving the overall styling of the application.

## If there is a need create a server and scale..

1. Design a back-end to handle multiple users concurrently.

