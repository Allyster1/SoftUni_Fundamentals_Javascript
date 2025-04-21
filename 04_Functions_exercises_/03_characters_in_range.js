function printRange(start, end){
    let outputString = ""
    
    for (let i = start.charCodeAt() + 1; i <= end.charCodeAt() - 1; i++) {
        outputString += String.fromCharCode(i)
    }

    console.log(outputString.split("").join(" "));
}

printRange('c', '#')