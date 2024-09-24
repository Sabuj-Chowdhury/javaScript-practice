document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("button clicked");
  const pin = document.getElementById("pin-input").value;
  const amount = document.getElementById("amount-input").value;
  if (pin === "1234") {
    const amountNumber = parseFloat(amount);
    const balance = document.getElementById("current-balance").innerText;
    // console.log(typeof balance);
    const balanceNumber = parseFloat(balance);
    // console.log(balanceNumber);
    // console.log(typeof balanceNumber);
    const updateBalance = amountNumber + balanceNumber;
    document.getElementById("current-balance").innerText = updateBalance;
    // document.getElementById("amount-input").innerText = " ";
    // document.getElementById("pin-input").innerText = " ";
  } else {
    alert("wrong pin or amount");
  }
});
