/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}
/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */
let j = 78;
const target = 98;
while (j <= target) {
  if (j % 2 === 0) {
    console.log(j);
    j++;
  }
  j++;
}
