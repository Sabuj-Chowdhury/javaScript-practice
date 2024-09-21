const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
  show: function () {
    console.log("Hello" + this.physics.subject);
  },
};
// console.log(student.physics.marks);
console.log(student.show());
