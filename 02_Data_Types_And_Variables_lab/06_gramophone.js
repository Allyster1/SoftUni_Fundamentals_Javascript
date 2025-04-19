function calculateDuration(bandName, albumName, songName) {
    return (albumName.length * bandName.length) * songName.length / 2;
}

function printFullDuration(band, album, song) {
    const rotationTime = 2.5;
    const durationInSeconds = calculateDuration(band, album, song);
    const rotations = Math.ceil(durationInSeconds / rotationTime);
    console.log(`The plate was rotated ${rotations} times.`);
}

printFullDuration('Black Sabbath', 'Paranoid', 'War Pigs');
printFullDuration('Rammstein', 'Sehnsucht', 'Engel');