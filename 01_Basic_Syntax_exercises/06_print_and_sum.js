function printSum(first_number, second_number) {
    let total_sum = 0;
    const numbers_string = [];

    for (let i = first_number; i <= second_number; i++) {
        numbers_string.push(i);
        total_sum += i;
    }

    console.log(numbers_string.join(' '));
    console.log(`Sum: ${total_sum}`);
}

printSum(5, 10);