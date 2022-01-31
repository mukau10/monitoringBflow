const myArr = [
  {
    0: { name: "Elie", age: "26" },
  },
  {
    1: { name: "Bert", age: "26" },
  },
  {
    2: { name: "Thomas", age: "26" },
  },
  {
    3: { name: "John", age: "26" },
  },
  {
    4: { name: "Koper", age: "26" },
  },
  {
    5: {
      name: "",
      age: "26",
      info: {
        gender: "male",
      },
    },
  },
];

// let first = myArr.map(x => {return Object.values(x).map(y => console.log(y.name))})
let second = myArr.map((x) => {
  return Object.values(x)
    .filter((y) => y.info != null)
    .map((z) => console.log(z));
});
let third = myArr.map((x) => {
  return x[2];
});
let fourth = myArr.map((x) => {
  return x[3];
});

console.log("Second data: " + second);
