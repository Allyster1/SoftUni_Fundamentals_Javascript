function summarize(firstNumber, secondNumber, thirdNumber){
    const total = firstNumber + secondNumber + thirdNumber

    console.log(!total.toString().includes(".") ? `${total} - Integer` : `${total} - Float`);
}

summarize(9, 100, 1.1)