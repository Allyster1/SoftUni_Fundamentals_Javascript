function checkEqual(firstArray, secondArray){
    let first = firstArray.map((x) => Number(x))
    let second = secondArray.map((x) => Number(x))

    let areEqual = true;
    let sum = 0

    for (let i = 0; i < first.length; i++) {
        if(first[i] !== second[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            areEqual = false;
            break;
        }
        else {
            sum += first[i]
        }
    }

    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
        
    }
}

checkEqual(['10','20','30'], ['10','20','30'])