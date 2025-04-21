function formatGrade(number){
    if(number < 3.00){
        console.log(`Fail (2)`);
    }
    else if(number < 3.5){
        console.log(`Poor (${number.toFixed(2)})`);
    }
    else if(number < 4.5){
        console.log(`Good (${number.toFixed(2)})`);
    }
    else if(number < 5.5){
        console.log(`Very good (${number.toFixed(2)})`);
    }
    else if(number >= 5.5){
        console.log(`Excellent (${number.toFixed(2)})`);
    }
}

formatGrade(2.99)