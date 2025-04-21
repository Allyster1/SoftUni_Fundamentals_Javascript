function modifyNumber(number){
    let numberString = number.toString()
    let validAverage = false

    while(!validAverage){
        let result = 0

        for (let element of numberString) {
            result += Number(element)
        }

        if(result / numberString.length > 5){
            validAverage = true
        }
        else {
            numberString += '9'
        }  
    }
    
    console.log(numberString);
    
}

modifyNumber(101)
modifyNumber(5835)