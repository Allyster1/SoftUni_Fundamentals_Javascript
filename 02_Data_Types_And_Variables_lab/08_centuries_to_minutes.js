function calculateCenturies(century){
    years = century * 100
    days = Math.trunc(years * 365.2422)
    hours = days * 24
    minutes = hours * 60

    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
    
}
calculateCenturies(5)