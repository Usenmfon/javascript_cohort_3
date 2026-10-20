let students = [
  {
    name: "Gerald",
    age: 20,
    gender: "male",
  },
  {
    name: "Victorious",
    age: 19,
    gender: "female",
  },
  {
    name: "Fidelis",
    age: 11,
    gender: "male",
  },
  {
    name: "Triumphant",
    age: 26,
    gender: "male",
  },
];


// Map, Filter, Reduce, forEach

let filterByGender = students.filter((item) => item.gender === 'male');
let filterByAge = students.filter((item) => item.age <= 15);
let filterByLetter = students.filter((item) => item.name.includes('T'));

// let sumAges = students.map((item) => item.age).reduce((a, b) => a + b);

let sumAges = students.map((item) => item.age);
let totalAges = sumAges.reduce((a, b) => a + b)

students.forEach((item, i) => {
    console.log(`${++i} - ${item.name}`)
})

// console.log(filterByGender)
// console.log(filterByAge)
// console.log(filterByLetter)
// console.log(sumAges)
// console.log(totalAges)
