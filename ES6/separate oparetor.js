// copy array
const num1 = [4, 5, 6, 7, 8, 8, 9, 5, 5];
const num2 = [...num1];
// console.log(num2, num1);
const result = Math.max(...num2);
console.log(result);
