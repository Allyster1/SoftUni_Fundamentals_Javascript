function reverseAndChangeArray(counter, array){
    let changedArray = []
    
    for (let i = 0; i < counter; i++) {
        changedArray.push(Number(array[i]))
    }

    let reversedArray = changedArray.reverse().join(" ")
    console.log(reversedArray)
    
}

reverseAndChangeArray(3, [10, 20, 30, 40, 50])
// reverseAndChangeArray(4, [-1, 20, 99, 5])