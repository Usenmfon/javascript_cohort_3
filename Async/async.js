
console.log("Start");

function fetchUser(id)
{
    return `New user with id: ${id}`
}

async function showItems() {
    try {
        const user = await fetchUser(1);
        return user;
    } catch (err) {
        console.error(err);
    }
}

showItems().then((result) => console.log(result));

console.log("End");