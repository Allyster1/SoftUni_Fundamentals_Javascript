function printGuests(array) {
    const acc = array.reduce((acc, element) => {

        const [person, going] = element.split(" is ")

        if(going === 'going!') {
            
            if (acc.includes(person)) {
                console.log(`${person} is already in the list!`)
            }
            else {
                acc.push(person)
            }
        }

        if(going === 'not going!') {
            if (acc.includes(person)) {
                return acc.filter((x) => x !== person)
            }
            else {
                console.log(`${person} is not in the list!`)
            }
        }

        return acc
    }, [])

    console.log(acc.join('\n'))
}

// printGuests(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'])

printGuests(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])