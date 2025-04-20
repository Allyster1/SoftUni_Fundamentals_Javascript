function checkPrime(number){
    let isPrime = true;

    if(number <= 1){
        isPrime =  false
    }
    else {
        for (let i = 2; i < number; i++) {
            if(number % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime ? 'true' : 'false')
}

checkPrime(1)