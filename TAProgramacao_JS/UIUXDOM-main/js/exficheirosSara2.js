//pp 9
let image = document.getElementById("unicorn");
let heading = document.getElementById("mainheading");
let btnEvents = document.getElementById("events");
let randomColorBtn = document.getElementById("random-color");
let createBtnsEl = document.getElementById("create-bts");

console.log(image);
console.log(heading);

//pp 12
let doneTodos = document.querySelectorAll(".done");
let checkbox = document.querySelector("input[name='scales']");

console.log(doneTodos);
console.log(checkbox);

//pp 15
function changeTaste() {
  //seleccionar
  let mySpan = document.querySelector("span");

  //manipular
  if (mySpan.innerText == "Yack") {
    mySpan.innerText = "Yammi";
  } else {
    mySpan.innerText = "Yack";
  }
}

//pp 20
function eggOrChicken() {
  let myImage = document.querySelector("img");
  let chickenImg = "https://devsprouthosting.com/images/chicken.jpg";
  let eggImg = "https://devsprouthosting.com/images/egg.jpg";

  if (myImage.src == chickenImg) {
    myImage.src = eggImg;
  } else {
    myImage.src = chickenImg;
  }
}

//pp 22
function changeStyle() {
  let myContainer = document.querySelector("#container");
  myContainer.style.textAlign = "center";

  let myImg = document.querySelector("img");

  myImg.style.width = "150px";
  myImg.style.borderRadius = "50%";
}

//pp 24
function makeRandom() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let mySpans = document.getElementsByTagName("span");

  let i = 0;

  for (let element of mySpans) {
    element.style.color = colors[i++];
  }
}

//pp 26

function changeOrder() {
  let myLis = document.querySelectorAll("li");

  for (let element of myLis) {
    console.log(element.parentElement);

    if (element.classList.contains("highlight")) {
      element.classList.remove("highlight");
    } else {
      element.classList.add("highlight");
    }
  }
}
//encaixar o botão
let myContainer = document.getElementById("container");

function createBtns() {
  for (let i = 1; i < 101; i++) {
    let myBtn = document.createElement("button");
    myBtn.innerText = "Botão" + i;
    myContainer.appendChild(myBtn);
  }
}

function randomColor() {
  let myBody = document.querySelector("body");
  let mySpan = document.querySelector("span");

  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);

  let color = "rgb(" + r + "," + b + "," + g + ")";

  // myBody.style.backgroundColor = color;
  this.style.backgroundColor = color;

  mySpan.innerText = color;
}

//pp 38
//seleccção do elemento

//funções
function twist() {
  console.log("TWIIISSTTT");
}

function shout() {
  console.log("SHHOOOUUTTT");
}

//colocar botões à escuta
btnEvents.addEventListener("click", twist);
btnEvents.addEventListener("mouseover", shout);

randomColorBtn.addEventListener("click", randomColor);
createBtnsEl.addEventListener("click", createBtns);
btnEvents.addEventListener("click", randomColor);
