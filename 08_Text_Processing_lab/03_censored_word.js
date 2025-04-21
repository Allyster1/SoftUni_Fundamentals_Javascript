function repeat(word){
    let repeatedSymbol = ''
    for (let char of word) {
        repeatedSymbol += '*'
    }

    return repeatedSymbol
}



function censorWord(sentance, word){
    let censored = sentance.replace(word, repeat(word))
    
    while (censored.includes(word)){
        censored = censored.replace(word, repeat(word))
    }

    console.log(censored);
    
}
censorWord('Find the hidden word', 'hidden')