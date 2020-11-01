import { shuffleArray } from './utils'

// Export typed props
export type QuestionState = {
    question: string,
    correct: string,
    incorrect: string[]
}

export type QuestionBankState = {
    question: string,
    correct: string,
    answers: string[]
}

export type CurrentState = {
    question: string,
    correct: string,
    answers: string[]
}

export const fetchQuestions = (array: any[], amount: number) => {
    return shuffleArray(array.map((data: QuestionState) => ({
        question: data.question,
        correct: data.correct,
        answers: shuffleArray([...data.incorrect, data.correct])
    }))).slice(0, amount)
}