function revealWords(wordsStr, template) {
    const words = wordsStr.split(', ');
    let result = '';
    let currentPos = 0;
    const availableWords = [...words];

    while (currentPos < template.length) {
        // Find next star sequence
        const starStart = template.indexOf('*', currentPos);
        
        if (starStart === -1) {
            // Add remaining text and exit
            result += template.slice(currentPos);
            break;
        }

        // Add text before stars
        result += template.slice(currentPos, starStart);
        
        // Calculate star sequence length
        let starEnd = starStart;
        while (template[starEnd] === '*' && starEnd < template.length) {
            starEnd++;
        }
        const starLength = starEnd - starStart;

        // Find matching word
        const wordIndex = availableWords.findIndex(w => w.length === starLength);
        if (wordIndex > -1) {
            result += availableWords[wordIndex];
            availableWords.splice(wordIndex, 1);
        } else {
            result += '*'.repeat(starLength);
        }

        currentPos = starEnd;
    }

    return result;
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)