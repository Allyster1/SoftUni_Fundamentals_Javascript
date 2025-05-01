class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function generateMethod(arrayData) {
  let cats = [];

  for (let i = 0; i < arrayData.length; i++) {
    let catData = arrayData[i].split(" ");
    cats.push(new Cat(catData[0], catData[1]));
  }

  for (const cat of cats) {
    cat.meow();
  }
}

generateMethod(["Mellow 2", "Tom 5"]);
generateMethod(["Candy 1", "Poppy 3", "Nyx 2"]);
