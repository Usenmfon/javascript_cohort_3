function greetings() // Declarative
{
    console.log("Good afternoon!")
}


greetings()
greetings()
greetings()
greetings()
greetings()


function sum(a, b)
{
    console.log(a + b)
}

sum(2, 6)
sum(10, 6)


// Array methods - forEach, map, slice, splice, filter, reduce, push, pop, shift, unshift, ...


function sum_multiple_nums(...numbers)
{
    return numbers.reduce((acc, sum) => acc + sum);
}

let result = sum_multiple_nums(2, 4, 6, 6, 7, 10)
console.log(result);


// ARROW FUNCTION

let greetings2 = (name) => console.log("Good afternoon " + name );

greetings2("Tony")