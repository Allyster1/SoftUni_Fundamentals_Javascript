function getNextDay(year, month, day) {
    // Note: JavaScript months are 0-indexed (0-11), so we subtract 1
    const currentDate = new Date(year, month - 1, day);
    
    // Add one day (24 hours)
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    
    // Extract year, month (add 1 to convert back to 1-12), and day
    const nextYear = nextDate.getFullYear();
    const nextMonth = nextDate.getMonth() + 1;
    const nextDay = nextDate.getDate();
    
    // Return in YYYY-M-D format (as per examples)
    return `${nextYear}-${nextMonth}-${nextDay}`;
}

// Example usage:
console.log(getNextDay(2016, 9, 30)); // Output: "2016-10-1"
console.log(getNextDay(2020, 3, 24)); // Output: "2020-3-25"
console.log(getNextDay(2023, 12, 31)); // Output: "2024-1-1"