// still not correct
const numArr = [1, 2, 34, 45, 6, 79];
const fun = (arr) => {
  const squr = (e) => e * e;
  const sqrArr = arr.map(squr);
  let sum = 0;
  for (const i of sqrArr) {
    sum += i;
  }
  const avg = sum / arr.length;
  return avg;
};
const result = fun(numArr);
console.log(numArr);
console.log(result);
//  1 4 1156 36 6241
// not correct solution
// const complexArrow = (arr) => {
//   // let mul = 1;
//   let sum = 0;
//   for (const i in arr) {
//     sum = sum + i ** 2;
//     // mul = i * i;
//   }
//   const avg = sum / arr.length;
//   return avg;
//   // return mul;
// };
// const num = [2, 4];
// console.log(complexArrow(num));
