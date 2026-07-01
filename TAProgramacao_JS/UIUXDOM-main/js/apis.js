//selecção dos elementos (por id #)
let btnCat = document.querySelector("#cat-fact");
let dogBtn = document.querySelector("#dog-image");
let factData = document.querySelector("#response-cat");
let loginBtn = document.querySelector("#login");
let logoutBtn = document.querySelector("#logout");

//colocar botão a escuta, a espera que alguém clique
btnCat.addEventListener("click", function () {
  //quando clicado, comunica com a API e trás os dados
  fetch("https://catfact.ninja/fact").then((Response) =>
    Response.json().then((data) => {
      // alert(data.fact); //alerta
      factData.textContent = data.fact; //escreve no paragrafo
    }),
  );
});

//colocar botão a escuta, a espera que alguém clique
dogBtn.addEventListener("click", function () {
  //quando clicado, comunica com a API e trás os dados
  fetch("https://dog.ceo/api/breeds/image/random").then((Response) =>
    Response.json().then((data) => {
      if (data.status == "success") {
        // criar o elemento imagem
        let myImg = document.createElement("img");

        //colocar na src o caminho que vem da api
        myImg.src = data.message;

        //anexar ao body
        document.body.appendChild(myImg);
      }
    }),
  );
});

//LOGIN: se tiver armazenado a chave user no localStorage, diz olá user, se não lança um prompt a perguntar o nome
loginBtn.addEventListener("click", function () {
  //se no local storage estiver algo no user
  if (localStorage.getItem("user")) {
    //alerta de Olá
    alert("Olá " + localStorage.getItem("user"));
  } else {
    //se no local storage estiver vazio
    //perguntar ao user o nome e colocar a resposta no local storage na chave user
    let userName = prompt("Qual o teu nome?");
    localStorage.setItem("user", userName);
  }
});

//LOGOUT:
logoutBtn.addEventListener("click", function () {
  if (localStorage.getItem("user")) {
    alert("Tchauzinho " + localStorage.getItem("user"));
    localStorage.removeItem("user");
  }
});
