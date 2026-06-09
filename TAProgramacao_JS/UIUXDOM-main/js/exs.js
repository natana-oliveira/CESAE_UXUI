let image = document.getElementById("unicorn");
let heading = document.getElementById("mainheading");

// console.log(image);
// console.log(heading);

let doneTodos = document.getElementsByClassName("done");
// OU
// let doneTodos = document.querySelectorAll('.done');
let checkbox = document.querySelector('input[type="checkbox"]');

// console.log(doneTodos);
// console.log(checkbox);

let mySpan = document.querySelector("span");
function changeTaste() {
  if (mySpan.innerText == "Yammi") {
    mySpan.innerText = "Yack";
  } else {
    mySpan.innerText = "Yammi";
  }
}

function eggOrChicken() {
  let galinhaIMG = "https://devsprouthosting.com/images/chicken.jpg";
  let ovoIMG = "https://devsprouthosting.com/images/egg.jpg";

  let myIMG = document.querySelector("img");

  if (myIMG.src == galinhaIMG) {
    myIMG.src = ovoIMG;
  } else {
    myIMG.src = galinhaIMG;
  }
}

function changeStyle() {
  let myContainer = document.querySelector("#container");
  myContainer.textAlign = "center";

  let myIMG = document.querySelector("img");
  myIMG.style.width = "150px";
  myIMG.style.borderRadius = "50%";
}

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

  //1. selecionar os elementos
  let mySpans = document.querySelectorAll("span");

  //para cada elemento do array ele muda tudo para vermelho
  // for (let element of mySpans) {
  //      element.style.color = colors[0];
  // }

  //para cada elemento do array ele muda para uma cor do array
  let i = 0;
  for (let element of mySpans) {
    element.style.color = colors[i++];
  }
}

function changeOrder() {
  let myLi = document.querySelectorAll("li");

  //para cada elemento da lista
  for (let element of myLi) {
    //se o element na class list tem
    if (element.classList.contains("highlight")) {
      element.classList.remove("highlight");
    } else {
      element.classList.add("highlight");
    }
  }
}

function createBtns() {
  //PARA APENAS 1 BOTÃO
  // //criar botão
  // let myButton = document.createElement("button");
  // //definir texto do botão
  // myButton.innerText = "Novo Botão :)";

  // //declarar o encaixar o botão no container
  // let container = document.getElementById("container");
  // container.appendChild(myButton);

  let myContainer = document.getElementById("container");

  for (let i = 1; i < 101; i++) {
    let myBtn = document.createElement("button");
    myBtn.innerText = "Botão" + i;
    myContainer.appendChild(myBtn);
  }
}

function generateColor(max) {
  let container = document.getElementById("container");

  let r = Math.floor(Math.random() * max);
  let g = Math.floor(Math.random() * max);
  let b = Math.floor(Math.random() * max);

  let myH3 = document.querySelector("h3");
  myH3.innerText = "RGB: " + r + "  " + g + "  " + b;

  container.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
  let myParent = document.getElementById("color-message");
  myParent.appendChild(myH3);
}

function calc() {
  //Buscar o elemento pelo ID eos valores dos inputs
  let number1 = Number(document.getElementById("num1").value);
  let number2 = Number(document.getElementById("num2").value);

  // console.log(number1);
  // console.log(number2);
  // console.log(number1 + number2);

  let operator = document.getElementById("operator").value;
  let total = document.getElementById("total");

  let result = 0;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      total.innerText = "Opção inválida";
  }
  total.innerText = result;
}
