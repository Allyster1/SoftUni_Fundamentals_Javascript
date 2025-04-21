function printString(text, start, counter){
    let result = '';

    for (let i = start; i <= counter; i++) {
        let character = text.charAt(i)
        
        result += character
    }

    console.log(result);
    
}

printString('ASentence', 1, 8)