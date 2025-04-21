function mergeTwoArrays(firstArray, secondArray){
    let mergedArray = []

    let first = firstArray.map((x) => Number(x))
    let second = secondArray.map((x) => Number(x))

    for (let i = 0; i < first.length; i++) {
        if(i % 2 === 0){
            mergedArray.push(first[i] + second[i])
        }
        else {
            mergedArray.push(firstArray[i] + secondArray[i])
        }
    }
    
    console.log(mergedArray.join(' - '));
}

mergeTwoArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11'])