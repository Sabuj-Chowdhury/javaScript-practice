document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getValueOfInputFieldByID("input-cash-out-money");
    const pin = getValueOfInputFieldByID("input-cash-out-pin");
    if (pin === 1234) {
      const currentBalance = getTextFieldValueByID("balance-div");
      const updateBalance = currentBalance - amount;
      document.getElementById("balance-div").innerText = updateBalance;
    } else {
      alert("Low amount or Incorrect Pin");
    }
    // console.log("Working");
  });
