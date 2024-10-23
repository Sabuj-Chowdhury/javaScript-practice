const setLocalStroage = () => {
  const keys = document.getElementById("keys");
  const values = document.getElementById("values");
  const keysValue = keys.value;
  const value = values.value;
  keys.value = "";
  values.value = "";

  localStorage.setItem(keysValue, value);
  console.log(keysValue, value);
};
