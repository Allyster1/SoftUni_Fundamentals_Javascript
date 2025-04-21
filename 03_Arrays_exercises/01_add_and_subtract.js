function addAndSubtract(array){
    let originalSum = 0
    let modifiedArray = []
    let modifiedSum = 0

    // Original Array Sum
    for (let number of array) {
        originalSum += number
    }

    // Modified Array
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0){
            modifiedArray.push(array[i] - i)
        }
        else {
            modifiedArray.push(array[i] + i )
        }
    }

    // Modified Array Sum
    for (let number of modifiedArray) {
        modifiedSum += number
    }

    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);

}

addAndSubtract([5, 15, 23, 56, 35])