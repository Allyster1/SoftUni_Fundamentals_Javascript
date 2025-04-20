function sumEvenNumbers(array){
    let numbersArray = array.map((x) => Number(x))

    sum = 0
    for (let element of numbersArray) {
        if(element % 2 === 0){
            sum += element
        }
    }

    console.log(sum);
    
}

sumEvenNumbers(['1','2','3','4','5','6'])