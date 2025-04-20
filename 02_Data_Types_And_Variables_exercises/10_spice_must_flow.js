function extractSpice(yield) {
    const workerConsumption = 26;
    let days = 0;
    let spiceCollected = 0;

    while (yield >= 100) {
        spiceCollected += yield;
        spiceCollected -= workerConsumption;
        if (spiceCollected < 0) spiceCollected = 0;
        yield -= 10;
        days++;
    }

    spiceCollected -= workerConsumption;
    if (spiceCollected < 0) spiceCollected = 0;

    console.log(days);
    console.log(spiceCollected);
}
extractSpice(111)