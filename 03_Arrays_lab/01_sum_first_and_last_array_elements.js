function sumFirstAndLastElement(array){
    let lastElement = array.pop()
    let firstElement = array.shift()

    console.log(firstElement + lastElement);
    
}
sumFirstAndLastElement([20, 30, 40])