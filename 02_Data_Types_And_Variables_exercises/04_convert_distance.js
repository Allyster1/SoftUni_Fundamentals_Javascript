function convertDistance(meters){
    let kilometers = meters / 1000
    let miles = kilometers * 0.621371
    
    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
    
}

convertDistance(1852)