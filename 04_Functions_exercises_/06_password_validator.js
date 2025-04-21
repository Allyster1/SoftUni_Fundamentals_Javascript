function validatePassword(text) {
    let errors = [];

    if (text.length < 6 || text.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
    }

    if (!/^[A-Za-z0-9]+$/.test(text)) {
        errors.push("Password must consist only of letters and digits");
    }

    const digitCount = (text.match(/\d/g) || []).length;
    if (digitCount < 2) {
        errors.push("Password must have at least 2 digits");
    }

    if (errors.length === 0) {
        console.log("Password is valid");
    } else {
        errors.forEach(error => console.log(error));
    }
}

validatePassword('login')