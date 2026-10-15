// let target = 50;
// let even_numbers = [];

// for(let i = 1; i <= target; i++)
// {
//     is_even = i % 2 == 0;

//     if(is_even)
//     {
//         even_numbers.push(i)
//     }
// }

// console.log(even_numbers);
// let sum = 0;
// for(let i = 0; i < even_numbers.length; i++)
// {
//     sum += even_numbers[i];
// }

// console.log(sum)


// Shorter Version

// let target = 50;
// let sum  = 0;

// for(let i = 1; i <= target; i++)
// {
//     is_even = i % 2 == 0;

//     if(is_even)
//     {
//         sum += i;
//     }
// }

// console.log(sum);


// Shoter version

let target = 50;
let sum  = [];

for(let i = 1; i <= 50; i++){sum.push(i)} 

result = sum.filter((a) => a % 2 == 0).reduce((a, b) => a + b)

console.log(result);