function sortArray(array){
    const sortedArray = array.sort((a, b) =>  a.length - b.length || a.localeCompare(b))
    console.log(sortedArray.join("\n"))
}

//sortArray(['alpha', 'beta', 'gamma'])
sortArray(['test',
'Deny',
'omen',
'Default'])