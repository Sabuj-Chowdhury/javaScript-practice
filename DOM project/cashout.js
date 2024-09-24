document
  .getElementById("cash-out-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const amount = document.getElementById("cashout-amount-input").value;
    const pin = document.getElementById("cashout-pin-input").value;
    if (pin === "1234") {
      const amountNumber = parseFloat(amount);
      const balance = document.getElementById("current-balance").innerText;
      const balanceNumber = parseFloat(balance);
      const newbalance = balanceNumber - amountNumber;
      document.getElementById("current-balance").innerText = newbalance;
    } else {
      alert("wrong pin or amount");
    }
  });
