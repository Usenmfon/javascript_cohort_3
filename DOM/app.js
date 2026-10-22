let students = [
  {
    name: "Fidelis",
    gender: "male",
  },
  {
    name: "Triumphant",
    gender: "male",
  },
  {
    name: "Victorious",
    gender: "female",
  },
];

let colors = ["blue", "pink"];

let body = document.body;

let ol = document.createElement("ol");

students.forEach((student) => {
  let li = document.createElement("li");

  li.textContent = student.name;

  if ((student.gender === "male")) {
    li.style.color = colors[0];
  } else {
    li.style.color = colors[1];
  }

  ol.appendChild(li);
});

body.appendChild(ol);
