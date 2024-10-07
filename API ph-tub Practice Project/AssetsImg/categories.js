// console.log("working");

/**
 * {
  "status": true,
  "message": "successfully fetched all the categories",
  "categories": [
    {
      "category_id": "1001",
      "category": "Music"
    },
    {
      "category_id": "1003",
      "category": "Comedy"
    },
    {
      "category_id": "1005",
      "category": "Drawing"
    }
  ]
}
 */
// get categories API call
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayButton(data.categories))
    .catch((error) => console.error(error));
};
const displayButton = (buttons) => {
  const buttonContainer = document.getElementById("btn-container");
  buttons.forEach((item) => {
    console.log(item);
    const btn = document.createElement("button");
    btn.classList = "btn";
    btn.innerText = item.category;
    buttonContainer.appendChild(btn);
  });
};

loadCategories();
