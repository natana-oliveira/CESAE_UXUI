let mudarTemaBtn = document.getElementById("btnTema");
let body = document.querySelector("body");
let trocarImg = document.getElementById("btnImagem");
let mainImg = document.getElementById("fotoPrincipal");
let addHobby = document.getElementById("btnAdicionarHobby");
let hobbiesLista = document.getElementById("listaHobbies");
let colorsRandomBtn = document.getElementById("randomColors");
let title = document.getElementById("titulo");
let intro = document.getElementById("descricao");
let editPerfil = document.getElementById("formPerfil");
let contadorUpdate = document.getElementById("contador");
let resetBtn = document.getElementById("resetPage");

// ------------------------------------------------
// ------> ALTERAR TEMA

mudarTemaBtn.addEventListener("click", function () {
  //se no body eu tenho class day (true)
  if (body.classList.contains("dayMode")) {
    body.style.backgroundColor = "black";
    body.classList.remove("dayMode");
    body.classList.add("nightMode");
  } else {
    body.style.backgroundColor = "white";
    body.classList.remove("nightMode");
    body.classList.add("dayMode");
  }
});

// ------------------------------------------------
// ------> TROCAR IMAGEM

trocarImg.addEventListener("click", function () {
  let pizza = "./images/pizza.png";
  let foto =
    "https://img.magnific.com/vetores-gratis/desenho-de-designer-grafico-minusculo-com-caneta-grande-na-tela-do-computador-criadores-no-trabalho-mulher-criativa-trabalhando-em-ilustracao-vetorial-plana-de-laptop-conceito-de-design-digital-para-banner-ou-pagina-da-web-de-destino_74855-25342.jpg?semt=ais_hybrid&w=740&q=80";

  if (mainImg.src == foto) {
    mainImg.src = pizza;
  } else {
    mainImg.src = foto;
  }
});

// ------------------------------------------------
// ------> ADICIONAR HOBBY

addHobby.addEventListener("click", function () {
  let newHobby = prompt("Qual o seu hobby?");
  let novoItemLista = document.createElement("li");
  novoItemLista.classList.add("hobby");

  novoItemLista.innerText = newHobby; //o novo elemento vai buscar o valor do prompt
  hobbiesLista.appendChild(novoItemLista);
});

// ------------------------------------------------
// ------> GERAR COR ALEATORIA

colorsRandomBtn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  colorsRandomBtn.style.backgroundColor =
    "rgb(" + r + ", " + g + ", " + b + ")";
});

// ------------------------------------------------
// ------> FORMULARIO

editPerfil.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(this);

  title.textContent = formData.get("nome");
  intro.textContent = formData.get("frase");
  body.style.backgroundColor = formData.get("cor");
  console.log(formData.get("cor"));
  mainImg.src = formData.get("novaFoto");

  // se o background for preto muda a letra para branco
  if (formData.get("cor") == "#000000") {
    body.style.color = "white";
  }

  this.reset();

  // ------> CONTADOR

  let totalAtualizacoes = localStorage.getItem("atualizacoes"); // vai ao localstorage e procuraa a chave atualizações

  // primeira vez na página não tem nenhum valor guardado (null), se for primeira vez o contador é igual a 0
  if (totalAtualizacoes == null) {
    totalAtualizacoes = 0;
  }

  //quando submete transforma em numero e soma 1 atualização com o valor atual
  totalAtualizacoes = parseInt(totalAtualizacoes) + 1;
  localStorage.setItem("atualizacoes", totalAtualizacoes); //guarda no localstorage
  contadorUpdate.textContent = totalAtualizacoes;
});

// ------------------------------------------------
// ------> TECLA E - FIM DO EX.

window.addEventListener("keydown", function (event) {
  // Janela a escuta

  if (event.key == "e") {
    alert("Tem a certeza que acabou o exercício?");
  }
});

// ------------------------------------------------
// ------> BOTÃO RESET

//falta a lista de hobbies

resetBtn.addEventListener("click", function () {
  let hobbiesCriados = document.querySelectorAll(".hobby"); // seleciona todos os novos hobbies com a nova classe

  localStorage.clear(); // limpar o localstorage

  contadorUpdate.textContent = null; // zerar contador

  title.textContent = "Meu Portfólio"; // voltar titulo

  intro.textContent = "Sou estudante de Design..."; // voltar descrição

  body.style.backgroundColor = "white"; // voltar estilo
  body.style.color = "black";

  colorsRandomBtn.style.backgroundColor = ""; //vazio volta para cor default do HTML

  // vai ao array dos novos itens criados e apaga todos
  for (let i = 0; i < hobbiesCriados.length; i++) {
    hobbiesCriados[i].remove();
  }

  mainImg.src =
    "https://img.magnific.com/vetores-gratis/desenho-de-designer-grafico-minusculo-com-caneta-grande-na-tela-do-computador-criadores-no-trabalho-mulher-criativa-trabalhando-em-ilustracao-vetorial-plana-de-laptop-conceito-de-design-digital-para-banner-ou-pagina-da-web-de-destino_74855-25342.jpg?semt=ais_hybrid&w=740&q=80";
});
