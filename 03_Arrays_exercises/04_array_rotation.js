function rotateArray(array, counter){

    while(counter > 0){
        let shifted = array.shift()

        array.push(shifted)
        counter--
    }

    console.log(array.join(" "));
    
}

rotateArray([51, 47, 32, 61, 21], 2)
rotateArray([32, 21, 61, 1], 4)
rotateArray([2, 4, 15, 31], 5)