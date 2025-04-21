function evenOddSum(number){
    let arrayNumber = number.toString().split("").map((x) => Number(x))
    let evenSum = 0
    let oddSum = 0
    
    for (let element of arrayNumber) {
        if(element % 2 === 0){
            evenSum += element
        }
        else {
            oddSum += element
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

evenOddSum(1000435)
evenOddSum(3495892137259234)