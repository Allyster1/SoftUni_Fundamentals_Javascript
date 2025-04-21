function findCommonElements(firstArray, secondArray){
    let filteredArray = firstArray.filter(value => secondArray.includes(value));

    for (let element of filteredArray) {
        console.log(element);
    }
}

findCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])

