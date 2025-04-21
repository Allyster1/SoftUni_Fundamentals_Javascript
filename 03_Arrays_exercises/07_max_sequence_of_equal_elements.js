function findMaxSequence(array) {
    if (array.length === 0) { 
        console.log([]);
        return;
    } 

    let maxCount = 1;
    let currentCount = 1;
    let maxElement = array[0];
    let currentElement = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === currentElement) {
            currentCount++;
        } else {
            currentElement = array[i];
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxElement = currentElement;
        }
    }

    const result = Array(maxCount).fill(maxElement).join(' ');
    console.log(result);
}

// Test cases
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); // Output: 2 2 2
findMaxSequence([1, 1, 1, 2, 3, 1, 3, 3]);       // Output: 1 1 1
findMaxSequence([4