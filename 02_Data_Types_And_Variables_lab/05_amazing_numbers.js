//senior solution

function convertNumberToArray(number){
    return number.toString().split("").map((x) => Number(x))
}

function sumarizeNumbersArray(numbersArray){
    let sum = 0

    for (let numbers of numbersArray) {
        sum += numbers
    }

    return sum
}

function isAmazingSum(number){
    return number.toString().includes("9")
}


function checkSum(number){
    const numbersList = convertNumberToArray(number)
    const summarizedNumber = sumarizeNumbersArray(numbersList)
    console.log(isAmazingSum(summarizedNumber) ? `${number} Amazing? True` : `${number} Amazing? False`);
}


// normal solution
// function checkSum(number){
//     const numbersList = number.toString().split("").map((x) => Number(x))
//     let sum = 0
//     for (let numbers of numbersList) {
//         sum += numbers
//     }

//     console.log(sum.toString().includes('9') ? `${number} Amazing? True` : `${number} Amazing? False`);
// }


// One line solution
// function checkSum(number){
//     console.log(`${number.toString().split("").map((num) => Number(num)).reduce((acc, value) => acc + value, 0).toString().includes("9") ? `${number} Amazing? True` : `${number} Amazing? False`}`)
// }

checkSum(1233)