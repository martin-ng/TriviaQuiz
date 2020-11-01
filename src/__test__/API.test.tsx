import { fetchQuestions } from '../API'
import TandemJSON from '../questions/tandem_data.json'

describe("fetch questions function", () => {

    test("resulting array with amount of 10 has 10 objects", () => {
        const testArray = fetchQuestions(TandemJSON, 10)
        expect(testArray.length).toBe(10)
    })

    test("resulting array with amount of 15 has 15 objects", () => {
        const testArray = fetchQuestions(TandemJSON, 15)
        expect(testArray.length).toBe(15)
    })

    test("each object's question should not be null", () => {
        const testArray = fetchQuestions(TandemJSON, 10)

        for (let i = 0; i < testArray.length; i++) {
            const currentQuestion = testArray[i].question
            expect(currentQuestion).toBeTruthy()
        }
    })

    test("each object's answer array should contain the object's actual answer", () => {
        const testArray = fetchQuestions(TandemJSON, 10)

        for (let i = 0; i < testArray.length; i++) {
            const correct = testArray[i].correct
            const answersArray = testArray[i].answers
            const result = answersArray.includes(correct)
            expect(result).toBeTruthy()
        }
    })

})

