function firstAndLastK(array) {
    const k = array[0]
    const elements = array.slice(1)

    const firstKElements = elements.slice(0, k)
    const lastKElements = elements.slice(-k)

    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));
}

firstAndLastK([2, 7, 8, 9])
//firstAndLastK([4, 6, 7, 8, 9])