function filterrray(array){

    // Slicing Examples
    // let poppedElement = array.slice(0,1).concat(array.slice(2, array.length))
    // let [firstElement, secondElement, ...remainingElements] = array
    // console.log([firstElement, remainingElements].flat())

    // let filteredElement = array.filter((x) => x % 3 === 0)
    // let filteredElement = array.filter((x) => true)
    // let mappedElement = array.map((x) => x % 3 === 0)
    array.forEach((x) => x * 2)

    console.log(array)
    
}

filterrray([1,-1,3,15, 555421])