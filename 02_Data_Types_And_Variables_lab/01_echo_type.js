function printType(value){
    console.log(typeof value);
    if(typeof value === "string" || typeof value === "number"){
        console.log(value);
    }
    else {
        console.log('Parameter is not suitable for printing');
    }
}

//printType('HEllo, Javascript!')
// printType(18)
console.log(null);
