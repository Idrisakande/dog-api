// DOG API
// https://dog.ceo/api/breeds/image/random
// .then -> promises
// asynchronous programming

// stuff you don't have to wait for
console.log("run 1st");

const dogImageDiv = document.getElementById("dogImage");
const dogButtonDiv = document.getElementById("dogButton");

function getRandomDog() {
  // stuff you have to wait for
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src='${json.message}' height=235 width=250>`;
    });
}

dogButtonDiv.onclick = () => getRandomDog();

console.log("run 3rd");
