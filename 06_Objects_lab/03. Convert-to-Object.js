function convertJSON(data) {
  let person = JSON.parse(data);

  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
}

convertJSON('{"name": "George", "age": 40, "town": "Sofia"}');
