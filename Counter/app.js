let divTag = document.getElementsByTagName('div')[0];

let count = 0;
let countTag = document.getElementById('count');
let addEle = document.getElementById('add');

addEle.addEventListener('click', function(){
    count++
    countTag.textContent = count;
})