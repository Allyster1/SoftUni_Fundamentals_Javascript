function createDictionary(inputData) {
  let data = {};

  inputData.forEach((item) => {
    const parsedItem = JSON.parse(item);
    const key = Object.keys(parsedItem)[0];
    const values = Object.values(parsedItem)[0];

    if (data[key]) {
      data[key] = values;
    } else {
      data[key] = parsedItem[key];
    }
  });

  const sorted = Object.keys(data)
    .sort()
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  for (const [key, value] of Object.entries(sorted)) {
    console.log(`Term: ${key} => Definition: ${value}`);
  }
}

createDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Coffee":"Fuck you"}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
