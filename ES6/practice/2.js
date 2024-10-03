// const newarr = [];
const evenFriends = (arr) => {
  const newarr = [];
  for (const i of arr) {
    if (i.length % 2 === 0) {
      newarr.push(i);
    }
  }
  return newarr;
};
const friends = [
  "babli",
  "khabli",
  "challpioe",
  "messi",
  "ronaldo",
  "dipa",
  "mipa",
  "ship",
];
console.log(friends);
console.log(evenFriends(friends));
