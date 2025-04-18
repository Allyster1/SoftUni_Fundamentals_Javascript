function printSum(first_number, second_number){
    total_sum = 0
    string_numbers = ""

    counter = 1

    for(let i = first_number; i <= second_number; i++){
        if(counter === 1){
            string_numbers += `${i}`
        }
        else {
            string_numbers += ` ${i}`
        }

        total_sum += i
        counter++
    }

    console.log(string_numbers);

    console.log(`Sum: ${total_sum}`);
    
}
printSum(5, 10)