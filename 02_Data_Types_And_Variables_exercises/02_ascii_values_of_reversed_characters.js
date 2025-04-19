function convertToNumber(array){
    let convertedArray = array.map(x => Number(x))
    return convertedArray
} 

function convertToASCII(firstChar, secondChar, thirdChar){
    let charactersArray = [firstChar, secondChar, thirdChar].reverse()

    let asciiCharacters = ""
    let asciiCodes = []

    for (let char of charactersArray) {
        asciiChar = char.charCodeAt()

        asciiCharacters += char
        asciiCodes.push(asciiChar)
        
    }
    
    console.log(asciiCharacters)
    console.log(convertToNumber(asciiCodes).join(" "))
}

convertToASCII('a','b','c')
// convertToASCII('%','2','o')
// convertToASCII('1', '5', 'p')