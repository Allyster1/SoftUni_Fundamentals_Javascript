function displayProducts(firstArray, secondArray) {
  function addProduct(array) {
    for (let i = 0; i < array.length; i += 2) {
      const product = array[i];
      const quantity = Number(array[i + 1]);

      if (product in productsList) {
        productsList[product] += quantity;
      } else {
        productsList[product] = quantity;
      }
    }
  }

  let productsList = {};

  addProduct(firstArray);
  addProduct(secondArray);

  for (const [key, value] of Object.entries(productsList)) {
    console.log(`${key} -> ${value}`);
  }
}

displayProducts(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
