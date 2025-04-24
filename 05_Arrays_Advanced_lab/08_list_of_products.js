function listProducts(array){

    let sortedArray = array.sort()

    const output = array.reduce((output, element) =>{
        
        output.push(`${sortedArray.indexOf(element) + 1}.${element}`)

        return output

    }, [])

    console.log(output.join("\n"))
}

listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
//listProducts(['Watermelon', 'Banana', 'Apples'])