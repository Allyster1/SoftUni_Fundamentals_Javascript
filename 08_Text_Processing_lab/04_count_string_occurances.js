function countOccurances(sentance, word){
    let sentanceArray = sentance.split(" ")
    let counter = 0

    for (let element of sentanceArray) {
        if(element === word){
            counter++
        }
    }
    
    console.log(counter);

}

countOccurances('This is a word and it also is a sentence','is')