function concatenateText(...params){
    const delimiter = params.pop()

    console.log(params.join(delimiter));
    
    
}
concatenateText('John','Smith','->')