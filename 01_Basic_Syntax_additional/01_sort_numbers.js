function sortNumbers(first, second, third){
    let numbersList = []

    numbersList.push(first, second, third)

    sortedList = numbersList.sort().reverse();
    
    for (let num of sortedList) {
        console.log(num);
    }
}

sortNumbers(-2,1,3)