function replaceChar(firstString, character, secondString){
    let replacedString
    if(firstString.includes("_")){
        replacedString = firstString.replace("_", character)
    }

    console.log(replacedString === secondString ? "Matched" : "Not Matched");
}

replaceChar('Str_ng', 'I', 'Strong')