

function sortNameAsc(products) {
  return products.sort((a, b) => {
    if (a.product < b.product) {
      return -1;
    } else if (a.product > b.product) {
      return 1;
    } else {
      return 0;
    }
  });
}

function sortNameDesc(products) {
  return products.sort((a, b) => {
    if (a.product < b.product) {
      return 1;
    } else if (a.product > b.product) {
      return -1;
    } else {
      return 0;
    }
  });
}

function sort(sortFunc) {
  const sortedProducts = sortFunc(products);
  catalogGrid.innerHTML = "";

  sortedProducts.forEach((product) => {
    catalogGrid.append(product.htmlCard);
  });
}

const catalogGrid = document.querySelector("#catalogo");
const radioPriceAsc = document.querySelector("#sort-price-asc");
const radioPriceDesc = document.querySelector("#sort-price-desc");
const radioNameAsc = document.querySelector("#sort-name-asc");
const radioNameDesc = document.querySelector("#sort-name-desc");

products.forEach((product) => (product.__proto__ = Product.prototype));

products.forEach((product) => {
  product.createCard();

  catalogGrid.append(product.htmlCard);
});
