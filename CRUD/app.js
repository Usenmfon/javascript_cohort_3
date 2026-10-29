let shoppingList  = [{ item: 'Oranges', price: 200, quantity: 4 }, { item: 'Kpomo', price: 500, quantity: 1}];


// CRUD - Create Read Update Delete
let body = document.body;

// READ
function displayShoppingList(){
    shoppingList.forEach((list) => {
        let pEle = document.createElement('p');
        pEle.textContent = `${list.item} - ${list.price} [${list.quantity}]`
        body.appendChild(pEle);
    })
}

// CREATE

let formEle = document.forms[0]

formEle.addEventListener('submit', function(event){
    event.preventDefault();

    let formData = new FormData(formEle);
    let data = Object.fromEntries(formData.entries());

    shoppingList.push(data);

    createShoppingList(data);

    formEle.reset();
})

function createShoppingList(data){
    let pTag = document.createElement('p');

    pTag.textContent = `${data.item} - ${data.price} [${data.quantity}]`

    body.appendChild(pTag);
}



displayShoppingList()
