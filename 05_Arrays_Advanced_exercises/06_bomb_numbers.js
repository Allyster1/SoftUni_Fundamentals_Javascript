function calculateSum(sequence, specialBomb) {
    const [bomb, power] = specialBomb;
    let output = [...sequence];

    output = output.reduce((acc, element, index) => {
        if (element === bomb) {
            const start = Math.max(0, index - power);
            const deleteCount = power * 2 + 1;
            acc.splice(start, deleteCount);
            index = start - 1;
        }
        return acc;
    }, output);

    const sum = output.reduce((total, num) => total + num, 0);
    console.log(sum);
}

calculateSum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
