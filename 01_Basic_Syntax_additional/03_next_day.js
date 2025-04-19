function getNextDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day);
    
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    
    const nextYear = nextDate.getFullYear();
    const nextMonth = nextDate.getMonth() + 1;
    const nextDay = nextDate.getDate();
    
    return `${nextYear}-${nextMonth}-${nextDay}`;
}

console.log(getNextDay(2016, 9, 30));
console.log(getNextDay(2020, 3, 24));
console.log(getNextDay(2023, 12, 31));