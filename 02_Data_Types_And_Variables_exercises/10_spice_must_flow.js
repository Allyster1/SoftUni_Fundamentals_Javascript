function extractSpice(yield) {
    const workerConsumption = 26;
    let days = 0;
    let spiceCollected = 0;

    while (yield >= 100) {
        // Add today's yield
        spiceCollected += yield;
        // Workers consume 26
        spiceCollected -= workerConsumption;
        // Ensure spice doesn't go negative
        if (spiceCollected < 0) spiceCollected = 0;
        // Prepare for next day
        yield -= 10;
        days++;
    }

    // Final worker consumption after abandonment
    spiceCollected -= workerConsumption;
    if (spiceCollected < 0) spiceCollected = 0;

    console.log(days);
    console.log(spiceCollected);
}
extractSpice(111)