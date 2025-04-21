function cleanCar(commandsArray){
    let carClean = 0

    for (let command of commandsArray) {
        if(command === 'soap'){
            carClean += 10
        }
        else if(command === 'water'){
            carClean += carClean * 0.2
        }
        else if(command === 'vacuum cleaner'){
            carClean += carClean * 0.25
        }
        else if(command === 'mud'){
            carClean -= carClean * 0.1
        }
    } 

    console.log(`The car is ${carClean.toFixed(2)}% clean.`);
    
}

cleanCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])