function printSequence(n, k) {
    const result = [1];

    for (let i = 1; i < n; i++) {

        let startIndex = i - k < 0 ? 0 : i - k
        let endIndex = i

        let sum = result.slice(startIndex, endIndex).reduce((acc, value) => acc + value, 0)
        result.push(sum)
    }

    console.log(result.join(" "));
    
}

printSequence(6, 3);
printSequence(8, 2);