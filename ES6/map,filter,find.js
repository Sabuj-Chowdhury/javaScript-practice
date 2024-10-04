const num = [1, 3, 5, 7, 9];
// console.log(num.map((e) => e + 1));

const arr = [33, 50, 79, 78, 90, 101, 30];
// console.log(arr.filter((e) => e % 10 === 0));

const instructor = [
  { name: "Nodi", age: 28, position: "senior" },
  { name: "Akil", age: 26, position: "junior" },
  { name: "Shobuj", age: 30, position: "senior" },
];
// console.log(instructor.filter((e) => e.position === "senior"));
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];
let sum = 0;
for (const e in people) {
  sum += people[e].age;
}
// console.log(sum);
console.log(people.reduce((p, c) => p + c.age, 0));
