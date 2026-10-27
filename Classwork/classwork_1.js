let people = [
    {name: "Alan", country: "Germany"},
    {name: "Chima", country: "Nigeria"},
    {name: "Yung", country: "China"},
    {name: "Ethan", country: "England"},
    {name: "Yu", country: "Japan"},
    {name: "John", country: "Ghana"},
    {name: "Perry", country: "USA"},
    {name: "Yetunde", country: "Nigeria"},
    {name: "Halima", country: "Nigeria"},
    {name: "Trump", country: "USA"},
];

let body = document.body;


people.forEach((person) => {
    let pTag = document.createElement('p');
    let greeting = ['China', 'USA', 'Japan'].includes(person.country) ? 'Good evening' : 'Good morning'
    pTag.textContent = `${greeting} ${person.name} from ${person.country}`;
    body.appendChild(pTag)
})


