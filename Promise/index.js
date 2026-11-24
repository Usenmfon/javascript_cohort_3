
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            id > 0 ? resolve({id, name: "Ada"}) : reject(new Error("Bad id"));
        }, 1000);
    });
}


fetchUser(0).then(user => console.log(user.id))
.then(user => console.log("The operation was successful"))
.catch(err => console.log(err))
.finally(() => console.log("done"));