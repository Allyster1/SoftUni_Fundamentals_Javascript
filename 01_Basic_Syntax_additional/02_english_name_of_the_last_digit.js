function digitName(number){
    lastDigit = number.toString().split('').pop()
    
    const numbersList = [
        "zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine"
    ];

    console.log(numbersList[lastDigit]);

}
digitName(510)