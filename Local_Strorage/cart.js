const addProduct = () => {
  const productText = document.getElementById("product-name");
  const quantityText = document.getElementById("product-quantity");
  const product = productText.value;
  const quantity = quantityText.value;
  productText.value = "";
  quantityText.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
};
const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};
