let gifForm;
let gifContainer;
let inputField;

document.addEventListener("DOMContentLoaded", (event) => {
  gifForm = document.getElementById("new-gif-form");
  gifContainer = document.getElementById("gifs-container");
  inputField = document.getElementById("new-gif-input");

  getGifs();

  gifForm.addEventListener("keydown", (event) => {
    if(event.keyCode === 13) {
      event.preventDefault();
      postGifToBackend(event.target.value);
      inputField.value = "";
    }

  });
});

const getGifs = () => {
  fetch("http://localhost:3000/gifs")
    .then(response => response.json())
    .then(data => {
      data.forEach((gif) => {
        displayGif(gif.url)
      });
    });
}

const displayGif = (gifUrl) => {
  const img = document.createElement("img");
  img.setAttribute("src", gifUrl);
  gifContainer.prepend(img);
}

const postGifToBackend = (gifUrl) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: gifUrl
    })
  };

  fetch("http://localhost:3000/gifs", config)
    .then(response => response.json())
    .then(data => displayGif(data.url));
}
