document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("working");
    const amountValue = getValueOfInputFieldByID("input-money");
    const pin = getValueOfInputFieldByID("input-pin");
    if (pin === 1234) {
      const currentBalance = getTextFieldValueByID("balance-div");
      const newBalance = currentBalance + amountValue;
      document.getElementById("balance-div").innerText = newBalance;
    } else {
      alert("wrong Pin or Amount");
    }
    // console.log(amountValue, pin);
  });
