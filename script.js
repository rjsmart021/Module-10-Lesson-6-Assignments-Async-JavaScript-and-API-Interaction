let input = document.getElementById("submit-button");
let button = document.getElementById("show-container");
let showContainer = document.getElementById
("show-container");
let listContainer = document.querySelector(".list");

let date = new Date();
console.log(date.getTime());

constant [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

button.addEventListener("click", (getRsult =async() => {
    if (input.value.trim().length ,  1) {
      alert("Input cannot be blank");
    }
    showContainer.innerHTML = "";
    const url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=<1655f2c81e8dca444e02ba3b42f0fe73>&hash=<641c4dfbe5e4af30a645d14c4f7518e2';
  
    const response = await fetch(url);
    const jsonData = await response.json();
    jsonData.data["results"].forEach((element)) => {
      showContainer.innerHTML = '<div
      class="card-container">
        <div class="container-character-image">
          <img src="${
              element.thumbnail["path"] + "." + element.
              thumbnail["extension"]
    }"/></div>
    <div class="character-name"${element.name}</
    div>
    <div class="character-description">${element.
    description}</div>
    </div>';
    });  
  })
  );
Window.onload = () => {
  getRsult();
};
