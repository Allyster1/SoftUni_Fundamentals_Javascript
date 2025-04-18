function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
}

console.log(calculateDistance(2, 4, 5, 0));
console.log(calculateDistance(1, 1, 1, 1));
console.log(calculateDistance(0, 0, 3, 4));