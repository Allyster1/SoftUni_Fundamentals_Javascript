function calculateOrder(product, amount){
    let price = 0
    if(product === 'coffee'){
        price = amount * 1.50
    }
    else if(product === 'water'){
        price = amount * 1.00
    }
    else if(product === 'coke'){
        price = amount * 1.40
    }
    else if(product === 'snacks'){
        price = amount * 2.00
    }

    console.log(price.toFixed(2));
   
}

calculateOrder('water', 5)