// Value & Reference

let a = 12;
b = a;

b = 30;
b = 50;
a = 0

console.log(b);
console.log(a);


let obj1 = { name: 'Tommy' };

let obj2 = obj1

obj2.name = "Jackson";

console.log(obj1);
console.log(obj2);