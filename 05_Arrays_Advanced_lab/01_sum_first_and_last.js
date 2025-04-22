function sumFirstAndLast(array){

    let numberArrays = array.map((x) => Number(x))

    let firstElement = numberArrays.shift()
    let lastElement = numberArrays.pop()

    console.log(firstElement + lastElement)

}

sumFirstAndLast(['20', '30', '40'])