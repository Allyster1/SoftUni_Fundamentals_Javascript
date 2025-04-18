function login(passwordList){
    let username = passwordList.shift()
    let correctPass = username.split('').reverse().join('')
    let counter = 0

    for (let pass of passwordList) {
        
        counter++
        

        if(pass === correctPass){
            console.log(`User ${username} logged in.`);
            break
        }
        else if(counter === 4) {
            console.log(`User ${username} blocked!`);
            break
        }
        else {
            console.log("Incorrect password. Try again.");
        }



    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])
//login(['Acer','login','go','let me in','recA'])