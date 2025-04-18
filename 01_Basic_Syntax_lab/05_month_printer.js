function monthPrinter(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (monthNumber < 1 || monthNumber > 12) {
        console.log("Error!");
    } else {
        console.log(months[monthNumber - 1]);
    }
}

monthPrinter(3);
monthPrinter(13);