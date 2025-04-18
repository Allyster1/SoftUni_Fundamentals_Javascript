function calculateBitcoin(goldPerDay) {
    const BITCOIN_PRICE = 11949.16;
    const GOLD_PRICE_PER_GRAM = 67.51;
    
    let totalMoney = 0;
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;
    let hasBoughtFirstBitcoin = false;

    goldPerDay.forEach((gold, index) => {
        const dayNumber = index + 1;
        let currentGold = gold;
        
        // Apply 30% theft every 3rd day
        if (dayNumber % 3 === 0) {
            currentGold *= 0.7;
        }

        const dayEarnings = currentGold * GOLD_PRICE_PER_GRAM;
        totalMoney += dayEarnings;

        // Buy as many bitcoins as you can
        while (totalMoney >= BITCOIN_PRICE) {
            totalMoney -= BITCOIN_PRICE;
            bitcoinsBought++;
            
            // Record the day of first bitcoin purchase
            if (!hasBoughtFirstBitcoin) {
                firstBitcoinDay = dayNumber;
                hasBoughtFirstBitcoin = true;
            }
        }
    });

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (hasBoughtFirstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

calculateBitcoin([100, 200, 300]);