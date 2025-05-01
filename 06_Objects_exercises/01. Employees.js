function printEmployees(arrayData) {
  class Employee {
    constructor(name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }

    printInfo() {
      console.log(
        `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
      );
    }
  }

  for (let element of arrayData) {
    const personalNumber = element.length;

    let employee = new Employee(element, personalNumber);
    employee.printInfo();
  }
}

printEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
