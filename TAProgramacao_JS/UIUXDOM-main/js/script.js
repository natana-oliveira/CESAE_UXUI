//vou ao documento (HTML) buscar o elemento pelo ID
let myBanner = document.getElementById("banner");
console.log(myBanner);

// ___ PASSO 1 . SELECIONAR

// Encontra apenas o primeiro elemento
let myH1 = document.querySelector("h1");
console.log(myH1);

let btnChangeMode = document.getElementById("change-mode");

// Encontra todos os elemntos (array)
// let myH1s = document.querySelectorAll("h1");
// console.log(myH1s);

// ___ PASSO 2 . MANIPULAR TEXTO
function changeLang() {
  if (myH1.innerText == "Silkie Chickens") {
    myH1.innerText = "Galinhas Sedosas";
  } else {
    myH1.innerText = "Silkie Chickens";
  }
}

// ___ PASSO 2 . MANIPULAR ATRIBUTOS: src das imagens
function changeImage() {
  let leopardoIMG =
    "https://cdn.jesshuff.com/cdn-cgi/imagedelivery/_el0QnEY9jNTqanHvIPcKg/jesshuff.com/2025/09/free-jaguar-crochet-pattern_16x9.jpg/w=1200,h=675";

  let chickenIMG =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80%22";

  if (myBanner.src == leopardoIMG) {
    myBanner.src = chickenIMG;
  } else {
    myBanner.src = leopardoIMG;
  }
}

function changeStyle() {
  let myP = document.querySelector("h2+p"); //selecionar o paragrafo que deseja (paragrafo depois do h2)

  if (myP.style.backgroundColor == "aliceblue") {
    //manipulação de estilo
    //na minha variavel myP ( o que quero mudar), acessar o style (estilo) e mudar o background
    myP.style.backgroundColor = "rgb(133, 146, 212";
    myP.style.color = "white";
  } else {
    myP.style.backgroundColor = "aliceblue";
  }

  let myLis = document.getElementsByClassName("toclevel-1");

  for (let element of myLis) {
    element.style.backgroundColor = "purple";
  }
}

function changeMode() {
  //selecionar elemento
  let body = document.querySelector("body");
  let buttons = document.querySelectorAll("button");

  //manipular as classe

  //contains retorna true or false
  //se no body eu tenho class day true
  if (body.classList.contains("day")) {
    //no BODY, na lista de classes, remove a classe DAY
    body.classList.remove("day");
    body.classList.add("night");
  } else {
    body.classList.remove("night");
    body.classList.add("day");
  }

  for (let btn of buttons) {
    if (btn.classList.contains("btn-day")) {
      //no BODY, na lista de classes, remove a classe DAY
      btn.classList.remove("btn-day");
      btn.classList.add("btn-night");
    } else {
      btn.classList.remove("btn-night");
      btn.classList.add("btn-day");
    }
  }
}

function login() {
  //1. criar elementos
  let userName = prompt("Qual seu nome?");

  //1. criar elemento do lado do JS (pode ser um paragrafo(p), uma imagem (img),)
  let myP = document.createElement("p");
  myP.innerText = "Olá " + userName; //manipular texto com innerText

  //seleccionar o pai para o elemento
  let myParent = document.getElementById("login-message");

  myParent.appendChild(myP);

  //esconder o botão depois do login
  let myBtn = myParent.previousElementSibling;
  // console.log(myBtn);
  myBtn.style.display = "none";
}

// DEIXAR O CLIQUE NO JS E NÃO NO HTML (RETIROU O onclick="changeMode()" do html)

// o botão changeMode está em espera a escuta
btnChangeMode.addEventListener("click", changeMode);
btnChangeMode.addEventListener("click", function () {
  alert("botão de modo dia e noite!");
});

// quando passer o mouse em cima do banner a função changeMode também ativa
myBanner.addEventListener("mouseover", changeMode);
