function calculateSum(number){
    let sum = 0
    numbers_list = number.toString().split("").map((x) => Number(x))
    
    for (let num of numbers_list) {
        sum += num
    }

    console.log(sum);
    
    
}

calculateSum(245678)