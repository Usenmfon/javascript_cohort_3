const button = document.querySelector("#save");

function handleClick(event) {
    console.log(event.type);
    console.log(event.target)
    console.log("The button was clicked")

    button.textContent = "The button was clicked"
    

}

button.addEventListener('click', handleClick);


const outer = document.getElementById('outer')
const inner = document.getElementById('inner')

// outer.addEventListener('click', (e) => {
//     console.log("outer");
// }); // Bubbling

// outer.addEventListener('click', (e) => {
//     console.log("outer");
// }, {capture: true}); // Capturing

outer.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("outer");
});
inner.addEventListener('click',  (e) => {
    e.stopPropagation();
    console.log("inner");
});
