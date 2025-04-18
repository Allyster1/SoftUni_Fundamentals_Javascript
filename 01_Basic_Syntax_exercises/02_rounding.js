function roundNumbers(first_number, precision){
    if(precision >= 15){
        precision = 15
    }
    let rounded = parseFloat(first_number.toFixed(precision));

    console.log(rounded);
    
}
roundNumbers(3.1415926535897932384626433832795,2)
roundNumbers(10.5,3)