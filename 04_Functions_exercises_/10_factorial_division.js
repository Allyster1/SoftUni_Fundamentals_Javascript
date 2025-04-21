function factorial(first, second) {
    let firstFactorial = 1;
    let secondFactorial = 1;
    for (let i = 1; i <= first; i++) {
        firstFactorial *= i;
    }

    for (let i = 1; i <= second; i++) {
        secondFactorial *= i;
    }

    let result = firstFactorial / secondFactorial
    console.log(result.toFixed(2));
}
factorial(5, 2)