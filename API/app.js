
function displayDogsImages(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const imageArr = data.message.filter((img, i) => i <= 72);
        let main = document.getElementsByTagName("main")[0];
        main.innerHTML = ''
    
        imageArr.forEach((imgUrl) => {
          let imgTag = document.createElement("img");
    
          imgTag.src = imgUrl;
    
          main.appendChild(imgTag);
        });
      });
}


let section = document.getElementsByTagName("section")[0];

let selectTag = document.createElement("select");

section.appendChild(selectTag);

//Synchronous and Asychronous

async function getBreedList() {
  let data = await fetch("https://dog.ceo/api/breeds/list/all");

  let breeds = await data.json();

  for (let breed of Object.keys(breeds.message)) {
    let opt = document.createElement("option");

    opt.value = breed;
    opt.text = breed;

    selectTag.appendChild(opt);
  }
  
   selectTag.addEventListener("change", function (event) {
    displayDogsImages(event.target.value)
  });
}

getBreedList();
displayDogsImages('affenpinscher')