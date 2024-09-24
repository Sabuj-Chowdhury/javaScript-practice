const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  //   console.log("login button clicked!");

  const phoneNo = document.getElementById("phone-number-input").value;
  const pinNo = document.getElementById("pin-number").value;
  if (phoneNo === "018" && pinNo === "1234") {
    console.log("Logged in");
    window.location.href = "./home.html";
  } else {
    alert("wrong phone or pin");
  }
});
