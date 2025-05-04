function sortData(arrayData) {
  let heroes = [];

  for (let element of arrayData) {
    const [heroName, levelStr, itemsStr] = element.split(" / ");
    const level = Number(levelStr);
    const items = itemsStr ? itemsStr.split(", ") : [];

    heroes.push({
      Hero: heroName,
      level: level,
      items: items,
    });
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }
}

sortData([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
