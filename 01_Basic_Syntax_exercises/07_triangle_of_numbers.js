function displayTriangle(numberRange){
    let counter = 1

    while(counter <= numberRange){
        let stringList = []

        for(let i = 1; i <= counter; i++){
            stringList.push(counter.toString())
        }
        
        console.log(stringList.join(' '))
        counter++
    }
}

displayTriangle(3)