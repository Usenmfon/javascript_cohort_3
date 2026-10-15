// let name = "Victorious";
// let gender = "female";
// let complexion = "Dark";
// let hobbies = ['Sleeping', 'Movies', 'Eating', 'Singing'];
// let age = 10;
// let height = 5.3;

// let person1 = {
//   name: "Victorious",
//   gender: "female",
//   complexion: "Dark",
//   hobbies: ["Sleeping", "Movies", "Eating", "Singing"],
//   age: 10,
//   height: 5.3,
// };

// let person2 = {
//   name: "Triumphant",
//   gender: "male",
//   complexion: "Dark",
//   hobbies: ["Sleeping", "Movies", "Video games", "Singing"],
//   age: 40,
//   height: 6.3,
// };

// console.log(
//   "Hello, my name is ",
//   person1["name"],
//   " I am ",
//   person1.age,
//   " years old",
// );
// console.log(person2.name);

let students = [
  {
    name: "Victorious",
    gender: "female",
    complexion: "Dark",
    hobbies: ["Sleeping", "Movies", "Eating", "Singing"],
    age: 10,
    sayHello: function(){ console.log(this.name, " is saying Hello")},
    height: 5.3,
  },
  {
    name: "Triumphant",
    gender: "male",
    complexion: "Dark",
    hobbies: ["Sleeping", "Movies", "Video games", "Singing"],
    age: 40,
    height: 6.3,
  },
];

students.push({
    name: "Tony",
    age: 30,
    complexion: "Fair",
    height: 7.1,
    gender: "male",
    hobbies: ['surfing']
})

// console.log(students[0]);

students[0].sayHello();

students.forEach((student) => console.log(student.name, student.age))
