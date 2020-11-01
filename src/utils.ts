// Knuth Shuffle a.k.a. the Fisher-Yates shuffle algorithm

export const shuffleArray = (array: any[]) => {
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
}