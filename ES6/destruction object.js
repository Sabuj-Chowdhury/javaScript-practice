const mobile = {
  model: "nokia",
  year: 2002,
  haveCam: false,
  EMI: 9978687678,
};
// destructing the 'mobile' object
const { model, year, haveCam, EMI } = mobile;

console.log(model, year, haveCam, EMI);
console.log(mobile);

// arrow function
const values = (obj) => obj.model;
console.log(values(mobile));
