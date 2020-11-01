import { shuffleArray } from '../utils'

describe('shuffle array', () => {
    test('array [1, 2, 3, 4, 5] should eventually place 1 in the last index', () => {
        let idx: number = 0
        let testArray: number[] = [1, 2, 3, 4, 5]
        let result: boolean = false

        // testing with an iteration of 10000
        while (idx < 10000) {
            testArray = shuffleArray(testArray)
            if (testArray[testArray.length - 1] === 1) {
                result = true
                break
            }
            result = false
        }

        expect(result).toBeTruthy()
    })
})