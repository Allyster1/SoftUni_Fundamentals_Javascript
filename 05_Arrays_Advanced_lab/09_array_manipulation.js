function arrayManipulation(commands) {
    let arrayNumbers = commands.shift().split(" ").map(Number);

    let result = commands.reduce((acc, element) => {

        const [command, ...rest] = element.split(' ');

        if (command === 'Add') {
            acc.push(Number(rest));
        }

        if (command === 'Remove') {
            return acc.filter((x) => x !== Number(rest));
        }

        if (command === 'RemoveAt') {
            acc.splice(Number(rest), 1);
        }

        if (command === 'Insert') {
            acc.splice(Number(rest[1]), 0, Number(rest[0]))
        }

        return acc;
        
    }, arrayNumbers)

    console.log(result.join(' '));
}

// arrayManipulation(['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3'])

arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
    )