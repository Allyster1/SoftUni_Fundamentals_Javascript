function printInfo(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  for (let elements of Object.values(person)) {
    console.log(elements);
  }

  // return person;
}

printInfo("Peter", "Pan", "20");
// printInfo("George", "Smith", "18");
