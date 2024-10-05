// fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => display(data));

function display(data) {
  const list = document.getElementById("list");
  for (const user of data) {
    // console.log(user);
    const li = document.createElement("li");
    li.innerText = user.email;
    list.appendChild(li);
    // console.log(li);
  }
}
