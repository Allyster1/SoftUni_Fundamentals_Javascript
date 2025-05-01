function printData(data) {
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key} -> ${value}`);
  }
}

printData({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
