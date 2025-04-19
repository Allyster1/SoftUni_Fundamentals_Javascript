function triplesOfLatinLetters(n) {
    const num = parseInt(n);
    
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                const firstChar = String.fromCharCode(97 + i);
                const secondChar = String.fromCharCode(97 + j);
                const thirdChar = String.fromCharCode(97 + k);
                
                console.log(firstChar + secondChar + thirdChar);
            }
        }
    }
}

triplesOfLatinLetters('3');
