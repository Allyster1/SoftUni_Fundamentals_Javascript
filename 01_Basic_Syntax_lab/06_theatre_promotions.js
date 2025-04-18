function ticketSale(day, age) {
    let price = 0;

    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    switch (day) {
        case "Weekday":
            if (age <= 18) {
                price = 12;
            } else if (age <= 64) {
                price = 18;
            } else {
                price = 12;
            }
            break;
        case "Weekend":
            if (age <= 18) {
                price = 15;
            } else if (age <= 64) {
                price = 20;
            } else {
                price = 15;
            }
            break;
        case "Holiday":
            if (age <= 18) {
                price = 5;
            } else if (age <= 64) {
                price = 12;
            } else {
                price = 10;
            }
            break;
        default:
            console.log("Error!");
            return;
    }

    console.log(price + "$");
}


ticketSale("Holiday", 15);