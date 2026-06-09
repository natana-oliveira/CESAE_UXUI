let clientes = [];

function insertFullName() {
  let fullname;

  while (fullname != "fim") {
    fullname = prompt("Insira o nome completo do cliente");
    if (fullname != "fim") {
      clientes.push(fullname);
    }
  }
}

function listClients() {
  for (let i = 0; i < clientes.length; i++) {
    console.log(i + ": " + clientes[i].toUpperCase());
  }
}

function findClient() {
  position = prompt("Qual posição (index) que procurar?");

  if (position < clientes.length) {
    //MOSTRAR CLIENTE
    console.log("Cliente encontrado: " + clientes[position]);
  } else {
    console.log("Posição inválida");
  }
}

function statistic() {
  let nLongos = 0;
  let nCurtos = 0;

  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].length > 8) {
      console.log(i + ". Nome LONGO (" + clientes[i].length + " caracteres)");
      nLongos++;
    } else {
      console.log(i + ". Nome CURTO (" + clientes[i].length + " caracteres)");
      nCurtos++;
    }
  }

  console.log("Nomes longos: " + nLongos + "\nNomes curtos: " + nCurtos);
}
