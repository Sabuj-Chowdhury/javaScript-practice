const laptops = {
  id: 1,
  brand: "Apple",
  processor: {
    ram: "16gb",
    hardDisk: "1TB",
    processor: "Core i7",
    utilities: {
      "can do": "programming",
      hello: "Sabuj",
      stack: ["laraver", { name: "Mearn", key: "Stack" }],
      fun: function () {
        console.log("This is " + this.hello);
        return;
      },
    },
  },
};
console.log(laptops.processor.utilities.fun());
