function repeatText(text, counter){
    let outputString = ''

    for (let i = 0; i < counter; i++) {
        outputString += text
    }

    console.log(outputString);
}

repeatText('abc', 3)
repeatText("String", 2)