

function printFullDuration(band, album, song) {
    const rotationTime = 2.5;
    const durationInSeconds = (album.length * band.length) * song.length / 2;
    const rotations = Math.ceil(durationInSeconds / rotationTime);
    console.log(`The plate was rotated ${rotations} times.`);
}

printFullDuration('Black Sabbath', 'Paranoid', 'War Pigs');
printFullDuration('Rammstein', 'Sehnsucht', 'Engel');