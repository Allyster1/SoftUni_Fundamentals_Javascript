function sortNumbers(array) {
    const sortedArray = array.sort((a,b) => b - a)
    const result = []

    while(sortedArray.length > 0) {
        let biggest = sortedArray.shift()
        let smallest = sortedArray.pop()

        result.push(biggest, smallest)
    }

    console.log(result.join(" "));
    
}

sortNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])