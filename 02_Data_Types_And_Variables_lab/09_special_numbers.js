function specialNumber(numberRange) {
    for (let i = 1; i <= numberRange; i++) {
        let num = i;
        let sum = 0;
        
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
        
        const isSpecial = sum === 5 || sum === 7 || sum === 11;
        console.log(isSpecial ? `${i} -> True` : `${i} -> False`)
    }
}

specialNumber(15)