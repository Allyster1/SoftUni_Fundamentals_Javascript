function printNumbers(array){
    let numbersArray = array.map((x) => Number(x)).sort()
    let filteredArray = numbersArray.filter(zero => zero !== 0)

    
    if(array.includes('0')){
        filteredArray.push(0)
    }

    for (let element of numbersArray) {
        console.log(element)
    }
}
// printNumbers(['7', '-2', '8', '9'])
printNumbers(['3', '-2', '0', '-1'])