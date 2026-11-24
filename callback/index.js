

// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Ada", sayBye);


function fetchUser(id, callback) {
    setTimeout(() => {
        callback(null, {id, name: "Ada"})
    }, 1000);
}


fetchUser(10, (err, user) => {
    if (err) return console.log(err);
    console.log(user.name);
})