function findOccurances(array, numbersToFind) {
    const [elementsToTake, deleteElements, searchElement] = numbersToFind
    let counter = 0

    let updatedArray = array.slice(0, elementsToTake)
    let splicedArray = updatedArray.splice(0, deleteElements)

    for (let element of updatedArray) {
        if (element === searchElement) {
            counter++
        }
    }

    console.log(`Number ${searchElement} occurs ${counter} times.`)
}

findOccurances([5, 2, 3, 4, 1, 6],
    [5, 2, 3])

findOccurances([7, 1, 5, 8, 2, 7],
    [3, 1, 5])