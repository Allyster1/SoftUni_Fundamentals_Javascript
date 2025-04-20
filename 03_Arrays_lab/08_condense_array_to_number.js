function calculateArray(array) {
    while (array.length > 1) {
        let condensed = [];
        for (let i = 0; i < array.length - 1; i++) {
            condensed.push(array[i] + array[i + 1]);
        }
        array = condensed;
    }
    
    console.log(array[0]);
}

calculateArray([1])
// calculateArray([5,0,4,1,2])
// calculateArray([1])