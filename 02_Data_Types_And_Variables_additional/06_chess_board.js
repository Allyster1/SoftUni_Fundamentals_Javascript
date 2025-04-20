function chessBoard(n) {
    let html = '<div class="chessboard">\n';
    for (let i = 0; i < n; i++) {
        html += '  <div>\n';
        for (let j = 0; j < n; j++) {
            const color = (i + j) % 2 === 0 ? 'black' : 'white';
            html += `    <span class="${color}"></span>\n`;
        }
        html += '  </div>\n';
    }
    html += '</div>';
    console.log(html)
}

chessBoard(3)