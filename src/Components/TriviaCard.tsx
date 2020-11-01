import React, { FC, useState, useEffect } from 'react'

// Type Checking 
import { QuestionBankState } from '../API'

// Components
import { AnswerCard } from './index'

// Randomize the questions
import { fetchQuestions } from '../API'

// Question Bank
import jsonData from '../questions/tandem_data.json'

import '../css/normal-button.css'

type Props = {
    setGameStatus: any;
}

const MAX_QUESTIONS = 10

const TriviaCard: FC<Props> = ({ setGameStatus }) => {

    const [gameOver, setGameOver] = useState<boolean>(true)
    const [questionBank, setQuestionBank] = useState<QuestionBankState[]>([])
    const [number, setNumber] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [userCorrect, setUserCorrect] = useState<boolean>(false)
    const [userAnswer, setUserAnswer] = useState<string>('')

    useEffect(() => {
        resetState()
    }, [])

    const resetState = () => {
        console.log('fetching questions')
        setQuestionBank(fetchQuestions(jsonData, MAX_QUESTIONS))
        setNumber(0)
        setScore(0)
        setGameOver(false)
    }

    // This function determines the `AnswerCard's` styling depending on correctness.
    const checkColor = (answer: string) => {
        if (userCorrect && answer === userAnswer) return 'correct-answer'
        if (userCorrect || userAnswer === '') return 'choice'
        if (userCorrect && answer !== userAnswer) return 'choice'
        if (!userCorrect && answer === userAnswer) return 'incorrect-answer'
        if (!userCorrect && answer === questionBank[number].correct) return 'correct-answer'
    }

    const checkAnswer = (correct: string, answer: string) => {
        if (answer === correct) {
            setUserCorrect(true)
            setScore(score + 1)
        }
    }

    const isCorrectAnswer = () => {
        return userCorrect ? 'That is Correct!' : 'That is Incorrect.'
    }

    const nextQuestion = (answer: string) => {
        checkAnswer(questionBank[number].correct, answer)
        setUserAnswer(answer)

        setTimeout(() => {
            if (number === MAX_QUESTIONS - 1) {
                setGameOver(true)
            }
            setNumber(number + 1)
            setUserAnswer('')
            setUserCorrect(false)
        }, 1000)
    }

    return (
        <div className='trivia-container'>

            {!gameOver ?
                <div className='question-container'>
                    <p className='question-number'>Question: {number + 1} / {MAX_QUESTIONS}</p>
                    <h3 className='question'>{questionBank[number].question}</h3>
                    {questionBank[number].answers.map((answer: string) => <AnswerCard key={answer} styling={checkColor(answer)} answer={answer} nextQuestion={nextQuestion} userAnswer={userAnswer} />)}
                    {userAnswer ? <p className='answer-alert'>{isCorrectAnswer()}</p> : null}

                </div> : <div className='results-container'>
                    <div className='results-box'>
                        <p className='results-score'>Congratulations! You scored {score} / {MAX_QUESTIONS}</p>
                        <p className='play-again'>Play Again?</p>
                        <button className='n-btn n-btn-styling' onClick={() => resetState()}>Yes</button>
                        <button className='n-btn n-btn-styling' onClick={() => setGameStatus(false)}>No</button>
                    </div>
                </div>}
        </div>
    )

}

export default TriviaCard