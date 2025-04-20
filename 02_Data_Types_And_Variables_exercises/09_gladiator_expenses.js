function glatiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let expenses = 0
    let shieldCounter = 0

    for (let i = 1; i <= lostFight; i++) {
        if(i % 3 === 0){
            expenses += swordPrice
            if(i % 2 === 0){
                expenses += shieldPrice
                shieldCounter += 1
                if(shieldCounter % 2 === 0){
                    expenses += armorPrice
                }
            }
        }

        if(i % 2 === 0){
            expenses += helmetPrice
        }

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    
}
glatiatorExpenses(7,2,3,4,5)
glatiatorExpenses(23,12.50,21.50,40,200)