function printNumbers(array){

   const result = array.reduce((result, element) => {
    let indexElement = array.indexOf(element)

    if(array[indexElement] < 0){
        result.unshift(element)
    } 
    else {
        result.push(element)
    }

    return result
   }, [])

   console.log(result.join("\n"))

}
//printNumbers(['7', '-2', '8', '9'])
printNumbers(['3', '-2', '0', '-1'])