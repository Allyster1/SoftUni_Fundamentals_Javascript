function sumOfOddNumbers(numbersRange){
    let total_sum = 0
    let index = 1

    while(numbersRange - 1 >= 0){
        if(index % 2 !== 0){
            console.log(index);

            total_sum += index
            index += 2
        }
        numbersRange -= 1
    }

    console.log(`Sum: ${total_sum}`);
};

sumOfOddNumbers(5)