
function func1() {
    let name = "Alice";

    return function() {
        return name
    }

}


function makeCounter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

const counter = makeCounter()

for(let i = 1; i <= 20; i++)
{
    console.log(counter());
}

let students = ['Fidelis', 'Triumphant', 'Victorious'];

// console.log(students.length)
// console.table(students[0])

// for(let i = 1; i <= 20; i++)
// {
//     console.log(i, "Fidelis")
// }