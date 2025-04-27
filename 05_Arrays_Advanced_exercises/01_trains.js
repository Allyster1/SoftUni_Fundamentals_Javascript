function printPassengers(array){
    let wagons = array.shift().split(' ').map(Number);
    const capacity = Number(array.shift());

    let output = array.reduce((output, elements) => {
        let command = elements.split(" ");

        if(command[0] === "Add"){
            output.push(Number(command[1]));
        }
        else {
            let passengers = Number(command[0]);

            for (let i = 0; i < output.length; i++) {
                if (output[i] + passengers <= capacity){
                    output[i] += passengers
                    break;
                }
            }
        };

        return output;

    }, wagons);


    console.log(wagons.join(' '));
}

printPassengers(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])

printPassengers(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])