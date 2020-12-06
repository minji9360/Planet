// const body = document.querySelector("body");
// const IMG_NUMBER = 5;

// const { SingleEntryPlugin } = require("webpack");

// function paintImage(imgNumber){
//     const image = new Image();
//     image.src = `/src/img/blue${imgNumber + 1}.jpg`;
//     image.classList.add("bgImage");
//     body.appendChild(image);
// }

// function genRandom() {
//     const number = Math.floor(Math.random() * IMG_NUMBER);
//     return (number);
// }

function toggleForm(){
    var container = document.querySelector(".container");
    container.classList.toggle("active");
}

function init(){
    // const randomNumber = genRandom();
    // paintImage(1);
    window.toggleForm = toggleForm;
}

init();
