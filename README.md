# TriviaQuiz

## Introduction

Trivia Quiz is a web application designed to test users on their knowledge in Trivia.

## Dev Initial Gatherings

1. Trivia Quiz is built without a back-end with the assumption that the user's progress would not be tracked. In addition, trivia questions are
   provided in hard-coded JSON files and there are currently no security concerns.
2. Trivia Quiz is developed using TypeScript, a superset of JavaScript for its static type checking and self-documenting code to encourage quality code.
3. Fisher-Yates shuffle algorithm is implemented to ensure replayability and uniqueness as each round's question and answer selections will be in random order.
4. Jest and Enzyme was utilized for Trivia Quiz's automated test suite to conduct front-end and API testing.
5. Trivia Quiz's front-end is developed with React for its performant virtual DOM and ability to create reusable and extensible components.

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

Install the NPM modules

> npm install

Start the application

> npm start

## Testing

Tests are written with Jest and Enzyme.
Please see the **test** folder in src to see all available tests.

To run the automated test suite:

> npm test

## Future Updates

1. Implement a leaderboard system where the user can view his/her best scores.
2. Refine the user experience further by improving the overall styling of the application.

## If there is a need to scale

1. Design a back-end to handle multiple users concurrently.
2. Design a leaderboard system that will return the score of the top K players.
