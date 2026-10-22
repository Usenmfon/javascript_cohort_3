// Arrow function () => { }

let greetings = name => console.log(`Hello, ${name}`)

greetings('Tony')

function multiplier(factor){
    return n => n * factor;
}

console.log(multiplier(3))

const triple = multiplier(3)
const double = multiplier(2)

console.log(triple(3));
console.log(double(50));