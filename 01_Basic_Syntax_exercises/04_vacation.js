function vacationCost(groupSize, groupType, day){
    let totalPrice = 0;
    let price = 0;
    let discount = 0;

    switch (day) {
        case "Friday":
            if(groupType == "Students"){
                //determining price
                price = 8.45

                // applying discount
                if(groupSize >= 30){
                    discount = 0.15
                }
            }
            else if(groupType == "Business"){
                //determining price
                price = 10.90

                // applying discount
                if(groupSize >= 100){
                    groupSize -= 10
                }
            }
            else if(groupType == "Regular"){
                //determining price
                price = 15

                // applying discount
                if(groupSize >= 10 && groupSize <= 20){
                    discount = 0.05
                }
            }
            break;
        case "Saturday":
            if(groupType == "Students"){
                //determining price
                price = 9.80

                // applying discount
                if(groupSize >= 30){
                    discount = 0.15
                }
            }
            else if(groupType == "Business"){
                //determining price
                price = 15.60

                // applying discount
                if(groupSize >= 100){
                    groupSize -= 10
                }
            }
            else if(groupType == "Regular"){
                //determining price
                price = 20

                // applying discount
                if(groupSize >= 10 && groupSize <= 20){
                    discount = 0.05
                }
            }
            break;
        case "Sunday":
            if(groupType == "Students"){
                //determining price
                price = 10.46

                // applying discount
                if(groupSize >= 30){
                    discount = 0.15
                }
            }
            else if(groupType == "Business"){
                //determining price
                price = 16

                // applying discount
                if(groupSize >= 100){
                    groupSize -= 10
                }
            }
            else if(groupType == "Regular"){
                //determining price
                price = 22.50

                // applying discount
                if(groupSize >= 10 && groupSize <= 20){
                    discount = 0.05
                }
            }
            break;
        default:
            break;
    }

    // calculate total
    totalPrice = groupSize * price 
    // check if discounts are applicable
    if(discount > 0){
        totalPrice -= totalPrice * discount
    }

    // print total price
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
};

vacationCost(40,"Regular","Saturday")