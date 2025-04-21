function findTopInteger(array) {
    let modifiedArray = [];

    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        let isHigher = true;
        for (let i = j + 1; i < array.length; i++) {
            if (element <= array[i]) {
                isHigher = false;
                break;
            }
        }
        if (isHigher) {
            modifiedArray.push(element);
        }
    }

    console.log(modifiedArray.join(" "));
}

findTopInteger([41, 41, 34, 20]);
findTopInteger([1, 4, 3, 2]);
findTopInteger([14, 24, 3, 19, 15, 17]);
