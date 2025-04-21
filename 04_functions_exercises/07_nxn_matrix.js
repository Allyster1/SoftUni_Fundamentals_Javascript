function printIntegers(number){
    let finalOutput = []
    for (let i = 1; i <= number; i++) {
        let output = []
        for (let j = 1; j <= number; j++) {
            output.push(number.toString())
        }

        finalOutput.push(output)
    }

    for (let element of finalOutput) {
        console.log(element.join(" "));
        
    }
    
}

printIntegers(7)