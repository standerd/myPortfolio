// require("isomorphic-fetch");

let items = [];
let button = document.querySelector(".btn");

button.addEventListener("click", () => {
  fetch("http://api.icndb.com/jokes/random/3")
    .then(res => res.json())
    .then(result => {
      items = result.value;

      for (let i = 0; i < items.length; i++) {
        let joke = document.getElementById("joke" + (i + 1));
        joke.innerHTML = items[i].joke;
      }
    });
  error => {
    console.log(error);
  };
});
