let image = document.getElementById("unicorn");
let heading = document.getElementById("mainheading");

let randomColorBtn = document.getElementById("random-color");

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

function randomColor(max) {
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

let beatlesSong = document.getElementById("beatles");

function twist() {
  console.log("TWIIISSTTT");
}

function shout() {
  console.log("SHHOOOUUTTT");
}

// beatlesSong.addEventListener("click", twist, { once: true });
// beatlesSong.addEventListener("click", shout);

// beatlesSong.addEventListener("click", twist);
// beatlesSong.addEventListener("mouseover", shout);

//SHOPPING
// selecionar li e tornar clicavel
let product = document.querySelectorAll("li");
let myH5 = document.querySelector("h5");
let total = 0;

function removeItem() {
  console.log(this.innerText);

  total = total - this.innerText;
  myH5.innerText = "TOTAL: " + total;

  this.remove();
}

function totalCard() {}

function addProduct() {
  let productCard = document.createElement("p"); // declarar o elemento que vai ser criado

  productCard.innerText = this.innerText; // criar o elemento

  productCard.addEventListener("click", removeItem);
  // ao criar o elemento já coloco ele em escuta para poder remover

  let myParent = document.getElementById("carrinho"); // definir onde o elemento vai ser mostrado

  myParent.appendChild(productCard); //mostrar o elemento

  // trocar a cor (this porque vai em cada elemento clicado do array)
  this.style.color = "red";
  console.log(this);

  //buscar só o preço do produto (SPAN)
  let price = Number(this.querySelector("span").innerText);

  // somar total

  total = total + price;
  myH5.innerText = "TOTAL: " + total;
}

for (let element of product) {
  element.addEventListener("click", addProduct);
}

// GROCERY

// 1. chamar o form e guardar
let formGrocery = document.getElementById("myShoppingList");

// 2. colcoar espera
formGrocery.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(this);

  let groceryList = document.getElementById("groceryList");
  let itensGrocery = document.createElement("li");

  itensGrocery.innerText =
    "Produto: " +
    formData.get("product") +
    " - Quantidade: " +
    formData.get("qt");
  groceryList.appendChild(itensGrocery);

  // --- TABLE ---
  let groceryTable = document.getElementById("groceryTable");
  let itensProduct = document.createElement("column-1");
  let itensQuant = document.createElement("column-2");

  let linha = groceryTable.innerHTML;
  // console.log("linha");
  ((itensProduct.innerText = formData.get("product")),
    (itensQuant.innerText = formData.get("qt")),
    this.reset());
});
