// not correct solution
const complexArrow = (arr) => {
  let mul = 1;
  for (const i in arr) {
    // sum = sum + i * i;
    mul = i * i;
  }
  //   const avg = sum / arr.length;
  //   return avg;
  return mul;
};
const num = [2, 4];
console.log(complexArrow(num));
