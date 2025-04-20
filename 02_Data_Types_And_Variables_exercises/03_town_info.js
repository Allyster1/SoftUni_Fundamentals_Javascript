function validateTown(town, population, area){
    isValid = true
    if(town.length <= 2){
        console.log("Town name must be at least 3 characters!");
        isValid = false
    }

    if(population < 0){
        console.log('Population must be a positive number!');
        isValid = false
    }

    if(area < 0){
        console.log('Area must be a positive number!');
        isValid = false
    }

    if(isValid){
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}

//validateTown('Sofia', 1286383, 492)
validateTown('LA',1481353,512)