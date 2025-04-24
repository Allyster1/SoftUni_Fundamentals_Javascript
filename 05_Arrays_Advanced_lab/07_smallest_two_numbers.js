function printSmallestTwo(array){

    let sortedArray = array.sort((a, b) => {
        return a - b
    })

    let result = sortedArray.slice(0, 2).join(" ")

    console.log(result)
}

printSmallestTwo([30, 15, 50, 5])