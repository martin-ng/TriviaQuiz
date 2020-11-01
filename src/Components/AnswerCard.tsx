import React, { FC } from 'react'
import '../css/style.css'
import '../css/answer-button.css'

type Props = {
    styling: any,
    answer: string,
    nextQuestion: any,
    userAnswer: any
}

const AnswerCard: FC<Props> = ({ styling, answer, nextQuestion, userAnswer }) => {

    const classes = userAnswer ? `${styling} btn btn-cursor` : `${styling} btn btn-styling btn-cursor`

    return (
        <div >
            <button className={classes} disabled={userAnswer} onClick={() => nextQuestion(answer)}>{answer}</button>
        </div>
    )
}

export default AnswerCard