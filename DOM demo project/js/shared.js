function getValueOfInputFieldByID(id) {
  const inputValue = document.getElementById(id).value;
  const inputReturn = parseFloat(inputValue);
  return inputReturn;
}
function getTextFieldValueByID(id) {
  const inputValue = document.getElementById(id).innerText;
  const inputReturn = parseFloat(inputValue);
  return inputReturn;
}
function showHide(id) {
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("transection-div").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
