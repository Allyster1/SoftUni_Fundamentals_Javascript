function biggestDivisor(number){
    const validNumbers = [
        10,7,6,3,2
    ];

    for(const divisor of validNumbers){
        if(number % divisor === 0){
            console.log(`The number is divisible by ${divisor}`);
            return
        }
    }

    console.log("Not divisible");
    return
    
};

biggestDivisor(12)
