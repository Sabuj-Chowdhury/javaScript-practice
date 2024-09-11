function calculateTax(income, expenses) {
  if (
    0 >= income ||
    0 >= expenses ||
    income < expenses ||
    typeof income !== "number" ||
    typeof expenses !== "number"
  ) {
    return "Invalid Input";
  }
  let remaining = income - expenses;
  return remaining * 0.2;
}

console.log(calculateTax(4000, 1500));
