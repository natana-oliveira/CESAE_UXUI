// ___________ power point 1, pg.16 ___________

// let courseName = "Desenvolvimento UI/UX";
// let courseHours = 950;

// alert("Nome do curso é " + courseName + " e o curso tem " + courseHours + "h");

//  ___________  power point 1, pg. 19 ___________

// let name = prompt("Qual é o teu nome?");

// let age = prompt("Quantos anos tem?");

// let height = prompt("Qual sua altura?");

// console.log(
//   "Olá " + name + ". Tens " + age + " anos e " + height + "m de altura.",
// );

// ___________ pp1, pg.26 ___________

// let name = prompt("Qual é o teu nome?");

// console.log("Seu nome tem " + name.length + " letras");

// console.log(
//   "A primeira letra é " +
//     name[0] +
//     " e a última letra é " +
//     name[name.length - 1],
// );

// ___________ pp1, pg.29 ___________

// let message = "TASTE THE RAINBOW! ";

// let whisper = message.toLowerCase().trim();

// console.log(whisper);

// ___________ pp1, pg.34 ___________

// let myLuckyNumber = 6;
// let myName = "Natana";

// console.log(
//   "Meu nome é " + myName + " meu número preferido é " + myLuckyNumber,
// );

// let number1 = 25;
// let number2 = 20;

// console.log(number1 + number2);

// ___________ EXSExtras ___________

// ___________ Ex.1 ___________
// let modulos = [
//   { name: "Algoritimia", hours: 25 },
//   { name: "Sites", hours: 25 },
//   { name: "Web", hours: 50 },
// ];

// alert("O cursto é " + " e tem " + "horas.");

// ___________ pp2, pg. 6 ___________

//EX.1
// let weekday = prompt("Que dia é hoje?").toLowerCase;

// if (weekday == "sexta" || "sexta-feira" || "sexta feira") {
//   alert("YYYAAYYY, sobrevivemos a mais uma semana!");
// } else {
//   alert("Está quase...");
// }

// ___________ EX.extra ___________
// let weekday = prompt("Qual o dia da semana?").toLowerCase();

// switch (weekday) {
//   case "segunda":
//   case "segunda-feira":
//     alert("Vamos lá começar a semana...");
//     break;
//   case "terça":
//   case "terça-feira":
//     alert("Passamos a segunda...");
//     break;
//   case "quarta":
//   case "quarta-feira":
//     alert("Meio da semana");
//     break;
//   case "quinta":
//   case "quinta-feira":
//     alert("Está quase...");
//     break;
//   case "sexta":
//   case "sexta-feira":
//     alert("YAY, sobrevivemos a mais uma semana!");
//     break;
//   case "sabado":
//   case "sábado":
//   case "domingo":
//   case "feriado":
//     alert("Descaanso!!");
//         break;
//   default:
//     alert("Opção inválida");
// }

// ___________ EX.2 ___________
// let password = prompt("Insira sua password:");

// if (password.length >= 6) {
//   alert("Password Válida!");
// } else {
//   alert("Password invalida");
// }

// ___________ pp2, pg. 12 ___________

// EX.1
// let count = 0;

// while (count++ < 6) {
//   alert("Da ba dee da ba daa");
// }

// ___________ EX.2 ___________
// let count = 25;

// for (let count = 25; count <= 5, (count = count - 5); ) {
//   alert(count);
// }

// ___________ AlgoritmiaFunções.pdf, pg. 4 ___________

function printHeart() {
  alert("💜💜💜💜💜");
}

function rant(message) {
  for (let i = 1; i <= 3; i++) {
    console.log((i + " odeio " + message).toUpperCase());
  }
  alert("Veja meu segredo na consola 🤫");
}

function rant(message, numTimes) {
  for (let i = 1; i <= numTimes; i++) {
    console.log((i + " odeio " + message).toUpperCase());
  }
  alert("Veja meu segredo na consola 🤫");
}

// function helloUI() {
//   alert("💛 Hello, Turma de UX/UI. Bem Vindos!! 💛");
// }

// function helloSD() {
//   alert("🩵 Hello, Turma de Software Developer. Bem Vindos!! 🩵");
// }

function helloCurso(message) {
  alert("Olá, " + message + ". Bem Vindos!");
}

function exercicio1SlideArray() {
  let notas = [12, 15, 8, 17, 20];

  let soma = 0;

  alert("Resultados na consola");

  for (let i = 0; i < notas.length; i++) {
    console.log("Nota " + i + ": " + notas[i]);

    // FORMA BÁSICA
    // soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

    soma = soma + notas[i]; //soma inicial é 0 quero somar 0 + as notas
  }
  console.log("Soma das notas: " + soma);

  let media = soma / notas.length;
  console.log("Média das notas: " + media);
}

let product = {
  name: "caderno",
  // inStock = true,
  price: 1.99,
  colors: ["vermelho", "azul", "verde"],
};

console.log("O preço é " + product.price + " e a cor é " + product.colors[2]);

product.price = 2.99;
console.log("Novo preço é " + product.price);
